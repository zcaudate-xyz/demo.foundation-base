import React from 'react'

import * as ReactNative from 'react-native'

import * as n from '../js/react-native.js'

import * as ui_topnotify from './ui-notify-base.js'

// pune.ui-notify-base-test/TopNotifyInnerDemo [34] 
export function TopNotifyInnerDemo(){
  let [index,setIndex] = React.useState(0);
  let [data,setData] = React.useState([
    {
      "id":"02",
      "topic":"user.account/place",
      "title":"Order Placed",
      "message":"NBA-MVP-2022/S.CURRY @ Y 1.34",
      "detail":{"id":"001-order"},
      "time":Date.now()
    },
    {
      "id":"01",
      "topic":"user.account/password-changed",
      "title":"Password Changed",
      "message":"user: test00001",
      "time":Date.now()
    }
  ]);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-notify-base/TopNotifyInner"
      style={{"backgroundColor":"#eee","padding":20}}
      code={(function (){
          return "(\n  <ReactNative.View>\n    <ui_topnotify.TopNotifyInner data={[]} design={{\"type\":\"light\"}}/>\n  </ReactNative.View>);\n(\n  <ReactNative.View>\n    <n.Row style={{\"marginVertical\":5}}/>\n    <ui_topnotify.TopNotifyInner\n      data={[\n          {\n            \"id\":\"01\",\n            \"topic\":\"user.account/password-changed\",\n            \"title\":\"Password Changed\",\n            \"message\":\"user: test00001\",\n            \"time\":Date.now()\n          }\n        ]}\n      design={{\"type\":\"light\"}}/>\n  </ReactNative.View>);\n(\n  <ReactNative.View>\n    <n.Row style={{\"marginVertical\":5}}/>\n    <ui_topnotify.TopNotifyInner\n      data={data}\n      design={{\"type\":\"light\"}}\n      index={index}\n      setIndex={setIndex}/>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View>
        <ui_topnotify.TopNotifyInner data={[]} design={{"type":"light"}}/>
      </ReactNative.View>
      <ReactNative.View>
        <n.Row style={{"marginVertical":5}}/>
        <ui_topnotify.TopNotifyInner
          data={[
              {
                "id":"01",
                "topic":"user.account/password-changed",
                "title":"Password Changed",
                "message":"user: test00001",
                "time":Date.now()
              }
            ]}
          design={{"type":"light"}}/>
      </ReactNative.View>
      <ReactNative.View>
        <n.Row style={{"marginVertical":5}}/>
        <ui_topnotify.TopNotifyInner
          data={data}
          design={{"type":"light"}}
          index={index}
          setIndex={setIndex}/>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// pune.ui-notify-base-test/TopNotifyDemo [81] 
export function TopNotifyDemo(){
  let [index,setIndex] = React.useState(0);
  let [data,setData] = React.useState([
    {
      "id":"02",
      "topic":"user.account/place",
      "title":"Order Placed",
      "message":"NBA-MVP-2022/S.CURRY @ Y 1.34",
      "detail":{"id":"001-order"},
      "time":Date.now()
    },
    {
      "id":"01",
      "topic":"user.account/password-changed",
      "title":"Password Changed",
      "message":"user: test00001",
      "time":Date.now()
    }
  ]);
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-notify-base/TopNotify"
      style={{"backgroundColor":"#333","padding":20}}
      code={(function (){
          return "(\n  <n.Isolation>\n    <n.Row style={{\"marginVertical\":5,\"width\":300,\"height\":80}}>\n      <ui_topnotify.TopNotify\n        mini={true}\n        data={[\n            {\n              \"id\":\"01\",\n              \"topic\":\"user.account/password-changed\",\n              \"title\":\"Password Changed\",\n              \"message\":\"user: test00001\",\n              \"time\":Date.now()\n            }\n          ]}\n        design={{\"type\":\"dark\"}}/>\n    </n.Row>\n  </n.Isolation>);\n(\n  <n.Isolation>\n    <n.Row style={{\"marginVertical\":5,\"width\":300,\"height\":80}}>\n      <ui_topnotify.TopNotify\n        mini={true}\n        data={data}\n        design={{\"type\":\"dark\"}}\n        index={index}\n        setIndex={setIndex}/>\n    </n.Row>\n  </n.Isolation>);";
        })()}>
      <n.Isolation>
        <n.Row style={{"marginVertical":5,"width":300,"height":80}}>
          <ui_topnotify.TopNotify
            mini={true}
            data={[
                {
                  "id":"01",
                  "topic":"user.account/password-changed",
                  "title":"Password Changed",
                  "message":"user: test00001",
                  "time":Date.now()
                }
              ]}
            design={{"type":"dark"}}/>
        </n.Row>
      </n.Isolation>
      <n.Isolation>
        <n.Row style={{"marginVertical":5,"width":300,"height":80}}>
          <ui_topnotify.TopNotify
            mini={true}
            data={data}
            design={{"type":"dark"}}
            index={index}
            setIndex={setIndex}/>
        </n.Row>
      </n.Isolation>
    </n.EnclosedCodeContainer>);
}

// pune.ui-notify-base-test/MODULE [129] 
export var MODULE = {
  "TopNotifyInnerDemo":TopNotifyInnerDemo,
  "TopNotifyDemo":TopNotifyDemo,
  "MODULE":MODULE
};