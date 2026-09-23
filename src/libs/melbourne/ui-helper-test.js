import * as ReactNative from 'react-native'

import React from 'react'

import * as ui_helper from './ui-helper.js'

import * as n from '../js/react-native.js'

// melbourne.ui-helper-test/HelperControlDemo [20] 
export function HelperControlDemo(){
  let [index,setIndex] = React.useState(1);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-helper/HelperControl"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_helper.HelperControl\n        design={{\"type\":\"light\"}}\n        onLeft={function (){\n            return setIndex(index - 1);\n          }}\n        onRight={function (){\n            return setIndex(index + 1);\n          }}>\n        <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>\n      </ui_helper.HelperControl>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_helper.HelperControl\n        design={{\"type\":\"dark\"}}\n        onLeft={function (){\n            return setIndex(index - 1);\n          }}\n        onRight={function (){\n            return setIndex(index + 1);\n          }}>\n        <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>\n      </ui_helper.HelperControl>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_helper.HelperControl
            design={{"type":"light"}}
            onLeft={function (){
                return setIndex(index - 1);
              }}
            onRight={function (){
                return setIndex(index + 1);
              }}>
            <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>
          </ui_helper.HelperControl>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_helper.HelperControl
            design={{"type":"dark"}}
            onLeft={function (){
                return setIndex(index - 1);
              }}
            onRight={function (){
                return setIndex(index + 1);
              }}>
            <ReactNative.Text>{n.format_entry({index})}</ReactNative.Text>
          </ui_helper.HelperControl>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-helper-test/MODULE [48] 
export var MODULE = {"HelperControlDemo":HelperControlDemo,"MODULE":MODULE};