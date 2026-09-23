import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as ui_tooltip from '../js/react-native/ui-tooltip.js'

import * as ui_scrollview from '../js/react-native/ui-scrollview.js'

import * as base_font from './base-font.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

// melbourne.ui-static/Div [31] 
export function Div({refLink,design,variant,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"neutral"},"bg":{"key":"background"}},variant);
  return (
    <ReactNative.View
      ref={refLink}
      style={[
          {
                "backgroundColor":__variant.bg ? base_palette.getColor(palette,__variant.bg) : null,
                "borderColor":__variant.fg ? base_palette.getColor(palette,__variant.fg) : null
              },
          ...data.arrayify(style)
        ]}
      {...rprops}/>);
}

// melbourne.ui-static/Text [60] 
export function Text({refLink,design,variant,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"neutral"}},variant);
  let __style = base_font.getFontStyle(__variant.font);
  return (
    <ReactNative.Text
      ref={refLink}
      style={[
          {
                "backgroundColor":__variant.bg ? base_palette.getColor(palette,__variant.bg) : null,
                "color":base_palette.getColor(palette,__variant.fg)
              },
          __style,
          ...data.arrayify(style)
        ]}
      {...rprops}/>);
}

// melbourne.ui-static/Separator [87] 
export function Separator({refLink,design,variant,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"neutral"}},variant);
  return (
    <ReactNative.View
      ref={refLink}
      style={[
          {
                "backgroundColor":base_palette.getColor(palette,__variant.fg),
                "height":1
              },
          ...data.arrayify(style)
        ]}/>);
}

// melbourne.ui-static/ScrollView [110] 
export function ScrollView({design,variant,styleBackground,styleIndicator,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({
    "bg":{"key":"background","tone":"augment"},
    "fg":{"key":"primary","mix":"background","ratio":6}
  },variant);
  return (
    <ui_scrollview.ScrollView
      styleBackground={[
          {
                "backgroundColor":base_palette.getColor(palette,__variant.bg)
              },
          ...data.arrayify(styleBackground)
        ]}
      styleIndicator={[
          {
                "backgroundColor":base_palette.getColor(palette,__variant.fg)
              },
          ...data.arrayify(styleIndicator)
        ]}
      {...rprops}/>);
}

// melbourne.ui-static/TextTooltip [140] 
export function TextTooltip({design,variant,text,textProps,arrow,style,...rprops}){
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"background"},"bg":{"key":"neutral"}},variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  return (
    <ui_tooltip.Tooltip
      arrow={Object.assign({"color":base_palette.getColor(palette,__variant.bg)},arrow)}
      {...rprops}>
      <Text
        design={design}
        variant={__variant}
        style={[
            __style,
            {"position":"absolute","borderRadius":5,"padding":10},
            ...data.arrayify(style)
          ]}
        {...textProps}>{text}
      </Text>
    </ui_tooltip.Tooltip>);
}

// melbourne.ui-static/TextDisplay [175] 
export function TextDisplay({style,styleText,content,outlined,design,children,...rprops}){
  return (
    <ScrollView
      variant={data.get_in(design,["variant","scrollview"])}
      design={design}
      {...rprops}>
      <Text
        variant={data.get_in(design,["variant","text"])}
        style={[
            ReactNative.Platform.select({
              "ios":{"fontFamily":"Courier"},
              "default":{"fontFamily":"monospace"}
            }),
            {"fontSize":10},
            ...data.arrayify(styleText)
          ]}
        design={design}>{content || children}
      </Text>
    </ScrollView>);
}

// melbourne.ui-static/MODULE [199] 
export var MODULE = {
  "Div":Div,
  "Text":Text,
  "Separator":Separator,
  "ScrollView":ScrollView,
  "TextTooltip":TextTooltip,
  "TextDisplay":TextDisplay,
  "MODULE":MODULE
};