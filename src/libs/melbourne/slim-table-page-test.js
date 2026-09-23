import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as slim from './slim.js'

import * as lib from '../xt/lang/common-lib.js'

import * as ext_view from '../js/react/ext-model.js'

import * as slim_table_list from './slim-table-list.js'

import * as slim_entry from './slim-entry.js'

import * as n from '../js/react-native.js'

// melbourne.slim-table-page-test/TableListPagedDemo [39] 
export function TableListPagedDemo(){
  let views = React.useRef({
    "list":ext_view.makeView({
        "defaultArgs":[],
        "handler":function (){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return data.arr_map(data.arr_range(200),function (i){
                                return {"id":"id-" + i,"balance":Math.random(),"escrow":Math.random()};
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
  let control = slim.useLocalControl();
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"B"},
                      {
                        "template":["balance"],
                        "style":{"marginLeft":10},
                        "format":function (n){
                            return lib.is_numberp(n) ? n.toFixed(2) : null;
                          }
                      }
                    ]
                },
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"E"},
                      {
                        "template":["escrow"],
                        "style":{"marginLeft":10},
                        "format":function (n){
                            return lib.is_numberp(n) ? n.toFixed(2) : null;
                          }
                      }
                    ]
                }
              ]
          },
        "avatar":{
            "type":"image",
            "text":{"template":["currency_id"]},
            "image":{"template":["picture"]}
          }
      }
  };
  let EntryBrief = React.useRef(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{"impl":impl}));
  }).current;
  let components = {"entry_brief":EntryBrief};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-page/TableListPaged"
        code={(function (){
            return "(\n  <n.Row style={{\"height\":400}}>\n    <ReactNative.ScrollView>\n      <slim_table_list.TableList\n        mini={true}\n        design={{\"type\":\"light\"}}\n        style={{\"minWidth\":200}}\n        display={{\n            \"brief\":{\"card\":{\"component\":\"mini\"}},\n            \"list\":{\"page\":{\"display\":5}}\n          }}\n        views={views}\n        components={components}\n        control={control}/>\n    </ReactNative.ScrollView>\n  </n.Row>);";
          })()}>
        <n.Row style={{"height":400}}>
          <ReactNative.ScrollView>
            <slim_table_list.TableList
              mini={true}
              design={{"type":"light"}}
              style={{"minWidth":200}}
              display={{
                  "brief":{"card":{"component":"mini"}},
                  "list":{"page":{"display":5}}
                }}
              views={views}
              components={components}
              control={control}/>
          </ReactNative.ScrollView>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-page-test/TableListRemotePagedDemo [99] 
export function TableListRemotePagedDemo(){
  let views = React.useRef({
    "list":ext_view.makeView({
        "defaultArgs":[],
        "handler":function (showPage,display){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return data.arr_map(data.arr_range(display),function (i){
                                return {
                                  "id":"id-" + (((showPage - 2) * display) + display + i),
                                  "balance":Math.random(),
                                  "escrow":Math.random()
                                };
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },200);
            });
          }
      })
  }).current;
  let control = slim.useLocalControl();
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"B"},
                      {
                        "template":["balance"],
                        "style":{"marginLeft":10},
                        "format":function (n){
                            return lib.is_numberp(n) ? n.toFixed(2) : null;
                          }
                      }
                    ]
                },
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"E"},
                      {
                        "template":["escrow"],
                        "style":{"marginLeft":10},
                        "format":function (n){
                            return lib.is_numberp(n) ? n.toFixed(2) : null;
                          }
                      }
                    ]
                }
              ]
          },
        "avatar":{
            "type":"image",
            "text":{"template":["currency_id"]},
            "image":{"template":["picture"]}
          }
      }
  };
  let EntryBrief = React.useRef(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{"impl":impl}));
  }).current;
  let components = {"entry_brief":EntryBrief};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-page/TableListRemotePaged"
        code={(function (){
            return "(\n  <n.Row style={{\"height\":400}}>\n    <ReactNative.ScrollView>\n      <slim_table_list.TableList\n        mini={true}\n        design={{\"type\":\"light\"}}\n        style={{\"minWidth\":200}}\n        display={{\n            \"brief\":{\"card\":{\"component\":\"mini\"}},\n            \"list\":{\"page\":{\"remote\":true,\"total\":200,\"display\":5}}\n          }}\n        views={views}\n        components={components}\n        control={control}/>\n    </ReactNative.ScrollView>\n  </n.Row>);";
          })()}>
        <n.Row style={{"height":400}}>
          <ReactNative.ScrollView>
            <slim_table_list.TableList
              mini={true}
              design={{"type":"light"}}
              style={{"minWidth":200}}
              display={{
                  "brief":{"card":{"component":"mini"}},
                  "list":{"page":{"remote":true,"total":200,"display":5}}
                }}
              views={views}
              components={components}
              control={control}/>
          </ReactNative.ScrollView>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-page-test/MODULE [162] 
export var MODULE = {
  "TableListPagedDemo":TableListPagedDemo,
  "TableListRemotePagedDemo":TableListRemotePagedDemo,
  "MODULE":MODULE
};