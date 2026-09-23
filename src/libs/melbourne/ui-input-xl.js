import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as c from '../js/react-native/helper-color.js'

import * as math from '../xt/lang/common-math.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

import * as ui_input from './ui-input.js'

// melbourne.ui-input-xl/inputPlaceHolder [25] 
export function inputPlaceHolder(placeholder,design){
  let {mainBackground,mainNeutral} = base_palette.designPalette(design);
  return {
    "component":ReactNative.Text,
    "key":"placeholder",
    "numberOfLines":1,
    "style":{
        "position":"absolute",
        "fontSize":20,
        "top":0,
        "zIndex":-100,
        "opacity":0,
        "fontWeight":"400",
        "textShadowColor":mainNeutral
      },
    "children":[placeholder],
    "transformations":function ({emptying,focusing,highlighted}){
        let active = Math.max(1 - emptying,focusing);
        let color = c.interpolateColor(mainNeutral,mainBackground,(1 - active) ? null : null);
        return {
          "style":{
                "fontSize":math.mix(18,10,active),
                "opacity":0.6,
                "color":c.toHSL(color),
                "transform":[
                      {"translateY":math.mix(15,53,active)},
                      {"translateX":math.mix(10,-5,active)}
                    ]
              }
        };
      }
  };
}

// melbourne.ui-input-xl/InputXL [61] 
export function InputXL({design,variant,placeholder,style,styleContainer,inner,...rprops}){
  return (
    <ui_input.Input
      style={[
          {"height":50,"paddingHorizontal":14,"fontSize":20},
          ...data.arrayify(style)
        ]}
      styleContainer={[
          {"flex":1,"borderRadius":12,"minHeight":50,"height":50},
          ...data.arrayify(styleContainer)
        ]}
      inner={[inputPlaceHolder(placeholder,design),...data.arrayify(inner)]}
      outlined={true}
      design={design}
      variant={variant}
      {...rprops}/>);
}

// melbourne.ui-input-xl/MODULE [88] 
export var MODULE = {
  "inputPlaceHolder":inputPlaceHolder,
  "InputXL":InputXL,
  "MODULE":MODULE
};