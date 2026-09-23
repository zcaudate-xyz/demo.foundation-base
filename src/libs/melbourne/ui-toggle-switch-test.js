import React from 'react'

import * as ui_toggle_switch from './ui-toggle-switch.js'

import * as n from '../js/react-native.js'

// melbourne.ui-toggle-switch-test/ToggleSwitchDemo [20] 
export function ToggleSwitchDemo(){
  let [s0,setS0] = React.useState();
  let [s1,setS1] = React.useState(true);
  let [s2,setS2] = React.useState(true);
  return (
    <n.EnclosedCodeContainer
      label=" melbourne.ui-toggle-switch/ToggleSwitch"
      code={(function (){
          return "(\n  <n.Row>\n    <n.Row style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":30}}>\n      <ui_toggle_switch.ToggleSwitch\n        design={{\"type\":\"light\"}}\n        selected={s1}\n        onPress={function (){\n            return setS1(!s1);\n          }}/>\n    </n.Row>\n    <n.Row style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":30}}>\n      <ui_toggle_switch.ToggleSwitch\n        design={{\"type\":\"dark\"}}\n        selected={s2}\n        onPress={function (){\n            return setS2(!s2);\n          }}/>\n    </n.Row>\n  </n.Row>);";
        })()}>
      <n.Row>
        <n.Row style={{"backgroundColor":"#eee","flex":1,"padding":30}}>
          <ui_toggle_switch.ToggleSwitch
            design={{"type":"light"}}
            selected={s1}
            onPress={function (){
                return setS1(!s1);
              }}/>
        </n.Row>
        <n.Row style={{"backgroundColor":"#333","flex":1,"padding":30}}>
          <ui_toggle_switch.ToggleSwitch
            design={{"type":"dark"}}
            selected={s2}
            onPress={function (){
                return setS2(!s2);
              }}/>
        </n.Row>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-toggle-switch-test/MODULE [49] 
export var MODULE = {"ToggleSwitchDemo":ToggleSwitchDemo,"MODULE":MODULE};