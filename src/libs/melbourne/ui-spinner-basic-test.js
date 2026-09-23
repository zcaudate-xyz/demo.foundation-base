import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as lib from '../xt/lang/common-lib.js'

import * as math from '../xt/lang/common-math.js'

import * as ui_spinner_basic from './ui-spinner-basic.js'

import * as ui_text from './ui-text.js'

import * as n from '../js/react-native.js'

import * as ui_input from './ui-input.js'

// melbourne.ui-spinner-basic-test/SpinnerBasicControlsDemo [33] 
export function SpinnerBasicControlsDemo(){
  let [value,setValue] = React.useState(155);
  let [max,min,step,decimal] = [1000,0,2,2];
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-spinner-basic/SpinnerBasicControls"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner_basic.SpinnerBasicControls\n        design={{\"type\":\"light\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner_basic.SpinnerBasicControls\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_spinner_basic.SpinnerBasicControls
            design={{"type":"light"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_spinner_basic.SpinnerBasicControls
            design={{"type":"dark"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-spinner-basic-test/SpinnerBasicDemo [62] 
export function SpinnerBasicDemo(){
  let [value,setValue] = React.useState(955);
  let [max,min,step,decimal] = [1000,0,2,2];
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-spinner-basic/SpinnerBasic"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner_basic.SpinnerBasic\n        design={{\"type\":\"light\"}}\n        style={{\"width\":100}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner_basic.SpinnerBasic\n        design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner_basic.SpinnerBasic\n        design={{\"type\":\"light\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner_basic.SpinnerBasic\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner_basic.SpinnerBasic\n        design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text></ReactNative.Text>\n      <ui_spinner_basic.SpinnerBasic\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_spinner_basic.SpinnerBasic
            design={{"type":"light"}}
            style={{"width":100}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner_basic.SpinnerBasic
            design={{"type":"light","mode":"secondary"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner_basic.SpinnerBasic
            design={{"type":"light"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_spinner_basic.SpinnerBasic
            design={{"type":"dark"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner_basic.SpinnerBasic
            design={{"type":"dark","mode":"secondary"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text></ReactNative.Text>
          <ui_spinner_basic.SpinnerBasic
            design={{"type":"dark"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-spinner-basic-test/SpinnerBasicEditDemo [108] 
export function SpinnerBasicEditDemo(){
  let [value,setValue] = React.useState(955);
  let [max,min,step,decimal] = [10000,0,2,2];
  let [editShow,setEditShow] = React.useState(true);
  let [editText,setEditText] = React.useState((value / Math.pow(10,decimal)).toFixed(decimal));
  let setEditTextNumber = function (v){
    let hasDot = "." == data.last(v);
    let num = Number.parseFloat(v);
    if(data.is_emptyp(v)){
      setEditText(v);
    }
    else if(lib.not_nilp(num)){
      setEditText(num.toString() + (hasDot ? "." : ""));
    }
    else{
      setEditText(editText + (hasDot ? "." : ""));
    }
  };
  let refInput = React.useRef();
  React.useEffect(function (){
    if(editShow){
      setEditText((value / Math.pow(10,decimal)).toFixed(decimal));
    }
    else{
      setValue(math.round(lib.to_number(editText) * Math.pow(10,decimal)));
    }
  },[editShow]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-spinner-basic/SpinnerBasicEdit"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row\n      style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10,\"height\":50}}>\n      {!editShow ? (\n        <ui_spinner_basic.SpinnerBasic\n          step={step}\n          min={min}\n          style={{\n              \"marginLeft\":2,\n              \"borderRadius\":3,\n              \"alignContent\":\"center\",\n              \"width\":100,\n              \"marginTop\":2,\n              \"borderWidth\":0,\n              \"paddingVertical\":0,\n              \"justifyContent\":\"flex-end\",\n              \"marginVertical\":0,\n              \"height\":26,\n              \"marginRight\":2\n            }}\n          value={value}\n          setValue={setValue}\n          design={{\"type\":\"light\"}}\n          max={max}\n          decimal={decimal}\n          styleDigitText={{\"fontSize\":15,\"paddingTop\":3,\"marginRight\":5}}/>) : (\n        <ui_input.Input\n          value={editText}\n          onChangeText={setEditTextNumber}\n          onBlur={function (){\n              setEditShow(false);\n            }}\n          design={{\"type\":\"light\"}}\n          variant={{\"bg\":{\"key\":\"background\",\"tone\":\"darken\",\"ratio\":1}}}\n          autoFocus={true}\n          styleContainer={{\"flex\":null,\"borderWidth\":0,\"width\":100}}\n          style={{\"textAlign\":\"right\",\"fontSize\":15,\"marginTop\":0}}/>)}\n      <ui_text.ButtonAccent\n        style={{\"marginBottom\":2,\"paddingHorizontal\":5,\"paddingVertical\":4}}\n        onPress={function (){\n            setEditShow(!editShow);\n          }}\n        icon={{\"name\":editShow ? \"check\" : \"edit\"}}/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row
          style={{"backgroundColor":"#eee","flex":1,"padding":10,"height":50}}>
          {!editShow ? (
            <ui_spinner_basic.SpinnerBasic
              step={step}
              min={min}
              style={{
                  "marginLeft":2,
                  "borderRadius":3,
                  "alignContent":"center",
                  "width":100,
                  "marginTop":2,
                  "borderWidth":0,
                  "paddingVertical":0,
                  "justifyContent":"flex-end",
                  "marginVertical":0,
                  "height":26,
                  "marginRight":2
                }}
              value={value}
              setValue={setValue}
              design={{"type":"light"}}
              max={max}
              decimal={decimal}
              styleDigitText={{"fontSize":15,"paddingTop":3,"marginRight":5}}/>) : (
            <ui_input.Input
              value={editText}
              onChangeText={setEditTextNumber}
              onBlur={function (){
                  setEditShow(false);
                }}
              design={{"type":"light"}}
              variant={{"bg":{"key":"background","tone":"darken","ratio":1}}}
              autoFocus={true}
              styleContainer={{"flex":null,"borderWidth":0,"width":100}}
              style={{"textAlign":"right","fontSize":15,"marginTop":0}}/>)}
          <ui_text.ButtonAccent
            style={{"marginBottom":2,"paddingHorizontal":5,"paddingVertical":4}}
            onPress={function (){
                setEditShow(!editShow);
              }}
            icon={{"name":editShow ? "check" : "edit"}}/>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-spinner-basic-test/MODULE [199] 
export var MODULE = {
  "SpinnerBasicControlsDemo":SpinnerBasicControlsDemo,
  "SpinnerBasicDemo":SpinnerBasicDemo,
  "SpinnerBasicEditDemo":SpinnerBasicEditDemo,
  "MODULE":MODULE
};