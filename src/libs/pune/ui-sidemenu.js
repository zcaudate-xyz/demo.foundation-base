import React from 'react'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ReactNative from 'react-native'

import * as xtd from '../xt/lang/common-data.js'

import * as ui_static from '../melbourne/ui-static.js'

import * as ui_tooltip from '../js/react-native/ui-tooltip.js'

import * as r from '../js/react.js'

import * as ui_group from '../melbourne/ui-group.js'

import * as ui_toggle_button from '../melbourne/ui-toggle-button.js'

import * as base_palette from '../melbourne/base-palette.js'

import * as n from '../js/react-native.js'

import * as string from '../xt/lang/common-string.js'

// pune.ui-sidemenu/SideMenuTitle [27] 
export function SideMenuTitle({design,title}){
  return (
    <ui_static.Div
      variant={{"bg":{"key":"primary","mix":"background","ratio":6}}}
      style={{"width":40,"flexDirection":"column-reverse"}}
      design={design}>
      <ReactNative.View
        style={{"transform":[{"rotate":"-90deg"},{"translateX":20}]}}>
        <ui_static.Text
          style={{"width":100}}
          variant={{
              "font":"h4",
              "bg":{"key":"primary","mix":"background","ratio":6},
              "fg":{"key":"neutral"}
            }}
          design={design}>{title}
        </ui_static.Text>
      </ReactNative.View>
    </ui_static.Div>);
}

// pune.ui-sidemenu/SideMenuList [51] 
export function SideMenuList({
  design,
  mini,
  miniTitle,
  variant,
  routeKey,
  setRouteKey,
  data,
  children,
  styleContainer,
  floating,
  ...rprops
}){
  let __design = design;
  let __variant = Object.assign({
    "font":"h4",
    "bg":{"key":"background","tone":"diminish"},
    "fg":{"key":"neutral","tone":"diminish"},
    "pressed":{"bg":{"raw":1},"fg":{"raw":1}},
    "hovered":{"bg":{"raw":1},"fg":{"raw":1}},
    "active":{"bg":{"key":"primary"}}
  },variant);
  return (
    <n.Row
      style={[{"width":140,"minHeight":80},...xtd.arrayify(styleContainer)]}>
      <ui_static.Div
        design={__design}
        variant={__variant}
        style={{"paddingHorizontal":10,"paddingVertical":5,"flex":1}}>
        <ui_group.List
          design={__design}
          variant={__variant}
          value={routeKey}
          setValue={setRouteKey}
          style={{
              "width":120,
              "fontWeight":"600",
              "fontSize":12.5,
              "borderRadius":1
            }}
          format={function (s){
              return string.capitalize(string.tag_string(s));
            }}
          transformations={{"bg":null}}
          data={data}
          {...rprops}/>
        {children}
      </ui_static.Div>
    </n.Row>);
}

// pune.ui-sidemenu/SideMenuFloating [107] 
export function SideMenuFloating({children,design,mini,setVisible,visible}){
  let palette = base_palette.designPalette(design);
  let buttonRef = React.useRef();
  return (
    <React.Fragment>
      <ui_toggle_button.ToggleButton
        selected={visible}
        onPress={function (){
            return setVisible(!visible);
          }}
        key={mini}
        variant={mini ? {
            "bg":{"key":"neutral"},
            "fg":{"key":"background"},
            "pressing":{"bg":1},
            "active":{"bg":{"key":"neutral"}}
          } : {
            "bg":{"key":"neutral"},
            "fg":{"key":"background"},
            "pressing":{"bg":1},
            "active":{"bg":{"key":"neutral"}}
          }}
        transformations={{
            "bg":function ({active}){
                return {"style":{"transform":[{"scale":1 - active}]}};
              }
          }}
        style={{"paddingVertical":6,"borderRadius":2}}
        design={design}
        refLink={buttonRef}
        text={(
            <RNIcon key="menu" name="menu" size={18}/>)}/>
      <ui_tooltip.Tooltip
        hostRef={buttonRef}
        visible={visible}
        setVisible={setVisible}
        position="right_edge"
        alignment="start"
        arrow={{
            "animate":true,
            "placement":"none",
            "backdrop":true,
            "backdropStyle":{
                "backgroundColor":base_palette.getColor(palette,{"key":"neutral"}),
                "opacity":0.4
              }
          }}>{children}
      </ui_tooltip.Tooltip>
    </React.Fragment>);
}

// pune.ui-sidemenu/SideMenu [159] 
export function SideMenu({
  design,
  mini,
  miniTitle,
  routeKey,
  setRouteKey,
  data,
  narrowed,
  children,
  ...rprops
}){
  let [visible,setVisible] = React.useState();
  let listProps = Object.assign({data,design,routeKey,setRouteKey},narrowed ? {
    "floating":true,
    "styleContainer":{"padding":5,"borderRadius":3,"paddingLeft":10},
    "onChange":function (){
        return setVisible(false);
      }
  } : null);
  let listElem = React.createElement(SideMenuList,listProps);
  return (
    <ReactNative.View
      style={[
          {"zIndex":100,"top":5,"position":"absolute"},
          ReactNative.Platform.select({"ios":{"left":5},"default":{"right":5}})
        ]}>
      {narrowed ? React.createElement(
        SideMenuFloating,
        {design,mini,setVisible,visible,"children":React.createElement(SideMenuList,listProps)}
      ) : React.createElement(SideMenuList,listProps)}
    </ReactNative.View>);
}

// pune.ui-sidemenu/MODULE [201] 
export var MODULE = {
  "SideMenuTitle":SideMenuTitle,
  "SideMenuList":SideMenuList,
  "SideMenuFloating":SideMenuFloating,
  "SideMenu":SideMenu,
  "MODULE":MODULE
};