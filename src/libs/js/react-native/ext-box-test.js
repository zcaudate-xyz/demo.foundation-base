import * as ReactNative from 'react-native'

import * as event_box from '../../xt/event/base-box.js'

import * as r from '../react.js'

import * as n from '../react-native.js'

import * as ext_box from '../react/ext-box.js'

// js.react-native.ext-box-test/UseBoxDemo [21] 
export function UseBoxDemo(){
  let box = ext_box.createBox(function (){
    return {"account":"hello"};
  });
  let getCount = r.useGetCount();
  let [value,setValue] = ext_box.useBox(box,["account"]);
  return (
    <n.EnclosedCodeContainer
      label="js.react.ext-box/useBox"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.TextInput value={value} onChangeText={setValue}/>\n    <ReactNative.Button\n      title=\"Hello\"\n      onPress={function (){\n          return setValue(\"hello\");\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"World\"\n      onPress={function (){\n          return setValue(\"world\");\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"Other\"\n      onPress={function (){\n          return event_box.set_data(box,[\"other\"],Math.random());\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"SAME\"\n      onPress={function (){\n          return event_box.set_data(box,[\"account\"],event_box.get_data(box,[\"account\"]));\n        }}/>\n  </n.Row>);\n(\n  <n.TextDisplay\n    content={n.format_entry({\n        \"data\":event_box.get_data(box),\n        \"value\":value,\n        \"counter\":getCount()\n      })}/>);";
        })()}>
      <n.Row>
        <ReactNative.TextInput value={value} onChangeText={setValue}/>
        <ReactNative.Button
          title="Hello"
          onPress={function (){
              return setValue("hello");
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="World"
          onPress={function (){
              return setValue("world");
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="Other"
          onPress={function (){
              return event_box.set_data(box,["other"],Math.random());
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="SAME"
          onPress={function (){
              return event_box.set_data(box,["account"],event_box.get_data(box,["account"]));
            }}/>
      </n.Row>
      <n.TextDisplay
        content={n.format_entry({
            "data":event_box.get_data(box),
            "value":value,
            "counter":getCount()
          })}/>
    </n.EnclosedCodeContainer>);
}