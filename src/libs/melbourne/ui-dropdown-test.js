import React from 'react'

import * as ui_dropdown from './ui-dropdown.js'

import * as n from '../js/react-native.js'

// melbourne.ui-dropdown-test/DropdownIndexedDemo [23] 
export function DropdownIndexedDemo(){
  let [active,setActive] = React.useState();
  let [index,setIndex] = React.useState(2);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.ui-dropdown/DropdownIndexed"
        code={(function (){
            return "(\n  <n.TextDisplay content={n.format_entry({index})}/>);\n(\n  <n.Row>\n    <n.Row\n      style={{\n          \"backgroundColor\":\"#eee\",\n          \"flex\":1,\n          \"flexDirection\":\"row-reverese\",\n          \"padding\":30\n        }}>\n      <ui_dropdown.DropdownIndexed\n        design={{\"type\":\"light\"}}\n        items={[\"A\",\"B\",\"C\",\"D\"]}\n        active={active}\n        setActive={setActive}\n        index={index}\n        setIndex={setIndex}/>\n    </n.Row>\n    <n.Row\n      style={{\n          \"backgroundColor\":\"#333\",\n          \"flex\":1,\n          \"flexDirection\":\"row-reverese\",\n          \"padding\":30\n        }}>\n      <ui_dropdown.DropdownIndexed\n        design={{\"type\":\"dark\"}}\n        items={[\"A\",\"B\",\"C\",\"D\"]}\n        active={active}\n        setActive={setActive}\n        index={index}\n        setIndex={setIndex}/>\n    </n.Row>\n  </n.Row>);";
          })()}>
        <n.TextDisplay content={n.format_entry({index})}/>
        <n.Row>
          <n.Row
            style={{
                "backgroundColor":"#eee",
                "flex":1,
                "flexDirection":"row-reverese",
                "padding":30
              }}>
            <ui_dropdown.DropdownIndexed
              design={{"type":"light"}}
              items={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
          <n.Row
            style={{
                "backgroundColor":"#333",
                "flex":1,
                "flexDirection":"row-reverese",
                "padding":30
              }}>
            <ui_dropdown.DropdownIndexed
              design={{"type":"dark"}}
              items={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              index={index}
              setIndex={setIndex}/>
          </n.Row>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.ui-dropdown-test/DropdownDemo [59] 
export function DropdownDemo(){
  let [active,setActive] = React.useState();
  let [value,setValue] = React.useState("C");
  let [display,setDisplay] = React.useState("screen");
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.ui-dropdown/Dropdown"
        code={(function (){
            return "(\n  <n.Tabs\n    data={[\"screen\",\"dropdown\"]}\n    value={display}\n    setValue={setDisplay}/>);\n(\n  <n.TextDisplay content={n.format_entry({value})}/>);\n(\n  <n.Row>\n    <n.Row\n      style={{\n          \"backgroundColor\":\"#eee\",\n          \"flex\":1,\n          \"flexDirection\":\"row-reverese\",\n          \"padding\":30\n        }}>\n      <ui_dropdown.Dropdown\n        design={{\"type\":\"light\"}}\n        displayType={display}\n        data={[\"A\",\"B\",\"C\",\"D\"]}\n        active={active}\n        setActive={setActive}\n        value={value}\n        setValue={setValue}/>\n    </n.Row>\n    <n.Row\n      style={{\n          \"backgroundColor\":\"#333\",\n          \"flex\":1,\n          \"flexDirection\":\"row-reverese\",\n          \"padding\":30\n        }}>\n      <ui_dropdown.Dropdown\n        design={{\"type\":\"dark\"}}\n        displayType={display}\n        data={[\"A\",\"B\",\"C\",\"D\"]}\n        active={active}\n        setActive={setActive}\n        value={value}\n        setValue={setValue}/>\n    </n.Row>\n  </n.Row>);";
          })()}>
        <n.Tabs
          data={["screen","dropdown"]}
          value={display}
          setValue={setDisplay}/>
        <n.TextDisplay content={n.format_entry({value})}/>
        <n.Row>
          <n.Row
            style={{
                "backgroundColor":"#eee",
                "flex":1,
                "flexDirection":"row-reverese",
                "padding":30
              }}>
            <ui_dropdown.Dropdown
              design={{"type":"light"}}
              displayType={display}
              data={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              value={value}
              setValue={setValue}/>
          </n.Row>
          <n.Row
            style={{
                "backgroundColor":"#333",
                "flex":1,
                "flexDirection":"row-reverese",
                "padding":30
              }}>
            <ui_dropdown.Dropdown
              design={{"type":"dark"}}
              displayType={display}
              data={["A","B","C","D"]}
              active={active}
              setActive={setActive}
              value={value}
              setValue={setValue}/>
          </n.Row>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.ui-dropdown-test/MODULE [100] 
export var MODULE = {
  "DropdownIndexedDemo":DropdownIndexedDemo,
  "DropdownDemo":DropdownDemo,
  "MODULE":MODULE
};