import * as ReactNative from 'react-native'

import React from 'react'

import * as ui_picker_basic from './ui-picker-basic.js'

import * as n from '../js/react-native.js'

// melbourne.ui-picker-basic-test/PickerBasicIndexedDemo [23] 
export function PickerBasicIndexedDemo(){
  let [index,setIndex] = React.useState(3);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-picker-basic/PickerBasicIndexed"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker_basic.PickerBasicIndexed\n          design={{\"type\":\"light\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker_basic.PickerBasicIndexed\n          design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker_basic.PickerBasicIndexed\n          design={{\"type\":\"light\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker_basic.PickerBasicIndexed\n          design={{\"type\":\"dark\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker_basic.PickerBasicIndexed\n          design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker_basic.PickerBasicIndexed\n          design={{\"type\":\"dark\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"+1\"\n      onPress={function (){\n          return setIndex(index + 1);\n        }}/>\n    <ReactNative.Button\n      title=\"-1\"\n      onPress={function (){\n          return setIndex(index - 1);\n        }}/>\n    <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker_basic.PickerBasicIndexed
              design={{"type":"light"}}
              items={[
                  "Victoria",
                  "Queensland",
                  "Tasmania",
                  "New South Wales",
                  "Western Australia",
                  "South Australia"
                ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker_basic.PickerBasicIndexed
              design={{"type":"light","mode":"secondary"}}
              items={[
                  "Victoria",
                  "Queensland",
                  "Tasmania",
                  "New South Wales",
                  "Western Australia",
                  "South Australia"
                ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker_basic.PickerBasicIndexed
              design={{"type":"light"}}
              items={[
                  "Victoria",
                  "Queensland",
                  "Tasmania",
                  "New South Wales",
                  "Western Australia",
                  "South Australia"
                ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker_basic.PickerBasicIndexed
              design={{"type":"dark"}}
              items={[
                  "Victoria",
                  "Queensland",
                  "Tasmania",
                  "New South Wales",
                  "Western Australia",
                  "South Australia"
                ]}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker_basic.PickerBasicIndexed
              design={{"type":"dark","mode":"secondary"}}
              items={[
                  "Victoria",
                  "Queensland",
                  "Tasmania",
                  "New South Wales",
                  "Western Australia",
                  "South Australia"
                ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker_basic.PickerBasicIndexed
              design={{"type":"dark"}}
              items={[
                  "Victoria",
                  "Queensland",
                  "Tasmania",
                  "New South Wales",
                  "Western Australia",
                  "South Australia"
                ]}
              style={{"fontSize":16,"fontWeight":"800"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
        </ReactNative.View>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="+1"
          onPress={function (){
              return setIndex(index + 1);
            }}/>
        <ReactNative.Button
          title="-1"
          onPress={function (){
              return setIndex(index - 1);
            }}/>
        <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-picker-basic-test/PickerBasicDemo [148] 
export function PickerBasicDemo(){
  let [value,setValue] = React.useState("Tasmania");
  let [data,setData] = React.useState([
    "Victoria",
    "Queensland",
    "Tasmania",
    "New South Wales",
    "Western Australia",
    "South Australia"
  ]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-picker-basic/PickerBasic"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker_basic.PickerBasic\n          key={data}\n          design={{\"type\":\"light\"}}\n          data={data}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          value={value}\n          setValue={setValue}/>\n        <ReactNative.Text>  </ReactNative.Text>\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker_basic.PickerBasic\n          key={data}\n          design={{\"type\":\"dark\"}}\n          data={data}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          value={value}\n          setValue={setValue}/>\n        <ReactNative.Text>  </ReactNative.Text>\n      </n.Row>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"Aus\"\n      onPress={function (){\n          setData([\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]);\n        }}/>\n    <ReactNative.Button\n      title=\"Chn\"\n      onPress={function (){\n          setData([\"Yunnan\",\"Guangxi\",\"Hubei\",\"Sichuan\"]);\n        }}/>\n    <ReactNative.Text>{n.format_entry({value})}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker_basic.PickerBasic
              key={data}
              design={{"type":"light"}}
              data={data}
              style={{"fontSize":16,"fontWeight":"800"}}
              value={value}
              setValue={setValue}/>
            <ReactNative.Text>  </ReactNative.Text>
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker_basic.PickerBasic
              key={data}
              design={{"type":"dark"}}
              data={data}
              style={{"fontSize":16,"fontWeight":"800"}}
              value={value}
              setValue={setValue}/>
            <ReactNative.Text>  </ReactNative.Text>
          </n.Row>
        </ReactNative.View>
      </n.Row>
      <n.Row>
        <ReactNative.Button
          title="Aus"
          onPress={function (){
              setData([
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]);
            }}/>
        <ReactNative.Button
          title="Chn"
          onPress={function (){
              setData(["Yunnan","Guangxi","Hubei","Sichuan"]);
            }}/>
        <ReactNative.Text>{n.format_entry({value})}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-picker-basic-test/MODULE [215] 
export var MODULE = {
  "PickerBasicIndexedDemo":PickerBasicIndexedDemo,
  "PickerBasicDemo":PickerBasicDemo,
  "MODULE":MODULE
};