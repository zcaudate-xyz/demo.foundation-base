import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ui_toggle_button from './ui-toggle-button.js'

import * as n from '../js/react-native.js'

// melbourne.ui-group/EnumMultiIndexed [26] 
export function EnumMultiIndexed({
  design,
  variant,
  theme,
  items,
  setIndices,
  indices,
  style,
  onChange,
  styleContainer,
  itemProps = [],
  format = lib.identity
}){
  let itemFn = function (value,i){
    return (
      <ui_toggle_button.ToggleButton
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
        key={value + "-" + i}
        variant={variant}
        style={[{"marginHorizontal":5},...data.arrayify(style)]}
        outlined={indices[i]}
        theme={theme}
        design={design}
        text={format(value,i)}
        {...(itemProps[i] || {})}/>);
  };
  return (
    <n.Row style={[{"margin":5},...data.arrayify(styleContainer)]}>{items.map(itemFn)}</n.Row>);
}

// melbourne.ui-group/EnumMulti [64] 
export function EnumMulti({data,valueFn,values,setValues,...rprops}){
  let {indices,items,setIndices} = r.convertIndices({data,setValues,valueFn,values});
  return (
    <EnumMultiIndexed
      setIndices={setIndices}
      items={items}
      indices={indices}
      {...rprops}/>)
}

// melbourne.ui-group/TabsIndexed [88] 
export function TabsIndexed({
  design,
  variant,
  theme,
  items,
  setIndex,
  index,
  style,
  onChange,
  styleContainer,
  outlined,
  itemProps = [],
  format = lib.identity
}){
  let itemFn = function (value,i){
    return (
      <ui_toggle_button.ToggleButton
        selected={i == index}
        onPress={function (){
            if(i != index){
              setIndex(i);
              if(onChange){
                onChange(i);
              }
            }
          }}
        key={value + "-" + i}
        transformations={{"bg":null}}
        variant={variant}
        style={[{"marginHorizontal":5},...data.arrayify(style)]}
        outlined={outlined && (i == index)}
        theme={theme}
        design={design}
        text={format(value,i)}
        {...(itemProps[i] || {})}/>);
  };
  return (
    <n.Row style={[{"margin":5},...data.arrayify(styleContainer)]}>{items.map(itemFn)}</n.Row>);
}

// melbourne.ui-group/Tabs [125] 
export function Tabs({data,valueFn,value,setValue,allowNotFound,...rprops}){
  let {index,items,setIndex} = r.convertIndex({allowNotFound,data,setValue,value,valueFn});
  return (
    <TabsIndexed setIndex={setIndex} items={items} index={index} {...rprops}/>);
}

// melbourne.ui-group/ListIndexed [151] 
export function ListIndexed({
  design,
  variant,
  theme,
  items,
  style,
  onChange,
  onPress,
  index,
  setIndex,
  styleContainer,
  transformations,
  itemProps = [],
  format = lib.identity
}){
  let outlined = data.get_in(design,["theme","active","outlined"]);
  let itemFn = function (e){
    let {item} = e;
    let i = e["index"];
    return (
      <ui_toggle_button.ToggleButton
        selected={i == index}
        onPress={function (){
            if(i != index){
              setIndex(i);
              if(onChange){
                onChange(i);
              }
            }
            if(onPress){
              onPress();
            }
          }}
        key={i}
        variant={variant}
        transformations={transformations}
        style={[
            {
                    "marginVertical":5,
                    "alignItems":"center",
                    "justifyContent":"center"
                  },
            ...data.arrayify(style)
          ]}
        outlined={outlined && (i == index)}
        theme={theme}
        design={design}
        text={format(item,i)}
        {...(itemProps[i] || {})}/>);
  };
  return (
    <ReactNative.FlatList
      style={styleContainer}
      data={items}
      keyExtractor={lib.identity}
      renderItem={itemFn}/>);
}

// melbourne.ui-group/List [196] 
export function List({data,valueFn,value,setValue,allowNotFound,...rprops}){
  let {index,items,setIndex} = r.convertIndex({allowNotFound,data,setValue,value,valueFn});
  return (
    <ListIndexed setIndex={setIndex} items={items} index={index} {...rprops}/>);
}

// melbourne.ui-group/MODULE [218] 
export var MODULE = {
  "EnumMultiIndexed":EnumMultiIndexed,
  "EnumMulti":EnumMulti,
  "TabsIndexed":TabsIndexed,
  "Tabs":Tabs,
  "ListIndexed":ListIndexed,
  "List":List,
  "MODULE":MODULE
};