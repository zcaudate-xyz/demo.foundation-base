import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ui_button from './ui-button.js'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as n from '../js/react-native.js'

// melbourne.ui-chip/__import__ [24] 
import React from 'react'

// melbourne.ui-chip/Chip [27] 
export function Chip({design = {},result = {},variant,text,style,onClose}){
  let __variant = Object.assign({"bg":{"key":"primary"},"fg":{"key":"background"}},variant);
  return (
    <ui_static.Div
      variant={__variant}
      style={[
          {
                "flexDirection":"row",
                "margin":3,
                "opacity":0.9,
                "alignItems":"center",
                "overflow":"hidden"
              },
          ...data.arrayify(style)
        ]}
      design={design}>
      <ui_static.Text
        variant={__variant}
        style={{"padding":6,"paddingRight":onClose ? 0 : null}}
        design={design}>{text}
      </ui_static.Text>
      {onClose ? (
        <React.Fragment>
          <ui_button.Button
            design={design}
            variant={__variant.close}
            style={{
                "borderRadius":0,
                "marginLeft":5,
                "padding":5,
                "paddingLeft":4,
                "paddingRight":5
              }}
            onPress={onClose}
            text={(
                <RNIcon key="close" name="cross" size={12}/>)}/>
        </React.Fragment>) : null}
    </ui_static.Div>);
}

// melbourne.ui-chip/MODULE [71] 
export var MODULE = {"Chip":Chip,"MODULE":MODULE};