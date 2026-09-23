import React from 'react'

import * as ReactNative from 'react-native'

import * as ui_static from '../melbourne/ui-static.js'

import * as r from '../js/react.js'

import * as ui_section from '../melbourne/ui-section.js'

import * as base_market from './common/data-market.js'

import * as n from '../js/react-native.js'

// pune.ui-market-ladder/MarketLadderText [19] 
export function MarketLadderText({market,allotment,decimal,prediction}){
  let frac = Math.pow(10,-decimal);
  let offers = base_market.live_offers_rate(market,allotment,prediction,6);
  return (
    <ui_static.ScrollView>
      <n.Row>
        <n.TextDisplay market={market}/>
        <n.TextDisplay offers={offers}/>
      </n.Row>
    </ui_static.ScrollView>);
}

// pune.ui-market-ladder/MarketLadderRow [38] 
export function MarketLadderRow({amount,control,design,rate}){
  let {fraction = 1,prediction = "yes",decimal = 0} = control;
  let [prevAmount,setPrevAmount] = React.useState(amount);
  let isMounted = r.useIsMounted();
  React.useEffect(function (){
    setTimeout(function (){
      new Promise(function (){
        if(isMounted()){
          setPrevAmount(amount);
        }
      });
    },1000);
    null;
  },[amount]);
  return (
    <n.Row style={{"marginHorizontal":5}}>
      <ui_static.Text
        design={design}
        variant={(amount != prevAmount) ? {
            "font":"h6",
            "fg":{"key":"background"},
            "bg":{"key":("no" == prediction) ? "error" : "primary"}
          } : {"font":"h6"}}>{(rate * fraction).toFixed(decimal)}
      </ui_static.Text>
      <n.Fill/>
      <ui_static.Text design={design}>{amount}</ui_static.Text>
    </n.Row>);
}

// pune.ui-market-ladder/MarketLadder [73] 
export function MarketLadder({design,market,control,steps = 15}){
  let {
    allotment = 100,
    decimal = 0,
    trade = "buy",
    prediction = "yes",
    fraction = 1,
    rate,
    setRate
  } = control;
  let offers = base_market.live_offers_rate(market,allotment,prediction,steps);
  let segment = base_market.segment_price(rate,offers);
  let lineFn = function ([rate,amount],i){
    return (
      <MarketLadderRow
        key={rate}
        amount={amount}
        rate={rate}
        control={control}
        design={design}/>);
  };
  return (
    <ReactNative.View style={{"padding":3,"flex":1}}>
      <ReactNative.View
        style={{
            "minHeight":60,
            "flex":1,
            "flexDirection":"column-reverse",
            "overflow":"hidden"
          }}>{[...offers.buy].reverse().map(lineFn)}
      </ReactNative.View>
      <ui_section.SectionSeparator
        design={design}
        variant={{"fg":{"key":"neutral"}}}
        style={{"marginVertical":3}}/>
      <ReactNative.View
        style={{
            "minHeight":60,
            "flex":1,
            "flexDirection":"column",
            "overflow":"hidden"
          }}>{offers.sell.map(lineFn)}
      </ReactNative.View>
    </ReactNative.View>);
}

// pune.ui-market-ladder/MODULE [125] 
export var MODULE = {
  "MarketLadderText":MarketLadderText,
  "MarketLadderRow":MarketLadderRow,
  "MarketLadder":MarketLadder,
  "MODULE":MODULE
};