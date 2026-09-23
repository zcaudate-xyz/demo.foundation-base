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
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewEntries\n        design={{\"type\":\"light\"}}\n        entries={[\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"NOP\",\n              \"balance\":1000,\n              \"escrow\":50.5\n            },\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"HIJ\",\n              \"balance\":130400,\n              \"escrow\":1250.5\n            },\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37}\n          ]}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        impl={{}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewEntries\n        design={{\"type\":\"dark\"}}\n        entries={[\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"NOP\",\n              \"balance\":1000,\n              \"escrow\":50.5\n            },\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"HIJ\",\n              \"balance\":130400,\n              \"escrow\":1250.5\n            },\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37}\n          ]}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        impl={{}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewEntries
            design={{"type":"light"}}
            entries={[
                {
                  "currency_id":"STATS",
                  "name":"NOP",
                  "balance":1000,
                  "escrow":50.5
                },
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {
                  "currency_id":"STATS",
                  "name":"HIJ",
                  "balance":130400,
                  "escrow":1250.5
                },
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37}
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
                {
                  "currency_id":"STATS",
                  "name":"NOP",
                  "balance":1000,
                  "escrow":50.5
                },
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {
                  "currency_id":"STATS",
                  "name":"HIJ",
                  "balance":130400,
                  "escrow":1250.5
                },
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37}
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
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewGroup\n        design={{\"type\":\"light\"}}\n        group={{\n            \"name\":\"STATS\",\n            \"entries\":[\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"NOP\",\n                  \"balance\":1000,\n                  \"escrow\":50.5\n                },\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"HIJ\",\n                  \"balance\":130400,\n                  \"escrow\":1250.5\n                },\n                {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n                {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37}\n              ]\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        impl={{}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewGroup\n        design={{\"type\":\"dark\"}}\n        group={{\n            \"name\":\"STATS\",\n            \"entries\":[\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"NOP\",\n                  \"balance\":1000,\n                  \"escrow\":50.5\n                },\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"HIJ\",\n                  \"balance\":130400,\n                  \"escrow\":1250.5\n                },\n                {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n                {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37}\n              ]\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        impl={{}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_table_list.TableListViewGroup
            design={{"type":"light"}}
            group={{
                "name":"STATS",
                "entries":[
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
                    },
                    {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                    {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37}
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
                    },
                    {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                    {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37}
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
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListViewPaged\n        design={{\"type\":\"light\"}}\n        control={{}}\n        impl={{\n            \"page\":{\"display\":5},\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              }\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[{\"template\":[\"name\"]},{\"template\":[\"amount\"]}]\n              }\n          }}\n        entries={[\n            {\"id\":\"id-0\",\"name\":\"name-0\",\"amount\":0.5065240835944981},\n            {\"id\":\"id-1\",\"name\":\"name-1\",\"amount\":0.8620366185156054},\n            {\"id\":\"id-2\",\"name\":\"name-2\",\"amount\":0.442488748774174},\n            {\"id\":\"id-3\",\"name\":\"name-3\",\"amount\":0.04943150779083916},\n            {\"id\":\"id-4\",\"name\":\"name-4\",\"amount\":0.6537971390073677},\n            {\"id\":\"id-5\",\"name\":\"name-5\",\"amount\":0.2816994764712938},\n            {\"id\":\"id-6\",\"name\":\"name-6\",\"amount\":0.9430111107189527},\n            {\"id\":\"id-7\",\"name\":\"name-7\",\"amount\":0.03029028250346366},\n            {\"id\":\"id-8\",\"name\":\"name-8\",\"amount\":0.3219423542546457},\n            {\"id\":\"id-9\",\"name\":\"name-9\",\"amount\":0.8895671300865516},\n            {\"id\":\"id-10\",\"name\":\"name-10\",\"amount\":0.3689397487421425},\n            {\"id\":\"id-11\",\"name\":\"name-11\",\"amount\":0.4564747647452533},\n            {\"id\":\"id-12\",\"name\":\"name-12\",\"amount\":0.9879406960559928},\n            {\"id\":\"id-13\",\"name\":\"name-13\",\"amount\":0.7551512731590825},\n            {\"id\":\"id-14\",\"name\":\"name-14\",\"amount\":0.035929141009132026},\n            {\"id\":\"id-15\",\"name\":\"name-15\",\"amount\":0.3090609108954985},\n            {\"id\":\"id-16\",\"name\":\"name-16\",\"amount\":0.6876989324822194},\n            {\"id\":\"id-17\",\"name\":\"name-17\",\"amount\":0.9754971906991432},\n            {\"id\":\"id-18\",\"name\":\"name-18\",\"amount\":0.11138420894157397},\n            {\"id\":\"id-19\",\"name\":\"name-19\",\"amount\":0.3180762406500097},\n            {\"id\":\"id-20\",\"name\":\"name-20\",\"amount\":0.9813779420272695},\n            {\"id\":\"id-21\",\"name\":\"name-21\",\"amount\":0.4624603555656144},\n            {\"id\":\"id-22\",\"name\":\"name-22\",\"amount\":0.3939293890722748},\n            {\"id\":\"id-23\",\"name\":\"name-23\",\"amount\":0.43499949153218864},\n            {\"id\":\"id-24\",\"name\":\"name-24\",\"amount\":0.8524300081091689},\n            {\"id\":\"id-25\",\"name\":\"name-25\",\"amount\":0.06485329524096539},\n            {\"id\":\"id-26\",\"name\":\"name-26\",\"amount\":0.5223295980305178},\n            {\"id\":\"id-27\",\"name\":\"name-27\",\"amount\":0.7946868197462572},\n            {\"id\":\"id-28\",\"name\":\"name-28\",\"amount\":0.928559528649845},\n            {\"id\":\"id-29\",\"name\":\"name-29\",\"amount\":0.6160694524411661},\n            {\"id\":\"id-30\",\"name\":\"name-30\",\"amount\":0.5806905604397669},\n            {\"id\":\"id-31\",\"name\":\"name-31\",\"amount\":0.7617259249404156},\n            {\"id\":\"id-32\",\"name\":\"name-32\",\"amount\":0.7028601130456545},\n            {\"id\":\"id-33\",\"name\":\"name-33\",\"amount\":0.4518924374716562},\n            {\"id\":\"id-34\",\"name\":\"name-34\",\"amount\":0.7474298933153947},\n            {\"id\":\"id-35\",\"name\":\"name-35\",\"amount\":0.6259457439076153},\n            {\"id\":\"id-36\",\"name\":\"name-36\",\"amount\":0.7546702283059213},\n            {\"id\":\"id-37\",\"name\":\"name-37\",\"amount\":0.17855027739726215},\n            {\"id\":\"id-38\",\"name\":\"name-38\",\"amount\":0.847424620586658},\n            {\"id\":\"id-39\",\"name\":\"name-39\",\"amount\":0.26278608997585773},\n            {\"id\":\"id-40\",\"name\":\"name-40\",\"amount\":0.32222900497557827},\n            {\"id\":\"id-41\",\"name\":\"name-41\",\"amount\":0.9876761396807124},\n            {\"id\":\"id-42\",\"name\":\"name-42\",\"amount\":0.4099042951463592},\n            {\"id\":\"id-43\",\"name\":\"name-43\",\"amount\":0.6064582147820065},\n            {\"id\":\"id-44\",\"name\":\"name-44\",\"amount\":0.9630022550714435},\n            {\"id\":\"id-45\",\"name\":\"name-45\",\"amount\":0.6126884581763795},\n            {\"id\":\"id-46\",\"name\":\"name-46\",\"amount\":0.10907403244043323},\n            {\"id\":\"id-47\",\"name\":\"name-47\",\"amount\":0.09730370748071093},\n            {\"id\":\"id-48\",\"name\":\"name-48\",\"amount\":0.4525881854053295},\n            {\"id\":\"id-49\",\"name\":\"name-49\",\"amount\":0.10020514739995745},\n            {\"id\":\"id-50\",\"name\":\"name-50\",\"amount\":0.2701144857345651},\n            {\"id\":\"id-51\",\"name\":\"name-51\",\"amount\":0.35948567653292707},\n            {\"id\":\"id-52\",\"name\":\"name-52\",\"amount\":0.5194015033470288},\n            {\"id\":\"id-53\",\"name\":\"name-53\",\"amount\":0.9304574945404106},\n            {\"id\":\"id-54\",\"name\":\"name-54\",\"amount\":0.46012088720745303},\n            {\"id\":\"id-55\",\"name\":\"name-55\",\"amount\":0.2411230641687373},\n            {\"id\":\"id-56\",\"name\":\"name-56\",\"amount\":0.4898731612614129},\n            {\"id\":\"id-57\",\"name\":\"name-57\",\"amount\":0.6622719009350898},\n            {\"id\":\"id-58\",\"name\":\"name-58\",\"amount\":0.05170706033367467},\n            {\"id\":\"id-59\",\"name\":\"name-59\",\"amount\":0.006204867421066296},\n            {\"id\":\"id-60\",\"name\":\"name-60\",\"amount\":0.42769261397227265},\n            {\"id\":\"id-61\",\"name\":\"name-61\",\"amount\":0.20103826980908546},\n            {\"id\":\"id-62\",\"name\":\"name-62\",\"amount\":0.04641395482502231},\n            {\"id\":\"id-63\",\"name\":\"name-63\",\"amount\":0.9060984856755204},\n            {\"id\":\"id-64\",\"name\":\"name-64\",\"amount\":0.8906580248939125},\n            {\"id\":\"id-65\",\"name\":\"name-65\",\"amount\":0.9921860812643587},\n            {\"id\":\"id-66\",\"name\":\"name-66\",\"amount\":0.3757269875928618},\n            {\"id\":\"id-67\",\"name\":\"name-67\",\"amount\":0.5781919408087316},\n            {\"id\":\"id-68\",\"name\":\"name-68\",\"amount\":0.9999894370924522},\n            {\"id\":\"id-69\",\"name\":\"name-69\",\"amount\":0.9280401232641965},\n            {\"id\":\"id-70\",\"name\":\"name-70\",\"amount\":0.3594201013048506},\n            {\"id\":\"id-71\",\"name\":\"name-71\",\"amount\":0.7201872411986421},\n            {\"id\":\"id-72\",\"name\":\"name-72\",\"amount\":0.11949833502159402},\n            {\"id\":\"id-73\",\"name\":\"name-73\",\"amount\":0.5225302303100748},\n            {\"id\":\"id-74\",\"name\":\"name-74\",\"amount\":0.9941085109568162},\n            {\"id\":\"id-75\",\"name\":\"name-75\",\"amount\":0.27078803440063326},\n            {\"id\":\"id-76\",\"name\":\"name-76\",\"amount\":0.07579692833013474},\n            {\"id\":\"id-77\",\"name\":\"name-77\",\"amount\":0.9560798966921169},\n            {\"id\":\"id-78\",\"name\":\"name-78\",\"amount\":0.26930641965082847},\n            {\"id\":\"id-79\",\"name\":\"name-79\",\"amount\":0.891001716511594},\n            {\"id\":\"id-80\",\"name\":\"name-80\",\"amount\":0.5157685531006294},\n            {\"id\":\"id-81\",\"name\":\"name-81\",\"amount\":0.9221013317268706},\n            {\"id\":\"id-82\",\"name\":\"name-82\",\"amount\":0.7639498471088957},\n            {\"id\":\"id-83\",\"name\":\"name-83\",\"amount\":0.8850023722366489},\n            {\"id\":\"id-84\",\"name\":\"name-84\",\"amount\":0.693810742056906},\n            {\"id\":\"id-85\",\"name\":\"name-85\",\"amount\":0.8168750740391667},\n            {\"id\":\"id-86\",\"name\":\"name-86\",\"amount\":0.36325891811985467},\n            {\"id\":\"id-87\",\"name\":\"name-87\",\"amount\":0.825477589930202},\n            {\"id\":\"id-88\",\"name\":\"name-88\",\"amount\":0.7089004423358425},\n            {\"id\":\"id-89\",\"name\":\"name-89\",\"amount\":0.7061946146049396},\n            {\"id\":\"id-90\",\"name\":\"name-90\",\"amount\":0.053977728254486324},\n            {\"id\":\"id-91\",\"name\":\"name-91\",\"amount\":0.0556092111948957},\n            {\"id\":\"id-92\",\"name\":\"name-92\",\"amount\":0.970320997901982},\n            {\"id\":\"id-93\",\"name\":\"name-93\",\"amount\":0.675007420001735},\n            {\"id\":\"id-94\",\"name\":\"name-94\",\"amount\":0.4054445073894105},\n            {\"id\":\"id-95\",\"name\":\"name-95\",\"amount\":0.92831361704738},\n            {\"id\":\"id-96\",\"name\":\"name-96\",\"amount\":0.4609286465635567},\n            {\"id\":\"id-97\",\"name\":\"name-97\",\"amount\":0.6203859654210687},\n            {\"id\":\"id-98\",\"name\":\"name-98\",\"amount\":0.5246081963947818},\n            {\"id\":\"id-99\",\"name\":\"name-99\",\"amount\":0.11309493258756775}\n          ]}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
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
                {"id":"id-0","name":"name-0","amount":0.5065240835944981},
                {"id":"id-1","name":"name-1","amount":0.8620366185156054},
                {"id":"id-2","name":"name-2","amount":0.442488748774174},
                {"id":"id-3","name":"name-3","amount":0.04943150779083916},
                {"id":"id-4","name":"name-4","amount":0.6537971390073677},
                {"id":"id-5","name":"name-5","amount":0.2816994764712938},
                {"id":"id-6","name":"name-6","amount":0.9430111107189527},
                {"id":"id-7","name":"name-7","amount":0.03029028250346366},
                {"id":"id-8","name":"name-8","amount":0.3219423542546457},
                {"id":"id-9","name":"name-9","amount":0.8895671300865516},
                {"id":"id-10","name":"name-10","amount":0.3689397487421425},
                {"id":"id-11","name":"name-11","amount":0.4564747647452533},
                {"id":"id-12","name":"name-12","amount":0.9879406960559928},
                {"id":"id-13","name":"name-13","amount":0.7551512731590825},
                {"id":"id-14","name":"name-14","amount":0.035929141009132026},
                {"id":"id-15","name":"name-15","amount":0.3090609108954985},
                {"id":"id-16","name":"name-16","amount":0.6876989324822194},
                {"id":"id-17","name":"name-17","amount":0.9754971906991432},
                {"id":"id-18","name":"name-18","amount":0.11138420894157397},
                {"id":"id-19","name":"name-19","amount":0.3180762406500097},
                {"id":"id-20","name":"name-20","amount":0.9813779420272695},
                {"id":"id-21","name":"name-21","amount":0.4624603555656144},
                {"id":"id-22","name":"name-22","amount":0.3939293890722748},
                {"id":"id-23","name":"name-23","amount":0.43499949153218864},
                {"id":"id-24","name":"name-24","amount":0.8524300081091689},
                {"id":"id-25","name":"name-25","amount":0.06485329524096539},
                {"id":"id-26","name":"name-26","amount":0.5223295980305178},
                {"id":"id-27","name":"name-27","amount":0.7946868197462572},
                {"id":"id-28","name":"name-28","amount":0.928559528649845},
                {"id":"id-29","name":"name-29","amount":0.6160694524411661},
                {"id":"id-30","name":"name-30","amount":0.5806905604397669},
                {"id":"id-31","name":"name-31","amount":0.7617259249404156},
                {"id":"id-32","name":"name-32","amount":0.7028601130456545},
                {"id":"id-33","name":"name-33","amount":0.4518924374716562},
                {"id":"id-34","name":"name-34","amount":0.7474298933153947},
                {"id":"id-35","name":"name-35","amount":0.6259457439076153},
                {"id":"id-36","name":"name-36","amount":0.7546702283059213},
                {"id":"id-37","name":"name-37","amount":0.17855027739726215},
                {"id":"id-38","name":"name-38","amount":0.847424620586658},
                {"id":"id-39","name":"name-39","amount":0.26278608997585773},
                {"id":"id-40","name":"name-40","amount":0.32222900497557827},
                {"id":"id-41","name":"name-41","amount":0.9876761396807124},
                {"id":"id-42","name":"name-42","amount":0.4099042951463592},
                {"id":"id-43","name":"name-43","amount":0.6064582147820065},
                {"id":"id-44","name":"name-44","amount":0.9630022550714435},
                {"id":"id-45","name":"name-45","amount":0.6126884581763795},
                {"id":"id-46","name":"name-46","amount":0.10907403244043323},
                {"id":"id-47","name":"name-47","amount":0.09730370748071093},
                {"id":"id-48","name":"name-48","amount":0.4525881854053295},
                {"id":"id-49","name":"name-49","amount":0.10020514739995745},
                {"id":"id-50","name":"name-50","amount":0.2701144857345651},
                {"id":"id-51","name":"name-51","amount":0.35948567653292707},
                {"id":"id-52","name":"name-52","amount":0.5194015033470288},
                {"id":"id-53","name":"name-53","amount":0.9304574945404106},
                {"id":"id-54","name":"name-54","amount":0.46012088720745303},
                {"id":"id-55","name":"name-55","amount":0.2411230641687373},
                {"id":"id-56","name":"name-56","amount":0.4898731612614129},
                {"id":"id-57","name":"name-57","amount":0.6622719009350898},
                {"id":"id-58","name":"name-58","amount":0.05170706033367467},
                {"id":"id-59","name":"name-59","amount":0.006204867421066296},
                {"id":"id-60","name":"name-60","amount":0.42769261397227265},
                {"id":"id-61","name":"name-61","amount":0.20103826980908546},
                {"id":"id-62","name":"name-62","amount":0.04641395482502231},
                {"id":"id-63","name":"name-63","amount":0.9060984856755204},
                {"id":"id-64","name":"name-64","amount":0.8906580248939125},
                {"id":"id-65","name":"name-65","amount":0.9921860812643587},
                {"id":"id-66","name":"name-66","amount":0.3757269875928618},
                {"id":"id-67","name":"name-67","amount":0.5781919408087316},
                {"id":"id-68","name":"name-68","amount":0.9999894370924522},
                {"id":"id-69","name":"name-69","amount":0.9280401232641965},
                {"id":"id-70","name":"name-70","amount":0.3594201013048506},
                {"id":"id-71","name":"name-71","amount":0.7201872411986421},
                {"id":"id-72","name":"name-72","amount":0.11949833502159402},
                {"id":"id-73","name":"name-73","amount":0.5225302303100748},
                {"id":"id-74","name":"name-74","amount":0.9941085109568162},
                {"id":"id-75","name":"name-75","amount":0.27078803440063326},
                {"id":"id-76","name":"name-76","amount":0.07579692833013474},
                {"id":"id-77","name":"name-77","amount":0.9560798966921169},
                {"id":"id-78","name":"name-78","amount":0.26930641965082847},
                {"id":"id-79","name":"name-79","amount":0.891001716511594},
                {"id":"id-80","name":"name-80","amount":0.5157685531006294},
                {"id":"id-81","name":"name-81","amount":0.9221013317268706},
                {"id":"id-82","name":"name-82","amount":0.7639498471088957},
                {"id":"id-83","name":"name-83","amount":0.8850023722366489},
                {"id":"id-84","name":"name-84","amount":0.693810742056906},
                {"id":"id-85","name":"name-85","amount":0.8168750740391667},
                {"id":"id-86","name":"name-86","amount":0.36325891811985467},
                {"id":"id-87","name":"name-87","amount":0.825477589930202},
                {"id":"id-88","name":"name-88","amount":0.7089004423358425},
                {"id":"id-89","name":"name-89","amount":0.7061946146049396},
                {"id":"id-90","name":"name-90","amount":0.053977728254486324},
                {"id":"id-91","name":"name-91","amount":0.0556092111948957},
                {"id":"id-92","name":"name-92","amount":0.970320997901982},
                {"id":"id-93","name":"name-93","amount":0.675007420001735},
                {"id":"id-94","name":"name-94","amount":0.4054445073894105},
                {"id":"id-95","name":"name-95","amount":0.92831361704738},
                {"id":"id-96","name":"name-96","amount":0.4609286465635567},
                {"id":"id-97","name":"name-97","amount":0.6203859654210687},
                {"id":"id-98","name":"name-98","amount":0.5246081963947818},
                {"id":"id-99","name":"name-99","amount":0.11309493258756775}
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
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_table_list.TableListView\n        design={{\"type\":\"light\"}}\n        impl={{\n            \"groups\":{\"split\":[\"currency_id\"]},\n            \"items\":{\n                \"sort\":function (arr){\n                    return sort_by.sort_by(arr,[[\"name\",true],\"balance\"]);\n                  }\n              },\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              }\n          }}\n        display={{\n            \"brief\":{\n                \"type\":\"v\",\n                \"body\":[\n                    {\"template\":[\"name\"]},\n                    {\"template\":[\"balance\"]},\n                    {\"template\":[\"escrow\"],\"style\":{\"textAlign\":\"right\"}}\n                  ]\n              }\n          }}\n        entries={[\n            {\n              \"currency_id\":\"DOGE\",\n              \"name\":\"EFG\",\n              \"balance\":34050,\n              \"escrow\":50.5\n            },\n            {\"currency_id\":\"DOGE\",\"name\":\"WXY\",\"balance\":456,\"escrow\":63},\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"HIJ\",\n              \"balance\":130400,\n              \"escrow\":1250.5\n            },\n            {\"currency_id\":\"DOGE\",\"name\":\"KLM\",\"balance\":100,\"escrow\":0.5},\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\"currency_id\":\"DOGE\",\"name\":\"QRS\",\"balance\":490,\"escrow\":34.0},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"NOP\",\n              \"balance\":1000,\n              \"escrow\":50.5\n            }\n          ]}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
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
                {
                  "currency_id":"DOGE",
                  "name":"EFG",
                  "balance":34050,
                  "escrow":50.5
                },
                {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63},
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {
                  "currency_id":"STATS",
                  "name":"HIJ",
                  "balance":130400,
                  "escrow":1250.5
                },
                {"currency_id":"DOGE","name":"KLM","balance":100,"escrow":0.5},
                {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5},
                {"currency_id":"DOGE","name":"QRS","balance":490,"escrow":34.0},
                {
                  "currency_id":"STATS",
                  "name":"NOP",
                  "balance":1000,
                  "escrow":50.5
                }
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