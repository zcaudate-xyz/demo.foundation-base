import React from 'react'

import * as event_route from '../xt/event/base-route.js'

import * as ui_static from './ui-static.js'

import * as slim from './slim.js'

import * as ext_view from '../js/react/ext-model.js'

import * as ui_text from './ui-text.js'

import * as n from '../js/react-native.js'

// melbourne.slim-test/TableDemo [37] 
export function TableDemo(){
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
  let EntryBrief = React.useRef(function (props){
    return React.createElement(slim.Entry,Object.assign({},props,{
      "impl":{
            "type":"card",
            "body":{"title":{"type":"title","template":["currency_id"]}}
          }
    }));
  }).current;
  let EntryDetail = React.useRef(function (props){
    let nprops = Object.assign({},props,{
      "impl":{
            "type":"card",
            "body":{
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
          }
    });
    return React.createElement(slim.Entry,nprops);
  }).current;
  let components = {
    "entry_brief":EntryBrief,
    "entry_detail":EntryDetail,
    "create":React.useRef(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      }).current
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let [mini,setMini] = React.useState(true);
  let design = {"type":"light"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim/Table"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_text.ToggleMinor\n      text=\"Create\"\n      selected={showCreate}\n      onPress={function (){\n          return setShowCreate(!showCreate);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"List\"\n      selected={showList}\n      onPress={function (){\n          return setShowList(!showList);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"Mini\"\n      selected={mini}\n      onPress={function (){\n          return setMini(!mini);\n        }}\n      design={design}/>\n  </n.Row>);\n(\n  <n.Row>\n    <slim.Table\n      design={{\"type\":\"light\"}}\n      display={{\"type\":\"fold\"}}\n      mini={mini}\n      views={views}\n      components={components}\n      control={control}/>\n    <slim.Table\n      design={{\"type\":\"dark\"}}\n      display={{\"type\":\"fold\"}}\n      mini={mini}\n      views={views}\n      components={components}\n      control={control}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_text.ToggleMinor
          text="Create"
          selected={showCreate}
          onPress={function (){
              return setShowCreate(!showCreate);
            }}
          design={design}/>
        <ui_text.ToggleMinor
          text="List"
          selected={showList}
          onPress={function (){
              return setShowList(!showList);
            }}
          design={design}/>
        <ui_text.ToggleMinor
          text="Mini"
          selected={mini}
          onPress={function (){
              return setMini(!mini);
            }}
          design={design}/>
      </n.Row>
      <n.Row>
        <slim.Table
          design={{"type":"light"}}
          display={{"type":"fold"}}
          mini={mini}
          views={views}
          components={components}
          control={control}/>
        <slim.Table
          design={{"type":"dark"}}
          display={{"type":"fold"}}
          mini={mini}
          views={views}
          components={components}
          control={control}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-test/CreateEntryDemo [140] 
export function CreateEntryDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim/createEntry"
      code={(function (){
          return "(\n  <n.Row>\n    {slim.createEntry({\n      \"design\":{\"type\":\"light\"},\n      \"impl\":{\"type\":\"raw\"},\n      \"entry\":{\"a\":1,\"b\":2}\n    })}\n  </n.Row>);";
        })()}>
      <n.Row>
        {slim.createEntry({
          "design":{"type":"light"},
          "impl":{"type":"raw"},
          "entry":{"a":1,"b":2}
        })}
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-test/EntryDemo [155] 
export function EntryDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim/entry"
      code={(function (){
          return "(\n  <n.Row>\n    {slim.entry(\n      {\"design\":{\"type\":\"light\"},\"entry\":{\"a\":1,\"b\":2}},\n      {\"type\":\"raw\"}\n    )}\n  </n.Row>);";
        })()}>
      <n.Row>
        {slim.entry(
          {"design":{"type":"light"},"entry":{"a":1,"b":2}},
          {"type":"raw"}
        )}
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-test/UseRouteControlDemo [179] 
export function UseRouteControlDemo(){
  let controls = slim.useRouteControl(React.useRef(event_route.make_route("hello")).current);
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = controls;
  let design = {"type":"light"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim/UseRouteControl"
      code={(function (){
          return "(\n  <ui_static.Div style={{\"flexDirection\":\"row\"}} design={design}>\n    <ui_text.ToggleMinor\n      text=\"OrderBy\"\n      selected={orderBy}\n      onPress={function (){\n          return setOrderBy((orderBy == \"name\") ? \"time\" : \"name\");\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"Header\"\n      selected={showHeader}\n      onPress={function (){\n          return setShowHeader(!showHeader);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"Detail\"\n      selected={showDetail}\n      onPress={function (){\n          return setShowDetail(!showDetail);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"Modify\"\n      selected={showModify}\n      onPress={function (){\n          return setShowModify(!showModify);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"Create\"\n      selected={showCreate}\n      onPress={function (){\n          return setShowCreate(!showCreate);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"List\"\n      selected={showList}\n      onPress={function (){\n          return setShowList(!showList);\n        }}\n      design={design}/>\n  </ui_static.Div>);";
        })()}>
      <ui_static.Div style={{"flexDirection":"row"}} design={design}>
        <ui_text.ToggleMinor
          text="OrderBy"
          selected={orderBy}
          onPress={function (){
              return setOrderBy((orderBy == "name") ? "time" : "name");
            }}
          design={design}/>
        <ui_text.ToggleMinor
          text="Header"
          selected={showHeader}
          onPress={function (){
              return setShowHeader(!showHeader);
            }}
          design={design}/>
        <ui_text.ToggleMinor
          text="Detail"
          selected={showDetail}
          onPress={function (){
              return setShowDetail(!showDetail);
            }}
          design={design}/>
        <ui_text.ToggleMinor
          text="Modify"
          selected={showModify}
          onPress={function (){
              return setShowModify(!showModify);
            }}
          design={design}/>
        <ui_text.ToggleMinor
          text="Create"
          selected={showCreate}
          onPress={function (){
              return setShowCreate(!showCreate);
            }}
          design={design}/>
        <ui_text.ToggleMinor
          text="List"
          selected={showList}
          onPress={function (){
              return setShowList(!showList);
            }}
          design={design}/>
      </ui_static.Div>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-test/MODULE [247] 
export var MODULE = {
  "TableDemo":TableDemo,
  "CreateEntryDemo":CreateEntryDemo,
  "EntryDemo":EntryDemo,
  "UseRouteControlDemo":UseRouteControlDemo,
  "MODULE":MODULE
};