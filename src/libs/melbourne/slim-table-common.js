import React from 'react'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ext_form from '../js/react/ext-form.js'

import * as ext_view from '../js/react/ext-model.js'

import * as ui_text from './ui-text.js'

import * as slim_entry from './slim-entry.js'

import * as n from '../js/react-native.js'

// melbourne.slim-table-common/useTableEntry [28] 
export function useTableEntry(props){
  let {control,displayKey,views} = props;
  let entryId = control.showDetail || control.showModify;
  let entries = props.entries || ext_view.listenView(views[displayKey || "list"],"success") || [];
  let remote_entries = data.get_in(views,[displayKey,"remote","current"]) || [];
  if(lib.is_objectp(remote_entries)){
    remote_entries = [];
  }
  let entry = entries.find(function (e){
    return entryId == e.id;
  }) || remote_entries.find(function (e){
    return entryId == e.id;
  }) || {};
  return entry;
}

// melbourne.slim-table-common/TableDefaultNotFound [60] 
export function TableDefaultNotFound({design}){
  return (
    <ui_text.H4 design={design}>NOT FOUND</ui_text.H4>);
}

// melbourne.slim-table-common/TableDefaultIsLoading [66] 
export function TableDefaultIsLoading({design}){
  return (
    <ui_text.H4 design={design}>LOADING...</ui_text.H4>);
}

// melbourne.slim-table-common/TableBackButton [72] 
export function TableBackButton({control,design}){
  return (
    <ui_text.ButtonMinor
      text={(
          <RNIcon key="back" name="chevron-thin-left" style={{"padding":0}}/>)}
      style={{
          "width":30,
          "height":27,
          "paddingHorizontal":0,
          "textAlign":"center"
        }}
      onPress={function (){
          if(control.showModify){
            control.setShowModify(false);
          }
          else{
            control.setShowCreate(false);
            control.setShowDetail(null);
          }
        }}
      design={design}/>);
}

// melbourne.slim-table-common/tablePageHooks [96] 
export function tablePageHooks(props,hooks){
  if(lib.is_functionp(hooks)){
    return hooks(props);
  }
  else if(lib.is_arrayp(hooks)){
    return data.arr_foldl(hooks,function (init,f){
      let out = f(init);
      return Object.assign(init,out);
    },Object.assign({},props));
  }
}

// melbourne.slim-table-common/TableProgressBack [110] 
export function TableProgressBack(props){
  let {control,entry} = props;
  r.useCountdown(1,function (){
    if(data.is_emptyp(entry)){
      control.setShowDetail(null);
    }
  });
  return (
    <ReactNative.View
      style={{"flex":1,"alignItems":"center","justifyContent":"center"}}><ReactNative.ActivityIndicator/>
    </ReactNative.View>);
}

// melbourne.slim-table-common/tablePageView [125] 
export function tablePageView(props,page){
  let {
    display = {},
    displayKey = "list",
    design,
    views,
    entries,
    control,
    components
  } = props;
  let variant = {"bg":{"key":"background","tone":"sharpen"}};
  let entry = (views && useTableEntry({control,displayKey,entries,views})) || props.entry;
  let impl = display[page];
  let implForm = data.get_in(impl,["form"]);
  let form = props.form || implForm;
  if(lib.is_arrayp(form)){
    form = ext_form.makeForm(function (){
      return data.first(implForm)(entry,props);
    },data.second(implForm)(entry,props));
    ext_form.listenFormData(form);
  }
  let hooks = components["hooks_" + page];
  let hprops = tablePageHooks(Object.assign({},props,{entry}),hooks);
  if(data.is_emptyp(entry) && (page == "detail")){
    return React.createElement(TableProgressBack,Object.assign({},props,{entry}));
  }
  let HeaderComponent = components["header_" + page] || (impl && impl.header && slim_entry.Entry);
  let PageComponent = components["entry_" + page] || (impl && slim_entry.Entry) || TableDefaultNotFound;
  let implHeader = impl.header || {};
  implHeader = {
    "main":{
        "type":"v",
        "style":{
            "paddingTop":10,
            "paddingBottom":5,
            "minHeight":30,
            "maxWidth":500
          },
        "body":data.arrayify(implHeader.main)
      }
  };
  let implHeaderActions = impl.header_actions;
  let headerElem = HeaderComponent ? React.createElement(HeaderComponent,Object.assign({},props,hprops,{
    "entry":entry,
    "form":form,
    "impl":data.get_in(impl,["header","link"]) ? Object.assign({"type":"link"},impl.header) : (implHeader ? {
        "type":"card",
        "body":Object.assign({"isHeader":true},implHeader)
      } : null)
  })) : null;
  let headerActionsElem = (control.showHeader && implHeaderActions) ? (
    <ReactNative.View style={{}}>
      {React.createElement(slim_entry.Entry,Object.assign(
        {},
        props,
        hprops,
        {"entry":entry,"form":form,"impl":implHeaderActions}
      ))}
    </ReactNative.View>) : null;
  let pageElem = React.createElement(PageComponent,Object.assign(
    {},
    props,
    hprops,
    {"entry":entry,"form":form,"impl":display[page]}
  ));
  return (
    <ui_static.Div style={{"flex":1}} design={design}>
      {control.showHeader ? (
        <n.Row>{headerElem}</n.Row>) : null}
      {headerActionsElem}
      {(control.showScroll && (false != impl.scroll)) ? React.createElement(ui_static.ScrollView,{design},pageElem) : pageElem}
    </ui_static.Div>);
}

// melbourne.slim-table-common/MODULE [277] 
export var MODULE = {
  "useTableEntry":useTableEntry,
  "TableDefaultNotFound":TableDefaultNotFound,
  "TableDefaultIsLoading":TableDefaultIsLoading,
  "TableBackButton":TableBackButton,
  "tablePageHooks":tablePageHooks,
  "TableProgressBack":TableProgressBack,
  "tablePageView":tablePageView,
  "MODULE":MODULE
};