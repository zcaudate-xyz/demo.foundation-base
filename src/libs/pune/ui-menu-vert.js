import React from 'react'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ReactNative from 'react-native'

import * as ui_button from '../melbourne/ui-button.js'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from '../melbourne/ui-static.js'

import * as ui_tooltip from '../js/react-native/ui-tooltip.js'

import * as lib from '../xt/lang/common-lib.js'

import * as ui_toggle_button from '../melbourne/ui-toggle-button.js'

import * as base_palette from '../melbourne/base-palette.js'

import * as n from '../js/react-native.js'

// pune.ui-menu-vert/styleMenuButton [33] 
export function styleMenuButton(mini){
  return {"padding":3,"margin":5,"marginVertical":!mini ? 8 : null};
}

// pune.ui-menu-vert/MainMenuSeperator [40] 
export function MainMenuSeperator({design,mini}){
  return (
    <ui_static.Separator
      design={design}
      variant={{"fg":{"key":"neutral","tone":"sharpen"}}}
      style={mini ? {
          "height":32,
          "marginHorizontal":15,
          "marginVertical":12,
          "width":1
        } : {
          "height":1,
          "marginHorizontal":12,
          "marginVertical":10,
          "width":32
        }}/>);
}

// pune.ui-menu-vert/MainMenuButton [54] 
export function MainMenuButton({design,mini,item,...rprops}){
  let {label,icon,key,...ritems} = item;
  return (
    <ui_button.Button
      design={design}
      variant={{
          "bg":{"key":"background","tone":mini ? "sharpen" : "diminish"},
          "fg":{"key":"neutral"},
          "hovered":{"bg":{"key":"background","mix":"neutral","ratio":2}},
          "pressed":{"bg":{"key":"neutral"},"fg":{"key":"background"}},
          "tooltip":{"fg":{"key":"background"},"bg":{"key":"neutral"}}
        }}
      style={styleMenuButton(mini)}
      text={(
          <RNIcon key="icon" name={icon} size={24}/>)}
      tooltip={{"text":label,"position":"top"}}
      {...Object.assign(rprops,ritems)}/>);
}

// pune.ui-menu-vert/MainMenuToggle [85] 
export function MainMenuToggle({design,mini,variant,item,...rprops}){
  let {label,icon,key,...ritems} = item;
  return (
    <ui_toggle_button.ToggleButton
      design={design}
      variant={Object.assign({
          "bg":{"key":"background","tone":mini ? "sharpen" : "diminish"},
          "active":{"bg":{"key":"neutral"}},
          "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
          "pressed":{"bg":{"raw":1},"fg":{"raw":1}}
        },variant)}
      style={styleMenuButton(mini)}
      text={(
          <RNIcon key="icon" name={icon} size={24}/>)}
      tooltip={{"text":label,"position":"top"}}
      {...Object.assign(rprops,ritems)}/>);
}

// pune.ui-menu-vert/MainMenuRoute [116] 
export function MainMenuRoute({design,mini,theme,item,routeKey,setRouteKey,setVisible}){
  let {key} = item;
  return (
    <MainMenuToggle
      design={design}
      variant={{"active":{"bg":{"key":"primary"}}}}
      item={Object.assign({
          "selected":routeKey == key,
          "onPress":function (){
                  setRouteKey(key);
                  if(setVisible){
                    setVisible(false);
                  }
                }
        },item)}
      mini={mini}
      theme={theme}/>);
}

// pune.ui-menu-vert/MainMenuMiniContext [140] 
export function MainMenuMiniContext({design,variant,visible,setVisible,children}){
  let hostRef = React.useRef();
  let palette = base_palette.designPalette(design);
  return (
    <React.Fragment>
      <MainMenuToggle
        refLink={hostRef}
        mini={true}
        selected={visible}
        onPress={function (){
            return setVisible(!visible);
          }}
        item={{"key":"more","icon":"dots-three-horizontal"}}
        variant={variant}
        design={design}/>
      <ui_tooltip.Tooltip
        hostRef={hostRef}
        visible={visible}
        setVisible={setVisible}
        position="top"
        alignment="end"
        arrow={{
            "placement":"none",
            "backdrop":true,
            "baseHeight":5,
            "baseLength":20,
            "backdropStyle":{
                "backgroundColor":base_palette.getColor(palette,{"key":"background"}),
                "opacity":0.3
              }
          }}>
        <ReactNative.View style={{"width":60}}>{children}</ReactNative.View>
      </ui_tooltip.Tooltip>
    </React.Fragment>);
}

// pune.ui-menu-vert/MainMenu [178] 
export function MainMenu({mini,routeKey,setRouteKey,design = {},items = []}){
  items = items.filter(lib.identity);
  let [visible,setVisible] = React.useState();
  let itemFn = function (mini){
    return function (item,i){
      let {component = MainMenuRoute} = item;
      return React.createElement(
        component,
        {design,item,mini,routeKey,setRouteKey,setVisible,"key":i}
      );
    };
  };
  if(mini){
    return (
      <ui_static.Div
        design={design}
        variant={{"bg":{"key":"background","tone":"sharpen"}}}
        style={[
            {
                    "padding":2,
                    "flex":1,
                    "overflow":"hidden",
                    "flexDirection":"row",
                    "justifyContent":"space-between"
                  }
          ]}>
        {items.filter(data.key_fn("mini")).map(itemFn(true))}
        <MainMenuMiniContext visible={visible} setVisible={setVisible} design={design}>
          <ui_static.Div
            design={design}
            variant={{"bg":{"key":"background","tone":"sharpen"}}}
            style={[{"padding":2}]}>
            {items.filter(function (e){
              return !e.mini && e.key;
            }).map(itemFn(true))}
          </ui_static.Div>
        </MainMenuMiniContext>
      </ui_static.Div>);
  }
  else{
    return (
      <ui_static.Div
        design={design}
        variant={{"bg":{"key":"background","tone":"diminish"}}}
        style={[{"padding":2,"flex":1,"overflow":"hidden"}]}>{items.map(itemFn(mini))}
      </ui_static.Div>);
  }
}

// pune.ui-menu-vert/MODULE [240] 
export var MODULE = {
  "styleMenuButton":styleMenuButton,
  "MainMenuSeperator":MainMenuSeperator,
  "MainMenuButton":MainMenuButton,
  "MainMenuToggle":MainMenuToggle,
  "MainMenuRoute":MainMenuRoute,
  "MainMenuMiniContext":MainMenuMiniContext,
  "MainMenu":MainMenu,
  "MODULE":MODULE
};