import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ui_button from './ui-button.js'

import * as data from '../xt/lang/common-data.js'

import * as ui_tooltip from '../js/react-native/ui-tooltip.js'

import * as r from '../js/react.js'

import * as base_font from './base-font.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

import * as string from '../xt/lang/common-string.js'

// melbourne.slim-error/ErrorInfo [32] 
export function ErrorInfo({design = {},result = {},style,onClose}){
  let {debug,message,status,tag} = result || {};
  let {mainBackground,mainError,mainNeutral} = base_palette.designPalette(design);
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let buttonRef = React.useRef();
  let buttonLabel = string.tag_string(tag || "").toUpperCase() + (message ? (" - " + message) : "");
  let errorText = n.format_entry(result);
  let errorVariant = {"bg":{"key":"error"},"pressed":{"bg":{"key":"error"}}};
  return (
    <n.Row
      style={[
          {
                "backgroundColor":mainError,
                "borderRadius":3,
                "opacity":0.9,
                "alignItems":"center",
                "paddingHorizontal":10
              },
          ...data.arrayify(style)
        ]}>
      <React.Fragment>
        <ui_button.Button
          refLink={buttonRef}
          design={design}
          variant={errorVariant}
          style={{"padding":5,"fontWeight":"400","fontSize":12}}
          onPressIn={function (){
              return setVisible(true);
            }}
          onPressOut={function (){
              return setVisible(false);
            }}
          text={data.is_emptyp(buttonLabel) ? "UNKNOWN ERROR" : buttonLabel}
          transformations={{"bg":null}}/>
        <ui_tooltip.Tooltip
          hostRef={buttonRef}
          position="bottom"
          alignment="center"
          visible={visible}
          arrow={{"color":mainNeutral}}>
          <ReactNative.View
            style={{
                "backgroundColor":mainNeutral,
                "borderRadius":5,
                "padding":10,
                "minWidth":250
              }}>
            <ReactNative.Text
              style={[
                  base_font.fontText,
                  {"textAlign":"left","color":mainBackground}
                ]}>
              {data.is_emptyp(errorText) ? "tag: system/unknown_error" : errorText}
            </ReactNative.Text>
          </ReactNative.View>
        </ui_tooltip.Tooltip>
      </React.Fragment>
      <ReactNative.View style={{"flex":1}}/>
      <ui_button.Button
        design={design}
        variant={errorVariant}
        onPress={onClose}
        text={(
            <RNIcon key="close" name="cross" size={15}/>)}/>
    </n.Row>);
}

// melbourne.slim-error/MODULE [103] 
export var MODULE = {"ErrorInfo":ErrorInfo,"MODULE":MODULE};