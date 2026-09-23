import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as slim from './slim.js'

import * as sort_by from '../xt/lang/common-sort-by.js'

import * as ext_view from '../js/react/ext-model.js'

import * as slim_table_list from './slim-table-list.js'

import * as ui_text from './ui-text.js'

import * as slim_entry from './slim-entry.js'

import * as n from '../js/react-native.js'

// melbourne.slim-table-list-test/TableListCardBriefDemo [39] 
export function TableListCardBriefDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListCardBrief"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"width\":200}}>\n      <slim_table_list.TableListCardBrief design={{\"type\":\"light\"}} control={control} entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"light\"}} impl={impl} entry={entry}/>\n      </slim_table_list.TableListCardBrief>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"width\":200}}>\n      <slim_table_list.TableListCardBrief design={{\"type\":\"dark\"}} control={control} entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"dark\"}} impl={impl} entry={entry}/>\n      </slim_table_list.TableListCardBrief>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"width":200}}>
          <slim_table_list.TableListCardBrief design={{"type":"light"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}/>
          </slim_table_list.TableListCardBrief>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"width":200}}>
          <slim_table_list.TableListCardBrief design={{"type":"dark"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}/>
          </slim_table_list.TableListCardBrief>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListCardNavDemo [87] 
export function TableListCardNavDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListCardNav"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"width\":200}}>\n      <slim_table_list.TableListCardNav design={{\"type\":\"light\"}} control={control} entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"light\"}} impl={impl} entry={entry}/>\n      </slim_table_list.TableListCardNav>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"width\":200}}>\n      <slim_table_list.TableListCardNav design={{\"type\":\"dark\"}} control={control} entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"dark\"}} impl={impl} entry={entry}/>\n      </slim_table_list.TableListCardNav>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"width":200}}>
          <slim_table_list.TableListCardNav design={{"type":"light"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}/>
          </slim_table_list.TableListCardNav>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"width":200}}>
          <slim_table_list.TableListCardNav design={{"type":"dark"}} control={control} entry={entry}>
            <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}/>
          </slim_table_list.TableListCardNav>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListCardSwipeDemo [135] 
export function TableListCardSwipeDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-list/TableListCardSwipe"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}}>\n      <slim_table_list.TableListCardSwipe\n        design={{\"type\":\"light\"}}\n        style={{\"width\":200}}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"light\"}} impl={impl} entry={entry}/>\n      </slim_table_list.TableListCardSwipe>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}}>\n      <slim_table_list.TableListCardSwipe\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":200}}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry design={{\"type\":\"dark\"}} impl={impl} entry={entry}/>\n      </slim_table_list.TableListCardSwipe>\n    </ui_static.Div>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCardSwipe
              design={{"type":"light"}}
              style={{"width":200}}
              control={control}
              entry={entry}>
              <slim_entry.Entry design={{"type":"light"}} impl={impl} entry={entry}/>
            </slim_table_list.TableListCardSwipe>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCardSwipe
              design={{"type":"dark"}}
              style={{"width":200}}
              control={control}
              entry={entry}>
              <slim_entry.Entry design={{"type":"dark"}} impl={impl} entry={entry}/>
            </slim_table_list.TableListCardSwipe>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListCardFoldDemo [184] 
export function TableListCardFoldDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
  let EntryDetail = React.useRef(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{impl}));
  }).current;
  let components = {"entry_detail":EntryDetail};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-list/TableListCardFold"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}}>\n      <slim_table_list.TableListCardFold\n        design={{\"type\":\"light\"}}\n        style={{\"width\":200}}\n        components={components}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry\n          design={{\"type\":\"light\"}}\n          impl={{\"type\":\"card\",\"body\":{\"title\":{\"template\":[\"currency_id\"]}}}}\n          entry={entry}/>\n      </slim_table_list.TableListCardFold>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}}>\n      <slim_table_list.TableListCardFold\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":200}}\n        components={components}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry\n          design={{\"type\":\"dark\"}}\n          impl={{\"type\":\"card\",\"body\":{\"title\":{\"template\":[\"currency_id\"]}}}}\n          entry={entry}/>\n      </slim_table_list.TableListCardFold>\n    </ui_static.Div>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCardFold
              design={{"type":"light"}}
              style={{"width":200}}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"light"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}/>
            </slim_table_list.TableListCardFold>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCardFold
              design={{"type":"dark"}}
              style={{"width":200}}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"dark"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}/>
            </slim_table_list.TableListCardFold>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListCardDemo [245] 
export function TableListCardDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "body":{
        "title":{"type":"title","template":["currency_id"]},
        "main":{
            "type":"v",
            "body":[
                {
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  }).current;
  let EntryDetail = React.useRef(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{impl}));
  }).current;
  let components = {"entry_brief":EntryBrief,"entry_detail":EntryDetail};
  let [type,setType] = React.useState("fold");
  let [swipe,setSwipe] = React.useState("left");
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-list/TableListCard"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_text.TabsAccent\n      value={type}\n      setValue={setType}\n      data={[\"fold\",\"mini\",\"swipe\"]}/>\n    <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={[\"left\",\"right\"]}/>\n  </n.Row>);\n(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}}>\n      <slim_table_list.TableListCard\n        key={swipe}\n        design={{\"type\":\"light\"}}\n        style={{\"width\":200}}\n        display={{\n            \"brief\":{\"card\":{\"component\":type}},\n            \"swipe\":{\"direction\":swipe,\"showDelete\":false}\n          }}\n        components={components}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry\n          design={{\"type\":\"light\"}}\n          impl={{\"type\":\"card\",\"body\":{\"title\":{\"template\":[\"currency_id\"]}}}}\n          entry={entry}/>\n      </slim_table_list.TableListCard>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}}>\n      <slim_table_list.TableListCard\n        key={swipe}\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":200}}\n        display={{\n            \"brief\":{\"card\":{\"component\":type}},\n            \"swipe\":{\"direction\":swipe,\"showDelete\":false}\n          }}\n        components={components}\n        control={control}\n        entry={entry}>\n        <slim_entry.Entry\n          design={{\"type\":\"dark\"}}\n          impl={{\"type\":\"card\",\"body\":{\"title\":{\"template\":[\"currency_id\"]}}}}\n          entry={entry}/>\n      </slim_table_list.TableListCard>\n    </ui_static.Div>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_text.TabsAccent
            value={type}
            setValue={setType}
            data={["fold","mini","swipe"]}/>
          <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={["left","right"]}/>
        </n.Row>
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table_list.TableListCard
              key={swipe}
              design={{"type":"light"}}
              style={{"width":200}}
              display={{
                  "brief":{"card":{"component":type}},
                  "swipe":{"direction":swipe,"showDelete":false}
                }}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"light"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}/>
            </slim_table_list.TableListCard>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table_list.TableListCard
              key={swipe}
              design={{"type":"dark"}}
              style={{"width":200}}
              display={{
                  "brief":{"card":{"component":type}},
                  "swipe":{"direction":swipe,"showDelete":false}
                }}
              components={components}
              control={control}
              entry={entry}>
              <slim_entry.Entry
                design={{"type":"dark"}}
                impl={{"type":"card","body":{"title":{"template":["currency_id"]}}}}
                entry={entry}/>
            </slim_table_list.TableListCard>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/TableListViewEntriesDemo [349] 
export function TableListViewEntriesDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListViewEntries"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewEntries\n        design={{\"type\":\"light\"}}\n        entries={[\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"NOP\",\n              \"balance\":1000,\n              \"escrow\":50.5\n            },\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"HIJ\",\n              \"balance\":130400,\n              \"escrow\":1250.5\n            }\n          ]}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        impl={{}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewEntries\n        design={{\"type\":\"dark\"}}\n        entries={[\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"NOP\",\n              \"balance\":1000,\n              \"escrow\":50.5\n            },\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"HIJ\",\n              \"balance\":130400,\n              \"escrow\":1250.5\n            }\n          ]}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        impl={{}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewEntries
            design={{"type":"light"}}
            entries={[
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {
                  "currency_id":"STATS",
                  "name":"NOP",
                  "balance":1000,
                  "escrow":50.5
                },
                {
                  "currency_id":"STATS",
                  "name":"HIJ",
                  "balance":130400,
                  "escrow":1250.5
                }
              ]}
            display={{
                "brief":{
                    "type":"v",
                    "body":[
                        {"template":["name"]},
                        {"template":["balance"]},
                        {"template":["escrow"],"style":{"textAlign":"right"}}
                      ]
                  }
              }}
            impl={{}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewEntries
            design={{"type":"dark"}}
            entries={[
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {
                  "currency_id":"STATS",
                  "name":"NOP",
                  "balance":1000,
                  "escrow":50.5
                },
                {
                  "currency_id":"STATS",
                  "name":"HIJ",
                  "balance":130400,
                  "escrow":1250.5
                }
              ]}
            display={{
                "brief":{
                    "type":"v",
                    "body":[
                        {"template":["name"]},
                        {"template":["balance"]},
                        {"template":["escrow"],"style":{"textAlign":"right"}}
                      ]
                  }
              }}
            impl={{}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListViewGroupDemo [408] 
export function TableListViewGroupDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListViewGroup"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewGroup\n        design={{\"type\":\"light\"}}\n        group={{\n            \"name\":\"STATS\",\n            \"entries\":[\n                {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n                {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"NOP\",\n                  \"balance\":1000,\n                  \"escrow\":50.5\n                },\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"HIJ\",\n                  \"balance\":130400,\n                  \"escrow\":1250.5\n                }\n              ]\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        impl={{}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewGroup\n        design={{\"type\":\"dark\"}}\n        group={{\n            \"name\":\"STATS\",\n            \"entries\":[\n                {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n                {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"NOP\",\n                  \"balance\":1000,\n                  \"escrow\":50.5\n                },\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"HIJ\",\n                  \"balance\":130400,\n                  \"escrow\":1250.5\n                }\n              ]\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        impl={{}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewGroup
            design={{"type":"light"}}
            group={{
                "name":"STATS",
                "entries":[
                    {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                    {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                    {
                      "currency_id":"STATS",
                      "name":"NOP",
                      "balance":1000,
                      "escrow":50.5
                    },
                    {
                      "currency_id":"STATS",
                      "name":"HIJ",
                      "balance":130400,
                      "escrow":1250.5
                    }
                  ]
              }}
            display={{
                "brief":{
                    "type":"v",
                    "body":[
                        {"template":["name"]},
                        {"template":["balance"]},
                        {"template":["escrow"],"style":{"textAlign":"right"}}
                      ]
                  }
              }}
            impl={{}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewGroup
            design={{"type":"dark"}}
            group={{
                "name":"STATS",
                "entries":[
                    {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                    {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                    {
                      "currency_id":"STATS",
                      "name":"NOP",
                      "balance":1000,
                      "escrow":50.5
                    },
                    {
                      "currency_id":"STATS",
                      "name":"HIJ",
                      "balance":130400,
                      "escrow":1250.5
                    }
                  ]
              }}
            display={{
                "brief":{
                    "type":"v",
                    "body":[
                        {"template":["name"]},
                        {"template":["balance"]},
                        {"template":["escrow"],"style":{"textAlign":"right"}}
                      ]
                  }
              }}
            impl={{}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListViewPagedDemo [463] 
export function TableListViewPagedDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListViewPaged"
      code={(function (){
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewPaged\n        design={{\"type\":\"light\"}}\n        control={{}}\n        impl={{\n            \"page\":{\"display\":5},\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              }\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[{\"template\":[\"name\"]},{\"template\":[\"amount\"]}]\n              }\n          }}\n        entries={[\n            {\"id\":\"id-0\",\"name\":\"name-0\",\"amount\":0.11474178052932127},\n            {\"id\":\"id-1\",\"name\":\"name-1\",\"amount\":0.8823094211589217},\n            {\"id\":\"id-2\",\"name\":\"name-2\",\"amount\":0.7748780258051772},\n            {\"id\":\"id-3\",\"name\":\"name-3\",\"amount\":0.639081357743941},\n            {\"id\":\"id-4\",\"name\":\"name-4\",\"amount\":0.4749711565303957},\n            {\"id\":\"id-5\",\"name\":\"name-5\",\"amount\":0.4439966594951197},\n            {\"id\":\"id-6\",\"name\":\"name-6\",\"amount\":0.13448956865800643},\n            {\"id\":\"id-7\",\"name\":\"name-7\",\"amount\":0.8688340896429135},\n            {\"id\":\"id-8\",\"name\":\"name-8\",\"amount\":0.6508474519526137},\n            {\"id\":\"id-9\",\"name\":\"name-9\",\"amount\":0.8053595280508224},\n            {\"id\":\"id-10\",\"name\":\"name-10\",\"amount\":0.8081238763386632},\n            {\"id\":\"id-11\",\"name\":\"name-11\",\"amount\":0.4968604748187736},\n            {\"id\":\"id-12\",\"name\":\"name-12\",\"amount\":0.28329587605287665},\n            {\"id\":\"id-13\",\"name\":\"name-13\",\"amount\":0.6628925093947184},\n            {\"id\":\"id-14\",\"name\":\"name-14\",\"amount\":0.03110499594913274},\n            {\"id\":\"id-15\",\"name\":\"name-15\",\"amount\":0.4009318721854632},\n            {\"id\":\"id-16\",\"name\":\"name-16\",\"amount\":0.5923981657803713},\n            {\"id\":\"id-17\",\"name\":\"name-17\",\"amount\":0.36633521446688855},\n            {\"id\":\"id-18\",\"name\":\"name-18\",\"amount\":0.060104046069972994},\n            {\"id\":\"id-19\",\"name\":\"name-19\",\"amount\":0.2687702181828314},\n            {\"id\":\"id-20\",\"name\":\"name-20\",\"amount\":0.9083680023462021},\n            {\"id\":\"id-21\",\"name\":\"name-21\",\"amount\":0.9058553861600743},\n            {\"id\":\"id-22\",\"name\":\"name-22\",\"amount\":0.45334661720848446},\n            {\"id\":\"id-23\",\"name\":\"name-23\",\"amount\":0.28801894566257913},\n            {\"id\":\"id-24\",\"name\":\"name-24\",\"amount\":0.8814482712939538},\n            {\"id\":\"id-25\",\"name\":\"name-25\",\"amount\":0.22556112797951433},\n            {\"id\":\"id-26\",\"name\":\"name-26\",\"amount\":0.018221293596493937},\n            {\"id\":\"id-27\",\"name\":\"name-27\",\"amount\":0.4607150782516799},\n            {\"id\":\"id-28\",\"name\":\"name-28\",\"amount\":0.9875817711173064},\n            {\"id\":\"id-29\",\"name\":\"name-29\",\"amount\":0.7734071713717983},\n            {\"id\":\"id-30\",\"name\":\"name-30\",\"amount\":0.7487078091583539},\n            {\"id\":\"id-31\",\"name\":\"name-31\",\"amount\":0.7867998986202056},\n            {\"id\":\"id-32\",\"name\":\"name-32\",\"amount\":0.021902432456791354},\n            {\"id\":\"id-33\",\"name\":\"name-33\",\"amount\":0.5930673102686596},\n            {\"id\":\"id-34\",\"name\":\"name-34\",\"amount\":0.10336331408759836},\n            {\"id\":\"id-35\",\"name\":\"name-35\",\"amount\":0.03483840345768141},\n            {\"id\":\"id-36\",\"name\":\"name-36\",\"amount\":0.5035398057779835},\n            {\"id\":\"id-37\",\"name\":\"name-37\",\"amount\":0.06510388104951526},\n            {\"id\":\"id-38\",\"name\":\"name-38\",\"amount\":0.6591754086210191},\n            {\"id\":\"id-39\",\"name\":\"name-39\",\"amount\":0.19800047967269785},\n            {\"id\":\"id-40\",\"name\":\"name-40\",\"amount\":0.30292421378684753},\n            {\"id\":\"id-41\",\"name\":\"name-41\",\"amount\":0.6127719977256172},\n            {\"id\":\"id-42\",\"name\":\"name-42\",\"amount\":0.5174112506015035},\n            {\"id\":\"id-43\",\"name\":\"name-43\",\"amount\":0.019489573990764897},\n            {\"id\":\"id-44\",\"name\":\"name-44\",\"amount\":0.3467257063429693},\n            {\"id\":\"id-45\",\"name\":\"name-45\",\"amount\":0.3020546376594392},\n            {\"id\":\"id-46\",\"name\":\"name-46\",\"amount\":0.8346622841072676},\n            {\"id\":\"id-47\",\"name\":\"name-47\",\"amount\":0.16398750722951372},\n            {\"id\":\"id-48\",\"name\":\"name-48\",\"amount\":0.9557554889858226},\n            {\"id\":\"id-49\",\"name\":\"name-49\",\"amount\":0.2860323773812319},\n            {\"id\":\"id-50\",\"name\":\"name-50\",\"amount\":0.5056040423009551},\n            {\"id\":\"id-51\",\"name\":\"name-51\",\"amount\":0.7103167666597406},\n            {\"id\":\"id-52\",\"name\":\"name-52\",\"amount\":0.22760295712569045},\n            {\"id\":\"id-53\",\"name\":\"name-53\",\"amount\":0.4704491821958008},\n            {\"id\":\"id-54\",\"name\":\"name-54\",\"amount\":0.33356147922891166},\n            {\"id\":\"id-55\",\"name\":\"name-55\",\"amount\":0.6454047208642241},\n            {\"id\":\"id-56\",\"name\":\"name-56\",\"amount\":0.888477747294663},\n            {\"id\":\"id-57\",\"name\":\"name-57\",\"amount\":0.6103439917515381},\n            {\"id\":\"id-58\",\"name\":\"name-58\",\"amount\":0.990789998393006},\n            {\"id\":\"id-59\",\"name\":\"name-59\",\"amount\":0.950766370476901},\n            {\"id\":\"id-60\",\"name\":\"name-60\",\"amount\":0.20767121516273168},\n            {\"id\":\"id-61\",\"name\":\"name-61\",\"amount\":0.2868747559021946},\n            {\"id\":\"id-62\",\"name\":\"name-62\",\"amount\":0.6924530205999863},\n            {\"id\":\"id-63\",\"name\":\"name-63\",\"amount\":0.6901061126283876},\n            {\"id\":\"id-64\",\"name\":\"name-64\",\"amount\":0.8932463464679058},\n            {\"id\":\"id-65\",\"name\":\"name-65\",\"amount\":0.8589705180992016},\n            {\"id\":\"id-66\",\"name\":\"name-66\",\"amount\":0.786596915837644},\n            {\"id\":\"id-67\",\"name\":\"name-67\",\"amount\":0.23027047392180666},\n            {\"id\":\"id-68\",\"name\":\"name-68\",\"amount\":0.3690117155756084},\n            {\"id\":\"id-69\",\"name\":\"name-69\",\"amount\":0.5362039150810991},\n            {\"id\":\"id-70\",\"name\":\"name-70\",\"amount\":0.3969949932560949},\n            {\"id\":\"id-71\",\"name\":\"name-71\",\"amount\":0.35766789290793344},\n            {\"id\":\"id-72\",\"name\":\"name-72\",\"amount\":0.4705293610311302},\n            {\"id\":\"id-73\",\"name\":\"name-73\",\"amount\":0.1772849211775367},\n            {\"id\":\"id-74\",\"name\":\"name-74\",\"amount\":0.846551794374416},\n            {\"id\":\"id-75\",\"name\":\"name-75\",\"amount\":0.5884034909375788},\n            {\"id\":\"id-76\",\"name\":\"name-76\",\"amount\":0.39185220760038486},\n            {\"id\":\"id-77\",\"name\":\"name-77\",\"amount\":0.2828343246244709},\n            {\"id\":\"id-78\",\"name\":\"name-78\",\"amount\":0.8360299092013689},\n            {\"id\":\"id-79\",\"name\":\"name-79\",\"amount\":0.4127601001333727},\n            {\"id\":\"id-80\",\"name\":\"name-80\",\"amount\":0.6648819778564988},\n            {\"id\":\"id-81\",\"name\":\"name-81\",\"amount\":0.9216031461619365},\n            {\"id\":\"id-82\",\"name\":\"name-82\",\"amount\":0.25618156376934764},\n            {\"id\":\"id-83\",\"name\":\"name-83\",\"amount\":0.5632893987696658},\n            {\"id\":\"id-84\",\"name\":\"name-84\",\"amount\":0.05968359707798043},\n            {\"id\":\"id-85\",\"name\":\"name-85\",\"amount\":0.006061922350315885},\n            {\"id\":\"id-86\",\"name\":\"name-86\",\"amount\":0.0709374729236043},\n            {\"id\":\"id-87\",\"name\":\"name-87\",\"amount\":0.6506597167466409},\n            {\"id\":\"id-88\",\"name\":\"name-88\",\"amount\":0.5567878716538202},\n            {\"id\":\"id-89\",\"name\":\"name-89\",\"amount\":0.4162920139371644},\n            {\"id\":\"id-90\",\"name\":\"name-90\",\"amount\":0.9251259587876951},\n            {\"id\":\"id-91\",\"name\":\"name-91\",\"amount\":0.6725406174474978},\n            {\"id\":\"id-92\",\"name\":\"name-92\",\"amount\":0.9614588655978963},\n            {\"id\":\"id-93\",\"name\":\"name-93\",\"amount\":0.9603684774263959},\n            {\"id\":\"id-94\",\"name\":\"name-94\",\"amount\":0.002265462391039863},\n            {\"id\":\"id-95\",\"name\":\"name-95\",\"amount\":0.9681857270411871},\n            {\"id\":\"id-96\",\"name\":\"name-96\",\"amount\":0.30509854966502126},\n            {\"id\":\"id-97\",\"name\":\"name-97\",\"amount\":0.054931986256442134},\n            {\"id\":\"id-98\",\"name\":\"name-98\",\"amount\":0.18629400894889026},\n            {\"id\":\"id-99\",\"name\":\"name-99\",\"amount\":0.1650099071614496}\n          ]}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewPaged
            design={{"type":"light"}}
            control={{}}
            impl={{
                "page":{"display":5},
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  }
              }}
            display={{
                "brief":{
                    "type":"v",
                    "body":[{"template":["name"]},{"template":["amount"]}]
                  }
              }}
            entries={[
                {"id":"id-0","name":"name-0","amount":0.11474178052932127},
                {"id":"id-1","name":"name-1","amount":0.8823094211589217},
                {"id":"id-2","name":"name-2","amount":0.7748780258051772},
                {"id":"id-3","name":"name-3","amount":0.639081357743941},
                {"id":"id-4","name":"name-4","amount":0.4749711565303957},
                {"id":"id-5","name":"name-5","amount":0.4439966594951197},
                {"id":"id-6","name":"name-6","amount":0.13448956865800643},
                {"id":"id-7","name":"name-7","amount":0.8688340896429135},
                {"id":"id-8","name":"name-8","amount":0.6508474519526137},
                {"id":"id-9","name":"name-9","amount":0.8053595280508224},
                {"id":"id-10","name":"name-10","amount":0.8081238763386632},
                {"id":"id-11","name":"name-11","amount":0.4968604748187736},
                {"id":"id-12","name":"name-12","amount":0.28329587605287665},
                {"id":"id-13","name":"name-13","amount":0.6628925093947184},
                {"id":"id-14","name":"name-14","amount":0.03110499594913274},
                {"id":"id-15","name":"name-15","amount":0.4009318721854632},
                {"id":"id-16","name":"name-16","amount":0.5923981657803713},
                {"id":"id-17","name":"name-17","amount":0.36633521446688855},
                {"id":"id-18","name":"name-18","amount":0.060104046069972994},
                {"id":"id-19","name":"name-19","amount":0.2687702181828314},
                {"id":"id-20","name":"name-20","amount":0.9083680023462021},
                {"id":"id-21","name":"name-21","amount":0.9058553861600743},
                {"id":"id-22","name":"name-22","amount":0.45334661720848446},
                {"id":"id-23","name":"name-23","amount":0.28801894566257913},
                {"id":"id-24","name":"name-24","amount":0.8814482712939538},
                {"id":"id-25","name":"name-25","amount":0.22556112797951433},
                {"id":"id-26","name":"name-26","amount":0.018221293596493937},
                {"id":"id-27","name":"name-27","amount":0.4607150782516799},
                {"id":"id-28","name":"name-28","amount":0.9875817711173064},
                {"id":"id-29","name":"name-29","amount":0.7734071713717983},
                {"id":"id-30","name":"name-30","amount":0.7487078091583539},
                {"id":"id-31","name":"name-31","amount":0.7867998986202056},
                {"id":"id-32","name":"name-32","amount":0.021902432456791354},
                {"id":"id-33","name":"name-33","amount":0.5930673102686596},
                {"id":"id-34","name":"name-34","amount":0.10336331408759836},
                {"id":"id-35","name":"name-35","amount":0.03483840345768141},
                {"id":"id-36","name":"name-36","amount":0.5035398057779835},
                {"id":"id-37","name":"name-37","amount":0.06510388104951526},
                {"id":"id-38","name":"name-38","amount":0.6591754086210191},
                {"id":"id-39","name":"name-39","amount":0.19800047967269785},
                {"id":"id-40","name":"name-40","amount":0.30292421378684753},
                {"id":"id-41","name":"name-41","amount":0.6127719977256172},
                {"id":"id-42","name":"name-42","amount":0.5174112506015035},
                {"id":"id-43","name":"name-43","amount":0.019489573990764897},
                {"id":"id-44","name":"name-44","amount":0.3467257063429693},
                {"id":"id-45","name":"name-45","amount":0.3020546376594392},
                {"id":"id-46","name":"name-46","amount":0.8346622841072676},
                {"id":"id-47","name":"name-47","amount":0.16398750722951372},
                {"id":"id-48","name":"name-48","amount":0.9557554889858226},
                {"id":"id-49","name":"name-49","amount":0.2860323773812319},
                {"id":"id-50","name":"name-50","amount":0.5056040423009551},
                {"id":"id-51","name":"name-51","amount":0.7103167666597406},
                {"id":"id-52","name":"name-52","amount":0.22760295712569045},
                {"id":"id-53","name":"name-53","amount":0.4704491821958008},
                {"id":"id-54","name":"name-54","amount":0.33356147922891166},
                {"id":"id-55","name":"name-55","amount":0.6454047208642241},
                {"id":"id-56","name":"name-56","amount":0.888477747294663},
                {"id":"id-57","name":"name-57","amount":0.6103439917515381},
                {"id":"id-58","name":"name-58","amount":0.990789998393006},
                {"id":"id-59","name":"name-59","amount":0.950766370476901},
                {"id":"id-60","name":"name-60","amount":0.20767121516273168},
                {"id":"id-61","name":"name-61","amount":0.2868747559021946},
                {"id":"id-62","name":"name-62","amount":0.6924530205999863},
                {"id":"id-63","name":"name-63","amount":0.6901061126283876},
                {"id":"id-64","name":"name-64","amount":0.8932463464679058},
                {"id":"id-65","name":"name-65","amount":0.8589705180992016},
                {"id":"id-66","name":"name-66","amount":0.786596915837644},
                {"id":"id-67","name":"name-67","amount":0.23027047392180666},
                {"id":"id-68","name":"name-68","amount":0.3690117155756084},
                {"id":"id-69","name":"name-69","amount":0.5362039150810991},
                {"id":"id-70","name":"name-70","amount":0.3969949932560949},
                {"id":"id-71","name":"name-71","amount":0.35766789290793344},
                {"id":"id-72","name":"name-72","amount":0.4705293610311302},
                {"id":"id-73","name":"name-73","amount":0.1772849211775367},
                {"id":"id-74","name":"name-74","amount":0.846551794374416},
                {"id":"id-75","name":"name-75","amount":0.5884034909375788},
                {"id":"id-76","name":"name-76","amount":0.39185220760038486},
                {"id":"id-77","name":"name-77","amount":0.2828343246244709},
                {"id":"id-78","name":"name-78","amount":0.8360299092013689},
                {"id":"id-79","name":"name-79","amount":0.4127601001333727},
                {"id":"id-80","name":"name-80","amount":0.6648819778564988},
                {"id":"id-81","name":"name-81","amount":0.9216031461619365},
                {"id":"id-82","name":"name-82","amount":0.25618156376934764},
                {"id":"id-83","name":"name-83","amount":0.5632893987696658},
                {"id":"id-84","name":"name-84","amount":0.05968359707798043},
                {"id":"id-85","name":"name-85","amount":0.006061922350315885},
                {"id":"id-86","name":"name-86","amount":0.0709374729236043},
                {"id":"id-87","name":"name-87","amount":0.6506597167466409},
                {"id":"id-88","name":"name-88","amount":0.5567878716538202},
                {"id":"id-89","name":"name-89","amount":0.4162920139371644},
                {"id":"id-90","name":"name-90","amount":0.9251259587876951},
                {"id":"id-91","name":"name-91","amount":0.6725406174474978},
                {"id":"id-92","name":"name-92","amount":0.9614588655978963},
                {"id":"id-93","name":"name-93","amount":0.9603684774263959},
                {"id":"id-94","name":"name-94","amount":0.002265462391039863},
                {"id":"id-95","name":"name-95","amount":0.9681857270411871},
                {"id":"id-96","name":"name-96","amount":0.30509854966502126},
                {"id":"id-97","name":"name-97","amount":0.054931986256442134},
                {"id":"id-98","name":"name-98","amount":0.18629400894889026},
                {"id":"id-99","name":"name-99","amount":0.1650099071614496}
              ]}/>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListViewRemotePagedDemo [493] 
export function TableListViewRemotePagedDemo(){
  let views = {
    "list":ext_view.makeView({
        "handler":function (showPage,display){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return data.arr_map(data.arr_range(display),function (i){
                                return {
                                  "id":"id-" + (((showPage - 2) * display) + display + i),
                                  "name":"name-" + (((showPage - 2) * display) + display + i),
                                  "amount":Math.random()
                                };
                              });
                            })());
                }
                catch(e){
                  reject(e);
                }
              },200);
            });
          },
        "options":{"init":false}
      })
  };
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListViewRemotePaged"
      code={(function (){
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewRemotePaged\n        design={{\"type\":\"light\"}}\n        control={{}}\n        views={views}\n        impl={{\n            \"page\":{\"display\":5,\"total\":100},\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              }\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[{\"template\":[\"name\"]},{\"template\":[\"amount\"]}]\n              }\n          }}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewRemotePaged
            design={{"type":"light"}}
            control={{}}
            views={views}
            impl={{
                "page":{"display":5,"total":100},
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  }
              }}
            display={{
                "brief":{
                    "type":"v",
                    "body":[{"template":["name"]},{"template":["amount"]}]
                  }
              }}/>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListViewDemo [570] 
export function TableListViewDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-list/TableListView"
      code={(function (){
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListView\n        design={{\"type\":\"light\"}}\n        impl={{\n            \"groups\":{\"split\":[\"currency_id\"]},\n            \"items\":{\n                \"sort\":function (arr){\n                    return sort_by.sort_by(arr,[[\"name\",true],\"balance\"]);\n                  }\n              },\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              }\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        entries={[\n            {\"currency_id\":\"DOGE\",\"name\":\"QRS\",\"balance\":490,\"escrow\":34.0},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"NOP\",\n              \"balance\":1000,\n              \"escrow\":50.5\n            },\n            {\n              \"currency_id\":\"DOGE\",\n              \"name\":\"EFG\",\n              \"balance\":34050,\n              \"escrow\":50.5\n            },\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\"currency_id\":\"DOGE\",\"name\":\"WXY\",\"balance\":456,\"escrow\":63},\n            {\"currency_id\":\"DOGE\",\"name\":\"KLM\",\"balance\":100,\"escrow\":0.5},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"HIJ\",\n              \"balance\":130400,\n              \"escrow\":1250.5\n            },\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37}\n          ]}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListView
            design={{"type":"light"}}
            impl={{
                "groups":{"split":["currency_id"]},
                "items":{
                    "sort":function (arr){
                        return sort_by.sort_by(arr,[["name",true],"balance"]);
                      }
                  },
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  }
              }}
            display={{
                "brief":{
                    "type":"v",
                    "body":[
                        {"template":["name"]},
                        {"template":["balance"]},
                        {"template":["escrow"],"style":{"textAlign":"right"}}
                      ]
                  }
              }}
            entries={[
                {"currency_id":"DOGE","name":"QRS","balance":490,"escrow":34.0},
                {
                  "currency_id":"STATS",
                  "name":"NOP",
                  "balance":1000,
                  "escrow":50.5
                },
                {
                  "currency_id":"DOGE",
                  "name":"EFG",
                  "balance":34050,
                  "escrow":50.5
                },
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63},
                {"currency_id":"DOGE","name":"KLM","balance":100,"escrow":0.5},
                {
                  "currency_id":"STATS",
                  "name":"HIJ",
                  "balance":130400,
                  "escrow":1250.5
                },
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37}
              ]}/>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-list-test/TableListDemo [596] 
export function TableListDemo(){
  let views = React.useRef({
    "list":ext_view.makeView({
        "defaultArgs":[],
        "handler":function (){
            return new Promise(function (resolve,reject){
              setTimeout(function (){
                try{
                  resolve(          (function (){
                              return [
                                {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5},
                                {"id":"id-1","currency_id":"USA","balance":300,"escrow":10.5},
                                {"id":"id-2","currency_id":"XLM","balance":50,"escrow":0.0}
                              ];
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
                  "type":"pair",
                  "title":{"template":"B"},
                  "text":{"template":["balance"]}
                },
                {
                  "type":"pair",
                  "title":{"template":"E"},
                  "text":{"template":["escrow"]}
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
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  }).current;
  let EntryDetail = React.useRef(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{impl}));
  }).current;
  let components = {"entry_brief":EntryBrief,"entry_detail":EntryDetail};
  let [type,setType] = React.useState("fold");
  let [swipe,setSwipe] = React.useState("left");
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table-list/TableList"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_text.TabsAccent\n      value={type}\n      setValue={setType}\n      data={[\"fold\",\"swipe\",\"mini\"]}/>\n    <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={[\"left\",\"right\"]}/>\n  </n.Row>);\n(\n  <n.Row>\n    <slim_table_list.TableList\n      mini={true}\n      design={{\"type\":\"light\"}}\n      style={{\"width\":200}}\n      display={{\n          \"brief\":{\"card\":{\"component\":type}},\n          \"swipe\":{\"direction\":swipe,\"showDelete\":false}\n        }}\n      views={views}\n      components={components}\n      control={control}/>\n    <slim_table_list.TableList\n      mini={true}\n      design={{\"type\":\"dark\"}}\n      style={{\"width\":200}}\n      display={{\n          \"brief\":{\"card\":{\"component\":type}},\n          \"swipe\":{\"direction\":swipe,\"showDelete\":false}\n        }}\n      views={views}\n      components={components}\n      control={control}/>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_text.TabsAccent
            value={type}
            setValue={setType}
            data={["fold","swipe","mini"]}/>
          <ui_text.TabsAccent value={swipe} setValue={setSwipe} data={["left","right"]}/>
        </n.Row>
        <n.Row>
          <slim_table_list.TableList
            mini={true}
            design={{"type":"light"}}
            style={{"width":200}}
            display={{
                "brief":{"card":{"component":type}},
                "swipe":{"direction":swipe,"showDelete":false}
              }}
            views={views}
            components={components}
            control={control}/>
          <slim_table_list.TableList
            mini={true}
            design={{"type":"dark"}}
            style={{"width":200}}
            display={{
                "brief":{"card":{"component":type}},
                "swipe":{"direction":swipe,"showDelete":false}
              }}
            views={views}
            components={components}
            control={control}/>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-list-test/MODULE [680] 
export var MODULE = {
  "TableListCardBriefDemo":TableListCardBriefDemo,
  "TableListCardNavDemo":TableListCardNavDemo,
  "TableListCardSwipeDemo":TableListCardSwipeDemo,
  "TableListCardFoldDemo":TableListCardFoldDemo,
  "TableListCardDemo":TableListCardDemo,
  "TableListViewEntriesDemo":TableListViewEntriesDemo,
  "TableListViewGroupDemo":TableListViewGroupDemo,
  "TableListViewPagedDemo":TableListViewPagedDemo,
  "TableListViewRemotePagedDemo":TableListViewRemotePagedDemo,
  "TableListViewDemo":TableListViewDemo,
  "TableListDemo":TableListDemo,
  "MODULE":MODULE
};