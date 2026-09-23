import * as ReactNative from 'react-native'

import * as event_form from '../../xt/event/base-form.js'

import * as r from '../react.js'

import * as ext_form from '../react/ext-form.js'

import * as n from '../react-native.js'

// js.react-native.ext-form-test/RegistraionValidation [19] 
export var RegistraionValidation = {
  "first_name":[
    [
    "is-not-empty",
    {
    "message":"Must not be empty",
    "check":function (v,rec){
      return (null != v) && (0 < v.length);
    }
  }
  ]
  ],
  "last_name":[
    [
    "is-not-empty",
    {
    "message":"Must not be empty",
    "check":function (v,rec){
      return new Promise(function (resolve){
        setTimeout(function (){
          resolve((null != v) && (0 < v.length));
        },100);
      });
    }
  }
  ]
  ],
  "email":[
    [
    "is-not-empty",
    {
    "message":"Must not be empty",
    "check":function (v,rec){
      return new Promise(function (resolve){
        setTimeout(function (){
          resolve((null != v) && (0 < v.length));
        },100);
      });
    }
  }
  ]
  ]
};

// js.react-native.ext-form-test/RegistrationFormDemo [48] 
export function RegistrationFormDemo(){
  let form = ext_form.makeForm(function (){
    return {"first_name":"hello","last_name":"world","email":""};
  },RegistraionValidation);
  let {email,first_name,last_name} = ext_form.listenFormData(form);
  let result = ext_form.listenFormResult(form);
  let {fields} = result;
  let getCount = r.useGetCount();
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ext-form-test/RegistrationForm"
      code={(function (){
          return "(\n  <ReactNative.View>\n    <n.Row>\n      <ReactNative.TextInput\n        value={first_name}\n        onChangeText={event_form.field_fn(form,\"first_name\")}\n        style={{\"margin\":5,\"padding\":5,\"backgroundColor\":\"#eee\"}}/>\n      <ReactNative.Text>\n        {(\"errored\" == fields[\"first_name\"][\"status\"]) ? fields[\"first_name\"][\"message\"] : null}\n      </ReactNative.Text>\n    </n.Row>\n    <n.Row>\n      <ReactNative.TextInput\n        value={last_name}\n        onChangeText={event_form.field_fn(form,\"last_name\")}\n        style={{\"margin\":5,\"padding\":5,\"backgroundColor\":\"#eee\"}}/>\n      <ReactNative.Text>\n        {(\"errored\" == fields[\"last_name\"][\"status\"]) ? fields[\"last_name\"][\"message\"] : null}\n      </ReactNative.Text>\n    </n.Row>\n    <n.Row>\n      <ReactNative.TextInput\n        value={email}\n        onChangeText={event_form.field_fn(form,\"email\")}\n        style={{\"margin\":5,\"padding\":5,\"backgroundColor\":\"#eee\"}}/>\n      <ReactNative.Text>\n        {(\"errored\" == fields[\"email\"][\"status\"]) ? fields[\"email\"][\"message\"] : null}\n      </ReactNative.Text>\n    </n.Row>\n  </ReactNative.View>);\n(\n  <n.Row>\n    <ReactNative.Button\n      title=\"Validate\"\n      onPress={function (){\n          return event_form.validate_all(form);\n        }}/>\n    <ReactNative.Button\n      title=\"Clear\"\n      onPress={function (){\n          return event_form.reset_all_validators(form);\n        }}/>\n    <ReactNative.Button\n      title=\"Reset\"\n      onPress={function (){\n          return event_form.reset_all_data(form);\n        }}/>\n  </n.Row>);\n(\n  <n.Caption\n    text={n.format_entry(\n        {fields,\"count\":getCount(),\"data\":{email,first_name,last_name}}\n      )}\n    style={{\"marginTop\":10}}/>);";
        })()}>
      <ReactNative.View>
        <n.Row>
          <ReactNative.TextInput
            value={first_name}
            onChangeText={event_form.field_fn(form,"first_name")}
            style={{"margin":5,"padding":5,"backgroundColor":"#eee"}}/>
          <ReactNative.Text>
            {("errored" == fields["first_name"]["status"]) ? fields["first_name"]["message"] : null}
          </ReactNative.Text>
        </n.Row>
        <n.Row>
          <ReactNative.TextInput
            value={last_name}
            onChangeText={event_form.field_fn(form,"last_name")}
            style={{"margin":5,"padding":5,"backgroundColor":"#eee"}}/>
          <ReactNative.Text>
            {("errored" == fields["last_name"]["status"]) ? fields["last_name"]["message"] : null}
          </ReactNative.Text>
        </n.Row>
        <n.Row>
          <ReactNative.TextInput
            value={email}
            onChangeText={event_form.field_fn(form,"email")}
            style={{"margin":5,"padding":5,"backgroundColor":"#eee"}}/>
          <ReactNative.Text>
            {("errored" == fields["email"]["status"]) ? fields["email"]["message"] : null}
          </ReactNative.Text>
        </n.Row>
      </ReactNative.View>
      <n.Row>
        <ReactNative.Button
          title="Validate"
          onPress={function (){
              return event_form.validate_all(form);
            }}/>
        <ReactNative.Button
          title="Clear"
          onPress={function (){
              return event_form.reset_all_validators(form);
            }}/>
        <ReactNative.Button
          title="Reset"
          onPress={function (){
              return event_form.reset_all_data(form);
            }}/>
      </n.Row>
      <n.Caption
        text={n.format_entry(
            {fields,"count":getCount(),"data":{email,first_name,last_name}}
          )}
        style={{"marginTop":10}}/>
    </n.EnclosedCodeContainer>);
}

// js.react-native.ext-form-test/MODULE [113] 
export var MODULE = // 4dac2971-c68b-4d14-bbf7-c929994635c3
{
  "RegistraionValidation":RegistraionValidation,
  "RegistrationFormDemo":RegistrationFormDemo,
  "MODULE":MODULE
};;