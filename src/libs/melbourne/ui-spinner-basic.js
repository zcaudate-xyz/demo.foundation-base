import * as ui_spinner_basic from '../js/react-native/ui-spinner-basic.js'

import * as data from '../xt/lang/common-data.js'

import * as base_font from './base-font.js'

import * as base_theme from './base-theme.js'

import * as ui_helper from './ui-helper.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

// melbourne.ui-spinner-basic/SpinnerBasicControls [25] 
export function SpinnerBasicControls({setValue,value,step = 1,max,min,...rprops}){
  return (
    <ui_helper.HelperControl
      leftDisabled={value <= min}
      rightDisabled={value >= max}
      onLeft={function (){
          return setValue(Math.max(min,Math.min(max,value - step)));
        }}
      onRight={function (){
          return setValue(Math.max(min,Math.min(max,value + step)));
        }}
      {...rprops}/>);
}

// melbourne.ui-spinner-basic/SpinnerBasic [42] 
export function SpinnerBasic({
  design,
  variant,
  theme,
  max,
  min,
  decimal,
  step,
  value,
  setValue,
  style,
  styleDigit,
  styleDigitText,
  styleDecimal,
  styleDecimalText,
  ...rprops
}){
  let __variant = Object.assign({
    "fg":{"key":"primary","tone":"flatten"},
    "bg":{"key":"background","tone":"darken","ratio":1},
    "pressed":{
        "fg":{"key":"primary"},
        "bg":{"key":"primary","tone":"sharpen"}
      },
    "highlighted":{
        "fg":{"key":"neutral"},
        "bg":{"key":"background","tone":"darken","ratio":1}
      },
    "active":{"fg":{"key":"background"},"bg":{"key":"primary"}}
  },variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeUiInput(base_palette.designPalette(design),__variant),
    theme
  );
  let {fgNormal} = __theme;
  return (
    <ui_spinner_basic.SpinnerBasic
      step={step}
      styleDecimalText={[
          {"color":fgNormal,"backgroundColor":null},
          ...data.arrayify(styleDecimalText)
        ]}
      styleDecimal={[{"backgroundColor":null},...data.arrayify(styleDecimal)]}
      min={min}
      style={[{"padding":0},__style,...data.arrayify(style)]}
      theme={__theme}
      value={value}
      setValue={setValue}
      styleDigit={[{"backgroundColor":null},...data.arrayify(styleDigit)]}
      max={max}
      decimal={decimal}
      styleDigitText={[
          {"color":fgNormal,"backgroundColor":null},
          ...data.arrayify(styleDigitText)
        ]}
      {...rprops}/>);
}

// melbourne.ui-spinner-basic/MODULE [108] 
export var MODULE = {
  "SpinnerBasicControls":SpinnerBasicControls,
  "SpinnerBasic":SpinnerBasic,
  "MODULE":MODULE
};