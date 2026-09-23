import * as ReactNative from 'react-native'

import React from 'react'

import * as ui_spinner from './ui-spinner.js'

import * as n from '../js/react-native.js'

// melbourne.ui-spinner-test/SpinnerControlsDemo [20] 
export function SpinnerControlsDemo(){
  let [value,setValue] = React.useState(155);
  let [max,min,step,decimal] = [1000,0,2,2];
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-spinner/SpinnerControls"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner.SpinnerValues\n        design={{\"type\":\"light\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner.SpinnerControls\n        design={{\"type\":\"light\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner.SpinnerValues\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner.SpinnerControls\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_spinner.SpinnerValues
            design={{"type":"light"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner.SpinnerControls
            design={{"type":"light"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_spinner.SpinnerValues
            design={{"type":"dark"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner.SpinnerControls
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

// melbourne.ui-spinner-test/SpinnerValuesDemo [60] 
export function SpinnerValuesDemo(){
  let [value,setValue] = React.useState(155);
  let [max,min,step,decimal] = [1000,0,2,2];
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-spinner/SpinnerValues"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner.SpinnerValues\n        design={{\"type\":\"light\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner.SpinnerValues\n        design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner.SpinnerValues\n        design={{\"type\":\"light\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner.SpinnerValues\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner.SpinnerValues\n        design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text></ReactNative.Text>\n      <ui_spinner.SpinnerValues\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_spinner.SpinnerValues
            design={{"type":"light"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner.SpinnerValues
            design={{"type":"light","mode":"secondary"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner.SpinnerValues
            design={{"type":"light"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_spinner.SpinnerValues
            design={{"type":"dark"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner.SpinnerValues
            design={{"type":"dark","mode":"secondary"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text></ReactNative.Text>
          <ui_spinner.SpinnerValues
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

// melbourne.ui-spinner-test/SpinnerDemo [109] 
export function SpinnerDemo(){
  let [value,setValue] = React.useState(155);
  let [max,min,step,decimal] = [1000,0,2,2];
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-spinner/Spinner"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner.Spinner\n        design={{\"type\":\"light\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner.Spinner\n        design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner.Spinner\n        design={{\"type\":\"light\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_spinner.Spinner\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text> </ReactNative.Text>\n      <ui_spinner.Spinner\n        design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n      <ReactNative.Text></ReactNative.Text>\n      <ui_spinner.Spinner\n        design={{\"type\":\"dark\"}}\n        step={step}\n        min={min}\n        value={value}\n        setValue={setValue}\n        max={max}\n        decimal={decimal}/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_spinner.Spinner
            design={{"type":"light"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner.Spinner
            design={{"type":"light","mode":"secondary"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner.Spinner
            design={{"type":"light"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_spinner.Spinner
            design={{"type":"dark"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text> </ReactNative.Text>
          <ui_spinner.Spinner
            design={{"type":"dark","mode":"secondary"}}
            step={step}
            min={min}
            value={value}
            setValue={setValue}
            max={max}
            decimal={decimal}/>
          <ReactNative.Text></ReactNative.Text>
          <ui_spinner.Spinner
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

// melbourne.ui-spinner-test/MODULE [156] 
export var MODULE = {
  "SpinnerControlsDemo":SpinnerControlsDemo,
  "SpinnerValuesDemo":SpinnerValuesDemo,
  "SpinnerDemo":SpinnerDemo,
  "MODULE":MODULE
};