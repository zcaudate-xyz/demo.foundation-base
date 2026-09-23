import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ui_base from '../js/react-native/physical-base.js'

import * as c from '../js/react-native/helper-color.js'

import * as a from '../js/react-native/animate.js'

import * as n from '../js/react-native.js'

// pune.ui-market-delta/Delta [30] 
export function Delta({value}){
  let [changed,setChanged] = React.useState();
  let [color,setColor] = React.useState("green");
  let [prev,setPrev] = React.useState(value);
  let changing = a.useBinaryIndicator(changed);
  let count = React.useRef(0);
  React.useEffect(function (){
    if(prev != value){
      count.current = (count.current + 1);
      setColor((prev < value) ? "green" : "firebrick");
      setPrev(value);
      setChanged(true);
      setTimeout(function (){
        count.current = (count.current - 1);
        if(count.current < 1){
          setChanged(false);
        }
      },600);
    }
  },[value]);
  return (
    <n.Row style={{"flexDirection":"row-reverse","width":200}}>
      <n.Fill/>
      <ui_base.Box
        indicators={{changing}}
        chord={{color}}
        style={{
            "width":35,
            "height":24,
            "borderRadius":3,
            "textAlign":"center",
            "alignItems":"center",
            "justifyContent":"center"
          }}
        inner={[
            {
              "component":ReactNative.Text,
              "children":[value],
              "style":{"textAlign":"center","fontSize":14,"fontWeight":"800"},
              "transformations":{
                  "changing":function (v){
                      return {"style":{"color":c.mix(["#333","white"],v)}};
                    }
                }
            }
          ]}
        addons={[
            {
              "component":RNIcon,
              "name":("green" == color) ? "chevron-up" : "chevron-down",
              "style":{
                  "paddingTop":0,
                  "marginRight":3,
                  "transform":[],
                  "fontSize":25,
                  "color":color,
                  "zIndex":100
                },
              "transformations":{
                  "changing":function (v,{color}){
                      return {
                        "style":{
                              "opacity":1 - (0.1 * v),
                              "transform":[{"translateX":3},{"scale":1 + (0.6 * v)}],
                              "color":color
                            }
                      };
                    }
                }
            }
          ]}
        transformations={{
            "changing":function (v,{color}){
                return {"style":{"backgroundColor":c.mix(["white","#eee"],v)}};
              }
          }}/>
    </n.Row>);
}

// pune.ui-market-delta/MODULE [101] 
export var MODULE = {"Delta":Delta,"MODULE":MODULE};