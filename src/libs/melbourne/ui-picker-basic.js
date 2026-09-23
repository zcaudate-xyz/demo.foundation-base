import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as ui_picker_basic from '../js/react-native/ui-picker-basic.js'

import * as r from '../js/react.js'

import * as base_font from './base-font.js'

import * as base_theme from './base-theme.js'

import * as ui_helper from './ui-helper.js'

import * as base_palette from './base-palette.js'

// melbourne.ui-picker-basic/PickerControls [20] 
export function PickerControls({children,design,index,setIndex,style,variant}){
  return (
    <ui_helper.HelperControl
      onLeft={function (){
          return setIndex(index - 1);
        }}
      onRight={function (){
          return setIndex(index + 1);
        }}
      design={design}
      variant={variant}
      style={style}
      children={children}/>);
}

// melbourne.ui-picker-basic/PickerBasicIndexed [38] 
export function PickerBasicIndexed({design,variant,theme,index,setIndex,items,style,styleText,...rprops}){
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
  let {bgNormal,fgNormal} = __theme;
  return (
    <ui_picker_basic.PickerBasicIndexed
      theme={__theme}
      style={[
          {"padding":0,"height":24,"backgroundColor":bgNormal},
          __style,
          ...data.arrayify(style)
        ]}
      styleText={[
          {
                "color":fgNormal,
                "padding":3,
                "paddingHorizontal":10,
                "fontSize":17
              },
          ...data.arrayify(styleText)
        ]}
      index={index}
      setIndex={setIndex}
      items={items}
      {...rprops}/>);
}

// melbourne.ui-picker-basic/PickerBasic [93] 
export function PickerBasic({data,valueEmpty,valueFn,value,setValue,...rprops}){
  let indexRef = React.useRef(0);
  let indexFn = function (){
    return indexRef.current;
  };
  let {index,items,setIndex} = r.convertModular({data,indexFn,setValue,value,valueFn});
  React.useEffect(function (){
    indexRef.current = index;
  },[index]);
  return (
    <PickerBasicIndexed setIndex={setIndex} items={items} index={index} {...rprops}/>);
}

// melbourne.ui-picker-basic/MODULE [119] 
export var MODULE = {
  "PickerControls":PickerControls,
  "PickerBasicIndexed":PickerBasicIndexed,
  "PickerBasic":PickerBasic,
  "MODULE":MODULE
};