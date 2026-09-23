import React from 'react'

import * as ui_chip_input from './ui-chip-input.js'

import * as n from '../js/react-native.js'

// melbourne.ui-chip-input-test/ChipInputDemo [27] 
export function ChipInputDemo(){
  let [values,setValues] = React.useState(["hello","world"]);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-chip-input/ChipInput"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_chip_input.ChipInput values={values} setValues={setValues}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_chip_input.ChipInput values={values} setValues={setValues}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-chip-input-test/MODULE [39] 
export var MODULE = {"ChipInputDemo":ChipInputDemo,"MODULE":MODULE};