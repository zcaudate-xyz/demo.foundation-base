import * as ReactNative from 'react-native'

import React from 'react'

import * as ui_static from './ui-static.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

// melbourne.ui-static-test/DivDemo [26] 
export function DivDemo(){
  let [color,setColor] = React.useState("teal");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-static/Div"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}/>\n  </n.Row>);\n(\n  <n.Row>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color,\"invert\":true}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}\n      variant={{\"bg\":{\"key\":\"primary\"}}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}\n      variant={{\"bg\":{\"key\":\"neutral\",\"tone\":\"augment\"}}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}\n      variant={{\"bg\":{\"key\":\"neutral\",\"tone\":\"diminish\"}}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}\n      variant={{\"bg\":{\"key\":\"primary\",\"tone\":\"sharpen\"}}}/>\n  </n.Row>);\n(\n  <n.Row>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color,\"invert\":true}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}\n      variant={{\"bg\":{\"key\":\"primary\"}}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}\n      variant={{\"bg\":{\"key\":\"neutral\",\"tone\":\"augment\"}}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}\n      variant={{\"bg\":{\"key\":\"neutral\",\"tone\":\"diminish\"}}}/>\n    <ui_static.Div\n      style={{\"height\":100,\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}\n      variant={{\"bg\":{\"key\":\"primary\",\"tone\":\"sharpen\"}}}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}/>
      </n.Row>
      <n.Row>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color,"invert":true}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}
          variant={{"bg":{"key":"primary"}}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}
          variant={{"bg":{"key":"neutral","tone":"augment"}}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}
          variant={{"bg":{"key":"neutral","tone":"diminish"}}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"light","color":color}}
          variant={{"bg":{"key":"primary","tone":"sharpen"}}}/>
      </n.Row>
      <n.Row>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color,"invert":true}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"bg":{"key":"primary"}}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"bg":{"key":"neutral","tone":"augment"}}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"bg":{"key":"neutral","tone":"diminish"}}}/>
        <ui_static.Div
          style={{"height":100,"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"bg":{"key":"primary","tone":"sharpen"}}}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-static-test/TextDemo [120] 
export function TextDemo(){
  let [color,setColor] = React.useState("teal");
  let [type,setType] = React.useState("light");
  let [foil,setFoil] = React.useState("background");
  let [tone,setTone] = React.useState("augment");
  let palette = base_palette.createPalette(type,color);
  return (
    <n.EnclosedCodeContainer
      key={color + "." + type}
      label="melbourne.ui-static/Text"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}/>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}/>\n  </n.Row>);\n(\n  <n.Row>\n    <n.Tabs\n      data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n      value={foil}\n      setValue={setFoil}/>\n  </n.Row>);\n(\n  <ReactNative.View\n    style={{\n        \"backgroundColor\":base_palette.getColorRaw(palette,foil || \"background\")\n      }}>\n    {[\"primary\",\"background\",\"neutral\",\"error\"].flatMap(function (key){\n      return [\"flatten\",\"diminish\",\"default\",\"augment\",\"sharpen\"].map(function (tone){\n        return (\n          <ui_static.Text\n            key={key + \".\" + tone}\n            design={{\"type\":type,\"color\":color}}\n            variant={{\"font\":\"h4\",\"fg\":{\"key\":key,\"tone\":tone}}}>{(key + \" \" + tone).toUpperCase()}\n          </ui_static.Text>);\n      });\n    })}\n  </ReactNative.View>);";
        })()}>
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}/>
        <ReactNative.Text>   </ReactNative.Text>
        <n.Tabs data={["light","dark"]} value={type} setValue={setType}/>
      </n.Row>
      <n.Row>
        <n.Tabs
          data={["background","primary","neutral","error"]}
          value={foil}
          setValue={setFoil}/>
      </n.Row>
      <ReactNative.View
        style={{
            "backgroundColor":base_palette.getColorRaw(palette,foil || "background")
          }}>
        {["primary","background","neutral","error"].flatMap(function (key){
          return ["flatten","diminish","default","augment","sharpen"].map(function (tone){
            return (
              <ui_static.Text
                key={key + "." + tone}
                design={{"type":type,"color":color}}
                variant={{"font":"h4","fg":{"key":key,"tone":tone}}}>{(key + " " + tone).toUpperCase()}
              </ui_static.Text>);
          });
        })}
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-static-test/SeparatorDemo [170] 
export function SeparatorDemo(){
  let [color,setColor] = React.useState("teal");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-static/Separator"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}/>\n  </n.Row>);\n(\n  <n.Row>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color,\"invert\":true}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}\n      variant={{\"fg\":{\"key\":\"primary\"}}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}\n      variant={{\"fg\":{\"key\":\"neutral\",\"tone\":\"augment\"}}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}\n      variant={{\"fg\":{\"key\":\"neutral\",\"tone\":\"diminish\"}}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"light\",\"color\":color}}\n      variant={{\"fg\":{\"key\":\"primary\",\"tone\":\"sharpen\"}}}/>\n  </n.Row>);\n(\n  <n.Row>\n    <ui_static.Separator style={{\"width\":100}} design={{\"type\":\"dark\",\"color\":color}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color,\"invert\":true}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}\n      variant={{\"fg\":{\"key\":\"primary\"}}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}\n      variant={{\"fg\":{\"key\":\"neutral\",\"tone\":\"augment\"}}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}\n      variant={{\"fg\":{\"key\":\"neutral\",\"tone\":\"diminish\"}}}/>\n    <ui_static.Separator\n      style={{\"width\":100}}\n      design={{\"type\":\"dark\",\"color\":color}}\n      variant={{\"fg\":{\"key\":\"primary\",\"tone\":\"sharpen\"}}}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}/>
      </n.Row>
      <n.Row>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color,"invert":true}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}
          variant={{"fg":{"key":"primary"}}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}
          variant={{"fg":{"key":"neutral","tone":"augment"}}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}
          variant={{"fg":{"key":"neutral","tone":"diminish"}}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"light","color":color}}
          variant={{"fg":{"key":"primary","tone":"sharpen"}}}/>
      </n.Row>
      <n.Row>
        <ui_static.Separator style={{"width":100}} design={{"type":"dark","color":color}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color,"invert":true}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"fg":{"key":"primary"}}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"fg":{"key":"neutral","tone":"augment"}}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"fg":{"key":"neutral","tone":"diminish"}}}/>
        <ui_static.Separator
          style={{"width":100}}
          design={{"type":"dark","color":color}}
          variant={{"fg":{"key":"primary","tone":"sharpen"}}}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-static-test/ScrollViewDemo [252] 
export function ScrollViewDemo(){
  let [color,setColor] = React.useState("teal");
  let [type,setType] = React.useState("light");
  let [foil,setFoil] = React.useState("background");
  let [tone,setTone] = React.useState("augment");
  return (
    <n.EnclosedCodeContainer
      key={color + "." + type}
      label="melbourne.ui-static/ScrollView"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}/>\n    <ReactNative.Text>   </ReactNative.Text>\n    <n.Tabs data={[\"light\",\"dark\"]} value={type} setValue={setType}/>\n  </n.Row>);\n(\n  <n.Row>\n    <n.Tabs\n      data={[\"background\",\"primary\",\"neutral\",\"error\"]}\n      value={foil}\n      setValue={setFoil}/>\n    <n.Tabs\n      data={[\"augment\",\"diminish\",\"flatten\",\"sharpen\"]}\n      value={tone}\n      setValue={setTone}/>\n  </n.Row>);\n(\n  <ui_static.ScrollView\n    design={{\"type\":type,\"color\":color}}\n    variant={{\"bg\":{\"key\":foil,\"tone\":tone}}}\n    style={{\"height\":300,\"width\":300}}>\n    <ReactNative.View style={{\"width\":400,\"height\":800,\"backgroundColor\":\"#333\"}}/>\n  </ui_static.ScrollView>);";
        })()}>
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}/>
        <ReactNative.Text>   </ReactNative.Text>
        <n.Tabs data={["light","dark"]} value={type} setValue={setType}/>
      </n.Row>
      <n.Row>
        <n.Tabs
          data={["background","primary","neutral","error"]}
          value={foil}
          setValue={setFoil}/>
        <n.Tabs
          data={["augment","diminish","flatten","sharpen"]}
          value={tone}
          setValue={setTone}/>
      </n.Row>
      <ui_static.ScrollView
        design={{"type":type,"color":color}}
        variant={{"bg":{"key":foil,"tone":tone}}}
        style={{"height":300,"width":300}}>
        <ReactNative.View style={{"width":400,"height":800,"backgroundColor":"#333"}}/>
      </ui_static.ScrollView>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-static-test/TextTooltipDemo [297] 
export function TextTooltipDemo(){
  let [color,setColor] = React.useState("teal");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-static/TextTooltip"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}/>\n  </n.Row>);\n(\n  <ui_static.TextTooltip design={{\"type\":\"light\"}} content=\"HELLO WORLD\"/>);";
        })()}>
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}/>
      </n.Row>
      <ui_static.TextTooltip design={{"type":"light"}} content="HELLO WORLD"/>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-static-test/TextDisplayDemo [316] 
export function TextDisplayDemo(){
  let [color,setColor] = React.useState("teal");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-static/TextDisplay"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Tabs\n      data={[\"purple\",\"teal\",\"blue\",\"green\"]}\n      value={color}\n      setValue={setColor}/>\n  </n.Row>);\n(\n  <ui_static.TextDisplay design={{\"type\":\"light\"}} content=\"HELLO WORLD\"/>);";
        })()}>
      <n.Row>
        <n.Tabs
          data={["purple","teal","blue","green"]}
          value={color}
          setValue={setColor}/>
      </n.Row>
      <ui_static.TextDisplay design={{"type":"light"}} content="HELLO WORLD"/>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-static-test/MODULE [333] 
export var MODULE = {
  "DivDemo":DivDemo,
  "TextDemo":TextDemo,
  "SeparatorDemo":SeparatorDemo,
  "ScrollViewDemo":ScrollViewDemo,
  "TextTooltipDemo":TextTooltipDemo,
  "TextDisplayDemo":TextDisplayDemo,
  "MODULE":MODULE
};