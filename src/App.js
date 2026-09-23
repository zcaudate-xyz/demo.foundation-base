import * as ReactNative from 'react-native'

import React from 'react'

import * as Expo from 'expo'

import * as helper_browser from './libs/js/react-native/helper-browser.js'

import * as data from './libs/xt/lang/common-data.js'

import * as ext_route from './libs/js/react/ext-route.js'

import * as web_melbourne from './web-melbourne.js'

import * as base_box from './libs/xt/event/base-box.js'

import * as web_native from './web-native.js'

import * as web_pune_frame from './web-pune-frame.js'

import * as web_tama_slim from './web-tama-slim.js'

import * as n from './libs/js/react-native.js'

import * as string from './libs/xt/lang/common-string.js'

import * as ext_box from './libs/js/react/ext-box.js'

// component.web-index/Global [39] 
globalThis["component_web_index$$Global"] = base_box.make_box({"init":false,"l0":"00-native","l1":"000-intro"});

// component.web-index/Screens [45] 
globalThis["component_web_index$$Screens"] = base_box.make_box({});

// component.web-index/__screen__ [48] 
base_box.set_data(globalThis["component_web_index$$Screens"],[],{
  "00-native":web_native.raw_controls(),
  "01-melbourne":web_melbourne.melbourne_controls(),
  "02-slim":web_melbourne.slim_controls(),
  "03-pune-frame":web_pune_frame.pune_frame_controls(),
  "04-tama":web_tama_slim.tama_controls()
});

// component.web-index/formatSection [59] 
export function formatSection(value){
  return (value == "00-native") ? "Native" : ((value == "01-melbourne") ? "Melbourne" : ((value == "02-slim") ? "Slim" : ((value == "03-pune-frame") ? "Pune" : ((value == "04-tama") ? "Tama" : value))));
}

// component.web-index/formatExample [68] 
export function formatExample(value){
  let parts = string.split(value,"-");
  return (parts.length > 1) ? string.join(" ",data.arr_slice(parts,1,null)) : value;
}

// component.web-index/AppHeader [75] 
export function AppHeader(){
  return (
    <ReactNative.View
      style={{
          "height":72,
          "paddingHorizontal":24,
          "backgroundColor":"#0b1120",
          "borderBottomWidth":1,
          "borderBottomColor":"#1e293b",
          "flexDirection":"row",
          "alignItems":"center"
        }}>
      <ReactNative.View
        style={{"width":240,"flexDirection":"row","alignItems":"center"}}>
        <ReactNative.View
          style={{
              "width":10,
              "height":10,
              "marginRight":10,
              "borderRadius":5,
              "backgroundColor":"#60a5fa"
            }}/>
        <ReactNative.View style={{"flexDirection":"column"}}>
          <ReactNative.Text
            style={{
                "color":"#f8fafc",
                "fontSize":15,
                "fontWeight":"800",
                "letterSpacing":1.1
              }}>FOUNDATION
          </ReactNative.Text>
          <ReactNative.Text
            style={{
                "marginTop":2,
                "color":"#64748b",
                "fontSize":10,
                "fontWeight":"700",
                "letterSpacing":0.5
              }}>FOUNDATION-BASE
          </ReactNative.Text>
        </ReactNative.View>
      </ReactNative.View>
      <ReactNative.View style={{"flex":1,"paddingHorizontal":24}}>
        <ReactNative.Text
          style={{"color":"#f8fafc","fontSize":16,"fontWeight":"700"}}>Component lab
        </ReactNative.Text>
        <ReactNative.Text style={{"marginTop":3,"color":"#94a3b8","fontSize":12}}>Composable primitives for React Native Web</ReactNative.Text>
      </ReactNative.View>
      <ReactNative.View
        style={{
            "paddingHorizontal":12,
            "paddingVertical":6,
            "borderRadius":999,
            "backgroundColor":"#172554"
          }}>
        <ReactNative.Text
          style={{
              "color":"#bfdbfe",
              "fontSize":10,
              "fontWeight":"800",
              "letterSpacing":0.7
            }}>LIVE WEB DEMO
        </ReactNative.Text>
      </ReactNative.View>
    </ReactNative.View>);
}

// component.web-index/ShowcaseFrame [136] 
export function ShowcaseFrame({target,family,title,onNavigate}){
  let accent = (family == "Melbourne") ? "#10b981" : ((family == "Slim") ? "#8b5cf6" : "#60a5fa");
  return (
    <ReactNative.View
      style={{
          "maxWidth":1120,
          "width":"100%",
          "alignSelf":"center",
          "paddingBottom":28
        }}>
      <ReactNative.View
        style={{
            "elevation":3,
            "borderRadius":22,
            "overflow":"hidden",
            "borderColor":"#e2e8f0",
            "shadowRadius":22,
            "shadowOpacity":0.07,
            "borderWidth":1,
            "shadowColor":"#0f172a",
            "backgroundColor":"#ffffff",
            "shadowOffset":{"width":0,"height":10}
          }}>
        <ReactNative.View
          style={{
              "paddingHorizontal":22,
              "paddingTop":18,
              "paddingBottom":16,
              "borderBottomWidth":1,
              "borderBottomColor":"#eef2f7",
              "flexDirection":"row",
              "alignItems":"center"
            }}>
          <ReactNative.View
            style={{
                "width":8,
                "height":34,
                "borderRadius":4,
                "marginRight":12,
                "backgroundColor":accent
              }}/>
          <ReactNative.View style={{"flex":1}}>
            <ReactNative.Text
              style={{
                  "color":"#0f172a",
                  "fontSize":11,
                  "fontWeight":"800",
                  "letterSpacing":0.7,
                  "textTransform":"uppercase"
                }}>{family}
            </ReactNative.Text>
            <ReactNative.Text
              style={{
                  "marginTop":4,
                  "color":"#1e293b",
                  "fontSize":18,
                  "fontWeight":"800"
                }}>{title}
            </ReactNative.Text>
          </ReactNative.View>
          <ReactNative.View
            style={{
                "paddingHorizontal":10,
                "paddingVertical":6,
                "borderRadius":999,
                "backgroundColor":"#f1f5f9"
              }}>
            <ReactNative.Text
              style={{
                  "color":"#64748b",
                  "fontSize":9,
                  "fontWeight":"800",
                  "letterSpacing":0.6
                }}>INTERACTIVE
            </ReactNative.Text>
          </ReactNative.View>
        </ReactNative.View>
        <ReactNative.View
          style={{
              "padding":18,
              "alignItems":"center",
              "backgroundColor":"#fbfdff"
            }}>{React.createElement(target,{"onNavigate":onNavigate})}
        </ReactNative.View>
      </ReactNative.View>
    </ReactNative.View>);
}

// component.web-index/AppMain [205] 
export function AppMain(){
  let route = ext_route.makeRoute(helper_browser.getHashRoute() || "00-native/000-intro");
  helper_browser.useHashRoute(route);
  let [l0,setL0] = ext_route.useRouteSegment(route,[],"00-native");
  let [l1,setL1] = ext_route.useRouteSegment(route,[l0],"000-intro");
  let tree = ext_box.listenBox(globalThis["component_web_index$$Screens"],[]);
  let onNavigate = function (target){
    setL1(target);
  };
  let displayFn = function (Target,_branch,_parents,_root){
    return (
      <ReactNative.View
        style={{
            "flex":1,
            "padding":28,
            "overflow":"auto",
            "backgroundColor":"#f8fafc"
          }}>
        {(null == Target) ? (
          <ReactNative.View/>) : ((l1 == "000-intro") ? (
          <Target onNavigate={onNavigate}/>) : (
          <ShowcaseFrame
            target={Target}
            family={formatSection(l0)}
            title={formatExample(l1)}
            onNavigate={onNavigate}/>))}
      </ReactNative.View>);
  };
  return (
    <ReactNative.View
      style={{
          "position":"absolute",
          "top":0,
          "bottom":0,
          "left":0,
          "right":0,
          "backgroundColor":"#f8fafc"
        }}>
      <AppHeader/>
      <n.TreePane
        key={l0 + ":" + l1}
        tree={tree}
        levels={[
            {
              "type":"tabs",
              "initial":l0,
              "setInitial":setL0,
              "tabsFormat":formatSection,
              "styleTabs":{
                  "paddingHorizontal":18,
                  "paddingVertical":12,
                  "backgroundColor":"#0b1120",
                  "borderBottomWidth":1,
                  "borderBottomColor":"#1e293b",
                  "alignItems":"center"
                },
              "styleTabsText":{
                  "color":"#94a3b8",
                  "fontSize":12,
                  "fontWeight":"700",
                  "paddingHorizontal":13,
                  "paddingVertical":8,
                  "marginRight":6,
                  "borderRadius":999,
                  "textTransform":"capitalize"
                },
              "styleTabsSelected":{
                  "backgroundColor":"#2563eb",
                  "color":"#ffffff",
                  "fontWeight":"800"
                }
            },
            {
              "setInitial":setL1,
              "styleListText":{
                  "color":"#94a3b8",
                  "fontSize":12,
                  "fontWeight":"600",
                  "width":196,
                  "paddingHorizontal":12,
                  "paddingVertical":10,
                  "borderRadius":8,
                  "textTransform":"capitalize"
                },
              "listWidth":220,
              "displayFn":displayFn,
              "listFormat":formatExample,
              "type":"list",
              "styleListSelected":{
                  "backgroundColor":"#1d4ed8",
                  "color":"#ffffff",
                  "fontWeight":"800"
                },
              "initial":l1,
              "styleList":{
                  "backgroundColor":"#0f172a",
                  "paddingHorizontal":12,
                  "paddingVertical":16,
                  "borderRightWidth":1,
                  "borderRightColor":"#1e293b"
                }
            }
          ]}/>
    </ReactNative.View>);
}

// component.web-index/AppScratch [290] 
export function AppScratch(){
  return (
    <ReactNative.View/>);
}

// component.web-index/__main__ [294] 
base_box.set_data(globalThis["component_web_index$$Global"],["Main"],AppMain);

// component.web-index/App [298] 
export function App(){
  let {Main} = ext_box.listenBox(globalThis["component_web_index$$Global"],[]);
  return (
    <Main/>);
}

// component.web-index/MODULE [303] 
export var MODULE = Expo.registerRootComponent(App);