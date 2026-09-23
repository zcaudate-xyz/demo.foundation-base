import React from 'react'

import * as ui_static from '../melbourne/ui-static.js'

import * as ui_text from '../melbourne/ui-text.js'

import * as n from '../js/react-native.js'

// pune.ui-submenu/SubMenuToggle [31] 
export function SubMenuToggle({design,mini,variant,item,...rprops}){
  let {label,icon,key,...ritems} = item;
  let [value,setValue] = React.useState("STATS");
  return (
    <ui_text.TabsMinor
      design={{"type":"dark"}}
      styleContainer={{"flexDirection":"column"}}
      data={["STATS","XLM","USD"]}
      value={value}
      setValue={setValue}/>);
}

// pune.ui-submenu/SubMenuRoute [72] 
export function SubMenuRoute({design,mini,theme,item,routeKey,setRouteKey,setVisible}){
  let {key} = item;
  return (
    <SubMenuToggle
      design={design}
      variant={{"active":{"bg":{"key":"background"},"fg":{"key":"neutral"}}}}
      item={Object.assign({
          "selected":routeKey == key,
          "onPress":function (){
                  setRouteKey(key);
                  if(setVisible){
                    setVisible(false);
                  }
                }
        },item)}
      mini={mini}
      theme={theme}/>);
}

// pune.ui-submenu/SubMenu [97] 
export function SubMenu({mini,routeKey,setRouteKey,design = {},items = []}){
  let [visible,setVisible] = React.useState();
  let itemFn = function (mini){
    return function (item,i){
      let {component = SubMenuRoute} = item;
      return React.createElement(
        component,
        {design,item,mini,routeKey,setRouteKey,setVisible,"key":i}
      );
    };
  };
  return (
    <ui_static.Div
      design={design}
      variant={{"bg":{"key":"background"}}}
      style={[{"margin":4,"overflow":"hidden"}]}>{items.map(itemFn(mini))}
    </ui_static.Div>);
}

// pune.ui-submenu/MODULE [127] 
export var MODULE = {
  "SubMenuToggle":SubMenuToggle,
  "SubMenuRoute":SubMenuRoute,
  "SubMenu":SubMenu,
  "MODULE":MODULE
};