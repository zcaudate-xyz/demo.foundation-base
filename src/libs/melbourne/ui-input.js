import * as data from '../xt/lang/common-data.js'

import * as base_font from './base-font.js'

import * as ui_input from '../js/react-native/ui-input.js'

import * as base_theme from './base-theme.js'

import * as base_palette from './base-palette.js'

// melbourne.ui-input/Input [18] 
export function Input({design,variant,theme,styleContainer,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({
    "fg":{"key":"neutral"},
    "bg":{"key":"background","mix":"primary","ratio":1},
    "pressed":{"bg":{"key":"primary"}},
    "highlighted":{
        "fg":{"key":"neutral"},
        "bg":{"key":"background","mix":"primary","ratio":1}
      },
    "active":{
        "fg":{"key":"background"},
        "bg":{"key":"primary","mix":"neutral","ratio":4}
      }
  },variant);
  let __theme = Object.assign(base_theme.themeUiInput(palette,__variant),theme);
  return (
    <ui_input.Input
      theme={__theme}
      selectionColor={palette.mainColor}
      style={[base_font.fontFamily,...data.arrayify(style)]}
      styleContainer={[
          {
                "flex":1,
                "minHeight":42,
                "paddingHorizontal":12,
                "borderStyle":"solid",
                "borderWidth":1,
                "borderRadius":10,
                "borderColor":base_palette.getColor(palette,{"key":"neutral","mix":"background","ratio":5})
              },
          ...data.arrayify(styleContainer)
        ]}
      {...rprops}/>);
}

// melbourne.ui-input/MODULE [68] 
export var MODULE = {"Input":Input,"MODULE":MODULE};