import * as ReactNative from 'react-native'

import React from 'react'

import * as physical_addon from './physical-addon.js'

import * as ui_radio_box from './ui-radio-box.js'

import * as n from '../react-native.js'

// js.react-native.ui-radio-box-test/RadioBoxSimpleDemo [24] 
export function RadioBoxSimpleDemo(){
  let [first,setFirst] = React.useState(true);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-radio-box/RadioBoxSimple"
      code={(function (){
          return "(\n  <n.Row style={{\"alignItems\":\"center\"}}>\n    <ReactNative.Text\n      style={{\"width\":80,\"fontSize\":12,\"color\":\"#333\",\"fontWeight\":\"700\"}}>RADIO\n    </ReactNative.Text>\n    <ui_radio_box.RadioBox\n      selected={first}\n      disabled={disabled}\n      highlighted={highlighted}\n      setSelected={setFirst}\n      size={30}\n      style={{\"flex\":1}}\n      theme={{\n          \"fgActive\":\"limegreen\",\n          \"fgNormal\":\"#666\",\n          \"bgActive\":\"green\",\n          \"bgNormal\":\"#444\"\n        }}\n      styleContainer={{\"flex\":1}}\n      addons={[\n          physical_addon.tagAll({\"style\":{\"paddingHorizontal\":20,\"height\":80,\"flex\":1}})\n        ]}\n      outlined={true}\n      outsideStyle={{\"borderWidth\":4}}/>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"H\"\n      onPress={function (){\n          return setHighlighted(!highlighted);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"D\"\n      onPress={function (){\n          return setDisabled(!disabled);\n        }}/>\n  </n.Row>);";
        })()}>
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>RADIO
        </ReactNative.Text>
        <ui_radio_box.RadioBox
          selected={first}
          disabled={disabled}
          highlighted={highlighted}
          setSelected={setFirst}
          size={30}
          style={{"flex":1}}
          theme={{
              "fgActive":"limegreen",
              "fgNormal":"#666",
              "bgActive":"green",
              "bgNormal":"#444"
            }}
          styleContainer={{"flex":1}}
          addons={[
              physical_addon.tagAll({"style":{"paddingHorizontal":20,"height":80,"flex":1}})
            ]}
          outlined={true}
          outsideStyle={{"borderWidth":4}}/>
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
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.ui-radio-box-test/RadioBoxDemo [73] 
export function RadioBoxDemo(){
  let [first,setFirst] = React.useState(true);
  let [second,setSecond] = React.useState(true);
  let [highlighted,setHighlighted] = React.useState(true);
  let [errored,setErrored] = React.useState(true);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-radio-box/RadioBox"
      code={(function (){
          return "(\n  <n.Row style={{\"alignItems\":\"center\"}}>\n    <ReactNative.Text\n      style={{\"width\":80,\"fontSize\":12,\"color\":\"#333\",\"fontWeight\":\"700\"}}>RADIO\n    </ReactNative.Text>\n    <ui_radio_box.RadioBox\n      theme={{\"fgActive\":\"limegreen\"}}\n      selected={first}\n      setSelected={setFirst}\n      style={{\"flex\":1}}\n      styleContainer={{\"flex\":1}}/>\n    <ReactNative.View style={{\"width\":10}}/>\n    <ui_radio_box.RadioBox\n      theme={{\n          \"fgActive\":\"black\",\n          \"fgNormal\":\"#333\",\n          \"bgNormal\":\"white\",\n          \"bgHovered\":\"#555\",\n          \"bgPressed\":\"black\"\n        }}\n      outerStyle={{\"borderWidth\":5,\"borderStyle\":\"solid\"}}\n      outlined={true}\n      selected={second}\n      setSelected={setSecond}/>\n    <ReactNative.View style={{\"width\":10}}/>\n    <ui_radio_box.RadioBox disabled={true} selected={true}/>\n    <ReactNative.View style={{\"width\":10}}/>\n    <ui_radio_box.RadioBox\n      highlighted={highlighted}\n      setSelected={setHighlighted}\n      selected={highlighted}/>\n    <ReactNative.View style={{\"width\":10}}/>\n    <ui_radio_box.RadioBox\n      highlighted={errored}\n      setSelected={setErrored}\n      selected={errored}\n      theme={{\"fgHighlighted\":\"white\",\"bgHighlighted\":\"red\"}}/>\n  </n.Row>);\n(\n  <ReactNative.View style={{\"height\":10}}/>);\n(\n  <n.Row style={{\"alignItems\":\"center\"}}>\n    <ReactNative.Text\n      style={{\"width\":80,\"fontSize\":12,\"color\":\"#333\",\"fontWeight\":\"700\"}}>RADIO\n    </ReactNative.Text>\n    <ui_radio_box.RadioBox\n      theme={{\"fgActive\":\"darkred\"}}\n      selected={first}\n      outlined={true}\n      setSelected={setFirst}\n      size={32}\n      sizeInner={18}/>\n    <ReactNative.View style={{\"width\":10}}/>\n    <ui_radio_box.RadioBox\n      theme={{\n          \"fgActive\":\"limegreen\",\n          \"fgNormal\":\"#888\",\n          \"bgNormal\":\"#aaa\",\n          \"bgPressed\":\"limegreen\",\n          \"bgHovered\":0.5,\n          \"fgHovered\":0\n        }}\n      selected={second}\n      outlined={true}\n      setSelected={setSecond}\n      size={32}\n      outerStyle={{\"borderWidth\":4,\"borderStyle\":\"solid\",\"borderRadius\":3}}\n      innerStyle={{\"borderRadius\":0}}\n      sizeInner={12}/>\n  </n.Row>);";
        })()}>
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>RADIO
        </ReactNative.Text>
        <ui_radio_box.RadioBox
          theme={{"fgActive":"limegreen"}}
          selected={first}
          setSelected={setFirst}
          style={{"flex":1}}
          styleContainer={{"flex":1}}/>
        <ReactNative.View style={{"width":10}}/>
        <ui_radio_box.RadioBox
          theme={{
              "fgActive":"black",
              "fgNormal":"#333",
              "bgNormal":"white",
              "bgHovered":"#555",
              "bgPressed":"black"
            }}
          outerStyle={{"borderWidth":5,"borderStyle":"solid"}}
          outlined={true}
          selected={second}
          setSelected={setSecond}/>
        <ReactNative.View style={{"width":10}}/>
        <ui_radio_box.RadioBox disabled={true} selected={true}/>
        <ReactNative.View style={{"width":10}}/>
        <ui_radio_box.RadioBox
          highlighted={highlighted}
          setSelected={setHighlighted}
          selected={highlighted}/>
        <ReactNative.View style={{"width":10}}/>
        <ui_radio_box.RadioBox
          highlighted={errored}
          setSelected={setErrored}
          selected={errored}
          theme={{"fgHighlighted":"white","bgHighlighted":"red"}}/>
      </n.Row>
      <ReactNative.View style={{"height":10}}/>
      <n.Row style={{"alignItems":"center"}}>
        <ReactNative.Text
          style={{"width":80,"fontSize":12,"color":"#333","fontWeight":"700"}}>RADIO
        </ReactNative.Text>
        <ui_radio_box.RadioBox
          theme={{"fgActive":"darkred"}}
          selected={first}
          outlined={true}
          setSelected={setFirst}
          size={32}
          sizeInner={18}/>
        <ReactNative.View style={{"width":10}}/>
        <ui_radio_box.RadioBox
          theme={{
              "fgActive":"limegreen",
              "fgNormal":"#888",
              "bgNormal":"#aaa",
              "bgPressed":"limegreen",
              "bgHovered":0.5,
              "fgHovered":0
            }}
          selected={second}
          outlined={true}
          setSelected={setSecond}
          size={32}
          outerStyle={{"borderWidth":4,"borderStyle":"solid","borderRadius":3}}
          innerStyle={{"borderRadius":0}}
          sizeInner={12}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}