import * as ReactNative from 'react-native'

import React from 'react'

import * as r from '../react.js'

import * as ui_button from './ui-button.js'

import * as n from '../react-native.js'

// js.react-native.react-lazy-test/LazyView [22] 
export function LazyView(){
  return (
    <ReactNative.Text>LAZY VIEW LOADED</ReactNative.Text>);
}

// js.react-native.react-lazy-test/UseLazyDemo [27] 
export function UseLazyDemo(){
  let LazyButton = r.useLazy(ui_button.Button);
  let refresh = r.useRefresh();
  let getCount = r.useGetCount();
  let module = new Proxy({},{
    "get":function (target,prop){
        return new Promise(function (resolve){
          setTimeout(function (){
            resolve({"__esMODULE":true,"default":LazyView});
          },100);
        });
      }
  });
  let LazyComponent = React.lazy(function (){
    return new Promise(function (resolve){
      resolve({"__esMODULE":true,"default":LazyView});
    });
  });
  React.useEffect(function (){
    new Promise(function (resolve){
      setTimeout(function (){
        resolve(refresh());
      },500);
    });
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="js.react/useLazy"
      code={(function (){
          return "(\n  <React.Suspense\n    fallback={(\n        <ReactNative.Text>LOADING</ReactNative.Text>)}>\n    <LazyComponent/>\n    <LazyButton text=\"HELLO\"/>\n    {React.createElement(React.lazy(function (){\n      return module.lazyView;\n    }))}\n  </React.Suspense>);\n(\n  <n.TextDisplay count={getCount()}/>);";
        })()}>
      <React.Suspense
        fallback={(
            <ReactNative.Text>LOADING</ReactNative.Text>)}>
        <LazyComponent/>
        <LazyButton text="HELLO"/>
        {React.createElement(React.lazy(function (){
          return module.lazyView;
        }))}
      </React.Suspense>
      <n.TextDisplay count={getCount()}/>
    </n.EnclosedCodeContainer>);
}