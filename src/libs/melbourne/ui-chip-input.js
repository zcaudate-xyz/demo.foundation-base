import React from 'react'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ReactNative from 'react-native'

import * as ui_button from './ui-button.js'

import * as data from '../xt/lang/common-data.js'

import * as ui_chip from './ui-chip.js'

import * as lib from '../xt/lang/common-lib.js'

import * as ui_util from '../js/react-native/ui-util.js'

import * as n from '../js/react-native.js'

import * as string from '../xt/lang/common-string.js'

import * as ui_input from './ui-input.js'

// melbourne.ui-chip-input/ChipInput [26] 
export function ChipInput({
  design,
  variant,
  theme,
  styleContainer,
  style,
  values,
  setValues,
  ...rprops
}){
  if(lib.is_stringp(values)){
    values = JSON.parse(values);
  }
  if(data.is_emptyp(values)){
    values = [];
  }
  let [showInput,setShowInput] = React.useState();
  let [currentText,setCurrentText] = React.useState("");
  let refInput = React.useRef();
  let visibleInput = showInput || data.is_emptyp(values);
  return (
    <n.Row style={styleContainer}>
      <ReactNative.View>
        <ui_util.Fold visible={visibleInput}>
          <ui_input.Input
            design={design}
            refLink={refInput}
            value={currentText}
            onFocus={function (){
                return setShowInput(true);
              }}
            onBlur={function (){
                return setShowInput(false);
              }}
            onSubmitEditing={function (){
                if(data.not_emptyp(currentText)){
                  setValues([...values,currentText]);
                  setCurrentText("");
                  setShowInput(false);
                }
                else if(data.not_emptyp(values)){
                  setShowInput(false);
                }
              }}
            onChangeText={function (text){
                if(text.endsWith(",")){
                  let out = string.trim(data.first(text.split(",")));
                  if(data.not_emptyp(out)){
                    setValues([...values,out]);
                    setCurrentText("");
                  }
                }
                else{
                  setCurrentText(text);
                }
              }}/>
        </ui_util.Fold>
        <n.Row
          style={{"flexWrap":"wrap","maxWidth":400,"alignItems":"center"}}>
          {values.map(function (value,i){
            return (
              <ui_chip.Chip
                key={i}
                text={value}
                onClose={function (){
                    return setValues(data.arr_omit(values,i));
                  }}
                design={design}/>);
          })}
          {data.not_emptyp(values) ? (
            <ui_button.Button
              variant={{
                  "fg":{"key":"primary"},
                  "bg":{"key":"background"},
                  "pressed":{"bg":{"key":"background"}}
                }}
              outlined={true}
              onPress={function (){
                  return data.not_emptyp(values) ? setShowInput(!showInput) : null;
                }}
              style={{
                  "borderRadius":0,
                  "margin":3,
                  "padding":4,
                  "paddingHorizontal":7,
                  "width":30,
                  "borderWidth":1,
                  "textAlign":"center"
                }}
              text={(
                  <RNIcon key="icon" name={visibleInput ? "minus" : "plus"}/>)}
              design={design}/>) : null}
        </n.Row>
      </ReactNative.View>
    </n.Row>);
}

// melbourne.ui-chip-input/MODULE [110] 
export var MODULE = {"ChipInput":ChipInput,"MODULE":MODULE};