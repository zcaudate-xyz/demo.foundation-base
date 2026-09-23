import React from 'react'

import * as ui_color_input from './ui-color-input.js'

import * as n from '../js/react-native.js'

// melbourne.ui-color-input-test/ColorInputDemo [27] 
export function ColorInputDemo(){
  let [value,setValue] = React.useState("#ccc");
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-color-input/ColorInput"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_color_input.ColorInput value={value} setValue={setValue}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_color_input.ColorInput value={value} setValue={setValue}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-color-input-test/MODULE [39] 
export var MODULE = {"ColorInputDemo":ColorInputDemo,"MODULE":MODULE};