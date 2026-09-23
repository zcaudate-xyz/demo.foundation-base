import * as ReactNative from 'react-native'

import * as ui_radio_box from '../js/react-native/ui-radio-box.js'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as base_font from './base-font.js'

import * as base_theme from './base-theme.js'

import * as base_palette from './base-palette.js'

// melbourne.ui-radio/RadioBox [33] 
export function RadioBox({design,variant,style,theme,...rprops}){
  let __variant = Object.assign({
    "fg":{"key":"neutral"},
    "bg":{"key":"background","tone":"darken","ratio":1},
    "pressed":{"bg":{"key":"primary"}},
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
  return (
    <ui_radio_box.RadioBox
      theme={__theme}
      style={[{"padding":0},__style,...data.arrayify(style)]}
      {...rprops}/>);
}

// melbourne.ui-radio/RadioGroupIndexed [68] 
export function RadioGroupIndexed({
  design,
  variant,
  theme,
  items,
  setIndex,
  index,
  onChange,
  style,
  styleText,
  styleContainer,
  itemProps = [],
  format = lib.identity
}){
  let itemFn = function (value,i){
    return (
      <ReactNative.View
        key={value}
        style={{"flexDirection":"row","alignItems":"center","padding":2}}>
        <RadioBox
          selected={index == i}
          onPress={function (){
              if(i != index){
                setIndex(i);
                if(onChange){
                  onChange(i);
                }
              }
            }}
          design={design}
          variant={variant}
          theme={theme}
          style={style}
          {...(itemProps[i] || {})}/>
        <ui_static.Text
          variant={Object.assign(
              {"fg":{"key":"primary"}},
              data.get_in(design,["variant","text"])
            )}
          style={styleText}
          design={design}>{format(value,i)}
        </ui_static.Text>
      </ReactNative.View>);
  };
  return (
    <ReactNative.View style={styleContainer}>{items.map(itemFn)}</ReactNative.View>);
}

// melbourne.ui-radio/RadioGroup [113] 
export function RadioGroup({data,valueFn,value,setValue,...rprops}){
  let {index,items,setIndex} = r.convertIndex({data,setValue,value,valueFn});
  return (
    <RadioGroupIndexed setIndex={setIndex} items={items} index={index} {...rprops}/>)
}

// melbourne.ui-radio/MODULE [133] 
export var MODULE = {
  "RadioBox":RadioBox,
  "RadioGroupIndexed":RadioGroupIndexed,
  "RadioGroup":RadioGroup,
  "MODULE":MODULE
};