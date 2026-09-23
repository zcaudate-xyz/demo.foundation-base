import * as ReactNative from 'react-native'

import * as base_font from './base-font.js'

import * as slim_common from './slim-common.js'

import * as n from '../js/react-native.js'

// melbourne.slim-style-test/SlimStyleLabDemo [31] 
export function SlimStyleLabDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-style"
      code={(function (){
          return "(\n  <ReactNative.View style={{\"width\":\"100%\",\"gap\":12}}>\n    <ReactNative.Text style={[base_font.fontH2,{\"letterSpacing\":0.3}]}>SLIM STYLE LAB</ReactNative.Text>\n    <ReactNative.Text style={[base_font.fontP,{\"color\":\"#64748b\"}]}>\n      System font by default; every enclosure can opt into its own label and container treatment.\n    </ReactNative.Text>\n    <n.Row style={{\"gap\":12,\"flexWrap\":\"wrap\",\"width\":\"100%\"}}>\n      <ReactNative.View\n        style={{\n            \"flex\":1,\n            \"minWidth\":250,\n            \"padding\":12,\n            \"backgroundColor\":\"#f8fafc\"\n          }}>\n        <slim_common.FormEnclosed\n          design={{\"type\":\"light\"}}\n          label=\"LIGHT\"\n          styleLabel={{\"letterSpacing\":1.1,\"fontWeight\":\"800\"}}\n          styleContainer={{\n              \"backgroundColor\":\"#ffffff\",\n              \"borderColor\":\"#e2e8f0\",\n              \"borderWidth\":1,\n              \"borderRadius\":10,\n              \"padding\":12\n            }}>\n          <ReactNative.Text style={[base_font.fontP,{\"color\":\"#0f172a\"}]}>A filled light surface</ReactNative.Text>\n        </slim_common.FormEnclosed>\n      </ReactNative.View>\n      <ReactNative.View\n        style={{\n            \"flex\":1,\n            \"minWidth\":250,\n            \"padding\":12,\n            \"backgroundColor\":\"#0f172a\"\n          }}>\n        <slim_common.FormEnclosed\n          design={{\"type\":\"dark\"}}\n          label=\"DARK\"\n          styleLabel={{\"letterSpacing\":1.1,\"fontWeight\":\"800\"}}\n          styleContainer={{\n              \"backgroundColor\":\"#1e293b\",\n              \"borderColor\":\"#475569\",\n              \"borderWidth\":1,\n              \"borderRadius\":10,\n              \"padding\":12\n            }}>\n          <ReactNative.Text style={[base_font.fontP,{\"color\":\"#f8fafc\"}]}>A filled dark surface</ReactNative.Text>\n        </slim_common.FormEnclosed>\n      </ReactNative.View>\n    </n.Row>\n    <ReactNative.Text style={[base_font.fontCaption,{\"color\":\"#64748b\"}]}>\n      Try changing styleContainer, styleLabel, or the base font styles in this test.\n    </ReactNative.Text>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View style={{"width":"100%","gap":12}}>
        <ReactNative.Text style={[base_font.fontH2,{"letterSpacing":0.3}]}>SLIM STYLE LAB</ReactNative.Text>
        <ReactNative.Text style={[base_font.fontP,{"color":"#64748b"}]}>
          System font by default; every enclosure can opt into its own label and container treatment.
        </ReactNative.Text>
        <n.Row style={{"gap":12,"flexWrap":"wrap","width":"100%"}}>
          <ReactNative.View
            style={{
                "flex":1,
                "minWidth":250,
                "padding":12,
                "backgroundColor":"#f8fafc"
              }}>
            <slim_common.FormEnclosed
              design={{"type":"light"}}
              label="LIGHT"
              styleLabel={{"letterSpacing":1.1,"fontWeight":"800"}}
              styleContainer={{
                  "backgroundColor":"#ffffff",
                  "borderColor":"#e2e8f0",
                  "borderWidth":1,
                  "borderRadius":10,
                  "padding":12
                }}>
              <ReactNative.Text style={[base_font.fontP,{"color":"#0f172a"}]}>A filled light surface</ReactNative.Text>
            </slim_common.FormEnclosed>
          </ReactNative.View>
          <ReactNative.View
            style={{
                "flex":1,
                "minWidth":250,
                "padding":12,
                "backgroundColor":"#0f172a"
              }}>
            <slim_common.FormEnclosed
              design={{"type":"dark"}}
              label="DARK"
              styleLabel={{"letterSpacing":1.1,"fontWeight":"800"}}
              styleContainer={{
                  "backgroundColor":"#1e293b",
                  "borderColor":"#475569",
                  "borderWidth":1,
                  "borderRadius":10,
                  "padding":12
                }}>
              <ReactNative.Text style={[base_font.fontP,{"color":"#f8fafc"}]}>A filled dark surface</ReactNative.Text>
            </slim_common.FormEnclosed>
          </ReactNative.View>
        </n.Row>
        <ReactNative.Text style={[base_font.fontCaption,{"color":"#64748b"}]}>
          Try changing styleContainer, styleLabel, or the base font styles in this test.
        </ReactNative.Text>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-style-test/MODULE [95] 
export var MODULE = {"SlimStyleLabDemo":SlimStyleLabDemo,"MODULE":MODULE};