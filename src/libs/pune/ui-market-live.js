import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from '../melbourne/ui-static.js'

import * as ui_base from '../js/react-native/physical-base.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ui_section from '../melbourne/ui-section.js'

import * as base_market from './common/data-market.js'

import * as ui_text from '../melbourne/ui-text.js'

import * as a from '../js/react-native/animate.js'

import * as n from '../js/react-native.js'

// pune.ui-market-live/live-priority-rate [29] 
export function live_priority_rate(market,allotment,prediction){
  let rate_fn = function (pair){
    let [pos,vol] = pair;
    return [base_market.position_to_rate(prediction,allotment,pos),vol];
  };
  let {ask,bid} = Object.assign({"ask":[],"bid":[]},market);
  let [buy,sell] = (prediction == "yes") ? [bid,ask] : [ask,bid];
  return {
    "buy":data.arr_reverse(data.arr_map(sell,rate_fn)),
    "sell":data.arr_reverse(data.arr_map(buy,rate_fn))
  };
}

// pune.ui-market-live/ORDER_IMPL [49] 
export var ORDER_IMPL = {
  "type":"v",
  "body":[
    {
    "type":"h",
    "body":[
      {
      "type":"p",
      "variant":{"fg":{"key":"neutral"}},
      "template":["id"]
    }
    ]
  }
  ]
};

// pune.ui-market-live/MarketLiveOrder [56] 
export function MarketLiveOrder({amount,design,orderFn,orderId,orderLookup}){
  let [changed,setChanged] = React.useState();
  let [prev,setPrev] = React.useState(amount);
  let changing = a.useBinaryIndicator(changed);
  React.useEffect(function (){
    if(prev != amount){
      setChanged(true);
      setTimeout(function (){
        setChanged(false);
      },600);
    }
  },[amount]);
  return (
    <ui_base.Box
      indicators={{changing}}
      transformations={{
          "changing":function (v){
                  return {"style":{"opacity":1 - (0.7 * v)}};
                }
        }}>
      <ui_text.ButtonAccent
        design={design}
        text={"" + amount}
        onPress={function (){
            if(orderFn){
              orderFn(orderId,orderLookup);
            }
          }}
        style={{
            "paddingVertical":0,
            "paddingHorizontal":0,
            "marginHorizontal":2,
            "marginVertical":2,
            "borderWidth":0,
            "width":40,
            "textAlign":"center"
          }}/>
    </ui_base.Box>);
}

// pune.ui-market-live/MarketLiveRow [93] 
export function MarketLiveRow({control,design,lookup,orderFn,priority,rate}){
  let {decimal,fraction,prediction} = control;
  return (
    <n.Row
      style={{"alignItems":"center","marginHorizontal":5,"marginVertical":5}}>
      <ui_static.Text design={design} variant={{"font":"h6"}} style={{"width":50}}>{(rate * fraction).toFixed(decimal)}</ui_static.Text>
      <ReactNative.View style={{"flex":1}}>
        <n.Row style={{"flexWrap":"wrap"}}>
          {priority.map(function ([order_id,amount]){
            return (
              <MarketLiveOrder
                design={design}
                amount={amount}
                orderId={order_id}
                orderFn={orderFn}
                orderLookup={lookup}
                key={order_id}/>);
          })}
        </n.Row>
      </ReactNative.View>
    </n.Row>);
}

// pune.ui-market-live/MarketLive [130] 
export function MarketLive({design,market,control,orderFn,published}){
  let {
    allotment = 100,
    decimal = 2,
    trade = "buy",
    prediction = "yes",
    rate,
    setRate
  } = control;
  let lookup = data.arr_juxt(published,data.id_fn,lib.identity);
  let fraction = Math.pow(10,-decimal);
  let priorities = live_priority_rate(market,allotment,prediction);
  let lineFn = function ([rate,priority],i){
    return (
      <MarketLiveRow
        key={rate}
        lookup={lookup}
        rate={rate}
        priority={priority}
        control={control}
        orderFn={orderFn}
        design={design}/>);
  };
  return (
    <ReactNative.View style={{"padding":3,"flex":1,"overflow":"auto"}}>
      <ReactNative.View style={{"minHeight":60,"flexDirection":"column-reverse"}}>{[...priorities.buy].reverse().map(lineFn)}</ReactNative.View>
      <ui_section.SectionSeparator
        design={design}
        variant={{"fg":{"key":"neutral"}}}
        style={{"marginVertical":3}}/>
      <ReactNative.View style={{"minHeight":60,"flexDirection":"column"}}>{priorities.sell.map(lineFn)}</ReactNative.View>
    </ReactNative.View>);
}

// pune.ui-market-live/MODULE [180] 
export var MODULE = {
  "live_priority_rate":live_priority_rate,
  "ORDER_IMPL":ORDER_IMPL,
  "MarketLiveOrder":MarketLiveOrder,
  "MarketLiveRow":MarketLiveRow,
  "MarketLive":MarketLive,
  "MODULE":MODULE
};