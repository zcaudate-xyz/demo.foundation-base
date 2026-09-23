import * as ReactNative from 'react-native'

import * as common_style from './common/style.js'

import * as n from '../js/react-native.js'

// pune.ui-searchbar/SearchBar [18] 
export function SearchBar({
  design,
  value,
  setValue,
  onChangeText,
  onSubmitEditing,
  onClear,
  placeholder,
  disabled,
  autoFocus,
  style,
  styleInput,
  ...rprops
}){
  let theme = common_style.tokens(design);
  let changeFn = onChangeText || setValue || (function (){
    
  });
  let clearFn = onClear || (function (){
    if(setValue){
      setValue("");
    }
  });
  return (
    <ReactNative.View
      style={[
          {
                "flexDirection":"row",
                "alignItems":"center",
                "gap":8,
                "width":"100%",
                "minHeight":42,
                "paddingHorizontal":12,
                "borderWidth":1,
                "borderRadius":10
              },
          common_style.controlStyle(design),
          style
        ]}>
      <ReactNative.Text style={{"fontSize":17,"color":theme.muted}}>⌕</ReactNative.Text>
      <ReactNative.TextInput
        {...Object.assign({
        "style":[
          {
          "flex":1,
          "minWidth":0,
          "padding":0,
          "fontSize":14,
          "color":theme.text
        },
          styleInput
        ],
        "value":value || "",
        "placeholder":placeholder || "Search",
        "placeholderTextColor":theme.muted,
        "editable":!disabled,
        "autoFocus":autoFocus,
        "onChangeText":changeFn,
        "onSubmitEditing":onSubmitEditing
      },rprops)}/>
      {(value && (value.length > 0)) ? (
        <ReactNative.Pressable accessibilityRole="button" onPress={clearFn}>
          <ReactNative.Text style={{"fontSize":18,"color":theme.muted}}>×</ReactNative.Text>
        </ReactNative.Pressable>) : null}
    </ReactNative.View>);
}

// pune.ui-searchbar/MODULE [82] 
export var MODULE = {"SearchBar":SearchBar,"MODULE":MODULE};