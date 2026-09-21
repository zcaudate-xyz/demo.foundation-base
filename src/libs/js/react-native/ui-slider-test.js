import * as ReactNative from 'react-native'

import React from 'react'

import * as physical_addon from './physical-addon.js'

import * as ui_slider from './ui-slider.js'

import * as n from '../react-native.js'

// js.react-native.ui-slider-test/SliderHDemo [25] 
export function SliderHDemo(){
  let [first,setFirst] = React.useState(10);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-slider/Slider"
      code={(function (){
          return "(\n  <n.Row style={{\"alignItems\":\"center\",\"justifyContent\":\"center\"}}>\n    <ReactNative.Text\n      style={{\"width\":80,\"fontSize\":12,\"color\":\"#333\",\"fontWeight\":\"700\"}}>SliderH\n    </ReactNative.Text>\n    <ui_slider.Slider\n      min={0}\n      disabled={disabled}\n      knobStyle={{\"borderRadius\":3}}\n      value={first}\n      highlighted={highlighted}\n      setValue={setFirst}\n      theme={{\n          \"bgNormal\":\"red\",\n          \"fgNormal\":\"blue\",\n          \"bgHovered\":0.7,\n          \"fgHovered\":0.7,\n          \"bgPressed\":-0.2,\n          \"fgPressed\":0.1\n        }}\n      axisStyle={{\"borderRadius\":3}}\n      max={10}\n      addons={[\n          physical_addon.tagAll({\"style\":{\"paddingHorizontal\":20,\"height\":80,\"flex\":1}})\n        ]}\n      length={200}\n      step={2}/>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"H\"\n      onPress={function (){\n          return setHighlighted(!highlighted);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"D\"\n      onPress={function (){\n          return setDisabled(!disabled);\n        }}/>\n    <ReactNative.Text>{n.format_entry({first})}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row style={{"alignItems":"center","justifyContent":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>SliderH
        </ReactNative.Text>
        <ui_slider.Slider
          min={0}
          disabled={disabled}
          knobStyle={{"borderRadius":3}}
          value={first}
          highlighted={highlighted}
          setValue={setFirst}
          theme={{
              "bgNormal":"red",
              "fgNormal":"blue",
              "bgHovered":0.7,
              "fgHovered":0.7,
              "bgPressed":-0.2,
              "fgPressed":0.1
            }}
          axisStyle={{"borderRadius":3}}
          max={10}
          addons={[
              physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
            ]}
          length={200}
          step={2}/>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="H"
          onPress={function (){
              return setHighlighted(!highlighted);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="D"
          onPress={function (){
              return setDisabled(!disabled);
            }}/>
        <ReactNative.Text>{n.format_entry({first})}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.ui-slider-test/SliderVDemo [75] 
export function SliderVDemo(){
  let [first,setFirst] = React.useState(10);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-slider/SliderV"
      code={(function (){
          return "(\n  <n.Row style={{\"alignItems\":\"center\",\"justifyContent\":\"center\"}}>\n    <ReactNative.Text\n      style={{\"width\":80,\"fontSize\":12,\"color\":\"#333\",\"fontWeight\":\"700\"}}>SliderV\n    </ReactNative.Text>\n    <ui_slider.Slider\n      min={0}\n      disabled={disabled}\n      layout=\"vertical\"\n      knobStyle={{\"borderRadius\":3}}\n      value={first}\n      highlighted={highlighted}\n      setValue={setFirst}\n      theme={{\n          \"bgNormal\":\"red\",\n          \"fgNormal\":\"blue\",\n          \"bgHovered\":0.7,\n          \"fgHovered\":0.7,\n          \"bgPressed\":-0.2,\n          \"fgPressed\":0.1\n        }}\n      axisStyle={{\"borderRadius\":3}}\n      max={10}\n      addons={[\n          physical_addon.tagAll({\"style\":{\"paddingHorizontal\":20,\"height\":80,\"flex\":1}})\n        ]}\n      length={200}\n      step={2}/>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"H\"\n      onPress={function (){\n          return setHighlighted(!highlighted);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"D\"\n      onPress={function (){\n          return setDisabled(!disabled);\n        }}/>\n    <ReactNative.Text>{n.format_entry({first})}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row style={{"alignItems":"center","justifyContent":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>SliderV
        </ReactNative.Text>
        <ui_slider.Slider
          min={0}
          disabled={disabled}
          layout="vertical"
          knobStyle={{"borderRadius":3}}
          value={first}
          highlighted={highlighted}
          setValue={setFirst}
          theme={{
              "bgNormal":"red",
              "fgNormal":"blue",
              "bgHovered":0.7,
              "fgHovered":0.7,
              "bgPressed":-0.2,
              "fgPressed":0.1
            }}
          axisStyle={{"borderRadius":3}}
          max={10}
          addons={[
              physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
            ]}
          length={200}
          step={2}/>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="H"
          onPress={function (){
              return setHighlighted(!highlighted);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="D"
          onPress={function (){
              return setDisabled(!disabled);
            }}/>
        <ReactNative.Text>{n.format_entry({first})}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}