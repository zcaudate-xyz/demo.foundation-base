import * as Expo from 'expo'

import * as ReactNative from 'react-native'

import * as base_box from './libs/xt/event/base-box.js'

import * as web_native from './web-native.js'

import * as n from './libs/js/react-native.js'

import * as ext_box from './libs/js/react/ext-box.js'

// component.web-native-index/__import__ [23] 
null;

// component.web-native-index/Global [26] 
globalThis["component_web_native_index$$Global"] = base_box.make_box({"l0":"00a-native-text"});

// component.web-native-index/Screens [29] 
globalThis["component_web_native_index$$Screens"] = base_box.make_box({});

// component.web-native-index/__screen__ [32] 
base_box.set_data(
  globalThis["component_web_native_index$$Screens"],
  [],
  web_native.raw_controls()
);

// component.web-native-index/AppMain [39] 
export function AppMain(){
  let [l0,setL0] = ext_box.useBox(globalThis["component_web_native_index$$Global"],["l0"]);
  let tree = ext_box.listenBox(globalThis["component_web_native_index$$Screens"],[]);
  return (
    <ReactNative.View
      style={{"position":"absolute","top":0,"bottom":0,"width":"100%"}}>
      <n.TreePane
        tree={tree}
        levels={[
            {
              "type":"list",
              "initial":l0,
              "setInitial":setL0,
              "listWidth":120,
              "displayFn":n.displayTarget
            }
          ]}/>
    </ReactNative.View>);
}

// component.web-native-index/__main__ [58] 
base_box.set_data(
  globalThis["component_web_native_index$$Global"],
  ["Main"],
  AppMain
);

// component.web-native-index/clearScratch [62] 
export function clearScratch(){
  base_box.del_data(globalThis["component_web_native_index$$Global"],["Scratch"]);
}

// component.web-native-index/App [66] 
export function App(){
  let {Main} = ext_box.listenBox(globalThis["component_web_native_index$$Global"],[]);
  return (
    <Main/>);
}

// component.web-native-index/MODULE [70] 
export var MODULE = Expo.registerRootComponent(App);