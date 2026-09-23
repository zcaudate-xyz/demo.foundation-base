import * as ReactNative from 'react-native'

import React from 'react'

import * as ui_stepper from './ui-stepper.js'

import * as n from '../js/react-native.js'

// melbourne.ui-stepper-test/StepperTabsDemo [20] 
export function StepperTabsDemo(){
  let [index,setIndex] = React.useState(0);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-stepper/StepperTabs"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_stepper.StepperTabs\n        design={{\"type\":\"light\"}}\n        total={5}\n        itemProps={[{},{}]}\n        index={index}\n        setIndex={setIndex}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_stepper.StepperTabs\n        design={{\"type\":\"dark\"}}\n        total={5}\n        itemProps={[{},{}]}\n        index={index}\n        setIndex={setIndex}/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_stepper.StepperTabs
            design={{"type":"light"}}
            total={5}
            itemProps={[{},{}]}
            index={index}
            setIndex={setIndex}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_stepper.StepperTabs
            design={{"type":"dark"}}
            total={5}
            itemProps={[{},{}]}
            index={index}
            setIndex={setIndex}/>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-stepper-test/StepperDemo [57] 
export function StepperDemo(){
  let [index,setIndex] = React.useState(function (){
    return 0;
  });
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-stepper/Stepper"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_stepper.StepperTabs\n        design={{\"type\":\"light\"}}\n        total={4}\n        itemProps={[{},{}]}\n        index={index}\n        setIndex={setIndex}/>\n      <ui_stepper.Stepper\n        style={{\"height\":200,\"width\":200}}\n        pageStyle={{\"height\":200,\"width\":200}}\n        pages={[\n            (\n              <ReactNative.View style={{\"flex\":1,\"backgroundColor\":\"blue\"}}>\n                <ReactNative.Button\n                  title=\"PRESS 1\"\n                  onPress={function (){\n                      return alert(\"1\");\n                    }}/>\n              </ReactNative.View>),\n            (\n              <ReactNative.View style={{\"flex\":1,\"backgroundColor\":\"red\"}}>\n                <ReactNative.Button\n                  title=\"PRESS 2\"\n                  onPress={function (){\n                      return alert(\"2\");\n                    }}/>\n              </ReactNative.View>),\n            (\n              <ReactNative.View style={{\"flex\":1,\"backgroundColor\":\"yellow\"}}>\n                <ReactNative.Button\n                  title=\"PRESS 3\"\n                  onPress={function (){\n                      return alert(\"3\");\n                    }}/>\n              </ReactNative.View>),\n            (\n              <ReactNative.View style={{\"flex\":1,\"backgroundColor\":\"green\"}}>\n                <ReactNative.Button\n                  title=\"PRESS 4\"\n                  onPress={function (){\n                      return alert(\"4\");\n                    }}/>\n              </ReactNative.View>)\n          ]}\n        index={index}\n        setIndex={setIndex}/>\n    </ReactNative.View>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_stepper.StepperTabs
            design={{"type":"light"}}
            total={4}
            itemProps={[{},{}]}
            index={index}
            setIndex={setIndex}/>
          <ui_stepper.Stepper
            style={{"height":200,"width":200}}
            pageStyle={{"height":200,"width":200}}
            pages={[
                (
                  <ReactNative.View style={{"flex":1,"backgroundColor":"blue"}}>
                    <ReactNative.Button
                      title="PRESS 1"
                      onPress={function (){
                          return alert("1");
                        }}/>
                  </ReactNative.View>),
                (
                  <ReactNative.View style={{"flex":1,"backgroundColor":"red"}}>
                    <ReactNative.Button
                      title="PRESS 2"
                      onPress={function (){
                          return alert("2");
                        }}/>
                  </ReactNative.View>),
                (
                  <ReactNative.View style={{"flex":1,"backgroundColor":"yellow"}}>
                    <ReactNative.Button
                      title="PRESS 3"
                      onPress={function (){
                          return alert("3");
                        }}/>
                  </ReactNative.View>),
                (
                  <ReactNative.View style={{"flex":1,"backgroundColor":"green"}}>
                    <ReactNative.Button
                      title="PRESS 4"
                      onPress={function (){
                          return alert("4");
                        }}/>
                  </ReactNative.View>)
              ]}
            index={index}
            setIndex={setIndex}/>
        </ReactNative.View>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-stepper-test/MODULE [114] 
export var MODULE = {
  "StepperTabsDemo":StepperTabsDemo,
  "StepperDemo":StepperDemo,
  "MODULE":MODULE
};