import * as ReactNative from 'react-native'

import React from 'react'

import * as xtd from '../../xt/lang/common-data.js'

import * as model_roller from './model-roller.js'

import * as physical_base from './physical-base.js'

import * as physical_edit from './physical-edit.js'

import * as math from '../../xt/lang/common-math.js'

import * as a from './animate.js'

import * as n from '../react-native.js'

// js.react-native.model-roller-impl-test/doubleTransform [23] 
export function doubleTransform(offset,i,modelFn){
  let v = offset - i;
  let {scale,translate,visible} = modelFn(v);
  return {
    "style":{
        "opacity":visible ? math.mix(-2,1,scale) : 0,
        "zIndex":10 * scale,
        "transform":[{"translateY":translate}]
      }
  };
}

// js.react-native.model-roller-impl-test/make-values [41] 
export function make_values(values,divisions){
  let total = values.length;
  let n = math.lcm(total,divisions) / total;
  return xtd.arr_mapcat(xtd.arr_repeat(values,n),function (v){
    return v;
  });
}

// js.react-native.model-roller-impl-test/get-element [49] 
export function get_element(offset,index,divisions,values){
  let noffset = math.round(offset);
  let center = math.mod_pos(noffset,divisions);
  let shifted = index - center;
  let shifted_mod = math.mod_pos(shifted,divisions);
  let normalised = (shifted_mod < (divisions / 2)) ? shifted_mod : (shifted_mod - divisions);
  let total = values.length;
  return values[math.mod_pos(noffset + normalised,total)];
}

// js.react-native.model-roller-impl-test/createComponent [62] 
export function createComponent(index,indicator,modelFn,transformFn,style,divisions,values){
  return {
    "component":ReactNative.TextInput,
    "editable":false,
    "style":[
        {
          "position":"absolute",
          "width":15,
          "padding":2,
          "fontWeight":"800",
          "textAlign":"center",
          "color":"white"
        },
        style
      ],
    "transformations":{
        [indicator]:function (offset){
            return xtd.obj_assign(
              transformFn(offset,index,modelFn),
              {"text":get_element(offset,index,divisions,values)}
            );
          }
      }
  };
}

// js.react-native.model-roller-impl-test/DIVISIONS [85] 
export var DIVISIONS = 7;

// js.react-native.model-roller-impl-test/DigitRollerManualDemo [90] 
export function DigitRollerManualDemo(){
  let values = React.useRef(xtd.arr_map(xtd.arr_range(DIVISIONS),function (i){
    return new ReactNative.Animated.Value(i);
  })).current;
  let lu = React.useRef(xtd.arr_juxt(values,function (v){
    return "index" + v._value;
  },function (v){
    return v;
  })).current;
  let [offset0,setOffset0] = React.useState(0);
  let ioffset0 = a.useIndexIndicator(offset0,{"default":{"duration":800}},function (progress,{status}){
    if(status == "stopped"){
      model_roller.roller_set_values(values,DIVISIONS,offset0,DIGITS.length);
    }
  });
  let modelFn = React.useRef(model_roller.roller_model(DIVISIONS,20)).current;
  React.useEffect(function (){
    model_roller.roller_set_values(values,DIVISIONS,offset0,DIGITS.length);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.model-roller/DigitRollerManual"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"height\":80,\"width\":80,\"backgroundColor\":\"black\"}}>\n      {xtd.arr_map(xtd.arr_range(DIVISIONS),function (index,i){\n        return (\n          <physical_base.Text\n            key={i}\n            indicators={{\"offset\":ioffset0,\"value\":values[index]}}\n            style={[\n                {\n                      \"position\":\"absolute\",\n                      \"width\":20,\n                      \"padding\":2,\n                      \"fontWeight\":\"800\",\n                      \"textAlign\":\"center\",\n                      \"color\":\"white\",\n                      \"top\":30,\n                      \"left\":20\n                    }\n              ]}\n            transformations={function ({offset,value}){\n                let v = offset - index;\n                let {scale,translate,visible} = modelFn(v);\n                return {\n                  \"text\":DIGITS[value],\n                  \"style\":{\n                            \"opacity\":visible ? scale : 0,\n                            \"transform\":[\n                                      {\"scale\":2 * scale},\n                                      {\"translateY\":translate},\n                                      {\"translateX\":0.5 * Math.abs(translate)}\n                                    ]\n                          }\n                };\n              }}/>);\n      })}\n    </ReactNative.View>\n    <ReactNative.View>\n      <ReactNative.Button\n        title=\"-1\"\n        onPress={function (){\n            return setOffset0(offset0 - 1);\n          }}/>\n      <ReactNative.Button\n        title=\"+1\"\n        onPress={function (){\n            return setOffset0(offset0 + 1);\n          }}/>\n    </ReactNative.View>\n    <ReactNative.Text>{offset0}</ReactNative.Text>\n    <n.Fill/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"height":80,"width":80,"backgroundColor":"black"}}>
          {xtd.arr_map(xtd.arr_range(DIVISIONS),function (index,i){
            return (
              <physical_base.Text
                key={i}
                indicators={{"offset":ioffset0,"value":values[index]}}
                style={[
                    {
                          "position":"absolute",
                          "width":20,
                          "padding":2,
                          "fontWeight":"800",
                          "textAlign":"center",
                          "color":"white",
                          "top":30,
                          "left":20
                        }
                  ]}
                transformations={function ({offset,value}){
                    let v = offset - index;
                    let {scale,translate,visible} = modelFn(v);
                    return {
                      "text":DIGITS[value],
                      "style":{
                                "opacity":visible ? scale : 0,
                                "transform":[
                                          {"scale":2 * scale},
                                          {"translateY":translate},
                                          {"translateX":0.5 * Math.abs(translate)}
                                        ]
                              }
                    };
                  }}/>);
          })}
        </ReactNative.View>
        <ReactNative.View>
          <ReactNative.Button
            title="-1"
            onPress={function (){
                return setOffset0(offset0 - 1);
              }}/>
          <ReactNative.Button
            title="+1"
            onPress={function (){
                return setOffset0(offset0 + 1);
              }}/>
        </ReactNative.View>
        <ReactNative.Text>{offset0}</ReactNative.Text>
        <n.Fill/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.model-roller-impl-test/DIVISIONS_PAN [166] 
export var DIVISIONS_PAN = 10;

// js.react-native.model-roller-impl-test/DIGITS [168] 
export var DIGITS = ["0","1","2","3","4","5","6","7","8","9"];

// js.react-native.model-roller-impl-test/DigitRollerPanDemo [171] 
export function DigitRollerPanDemo(){
  let [position0,setPosition0] = React.useState(50);
  let offset0 = a.useIndexIndicator(position0,{"default":{"duration":200}});
  let [position1,setPosition1] = React.useState(0);
  let offset1 = a.useIndexIndicator(position1,{"default":{"duration":200}});
  let modelFn = React.useRef(model_roller.roller_model(DIVISIONS,20)).current;
  let DIGITS_ARRAY = React.useRef(make_values(DIGITS,DIVISIONS)).current;
  let HOURS_ARRAY = React.useRef(make_values(DIGITS,DIVISIONS)).current;
  let position = React.useCallback(new ReactNative.Animated.Value(100),[]);
  let responder = React.useRef(
    physical_edit.createPan({"pan":{"dy":position},"absolute":true})
  ).current;
  React.useEffect(function (){
    position.addListener(function ({value}){
      let normed = Math.floor((-position._value) / 2);
      if(position0 != normed){
        setPosition0(normed);
      }
    });
  },[]);
  React.useEffect(function (){
    setPosition1(Math.floor(position0 / 10));
  },[position0]);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.model-roller/DigitRollerPan"
      code={(function (){
          return "(\n  <n.Row>\n    <physical_base.Box\n      indicators={{\"offset0\":offset0,\"offset1\":offset1}}\n      style={{\"height\":80,\"width\":80,\"backgroundColor\":\"black\"}}\n      addons={[\n          ...xtd.arr_map(xtd.arr_range(DIVISIONS),function (index){\n            return createComponent(\n              index,\n              \"offset1\",\n              modelFn,\n              doubleTransform,\n              {\"top\":30,\"left\":18},\n              DIVISIONS,\n              HOURS_ARRAY\n            );\n          }),\n          ...xtd.arr_map(xtd.arr_range(DIVISIONS),function (index){\n            return createComponent(\n              index,\n              \"offset0\",\n              modelFn,\n              doubleTransform,\n              {\"top\":30,\"left\":30},\n              DIVISIONS,\n              DIGITS_ARRAY\n            );\n          })\n        ]}/>\n    <physical_base.Box\n      indicators={{position}}\n      style={[\n          {\n            \"justifyContent\":\"end\",\n            \"alignItems\":\"center\",\n            \"height\":200,\n            \"backgroundColor\":\"blue\",\n            \"width\":30\n          }\n        ]}\n      addons={[]}\n      inner={[\n          xtd.obj_assign({\n            \"component\":ReactNative.View,\n            \"style\":[\n                {\"cursor\":\"grab\",\"height\":20,\"width\":20,\"backgroundColor\":\"red\"}\n              ],\n            \"transformations\":{\n                \"position\":function (v){\n                    return {\"style\":{\"transform\":[{\"translateY\":v}]}};\n                  }\n              }\n          },responder.panHandlers)\n        ]}/>\n    <n.Fill/>\n    <physical_base.Tag indicator={position}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <physical_base.Box
          indicators={{"offset0":offset0,"offset1":offset1}}
          style={{"height":80,"width":80,"backgroundColor":"black"}}
          addons={[
              ...xtd.arr_map(xtd.arr_range(DIVISIONS),function (index){
                return createComponent(
                  index,
                  "offset1",
                  modelFn,
                  doubleTransform,
                  {"top":30,"left":18},
                  DIVISIONS,
                  HOURS_ARRAY
                );
              }),
              ...xtd.arr_map(xtd.arr_range(DIVISIONS),function (index){
                return createComponent(
                  index,
                  "offset0",
                  modelFn,
                  doubleTransform,
                  {"top":30,"left":30},
                  DIVISIONS,
                  DIGITS_ARRAY
                );
              })
            ]}/>
        <physical_base.Box
          indicators={{position}}
          style={[
              {
                "justifyContent":"end",
                "alignItems":"center",
                "height":200,
                "backgroundColor":"blue",
                "width":30
              }
            ]}
          addons={[]}
          inner={[
              xtd.obj_assign({
                "component":ReactNative.View,
                "style":[
                    {"cursor":"grab","height":20,"width":20,"backgroundColor":"red"}
                  ],
                "transformations":{
                    "position":function (v){
                        return {"style":{"transform":[{"translateY":v}]}};
                      }
                  }
              },responder.panHandlers)
            ]}/>
        <n.Fill/>
        <physical_base.Tag indicator={position}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}