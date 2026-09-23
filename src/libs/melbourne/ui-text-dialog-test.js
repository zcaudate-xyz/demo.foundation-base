import * as ui_text_dialog from './ui-text-dialog.js'

import * as ui_section from './ui-section.js'

import * as n from '../js/react-native.js'

// melbourne.ui-text-dialog-test/ConfirmDialogDemo [27] 
export function ConfirmDialogDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-text-dialog/ConfirmDialog"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_section.SectionBase design={{\"type\":\"light\"}}>\n      <n.Row>\n        <ui_text_dialog.ConfirmDialog\n          design={{\"type\":\"light\"}}\n          text=\"Press\"\n          onPress={function (){\n              return alert(\"HELLO\");\n            }}/>\n        <ui_text_dialog.ConfirmDialog\n          design={{\"type\":\"light\"}}\n          component=\"accent\"\n          text=\"Press\"\n          onPress={function (){\n              return alert(\"HELLO\");\n            }}/>\n      </n.Row>\n    </ui_section.SectionBase>\n    <ui_section.SectionBase design={{\"type\":\"dark\"}}>\n      <n.Row>\n        <ui_text_dialog.ConfirmDialog\n          design={{\"type\":\"dark\"}}\n          text=\"Press\"\n          onPress={function (){\n              return alert(\"HELLO\");\n            }}/>\n        <ui_text_dialog.ConfirmDialog\n          design={{\"type\":\"dark\"}}\n          component=\"accent\"\n          text=\"Press\"\n          onPress={function (){\n              return alert(\"HELLO\");\n            }}/>\n      </n.Row>\n    </ui_section.SectionBase>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_section.SectionBase design={{"type":"light"}}>
          <n.Row>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"light"}}
              text="Press"
              onPress={function (){
                  return alert("HELLO");
                }}/>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"light"}}
              component="accent"
              text="Press"
              onPress={function (){
                  return alert("HELLO");
                }}/>
          </n.Row>
        </ui_section.SectionBase>
        <ui_section.SectionBase design={{"type":"dark"}}>
          <n.Row>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"dark"}}
              text="Press"
              onPress={function (){
                  return alert("HELLO");
                }}/>
            <ui_text_dialog.ConfirmDialog
              design={{"type":"dark"}}
              component="accent"
              text="Press"
              onPress={function (){
                  return alert("HELLO");
                }}/>
          </n.Row>
        </ui_section.SectionBase>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-text-dialog-test/MODULE [60] 
export var MODULE = {"ConfirmDialogDemo":ConfirmDialogDemo,"MODULE":MODULE};