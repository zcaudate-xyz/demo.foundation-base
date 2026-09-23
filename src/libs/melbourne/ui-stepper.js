import * as ReactNative from 'react-native'

import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as model_roller from '../js/react-native/model-roller.js'

import * as physical_base from '../js/react-native/physical-base.js'

import * as ui_group from './ui-group.js'

import * as math from '../xt/lang/common-math.js'

import * as a from '../js/react-native/animate.js'

// melbourne.ui-stepper/StepperTabs [25] 
export function StepperTabs({design,variant,total,style,styleContainer,index,setIndex,...rprops}){
  return (
    <ui_group.TabsIndexed
      style={[
          {
                "height":10,
                "width":10,
                "borderRadius":10,
                "padding":2,
                "marginHorizontal":6
              },
          ...data.arrayify(style)
        ]}
      items={data.arr_repeat("",total)}
      design={design}
      variant={variant}
      setIndex={setIndex}
      index={index}
      {...rprops}/>);
}

// melbourne.ui-stepper/stepperOffset [51] 
export function stepperOffset(modelFn,total,offset,index){
  let v = offset - index;
  let {scale,translate,visible} = modelFn(v);
  return {
    "style":{
        "opacity":visible ? math.mix(0,1,scale) : 0,
        "zIndex":visible ? (100 * scale) : -100
      }
  };
}

// melbourne.ui-stepper/Stepper [65] 
export function Stepper({
  index,
  setIndex,
  style,
  pageStyle,
  offsetFn = stepperOffset,
  pages = [],
  ...rprops
}){
  let total = Math.max(pages.length,1);
  let iindicator = a.useCircularIndicator(index,{
    "default":{
        "type":"timing",
        "duration":500,
        "easing":ReactNative.Easing.linear
      }
  },null,null,total,null);
  let modelFn = React.useRef(model_roller.roller_model(total,10)).current;
  let pageFn = function (page,i){
    return (
      <physical_base.Box
        key={"page" + i}
        style={[{"position":"absolute"},...data.arrayify(pageStyle)]}
        indicators={{"offset":iindicator}}
        children={[
            (
                    <ReactNative.View key="parent">{page}</ReactNative.View>)
          ]}
        transformations={{
            "offset":function (offset){
                      return offsetFn(modelFn,total,offset,i);
                    }
          }}/>);
  };
  return (
    <ReactNative.View style={[{"overflow":"hidden"},...data.arrayify(style)]}>{pages.map(pageFn)}</ReactNative.View>);
}

// melbourne.ui-stepper/MODULE [106] 
export var MODULE = {
  "StepperTabs":StepperTabs,
  "stepperOffset":stepperOffset,
  "Stepper":Stepper,
  "MODULE":MODULE
};