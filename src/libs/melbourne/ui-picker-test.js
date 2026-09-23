import * as ReactNative from 'react-native'

import React from 'react'

import * as n from '../js/react-native.js'

import * as ui_picker from './ui-picker.js'

// melbourne.ui-picker-test/PickerValuesDemo [23] 
export function PickerValuesDemo(){
  let [index,setIndex] = React.useState(3);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-picker/PickerValues"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerValues\n          design={{\"type\":\"light\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls design={{\"type\":\"light\"}} index={index} setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerValues\n          design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls\n          design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerValues\n          design={{\"type\":\"light\",\"mode\":\"minor\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls design={{\"type\":\"light\"}} index={index} setIndex={setIndex}/>\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerValues\n          design={{\"type\":\"dark\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls design={{\"type\":\"dark\"}} index={index} setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerValues\n          design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls\n          design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerValues\n          design={{\"type\":\"dark\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls design={{\"type\":\"dark\"}} index={index} setIndex={setIndex}/>\n      </n.Row>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"+1\"\n      onPress={function (){\n          return setIndex(index + 1);\n        }}/>\n    <ReactNative.Button\n      title=\"-1\"\n      onPress={function (){\n          return setIndex(index - 1);\n        }}/>\n    <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"light"}} index={index} setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls
              design={{"type":"light","mode":"secondary"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
              design={{"type":"light","mode":"minor"}}
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"light"}} index={index} setIndex={setIndex}/>
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"dark"}} index={index} setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls
              design={{"type":"dark","mode":"secondary"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerValues
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"dark"}} index={index} setIndex={setIndex}/>
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

// melbourne.ui-picker-test/PickerIndexedDemo [178] 
export function PickerIndexedDemo(){
  let [index,setIndex] = React.useState(3);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-picker/PickerIndexed"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerIndexed\n          design={{\"type\":\"light\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls design={{\"type\":\"light\"}} index={index} setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerIndexed\n          design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls\n          design={{\"type\":\"light\",\"mode\":\"secondary\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerIndexed\n          design={{\"type\":\"light\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls design={{\"type\":\"light\"}} index={index} setIndex={setIndex}/>\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerIndexed\n          design={{\"type\":\"dark\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls design={{\"type\":\"dark\"}} index={index} setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerIndexed\n          design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls\n          design={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n          index={index}\n          setIndex={setIndex}/>\n      </n.Row>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.PickerIndexed\n          design={{\"type\":\"dark\"}}\n          items={[\n              \"Victoria\",\n              \"Queensland\",\n              \"Tasmania\",\n              \"New South Wales\",\n              \"Western Australia\",\n              \"South Australia\"\n            ]}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          index={index}\n          setIndex={setIndex}/>\n        <ReactNative.Text>  </ReactNative.Text>\n        <ui_picker.PickerControls design={{\"type\":\"dark\"}} index={index} setIndex={setIndex}/>\n      </n.Row>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"+1\"\n      onPress={function (){\n          return setIndex(index + 1);\n        }}/>\n    <ReactNative.Button\n      title=\"-1\"\n      onPress={function (){\n          return setIndex(index - 1);\n        }}/>\n    <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"light"}} index={index} setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls
              design={{"type":"light","mode":"secondary"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"light"}} index={index} setIndex={setIndex}/>
          </n.Row>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"dark"}} index={index} setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls
              design={{"type":"dark","mode":"secondary"}}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row style={{"margin":5}}>
            <ui_picker.PickerIndexed
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
            <ReactNative.Text>  </ReactNative.Text>
            <ui_picker.PickerControls design={{"type":"dark"}} index={index} setIndex={setIndex}/>
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

// melbourne.ui-picker-test/PickerDemo [334] 
export function PickerDemo(){
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
      label="melbourne.ui-picker/Picker"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.Picker\n          key={data}\n          design={{\"type\":\"light\"}}\n          data={data}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          value={value}\n          setValue={setValue}/>\n        <ReactNative.Text>  </ReactNative.Text>\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":20}}>\n      <n.Row style={{\"margin\":5}}>\n        <ui_picker.Picker\n          key={data}\n          design={{\"type\":\"dark\"}}\n          data={data}\n          style={{\"fontSize\":16,\"fontWeight\":\"800\"}}\n          value={value}\n          setValue={setValue}/>\n        <ReactNative.Text>  </ReactNative.Text>\n      </n.Row>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"Aus\"\n      onPress={function (){\n          setData([\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]);\n        }}/>\n    <ReactNative.Button\n      title=\"Chn\"\n      onPress={function (){\n          setData([\"Yunnan\",\"Guangxi\",\"Hubei\",\"Sichuan\"]);\n        }}/>\n    <ReactNative.Text>{n.format_entry({value})}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":20}}>
          <n.Row style={{"margin":5}}>
            <ui_picker.Picker
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
            <ui_picker.Picker
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

// melbourne.ui-picker-test/MODULE [401] 
export var MODULE = {
  "PickerValuesDemo":PickerValuesDemo,
  "PickerIndexedDemo":PickerIndexedDemo,
  "PickerDemo":PickerDemo,
  "MODULE":MODULE
};