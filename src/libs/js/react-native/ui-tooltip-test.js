import React from 'react'

import * as ReactNative from 'react-native'

import * as ui_tooltip from './ui-tooltip.js'

import * as ui_button from './ui-button.js'

import * as n from '../react-native.js'

// js.react-native.ui-tooltip-test/TooltipPane [39] 
export function TooltipPane(){
  let [visible,setVisible] = React.useState(true);
  let [placement,setPlacement] = React.useState("content");
  let [alignment,setAlignment] = React.useState("center");
  let [position,setPosition] = React.useState("top");
  let [text,setText] = React.useState("HELLO zWORL");
  let buttonRef = React.useRef();
  return (
    <ReactNative.View style={{"flex":1}}>
      <n.Row>
        <n.Tabs
          value={alignment}
          setValue={setAlignment}
          data={["start","center","end"]}/>
        <ReactNative.Text> </ReactNative.Text>
        <n.Tabs
          value={position}
          setValue={setPosition}
          data={["top","bottom","left","left_edge","right","right_edge","centered"]}/>
        <ReactNative.Text> </ReactNative.Text>
        <n.Tabs
          value={placement}
          setValue={setPlacement}
          data={["host","content","none"]}/>
      </n.Row>
      <n.Row>
        <ReactNative.TextInput value={text} onChangeText={setText}/>
      </n.Row>
      <ReactNative.View
        style={{
            "backgroundColor":"#eee",
            "flex":1,
            "justifyContent":"center",
            "alignItems":"center"
          }}>
        <ui_tooltip.Tooltip
          hostRef={buttonRef}
          arrow={{"size":10,"margin":3,"placement":placement}}
          visible={visible}
          alignment={alignment}
          position={position}>
          <ReactNative.Text
            style={{
                "position":"absolute",
                "color":"white",
                "backgroundColor":"red",
                "borderRadius":5,
                "padding":10,
                "fontSize":12
              }}>{text}
          </ReactNative.Text>
        </ui_tooltip.Tooltip>
        <ui_button.Button
          refLink={buttonRef}
          text="ACTION"
          theme={{
              "bgNormal":"green",
              "fgNormal":"#fefefe",
              "bgPressed":"limegreen",
              "bgHovered":"limegreen"
            }}
          style={{"height":100,"width":100}}
          onPress={function (){
              return setVisible(!visible);
            }}/>
      </ReactNative.View>
    </ReactNative.View>);
}

// js.react-native.ui-tooltip-test/TooltipDemo [108] 
export function TooltipDemo(){
  let [first,setFirst] = React.useState(10);
  let [highlighted,setHighlighted] = React.useState();
  let [disabled,setDisabled] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-tooltip/Tooltip"
      style={{"height":400}}
      code={(function (){
          return "(\n  <n.Row style={{\"flex\":1}}>\n    <n.PortalProvider>\n      <n.PortalSink style={{\"flex\":1}}><TooltipPane/></n.PortalSink>\n    </n.PortalProvider>\n  </n.Row>);";
        })()}>
      <n.Row style={{"flex":1}}>
        <n.PortalProvider>
          <n.PortalSink style={{"flex":1}}><TooltipPane/></n.PortalSink>
        </n.PortalProvider>
      </n.Row>
    </n.EnclosedCodeContainer>);
}