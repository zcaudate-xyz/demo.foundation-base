import React from 'react'

import * as ReactNative from 'react-native'

import * as ui_static from './ui-static.js'

import * as sort_by from '../xt/lang/common-sort-by.js'

import * as n from '../js/react-native.js'

import * as slim_sheet from './slim-sheet.js'

// melbourne.slim-sheet-test/SheetPaginationDemo [33] 
export function SheetPaginationDemo(){
  let [showPage,setShowPage] = React.useState(3);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetPagination"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetPagination\n        design={{\"type\":\"light\"}}\n        control={{setShowPage,showPage}}\n        impl={{\"page\":{\"total\":200}}}/>\n      <slim_sheet.SheetPagination\n        design={{\"type\":\"light\"}}\n        control={{setShowPage,showPage}}\n        impl={{\"page\":{\"total\":70}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetPagination\n        design={{\"type\":\"dark\"}}\n        control={{setShowPage,showPage}}\n        impl={{\"page\":{\"total\":200}}}/>\n      <slim_sheet.SheetPagination\n        design={{\"type\":\"dark\"}}\n        control={{setShowPage,showPage}}\n        impl={{\"page\":{\"total\":70}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetPagination
            design={{"type":"light"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":200}}}/>
          <slim_sheet.SheetPagination
            design={{"type":"light"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":70}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetPagination
            design={{"type":"dark"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":200}}}/>
          <slim_sheet.SheetPagination
            design={{"type":"dark"}}
            control={{setShowPage,showPage}}
            impl={{"page":{"total":70}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetGroupHeaderDemo [67] 
export function SheetGroupHeaderDemo(){
  let [showPage,setShowPage] = React.useState(3);
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetGroupHeader"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetGroupHeader design={{\"type\":\"light\"}} group={{\"name\":\"WORLD\"}} impl={{}}/>\n      <slim_sheet.SheetGroupHeader design={{\"type\":\"light\"}} group={{\"name\":\"HELLO\"}} impl={{}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetGroupHeader design={{\"type\":\"dark\"}} group={{\"name\":\"WORLD\"}} impl={{}}/>\n      <slim_sheet.SheetGroupHeader design={{\"type\":\"dark\"}} group={{\"name\":\"HELLO\"}} impl={{}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetGroupHeader design={{"type":"light"}} group={{"name":"WORLD"}} impl={{}}/>
          <slim_sheet.SheetGroupHeader design={{"type":"light"}} group={{"name":"HELLO"}} impl={{}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetGroupHeader design={{"type":"dark"}} group={{"name":"WORLD"}} impl={{}}/>
          <slim_sheet.SheetGroupHeader design={{"type":"dark"}} group={{"name":"HELLO"}} impl={{}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetHeaderDemo [101] 
export function SheetHeaderDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetHeader"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetHeader\n        design={{\"type\":\"light\"}}\n        style={{\"padding\":10}}\n        entry={entry}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"currency_id\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetHeader\n        design={{\"type\":\"dark\"}}\n        style={{\"padding\":10}}\n        entry={entry}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"currency_id\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetHeader
            design={{"type":"light"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["currency_id"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetHeader
            design={{"type":"dark"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["currency_id"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetRowDemo [145] 
export function SheetRowDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetRow"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetRow\n        design={{\"type\":\"light\"}}\n        style={{\"padding\":10}}\n        entry={entry}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"currency_id\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_sheet.SheetRow\n        design={{\"type\":\"dark\"}}\n        style={{\"padding\":10}}\n        entry={entry}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"currency_id\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_sheet.SheetRow
            design={{"type":"light"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["currency_id"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_sheet.SheetRow
            design={{"type":"dark"}}
            style={{"padding":10}}
            entry={entry}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["currency_id"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetBasicRowsDemo [189] 
export function SheetBasicRowsDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetBasicRows"
      code={(function (){
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetBasicRows\n        design={{\"type\":\"light\"}}\n        entries={[\n            {\"currency_id\":\"STATS\",\"balance\":1000,\"escrow\":50.5},\n            {\"currency_id\":\"DOGE\",\"balance\":1000,\"escrow\":50.5}\n          ]}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"currency_id\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetBasicRows\n        design={{\"type\":\"dark\"}}\n        entries={[\n            {\"currency_id\":\"STATS\",\"balance\":1000,\"escrow\":50.5},\n            {\"currency_id\":\"DOGE\",\"balance\":1000,\"escrow\":50.5}\n          ]}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"currency_id\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasicRows
            design={{"type":"light"}}
            entries={[
                {"currency_id":"STATS","balance":1000,"escrow":50.5},
                {"currency_id":"DOGE","balance":1000,"escrow":50.5}
              ]}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["currency_id"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasicRows
            design={{"type":"dark"}}
            entries={[
                {"currency_id":"STATS","balance":1000,"escrow":50.5},
                {"currency_id":"DOGE","balance":1000,"escrow":50.5}
              ]}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["currency_id"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetBasicDemo [243] 
export function SheetBasicDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetBasic"
      code={(function (){
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetBasic\n        design={{\"type\":\"light\"}}\n        entries={[\n            {\"currency_id\":\"STATS\",\"balance\":1000,\"escrow\":50.5},\n            {\"currency_id\":\"DOGE\",\"balance\":1000,\"escrow\":50.5}\n          ]}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"currency_id\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetBasic\n        design={{\"type\":\"dark\"}}\n        entries={[\n            {\"currency_id\":\"STATS\",\"balance\":1000,\"escrow\":50.5},\n            {\"currency_id\":\"DOGE\",\"balance\":1000,\"escrow\":50.5}\n          ]}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"currency_id\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasic
            design={{"type":"light"}}
            entries={[
                {"currency_id":"STATS","balance":1000,"escrow":50.5},
                {"currency_id":"DOGE","balance":1000,"escrow":50.5}
              ]}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["currency_id"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetBasic
            design={{"type":"dark"}}
            entries={[
                {"currency_id":"STATS","balance":1000,"escrow":50.5},
                {"currency_id":"DOGE","balance":1000,"escrow":50.5}
              ]}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["currency_id"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetGroupRowsDemo [316] 
export function SheetGroupRowsDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/SheetGroupRows"
      code={(function (){
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetGroupRows\n        design={{\"type\":\"light\"}}\n        group={{\n            \"name\":\"STATS\",\n            \"entries\":[\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"HIJ\",\n                  \"balance\":130400,\n                  \"escrow\":1250.5\n                },\n                {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"NOP\",\n                  \"balance\":1000,\n                  \"escrow\":50.5\n                },\n                {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5}\n              ]\n          }}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"name\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.SheetGroupRows\n        design={{\"type\":\"dark\"}}\n        group={{\n            \"name\":\"STATS\",\n            \"entries\":[\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"HIJ\",\n                  \"balance\":130400,\n                  \"escrow\":1250.5\n                },\n                {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n                {\n                  \"currency_id\":\"STATS\",\n                  \"name\":\"NOP\",\n                  \"balance\":1000,\n                  \"escrow\":50.5\n                },\n                {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5}\n              ]\n          }}\n        impl={{\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"title\",\"template\":[\"name\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetGroupRows
            design={{"type":"light"}}
            group={{
                "name":"STATS",
                "entries":[
                    {
                      "currency_id":"STATS",
                      "name":"HIJ",
                      "balance":130400,
                      "escrow":1250.5
                    },
                    {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                    {
                      "currency_id":"STATS",
                      "name":"NOP",
                      "balance":1000,
                      "escrow":50.5
                    },
                    {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
                  ]
              }}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["name"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.SheetGroupRows
            design={{"type":"dark"}}
            group={{
                "name":"STATS",
                "entries":[
                    {
                      "currency_id":"STATS",
                      "name":"HIJ",
                      "balance":130400,
                      "escrow":1250.5
                    },
                    {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                    {
                      "currency_id":"STATS",
                      "name":"NOP",
                      "balance":1000,
                      "escrow":50.5
                    },
                    {"currency_id":"STATS","name":"ABC","balance":506,"escrow":50.5}
                  ]
              }}
            impl={{
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"title","template":["name"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}/>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/SheetDemo [401] 
export function SheetDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-sheet/Sheet"
      code={(function (){
          return "(\n  <ReactNative.View>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":5}}>\n      <slim_sheet.Sheet\n        design={{\"type\":\"light\"}}\n        impl={{\n            \"groups\":{\"split\":[\"currency_id\"]},\n            \"items\":{\n                \"sort\":function (arr){\n                    return sort_by.sort_by(arr,[\"balance\",\"name\"]);\n                  }\n              },\n            \"header\":{\n                \"format\":function (s){\n                    return s.toUpperCase();\n                  }\n              },\n            \"columns\":[\n                {\"name\":\"name\",\"template\":[\"name\"]},\n                {\"name\":\"balance\",\"template\":[\"balance\"]},\n                {\n                  \"name\":\"escrow\",\n                  \"template\":[\"escrow\"],\n                  \"style\":{\"textAlign\":\"right\"}\n                }\n              ]\n          }}\n        entries={[\n            {\"currency_id\":\"STATS\",\"name\":\"TUV\",\"balance\":79,\"escrow\":37},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"HIJ\",\n              \"balance\":130400,\n              \"escrow\":1250.5\n            },\n            {\"currency_id\":\"DOGE\",\"name\":\"QRS\",\"balance\":490,\"escrow\":34.0},\n            {\n              \"currency_id\":\"STATS\",\n              \"name\":\"NOP\",\n              \"balance\":1000,\n              \"escrow\":50.5\n            },\n            {\n              \"currency_id\":\"DOGE\",\n              \"name\":\"EFG\",\n              \"balance\":34050,\n              \"escrow\":50.5\n            },\n            {\"currency_id\":\"STATS\",\"name\":\"ABC\",\"balance\":506,\"escrow\":50.5},\n            {\"currency_id\":\"DOGE\",\"name\":\"KLM\",\"balance\":100,\"escrow\":0.5},\n            {\"currency_id\":\"DOGE\",\"name\":\"WXY\",\"balance\":456,\"escrow\":63}\n          ]}/>\n    </ui_static.Div>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":5}}>
          <slim_sheet.Sheet
            design={{"type":"light"}}
            impl={{
                "groups":{"split":["currency_id"]},
                "items":{
                    "sort":function (arr){
                        return sort_by.sort_by(arr,["balance","name"]);
                      }
                  },
                "header":{
                    "format":function (s){
                        return s.toUpperCase();
                      }
                  },
                "columns":[
                    {"name":"name","template":["name"]},
                    {"name":"balance","template":["balance"]},
                    {
                      "name":"escrow",
                      "template":["escrow"],
                      "style":{"textAlign":"right"}
                    }
                  ]
              }}
            entries={[
                {"currency_id":"STATS","name":"TUV","balance":79,"escrow":37},
                {
                  "currency_id":"STATS",
                  "name":"HIJ",
                  "balance":130400,
                  "escrow":1250.5
                },
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
                {"currency_id":"DOGE","name":"KLM","balance":100,"escrow":0.5},
                {"currency_id":"DOGE","name":"WXY","balance":456,"escrow":63}
              ]}/>
        </ui_static.Div>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-sheet-test/MODULE [427] 
export var MODULE = {
  "SheetPaginationDemo":SheetPaginationDemo,
  "SheetGroupHeaderDemo":SheetGroupHeaderDemo,
  "SheetHeaderDemo":SheetHeaderDemo,
  "SheetRowDemo":SheetRowDemo,
  "SheetBasicRowsDemo":SheetBasicRowsDemo,
  "SheetBasicDemo":SheetBasicDemo,
  "SheetGroupRowsDemo":SheetGroupRowsDemo,
  "SheetDemo":SheetDemo,
  "MODULE":MODULE
};