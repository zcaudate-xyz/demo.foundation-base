import React from 'react'

import * as r from '../js/react.js'

import * as ui_text from './ui-text.js'

import * as slim_dialog from './slim-dialog.js'

import * as n from '../js/react-native.js'

// melbourne.ui-text-dialog/ConfirmDialog [33] 
export function ConfirmDialog(props){
  let {
    component = "minor",
    confirm = {},
    design,
    variant,
    text,
    onPressIn,
    onPress,
    style,
    ...rprops
  } = props;
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let hostRef = React.useRef();
  let ButtonComponent = {"minor":ui_text.ButtonMinor,"accent":ui_text.ButtonAccent}[component] || component;
  return (
    <React.Fragment>
      {React.createElement(ButtonComponent,{
        "refLink":hostRef,
        design,
        variant,
        text,
        style,
        "onPress":function (){
          if(onPressIn){
            onPressIn();
          }
          setVisible(!visible);
        },
        ...rprops
      })}
      <slim_dialog.Dialog
        design={Object.assign({},design,{"invert":true})}
        title={confirm.title || "CONFIRM"}
        body={confirm.body || "Do you wish to proceed?"}
        modalProps={{"transition":"none","effect":{"fade":0.1,"zoom":0.1}}}
        onSubmit={function (){
            setVisible(false);
            onPress();
          }}
        onCancel={function (){
            return setVisible(false);
          }}
        visible={visible}/>
    </React.Fragment>);
}

// melbourne.ui-text-dialog/MODULE [77] 
export var MODULE = {"ConfirmDialog":ConfirmDialog,"MODULE":MODULE};