import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as slim from './slim.js'

import * as ext_view from '../js/react/ext-model.js'

import * as slim_table_list from './slim-table-list.js'

import * as slim_entry from './slim-entry.js'

import * as n from '../js/react-native.js'

import * as ui_input from './ui-input.js'

// melbourne.slim-table-search-test/TableListSearchDemo [41] 
export function TableListSearchDemo(){
  let views = React.useRef({
    "list":ext_view.makeView({
        "handler":function (args){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return data.arr_map(data.arr_range(40),function (i){
                                return {"id":"id-" + i,"balance":Math.random(),"escrow":args};
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
                      {"template":["balance"],"style":{"marginLeft":10}}
                    ]
                },
                {
                  "type":"h",
                  "body":[
                      {"type":"title","template":"E"},
                      {"template":["escrow"],"style":{"marginLeft":10}}
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
  let [example,setExample] = React.useState("A");
  let components = {"entry_brief":EntryBrief};
  React.useEffect(function (){
    if(example){
      setTimeout(function (){
        new Promise(function (){
          ext_view.refresh_args(views.list,[example]);
        });
      },100);
      null;
    }
  },[example]);
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-search/TableListSearch"
        code={(function (){
            return "(\n  <ui_input.Input\n    design={{\"type\":\"light\"}}\n    value={example}\n    onChangeText={setExample}/>);\n(\n  <n.Row style={{\"height\":400}}>\n    <ReactNative.ScrollView>\n      <slim_table_list.TableList\n        mini={true}\n        design={{\"type\":\"light\"}}\n        style={{\"minWidth\":200}}\n        display={{\"brief\":{\"card\":{\"component\":\"mini\"}},\"list\":{}}}\n        views={views}\n        components={components}\n        control={control}/>\n    </ReactNative.ScrollView>\n  </n.Row>);";
          })()}>
        <ui_input.Input
          design={{"type":"light"}}
          value={example}
          onChangeText={setExample}/>
        <n.Row style={{"height":400}}>
          <ReactNative.ScrollView>
            <slim_table_list.TableList
              mini={true}
              design={{"type":"light"}}
              style={{"minWidth":200}}
              display={{"brief":{"card":{"component":"mini"}},"list":{}}}
              views={views}
              components={components}
              control={control}/>
          </ReactNative.ScrollView>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-search-test/MODULE [109] 
export var MODULE = {"TableListSearchDemo":TableListSearchDemo,"MODULE":MODULE};