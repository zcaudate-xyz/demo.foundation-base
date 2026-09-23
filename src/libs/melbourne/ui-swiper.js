import * as ui_swiper from '../js/react-native/ui-swiper.js'

import * as base_theme from './base-theme.js'

import * as base_palette from './base-palette.js'

// melbourne.ui-swiper/Swiper [17] 
export function Swiper({design,variant,theme,...rprops}){
  let __variant = Object.assign({
    "fg":{"key":"primary","tone":"flatten"},
    "bg":{"key":"primary","tone":"darken","ratio":1},
    "pressed":{
        "fg":{"key":"primary"},
        "bg":{"key":"primary","tone":"sharpen"}
      }
  },variant);
  let __theme = Object.assign(
    base_theme.themeUiButton(base_palette.designPalette(design),__variant),
    theme
  );
  return (
    <ui_swiper.Swiper theme={__theme} {...rprops}/>);
}

// melbourne.ui-swiper/MODULE [44] 
export var MODULE = {"Swiper":Swiper,"MODULE":MODULE};