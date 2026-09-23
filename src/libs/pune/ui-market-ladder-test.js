import React from 'react'

import * as ReactNative from 'react-native'

import * as market_ladder from './ui-market-ladder.js'

import * as n from '../js/react-native.js'

// pune.ui-market-ladder-test/CHART [33] 
export var CHART = {
  "design":{"type":"light","color":"blue"},
  "control":{
    "allotment":100,
    "fraction":0.01,
    "rate":50,
    "prediction":"yes",
    "trade":"buy",
    "decimal":2
  },
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

// pune.ui-market-ladder-test/MarketLadderTextDemo [40] 
export function MarketLadderTextDemo(){
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-market-ladder/MarketLadderText"
      style={{"height":150}}
      code={(function (){
          return "React.createElement(market_ladder.MarketLadderText,CHART);";
        })()}>{React.createElement(market_ladder.MarketLadderText,CHART)}
    </n.EnclosedCodeContainer>);
}

// pune.ui-market-ladder-test/MarketLadderRowDemo [52] 
export function MarketLadderRowDemo(){
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-market-ladder/MarketLadderRow"
      code={(function (){
          return "React.createElement(market_ladder.MarketLadderRow,{\n  \"amount\":60,\n  \"rate\":66,\n  \"design\":{\"type\":\"light\",\"color\":\"blue\"},\n  \"control\":{\"decimal\":2,\"fraction\":0.01,\"prediction\":\"yes\"}\n});";
        })()}>
      {React.createElement(market_ladder.MarketLadderRow,{
        "amount":60,
        "rate":66,
        "design":{"type":"light","color":"blue"},
        "control":{"decimal":2,"fraction":0.01,"prediction":"yes"}
      })}
    </n.EnclosedCodeContainer>);
}

// pune.ui-market-ladder-test/MarketLadderDemo [71] 
export function MarketLadderDemo(){
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-market-ladder/MarketLadder"
      code={(function (){
          return "(\n  <n.Row>{React.createElement(market_ladder.MarketLadder,CHART)}</n.Row>);\n(\n  <ReactNative.View style={{\"height\":330}}>{React.createElement(n.TextDisplay,CHART)}</ReactNative.View>);";
        })()}>
      <n.Row>{React.createElement(market_ladder.MarketLadder,CHART)}</n.Row>
      <ReactNative.View style={{"height":330}}>{React.createElement(n.TextDisplay,CHART)}</ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// pune.ui-market-ladder-test/MODULE [83] 
export var MODULE = {
  "CHART":CHART,
  "MarketLadderTextDemo":MarketLadderTextDemo,
  "MarketLadderRowDemo":MarketLadderRowDemo,
  "MarketLadderDemo":MarketLadderDemo,
  "MODULE":MODULE
};