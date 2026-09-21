import * as ReactNative from 'react-native'

import * as event_route from '../../xt/event/base-route.js'

import * as ext_route from '../react/ext-route.js'

import * as r from '../react.js'

import * as n from '../react-native.js'

// js.react-native.ext-route-test/UseRouteSegmentDemo [21] 
export function UseRouteSegmentDemo(){
  let route = ext_route.makeRoute("account/user");
  let url = ext_route.listenRouteUrl(route);
  let tree = ext_route.listenRouteTree(route);
  let [value,setValue] = ext_route.useRouteSegment(route,["account"]);
  let getCount = r.useGetCount();
  return (
    <n.EnclosedCodeContainer
      label="js.react.ext-route/useRouteSegment"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.TextInput value={value} onChangeText={setValue}/>\n    <ReactNative.Button\n      title=\"User\"\n      onPress={function (){\n          return setValue(\"user\");\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"Settings\"\n      onPress={function (){\n          return setValue(\"settings\");\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"GUEST\"\n      onPress={function (){\n          return event_route.set_path(route,[\"guest\"]);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"ACCOUNT\"\n      onPress={function (){\n          return event_route.set_path(route,[\"account\"]);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n  </n.Row>);\n(\n  <n.TextDisplay\n    content={n.format_entry({\"url\":url,\"tree\":tree,\"value\":value,\"count\":getCount()})}/>);";
        })()}>
      <n.Row>
        <ReactNative.TextInput value={value} onChangeText={setValue}/>
        <ReactNative.Button
          title="User"
          onPress={function (){
              return setValue("user");
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="Settings"
          onPress={function (){
              return setValue("settings");
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="GUEST"
          onPress={function (){
              return event_route.set_path(route,["guest"]);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="ACCOUNT"
          onPress={function (){
              return event_route.set_path(route,["account"]);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
      </n.Row>
      <n.TextDisplay
        content={n.format_entry({"url":url,"tree":tree,"value":value,"count":getCount()})}/>
    </n.EnclosedCodeContainer>);
}