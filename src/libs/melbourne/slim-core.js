import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as ext_route from '../js/react/ext-route.js'

import * as r from '../js/react.js'

// melbourne.slim-core/useLocalPrimitives [11] 
export function useLocalPrimitives(override){
  override = (override || {});
  let [showCreate,setShowCreate] = override.create || React.useState();
  let [showModify,setShowModify] = override.modify || React.useState();
  let [showDetail,setShowDetail] = override.detail || React.useState();
  let [orderBy,setOrderBy] = override.orderBy || React.useState(true);
  let [showScroll,setShowScroll] = override.scroll || React.useState(true);
  let [showHeader,setShowHeader] = override.header || React.useState(true);
  return {orderBy,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowModify,setShowScroll,showCreate,showDetail,showHeader,showModify,showScroll};
}

// melbourne.slim-core/useRoutePrimitives [47] 
export function useRoutePrimitives(route,override){
  override = (override || {});
  let [showCreate,setShowCreate] = override.create || ext_route.useRouteParamFlag(route,"section","create");
  let [showModify,setShowModify] = override.modify || ext_route.useRouteParam(route,"modify");
  let [showDetail,setShowDetail] = override.detail || ext_route.useRouteParam(route,"detail");
  let [showHeader,setShowHeader] = override.header || React.useState(true);
  let [showScroll,setShowScroll] = override.scroll || React.useState(true);
  let [orderBy,setOrderBy] = override.orderBy || ext_route.useRouteParam(route,"orderBy");
  return {orderBy,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowModify,setShowScroll,showCreate,showDetail,showHeader,showModify,showScroll};
}

// melbourne.slim-core/useListControl [92] 
export function useListControl({orderBy,setOrderBy,setShowCreate,setShowDetail,setShowModify,showCreate,showDetail,showModify}){
  let routeKey = showModify ? "modify" : (showDetail ? "detail" : (showCreate ? "create" : "list"));
  let [backAction,setBackAction] = React.useState();
  let [showList,setShowList] = [
    routeKey == "list",
    function (){
      if(showDetail && setShowDetail){
        setShowDetail(null);
      }
      if(showModify && setShowModify){
        setShowModify(null);
      }
      if(showCreate && setShowCreate){
        setShowCreate(false);
      }
    }
  ];
  return {backAction,routeKey,setBackAction,setShowList,showList};
}

// melbourne.slim-core/useRouteControl [130] 
export function useRouteControl(route,override,m){
  let control = useRoutePrimitives(route,override);
  return Object.assign(useListControl(control),control);
}

// melbourne.slim-core/useLocalControl [138] 
export function useLocalControl(m){
  let control = useLocalPrimitives();
  return Object.assign(useListControl(control),control,m);
}

// melbourne.slim-core/getParentProps [147] 
export function getParentProps(props){
  return data.obj_pick(
    props,
    ["entry","data","parent","display","control","actions"]
  );
}

// melbourne.slim-core/useParentControl [158] 
export function useParentControl(props,control,opts){
  let {showCreate,showDetail,showList,showModify} = control;
  let parent = getParentProps(props);
  React.useEffect(function (){
    parent.control.setShowScroll(false);
    return function (){
      return parent.control.setShowScroll(true);
    };
  },[]);
  React.useEffect(function (){
    if((showCreate && ("disable" != data.get_in(opts,["create"]))) || (showModify && ("disable" != data.get_in(opts,["modify"]))) || (showDetail && ("disable" != data.get_in(opts,["detail"])))){
      parent.control.setShowHeader(false);
    }
    else{
      parent.control.setShowHeader(true);
    }
    return function (){
      return parent.control.setShowHeader(true);
    };
  },[showDetail,showCreate,showModify]);
  return parent;
}

// melbourne.slim-core/MODULE [185] 
export var MODULE = {
  "useLocalPrimitives":useLocalPrimitives,
  "useRoutePrimitives":useRoutePrimitives,
  "useListControl":useListControl,
  "useRouteControl":useRouteControl,
  "useLocalControl":useLocalControl,
  "getParentProps":getParentProps,
  "useParentControl":useParentControl,
  "MODULE":MODULE
};