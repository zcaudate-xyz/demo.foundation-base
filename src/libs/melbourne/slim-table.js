import React from 'react'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as r from '../js/react.js'

import * as ui_section from './ui-section.js'

import * as ext_view from '../js/react/ext-model.js'

import * as slim_table_list from './slim-table-list.js'

import * as ui_router from '../js/react-native/ui-router.js'

import * as ui_text from './ui-text.js'

import * as slim_table_common from './slim-table-common.js'

import * as n from '../js/react-native.js'

// melbourne.slim-table/TableModifyView [45] 
export function TableModifyView(props){
  return slim_table_common.tablePageView(props,"modify");
}

// melbourne.slim-table/TableDetailView [50] 
export function TableDetailView(props){
  return slim_table_common.tablePageView(props,"detail");
}

// melbourne.slim-table/TableCreateView [56] 
export function TableCreateView(props){
  return slim_table_common.tablePageView(props,"create");
}

// melbourne.slim-table/TableRouterLu [61] 
export var TableRouterLu = {
  "detail":TableDetailView,
  "create":TableCreateView,
  "modify":TableModifyView
};

// melbourne.slim-table/TableRouterView [66] 
export function TableRouterView(props){
  let {
    design,
    control,
    components = {},
    displayKey = "list",
    display = {},
    custom = {},
    views = {},
    entries
  } = props;
  let {routeKey} = control;
  let routeComponent = slim_table_common.TableDefaultNotFound;
  if(components[routeKey]){
    routeComponent = components[routeKey];
  }
  else if((routeKey == "list") && (entries || views[displayKey])){
    routeComponent = slim_table_list.TableList;
  }
  else if(display[routeKey]){
    routeComponent = (TableRouterLu[routeKey] || slim_table_common.TableDefaultNotFound);
  }
  let routeElem = (
    <React.Suspense
      fallback={(
          <slim_table_common.TableDefaultIsLoading design={design}/>)}>
      {React.createElement(routeComponent,Object.assign({},props,custom[routeKey]))}
    </React.Suspense>);
  return ((routeKey == "list") && (false != data.get_in(display,["list","scroll"]))) ? (
    <ui_static.ScrollView design={design}>{routeElem}</ui_static.ScrollView>) : routeElem;
}

// melbourne.slim-table/TableRouter [114] 
export function TableRouter(props){
  let {control} = props;
  let routeComponentFn = function (){
    return TableRouterView;
  };
  let routePropsFn = function (routeKey){
    return Object.assign({routeKey},props);
  };
  let transitionMap = {
    "list":{"detail":"from_right","create":"from_left"},
    "detail":{"list":"from_left","modify":"flip_horizontal"},
    "modify":{"detail":"flip_horizontal"},
    "create":{"list":"from_right"}
  };
  return (
    <ui_router.Router
      routeKey={control.routeKey}
      style={{"flex":1}}
      noTransition={true}
      routeComponentFn={routeComponentFn}
      routePropsFn={routePropsFn}
      transitionMap={transitionMap}/>);
}

// melbourne.slim-table/Table [137] 
export function Table(props){
  let {design,mini,control,components,views,custom = {}} = props;
  return React.createElement(TableRouter,props);
}

// melbourne.slim-table/TableStandard [150] 
export function TableStandard(props){
  let {design,control,impl,views,display,displayKey = "list"} = props;
  let entries = ext_view.listenView(views[displayKey],"success");
  let embedded = data.get_in(display,["list","embedded"]) || {};
  return (
    <ReactNative.View style={{"flex":1}}>
      {(data.is_emptyp(entries) && control.showList) ? (
        <ReactNative.View
          style={{"flex":1,"justifyContent":"center","alignItems":"center"}}>
          <ui_section.EmptyButton
            textButton={embedded.emptyText || "ADD"}
            onPress={function (){
                return control.setShowCreate(true);
              }}
            design={design}/>
        </ReactNative.View>) : null}
      {(data.not_emptyp(entries) || !control.showList) ? React.createElement(Table,props) : null}
    </ReactNative.View>);
}

// melbourne.slim-table/TableEmbedded [181] 
export function TableEmbedded(props){
  let {design,control,impl,views,display,displayKey = "list"} = props;
  let entries = props.entries || ext_view.listenView(views[displayKey],"success");
  let embedded = data.get_in(display,["list","embedded"]) || {};
  return (
    <n.Row style={{"flex":1}}>
      {(data.not_emptyp(entries) && control.showList) ? (
        <ReactNative.View style={{"marginTop":8}}>
          <ui_text.ButtonMinor
            text={(
                <RNIcon key="plus" name="plus"/>)}
            onPress={function (){
                return control.setShowCreate(true);
              }}
            design={design}/>
        </ReactNative.View>) : null}
      <ReactNative.View style={{"flex":1}}>
        {(data.is_emptyp(entries) && control.showList) ? (
          <ReactNative.View
            style={{"flex":1,"justifyContent":"center","alignItems":"center"}}>
            <ui_section.EmptyButton
              textButton={embedded.emptyText || "ADD"}
              onPress={function (){
                  return control.setShowCreate(true);
                }}
              design={design}/>
          </ReactNative.View>) : null}
        {(data.not_emptyp(entries) || !control.showList) ? React.createElement(Table,props) : null}
      </ReactNative.View>
    </n.Row>);
}

// melbourne.slim-table/MODULE [225] 
export var MODULE = {
  "TableModifyView":TableModifyView,
  "TableDetailView":TableDetailView,
  "TableCreateView":TableCreateView,
  "TableRouterLu":TableRouterLu,
  "TableRouterView":TableRouterView,
  "TableRouter":TableRouter,
  "Table":Table,
  "TableStandard":TableStandard,
  "TableEmbedded":TableEmbedded,
  "MODULE":MODULE
};