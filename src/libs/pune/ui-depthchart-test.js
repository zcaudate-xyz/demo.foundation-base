import React from 'react'

import * as ReactNative from 'react-native'

import * as depthchart from './ui-depthchart.js'

import * as base_market from './common/data-market.js'

import * as n from '../js/react-native.js'

// pune.ui-depthchart-test/CHART [32] 
export var CHART = {
  "control":{"allotment":100,"prediction":"yes","trade":"buy"},
  "market":{
    "last":65,
    "ask":{"total":2,"range":[66,67],"volume":[[66,60],[67,80]]},
    "meta":{
      "key":"BD95893A-2F41-435D-AD1D-DC48EC2926AB",
      "__type__":"TYPE/BOOK",
      "code":"NBA/MVP-2022/J.EMBID/BD95893A-2F41-435D-AD1D-DC48EC2926AB"
    },
    "bid":{"total":4,"range":[63,65],"volume":[[63,100],[64,60],[65,75]]},
    "frame":8,
    "spread":[1,65,66]
  }
};

// pune.ui-depthchart-test/MarketDepthChartDemo [74] 
export function MarketDepthChartDemo(){
  let {control,market} = CHART;
  let {allotment,prediction} = control;
  let offers = base_market.live_offers_rate(market,allotment,prediction,20);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-depthchart/MarketDepthChart"
      style={{"height":500}}
      code={(function (){
          return "React.createElement(\n  depthchart.MarketDepthChart,\n  {\"design\":{\"type\":\"light\"},\"offers\":offers,\"control\":control}\n);\n(\n  <ReactNative.View style={{\"height\":10}}/>);\nReact.createElement(n.TextDisplay,CHART);";
        })()}>
      {React.createElement(
        depthchart.MarketDepthChart,
        {"design":{"type":"light"},"offers":offers,"control":control}
      )}
      <ReactNative.View style={{"height":10}}/>
      {React.createElement(n.TextDisplay,CHART)}
    </n.EnclosedCodeContainer>);
}

// pune.ui-depthchart-test/MODULE [91] 
export var MODULE = {
  "CHART":CHART,
  "MarketDepthChartDemo":MarketDepthChartDemo,
  "MODULE":MODULE
};