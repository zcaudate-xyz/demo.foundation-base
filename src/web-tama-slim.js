import {defaultConfig} from '@tamagui/config/v4'

import * as T from 'tamagui'

import * as tama_overlay_test from './libs/melbourne/tama-overlay-test.js'

import * as tama_slim_test from './libs/melbourne/tama-slim-test.js'

import * as tama_form_test from './libs/melbourne/tama-form-test.js'

// component.web-tama-slim/__import__ [19] 
import React from 'react'

// component.web-tama-slim/TAMA-CONFIG [22] 
export var TAMA_CONFIG = T.createTamagui(defaultConfig);

// component.web-tama-slim/TamaProvider [24] 
export function TamaProvider(props){
  return (
    <T.TamaguiProvider config={TAMA_CONFIG} defaultTheme="light">{props.children}</T.TamaguiProvider>);
}

// component.web-tama-slim/TamaSlimPage [32] 
export function TamaSlimPage(Target){
  return (
    <TamaProvider><Target/></TamaProvider>);
}

// component.web-tama-slim/TamaSlimCommonExamples [38] 
export function TamaSlimCommonExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimCommonDemo);
}

// component.web-tama-slim/TamaSlimNumberExamples [42] 
export function TamaSlimNumberExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimNumberDemo);
}

// component.web-tama-slim/TamaSlimSelectExamples [46] 
export function TamaSlimSelectExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimSelectDemo);
}

// component.web-tama-slim/TamaSlimImageExamples [50] 
export function TamaSlimImageExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimImageDemo);
}

// component.web-tama-slim/TamaSlimLinkExamples [54] 
export function TamaSlimLinkExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimLinkDemo);
}

// component.web-tama-slim/TamaSlimErrorExamples [58] 
export function TamaSlimErrorExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimErrorDemo);
}

// component.web-tama-slim/TamaSlimSubmitExamples [62] 
export function TamaSlimSubmitExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimSubmitDemo);
}

// component.web-tama-slim/TamaSlimDialogExamples [66] 
export function TamaSlimDialogExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimDialogDemo);
}

// component.web-tama-slim/TamaSlimEntryExamples [70] 
export function TamaSlimEntryExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimEntryDemo);
}

// component.web-tama-slim/TamaSlimPopupExamples [74] 
export function TamaSlimPopupExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimPopupDemo);
}

// component.web-tama-slim/TamaSlimSheetExamples [78] 
export function TamaSlimSheetExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimSheetDemo);
}

// component.web-tama-slim/TamaSlimTablemExamples [82] 
export function TamaSlimTablemExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimTablemDemo);
}

// component.web-tama-slim/TamaSlimTablegExamples [86] 
export function TamaSlimTablegExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimTablegDemo);
}

// component.web-tama-slim/TamaSlimTableExamples [90] 
export function TamaSlimTableExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimTableDemo);
}

// component.web-tama-slim/TamaSlimTablepExamples [94] 
export function TamaSlimTablepExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimTablepDemo);
}

// component.web-tama-slim/TamaSlimTablesExamples [98] 
export function TamaSlimTablesExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimTablesDemo);
}

// component.web-tama-slim/TamaSlimTablexExamples [102] 
export function TamaSlimTablexExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimTablexDemo);
}

// component.web-tama-slim/TamaSlimOverviewExamples [106] 
export function TamaSlimOverviewExamples(){
  return TamaSlimPage(tama_slim_test.TamaSlimDemo);
}

// component.web-tama-slim/TamaSlimFoundationExamples [110] 
export function TamaSlimFoundationExamples(){
  return TamaSlimPage(function (){
    return (
      <React.Fragment>
        <tama_form_test.TamaFormDemo/>
        <tama_overlay_test.TamaOverlayDemo/>
      </React.Fragment>);
  });
}

// component.web-tama-slim/tama-controls [119] 
export function tama_controls(){
  return {
    "201a-slim-common":TamaSlimCommonExamples,
    "201b-slim-number":TamaSlimNumberExamples,
    "201c-slim-select":TamaSlimSelectExamples,
    "201e-slim-image":TamaSlimImageExamples,
    "201f-slim-link":TamaSlimLinkExamples,
    "201g-slim-error":TamaSlimErrorExamples,
    "201h-slim-submit":TamaSlimSubmitExamples,
    "201i-slim-dialog":TamaSlimDialogExamples,
    "201j-slim-entry":TamaSlimEntryExamples,
    "201k-slim-popup":TamaSlimPopupExamples,
    "201l-slim-sheet":TamaSlimSheetExamples,
    "201m-slim-tablem":TamaSlimTablemExamples,
    "201n-slim-tableg":TamaSlimTablegExamples,
    "201o-slim-table":TamaSlimTableExamples,
    "201p-slim-tablep":TamaSlimTablepExamples,
    "201q-slim-tables":TamaSlimTablesExamples,
    "201r-slim-tablex":TamaSlimTablexExamples,
    "201s-slim":TamaSlimOverviewExamples,
    "201t-tama-foundation":TamaSlimFoundationExamples
  };
}

// component.web-tama-slim/MODULE [142] 
export var MODULE = {
  "TAMA_CONFIG":TAMA_CONFIG,
  "TamaProvider":TamaProvider,
  "TamaSlimPage":TamaSlimPage,
  "TamaSlimCommonExamples":TamaSlimCommonExamples,
  "TamaSlimNumberExamples":TamaSlimNumberExamples,
  "TamaSlimSelectExamples":TamaSlimSelectExamples,
  "TamaSlimImageExamples":TamaSlimImageExamples,
  "TamaSlimLinkExamples":TamaSlimLinkExamples,
  "TamaSlimErrorExamples":TamaSlimErrorExamples,
  "TamaSlimSubmitExamples":TamaSlimSubmitExamples,
  "TamaSlimDialogExamples":TamaSlimDialogExamples,
  "TamaSlimEntryExamples":TamaSlimEntryExamples,
  "TamaSlimPopupExamples":TamaSlimPopupExamples,
  "TamaSlimSheetExamples":TamaSlimSheetExamples,
  "TamaSlimTablemExamples":TamaSlimTablemExamples,
  "TamaSlimTablegExamples":TamaSlimTablegExamples,
  "TamaSlimTableExamples":TamaSlimTableExamples,
  "TamaSlimTablepExamples":TamaSlimTablepExamples,
  "TamaSlimTablesExamples":TamaSlimTablesExamples,
  "TamaSlimTablexExamples":TamaSlimTablexExamples,
  "TamaSlimOverviewExamples":TamaSlimOverviewExamples,
  "TamaSlimFoundationExamples":TamaSlimFoundationExamples,
  "tama_controls":tama_controls,
  "MODULE":MODULE
};