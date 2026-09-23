import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as ui_tooltip from '../js/react-native/ui-tooltip.js'

import * as ui_text from './ui-text.js'

import * as base_palette from './base-palette.js'

import * as ui_util from '../js/react-native/ui-util.js'

import * as n from '../js/react-native.js'

// melbourne.ui-toolbar/minorStandard [27] 
export function minorStandard(){
  return ui_text.minorToggleTheme(
    {"key":"primary"},
    {"key":"background"},
    {"key":"background","tone":"standard"}
  );
}

// melbourne.ui-toolbar/accentStandard [39] 
export function accentStandard(){
  return ui_text.accentToggleTheme(
    {"key":"primary"},
    {"key":"background"},
    {"key":"background"},
    {"key":"primary"}
  );
}

// melbourne.ui-toolbar/accentToggleSubtle [50] 
export function accentToggleSubtle(noChange){
  return ui_text.accentToggleTheme(Object.assign(
    {"key":"primary"},
    noChange ? {"mix":"background","ratio":1} : null
  ),noChange ? {"key":"neutral"} : {"key":"background","tone":"augment"},{"key":"primary","mix":"background","ratio":1},{"key":"background"});
}

// melbourne.ui-toolbar/accentToggleDeep [69] 
export function accentToggleDeep(){
  return ui_text.accentToggleTheme(
    {"key":"primary","tone":"flatten"},
    {"key":"background","tone":"augment"},
    {"key":"background","tone":"augment"},
    {"key":"primary","tone":"flatten"}
  );
}

// melbourne.ui-toolbar/accentTabsSubtle [84] 
export function accentTabsSubtle(){
  return ui_text.accentToggleTheme(
    {"key":"primary"},
    {"key":"background","tone":"augment"},
    {"key":"primary","mix":"background","ratio":1},
    {"key":"background"}
  );
}

// melbourne.ui-toolbar/minorNoBanner [98] 
export function minorNoBanner(){
  return ui_text.minorToggleTheme(
    {"key":"background","tone":"augment"},
    {"key":"primary","tone":"standard"},
    {"key":"primary","tone":"standard"}
  );
}

// melbourne.ui-toolbar/accentNoBanner [111] 
export function accentNoBanner(){
  return ui_text.accentToggleTheme(
    {"key":"background","tone":"augment"},
    {"key":"primary","tone":"standard"},
    {"key":"primary","tone":"standard"},
    {"key":"background","tone":"augment"}
  );
}

// melbourne.ui-toolbar/ToolbarOverlayTooltip [125] 
export function ToolbarOverlayTooltip({design,hostRef,style,visible,setVisible,children,...rprops}){
  let palette = base_palette.designPalette(design);
  return (
    <ui_tooltip.Tooltip
      hostRef={hostRef}
      visible={visible}
      setVisible={setVisible}
      position="left_edge"
      alignment="start"
      arrow={{
          "animate":true,
          "placement":"none",
          "backdrop":true,
          "backdropStyle":{
                  "backgroundColor":base_palette.getColor(palette,{"key":"neutral"}),
                  "opacity":0.4
                }
        }}>
      <ReactNative.View style={[style,{"minWidth":360}]}>{children}</ReactNative.View>
    </ui_tooltip.Tooltip>);
}

// melbourne.ui-toolbar/ToolbarOverlay [156] 
export function ToolbarOverlay({design,visible,setVisible,children,...rprops}){
  let hostRef = React.useRef();
  return (
    <ReactNative.View ref={hostRef}>
      <ToolbarOverlayTooltip
        design={design}
        visible={visible}
        setVisible={setVisible}
        hostRef={hostRef}
        {...rprops}>{children}
      </ToolbarOverlayTooltip>
    </ReactNative.View>);
}

// melbourne.ui-toolbar/Toolbar [176] 
export function Toolbar({design,variant,hostRef,style,noBanner,accent,children}){
  return (
    <ui_static.Div
      design={design}
      variant={Object.assign({
          "bg":noBanner ? {"key":"background","tone":"augment"} : {"key":"primary"}
        },variant)}
      style={[{"flexDirection":"row","flex":1},...data.arrayify(style)]}>{children}
    </ui_static.Div>);
}

// melbourne.ui-toolbar/ToolbarAnnex [201] 
export function ToolbarAnnex({
  component = ReactNative.View,
  mini,
  design,
  visible,
  setVisible,
  ...rprops
}){
  let onClose = function (){
    return setVisible(false);
  };
  let cprops = Object.assign({design,mini,onClose},rprops);
  let innerElem = React.createElement(component,cprops);
  return mini ? (
    <ui_util.Fold visible={visible}>{innerElem}</ui_util.Fold>) : (
    <ToolbarOverlay visible={visible} setVisible={setVisible} design={design}>{innerElem}</ToolbarOverlay>);
}

// melbourne.ui-toolbar/MODULE [225] 
export var MODULE = {
  "minorStandard":minorStandard,
  "accentStandard":accentStandard,
  "accentToggleSubtle":accentToggleSubtle,
  "accentToggleDeep":accentToggleDeep,
  "accentTabsSubtle":accentTabsSubtle,
  "minorNoBanner":minorNoBanner,
  "accentNoBanner":accentNoBanner,
  "ToolbarOverlayTooltip":ToolbarOverlayTooltip,
  "ToolbarOverlay":ToolbarOverlay,
  "Toolbar":Toolbar,
  "ToolbarAnnex":ToolbarAnnex,
  "MODULE":MODULE
};