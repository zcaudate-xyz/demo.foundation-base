import React from 'react'

import * as ReactNative from 'react-native'

import * as ui_frame from '../js/react-native/ui-frame.js'

import * as base_palette from '../melbourne/base-palette.js'

import * as n from '../js/react-native.js'

// pune.layout-toplevel/LayoutMain [18] 
export function LayoutMain({
  design,
  mini,
  showAuth,
  showGuest,
  header,
  headerProps,
  consoleView,
  consoleProps,
  consoleShow,
  body,
  bodyProps,
  menu,
  menuProps,
  ...rprops
}){
  let palette = base_palette.designPalette(design);
  let bodyView = React.createElement(body || ReactNative.View,Object.assign({design},bodyProps));
  let headerVisible = showGuest && (!mini || !showAuth);
  let menuVisible = !showGuest;
  let miniProps = {
    "bottomSize":45,
    "bottomComponent":menu,
    "bottomProps":Object.assign({design,mini},menuProps),
    "bottomVisible":menuVisible,
    "bottomFade":true,
    "bottomStyle":{
        "backgroundColor":base_palette.getColor(palette,{"key":"background","tone":"sharpen"})
      }
  };
  let normalProps = {
    "leftFade":true,
    "bottomProps":Object.assign({design},consoleProps),
    "bottomComponent":consoleView,
    "leftStyle":{
        "backgroundColor":base_palette.getColor(palette,{"key":"background"})
      },
    "leftProps":Object.assign({design,mini},menuProps),
    "leftVisible":menuVisible,
    "leftComponent":menu,
    "bottomStyle":{
        "backgroundColor":base_palette.getColor(palette,{"key":"neutral"})
      },
    "bottomSize":400,
    "bottomVisible":mini ? menuVisible : consoleShow
  };
  let frameProps = mini ? Object.assign(miniProps,rprops) : Object.assign(normalProps,rprops);
  return (
    <ui_frame.Frame
      topComponent={header}
      topProps={Object.assign({design},headerProps)}
      topStyle={{
          "backgroundColor":base_palette.getColor(palette,{"key":"primary"})
        }}
      topSize={60}
      topVisible={headerVisible}
      {...frameProps}>{bodyView}
    </ui_frame.Frame>);
}

// pune.layout-toplevel/MODULE [90] 
export var MODULE = {"LayoutMain":LayoutMain,"MODULE":MODULE};