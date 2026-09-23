import * as ReactNative from 'react-native'

import React from 'react'

import * as ui_menu_vert from './ui-menu-vert.js'

import * as n from '../js/react-native.js'

// pune.ui-menu-vert-test/MainMenuSeperatorDemo [23] 
export function MainMenuSeperatorDemo(){
  let [show,setShow] = React.useState(true);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-menu-vert/MainMenuSeperator"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"padding\":20,\"backgroundColor\":\"#eee\"}}>\n      <ui_menu_vert.MainMenuSeperator design={{\"type\":\"light\",\"mode\":\"secondary\"}}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"padding\":20,\"backgroundColor\":\"#333\"}}>\n      <ui_menu_vert.MainMenuSeperator design={{\"type\":\"dark\",\"mode\":\"minor\"}}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"padding":20,"backgroundColor":"#eee"}}>
          <ui_menu_vert.MainMenuSeperator design={{"type":"light","mode":"secondary"}}/>
        </ReactNative.View>
        <ReactNative.View style={{"padding":20,"backgroundColor":"#333"}}>
          <ui_menu_vert.MainMenuSeperator design={{"type":"dark","mode":"minor"}}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-menu-vert-test/MainMenuButtonDemo [47] 
export function MainMenuButtonDemo(){
  let [selected0,setSelected0] = React.useState("home");
  let [selected1,setSelected1] = React.useState("account");
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-menu-vert/MainMenuButton"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#eee\"}}>\n      <ui_menu_vert.MainMenuButton\n        design={{\"type\":\"light\"}}\n        item={{\"key\":\"home\",\"icon\":\"home\",\"label\":\"HOME\"}}\n        onPress={function (){\n            return alert(\"PRESSED\");\n          }}/>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#333\"}}>\n      <ui_menu_vert.MainMenuButton\n        design={{\"type\":\"dark\"}}\n        item={{\"key\":\"home\",\"icon\":\"home\",\"label\":\"HOME\"}}\n        onPress={function (){\n            return alert(\"PRESSED\");\n          }}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_menu_vert.MainMenuButton
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            onPress={function (){
                return alert("PRESSED");
              }}/>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_menu_vert.MainMenuButton
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            onPress={function (){
                return alert("PRESSED");
              }}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-menu-vert-test/MainMenuToggleDemo [80] 
export function MainMenuToggleDemo(){
  let [selected0,setSelected0] = React.useState(true);
  let [selected1,setSelected1] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-menu-vert/MainMenuToggle"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#eee\"}}>\n      <ui_menu_vert.MainMenuToggle\n        design={{\"type\":\"light\"}}\n        item={{\"key\":\"home\",\"icon\":\"home\",\"label\":\"HOME\"}}\n        selected={selected0}\n        onPress={function (){\n            return setSelected0(!selected0);\n          }}/>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#333\"}}>\n      <ui_menu_vert.MainMenuToggle\n        design={{\"type\":\"dark\"}}\n        item={{\"key\":\"home\",\"icon\":\"home\",\"label\":\"HOME\"}}\n        selected={selected1}\n        onPress={function (){\n            return setSelected1(!selected1);\n          }}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_menu_vert.MainMenuToggle
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            selected={selected0}
            onPress={function (){
                return setSelected0(!selected0);
              }}/>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_menu_vert.MainMenuToggle
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            selected={selected1}
            onPress={function (){
                return setSelected1(!selected1);
              }}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-menu-vert-test/MainMenuRouteDemo [115] 
export function MainMenuRouteDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("account");
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-menu-vert/MainMenuRoute"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#eee\"}}>\n      <ui_menu_vert.MainMenuRoute\n        design={{\"type\":\"light\"}}\n        item={{\"key\":\"home\",\"icon\":\"home\",\"label\":\"HOME\"}}\n        routeKey={routeKey0}\n        setRouteKey={setRouteKey0}/>\n      <ui_menu_vert.MainMenuRoute\n        design={{\"type\":\"light\"}}\n        item={{\"key\":\"account\",\"icon\":\"user\",\"label\":\"ACCOUNT\"}}\n        routeKey={routeKey0}\n        setRouteKey={setRouteKey0}/>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\"padding\":5,\"paddingRight\":100,\"backgroundColor\":\"#333\"}}>\n      <ui_menu_vert.MainMenuRoute\n        design={{\"type\":\"dark\"}}\n        item={{\"key\":\"home\",\"icon\":\"home\",\"label\":\"HOME\"}}\n        routeKey={routeKey1}\n        setRouteKey={setRouteKey1}/>\n      <ui_menu_vert.MainMenuRoute\n        design={{\"type\":\"dark\"}}\n        item={{\"key\":\"account\",\"icon\":\"user\",\"label\":\"ACCOUNT\"}}\n        routeKey={routeKey1}\n        setRouteKey={setRouteKey1}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#eee"}}>
          <ui_menu_vert.MainMenuRoute
            design={{"type":"light"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}/>
          <ui_menu_vert.MainMenuRoute
            design={{"type":"light"}}
            item={{"key":"account","icon":"user","label":"ACCOUNT"}}
            routeKey={routeKey0}
            setRouteKey={setRouteKey0}/>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":5,"paddingRight":100,"backgroundColor":"#333"}}>
          <ui_menu_vert.MainMenuRoute
            design={{"type":"dark"}}
            item={{"key":"home","icon":"home","label":"HOME"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}/>
          <ui_menu_vert.MainMenuRoute
            design={{"type":"dark"}}
            item={{"key":"account","icon":"user","label":"ACCOUNT"}}
            routeKey={routeKey1}
            setRouteKey={setRouteKey1}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-menu-vert-test/MainMenuMiniContextDemo [164] 
export function MainMenuMiniContextDemo(){
  let [visible,setVisible] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-menu-vert/MainMenuMiniContext"
      code={(function (){
          return "(\n  <n.Row style={{\"paddingRight\":90,\"backgroundColor\":\"#eee\"}}>\n    <ui_menu_vert.MainMenuMiniContext\n      design={{\"type\":\"dark\"}}\n      visible={visible}\n      setVisible={setVisible}>\n      <ReactNative.View>\n        <ReactNative.Button title=\"Link A\"/>\n        <ReactNative.Button title=\"Link B\"/>\n        <ReactNative.Button title=\"Link C\"/>\n      </ReactNative.View>\n    </ui_menu_vert.MainMenuMiniContext>\n  </n.Row>);";
        })()}>
      <n.Row style={{"paddingRight":90,"backgroundColor":"#eee"}}>
        <ui_menu_vert.MainMenuMiniContext
          design={{"type":"dark"}}
          visible={visible}
          setVisible={setVisible}>
          <ReactNative.View>
            <ReactNative.Button title="Link A"/>
            <ReactNative.Button title="Link B"/>
            <ReactNative.Button title="Link C"/>
          </ReactNative.View>
        </ui_menu_vert.MainMenuMiniContext>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-menu-vert-test/MainMenuDemo [188] 
export function MainMenuDemo(){
  let [routeKey0,setRouteKey0] = React.useState("home");
  let [routeKey1,setRouteKey1] = React.useState("user");
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-menu-vert/MainMenu"
      code={(function (){
          return "(\n  <n.PortalSink>\n    <n.Row>\n      <ReactNative.View style={{\"paddingRight\":90,\"backgroundColor\":\"#eee\"}}>\n        <ui_menu_vert.MainMenu\n          design={{\"type\":\"light\"}}\n          items={[\n              {\"key\":\"home\",\"icon\":\"home\",\"label\":\"HOME\"},\n              {\"component\":ui_menu_vert.MainMenuSeperator},\n              {\"key\":\"account\",\"icon\":\"user\",\"label\":\"ACCOUNT\"},\n              {\"key\":\"market\",\"icon\":\"line-graph\",\"label\":\"MARKET\"}\n            ]}\n          routeKey={routeKey0}\n          setRouteKey={setRouteKey0}/>\n      </ReactNative.View>\n      <ReactNative.View style={{\"paddingRight\":90,\"backgroundColor\":\"#333\"}}>\n        <ui_menu_vert.MainMenu\n          design={{\"type\":\"dark\"}}\n          items={[\n              {\"key\":\"home\",\"icon\":\"home\",\"label\":\"HOME\"},\n              {\"component\":ui_menu_vert.MainMenuSeperator},\n              {\"key\":\"account\",\"icon\":\"user\",\"label\":\"ACCOUNT\"},\n              {\"key\":\"market\",\"icon\":\"line-graph\",\"label\":\"MARKET\"}\n            ]}\n          routeKey={routeKey1}\n          setRouteKey={setRouteKey1}/>\n      </ReactNative.View>\n    </n.Row>\n  </n.PortalSink>);";
        })()}>
      <n.PortalSink>
        <n.Row>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#eee"}}>
            <ui_menu_vert.MainMenu
              design={{"type":"light"}}
              items={[
                  {"key":"home","icon":"home","label":"HOME"},
                  {"component":ui_menu_vert.MainMenuSeperator},
                  {"key":"account","icon":"user","label":"ACCOUNT"},
                  {"key":"market","icon":"line-graph","label":"MARKET"}
                ]}
              routeKey={routeKey0}
              setRouteKey={setRouteKey0}/>
          </ReactNative.View>
          <ReactNative.View style={{"paddingRight":90,"backgroundColor":"#333"}}>
            <ui_menu_vert.MainMenu
              design={{"type":"dark"}}
              items={[
                  {"key":"home","icon":"home","label":"HOME"},
                  {"component":ui_menu_vert.MainMenuSeperator},
                  {"key":"account","icon":"user","label":"ACCOUNT"},
                  {"key":"market","icon":"line-graph","label":"MARKET"}
                ]}
              routeKey={routeKey1}
              setRouteKey={setRouteKey1}/>
          </ReactNative.View>
        </n.Row>
      </n.PortalSink>
    </n.EnclosedCodeContainer>);
}

// pune.ui-menu-vert-test/MODULE [234] 
export var MODULE = {
  "MainMenuSeperatorDemo":MainMenuSeperatorDemo,
  "MainMenuButtonDemo":MainMenuButtonDemo,
  "MainMenuToggleDemo":MainMenuToggleDemo,
  "MainMenuRouteDemo":MainMenuRouteDemo,
  "MainMenuMiniContextDemo":MainMenuMiniContextDemo,
  "MainMenuDemo":MainMenuDemo,
  "MODULE":MODULE
};