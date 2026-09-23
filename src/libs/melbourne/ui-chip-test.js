import * as ui_static from './ui-static.js'

import * as ui_chip from './ui-chip.js'

import * as n from '../js/react-native.js'

// melbourne.ui-chip-test/ChipDemo [27] 
export function ChipDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-chip/Chip"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_chip.Chip\n      text=\"hello\"\n      onClose={function (){\n          return null;\n        }}/>\n    <ui_chip.Chip text=\"world\" variant={{\"bg\":{\"key\":\"neutral\"}}}/>\n  </n.Row>);\n(\n  <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flexDirection\":\"row\"}}>\n    <ui_chip.Chip\n      design={{\"type\":\"dark\"}}\n      text=\"hello\"\n      onClose={function (){\n          return null;\n        }}/>\n    <ui_chip.Chip\n      design={{\"type\":\"dark\"}}\n      variant={{\"bg\":{\"key\":\"neutral\"}}}\n      text=\"world\"/>\n  </ui_static.Div>);";
        })()}>
      <n.Row>
        <ui_chip.Chip
          text="hello"
          onClose={function (){
              return null;
            }}/>
        <ui_chip.Chip text="world" variant={{"bg":{"key":"neutral"}}}/>
      </n.Row>
      <ui_static.Div design={{"type":"dark"}} style={{"flexDirection":"row"}}>
        <ui_chip.Chip
          design={{"type":"dark"}}
          text="hello"
          onClose={function (){
              return null;
            }}/>
        <ui_chip.Chip
          design={{"type":"dark"}}
          variant={{"bg":{"key":"neutral"}}}
          text="world"/>
      </ui_static.Div>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-chip-test/MODULE [55] 
export var MODULE = {"ChipDemo":ChipDemo,"MODULE":MODULE};