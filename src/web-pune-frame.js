import * as ReactNative from 'react-native'

import * as ui_topnotify_test from './libs/pune/ui-notify-base-test.js'

import * as ui_market_delta_test from './libs/pune/ui-market-delta-test.js'

import * as ui_depthchart_test from './libs/pune/ui-depthchart-test.js'

import * as web_pune_frame_graph from './web-pune-frame-graph.js'

import * as ui_sparkline_test from './libs/pune/ui-sparkline-test.js'

import * as ui_searchbar_test from './libs/pune/ui-searchbar-test.js'

import * as ui_submenu_test from './libs/pune/ui-submenu-test.js'

import * as ui_market_ladder_old_test from './libs/pune/ui-market-ladder-test.js'

import * as ui_console_test from './libs/pune/ui-console-test.js'

import * as ui_market_live_test from './libs/pune/ui-market-live-test.js'

import * as ui_breadcrumb_test from './libs/pune/ui-breadcrumb-test.js'

import * as ui_sidemenu_test from './libs/pune/ui-sidemenu-test.js'

import * as ui_menu_vert_test from './libs/pune/ui-menu-vert-test.js'

import * as web_pune_frame_demo from './web-pune-frame-demo.js'

import * as n from './libs/js/react-native.js'

import * as ui_page_test from './libs/pune/ui-page-test.js'

// component.web-pune-frame/__import__ [44] 
import React from 'react'

// component.web-pune-frame/BreadcrumbExamples [47] 
export function BreadcrumbExamples(){
  return (
    <React.Fragment><ui_breadcrumb_test.BreadcrumbDemo/></React.Fragment>);
}

// component.web-pune-frame/ConsoleExamples [53] 
export function ConsoleExamples(){
  return (
    <React.Fragment><ui_console_test.ConsoleDemo/></React.Fragment>);
}

// component.web-pune-frame/DepthchartExamples [59] 
export function DepthchartExamples(){
  return (
    <React.Fragment><ui_depthchart_test.MarketDepthChartDemo/></React.Fragment>);
}

// component.web-pune-frame/MainMenuExamples [66] 
export function MainMenuExamples(){
  return (
    <React.Fragment>
      <ui_menu_vert_test.MainMenuSeperatorDemo/>
      <ui_menu_vert_test.MainMenuButtonDemo/>
      <ui_menu_vert_test.MainMenuToggleDemo/>
      <ui_menu_vert_test.MainMenuRouteDemo/>
      <ui_menu_vert_test.MainMenuMiniContextDemo/>
      <ui_menu_vert_test.MainMenuDemo/>
    </React.Fragment>);
}

// component.web-pune-frame/SubMenuExamples [77] 
export function SubMenuExamples(){
  return (
    <React.Fragment>
      <ui_submenu_test.SubMenuToggleDemo/>
      <ui_submenu_test.SubMenuRouteDemo/>
      <ui_submenu_test.SubMenuDemo/>
    </React.Fragment>);
}

// component.web-pune-frame/SideBarExamples [85] 
export function SideBarExamples(){
  return (
    <React.Fragment/>);
}

// component.web-pune-frame/SideMenuExamples [91] 
export function SideMenuExamples(){
  return (
    <React.Fragment>
      <ui_sidemenu_test.SideMenuTitleDemo/>
      <ui_sidemenu_test.SideMenuListDemo/>
      <ui_sidemenu_test.SideMenuFloatingDemo/>
    </React.Fragment>);
}

// component.web-pune-frame/SearchBarExamples [99] 
export function SearchBarExamples(){
  return (
    <React.Fragment><ui_searchbar_test.SearchBarDemo/></React.Fragment>);
}

// component.web-pune-frame/NotifyAlertsExamples [104] 
export function NotifyAlertsExamples(){
  return (
    <React.Fragment/>);
}

// component.web-pune-frame/TopNotifyExamples [118] 
export function TopNotifyExamples(){
  return (
    <React.Fragment>
      <ui_topnotify_test.TopNotifyInnerDemo/>
      <ui_topnotify_test.TopNotifyDemo/>
    </React.Fragment>);
}

// component.web-pune-frame/PageExamples [126] 
export function PageExamples(){
  return (
    <React.Fragment>
      <ui_page_test.PageLayoutHeaderDemo/>
      <ui_page_test.PageLayoutMenuDemo/>
      <ui_page_test.PageLayoutDemo/>
    </React.Fragment>);
}

// component.web-pune-frame/SparklineExamples [134] 
export function SparklineExamples(){
  return (
    <React.Fragment><ui_sparkline_test.SparklineDemo/></React.Fragment>);
}

// component.web-pune-frame/DeltaExamples [140] 
export function DeltaExamples(){
  return (
    <React.Fragment><ui_market_delta_test.DeltaDemo/></React.Fragment>);
}

// component.web-pune-frame/LadderExamples [146] 
export function LadderExamples(){
  return (
    <React.Fragment>
      <ui_market_ladder_old_test.MarketLadderTextDemo/>
      <ui_market_ladder_old_test.MarketLadderRowDemo/>
      <ui_market_ladder_old_test.MarketLadderDemo/>
    </React.Fragment>);
}

// component.web-pune-frame/LiveExamples [154] 
export function LiveExamples(){
  return (
    <React.Fragment>
      <ui_market_live_test.MarketLiveRowDemo/>
      <ui_market_live_test.MarketLiveDemo/>
    </React.Fragment>);
}

// component.web-pune-frame/MetamaskContractExamples [163] 
export function MetamaskContractExamples(){
  return (
    <React.Fragment/>);
}

// component.web-pune-frame/MetamaskUserExamples [169] 
export function MetamaskUserExamples(){
  return (
    <React.Fragment/>);
}

// component.web-pune-frame/FrameDemo [175] 
export function FrameDemo(){
  return (
    <ReactNative.View style={{"height":700,"maxWidth":650}}><web_pune_frame_demo.FrameMain/></ReactNative.View>);
}

// component.web-pune-frame/ChartDemo [183] 
export function ChartDemo(){
  return (
    <ReactNative.View style={{"height":700,"maxWidth":650}}><web_pune_frame_graph.Demo002LightweightCharts/></ReactNative.View>);
}

// component.web-pune-frame/pune-frame-controls [191] 
export function pune_frame_controls(){
  return {
    "101-sidemenu":SideMenuExamples,
    "102-mainmenu":MainMenuExamples,
    "103-submenu":SubMenuExamples,
    "104-topnotify":TopNotifyExamples,
    "104a-notifyalert":NotifyAlertsExamples,
    "105-console":ConsoleExamples,
    "106-breadcrumb":BreadcrumbExamples,
    "108-sidebar":SideBarExamples,
    "109-searchbar":SearchBarExamples,
    "201-page":PageExamples,
    "600-sparkline":SparklineExamples,
    "601-depthchart":DepthchartExamples,
    "602-ladder":LadderExamples,
    "603-live":LiveExamples,
    "605-delta":DeltaExamples,
    "701-mm-contract":MetamaskContractExamples,
    "702-mm-user":MetamaskUserExamples,
    "900-frame":FrameDemo,
    "901-chart":ChartDemo
  };
}

// component.web-pune-frame/MODULE [214] 
export var MODULE = {
  "BreadcrumbExamples":BreadcrumbExamples,
  "ConsoleExamples":ConsoleExamples,
  "DepthchartExamples":DepthchartExamples,
  "MainMenuExamples":MainMenuExamples,
  "SubMenuExamples":SubMenuExamples,
  "SideBarExamples":SideBarExamples,
  "SideMenuExamples":SideMenuExamples,
  "SearchBarExamples":SearchBarExamples,
  "NotifyAlertsExamples":NotifyAlertsExamples,
  "TopNotifyExamples":TopNotifyExamples,
  "PageExamples":PageExamples,
  "SparklineExamples":SparklineExamples,
  "DeltaExamples":DeltaExamples,
  "LadderExamples":LadderExamples,
  "LiveExamples":LiveExamples,
  "MetamaskContractExamples":MetamaskContractExamples,
  "MetamaskUserExamples":MetamaskUserExamples,
  "FrameDemo":FrameDemo,
  "ChartDemo":ChartDemo,
  "pune_frame_controls":pune_frame_controls,
  "MODULE":MODULE
};