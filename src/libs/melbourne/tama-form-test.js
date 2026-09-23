import * as T from 'tamagui'

import * as r from '../js/react.js'

import * as ext_form from '../js/react/ext-form.js'

import * as tama_form from './tama-form.js'

import * as n from '../js/react-native.js'

// melbourne.tama-form-test/TamaFormDemo [149] 
export function TamaFormDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "name":"Tama",
      "about":"Direct primitives",
      "agree":true,
      "enabled":false,
      "currency":"XLM",
      "currencies":["XLM"],
      "color":"#2563eb",
      "tags":["direct","tamagui"]
    };
  },{
    "name":[],
    "about":[],
    "agree":[],
    "enabled":[],
    "currency":[],
    "currencies":[],
    "color":[],
    "tags":[]
  });
  return (
    <n.EnclosedCodeContainer
      label="melbourne.tama-form"
      code={(function (){
          return "(\n  <T.XStack gap=\"$4\" flexWrap=\"wrap\" alignItems=\"flex-start\">\n    <T.YStack flex={1} minWidth={260} gap=\"$3\">\n      <tama_form.FormReadOnly\n        design={{\"type\":\"light\",\"color\":\"blue\"}}\n        label=\"Read only\"\n        entry={{\"name\":\"Tama\"}}\n        template={[\"name\"]}/>\n      <tama_form.FormInput\n        design={{\"type\":\"light\",\"color\":\"blue\"}}\n        label=\"Name\"\n        form={form}\n        field=\"name\"/>\n      <tama_form.FormInputXL\n        design={{\"type\":\"light\",\"color\":\"blue\"}}\n        label=\"Large input\"\n        form={form}\n        field=\"name\"/>\n      <tama_form.FormTextArea\n        design={{\"type\":\"light\",\"color\":\"blue\"}}\n        label=\"About\"\n        form={form}\n        field=\"about\"/>\n      <tama_form.FormCheckBox\n        design={{\"type\":\"light\",\"color\":\"blue\"}}\n        label=\"I agree\"\n        form={form}\n        field=\"agree\"/>\n      <tama_form.FormToggleButton\n        design={{\"type\":\"light\",\"color\":\"blue\"}}\n        label=\"Toggle button\"\n        text=\"Enabled\"\n        form={form}\n        field=\"agree\"/>\n    </T.YStack>\n    <T.YStack flex={1} minWidth={260} gap=\"$3\">\n      <tama_form.FormInput\n        design={{\"type\":\"dark\",\"color\":\"green\"}}\n        label=\"Name\"\n        form={form}\n        field=\"name\"\n        fieldProps={{\"placeholder\":\"Dark theme\"}}/>\n      <tama_form.FormToggleSwitch\n        design={{\"type\":\"dark\",\"color\":\"green\"}}\n        label=\"Notifications\"\n        form={form}\n        field=\"enabled\"/>\n      <tama_form.FormEnumSingle\n        design={{\"type\":\"dark\",\"color\":\"green\"}}\n        label=\"Currency\"\n        form={form}\n        field=\"currency\"\n        options={[\"XLM\",\"USD\",\"STATS\"]}/>\n      <tama_form.FormEnumMulti\n        design={{\"type\":\"dark\",\"color\":\"green\"}}\n        label=\"Currencies\"\n        form={form}\n        field=\"currencies\"\n        options={[\"XLM\",\"USD\",\"STATS\"]}/>\n      <tama_form.FormColorInput\n        design={{\"type\":\"dark\",\"color\":\"green\"}}\n        label=\"Accent\"\n        form={form}\n        field=\"color\"/>\n      <tama_form.FormChipInput\n        design={{\"type\":\"dark\",\"color\":\"green\"}}\n        label=\"Tags\"\n        form={form}\n        field=\"tags\"/>\n      <tama_form.FormLayout\n        design={{\"type\":\"dark\",\"color\":\"green\"}}\n        form={form}\n        rows={[\n            {\n              \"component\":tama_form.FormInput,\n              \"field\":\"name\",\n              \"label\":\"Layout row\"\n            }\n          ]}/>\n    </T.YStack>\n  </T.XStack>);";
        })()}>
      <T.XStack gap="$4" flexWrap="wrap" alignItems="flex-start">
        <T.YStack flex={1} minWidth={260} gap="$3">
          <tama_form.FormReadOnly
            design={{"type":"light","color":"blue"}}
            label="Read only"
            entry={{"name":"Tama"}}
            template={["name"]}/>
          <tama_form.FormInput
            design={{"type":"light","color":"blue"}}
            label="Name"
            form={form}
            field="name"/>
          <tama_form.FormInputXL
            design={{"type":"light","color":"blue"}}
            label="Large input"
            form={form}
            field="name"/>
          <tama_form.FormTextArea
            design={{"type":"light","color":"blue"}}
            label="About"
            form={form}
            field="about"/>
          <tama_form.FormCheckBox
            design={{"type":"light","color":"blue"}}
            label="I agree"
            form={form}
            field="agree"/>
          <tama_form.FormToggleButton
            design={{"type":"light","color":"blue"}}
            label="Toggle button"
            text="Enabled"
            form={form}
            field="agree"/>
        </T.YStack>
        <T.YStack flex={1} minWidth={260} gap="$3">
          <tama_form.FormInput
            design={{"type":"dark","color":"green"}}
            label="Name"
            form={form}
            field="name"
            fieldProps={{"placeholder":"Dark theme"}}/>
          <tama_form.FormToggleSwitch
            design={{"type":"dark","color":"green"}}
            label="Notifications"
            form={form}
            field="enabled"/>
          <tama_form.FormEnumSingle
            design={{"type":"dark","color":"green"}}
            label="Currency"
            form={form}
            field="currency"
            options={["XLM","USD","STATS"]}/>
          <tama_form.FormEnumMulti
            design={{"type":"dark","color":"green"}}
            label="Currencies"
            form={form}
            field="currencies"
            options={["XLM","USD","STATS"]}/>
          <tama_form.FormColorInput
            design={{"type":"dark","color":"green"}}
            label="Accent"
            form={form}
            field="color"/>
          <tama_form.FormChipInput
            design={{"type":"dark","color":"green"}}
            label="Tags"
            form={form}
            field="tags"/>
          <tama_form.FormLayout
            design={{"type":"dark","color":"green"}}
            form={form}
            rows={[
                {
                  "component":tama_form.FormInput,
                  "field":"name",
                  "label":"Layout row"
                }
              ]}/>
        </T.YStack>
      </T.XStack>
    </n.EnclosedCodeContainer>);
}

// melbourne.tama-form-test/MODULE [268] 
export var MODULE = {"MODULE":MODULE,"TamaFormDemo":TamaFormDemo};