import React from 'react'

import * as ui_static from './ui-static.js'

import * as slim from './slim.js'

import * as slim_table from './slim-table.js'

import * as ext_form from '../js/react/ext-form.js'

import * as ext_view from '../js/react/ext-model.js'

import * as ui_text from './ui-text.js'

import * as slim_entry from './slim-entry.js'

import * as n from '../js/react-native.js'

// melbourne.slim-table-test/TableModifyViewDemo [41] 
export function TableModifyViewDemo(){
  let control = slim.useLocalControl();
  let actions = {
    "modify":function (e){
        setTimeout(function (){
          new Promise(function (){
            alert(JSON.stringify(e));
          });
        },100);
        return null;;
      }
  };
  let entry = {"id":"id-0"};
  let form = ext_form.makeForm(function (){
    return {"currency":"STATS","name":"","title":""};
  },{"name":[],"title":[],"currency":[]});
  let design = {"type":"light"};
  let impl = {
    "type":"form",
    "header":{"main":{"type":"title","template":"EDIT CURRENCY"}},
    "submit":"modify",
    "body":[
        {
          "type":"pair",
          "title":{"template":"ID: "},
          "text":{"template":["id"]}
        },
        {
          "type":"field",
          "label":"Currency",
          "field":"currency",
          "options":["STATS","XLM","USD"],
          "component":"enum_single"
        },
        {"type":"field","label":"Title","field":"title"}
      ]
  };
  let components = {};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table/TableModifyView"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_table.TableModifyView\n        design={{\"type\":\"light\"}}\n        mini={true}\n        display={{\"modify\":impl}}\n        form={form}\n        actions={actions}\n        components={components}\n        control={control}\n        entry={entry}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_table.TableModifyView\n        design={{\"type\":\"dark\"}}\n        mini={true}\n        display={{\"modify\":impl}}\n        form={form}\n        actions={actions}\n        components={components}\n        control={control}\n        entry={entry}/>\n    </ui_static.Div>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
            <slim_table.TableModifyView
              design={{"type":"light"}}
              mini={true}
              display={{"modify":impl}}
              form={form}
              actions={actions}
              components={components}
              control={control}
              entry={entry}/>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
            <slim_table.TableModifyView
              design={{"type":"dark"}}
              mini={true}
              display={{"modify":impl}}
              form={form}
              actions={actions}
              components={components}
              control={control}
              entry={entry}/>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-test/TableDetailViewDemo [97] 
export function TableDetailViewDemo(){
  let entry = {"id":"id-0","currency_id":"STATS","balance":1000,"escrow":50.5};
  let control = slim.useLocalControl();
  let design = {"type":"light"};
  let impl = {
    "type":"card",
    "header":{"main":{"type":"title","template":["currency_id"]}},
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
  let components = {};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table/TableDetailView"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}}>\n      <slim_table.TableDetailView\n        design={{\"type\":\"light\"}}\n        style={{\"width\":200}}\n        display={{\"detail\":impl}}\n        components={components}\n        control={control}\n        entry={entry}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}}>\n      <slim_table.TableDetailView\n        design={{\"type\":\"dark\"}}\n        style={{\"width\":200}}\n        display={{\"detail\":impl}}\n        components={components}\n        control={control}\n        entry={entry}/>\n    </ui_static.Div>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}}>
            <slim_table.TableDetailView
              design={{"type":"light"}}
              style={{"width":200}}
              display={{"detail":impl}}
              components={components}
              control={control}
              entry={entry}/>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}}>
            <slim_table.TableDetailView
              design={{"type":"dark"}}
              style={{"width":200}}
              display={{"detail":impl}}
              components={components}
              control={control}
              entry={entry}/>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-test/TableCreateViewDemo [145] 
export function TableCreateViewDemo(){
  let control = slim.useLocalControl();
  let actions = {
    "create":function (e){
        setTimeout(function (){
          new Promise(function (){
            alert(JSON.stringify(e));
          });
        },100);
        return null;;
      }
  };
  let form = ext_form.makeForm(function (){
    return {"currency":"STATS","name":"","title":""};
  },{"name":[],"title":[],"currency":[]});
  let design = {"type":"light"};
  let impl = {
    "type":"form",
    "header":{"main":{"type":"title","template":"NEW CURRENCY"}},
    "submit":"create",
    "body":[
        {"type":"field","label":"Name","field":"name"},
        {
          "type":"field",
          "label":"Currency",
          "field":"currency",
          "options":["STATS","XLM","USD"],
          "component":"enum_single"
        },
        {"type":"field","label":"Title","field":"title"}
      ]
  };
  let components = {};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table/TableCreateView"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_table.TableCreateView\n        design={{\"type\":\"light\"}}\n        mini={true}\n        display={{\"create\":impl}}\n        form={form}\n        actions={actions}\n        components={components}\n        control={control}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_table.TableCreateView\n        design={{\"type\":\"dark\"}}\n        mini={true}\n        display={{\"create\":impl}}\n        form={form}\n        actions={actions}\n        components={components}\n        control={control}/>\n    </ui_static.Div>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
            <slim_table.TableCreateView
              design={{"type":"light"}}
              mini={true}
              display={{"create":impl}}
              form={form}
              actions={actions}
              components={components}
              control={control}/>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
            <slim_table.TableCreateView
              design={{"type":"dark"}}
              mini={true}
              display={{"create":impl}}
              form={form}
              actions={actions}
              components={components}
              control={control}/>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-test/TableRouterViewDemo [200] 
export function TableRouterViewDemo(){
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
  let display = {
    "brief":{"type":"card","body":{"title":{"template":["currency_id"]}}},
    "detail":{
        "type":"card",
        "header":{
            "main":{
                "type":"h",
                "style":{"alignItems":"center"},
                "body":[
                    {"type":"title_h5","template":["currency_id"]},
                    {"type":"fill"},
                    {"type":"control","text":"EDIT","submit":"modify"}
                  ]
              }
          },
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
      },
    "modify":{
        "type":"form",
        "header":{"main":{"type":"title_h5","template":"EDIT"}},
        "form":[
            function (){
              return {
                "id":"HELLO",
                "currency":"STATS",
                "title":"National Basketball Association"
              };
            },
            function (){
              return {"id":[],"currency":[],"title":[]};
            }
          ],
        "submit":"modify",
        "control":{"success":"back"},
        "body":[
            {
              "type":"pair",
              "title":{"template":"ID: "},
              "text":{"template":["id"]}
            },
            {
              "type":"field",
              "label":"Currency",
              "field":"currency",
              "options":["STATS","XLM","USD"],
              "component":"enum_single"
            },
            {"type":"field","label":"Title","field":"title"}
          ]
      }
  };
  let actions = {
    "modify":function (id,e){
        return new Promise(function (resolve,reject){
          try{
            resolve(        (function (){
                      return "hello";
                    })());
          }
          catch(e){
            reject(e);
          }
        });
      }
  };
  let components = {};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-table/TableRouterView"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_table.TableRouterView\n        design={{\"type\":\"light\"}}\n        mini={true}\n        routeKey={control.routeKey}\n        views={views}\n        actions={actions}\n        components={components}\n        control={control}\n        display={display}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_table.TableRouterView\n        design={{\"type\":\"dark\"}}\n        mini={true}\n        routeKey={control.routeKey}\n        views={views}\n        actions={actions}\n        components={components}\n        control={control}\n        display={display}/>\n    </ui_static.Div>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
            <slim_table.TableRouterView
              design={{"type":"light"}}
              mini={true}
              routeKey={control.routeKey}
              views={views}
              actions={actions}
              components={components}
              control={control}
              display={display}/>
          </ui_static.Div>
          <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
            <slim_table.TableRouterView
              design={{"type":"dark"}}
              mini={true}
              routeKey={control.routeKey}
              views={views}
              actions={actions}
              components={components}
              control={control}
              display={display}/>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-table-test/TableRouterDemo [297] 
export function TableRouterDemo(){
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
  let components = {
    "entry_brief":EntryBrief,
    "entry_detail":EntryDetail,
    "create":React.useRef(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      }).current
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let design = {"type":"light"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table/TableRouter"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_text.ToggleMinor\n      text=\"Header\"\n      selected={showHeader}\n      onPress={function (){\n          return setShowHeader(!showHeader);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"Detail\"\n      selected={showDetail}\n      onPress={function (){\n          return setShowDetail(!showDetail);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"Modify\"\n      selected={showModify}\n      onPress={function (){\n          return setShowModify(!showModify);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"Create\"\n      selected={showCreate}\n      onPress={function (){\n          return setShowCreate(!showCreate);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"List\"\n      selected={showList}\n      onPress={function (){\n          return setShowList(!showList);\n        }}\n      design={design}/>\n  </n.Row>);\n(\n  <n.Row>\n    <slim_table.TableRouter\n      design={{\"type\":\"light\"}}\n      mini={true}\n      display={{\n          \"detail\":{\n              \"type\":\"card\",\n              \"header\":{\"main\":{\"type\":\"title\",\"template\":[\"currency_id\"]}},\n              \"body\":{\n                  \"title\":{\"type\":\"title\",\"template\":[\"currency_id\"]},\n                  \"main\":{\n                      \"type\":\"v\",\n                      \"body\":[\n                          {\n                            \"type\":\"pair\",\n                            \"title\":{\"template\":\"B\"},\n                            \"text\":{\"template\":[\"balance\"]}\n                          },\n                          {\n                            \"type\":\"pair\",\n                            \"title\":{\"template\":\"E\"},\n                            \"text\":{\"template\":[\"escrow\"]}\n                          }\n                        ]\n                    },\n                  \"avatar\":{\n                      \"type\":\"image\",\n                      \"text\":{\"template\":[\"currency_id\"]},\n                      \"image\":{\"template\":[\"picture\"]}\n                    }\n                }\n            }\n        }}\n      views={views}\n      components={components}\n      control={control}/>\n  </n.Row>);";
        })()}>
      <n.Row>
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
      </n.Row>
      <n.Row>
        <slim_table.TableRouter
          design={{"type":"light"}}
          mini={true}
          display={{
              "detail":{
                  "type":"card",
                  "header":{"main":{"type":"title","template":["currency_id"]}},
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
                }
            }}
          views={views}
          components={components}
          control={control}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-test/TableDemo [416] 
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
  let impl = {
    "type":"card",
    "sections":{
        "body":[
            {
              "columns":[
                  {"name":"B","template":["balance"]},
                  {"name":"E","template":["escrow"]}
                ]
            }
          ],
        "avatar":{"template":["currency_id"],"image":["picture"]}
      }
  };
  let EntryBrief = React.useRef(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  }).current;
  let components = {
    "entry_brief":EntryBrief,
    "create":React.useRef(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      }).current
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let design = {"type":"light"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table/Table"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_text.ToggleMinor\n      text=\"Create\"\n      selected={showCreate}\n      onPress={function (){\n          return setShowCreate(!showCreate);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"List\"\n      selected={showList}\n      onPress={function (){\n          return setShowList(!showList);\n        }}\n      design={design}/>\n  </n.Row>);\n(\n  <n.Row>\n    <slim_table.Table\n      design={{\"type\":\"light\"}}\n      display={{\"create\":{\"type\":\"fold\"}}}\n      views={views}\n      components={components}\n      control={control}/>\n  </n.Row>);";
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
      </n.Row>
      <n.Row>
        <slim_table.Table
          design={{"type":"light"}}
          display={{"create":{"type":"fold"}}}
          views={views}
          components={components}
          control={control}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-test/TableStandardDemo [491] 
export function TableStandardDemo(){
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
    "sections":{
        "body":[
            {
              "columns":[
                  {"name":"B","template":["balance"]},
                  {"name":"E","template":["escrow"]}
                ]
            }
          ],
        "avatar":{"template":["currency_id"],"image":["picture"]}
      }
  };
  let EntryBrief = React.useRef(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  }).current;
  let components = {
    "entry_brief":EntryBrief,
    "create":React.useRef(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      }).current
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let design = {"type":"light"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table/TableStandard"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_text.ToggleMinor\n      text=\"Create\"\n      selected={showCreate}\n      onPress={function (){\n          return setShowCreate(!showCreate);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"List\"\n      selected={showList}\n      onPress={function (){\n          return setShowList(!showList);\n        }}\n      design={design}/>\n  </n.Row>);\n(\n  <n.Row>\n    <slim_table.TableStandard\n      design={{\"type\":\"light\"}}\n      display={{\"create\":{\"type\":\"fold\"}}}\n      views={views}\n      components={components}\n      control={control}/>\n  </n.Row>);";
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
      </n.Row>
      <n.Row>
        <slim_table.TableStandard
          design={{"type":"light"}}
          display={{"create":{"type":"fold"}}}
          views={views}
          components={components}
          control={control}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-test/TableEmbeddedDemo [566] 
export function TableEmbeddedDemo(){
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
    "sections":{
        "body":[
            {
              "columns":[
                  {"name":"B","template":["balance"]},
                  {"name":"E","template":["escrow"]}
                ]
            }
          ],
        "avatar":{"template":["currency_id"],"image":["picture"]}
      }
  };
  let EntryBrief = React.useRef(function (props){
    return React.createElement(slim_entry.Entry,Object.assign({},props,{
      "impl":{"type":"card","body":{"title":{"template":["currency_id"]}}}
    }));
  }).current;
  let components = {
    "entry_brief":EntryBrief,
    "create":React.useRef(function (props){
        return React.createElement(ui_static.Text,props,"CREATE");
      }).current
  };
  let {orderBy,routeKey,setOrderBy,setShowCreate,setShowDetail,setShowHeader,setShowList,setShowModify,showCreate,showDetail,showHeader,showList,showModify} = control;
  let design = {"type":"light"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table/TableEmbedded"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_text.ToggleMinor\n      text=\"Create\"\n      selected={showCreate}\n      onPress={function (){\n          return setShowCreate(!showCreate);\n        }}\n      design={design}/>\n    <ui_text.ToggleMinor\n      text=\"List\"\n      selected={showList}\n      onPress={function (){\n          return setShowList(!showList);\n        }}\n      design={design}/>\n  </n.Row>);\n(\n  <n.Row>\n    <slim_table.TableEmbedded\n      design={{\"type\":\"light\"}}\n      display={{\"create\":{\"type\":\"fold\"}}}\n      views={views}\n      components={components}\n      control={control}/>\n  </n.Row>);";
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
      </n.Row>
      <n.Row>
        <slim_table.TableEmbedded
          design={{"type":"light"}}
          display={{"create":{"type":"fold"}}}
          views={views}
          components={components}
          control={control}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-test/MODULE [639] 
export var MODULE = {
  "TableModifyViewDemo":TableModifyViewDemo,
  "TableDetailViewDemo":TableDetailViewDemo,
  "TableCreateViewDemo":TableCreateViewDemo,
  "TableRouterViewDemo":TableRouterViewDemo,
  "TableRouterDemo":TableRouterDemo,
  "TableDemo":TableDemo,
  "TableStandardDemo":TableStandardDemo,
  "TableEmbeddedDemo":TableEmbeddedDemo,
  "MODULE":MODULE
};