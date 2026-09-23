import React from 'react'

import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as physical_base from './physical-base.js'

import * as helper_theme from './helper-theme.js'

import * as physical_edit from './physical-edit.js'

import * as math from '../../xt/lang/common-math.js'

import * as helper_theme_default from './helper-theme-default.js'

// js.react-native.ui-spinner-basic/styleDigit [16] 
export var styleDigit = {"overflow":"hidden","marginLeft":5};

// js.react-native.ui-spinner-basic/styleDigitText [22] 
export var styleDigitText = {
  "fontSize":16,
  "marginLeft":5,
  "fontWeight":"400",
  "backgroundColor":"red",
  "color":"#333"
};

// js.react-native.ui-spinner-basic/spinnerTheme [31] 
export function spinnerTheme({theme,themePipeline,...rprops}){
  let __theme = Object.assign({},helper_theme_default.ButtonDefaultTheme,theme);
  let __themePipeline = Object.assign({},helper_theme_default.PressDefaultPipeline,themePipeline);
  let [styleStatic,transformFn] = helper_theme.prepThemeCombined({"theme":__theme,"themePipeline":__themePipeline,...rprops});
  return [styleStatic,transformFn];
}

// js.react-native.ui-spinner-basic/useSpinnerPosition [48] 
export function useSpinnerPosition(value,setValue,valueRef,min,max,stride,step){
  let position = React.useCallback(new ReactNative.Animated.Value(0),[]);
  let prevRef = React.useRef(value);
  React.useEffect(function (){
    position.addListener(function (){
      let {_offset,_value} = position;
      let nValue = math.clamp(
        min,
        max,
        valueRef.current - (Math.round(_value / (stride || 8)) * (step || 1))
      );
      if(nValue != prevRef.current){
        setValue(nValue);
        prevRef.current = nValue;
      }
    });
  },[]);
  return position;
}

// js.react-native.ui-spinner-basic/SpinnerStatic [69] 
export function SpinnerStatic({text,styleText,style,editable}){
  return (
    <ReactNative.View style={[styleDigit,...xtd.arrayify(style)]}>
      <ReactNative.Text
        style={[
            styleDigitText,
            ReactNative.Platform.select({
              "web":{
                  "userSelect":"none",
                  "cursor":editable ? "ns-resize" : "default"
                }
            }),
            ...xtd.arrayify(styleText)
          ]}>{text}
      </ReactNative.Text>
    </ReactNative.View>);
}

// js.react-native.ui-spinner-basic/SpinnerBasicValues [90] 
export function SpinnerBasicValues({
  max,
  min,
  onChange,
  value,
  editable,
  setValue,
  styleDigit,
  styleDigitText,
  styleDecimal,
  styleDecimalText,
  decimal = 0
}){
  return (
    <SpinnerStatic
      text={(value / Math.pow(10,decimal)).toFixed(Math.max(0,decimal))}
      styleText={styleDigitText}
      editable={editable}/>);
}

// js.react-native.ui-spinner-basic/SpinnerBasic [112] 
export function SpinnerBasic({
  theme,
  themePipeline,
  disabled,
  min,
  max,
  step,
  decimal,
  panDirection = "vertical",
  panStride = 15,
  value,
  setValue,
  style,
  styleText,
  chord,
  onHoverIn,
  onHoverOut,
  ...rprops
}){
  let [__value,__setValue] = React.useState(value);
  let __valueRef = React.useRef(__value);
  let [styleStatic,transformFn] = spinnerTheme({theme,themePipeline,...rprops});
  let position = useSpinnerPosition(__value,__setValue,__valueRef,min,max,panStride,step);
  let {panHandlers,touchable} = physical_edit.usePanTouchable({
    disabled,
    "chord":Object.assign({"value":__value},chord),
    ...rprops
  },panDirection || "vertical",position,false);
  let {hovering,pressing,setHovering,setPressing} = touchable;
  React.useEffect(function (){
    __valueRef.current = __value;
  },[pressing]);
  React.useEffect(function (){
    if(!pressing){
      setValue(__value);
    }
  },[pressing,__value]);
  React.useEffect(function (){
    if(value != __value){
      __setValue(value);
    }
  },[value]);
  return (
    <physical_base.Box
      indicators={touchable.indicators}
      chord={touchable.chord}
      onMouseEnter={function (e){
          setHovering(true);
          if(onHoverIn){
            onHoverIn(e);
          }
        }}
      onMouseLeave={function (e){
          setHovering(false);
          if(onHoverOut){
            onHoverOut(e);
          }
        }}
      onMouseUp={function (){
          setPressing(false);
        }}
      style={[
          {"overflow":"hidden","flexDirection":"row"},
          styleStatic,
          ReactNative.Platform.select({"web":{"userSelect":"none","cursor":"default"}}),
          ...xtd.arrayify(style)
        ]}
      transformations={transformFn}
      children={[
          (
                <SpinnerBasicValues
                  key="values"
                  editable={true}
                  value={__value}
                  setValue={__setValue}
                  min={min}
                  max={max}
                  decimal={decimal}
                  {...rprops}/>)
        ]}
      {...Object.assign(touchable,panHandlers)}/>);
}