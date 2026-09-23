import * as ReactNative from 'react-native'

import React from 'react'

import * as market_delta from './ui-market-delta.js'

import * as n from '../js/react-native.js'

// pune.ui-market-delta-test/DeltaDemo [36] 
export function DeltaDemo(){
  let [value,setValue] = React.useState(100);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-market-delta/Delta"
      code={(function (){
          return "(\n  <n.Row>\n    <market_delta.Delta value={value}/>\n    <n.Fill/>\n    <n.Row>\n      <ReactNative.Button\n        title=\"-1\"\n        style={{\"fontSize\":10}}\n        onPress={function (){\n            setValue(value - 1);\n          }}/>\n      <ReactNative.View style={{\"width\":10}}/>\n      <ReactNative.Button\n        title=\"+1\"\n        onPress={function (){\n            setValue(value + 1);\n          }}/>\n    </n.Row>\n  </n.Row>);\n(\n  <n.Caption\n    text={JSON.stringify({value})}\n    style={{\"marginTop\":10,\"zIndex\":-100}}/>);";
        })()}>
      <n.Row>
        <market_delta.Delta value={value}/>
        <n.Fill/>
        <n.Row>
          <ReactNative.Button
            title="-1"
            style={{"fontSize":10}}
            onPress={function (){
                setValue(value - 1);
              }}/>
          <ReactNative.View style={{"width":10}}/>
          <ReactNative.Button
            title="+1"
            onPress={function (){
                setValue(value + 1);
              }}/>
        </n.Row>
      </n.Row>
      <n.Caption
        text={JSON.stringify({value})}
        style={{"marginTop":10,"zIndex":-100}}/>
    </n.EnclosedCodeContainer>);
}

// pune.ui-market-delta-test/MODULE [60] 
export var MODULE = {"DeltaDemo":DeltaDemo,"MODULE":MODULE};