import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../js/react-native.js'

import * as ui_input_xl from './ui-input-xl.js'

// melbourne.ui-input-xl-test/InputPlaceHolderDemo [20] 
export function InputPlaceHolderDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-input-xl/inputPlaceHolder"
      code={(function (){
          return "(\n  <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":20}}/>);";
        })()}>
      <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}/>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-input-xl-test/InputXLDemo [34] 
export function InputXLDemo(){
  let [value,setValue] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-input-xl/InputXL"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_input_xl.InputXL\n        value={value}\n        onChangeText={setValue}\n        placeholder=\"Enter your Name\"/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_input_xl.InputXL\n        value={value}\n        onChangeText={setValue}\n        design={{\"type\":\"dark\"}}\n        placeholder=\"Enter your Name\"/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_input_xl.InputXL
            value={value}
            onChangeText={setValue}
            placeholder="Enter your Name"/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_input_xl.InputXL
            value={value}
            onChangeText={setValue}
            design={{"type":"dark"}}
            placeholder="Enter your Name"/>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-input-xl-test/MODULE [61] 
export var MODULE = {
  "InputPlaceHolderDemo":InputPlaceHolderDemo,
  "InputXLDemo":InputXLDemo,
  "MODULE":MODULE
};