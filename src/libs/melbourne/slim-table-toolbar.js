import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ui_text_dialog from './ui-text-dialog.js'

import * as r from '../js/react.js'

import * as ui_text from './ui-text.js'

import * as ui_toolbar from './ui-toolbar.js'

import * as ui_util from '../js/react-native/ui-util.js'

import * as n from '../js/react-native.js'

// melbourne.slim-table-toolbar/TableToolbar [26] 
export function TableToolbar({toolbarOpts = {},...rprops}){
  let {actions,children,control,design,mini} = rprops;
  let {showCreate = true,showOrderBy = true} = toolbarOpts;
  let createElem = (
    <ui_text.ToggleAccent
      variant={ui_toolbar.accentStandard()}
      text={(
          <RNIcon key="create" name={!control.showList ? "left" : "plus"}/>)}
      onPress={function (){
          if(!control.showList || control.showCreate){
            control.setShowCreate(false);
            control.setShowList(true);
          }
          else{
            control.setShowCreate(true);
          }
        }}
      design={design}/>);
  let editElem = (
    <ui_text.ToggleAccent
      variant={ui_toolbar.accentStandard()}
      text="EDIT"
      onPress={function (){
          
        }}
      design={design}/>);
  let deleteElem = (
    <ui_text_dialog.ConfirmDialog
      variant={ui_toolbar.accentStandard()}
      text="DELETE"
      onPress={function (){
          return actions.delete(control.showDetail);
        }}
      design={design}/>);
  let orderByElem = (
    <ui_util.Fade visible={!mini || control.showList}>
      <ui_text.TabsMinor
        variant={ui_toolbar.minorStandard()}
        styleContainer={{"margin":0}}
        style={{"marginHorizontal":3}}
        data={["name","time"]}
        value={control.orderBy}
        setValue={control.setOrderBy}
        format={function (s){
            return s.toUpperCase();
          }}
        design={design}/>
    </ui_util.Fade>);
  return (
    <ui_toolbar.Toolbar style={{"paddingTop":3,"height":36}} design={design}>
      {showCreate ? createElem : null}
      {children}
      {(!control.showDetail && showOrderBy) ? orderByElem : null}
      <n.Fill/>
    </ui_toolbar.Toolbar>);
}

// melbourne.slim-table-toolbar/MODULE [93] 
export var MODULE = {"TableToolbar":TableToolbar,"MODULE":MODULE};