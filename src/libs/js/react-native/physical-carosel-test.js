import * as ReactNative from 'react-native'

import React from 'react'

import * as xtd from '../../xt/lang/common-data.js'

import * as model_roller from './model-roller.js'

import * as physical_base from './physical-base.js'

import * as math from '../../xt/lang/common-math.js'

import * as a from './animate.js'

import * as n from '../react-native.js'

// js.react-native.physical-carosel-test/DIVISIONS [26] 
export var DIVISIONS = 2;

// js.react-native.physical-carosel-test/DIGITS [28] 
export var DIGITS = ["0","1"];

// js.react-native.physical-carosel-test/DigitCaroselManualDemo [31] 
export function DigitCaroselManualDemo(){
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
  let modelFn = React.useRef(model_roller.roller_model(DIVISIONS,10)).current;
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.physical-carosel/DigitCaroselManual"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View\n      style={{\n          \"flex\":1,\n          \"height\":200,\n          \"backgroundColor\":\"white\",\n          \"overflow\":\"hidden\"\n        }}>\n      {xtd.arr_map(xtd.arr_range(DIVISIONS),function (index,i){\n        return (\n          <physical_base.Box\n            key={i}\n            indicators={{\"offset\":ioffset0,\"value\":values[index]}}\n            style={[\n                {\n                      \"position\":\"absolute\",\n                      \"padding\":2,\n                      \"fontWeight\":\"800\",\n                      \"height\":200,\n                      \"width\":\"100%\",\n                      \"textAlign\":\"center\",\n                      \"backgroundColor\":\"white\"\n                    }\n              ]}\n            children={[\n                (\n                      <ReactNative.View\n                        key=\"A\"\n                        style={{\"flex\":1,\"justifyContent\":\"center\",\"alignItems\":\"center\"}}>\n                        <ReactNative.Text key=\"B\" style={{\"position\":\"absolute\",\"top\":0,\"left\":0}}>{\"HELLO\" + i}</ReactNative.Text>\n                        <ReactNative.Text key=\"C\" style={{\"position\":\"absolute\",\"top\":0,\"right\":0}}>{\"HELLO\" + i}</ReactNative.Text>\n                        <ReactNative.Text\n                          key=\"D\"\n                          style={{\n                              \"fontSize\":100,\n                              \"backgroundColor\":\"red\",\n                              \"shadowOpacity\":0.8,\n                              \"shadowRadius\":10,\n                              \"width\":400\n                            }}>{\"HELLO\" + i}\n                        </ReactNative.Text>\n                      </ReactNative.View>)\n              ]}\n            transformations={function ({offset,value}){\n                let v = offset - index;\n                let {scale,translate,visible} = modelFn(v);\n                return {\n                  \"value\":DIGITS[value],\n                  \"style\":{\n                            \"opacity\":visible ? 1 : 0,\n                            \"zIndex\":10 * scale,\n                            \"transform\":[\n                                      {\n                                              \"translateX\":8 * math.sign(translate) * translate * translate\n                                            }\n                                    ]\n                          }\n                };\n              }}/>);\n      })}\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"-1\"\n      onPress={function (){\n          return setOffset0(offset0 - 1);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"+1\"\n      onPress={function (){\n          return setOffset0(offset0 + 1);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <n.Fill/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View
          style={{
              "flex":1,
              "height":200,
              "backgroundColor":"white",
              "overflow":"hidden"
            }}>
          {xtd.arr_map(xtd.arr_range(DIVISIONS),function (index,i){
            return (
              <physical_base.Box
                key={i}
                indicators={{"offset":ioffset0,"value":values[index]}}
                style={[
                    {
                          "position":"absolute",
                          "padding":2,
                          "fontWeight":"800",
                          "height":200,
                          "width":"100%",
                          "textAlign":"center",
                          "backgroundColor":"white"
                        }
                  ]}
                children={[
                    (
                          <ReactNative.View
                            key="A"
                            style={{"flex":1,"justifyContent":"center","alignItems":"center"}}>
                            <ReactNative.Text key="B" style={{"position":"absolute","top":0,"left":0}}>{"HELLO" + i}</ReactNative.Text>
                            <ReactNative.Text key="C" style={{"position":"absolute","top":0,"right":0}}>{"HELLO" + i}</ReactNative.Text>
                            <ReactNative.Text
                              key="D"
                              style={{
                                  "fontSize":100,
                                  "backgroundColor":"red",
                                  "shadowOpacity":0.8,
                                  "shadowRadius":10,
                                  "width":400
                                }}>{"HELLO" + i}
                            </ReactNative.Text>
                          </ReactNative.View>)
                  ]}
                transformations={function ({offset,value}){
                    let v = offset - index;
                    let {scale,translate,visible} = modelFn(v);
                    return {
                      "value":DIGITS[value],
                      "style":{
                                "opacity":visible ? 1 : 0,
                                "zIndex":10 * scale,
                                "transform":[
                                          {
                                                  "translateX":8 * math.sign(translate) * translate * translate
                                                }
                                        ]
                              }
                    };
                  }}/>);
          })}
        </ReactNative.View>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="-1"
          onPress={function (){
              return setOffset0(offset0 - 1);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="+1"
          onPress={function (){
              return setOffset0(offset0 + 1);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <n.Fill/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}