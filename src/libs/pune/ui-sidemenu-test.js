import React from 'react'

import * as ReactNative from 'react-native'

import * as ui_sidemenu from './ui-sidemenu.js'

import * as n from '../js/react-native.js'

// pune.ui-sidemenu-test/SideMenuTitleDemo [20] 
export function SideMenuTitleDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-sidemenu/SideMenuTitle"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\n          \"padding\":10,\n          \"height\":100,\n          \"flexDirection\":\"column-reverse\",\n          \"paddingRight\":40,\n          \"backgroundColor\":\"#eee\"\n        }}>\n      <ui_sidemenu.SideMenuTitle\n        design={{\"type\":\"light\"}}\n        style={{\"height\":100}}\n        title=\"HELLO\"/>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\n          \"padding\":10,\n          \"height\":100,\n          \"flexDirection\":\"column-reverse\",\n          \"paddingRight\":40,\n          \"backgroundColor\":\"#333\"\n        }}>\n      <ui_sidemenu.SideMenuTitle design={{\"type\":\"dark\"}} style={{\"height\":100}} title=\"HELLO\"/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View
          style={{
              "padding":10,
              "height":100,
              "flexDirection":"column-reverse",
              "paddingRight":40,
              "backgroundColor":"#eee"
            }}>
          <ui_sidemenu.SideMenuTitle
            design={{"type":"light"}}
            style={{"height":100}}
            title="HELLO"/>
        </ReactNative.View>
        <ReactNative.View
          style={{
              "padding":10,
              "height":100,
              "flexDirection":"column-reverse",
              "paddingRight":40,
              "backgroundColor":"#333"
            }}>
          <ui_sidemenu.SideMenuTitle design={{"type":"dark"}} style={{"height":100}} title="HELLO"/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-sidemenu-test/SideMenuListDemo [52] 
export function SideMenuListDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-sidemenu/SideMenuList"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\"padding\":10,\"paddingRight\":40,\"backgroundColor\":\"#eee\"}}>\n      <ui_sidemenu.SideMenuList\n        design={{\"type\":\"light\"}}\n        data={[\"Security\",\"Profile\",\"Notifications\",\"Organisation\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}/>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\"padding\":10,\"paddingRight\":40,\"backgroundColor\":\"#333\"}}>\n      <ui_sidemenu.SideMenuList\n        design={{\"type\":\"dark\"}}\n        data={[\"Security\",\"Profile\",\"Notifications\",\"Organisation\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View
          style={{"padding":10,"paddingRight":40,"backgroundColor":"#eee"}}>
          <ui_sidemenu.SideMenuList
            design={{"type":"light"}}
            data={["Security","Profile","Notifications","Organisation"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}/>
        </ReactNative.View>
        <ReactNative.View
          style={{"padding":10,"paddingRight":40,"backgroundColor":"#333"}}>
          <ui_sidemenu.SideMenuList
            design={{"type":"dark"}}
            data={["Security","Profile","Notifications","Organisation"]}
            routeKey={routeKey}
            setRouteKey={setRouteKey}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// pune.ui-sidemenu-test/SideMenuFloatingDemo [89] 
export function SideMenuFloatingDemo(){
  let [routeKey,setRouteKey] = React.useState();
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="pune.ui-sidemenu/SideMenuFloating"
        code={(function (){
            return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\n          \"flex\":1,\n          \"flexDirection\":\"row-reverse\",\n          \"padding\":10,\n          \"paddingRight\":40,\n          \"backgroundColor\":\"#eee\"\n        }}>\n      <ui_sidemenu.SideMenuFloating\n        design={{\"type\":\"light\"}}\n        data={[\"Security\",\"Profile\",\"Notifications\",\"Organisation\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}/>\n    </ReactNative.View>\n    <ReactNative.View\n      style={{\n          \"flex\":1,\n          \"flexDirection\":\"row-reverse\",\n          \"padding\":10,\n          \"paddingRight\":40,\n          \"backgroundColor\":\"#333\"\n        }}>\n      <ui_sidemenu.SideMenuFloating\n        design={{\"type\":\"dark\"}}\n        data={[\"Security\",\"Profile\",\"Notifications\",\"Organisation\"]}\n        routeKey={routeKey}\n        setRouteKey={setRouteKey}/>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.TextDisplay routeKey={routeKey}/>);";
          })()}>
        <n.Row>
          <ReactNative.View
            style={{
                "flex":1,
                "flexDirection":"row-reverse",
                "padding":10,
                "paddingRight":40,
                "backgroundColor":"#eee"
              }}>
            <ui_sidemenu.SideMenuFloating
              design={{"type":"light"}}
              data={["Security","Profile","Notifications","Organisation"]}
              routeKey={routeKey}
              setRouteKey={setRouteKey}/>
          </ReactNative.View>
          <ReactNative.View
            style={{
                "flex":1,
                "flexDirection":"row-reverse",
                "padding":10,
                "paddingRight":40,
                "backgroundColor":"#333"
              }}>
            <ui_sidemenu.SideMenuFloating
              design={{"type":"dark"}}
              data={["Security","Profile","Notifications","Organisation"]}
              routeKey={routeKey}
              setRouteKey={setRouteKey}/>
          </ReactNative.View>
        </n.Row>
        <n.TextDisplay routeKey={routeKey}/>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// pune.ui-sidemenu-test/MODULE [132] 
export var MODULE = {
  "SideMenuTitleDemo":SideMenuTitleDemo,
  "SideMenuListDemo":SideMenuListDemo,
  "SideMenuFloatingDemo":SideMenuFloatingDemo,
  "MODULE":MODULE
};