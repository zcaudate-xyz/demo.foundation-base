import * as xtd from '../xt/lang/common-data.js'

import * as ui_static from '../melbourne/ui-static.js'

import * as lib from '../xt/lang/common-lib.js'

import * as ui_text from '../melbourne/ui-text.js'

import * as n from '../js/react-native.js'

// pune.ui-console/ConsoleTabStyle [23] 
export var ConsoleTabStyle = {
  "padding":2,
  "paddingHorizontal":15,
  "fontSize":12,
  "borderWidth":1,
  "borderStyle":"solid"
};

// pune.ui-console/Console [30] 
export function Console({design,variant,style,screens,current,setCurrent,onClose,...rprops}){
  let data = xtd.arr_sort(xtd.obj_keys(screens),lib.identity,function (x,y){
    return 0 > x.localeCompare(y);
  });
  let target = screens[current] || screens[xtd.first(data)];
  return (
    <ui_static.Div design={design} style={[{"flex":1},...xtd.arrayify(style)]}>
      <ui_static.Div
        design={design}
        style={{"flexDirection":"row"}}
        variant={{"bg":{"key":"background","tone":"sharpen"}}}>
        <ui_text.ButtonAccent
          design={design}
          style={{"padding":2}}
          text="X"
          onPress={onClose}/>
        <ui_text.TabsMinor
          design={design}
          style={ConsoleTabStyle}
          value={current}
          transformations={{"bg":null}}
          setValue={setCurrent}
          data={data}/>
      </ui_static.Div>
      {n.displayTarget(target)}
    </ui_static.Div>);
}

// pune.ui-console/MODULE [68] 
export var MODULE = {
  "ConsoleTabStyle":ConsoleTabStyle,
  "Console":Console,
  "MODULE":MODULE
};