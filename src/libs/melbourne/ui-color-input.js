import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as n from '../js/react-native.js'

import * as ui_input from './ui-input.js'

// melbourne.ui-color-input/ColorInput [24] 
export function ColorInput({design,variant,theme,styleContainer,style,value,setValue,...rprops}){
  let [currentText,setCurrentText] = React.useState(value);
  React.useEffect(function (){
    setCurrentText(value);
  },[value]);
  return (
    <n.Row style={[{"alignItems":"center"},styleContainer]}>
      <ui_input.Input
        value={currentText}
        onSubmitEditing={function (){
            setValue(currentText);
          }}
        onChangeText={setCurrentText}
        onBlur={function (){
            return setCurrentText(value);
          }}
        design={design}/>
      {data.not_emptyp(value) ? (
        <ReactNative.View style={{"backgroundColor":value,"height":30,"width":30}}/>) : null}
    </n.Row>);
}

// melbourne.ui-color-input/MODULE [55] 
export var MODULE = {"ColorInput":ColorInput,"MODULE":MODULE};