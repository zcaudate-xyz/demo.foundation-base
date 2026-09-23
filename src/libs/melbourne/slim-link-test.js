import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as slim_link from './slim-link.js'

import * as ext_form from '../js/react/ext-form.js'

import * as ext_view from '../js/react/ext-model.js'

import * as n from '../js/react-native.js'

import * as event_view from '../xt/event/base-model.js'

// melbourne.slim-link-test/FormLinkDropdownDemo [37] 
export function FormLinkDropdownDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":null};
  },{"account_id":[]});
  let views = React.useRef({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return data.arr_map(data.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },100);
            });
          }
      })
  }).current;
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-link/FormLinkDropdown"
        style={{"height":200}}
        code={(function (){
            return "(\n  <n.Row>\n    {React.createElement(slim_link.FormLinkDropdown,Object.assign({form,views},{\n      \"design\":{\"type\":\"light\"},\n      \"label\":\"Account\",\n      \"field\":\"account_id\",\n      \"fieldProps\":{\n        \"style\":{\"width\":500},\n        \"viewKey\":\"account\",\n        \"viewTemplate\":[\"name\"]\n      }\n    }))}\n  </n.Row>);";
          })()}>
        <n.Row>
          {React.createElement(slim_link.FormLinkDropdown,Object.assign({form,views},{
            "design":{"type":"light"},
            "label":"Account",
            "field":"account_id",
            "fieldProps":{
              "style":{"width":500},
              "viewKey":"account",
              "viewTemplate":["name"]
            }
          }))}
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-link-test/FormLinkReadOnlyDemo [76] 
export function FormLinkReadOnlyDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":"id-2"};
  },{"account_id":[]});
  let views = React.useRef({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return data.arr_map(data.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },100);
            });
          }
      })
  }).current;
  let entry = {"account_id":"id-3"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-link/FormLinkReadOnly"
      code={(function (){
          return "(\n  <n.Row>\n    {React.createElement(slim_link.FormLinkReadOnly,Object.assign({entry,form,views},{\n      \"design\":{\"type\":\"light\"},\n      \"label\":\"Account\",\n      \"field\":\"account_id\",\n      \"fieldProps\":{\n        \"style\":{\"width\":500},\n        \"viewKey\":\"account\",\n        \"viewTemplate\":[\"name\"]\n      }\n    }))}\n  </n.Row>);";
        })()}>
      <n.Row>
        {React.createElement(slim_link.FormLinkReadOnly,Object.assign({entry,form,views},{
          "design":{"type":"light"},
          "label":"Account",
          "field":"account_id",
          "fieldProps":{
            "style":{"width":500},
            "viewKey":"account",
            "viewTemplate":["name"]
          }
        }))}
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-link-test/FormLinkEntryReadOnlyDemo [115] 
export function FormLinkEntryReadOnlyDemo(){
  let form = ext_form.makeForm(function (){
    return {"account_id":"id-4"};
  },{"account_id":[]});
  let views = React.useRef({
    "account":ext_view.makeView({
        "defaultOutput":[],
        "defaultArgs":[],
        "defaultProcess":event_view.sorted_lookup("name"),
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return data.arr_map(data.arr_range(5),function (i){
                                return {"id":"id-" + i,"name":"name-" + i,"balance":Math.random()};
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },100);
            });
          }
      })
  }).current;
  let entry = {"account_id":"id-2"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-link/FormLinkEntryReadOnly"
      code={(function (){
          return "(\n  <n.Row>\n    {React.createElement(slim_link.FormLinkEntryReadOnly,Object.assign({entry,form,views},{\n      \"design\":{\"type\":\"light\"},\n      \"label\":\"Account\",\n      \"field\":\"account_id\",\n      \"fieldProps\":{\n        \"style\":{\"width\":500},\n        \"viewKey\":\"account\",\n        \"viewTemplate\":[\"name\"]\n      }\n    }))}\n  </n.Row>);";
        })()}>
      <n.Row>
        {React.createElement(slim_link.FormLinkEntryReadOnly,Object.assign({entry,form,views},{
          "design":{"type":"light"},
          "label":"Account",
          "field":"account_id",
          "fieldProps":{
            "style":{"width":500},
            "viewKey":"account",
            "viewTemplate":["name"]
          }
        }))}
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-link-test/MODULE [149] 
export var MODULE = {
  "FormLinkDropdownDemo":FormLinkDropdownDemo,
  "FormLinkReadOnlyDemo":FormLinkReadOnlyDemo,
  "FormLinkEntryReadOnlyDemo":FormLinkEntryReadOnlyDemo,
  "MODULE":MODULE
};