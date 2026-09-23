import * as data from '../xt/lang/common-data.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ui_sparkline from './ui-sparkline.js'

import * as n from '../js/react-native.js'

// pune.ui-depthchart/get-depth-histogram [29] 
export function get_depth_histogram(domain,lu,step,cmp){
  let out = [0];
  let i = data.first(domain);
  while(cmp(i,data.last(domain))){
    let x = data.last(out) + (lu[i] || 0);
    out.push(x);
    i = (i + step);
  }
  return out;
}

// pune.ui-depthchart/get-depth-data [42] 
export function get_depth_data(offers){
  let {buy,sell} = offers;
  let buy_domain = data.is_emptyp(buy) ? [] : [data.first(data.last(buy)),data.first(data.first(buy))];
  let sell_domain = data.is_emptyp(sell) ? [] : [data.first(data.last(sell)),data.first(data.first(sell))];
  let max_steps = Math.max(
    data.is_emptyp(buy_domain) ? 0 : (data.second(buy_domain) - data.first(buy_domain)),
    data.is_emptyp(sell_domain) ? 0 : (data.second(sell_domain) - data.first(sell_domain)),
    10
  );
  let max_depth = Math.max(data.arr_foldl(buy,function (acc,[_,vol]){
    return acc + vol;
  },0),data.arr_foldl(sell,function (acc,[_,vol]){
    return acc + vol;
  },0),100);
  let buy_lu = data.arr_juxt(buy,data.first,data.second);
  let sell_lu = data.arr_juxt(sell,data.first,data.second);
  let buy_hist = data.is_emptyp(buy) ? data.arr_repeat(0,max_steps) : get_depth_histogram(
    [data.first(buy_domain),data.first(buy_domain) + max_steps],
    buy_lu,
    1,
    lib.lte
  );
  let sell_hist = data.is_emptyp(sell) ? data.arr_repeat(0,max_steps) : get_depth_histogram(
    [data.last(sell_domain),data.last(sell_domain) - max_steps],
    sell_lu,
    -1,
    lib.gte
  );
  return {buy_domain,buy_hist,buy_lu,max_depth,max_steps,sell_domain,sell_hist,sell_lu};
}

// pune.ui-depthchart/MarketDepthChart [93] 
export function MarketDepthChart({design,offers,control}){
  let {
    allotment = 100,
    decimal = 0,
    trade = "buy",
    prediction = "yes",
    fraction
  } = control;
  let m = get_depth_data(offers);
  let {buy_hist,max_depth,sell_hist} = m;
  return (
    <n.Row>
      <ui_sparkline.Sparkline
        maxValue={max_depth}
        variant={{
            "bg":{
                "key":(prediction == "yes") ? "primary" : "error",
                "mix":"background",
                "ratio":3
              },
            "fg":{"key":"neutral"}
          }}
        pathStyle={{"strokeWidth":1}}
        width={55}
        minValue={1}
        style={{"paddingVertical":4,"paddingLeft":2}}
        values={data.arr_reverse(sell_hist)}
        design={design}
        height={12}/>
      <ui_sparkline.Sparkline
        maxValue={max_depth}
        variant={{
            "bg":{"key":"neutral","mix":"background","ratio":3},
            "fg":{"key":"neutral"}
          }}
        pathStyle={{"strokeWidth":1}}
        width={50}
        minValue={1}
        style={{"paddingVertical":4,"paddingRight":2}}
        values={buy_hist}
        design={design}
        height={12}/>
    </n.Row>);
}

// pune.ui-depthchart/MODULE [144] 
export var MODULE = {
  "get_depth_histogram":get_depth_histogram,
  "get_depth_data":get_depth_data,
  "MarketDepthChart":MarketDepthChart,
  "MODULE":MODULE
};