import * as ReactNative from 'react-native'

import React from 'react'

import * as xtd from '../../xt/lang/common-data.js'

import * as r from '../react.js'

import * as ext_model from '../react/ext-model.js'

import * as n from '../react-native.js'

import * as event_model from '../../xt/event/base-model.js'

// js.react-native.ext-model-test/ListenViewPane [24] 
export function ListenViewPane({type,view}){
  let output = ext_model.listenView(view,type,{});
  let getCount = r.useGetCount();
  return (
    <n.TextDisplay
      content={n.format_entry({
          "type":type,
          "result":output,
          "count":getCount(),
          "view":xtd.obj_pick(view,["input","output"])
        })}/>);
}

// js.react-native.ext-model-test/ListenViewDemo [37] 
export function ListenViewDemo(){
  let view = ext_model.makeView({
    "handler":function (x,y,z){
        return new Promise(function (resolve){
          setTimeout(function (){
            resolve(x + y + z);
          },500);
        });
      },
    "defaultArgs":[1,2,3],
    "options":{"init":false}
  });
  let [type,setType] = React.useState("success");
  React.useEffect(function (){
    ext_model.refresh_view(view);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="js.react.ext-model/listenView"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"R\"\n      onPress={function (){\n          return ext_model.refresh_args(view,[Math.random(),Math.random(),Math.random()]);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"D\"\n      onPress={function (){\n          event_model.set_input(view,{});\n          ext_model.refresh_view(view);\n        }}/>\n    <n.Tabs\n      data={[\"input\",\"output\",\"pending\",\"elapsed\",\"disabled\",\"success\"]}\n      value={type}\n      setValue={setType}/>\n  </n.Row>);\n(\n  <n.TextDisplay\n    key={type}\n    content={n.format_entry({\n        \"type\":type,\n        \"result\":ext_model.listenView(view,type,{}),\n        \"count\":r.useGetCount()(),\n        \"view\":xtd.obj_pick(view,[\"input\",\"output\"])\n      })}/>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="R"
          onPress={function (){
              return ext_model.refresh_args(view,[Math.random(),Math.random(),Math.random()]);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="D"
          onPress={function (){
              event_model.set_input(view,{});
              ext_model.refresh_view(view);
            }}/>
        <n.Tabs
          data={["input","output","pending","elapsed","disabled","success"]}
          value={type}
          setValue={setType}/>
      </n.Row>
      <n.TextDisplay
        key={type}
        content={n.format_entry({
            "type":type,
            "result":ext_model.listenView(view,type,{}),
            "count":r.useGetCount()(),
            "view":xtd.obj_pick(view,["input","output"])
          })}/>
    </n.EnclosedCodeContainer>);
}

// js.react-native.ext-model-test/ListenViewOutputPane [85] 
export function ListenViewOutputPane({types,view}){
  let output = ext_model.listenViewOutput(view,types,{});
  let getCount = r.useGetCount();
  return (
    <n.TextDisplay
      content={n.format_entry({
          "types":types,
          "result":output,
          "count":getCount(),
          "view":xtd.obj_pick(view,["input","output"])
        })}/>);
}

// js.react-native.ext-model-test/ListenViewOutputDemo [99] 
export function ListenViewOutputDemo(){
  let view = ext_model.makeView({
    "handler":function (x,y,z){
        return new Promise(function (resolve){
          setTimeout(function (){
            resolve(x + y + z);
          },500);
        });
      },
    "defaultArgs":[1,2,3],
    "options":{"init":false}
  });
  let [types,setTypes] = React.useState(["pending","disabled"]);
  React.useEffect(function (){
    ext_model.refresh_view(view);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="js.react.ext-model/listenViewOutput"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"R\"\n      onPress={function (){\n          return ext_model.refresh_args(view,[Math.random(),Math.random(),Math.random()]);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"D\"\n      onPress={function (){\n          event_model.set_input(view,{});\n          ext_model.refresh_view(view);\n        }}/>\n    <n.TabsMulti\n      data={[\"input\",\"output\",\"pending\",\"elapsed\",\"disabled\"]}\n      values={types}\n      setValues={setTypes}/>\n  </n.Row>);\n(\n  <n.TextDisplay\n    key={types}\n    content={n.format_entry({\n        \"types\":types,\n        \"result\":ext_model.listenViewOutput(view,types,{}),\n        \"count\":r.useGetCount()(),\n        \"view\":xtd.obj_pick(view,[\"input\",\"output\"])\n      })}/>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="R"
          onPress={function (){
              return ext_model.refresh_args(view,[Math.random(),Math.random(),Math.random()]);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="D"
          onPress={function (){
              event_model.set_input(view,{});
              ext_model.refresh_view(view);
            }}/>
        <n.TabsMulti
          data={["input","output","pending","elapsed","disabled"]}
          values={types}
          setValues={setTypes}/>
      </n.Row>
      <n.TextDisplay
        key={types}
        content={n.format_entry({
            "types":types,
            "result":ext_model.listenViewOutput(view,types,{}),
            "count":r.useGetCount()(),
            "view":xtd.obj_pick(view,["input","output"])
          })}/>
    </n.EnclosedCodeContainer>);
}

// js.react-native.ext-model-test/ListenViewOutputMultiPane [147] 
export function ListenViewOutputMultiPane({types,view}){
  let remoteOutput = ext_model.listenViewOutput(view,types,{},"remote");
  let mainOutput = ext_model.listenViewOutput(view,types,{});
  let syncOutput = ext_model.listenViewOutput(view,types,{},"sync");
  let getCount = r.useGetCount();
  return (
    <n.TextDisplay
      content={n.format_entry({
          "types":types,
          "result":{"main":mainOutput,"remote":remoteOutput,"sync":syncOutput},
          "count":getCount(),
          "view":xtd.obj_pick(view,["input","output","sync","remote"])
        })}/>);
}

// js.react-native.ext-model-test/ListenViewOutputMultiDemo [167] 
export function ListenViewOutputMultiDemo(){
  let view = ext_model.makeView({
    "handler":function (x,y,z){
        return new Promise(function (resolve){
          setTimeout(function (){
            resolve(x + y + z);
          },500);
        });
      },
    "pipeline":{
        "sync":{
            "handler":function (x,y,z){
                return new Promise(function (resolve){
                  setTimeout(function (){
                    resolve(x + y + z);
                  },500);
                });
              }
          },
        "remote":{
            "handler":function (x,y,z){
                return new Promise(function (resolve){
                  setTimeout(function (){
                    resolve(x + y + z);
                  },500);
                });
              }
          }
      },
    "defaultArgs":[1,2,3],
    "options":{"init":false}
  });
  let [types,setTypes] = React.useState(["pending","disabled"]);
  React.useEffect(function (){
    ext_model.refresh_view(view);
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="js.react.ext-model/listenViewOutput.SYNC"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"M\"\n      onPress={function (){\n          return ext_model.refresh_args(view,[Math.random(),Math.random(),Math.random()]);\n        }}/>\n    <ReactNative.Button\n      title=\"R\"\n      onPress={function (){\n          return ext_model.refresh_args_remote(view,[Math.random(),Math.random(),Math.random()],true);\n        }}/>\n    <ReactNative.Button\n      title=\"S\"\n      onPress={function (){\n          return ext_model.refresh_args_sync(view,[Math.random(),Math.random(),Math.random()],true);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"D\"\n      onPress={function (){\n          event_model.set_input(view,{});\n          ext_model.refresh_view(view);\n        }}/>\n    <n.TabsMulti\n      data={[\"input\",\"output\",\"pending\",\"elapsed\",\"disabled\"]}\n      values={types}\n      setValues={setTypes}/>\n  </n.Row>);\n(\n  <n.TextDisplay\n    key={types}\n    content={n.format_entry({\n        \"types\":types,\n        \"result\":{\n              \"main\":ext_model.listenViewOutput(view,types,{}),\n              \"remote\":ext_model.listenViewOutput(view,types,{},\"remote\"),\n              \"sync\":ext_model.listenViewOutput(view,types,{},\"sync\")\n            },\n        \"count\":r.useGetCount()(),\n        \"view\":xtd.obj_pick(view,[\"input\",\"output\",\"sync\",\"remote\"])\n      })}/>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="M"
          onPress={function (){
              return ext_model.refresh_args(view,[Math.random(),Math.random(),Math.random()]);
            }}/>
        <ReactNative.Button
          title="R"
          onPress={function (){
              return ext_model.refresh_args_remote(view,[Math.random(),Math.random(),Math.random()],true);
            }}/>
        <ReactNative.Button
          title="S"
          onPress={function (){
              return ext_model.refresh_args_sync(view,[Math.random(),Math.random(),Math.random()],true);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="D"
          onPress={function (){
              event_model.set_input(view,{});
              ext_model.refresh_view(view);
            }}/>
        <n.TabsMulti
          data={["input","output","pending","elapsed","disabled"]}
          values={types}
          setValues={setTypes}/>
      </n.Row>
      <n.TextDisplay
        key={types}
        content={n.format_entry({
            "types":types,
            "result":{
                "main":ext_model.listenViewOutput(view,types,{}),
                "remote":ext_model.listenViewOutput(view,types,{},"remote"),
                "sync":ext_model.listenViewOutput(view,types,{},"sync")
              },
            "count":r.useGetCount()(),
            "view":xtd.obj_pick(view,["input","output","sync","remote"])
          })}/>
    </n.EnclosedCodeContainer>);
}