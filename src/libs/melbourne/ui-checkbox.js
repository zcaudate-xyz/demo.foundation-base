import * as ReactNative from 'react-native'

import * as ui_check_box from '../js/react-native/ui-check-box.js'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as base_font from './base-font.js'

import * as base_theme from './base-theme.js'

import * as base_palette from './base-palette.js'

// melbourne.ui-checkbox/CheckBox [41] 
export function CheckBox({design,variant,style,theme,...rprops}){
  let __variant = data.obj_assign_nested({
    "fg":{"key":"neutral"},
    "bg":{"key":"background"},
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
    <ui_check_box.CheckBox
      theme={__theme}
      outlined={true}
      style={[{"paddingHorizontal":3},__style,...data.arrayify(style)]}
      {...rprops}/>);
}

// melbourne.ui-checkbox/CheckGroupIndexed [77] 
export function CheckGroupIndexed({
  design,
  variant,
  theme,
  items,
  setIndices,
  indices,
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
        <CheckBox
          selected={indices[i]}
          onPress={function (){
              let changed = indices.map(function (e,ei){
                return (ei == i) ? !e : e;
              });
              setIndices(changed);
              if(onChange){
                onChange(changed);
              }
            }}
          design={design}
          variant={variant}
          theme={theme}
          style={style}
          {...(itemProps[i] || {})}/>
        <ui_static.Text
          design={design}
          variant={data.get_in(design,["variant","text"]) || {"fg":{"key":"neutral","mix":"primary","ratio":4}}}
          style={styleText}>{format(value,i)}
        </ui_static.Text>
      </ReactNative.View>);
  };
  return (
    <ReactNative.View style={styleContainer}>{items.map(itemFn)}</ReactNative.View>);
}

// melbourne.ui-checkbox/CheckGroup [127] 
export function CheckGroup({data,valueFn,values,setValues,...rprops}){
  let {indices,items,setIndices} = r.convertIndices({data,setValues,valueFn,values});
  return (
    <CheckGroupIndexed
      setIndices={setIndices}
      items={items}
      indices={indices}
      {...rprops}/>)
}

// melbourne.ui-checkbox/MODULE [147] 
export var MODULE = {
  "CheckBox":CheckBox,
  "CheckGroupIndexed":CheckGroupIndexed,
  "CheckGroup":CheckGroup,
  "MODULE":MODULE
};