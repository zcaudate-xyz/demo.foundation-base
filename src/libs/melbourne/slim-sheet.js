import React from 'react'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ui_text from './ui-text.js'

import * as slim_entry from './slim-entry.js'

import * as n from '../js/react-native.js'

// melbourne.slim-sheet/SheetPagination [25] 
export function SheetPagination(props){
  let {control,design,entries,impl} = props;
  let {page = {}} = impl;
  let {display = 20,total = (entries ? entries.length : 0)} = page;
  let setShowPage = data.get_in(control,["setShowPage"]);
  let showPage = data.get_in(control,["showPage"]) || 1;
  let pageCount = Math.floor((total - 1) / display) + 1;
  let isMini = pageCount < 7;
  let isLeftEdge = showPage < 4;
  let isRightEdge = showPage > (pageCount - 3);
  let toggleFn = function (idx,ellipsis){
    return React.createElement(page.component || ui_text.ToggleTabMinor,{
      "design":design,
      "key":idx + 1,
      "style":{"marginHorizontal":0},
      "selected":showPage == (idx + 1),
      "text":ellipsis ? (
            <RNIcon key={idx + 1} name="dots-three-horizontal"/>) : (idx + 1).toString(),
      "onPress":function (){
            return setShowPage(idx + 1);
          }
    });
  };
  return (
    <ReactNative.View key={pageCount}>
      {isMini ? (
        <n.Row>{data.arr_map(data.arr_range(pageCount),toggleFn)}</n.Row>) : (isLeftEdge ? (
        <n.Row>
          {data.arr_map(data.arr_range(4),toggleFn)}
          {toggleFn(showPage + 1,true)}
          {toggleFn(pageCount - 1)}
        </n.Row>) : (isRightEdge ? (
        <n.Row>
          {toggleFn(0)}
          {toggleFn(showPage - 3,true)}
          {data.arr_map(data.arr_range([pageCount - 4,pageCount]),toggleFn)}
        </n.Row>) : (
        <n.Row>
          {toggleFn(0)}
          {toggleFn(showPage - 3,true)}
          {data.arr_map(data.arr_range([showPage - 2,showPage + 1]),toggleFn)}
          {toggleFn(showPage + 1,true)}
          {toggleFn(pageCount - 1)}
        </n.Row>)))}
    </ReactNative.View>);
}

// melbourne.slim-sheet/SheetGroupHeader [91] 
export function SheetGroupHeader({design,variant,group,style,styleContainer,...iprops}){
  let {name,format = lib.identity} = group;
  return (
    <ReactNative.View style={{"marginTop":10}}>
      <n.Row style={styleContainer}>
        <ui_text.H6
          style={[
              {"fontWeight":900,"borderRadius":2,"paddingVertical":3},
              ...data.arrayify(style)
            ]}
          design={design}>{format(name)}
        </ui_text.H6>
      </n.Row>
      <ui_static.Separator
        variant={{"fg":{"key":"background","mix":"primary","ratio":1}}}
        style={{"marginBottom":10}}
        design={design}/>
    </ReactNative.View>);
}

// melbourne.slim-sheet/SheetHeader [127] 
export function SheetHeader({
  design,
  impl,
  variant = {"fg":{"key":"background"},"bg":{"key":"primary"}},
  custom = {},
  style,
  ...iprops
}){
  let {columns,header = {}} = impl;
  let columnFn = function (column,i){
    let {key} = column;
    let {style,...rprops} = data.get_in(custom,[key]) || {};
    let Component = slim_entry.EntryContentTitleH5;
    let oprops = Object.assign({},{
      design,
      "impl":Object.assign(
        {},
        column,
        header,
        {"variant":variant,"template":column.name},
        column.header
      ),
      "style":[
        {"paddingVertical":5,"paddingHorizontal":10},
        ...data.arrayify(style)
      ]
    },rprops);
    return (
      <ReactNative.View key={i} style={[{"flex":1},column.style]}>{React.createElement(Component,oprops)}</ReactNative.View>);
  };
  return (
    <ui_static.Div
      style={[
          {
                "flexDirection":"row",
                "maxWidth":500,
                "marginBottom":10,
                "paddingHorizontal":10,
                "alignItems":"center"
              },
          ...data.arrayify(style)
        ]}
      design={design}
      variant={variant}>{columns.map(columnFn)}
    </ui_static.Div>);
}

// melbourne.slim-sheet/SheetRow [176] 
export function SheetRow({design,variant,impl,style,custom = {},...iprops}){
  let {columns} = impl;
  let columnFn = function (column,i){
    let {key} = column;
    let {style,...rprops} = data.get_in(custom,[key]) || {};
    let Component = (column.type && slim_entry.Entry) || slim_entry.EntryContentParagraph;
    let oprops = Object.assign({},iprops,{
      design,
      variant,
      "impl":column,
      "style":[{"paddingHorizontal":10},...data.arrayify(style)]
    },rprops);
    return (
      <ReactNative.View key={i} style={[{"flex":1},column.style]}>{React.createElement(Component,oprops)}</ReactNative.View>);
  };
  return (
    <ui_static.Div
      style={[
          {
                "flexDirection":"row",
                "alignItems":"center",
                "maxWidth":500,
                "marginBottom":3,
                "paddingLeft":10,
                "paddingRight":20
              },
          ...data.arrayify(style)
        ]}
      design={design}
      variant={variant}>{columns.map(columnFn)}
    </ui_static.Div>);
}

// melbourne.slim-sheet/SheetBasicRows [221] 
export function SheetBasicRows(props){
  let {design,entries,impl,style} = props;
  return (
    <ReactNative.View style={{"flex":1}}>
      {entries.map(function (entry,i){
        return React.createElement(
          SheetRow,
          Object.assign({},props,{"key":(entry.id || "") + i,"entry":entry})
        );
      })}
    </ReactNative.View>);
}

// melbourne.slim-sheet/SheetBasic [242] 
export function SheetBasic(props){
  let {design,entries,impl,style} = props;
  return (
    <React.Fragment>
      {React.createElement(SheetHeader,props)}
      <ui_static.ScrollView design={design} style={{"marginTop":10}}>{React.createElement(SheetBasicRows,props)}</ui_static.ScrollView>
    </React.Fragment>);
}

// melbourne.slim-sheet/SheetGroupRows [258] 
export function SheetGroupRows(props){
  let {group,...rprops} = props;
  let {entries} = group;
  return (
    <ReactNative.View>
      {React.createElement(SheetGroupHeader,props)}
      {React.createElement(SheetBasicRows,Object.assign(rprops,{entries}))}
    </ReactNative.View>);
}

// melbourne.slim-sheet/groupEntries [268] 
export function groupEntries(entries,impl){
  let itemsImpl = Object.assign(
    {"reverse":false,"sort":lib.identity,"filter":lib.identity},
    impl.items
  );
  let groupsImpl = Object.assign({
    "reverse":false,
    "split":data.id_fn,
    "sort":lib.identity,
    "filter":lib.T
  },impl.groups);
  let groups = groupsImpl.sort(data.obj_pairs(data.obj_map(
    data.arr_group_by(entries || [],data.template_fn(groupsImpl.split),lib.identity),
    itemsImpl.sort
  )));
  return groups;
}

// melbourne.slim-sheet/Sheet [287] 
export function Sheet(props){
  let {entries,impl,noHeader} = props;
  let itemsImpl = Object.assign(
    {"reverse":false,"sort":lib.identity,"filter":lib.identity},
    impl.items
  );
  let isGrouped = lib.not_nilp(impl.groups);
  let isPaged = lib.not_nilp(impl.page);
  if(isGrouped){
    let groups = groupEntries(entries,impl);
    return (
      <ReactNative.View>
        {!noHeader ? React.createElement(SheetHeader,props) : null}
        {groups.map(function ([name,entries]){
          return React.createElement(
            SheetGroupRows,
            Object.assign({},props,{"group":{entries,name,"format":impl.groups.format}})
          );
        })}
      </ReactNative.View>);
  }
  else if(isPaged){
    return (
      <ReactNative.View/>);
  }
  else{
    return (
      <ReactNative.View>
        {!noHeader ? React.createElement(SheetHeader,props) : null}
        {React.createElement(
          SheetBasicRows,
          Object.assign({},props,{"entries":itemsImpl.sort(entries)})
        )}
      </ReactNative.View>);
  }
  return React.createElement(SheetBasicRows,props);
}

// melbourne.slim-sheet/MODULE [327] 
export var MODULE = {
  "SheetPagination":SheetPagination,
  "SheetGroupHeader":SheetGroupHeader,
  "SheetHeader":SheetHeader,
  "SheetRow":SheetRow,
  "SheetBasicRows":SheetBasicRows,
  "SheetBasic":SheetBasic,
  "SheetGroupRows":SheetGroupRows,
  "groupEntries":groupEntries,
  "Sheet":Sheet,
  "MODULE":MODULE
};