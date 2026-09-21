import React from 'react'

import * as ReactNative from 'react-native'

import * as xtd from '../../xt/lang/common-data.js'

import * as model_roller from './model-roller.js'

import * as physical_base from './physical-base.js'

import * as math from '../../xt/lang/common-math.js'

import * as a from './animate.js'

import * as n from '../react-native.js'

// js.react-native.physical-play-test/make-values [22] 
export function make_values(values,divisions){
  let total = values.length;
  let n = math.lcm(total,divisions) / total;
  return xtd.arr_mapcat(xtd.arr_repeat(values,n),function (v){
    return v;
  });
}

// js.react-native.physical-play-test/get-element [30] 
export function get_element(offset,index,divisions,values){
  let noffset = math.round(offset);
  let center = math.mod_pos(noffset,divisions);
  let shifted = index - center;
  let shifted_mod = math.mod_pos(shifted,divisions);
  let normalised = (shifted_mod < (divisions / 2)) ? shifted_mod : (shifted_mod - divisions);
  let total = values.length;
  return values[math.mod_pos(noffset + normalised,total)];
}

// js.react-native.physical-play-test/singleTransform [43] 
export function singleTransform(offset,i,modelFn){
  let v = offset - i;
  let {scale,translate,visible} = modelFn(v);
  return {
    "style":{
        "opacity":visible ? math.mix(-1.5,1,scale) : 0,
        "zIndex":10 * scale,
        "transform":[
            {"translateY":-translate},
            {"translateX":0.5 * Math.abs(translate)},
            {"scaleX":math.mix(0.2,1,scale)},
            {"scaleY":math.mix(0.2,1,scale)}
          ]
      }
  };
}

// js.react-native.physical-play-test/doubleTransform [61] 
export function doubleTransform(offset,i,modelFn){
  let v = offset - i;
  let {scale,translate,visible} = modelFn(v);
  return {
    "style":{
        "opacity":visible ? math.mix(-2,1,scale) : 0,
        "zIndex":10 * scale,
        "transform":[{"translateY":-translate}]
      }
  };
}

// js.react-native.physical-play-test/clockTransform [79] 
export function clockTransform(offset,i,modelFn){
  let v = offset - i;
  let {scale,translate,visible} = modelFn(v);
  return {
    "style":{
        "opacity":visible ? math.mix(-10,1,scale) : 0,
        "zIndex":100 * scale,
        "transform":[
            {"translateY":-1.4 * translate},
            {"scale":math.mix(-4,2,scale)}
          ]
      }
  };
}

// js.react-native.physical-play-test/createComponent [97] 
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

// js.react-native.physical-play-test/useInterval [115] 
export function useInterval(f,ms){
  let interval = React.useRef(null);
  let [active,setActive] = React.useState(true);
  React.useEffect(function (){
    if(active && !interval.current){
      interval.current = setInterval(f,ms);
    }
    if(!active && interval.current){
      clearInterval(interval.current);
      interval.current = null;
    }
  },[active]);
  return [active,setActive];
}

// js.react-native.physical-play-test/DATES [134] 
export var DATES = [
  "1989",
  "1990",
  "1991",
  "1992",
  "1993",
  "1994",
  "1995",
  "1996",
  "1997",
  "1998"
];

// js.react-native.physical-play-test/DigitRollerStaticDemo [137] 
export function DigitRollerStaticDemo(){
  let modelFn = model_roller.roller_model(10,30);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.physical-play/DigitRollerStatic"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"height\":80,\"width\":80}}>\n      {xtd.arr_map(DATES,function (date,i){\n        let {scale,translate,visible} = modelFn(i - 5);\n        return visible ? [\n          (\n            <ReactNative.Text\n              key={date}\n              style={{\n                  \"position\":\"absolute\",\n                  \"padding\":1,\n                  \"top\":30,\n                  \"left\":30,\n                  \"opacity\":math.mix(0.5,1,scale,function (v){\n                          return v * v * v * v * v * v * v;\n                        }),\n                  \"transform\":[\n                          {\"translateY\":translate},\n                          {\"translateX\":0.15 * Math.abs(translate)},\n                          {\"scaleY\":scale}\n                        ]\n                }}>{date}\n            </ReactNative.Text>)\n        ] : null;\n      })}\n    </ReactNative.View>\n    <n.Fill/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"height":80,"width":80}}>
          {xtd.arr_map(DATES,function (date,i){
            let {scale,translate,visible} = modelFn(i - 5);
            return visible ? [
              (
                <ReactNative.Text
                  key={date}
                  style={{
                      "position":"absolute",
                      "padding":1,
                      "top":30,
                      "left":30,
                      "opacity":math.mix(0.5,1,scale,function (v){
                              return v * v * v * v * v * v * v;
                            }),
                      "transform":[
                              {"translateY":translate},
                              {"translateX":0.15 * Math.abs(translate)},
                              {"scaleY":scale}
                            ]
                    }}>{date}
                </ReactNative.Text>)
            ] : null;
          })}
        </ReactNative.View>
        <n.Fill/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.physical-play-test/DIVISIONS [173] 
export var DIVISIONS = 6;

// js.react-native.physical-play-test/DIGITS [175] 
export var DIGITS = ["0","1","2","3","4","5","6","7","8","9"];

// js.react-native.physical-play-test/HOURS [178] 
export var HOURS = ["0","1","2","3","4","5","0","1","2","3","4","5"];

// js.react-native.physical-play-test/DigitRollerSingleDemo [181] 
export function DigitRollerSingleDemo(){
  let [position0,setPosition0] = React.useState(9);
  let offset0 = a.useIndexIndicator(position0,{"default":{"duration":500}});
  let modelFn = React.useRef(model_roller.roller_model(DIVISIONS,20)).current;
  let DIGITS_ARRAY = React.useRef(make_values(DIGITS,DIVISIONS)).current;
  let HOURS_ARRAY = React.useRef(make_values(HOURS,DIVISIONS)).current;
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.physical-play/DigitRollerSingle"
      code={(function (){
          return "(\n  <n.Row>\n    <physical_base.Box\n      indicators={{\"offset0\":offset0}}\n      style={{\"height\":80,\"width\":80,\"backgroundColor\":\"black\"}}\n      addons={[\n          ...xtd.arr_map(xtd.arr_range(DIVISIONS),function (index){\n            return createComponent(\n              index,\n              \"offset0\",\n              modelFn,\n              singleTransform,\n              {\"top\":30,\"left\":30},\n              DIVISIONS,\n              DIGITS_ARRAY\n            );\n          })\n        ]}/>\n    <ReactNative.View>\n      <ReactNative.Button\n        title=\"+1\"\n        onPress={function (){\n            return setPosition0(position0 + 1);\n          }}/>\n      <ReactNative.Button\n        title=\"-1\"\n        onPress={function (){\n            return setPosition0(position0 - 1);\n          }}/>\n    </ReactNative.View>\n    <n.Fill/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <physical_base.Box
          indicators={{"offset0":offset0}}
          style={{"height":80,"width":80,"backgroundColor":"black"}}
          addons={[
              ...xtd.arr_map(xtd.arr_range(DIVISIONS),function (index){
                return createComponent(
                  index,
                  "offset0",
                  modelFn,
                  singleTransform,
                  {"top":30,"left":30},
                  DIVISIONS,
                  DIGITS_ARRAY
                );
              })
            ]}/>
        <ReactNative.View>
          <ReactNative.Button
            title="+1"
            onPress={function (){
                return setPosition0(position0 + 1);
              }}/>
          <ReactNative.Button
            title="-1"
            onPress={function (){
                return setPosition0(position0 - 1);
              }}/>
        </ReactNative.View>
        <n.Fill/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.physical-play-test/DigitRollerDoubleDemo [220] 
export function DigitRollerDoubleDemo(){
  let [position0,setPosition0] = React.useState(99);
  let offset0 = a.useIndexIndicator(position0,{"default":{"duration":200}});
  let [position1,setPosition1] = React.useState(0);
  let offset1 = a.useIndexIndicator(position1,{"default":{"duration":200}});
  let modelFn = React.useRef(model_roller.roller_model(DIVISIONS,20)).current;
  let DIGITS_ARRAY = React.useRef(make_values(DIGITS,DIVISIONS)).current;
  let HOURS_ARRAY = React.useRef(make_values(HOURS,DIVISIONS)).current;
  React.useEffect(function (){
    setPosition1(Math.floor(position0 / 10));
  },[position0]);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.physical-play/DigitRollerDouble"
      code={(function (){
          return "(\n  <n.Row>\n    <physical_base.Box\n      indicators={{\"offset0\":offset0,\"offset1\":offset1}}\n      style={{\"height\":80,\"width\":80,\"backgroundColor\":\"black\"}}\n      addons={[\n          ...xtd.arr_map(xtd.arr_range(DIVISIONS),function (index){\n            return createComponent(\n              index,\n              \"offset1\",\n              modelFn,\n              doubleTransform,\n              {\"top\":30,\"left\":18},\n              DIVISIONS,\n              HOURS_ARRAY\n            );\n          }),\n          ...xtd.arr_map(xtd.arr_range(DIVISIONS),function (index){\n            return createComponent(\n              index,\n              \"offset0\",\n              modelFn,\n              doubleTransform,\n              {\"top\":30,\"left\":30},\n              DIVISIONS,\n              DIGITS_ARRAY\n            );\n          })\n        ]}/>\n    <ReactNative.View>\n      <ReactNative.Button\n        title=\"+1\"\n        onPress={function (){\n            return setPosition0(position0 + 1);\n          }}/>\n      <ReactNative.Button\n        title=\"-1\"\n        onPress={function (){\n            return setPosition0(position0 - 1);\n          }}/>\n    </ReactNative.View>\n    <n.Fill/>\n  </n.Row>);";
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
        <ReactNative.View>
          <ReactNative.Button
            title="+1"
            onPress={function (){
                return setPosition0(position0 + 1);
              }}/>
          <ReactNative.Button
            title="-1"
            onPress={function (){
                return setPosition0(position0 - 1);
              }}/>
        </ReactNative.View>
        <n.Fill/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.physical-play-test/CLOCK_DIVISIONS [280] 
export var CLOCK_DIVISIONS = 10;

// js.react-native.physical-play-test/DigitClockDemo [282] 
export function DigitClockDemo(){
  let [seconds0,setSeconds0] = React.useState(Math.floor(Date.now() / 1000));
  let iseconds0 = a.useIndexIndicator(seconds0,{"default":{"duration":100}});
  let [seconds1,setSeconds1] = React.useState(Math.floor(seconds0 / 10));
  let iseconds1 = a.useIndexIndicator(seconds1,{"default":{"duration":100}});
  let [minutes0,setMinutes0] = React.useState(Math.floor(Date.now() / 1000));
  let iminutes0 = a.useIndexIndicator(minutes0,{"default":{"duration":100}});
  let [minutes1,setMinutes1] = React.useState(Math.floor(minutes0 / 10));
  let iminutes1 = a.useIndexIndicator(minutes1,{"default":{"duration":100}});
  let [active,setActive] = useInterval(function (){
    let now = Math.floor(Date.now() / 1000);
    if(seconds0 != now){
      setSeconds0(now);
    }
  },200);
  let hexFn = React.useRef(model_roller.roller_model(6,20)).current;
  let modelFn = React.useRef(model_roller.roller_model(CLOCK_DIVISIONS,20)).current;
  let DIGITS_ARRAY = React.useRef(make_values(DIGITS,CLOCK_DIVISIONS)).current;
  React.useEffect(function (){
    setSeconds1(Math.floor(seconds0 / 10));
  },[seconds0]);
  React.useEffect(function (){
    setMinutes0(Math.floor(seconds0 / 60));
  },[seconds1]);
  React.useEffect(function (){
    setMinutes1(Math.floor(seconds0 / 600));
  },[minutes0]);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.physical-play/DigitClock"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View>\n      <physical_base.Box\n        indicators={{\"minutes1\":iminutes1}}\n        style={{\"height\":40,\"width\":20,\"backgroundColor\":\"black\"}}\n        addons={[\n            ...xtd.arr_map(xtd.arr_range(6),function (index){\n              return createComponent(index,\"minutes1\",hexFn,clockTransform,{\"top\":10,\"left\":2},6,HOURS);\n            })\n          ]}/>\n    </ReactNative.View>\n    <ReactNative.View>\n      <physical_base.Box\n        indicators={{\"minutes0\":iminutes0}}\n        style={{\"height\":40,\"width\":20,\"backgroundColor\":\"black\"}}\n        addons={[\n            ...xtd.arr_map(xtd.arr_range(CLOCK_DIVISIONS),function (index){\n              return createComponent(\n                index,\n                \"minutes0\",\n                modelFn,\n                clockTransform,\n                {\"top\":10,\"left\":2},\n                CLOCK_DIVISIONS,\n                DIGITS_ARRAY\n              );\n            })\n          ]}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"height\":40,\"width\":5}}/>\n    <ReactNative.View>\n      <physical_base.Box\n        indicators={{\"seconds1\":iseconds1}}\n        style={{\"height\":40,\"width\":20,\"backgroundColor\":\"black\"}}\n        addons={[\n            ...xtd.arr_map(xtd.arr_range(6),function (index){\n              return createComponent(index,\"seconds1\",hexFn,clockTransform,{\"top\":10,\"left\":2},6,HOURS);\n            })\n          ]}/>\n    </ReactNative.View>\n    <ReactNative.View>\n      <physical_base.Box\n        indicators={{\"seconds0\":iseconds0}}\n        style={{\"height\":40,\"width\":20,\"backgroundColor\":\"black\"}}\n        addons={[\n            ...xtd.arr_map(xtd.arr_range(CLOCK_DIVISIONS),function (index){\n              return createComponent(\n                index,\n                \"seconds0\",\n                modelFn,\n                clockTransform,\n                {\"top\":10,\"left\":2},\n                CLOCK_DIVISIONS,\n                DIGITS_ARRAY\n              );\n            })\n          ]}/>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <ReactNative.View>\n    <ReactNative.Button\n      title=\"CLOCK\"\n      onPress={function (){\n          return setActive(!active);\n        }}/>\n  </ReactNative.View>);\n(\n  <ReactNative.Text>{seconds0}</ReactNative.Text>);\n(\n  <n.Fill/>);";
        })()}>
      <n.Row>
        <ReactNative.View>
          <physical_base.Box
            indicators={{"minutes1":iminutes1}}
            style={{"height":40,"width":20,"backgroundColor":"black"}}
            addons={[
                ...xtd.arr_map(xtd.arr_range(6),function (index){
                  return createComponent(index,"minutes1",hexFn,clockTransform,{"top":10,"left":2},6,HOURS);
                })
              ]}/>
        </ReactNative.View>
        <ReactNative.View>
          <physical_base.Box
            indicators={{"minutes0":iminutes0}}
            style={{"height":40,"width":20,"backgroundColor":"black"}}
            addons={[
                ...xtd.arr_map(xtd.arr_range(CLOCK_DIVISIONS),function (index){
                  return createComponent(
                    index,
                    "minutes0",
                    modelFn,
                    clockTransform,
                    {"top":10,"left":2},
                    CLOCK_DIVISIONS,
                    DIGITS_ARRAY
                  );
                })
              ]}/>
        </ReactNative.View>
        <ReactNative.View style={{"height":40,"width":5}}/>
        <ReactNative.View>
          <physical_base.Box
            indicators={{"seconds1":iseconds1}}
            style={{"height":40,"width":20,"backgroundColor":"black"}}
            addons={[
                ...xtd.arr_map(xtd.arr_range(6),function (index){
                  return createComponent(index,"seconds1",hexFn,clockTransform,{"top":10,"left":2},6,HOURS);
                })
              ]}/>
        </ReactNative.View>
        <ReactNative.View>
          <physical_base.Box
            indicators={{"seconds0":iseconds0}}
            style={{"height":40,"width":20,"backgroundColor":"black"}}
            addons={[
                ...xtd.arr_map(xtd.arr_range(CLOCK_DIVISIONS),function (index){
                  return createComponent(
                    index,
                    "seconds0",
                    modelFn,
                    clockTransform,
                    {"top":10,"left":2},
                    CLOCK_DIVISIONS,
                    DIGITS_ARRAY
                  );
                })
              ]}/>
        </ReactNative.View>
      </n.Row>
      <ReactNative.View>
        <ReactNative.Button
          title="CLOCK"
          onPress={function (){
              return setActive(!active);
            }}/>
      </ReactNative.View>
      <ReactNative.Text>{seconds0}</ReactNative.Text>
      <n.Fill/>
    </n.EnclosedCodeContainer>);
}