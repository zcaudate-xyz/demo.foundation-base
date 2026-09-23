import * as ReactNative from 'react-native'

import * as ext_form from '../js/react/ext-form.js'

import * as slim_select from './slim-select.js'

import * as n from '../js/react-native.js'

// melbourne.slim-select-test/FormPickerDemo [20] 
export function FormPickerDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":"Tasmania"};
  },{"price":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-select/FormPicker"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_select.FormPicker\n        brand={{\"type\":\"light\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]}\n        form={form}/>\n      <slim_select.FormPicker\n        brand={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]}\n        form={form}/>\n      <slim_select.FormPicker\n        brand={{\"type\":\"light\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]}\n        form={form}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_select.FormPicker\n        brand={{\"type\":\"dark\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]}\n        form={form}/>\n      <slim_select.FormPicker\n        brand={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]}\n        form={form}/>\n      <slim_select.FormPicker\n        brand={{\"type\":\"dark\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]}\n        form={form}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <slim_select.FormPicker
            brand={{"type":"light"}}
            label="Price"
            field="price"
            data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
            form={form}/>
          <slim_select.FormPicker
            brand={{"type":"light","mode":"secondary"}}
            label="Price"
            field="price"
            data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
            form={form}/>
          <slim_select.FormPicker
            brand={{"type":"light"}}
            label="Price"
            field="price"
            data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
            form={form}/>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <slim_select.FormPicker
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
            form={form}/>
          <slim_select.FormPicker
            brand={{"type":"dark","mode":"secondary"}}
            label="Price"
            field="price"
            data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
            form={form}/>
          <slim_select.FormPicker
            brand={{"type":"dark"}}
            label="Price"
            field="price"
            data={[
                "Victoria",
                "Queensland",
                "Tasmania",
                "New South Wales",
                "Western Australia",
                "South Australia"
              ]}
            form={form}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-select-test/FormDropdownDemo [114] 
export function FormDropdownDemo(){
  let form = ext_form.makeForm(function (){
    return {"price":"Victoria"};
  },{"price":[]});
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-select/FormDropdown"
        code={(function (){
            return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_select.FormDropdown\n        brand={{\"type\":\"light\",\"mode\":\"secondary\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]}\n        form={form}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_select.FormDropdown\n        brand={{\"type\":\"dark\",\"mode\":\"secondary\"}}\n        label=\"Price\"\n        field=\"price\"\n        data={[\n            \"Victoria\",\n            \"Queensland\",\n            \"Tasmania\",\n            \"New South Wales\",\n            \"Western Australia\",\n            \"South Australia\"\n          ]}\n        form={form}/>\n    </ReactNative.View>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
            <slim_select.FormDropdown
              brand={{"type":"light","mode":"secondary"}}
              label="Price"
              field="price"
              data={[
                  "Victoria",
                  "Queensland",
                  "Tasmania",
                  "New South Wales",
                  "Western Australia",
                  "South Australia"
                ]}
              form={form}/>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
            <slim_select.FormDropdown
              brand={{"type":"dark","mode":"secondary"}}
              label="Price"
              field="price"
              data={[
                  "Victoria",
                  "Queensland",
                  "Tasmania",
                  "New South Wales",
                  "Western Australia",
                  "South Australia"
                ]}
              form={form}/>
          </ReactNative.View>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-select-test/MODULE [159] 
export var MODULE = {
  "FormPickerDemo":FormPickerDemo,
  "FormDropdownDemo":FormDropdownDemo,
  "MODULE":MODULE
};