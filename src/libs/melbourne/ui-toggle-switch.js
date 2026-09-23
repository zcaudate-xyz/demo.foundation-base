import * as data from '../xt/lang/common-data.js'

import * as ui_toggle_switch from '../js/react-native/ui-toggle-switch.js'

import * as base_font from './base-font.js'

import * as base_theme from './base-theme.js'

import * as base_palette from './base-palette.js'

// melbourne.ui-toggle-switch/ToggleSwitch [30] 
export function ToggleSwitch({
  design,
  variant,
  style,
  theme,
  selected,
  onText = "",
  offText = "",
  ...rprops
}){
  let __variant = data.obj_assign_nested({
    "fg":{"key":"neutral","tone":"sharpen"},
    "bg":{"key":"background","tone":"flatten"},
    "hovered":{"bg":{"raw":1}},
    "active":{
        "fg":{"key":"primary","tone":"flatten"},
        "bg":{"key":"background","tone":"mix","mix":"primary","ratio":5}
      },
    "text":{"key":"background"}
  },variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeUiState(base_palette.designPalette(design),__variant),
    theme
  );
  return (
    <ui_toggle_switch.ToggleSwitch
      theme={__theme}
      selected={selected}
      style={[{"padding":10},__style,...data.arrayify(style)]}
      knobStyle={{
          "width":22,
          "height":22,
          "justifyContent":"center",
          "alignItems":"center"
        }}
      axisStyle={{"height":22,"width":44,"marginVertical":0}}
      {...rprops}/>);
}

// melbourne.ui-toggle-switch/MODULE [77] 
export var MODULE = {"ToggleSwitch":ToggleSwitch,"MODULE":MODULE};