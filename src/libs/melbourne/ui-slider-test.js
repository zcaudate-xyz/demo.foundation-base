import * as ReactNative from 'react-native'

import React from 'react'

import * as ui_slider from './ui-slider.js'

import * as n from '../js/react-native.js'

// melbourne.ui-slider-test/SliderHDemo [20] 
export function SliderHDemo(){
  let [value,setValue] = React.useState(5);
  return (
    <n.EnclosedCodeContainer
      label=" melbourne.ui-slider/SliderH"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_slider.Slider\n        design={{\"type\":\"light\"}}\n        length={200}\n        value={value}\n        setValue={setValue}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_slider.Slider\n        design={{\"type\":\"dark\"}}\n        length={200}\n        value={value}\n        setValue={setValue}/>\n    </n.Row>\n  </n.Row>);\n(\n  <ReactNative.Text>{n.format_entry({value})}</ReactNative.Text>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_slider.Slider
            design={{"type":"light"}}
            length={200}
            value={value}
            setValue={setValue}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_slider.Slider
            design={{"type":"dark"}}
            length={200}
            value={value}
            setValue={setValue}/>
        </n.Row>
      </n.Row>
      <ReactNative.Text>{n.format_entry({value})}</ReactNative.Text>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-slider-test/SliderVDemo [48] 
export function SliderVDemo(){
  let [value,setValue] = React.useState(55);
  return (
    <n.EnclosedCodeContainer
      label=" melbourne.ui-slider/SliderV"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_slider.Slider\n        design={{\"type\":\"light\"}}\n        length={200}\n        layout=\"vertical\"\n        max={99}\n        min={1}\n        step={1}\n        value={value}\n        setValue={setValue}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_slider.Slider\n        design={{\"type\":\"dark\"}}\n        length={200}\n        layout=\"vertical\"\n        max={99}\n        min={1}\n        step={1}\n        value={value}\n        setValue={setValue}/>\n    </n.Row>\n  </n.Row>);\n(\n  <ReactNative.Text>{n.format_entry({value})}</ReactNative.Text>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_slider.Slider
            design={{"type":"light"}}
            length={200}
            layout="vertical"
            max={99}
            min={1}
            step={1}
            value={value}
            setValue={setValue}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_slider.Slider
            design={{"type":"dark"}}
            length={200}
            layout="vertical"
            max={99}
            min={1}
            step={1}
            value={value}
            setValue={setValue}/>
        </n.Row>
      </n.Row>
      <ReactNative.Text>{n.format_entry({value})}</ReactNative.Text>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-slider-test/MODULE [82] 
export var MODULE = {
  "SliderHDemo":SliderHDemo,
  "SliderVDemo":SliderVDemo,
  "MODULE":MODULE
};