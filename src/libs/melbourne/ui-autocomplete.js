import React from 'react'

import * as r from '../js/react.js'

import * as ui_autocomplete from '../js/react-native/ui-autocomplete.js'

import * as ui_text from './ui-text.js'

import * as n from '../js/react-native.js'

import * as ui_input from './ui-input.js'

// melbourne.ui-autocomplete/SelectComponentEmpty [28] 
export function SelectComponentEmpty({design}){
  return (
    <ui_text.H5 design={design}>Not Found</ui_text.H5>);
}

// melbourne.ui-autocomplete/SelectComponentBusy [35] 
export function SelectComponentBusy({design}){
  return (
    <ui_text.H5 design={design}>Fetching Data...</ui_text.H5>);
}

// melbourne.ui-autocomplete/SelectComponentEntry [42] 
export function SelectComponentEntry({design,entry,selected,setSelected,source}){
  return (
    <ui_text.ButtonAccent
      onPress={function (){
          return setSelected(entry);
        }}
      text={JSON.stringify(entry)}
      design={design}/>);
}

// melbourne.ui-autocomplete/SelectSingle [54] 
export function SelectSingle({design,selected,setSelected,source,...rprops}){
  let hostRef = React.useRef();
  let [value,setValue] = React.useState("");
  let [visible,setVisible] = React.useState();
  return selected ? (
    <ui_text.ButtonAccent
      onPress={function (){
          return setSelected(null);
        }}
      text={JSON.stringify(selected)}
      design={design}/>) : (
    <React.Fragment>
      <ui_input.Input
        design={{"type":"dark"}}
        refLink={hostRef}
        value={value}
        onChangeText={setValue}
        onFocus={function (){
            return setVisible(true);
          }}
        onBlur={function (){
            return setVisible(false);
          }}/>
      <ui_autocomplete.Autocomplete
        visible={visible}
        sourceInput={[value]}
        sourceView={source.view}
        componentEmpty={SelectComponentEmpty}
        setVisible={setVisible}
        selected={selected}
        component={SelectComponentEntry}
        componentBusy={SelectComponentBusy}
        setSelected={setSelected}
        hostRef={hostRef}/>
    </React.Fragment>);
}

// melbourne.ui-autocomplete/MODULE [87] 
export var MODULE = {
  "SelectComponentEmpty":SelectComponentEmpty,
  "SelectComponentBusy":SelectComponentBusy,
  "SelectComponentEntry":SelectComponentEntry,
  "SelectSingle":SelectSingle,
  "MODULE":MODULE
};