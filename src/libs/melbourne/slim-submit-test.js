import * as ReactNative from 'react-native'

import React from 'react'

import * as event_form from '../xt/event/base-form.js'

import * as slim_submit from './slim-submit.js'

import * as r from '../js/react.js'

import * as ext_form from '../js/react/ext-form.js'

import * as validators from './base-validators.js'

import * as n from '../js/react-native.js'

// melbourne.slim-submit-test/UseSubmitDemo [28] 
export function UseSubmitDemo(){
  let onSubmit = function (){
    return new Promise(function (resolve,reject){
      setTimeout(function (){
        try{
          resolve(          (function (){
                      return {
                        "status":"error",
                        "body":{"tag":"user.account/incorrect_password"}
                      };
                    })());
        }
        catch(e){
          reject(e);
        }
      },200);
    });
  };
  let [result,setResult] = React.useState(function (){
    return null;
  });
  let {onAction,setWaiting,waiting} = r.useSubmit({onSubmit,setResult});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-submit/useSubmit"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"padding\":10,\"flex\":1}}>\n      <n.Row>\n        <ReactNative.Button title=\"Action\" onPress={onAction}/>\n        <ReactNative.Text> </ReactNative.Text>\n        <ReactNative.Button\n          title=\"Clear\"\n          onPress={function (){\n              return setResult(null);\n            }}/>\n        <ReactNative.Text> </ReactNative.Text>\n      </n.Row>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.TextDisplay content={n.format_entry({result,waiting})}/>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","padding":10,"flex":1}}>
          <n.Row>
            <ReactNative.Button title="Action" onPress={onAction}/>
            <ReactNative.Text> </ReactNative.Text>
            <ReactNative.Button
              title="Clear"
              onPress={function (){
                  return setResult(null);
                }}/>
            <ReactNative.Text> </ReactNative.Text>
          </n.Row>
        </ReactNative.View>
      </n.Row>
      <n.TextDisplay content={n.format_entry({result,waiting})}/>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-submit-test/SubmitButtonDemo [64] 
export function SubmitButtonDemo(){
  let [errored,setErrored] = React.useState(true);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-submit/SubmitButton"
        code={(function (){
            return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"padding\":10}}>\n      <slim_submit.SubmitButton design={{\"type\":\"light\"}} text=\"HELLO\"/>\n      <ReactNative.View style={{\"height\":10}}/>\n      <slim_submit.SubmitButton design={{\"type\":\"light\"}} waiting={true} text=\"HELLO\"/>\n      <ReactNative.View style={{\"height\":10}}/>\n      <slim_submit.SubmitButton\n        design={{\"type\":\"light\"}}\n        style={{\"width\":150,\"textAlign\":\"center\"}}\n        text=\"CHANGE PASSWORD\"\n        errored={errored}\n        onPress={function (){\n            return setErrored(!errored);\n          }}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"padding\":10}}>\n      <slim_submit.SubmitButton design={{\"type\":\"dark\"}} text=\"HELLO\"/>\n      <ReactNative.View style={{\"height\":10}}/>\n      <slim_submit.SubmitButton\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":150}}\n        waiting={true}\n        text=\"HELLO\"/>\n      <ReactNative.View style={{\"height\":10}}/>\n      <slim_submit.SubmitButton\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":150}}\n        errored={errored}\n        text=\"CHANGE PASSWORD\"\n        onPress={function (){\n            return setErrored(!errored);\n          }}/>\n    </ReactNative.View>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <slim_submit.SubmitButton design={{"type":"light"}} text="HELLO"/>
            <ReactNative.View style={{"height":10}}/>
            <slim_submit.SubmitButton design={{"type":"light"}} waiting={true} text="HELLO"/>
            <ReactNative.View style={{"height":10}}/>
            <slim_submit.SubmitButton
              design={{"type":"light"}}
              style={{"width":150,"textAlign":"center"}}
              text="CHANGE PASSWORD"
              errored={errored}
              onPress={function (){
                  return setErrored(!errored);
                }}/>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","padding":10}}>
            <slim_submit.SubmitButton design={{"type":"dark"}} text="HELLO"/>
            <ReactNative.View style={{"height":10}}/>
            <slim_submit.SubmitButton
              design={{"type":"dark"}}
              style={{"width":150}}
              waiting={true}
              text="HELLO"/>
            <ReactNative.View style={{"height":10}}/>
            <slim_submit.SubmitButton
              design={{"type":"dark"}}
              style={{"width":150}}
              errored={errored}
              text="CHANGE PASSWORD"
              onPress={function (){
                  return setErrored(!errored);
                }}/>
          </ReactNative.View>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-submit-test/SubmitLineDemo [115] 
export function SubmitLineDemo(){
  let [errored,setErrored] = React.useState(true);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-submit/SubmitLine"
        code={(function (){
            return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"padding\":10}}>\n      <slim_submit.SubmitLine\n        design={{\"type\":\"light\"}}\n        errored={errored}\n        onActionPress={function (){\n            return setErrored(!errored);\n          }}\n        onActionReset={function (){\n            return setErrored(false);\n          }}/>\n    </ReactNative.View>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <slim_submit.SubmitLine
              design={{"type":"light"}}
              errored={errored}
              onActionPress={function (){
                  return setErrored(!errored);
                }}
              onActionReset={function (){
                  return setErrored(false);
                }}/>
          </ReactNative.View>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-submit-test/SubmitLineActionsDemo [139] 
export function SubmitLineActionsDemo(){
  let [errored,setErrored] = React.useState();
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-submit/SubmitLineActions"
        code={(function (){
            return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"padding\":10}}>\n      <slim_submit.SubmitLineActions\n        design={{\"type\":\"light\"}}\n        errored={errored}\n        clearShow={true}\n        cancelShow={true}\n        onActionPress={function (){\n            return setErrored(!errored);\n          }}\n        onActionReset={function (){\n            return setErrored(false);\n          }}/>\n    </ReactNative.View>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <slim_submit.SubmitLineActions
              design={{"type":"light"}}
              errored={errored}
              clearShow={true}
              cancelShow={true}
              onActionPress={function (){
                  return setErrored(!errored);
                }}
              onActionReset={function (){
                  return setErrored(false);
                }}/>
          </ReactNative.View>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-submit-test/UseSubmitFieldDemo [162] 
export function UseSubmitFieldDemo(){
  let form = ext_form.makeForm(function (){
    return {"email":"a@a.com"};
  },{
    "email":[validators.is_required(),validators.is_valid_email()]
  });
  let email = ext_form.listenFieldValue(form,"email");
  let validation = ext_form.listenFieldResult(form,"email",{"custom":"VALIDATION"});
  let submitProps = slim_submit.useSubmitField({form,"field":"email","onSubmit":function (){
      return new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(          (function (){
                        return {"status":"error","tag":"user.account/incorrect_password"};
                      })());
          }
          catch(e){
            reject(e);
          }
        },500);
      });
    },"explicit":false});
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-submit/useSubmitField"
        code={(function (){
            return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"padding\":10}}>\n      <ReactNative.TextInput\n        value={event_form.get_field(form,\"email\")}\n        onChangeText={function (val){\n            event_form.set_field(form,\"email\",val);\n            event_form.validate_all(form);\n          }}/>\n      <ReactNative.View style={{\"height\":10}}/>\n      <slim_submit.SubmitLine\n        design={{\"type\":\"light\"}}\n        errorProps={{\"row\":true}}\n        {...submitProps}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"padding\":10}}>\n      <ReactNative.View style={{\"height\":10}}/>\n      <slim_submit.SubmitLine\n        design={{\"type\":\"dark\"}}\n        errorProps={{\"row\":true}}\n        {...submitProps}/>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.TextDisplay content={n.format_entry({submitProps,validation})}/>);";
          })()}>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <ReactNative.TextInput
              value={event_form.get_field(form,"email")}
              onChangeText={function (val){
                  event_form.set_field(form,"email",val);
                  event_form.validate_all(form);
                }}/>
            <ReactNative.View style={{"height":10}}/>
            <slim_submit.SubmitLine
              design={{"type":"light"}}
              errorProps={{"row":true}}
              {...submitProps}/>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","padding":10}}>
            <ReactNative.View style={{"height":10}}/>
            <slim_submit.SubmitLine
              design={{"type":"dark"}}
              errorProps={{"row":true}}
              {...submitProps}/>
          </ReactNative.View>
        </n.Row>
        <n.TextDisplay content={n.format_entry({submitProps,validation})}/>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-submit-test/UseSubmitFormDemo [215] 
export function UseSubmitFormDemo(){
  let form = ext_form.makeForm(function (){
    return {"email":"a@a.com"};
  },{
    "email":[validators.is_required(),validators.is_valid_email()]
  });
  let email = ext_form.listenFieldValue(form,"email");
  let validation = ext_form.listenFormResult(form,{"custom":"VALIDATION"});
  let {errored,onAction,onActionCheck,onActionPress,onActionReset,result,setResult,setWaiting,waiting} = slim_submit.useSubmitForm({form,"onSubmit":function (){
      return new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(          (function (){
                        return {"status":"error","tag":"user.account/incorrect_password"};
                      })());
          }
          catch(e){
            reject(e);
          }
        },500);
      });
    },"explicit":false});
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-submit/useSubmitForm"
        code={(function (){
            return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"padding\":10}}>\n      <ReactNative.TextInput\n        value={event_form.get_field(form,\"email\")}\n        onChangeText={function (val){\n            event_form.set_field(form,\"email\",val);\n            event_form.validate_all(form);\n          }}/>\n      <ReactNative.View style={{\"height\":10}}/>\n      <slim_submit.SubmitLine\n        onActionPress={onActionPress}\n        setResult={setResult}\n        onActionReset={onActionReset}\n        setWaiting={setWaiting}\n        onActionCheck={onActionCheck}\n        errorProps={{\"row\":true}}\n        onAction={onAction}\n        waiting={waiting}\n        design={{\"type\":\"light\"}}\n        result={result}\n        errored={errored}/>\n    </ReactNative.View>\n  </n.Row>);\n(\n  <n.TextDisplay\n    content={n.format_entry({errored,result,validation,waiting})}/>);";
          })()}>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","padding":10}}>
            <ReactNative.TextInput
              value={event_form.get_field(form,"email")}
              onChangeText={function (val){
                  event_form.set_field(form,"email",val);
                  event_form.validate_all(form);
                }}/>
            <ReactNative.View style={{"height":10}}/>
            <slim_submit.SubmitLine
              onActionPress={onActionPress}
              setResult={setResult}
              onActionReset={onActionReset}
              setWaiting={setWaiting}
              onActionCheck={onActionCheck}
              errorProps={{"row":true}}
              onAction={onAction}
              waiting={waiting}
              design={{"type":"light"}}
              result={result}
              errored={errored}/>
          </ReactNative.View>
        </n.Row>
        <n.TextDisplay
          content={n.format_entry({errored,result,validation,waiting})}/>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-submit-test/MODULE [272] 
export var MODULE = {
  "UseSubmitDemo":UseSubmitDemo,
  "SubmitButtonDemo":SubmitButtonDemo,
  "SubmitLineDemo":SubmitLineDemo,
  "SubmitLineActionsDemo":SubmitLineActionsDemo,
  "UseSubmitFieldDemo":UseSubmitFieldDemo,
  "UseSubmitFormDemo":UseSubmitFormDemo,
  "MODULE":MODULE
};