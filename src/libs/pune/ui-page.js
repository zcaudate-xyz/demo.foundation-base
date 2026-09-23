import * as ReactNative from 'react-native'

import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as ui_sidemenu from './ui-sidemenu.js'

import * as ui_static from '../melbourne/ui-static.js'

import * as r from '../js/react.js'

import * as ui_breadcrumb from './ui-breadcrumb.js'

import * as n from '../js/react-native.js'

// pune.ui-page/PageLayoutHeader [31] 
export function PageLayoutHeader({
  design,
  mini,
  actions,
  headerId,
  routeKey,
  routeRoot,
  singleRoute,
  noBanner,
  noBreadcrumb,
  overrideBreadcrumb,
  overrideToolbar = {},
  children
}){
  let [toolbar,setToolbar] = React.useState();
  let bprops = Object.assign({actions,design,mini,noBanner},singleRoute ? {"root":[],"path":data.first(routeRoot)} : {
    "root":routeRoot,
    "path":routeKey ? ("" + routeKey).toUpperCase() : null
  },overrideBreadcrumb);
  let tprops = Object.assign({"design":design},overrideToolbar,{
    "style":[
        {"zIndex":100,"overflow":"hidden"},
        ...data.arrayify(overrideToolbar.style)
      ]
  });
  return React.createElement(ui_static.Div,tprops,!noBreadcrumb ? React.createElement(ui_breadcrumb.Breadcrumb,Object.assign(
    bprops,
    {"variant":{"bg":{"key":"primary"}},"style":{"padding":10}}
  )) : children,(
    <n.Row>
      <n.PortalSink name={headerId} onSource={setToolbar} style={{"flex":1}}/>
    </n.Row>));
}

// pune.ui-page/PageLayoutMenu [87] 
export function PageLayoutMenu({actions,appendId,design,mini,overrideSideMenu,routeKey,routeRoot,sections,setRouteKey}){
  let dimensions = ReactNative.useWindowDimensions();
  let override = overrideSideMenu ? overrideSideMenu(routeKey,mini) : null;
  let menuProps = Object.assign(
    {actions,design,mini,routeKey,setRouteKey,"miniTitle":routeRoot && (data.first(routeRoot) || "").toUpperCase(),"data":sections,"narrowed":dimensions.width < 720},
    override
  );
  return (
    <React.Fragment>
      <ui_sidemenu.SideMenu {...menuProps}/>
      <ReactNative.View
        style={{"bottom":10,"right":10,"zIndex":100,"position":"absolute"}}><n.PortalSink name={appendId}/>
      </ReactNative.View>
    </React.Fragment>);
}

// pune.ui-page/PageLayout [124] 
export function PageLayout({
  design,
  mini,
  actions,
  sections,
  sectionRoutes,
  sectionPropsFn = (function (){
  return null;
}),
  noBanner,
  noSideMenu,
  route,
  routeRoot,
  routeKey,
  setRouteKey,
  children,
  overrideToolbar,
  overrideSideMenu,
  overrideBreadcrumb,
  noBreadcrumb
}){
  let headerId = r.id();
  let appendId = r.id();
  let Component = sectionRoutes[routeKey];
  let cprops = Object.assign(
    {actions,appendId,design,headerId,mini,route},
    sectionPropsFn(routeKey)
  );
  return (
    <ReactNative.View style={{"flexDirection":"row-reverse","flex":1}}>
      {!noSideMenu ? (
        <PageLayoutMenu
          routeKey={routeKey}
          sections={sections}
          mini={mini}
          route={route}
          setRouteKey={setRouteKey}
          routeRoot={routeRoot}
          actions={actions}
          appendId={appendId}
          design={design}
          overrideSideMenu={overrideSideMenu}/>) : null}
      <ReactNative.View style={{"flex":1}}>
        <PageLayoutHeader
          noBanner={noBanner}
          noBreadcrumb={noBreadcrumb}
          routeKey={routeKey}
          overrideBreadcrumb={overrideBreadcrumb}
          headerId={headerId}
          overrideToolbar={overrideToolbar}
          mini={mini}
          routeRoot={routeRoot}
          actions={actions}
          design={design}/>
        {children}
        {Component ? (
          <Component {...cprops}/>) : null}
      </ReactNative.View>
    </ReactNative.View>);
}

// pune.ui-page/PageLayoutSingle [182] 
export function PageLayoutSingle({
  design,
  mini,
  actions,
  sectionPropsFn = (function (){
  return null;
}),
  noBanner,
  noSideMenu,
  route,
  routeRoot,
  children
}){
  let headerId = r.id();
  return (
    <ReactNative.View style={{"flexDirection":"row-reverse","flex":1}}>
      <ReactNative.View style={{"flex":1}}>
        <PageLayoutHeader
          singleRoute={true}
          noBanner={noBanner}
          headerId={headerId}
          mini={mini}
          routeRoot={routeRoot}
          actions={actions}
          design={design}/>
        {children}
      </ReactNative.View>
    </ReactNative.View>);
}

// pune.ui-page/MODULE [220] 
export var MODULE = {
  "PageLayoutHeader":PageLayoutHeader,
  "PageLayoutMenu":PageLayoutMenu,
  "PageLayout":PageLayout,
  "PageLayoutSingle":PageLayoutSingle,
  "MODULE":MODULE
};