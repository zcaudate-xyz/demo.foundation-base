import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../react-native.js'

// js.react-native.physical-modal-test/GetPositionDemo [20] 
export function GetPositionDemo(){
  let boxRef = React.useRef();
  let [display,setDisplay] = React.useState();
  let [width,setWidth] = React.useState(100);
  let [height,setHeight] = React.useState(50);
  React.useEffect(function (){
    n.measureRef(boxRef,setDisplay);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.physical-modal-test/GetPositionDemo"
      code={(function (){
          return "(\n  <n.Row style={{\"marginBottom\":10}}>\n    <ReactNative.Button\n      title=\"RAND\"\n      onPress={function (){\n          setWidth(Math.floor(100 * Math.random()));\n          setHeight(Math.floor(50 * Math.random()));\n          new Promise(function (resolve){\n            setTimeout(function (){\n              n.measureRef(boxRef,setDisplay);\n              resolve(null);\n            },100);\n          });\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"MEASURE\"\n      onPress={function (){\n          return n.measureRef(boxRef,setDisplay);\n        }}/>\n  </n.Row>);\n(\n  <n.Row style={{\"height\":height,\"backgroundColor\":\"green\"}}/>);\n(\n  <n.Row>\n    <ReactNative.View style={{\"width\":width,\"backgroundColor\":\"green\"}}/>\n    <ReactNative.View\n      ref={boxRef}\n      style={{\"height\":100,\"width\":100,\"backgroundColor\":\"red\"}}/>\n    <n.TextDisplay content={n.format_obj(display)}/>\n  </n.Row>);";
        })()}>
      <n.Row style={{"marginBottom":10}}>
        <ReactNative.Button
          title="RAND"
          onPress={function (){
              setWidth(Math.floor(100 * Math.random()));
              setHeight(Math.floor(50 * Math.random()));
              new Promise(function (resolve){
                setTimeout(function (){
                  n.measureRef(boxRef,setDisplay);
                  resolve(null);
                },100);
              });
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="MEASURE"
          onPress={function (){
              return n.measureRef(boxRef,setDisplay);
            }}/>
      </n.Row>
      <n.Row style={{"height":height,"backgroundColor":"green"}}/>
      <n.Row>
        <ReactNative.View style={{"width":width,"backgroundColor":"green"}}/>
        <ReactNative.View
          ref={boxRef}
          style={{"height":100,"width":100,"backgroundColor":"red"}}/>
        <n.TextDisplay content={n.format_obj(display)}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.physical-modal-test/DisplayModalDemo [70] 
export function DisplayModalDemo(){
  let boxRef = React.useRef();
  let [showModal,setShowModal] = React.useState();
  let [display,setDisplay] = React.useState({"width":100,"height":100,"px":0,"py":0});
  React.useEffect(function (){
    n.measureRef(boxRef,setDisplay);
    setShowModal(false);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.physical-modal-test/displayModalDemo"
      code={(function (){
          return "(\n  <n.Row style={{\"marginBottom\":10}}>\n    <ReactNative.Button\n      title=\"DISPLAY\"\n      onPress={function (){\n          n.measureRef(boxRef,setDisplay);\n          setShowModal(true);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"MEASURE\"\n      onPress={function (){\n          return n.measureRef(boxRef,setDisplay);\n        }}/>\n  </n.Row>);\n(\n  <ReactNative.View\n    ref={boxRef}\n    style={{\"height\":100,\"width\":100,\"backgroundColor\":\"red\"}}/>);\n(\n  <n.TextDisplay content={n.format_obj(display)}/>);\n(\n  <ReactNative.Modal\n    visible={showModal}\n    animationType=\"fade\"\n    transparent={true}\n    onRequestClose={function (){\n        return setShowModal(false);\n      }}>\n    <ReactNative.TouchableWithoutFeedback\n      style={{\"flex\":1}}\n      onPress={function (){\n          return setShowModal(false);\n        }}>\n      <ReactNative.View style={{\"flex\":1}}>\n        <ReactNative.View\n          style={{\n              \"position\":\"absolute\",\n              \"top\":display.py,\n              \"left\":display.px + display.width\n            }}>\n          <ReactNative.Button\n            title=\"MODAL\"\n            onPress={function (){\n                return null;\n              }}/>\n        </ReactNative.View>\n      </ReactNative.View>\n    </ReactNative.TouchableWithoutFeedback>\n  </ReactNative.Modal>);";
        })()}>
      <n.Row style={{"marginBottom":10}}>
        <ReactNative.Button
          title="DISPLAY"
          onPress={function (){
              n.measureRef(boxRef,setDisplay);
              setShowModal(true);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="MEASURE"
          onPress={function (){
              return n.measureRef(boxRef,setDisplay);
            }}/>
      </n.Row>
      <ReactNative.View
        ref={boxRef}
        style={{"height":100,"width":100,"backgroundColor":"red"}}/>
      <n.TextDisplay content={n.format_obj(display)}/>
      <ReactNative.Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={function (){
            return setShowModal(false);
          }}>
        <ReactNative.TouchableWithoutFeedback
          style={{"flex":1}}
          onPress={function (){
              return setShowModal(false);
            }}>
          <ReactNative.View style={{"flex":1}}>
            <ReactNative.View
              style={{
                  "position":"absolute",
                  "top":display.py,
                  "left":display.px + display.width
                }}>
              <ReactNative.Button
                title="MODAL"
                onPress={function (){
                    return null;
                  }}/>
            </ReactNative.View>
          </ReactNative.View>
        </ReactNative.TouchableWithoutFeedback>
      </ReactNative.Modal>
    </n.EnclosedCodeContainer>);
}