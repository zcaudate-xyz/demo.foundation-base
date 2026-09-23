import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as event_form from '../xt/event/base-form.js'

import * as ext_route from '../js/react/ext-route.js'

import * as ui_static from './ui-static.js'

import * as ext_form from '../js/react/ext-form.js'

import * as validators from './base-validators.js'

import * as slim_entry from './slim-entry.js'

import * as n from '../js/react-native.js'

// melbourne.slim-entry-test/EntryFreeDemo [36] 
export function EntryFreeDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryFree"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryFree\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\n            \"key\":\"title\",\n            \"component\":slim_entry.EntryContentTitle,\n            \"template\":[\"currency_id\"]\n          }}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\n            \"type\":\"free\",\n            \"key\":\"title\",\n            \"component\":slim_entry.EntryContentParagraph,\n            \"template\":[\"currency_id\"]\n          }}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryFree
            design={{"type":"light"}}
            entry={entry}
            impl={{
                "key":"title",
                "component":slim_entry.EntryContentTitle,
                "template":["currency_id"]
              }}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{
                "type":"free",
                "key":"title",
                "component":slim_entry.EntryContentParagraph,
                "template":["currency_id"]
              }}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentRawDemo [71] 
export function EntryContentRawDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentRaw"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentRaw design={{\"type\":\"light\"}} entry={entry}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry design={{\"type\":\"dark\"}} impl={{\"type\":\"raw\"}} entry={entry}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentRaw design={{"type":"light"}} entry={entry}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry design={{"type":"dark"}} impl={{"type":"raw"}} entry={entry}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentRawFormDemo [98] 
export function EntryContentRawFormDemo(){
  let form = ext_form.makeForm(function (){
    return {"currency_id":"STATS","balance":1000,"escrow":50.5};
  },{});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentRawForm"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentRawForm design={{\"type\":\"light\"}} form={form}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        impl={{\"type\":\"raw_form\"}}\n        form={form}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentRawForm design={{"type":"light"}} form={form}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            impl={{"type":"raw_form"}}
            form={form}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentFillDemo [127] 
export function EntryContentFillDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentFill"
      code={(function (){
          return "(\n  <n.Row style={{\"height\":30}}>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentFill design={{\"type\":\"light\"}} entry={entry}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry design={{\"type\":\"dark\"}} impl={{\"type\":\"fill\"}} entry={entry}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row style={{"height":30}}>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentFill design={{"type":"light"}} entry={entry}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry design={{"type":"dark"}} impl={{"type":"fill"}} entry={entry}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutHorizontalDemo [158] 
export function EntryLayoutHorizontalDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutHorizontal"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryLayoutHorizontal\n        design={{\"type\":\"light\"}}\n        impl={{\n            \"body\":[\n                (\n                  <slim_entry.EntryContentTitle\n                    key=\"title\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"title\",\"template\":[\"currency_id\"]}}\n                    custom={{\"title\":{\"style\":{\"padding\":10}}}}/>),\n                (\n                  <slim_entry.EntryContentParagraph\n                    key=\"body\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"body\",\"template\":[\"balance\"]}}\n                    custom={{\"body\":{\"style\":{\"padding\":10}}}}/>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        custom={{\n            \"title\":{\"style\":{\"padding\":10}},\n            \"body\":{\"style\":{\"padding\":10}}\n          }}\n        entry={entry}\n        impl={{\n            \"type\":\"h\",\n            \"body\":[\n                {\"type\":\"title\",\"key\":\"title\",\"template\":[\"currency_id\"]},\n                {\"type\":\"p\",\"key\":\"body\",\"template\":[\"balance\"]}\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutHorizontal
            design={{"type":"light"}}
            impl={{
                "body":[
                    (
                      <slim_entry.EntryContentTitle
                        key="title"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"title","template":["currency_id"]}}
                        custom={{"title":{"style":{"padding":10}}}}/>),
                    (
                      <slim_entry.EntryContentParagraph
                        key="body"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"body","template":["balance"]}}
                        custom={{"body":{"style":{"padding":10}}}}/>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
                "title":{"style":{"padding":10}},
                "body":{"style":{"padding":10}}
              }}
            entry={entry}
            impl={{
                "type":"h",
                "body":[
                    {"type":"title","key":"title","template":["currency_id"]},
                    {"type":"p","key":"body","template":["balance"]}
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutVerticalDemo [206] 
export function EntryLayoutVerticalDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutVertical"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryLayoutVertical\n        design={{\"type\":\"light\"}}\n        impl={{\n            \"body\":[\n                (\n                  <slim_entry.EntryContentTitle\n                    key=\"title\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"title\",\"template\":[\"currency_id\"]}}\n                    custom={{\"title\":{\"style\":{\"padding\":10}}}}/>),\n                (\n                  <slim_entry.EntryContentParagraph\n                    key=\"body\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"body\",\"template\":[\"balance\"]}}\n                    custom={{\"body\":{\"style\":{\"padding\":10}}}}/>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        custom={{\n            \"title\":{\"style\":{\"padding\":10}},\n            \"body\":{\"style\":{\"padding\":10}}\n          }}\n        entry={entry}\n        impl={{\n            \"type\":\"v\",\n            \"body\":[\n                {\"type\":\"title\",\"key\":\"title\",\"template\":[\"currency_id\"]},\n                {\"type\":\"p\",\"key\":\"body\",\"template\":[\"balance\"]}\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutVertical
            design={{"type":"light"}}
            impl={{
                "body":[
                    (
                      <slim_entry.EntryContentTitle
                        key="title"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"title","template":["currency_id"]}}
                        custom={{"title":{"style":{"padding":10}}}}/>),
                    (
                      <slim_entry.EntryContentParagraph
                        key="body"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"body","template":["balance"]}}
                        custom={{"body":{"style":{"padding":10}}}}/>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
                "title":{"style":{"padding":10}},
                "body":{"style":{"padding":10}}
              }}
            entry={entry}
            impl={{
                "type":"v",
                "body":[
                    {"type":"title","key":"title","template":["currency_id"]},
                    {"type":"p","key":"body","template":["balance"]}
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutEnclosedDemo [254] 
export function EntryLayoutEnclosedDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutEnclosed"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryLayoutEnclosed\n        design={{\"type\":\"light\"}}\n        impl={{\n            \"label\":\"ENCLOSED\",\n            \"body\":[\n                (\n                  <slim_entry.EntryContentTitle\n                    key=\"title\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"title\",\"template\":[\"currency_id\"]}}\n                    custom={{\"title\":{\"style\":{\"padding\":10}}}}/>),\n                (\n                  <slim_entry.EntryContentParagraph\n                    key=\"body\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"body\",\"template\":[\"balance\"]}}\n                    custom={{\"body\":{\"style\":{\"padding\":10}}}}/>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        custom={{\n            \"title\":{\"style\":{\"padding\":10}},\n            \"body\":{\"style\":{\"padding\":10}}\n          }}\n        entry={entry}\n        impl={{\n            \"type\":\"enclosed\",\n            \"label\":\"ENCLOSED\",\n            \"body\":[\n                {\"type\":\"title\",\"key\":\"title\",\"template\":[\"currency_id\"]},\n                {\"type\":\"p\",\"key\":\"body\",\"template\":[\"balance\"]}\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutEnclosed
            design={{"type":"light"}}
            impl={{
                "label":"ENCLOSED",
                "body":[
                    (
                      <slim_entry.EntryContentTitle
                        key="title"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"title","template":["currency_id"]}}
                        custom={{"title":{"style":{"padding":10}}}}/>),
                    (
                      <slim_entry.EntryContentParagraph
                        key="body"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"body","template":["balance"]}}
                        custom={{"body":{"style":{"padding":10}}}}/>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
                "title":{"style":{"padding":10}},
                "body":{"style":{"padding":10}}
              }}
            entry={entry}
            impl={{
                "type":"enclosed",
                "label":"ENCLOSED",
                "body":[
                    {"type":"title","key":"title","template":["currency_id"]},
                    {"type":"p","key":"body","template":["balance"]}
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutPortalDemo [305] 
export function EntryLayoutPortalDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutPortal"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <n.PortalSink name=\"light\"/>\n      <slim_entry.EntryLayoutPortal\n        design={{\"type\":\"light\"}}\n        impl={{\n            \"target\":\"light\",\n            \"body\":[\n                (\n                  <slim_entry.EntryContentTitle\n                    key=\"title\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"title\",\"template\":[\"currency_id\"]}}\n                    custom={{\"title\":{\"style\":{\"padding\":10}}}}/>),\n                (\n                  <slim_entry.EntryContentParagraph\n                    key=\"body\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"body\",\"template\":[\"balance\"]}}\n                    custom={{\"body\":{\"style\":{\"padding\":10}}}}/>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <n.PortalSink name=\"dark\"/>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        custom={{\n            \"title\":{\"style\":{\"padding\":10}},\n            \"body\":{\"style\":{\"padding\":10}}\n          }}\n        entry={entry}\n        impl={{\n            \"type\":\"portal\",\n            \"target\":\"dark\",\n            \"body\":[\n                {\"type\":\"title\",\"key\":\"title\",\"template\":[\"currency_id\"]},\n                {\"type\":\"p\",\"key\":\"body\",\"template\":[\"balance\"]}\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <n.PortalSink name="light"/>
          <slim_entry.EntryLayoutPortal
            design={{"type":"light"}}
            impl={{
                "target":"light",
                "body":[
                    (
                      <slim_entry.EntryContentTitle
                        key="title"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"title","template":["currency_id"]}}
                        custom={{"title":{"style":{"padding":10}}}}/>),
                    (
                      <slim_entry.EntryContentParagraph
                        key="body"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"body","template":["balance"]}}
                        custom={{"body":{"style":{"padding":10}}}}/>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <n.PortalSink name="dark"/>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
                "title":{"style":{"padding":10}},
                "body":{"style":{"padding":10}}
              }}
            entry={entry}
            impl={{
                "type":"portal",
                "target":"dark",
                "body":[
                    {"type":"title","key":"title","template":["currency_id"]},
                    {"type":"p","key":"body","template":["balance"]}
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutPortalSinkDemo [360] 
export function EntryLayoutPortalSinkDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutPortalSink"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryLayoutPortalSink design={{\"type\":\"light\"}} impl={{\"name\":\"hello_light\"}}/>\n      <slim_entry.EntryLayoutPortal\n        design={{\"type\":\"light\"}}\n        impl={{\n            \"target\":\"hello_light\",\n            \"body\":[\n                (\n                  <slim_entry.EntryContentTitle\n                    key=\"title\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"title\",\"template\":[\"currency_id\"]}}\n                    custom={{\"title\":{\"style\":{\"padding\":10}}}}/>),\n                (\n                  <slim_entry.EntryContentParagraph\n                    key=\"body\"\n                    design={{\"type\":\"light\"}}\n                    entry={entry}\n                    impl={{\"key\":\"body\",\"template\":[\"balance\"]}}\n                    custom={{\"body\":{\"style\":{\"padding\":10}}}}/>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        custom={{\n            \"title\":{\"style\":{\"padding\":10}},\n            \"body\":{\"style\":{\"padding\":10}}\n          }}\n        entry={entry}\n        impl={{\"type\":\"portal_sink\",\"name\":\"hello_dark\"}}/>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        custom={{\n            \"title\":{\"style\":{\"padding\":10}},\n            \"body\":{\"style\":{\"padding\":10}}\n          }}\n        entry={entry}\n        impl={{\n            \"type\":\"portal\",\n            \"target\":\"hello_dark\",\n            \"body\":[\n                {\"type\":\"title\",\"key\":\"title\",\"template\":[\"currency_id\"]},\n                {\"type\":\"p\",\"key\":\"body\",\"template\":[\"balance\"]}\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutPortalSink design={{"type":"light"}} impl={{"name":"hello_light"}}/>
          <slim_entry.EntryLayoutPortal
            design={{"type":"light"}}
            impl={{
                "target":"hello_light",
                "body":[
                    (
                      <slim_entry.EntryContentTitle
                        key="title"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"title","template":["currency_id"]}}
                        custom={{"title":{"style":{"padding":10}}}}/>),
                    (
                      <slim_entry.EntryContentParagraph
                        key="body"
                        design={{"type":"light"}}
                        entry={entry}
                        impl={{"key":"body","template":["balance"]}}
                        custom={{"body":{"style":{"padding":10}}}}/>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
                "title":{"style":{"padding":10}},
                "body":{"style":{"padding":10}}
              }}
            entry={entry}
            impl={{"type":"portal_sink","name":"hello_dark"}}/>
          <slim_entry.Entry
            design={{"type":"dark"}}
            custom={{
                "title":{"style":{"padding":10}},
                "body":{"style":{"padding":10}}
              }}
            entry={entry}
            impl={{
                "type":"portal",
                "target":"hello_dark",
                "body":[
                    {"type":"title","key":"title","template":["currency_id"]},
                    {"type":"p","key":"body","template":["balance"]}
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentScrollDemo [421] 
export function EntryContentScrollDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentScroll"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":10}}>\n      <slim_entry.EntryLayoutScroll design={{\"type\":\"light\"}} entry={entry} impl={{\"key\":\"body\"}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":10}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"scroll\"}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":10}}>
          <slim_entry.EntryLayoutScroll design={{"type":"light"}} entry={entry} impl={{"key":"body"}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":10}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"scroll"}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutPopupDemo [451] 
export function EntryLayoutPopupDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.Isolation>
      <n.EnclosedCodeContainer
        label="melbourne.slim-entry/EntryLayoutPopup"
        code={(function (){
            return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":10}}/>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":10}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        actions={{\n            \"hello\":function (){\n                return alert(\"HELLO\");\n              }\n          }}\n        impl={{\n            \"type\":\"popup\",\n            \"text\":\"HELLO\",\n            \"body\":[\n                {\n                  \"type\":\"v\",\n                  \"style\":{\"height\":100,\"width\":100},\n                  \"body\":[\n                      {\"template\":\"hello world\"},\n                      {\"type\":\"action\",\"text\":\"HELLO\",\"submit\":\"hello\"}\n                    ]\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":10}}/>
          <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":10}}>
            <slim_entry.Entry
              design={{"type":"dark"}}
              entry={entry}
              actions={{
                  "hello":function (){
                      return alert("HELLO");
                    }
                }}
              impl={{
                  "type":"popup",
                  "text":"HELLO",
                  "body":[
                      {
                        "type":"v",
                        "style":{"height":100,"width":100},
                        "body":[
                            {"template":"hello world"},
                            {"type":"action","text":"HELLO","submit":"hello"}
                          ]
                      }
                    ]
                }}/>
          </ui_static.Div>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.Isolation>);
}

// melbourne.slim-entry-test/EntryLayoutDebugDemo [492] 
export function EntryLayoutDebugDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutDebug"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":10}}>\n      <slim_entry.EntryLayoutDebug\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\n            \"key\":\"body\",\n            \"body\":[\n                (\n                  <ReactNative.Text key=\"name\">Hello World</ReactNative.Text>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":10}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"debug\",\"body\":[{\"template\":\"hellp world\"}]}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":10}}>
          <slim_entry.EntryLayoutDebug
            design={{"type":"light"}}
            entry={entry}
            impl={{
                "key":"body",
                "body":[
                    (
                      <ReactNative.Text key="name">Hello World</ReactNative.Text>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":10}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"debug","body":[{"template":"hellp world"}]}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentSeparatorDemo [526] 
export function EntryContentSeparatorDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentSeparator"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1,\"padding\":10}}>\n      <slim_entry.EntryContentSeparator design={{\"type\":\"light\"}} entry={entry} impl={{\"key\":\"body\"}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1,\"padding\":10}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"separator\"}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1,"padding":10}}>
          <slim_entry.EntryContentSeparator design={{"type":"light"}} entry={entry} impl={{"key":"body"}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1,"padding":10}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"separator"}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentTitleH1Demo [559] 
export function EntryContentTitleH1Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentTitleH1"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentTitleH1\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"title_h1\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"title_h1\",\"key\":\"title\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH1
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h1","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h1","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentTitleH2Demo [592] 
export function EntryContentTitleH2Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentTitleH2"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentTitleH2\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"title_h2\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"title_h2\",\"key\":\"title\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH2
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h2","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h2","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentTitleH3Demo [625] 
export function EntryContentTitleH3Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentTitleH3"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentTitleH3\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"title_h3\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"title_h3\",\"key\":\"title\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH3
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h3","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h3","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentTitleH4Demo [658] 
export function EntryContentTitleH4Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentTitleH4"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentTitleH4\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"title_h4\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"title_h4\",\"key\":\"title\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH4
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h4","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h4","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentTitleH5Demo [691] 
export function EntryContentTitleH5Demo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentTitleH5"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentTitleH5\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"title_h5\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"title_h5\",\"key\":\"title\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitleH5
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title_h5","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title_h5","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentTitleDemo [724] 
export function EntryContentTitleDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentTitle"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentTitle\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"title\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"title\",\"key\":\"title\",\"template\":[\"currency_id\"]}}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentTitle
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title","key":"title","template":["currency_id"]}}
            custom={{"title":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentBoldDemo [757] 
export function EntryContentBoldDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentBold"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentBold\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"bold_\",\"template\":[\"currency_id\"]}}\n        custom={{\"bold\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"bold_\",\"key\":\"bold\",\"template\":[\"currency_id\"]}}\n        custom={{\"bold\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentBold
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"bold_","template":["currency_id"]}}
            custom={{"bold":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"bold_","key":"bold","template":["currency_id"]}}
            custom={{"bold":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentParagraphDemo [790] 
export function EntryContentParagraphDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentParagraph"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentParagraph\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"body\",\"template\":[\"balance\"]}}\n        custom={{\"body\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"p\",\"key\":\"body\",\"template\":[\"balance\"]}}\n        custom={{\"body\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentParagraph
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"body","template":["balance"]}}
            custom={{"body":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"p","key":"body","template":["balance"]}}
            custom={{"body":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentIconDemo [823] 
export function EntryContentIconDemo(){
  let entry = {"name":"home"};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentIcon"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentIcon\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"key\":\"body\",\"template\":[\"name\"]}}\n        custom={{\"body\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"icon\",\"key\":\"body\",\"template\":[\"name\"]}}\n        custom={{\"body\":{\"style\":{\"padding\":10}}}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentIcon
            design={{"type":"light"}}
            entry={entry}
            impl={{"key":"body","template":["name"]}}
            custom={{"body":{"style":{"padding":10}}}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"icon","key":"body","template":["name"]}}
            custom={{"body":{"style":{"padding":10}}}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentImageDemo [854] 
export function EntryContentImageDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentImage"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentImage\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"text\":{\"template\":[\"currency_id\"]},\"format\":data.first}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\n            \"type\":\"image\",\n            \"text\":{\"template\":[\"currency_id\"]},\n            \"format\":data.first\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentImage
            design={{"type":"light"}}
            entry={entry}
            impl={{"text":{"template":["currency_id"]},"format":data.first}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{
                "type":"image",
                "text":{"template":["currency_id"]},
                "format":data.first
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentPairDemo [885] 
export function EntryContentPairDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentPair"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentPair\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\n            \"title\":{\"template\":\"currency: \"},\n            \"text\":{\"template\":[\"currency_id\"]}\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        custom={{\"title\":{\"style\":{\"fontWeight\":\"900\"}}}}\n        impl={{\n            \"type\":\"pair\",\n            \"title\":{\n                \"type\":\"title\",\n                \"key\":\"title\",\n                \"template\":\"currency\",\n                \"format\":function (s){\n                    return s.toUpperCase() + \": \";\n                  }\n              },\n            \"text\":{\"template\":[\"currency_id\"]}\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentPair
            design={{"type":"light"}}
            entry={entry}
            impl={{
                "title":{"template":"currency: "},
                "text":{"template":["currency_id"]}
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{"title":{"style":{"fontWeight":"900"}}}}
            impl={{
                "type":"pair",
                "title":{
                    "type":"title",
                    "key":"title",
                    "template":"currency",
                    "format":function (s){
                        return s.toUpperCase() + ": ";
                      }
                  },
                "text":{"template":["currency_id"]}
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentFieldDemo [920] 
export function EntryContentFieldDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "currency":["XLM","STATS"],
      "currency1":"USD",
      "name":"",
      "about":""
    };
  },{"currency":[],"currency1":[],"name":[],"about":[]});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentField"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentField\n        design={{\"type\":\"light\"}}\n        form={form}\n        mini={true}\n        impl={{\"type\":\"field\",\"label\":\"Name\",\"field\":\"name\"}}/>\n      <slim_entry.EntryContentField\n        design={{\"type\":\"light\"}}\n        form={form}\n        mini={true}\n        impl={{\n            \"type\":\"field\",\n            \"field\":\"currency\",\n            \"component\":\"enum_multi\",\n            \"label\":\"Currency\",\n            \"options\":[\"XLM\",\"USD\",\"STATS\"]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        form={form}\n        mini={true}\n        impl={{\n            \"type\":\"v\",\n            \"body\":[\n                {\"type\":\"field\",\"label\":\"Name\",\"field\":\"name\"},\n                {\n                  \"type\":\"field\",\n                  \"field\":\"currency\",\n                  \"component\":\"enum_multi\",\n                  \"label\":\"Currency\",\n                  \"options\":[\"XLM\",\"USD\",\"STATS\"]\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentField
            design={{"type":"light"}}
            form={form}
            mini={true}
            impl={{"type":"field","label":"Name","field":"name"}}/>
          <slim_entry.EntryContentField
            design={{"type":"light"}}
            form={form}
            mini={true}
            impl={{
                "type":"field",
                "field":"currency",
                "component":"enum_multi",
                "label":"Currency",
                "options":["XLM","USD","STATS"]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            form={form}
            mini={true}
            impl={{
                "type":"v",
                "body":[
                    {"type":"field","label":"Name","field":"name"},
                    {
                      "type":"field",
                      "field":"currency",
                      "component":"enum_multi",
                      "label":"Currency",
                      "options":["XLM","USD","STATS"]
                    }
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutFormFadeDemo [975] 
export function EntryLayoutFormFadeDemo(){
  let form = ext_form.makeForm(function (){
    return {"visible":true};
  },{"visible":true});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutFormFade"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"T\"\n      onPress={function (){\n          return event_form.set_field(form,\"visible\",!event_form.get_field(form,\"visible\"));\n        }}/>\n  </n.Row>);\n(\n  <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n    <slim_entry.EntryLayoutFormFade\n      design={{\"type\":\"light\"}}\n      form={form}\n      mini={true}\n      impl={{\n          \"template\":[\"visible\"],\n          \"watch\":[\"visible\"],\n          \"body\":[\n              (\n                <ReactNative.View style={{\"height\":100,\"width\":100,\"backgroundColor\":\"red\"}}/>)\n            ]\n        }}/>\n  </ui_static.Div>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="T"
          onPress={function (){
              return event_form.set_field(form,"visible",!event_form.get_field(form,"visible"));
            }}/>
      </n.Row>
      <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
        <slim_entry.EntryLayoutFormFade
          design={{"type":"light"}}
          form={form}
          mini={true}
          impl={{
              "template":["visible"],
              "watch":["visible"],
              "body":[
                  (
                    <ReactNative.View style={{"height":100,"width":100,"backgroundColor":"red"}}/>)
                ]
            }}/>
      </ui_static.Div>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutFormFoldDemo [1009] 
export function EntryLayoutFormFoldDemo(){
  let form = ext_form.makeForm(function (){
    return {"visible":true};
  },{"visible":true});
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutFormFold"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"T\"\n      onPress={function (){\n          return event_form.set_field(form,\"visible\",!event_form.get_field(form,\"visible\"));\n        }}/>\n  </n.Row>);\n(\n  <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n    <slim_entry.EntryLayoutFormFold\n      design={{\"type\":\"light\"}}\n      form={form}\n      mini={true}\n      impl={{\n          \"template\":[\"visible\"],\n          \"watch\":[\"visible\"],\n          \"body\":[\n              (\n                <ReactNative.View style={{\"height\":100,\"width\":100,\"backgroundColor\":\"red\"}}/>)\n            ]\n        }}/>\n  </ui_static.Div>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="T"
          onPress={function (){
              return event_form.set_field(form,"visible",!event_form.get_field(form,"visible"));
            }}/>
      </n.Row>
      <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
        <slim_entry.EntryLayoutFormFold
          design={{"type":"light"}}
          form={form}
          mini={true}
          impl={{
              "template":["visible"],
              "watch":["visible"],
              "body":[
                  (
                    <ReactNative.View style={{"height":100,"width":100,"backgroundColor":"red"}}/>)
                ]
            }}/>
      </ui_static.Div>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentControlDemo [1055] 
export function EntryContentControlDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentControl"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentControl\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        custom={{\"hello\":{\"text\":\"Hello\"}}}\n        control={{\n            \"setShowDetail\":function (e){\n                return alert(JSON.stringify(e));\n              }\n          }}\n        impl={{\"key\":\"hello\",\"submit\":\"detail\"}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        custom={{\"hello\":{\"text\":\"Hello\"}}}\n        control={{\n            \"setShowDetail\":function (e){\n                return alert(JSON.stringify(e));\n              }\n          }}\n        impl={{\"type\":\"control\",\"key\":\"hello\",\"submit\":\"detail\"}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentControl
            design={{"type":"light"}}
            entry={entry}
            custom={{"hello":{"text":"Hello"}}}
            control={{
                "setShowDetail":function (e){
                    return alert(JSON.stringify(e));
                  }
              }}
            impl={{"key":"hello","submit":"detail"}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{"hello":{"text":"Hello"}}}
            control={{
                "setShowDetail":function (e){
                    return alert(JSON.stringify(e));
                  }
              }}
            impl={{"type":"control","key":"hello","submit":"detail"}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutControlDemo [1091] 
export function EntryLayoutControlDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutControl"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryLayoutControl\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        custom={{\"hello\":{\"text\":\"Hello\"}}}\n        control={{\n            \"setShowDetail\":function (e){\n                return alert(JSON.stringify(e));\n              }\n          }}\n        impl={{\n            \"key\":\"hello\",\n            \"submit\":\"detail\",\n            \"body\":[\n                (\n                  <ReactNative.Text>PRESS</ReactNative.Text>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        custom={{\"hello\":{\"text\":\"Hello\"}}}\n        control={{\n            \"setShowDetail\":function (e){\n                return alert(JSON.stringify(e));\n              }\n          }}\n        impl={{\n            \"type\":\"control_layout\",\n            \"key\":\"hello\",\n            \"submit\":\"detail\",\n            \"body\":[{\"type\":\"raw\"}]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutControl
            design={{"type":"light"}}
            entry={entry}
            custom={{"hello":{"text":"Hello"}}}
            control={{
                "setShowDetail":function (e){
                    return alert(JSON.stringify(e));
                  }
              }}
            impl={{
                "key":"hello",
                "submit":"detail",
                "body":[
                    (
                      <ReactNative.Text>PRESS</ReactNative.Text>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{"hello":{"text":"Hello"}}}
            control={{
                "setShowDetail":function (e){
                    return alert(JSON.stringify(e));
                  }
              }}
            impl={{
                "type":"control_layout",
                "key":"hello",
                "submit":"detail",
                "body":[{"type":"raw"}]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentLinkDemo [1129] 
export function EntryContentLinkDemo(){
  let route = ext_route.makeRoute("hello/world");
  let url = ext_route.listenRouteUrl(route);
  let entry = {"a":1,"b":2};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentLink"
      code={(function (){
          return "(\n  <ReactNative.Text>{url}</ReactNative.Text>);\n(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentLink\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        route={route}\n        impl={{\"template\":\"hello/world/again\",\"text\":\"PRESS\"}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        route={route}\n        impl={{\"type\":\"link\",\"template\":\"hello/world\",\"text\":\"PRESS\"}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <ReactNative.Text>{url}</ReactNative.Text>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentLink
            design={{"type":"light"}}
            entry={entry}
            route={route}
            impl={{"template":"hello/world/again","text":"PRESS"}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            route={route}
            impl={{"type":"link","template":"hello/world","text":"PRESS"}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutLinkDemo [1163] 
export function EntryLayoutLinkDemo(){
  let route = ext_route.makeRoute("hello/world");
  let url = ext_route.listenRouteUrl(route);
  let entry = {"a":1,"b":2};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutLink"
      code={(function (){
          return "(\n  <ReactNative.Text>{url}</ReactNative.Text>);\n(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryLayoutLink\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        route={route}\n        impl={{\n            \"template\":\"hello/world/again\",\n            \"body\":[\n                (\n                  <ReactNative.Text>PRESS</ReactNative.Text>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        route={route}\n        impl={{\n            \"type\":\"link_layout\",\n            \"template\":\"hello/world\",\n            \"body\":[{\"type\":\"raw\"}]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <ReactNative.Text>{url}</ReactNative.Text>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutLink
            design={{"type":"light"}}
            entry={entry}
            route={route}
            impl={{
                "template":"hello/world/again",
                "body":[
                    (
                      <ReactNative.Text>PRESS</ReactNative.Text>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            route={route}
            impl={{
                "type":"link_layout",
                "template":"hello/world",
                "body":[{"type":"raw"}]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentRouteDemo [1197] 
export function EntryContentRouteDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentRoute"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}/>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}/>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentRouteToggleDemo [1233] 
export function EntryContentRouteToggleDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentRouteToggle"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}/>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}/>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentActionDemo [1269] 
export function EntryContentActionDemo(){
  let entry = {
    "id":"hello",
    "currency_id":"STATS",
    "balance":1000,
    "escrow":50.5
  };
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentAction"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentAction\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        actions={{\n            \"print\":function (e){\n                return alert(JSON.stringify(e));\n              }\n          }}\n        impl={{\"submit\":\"print\",\"text\":\"HELLO\",\"submitType\":\"entry\"}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        actions={{\n            \"print\":function (e){\n                return alert(JSON.stringify(e));\n              }\n          }}\n        impl={{\n            \"type\":\"action\",\n            \"text\":\"HELLO\",\n            \"submit\":\"print\",\n            \"submitType\":\"entry\"\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentAction
            design={{"type":"light"}}
            entry={entry}
            actions={{
                "print":function (e){
                    return alert(JSON.stringify(e));
                  }
              }}
            impl={{"submit":"print","text":"HELLO","submitType":"entry"}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            actions={{
                "print":function (e){
                    return alert(JSON.stringify(e));
                  }
              }}
            impl={{
                "type":"action",
                "text":"HELLO",
                "submit":"print",
                "submitType":"entry"
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryContentSubmitDemo [1305] 
export function EntryContentSubmitDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "name":"NBA",
      "title":"National Basketball Association",
      "description":""
    };
  },{
    "name":[validators.is_required()],
    "title":[validators.is_required()],
    "description":[]
  });
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryContentSubmit"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryContentSubmit\n        actions={{\n            \"create\":function (data){\n                return alert(JSON.stringify(data));\n              }\n          }}\n        form={form}\n        impl={{\"submit\":\"create\"}}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        actions={{\n            \"create\":function (data){\n                return alert(JSON.stringify(data));\n              }\n          }}\n        mini={true}\n        form={form}\n        impl={{\"type\":\"submit\",\"submit\":\"create\"}}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryContentSubmit
            actions={{
                "create":function (data){
                    return alert(JSON.stringify(data));
                  }
              }}
            form={form}
            impl={{"submit":"create"}}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            actions={{
                "create":function (data){
                    return alert(JSON.stringify(data));
                  }
              }}
            mini={true}
            form={form}
            impl={{"type":"submit","submit":"create"}}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutCardDemo [1340] 
export function EntryLayoutCardDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutCard"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryLayoutCard\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\n            \"body\":{\n                \"title\":(\n                    <slim_entry.EntryContentTitle\n                      design={{\"type\":\"light\"}}\n                      entry={entry}\n                      impl={{\"key\":\"title\",\"template\":[\"currency_id\"]}}\n                      custom={{\"title\":{\"style\":{\"padding\":10}}}}/>)\n              }\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        custom={{\"title\":{\"style\":{\"padding\":10}}}}\n        impl={{\n            \"type\":\"card\",\n            \"body\":{\n                \"title\":{\"type\":\"title\",\"key\":\"title\",\"template\":[\"currency_id\"]}\n              }\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutCard
            design={{"type":"light"}}
            entry={entry}
            impl={{
                "body":{
                    "title":(
                        <slim_entry.EntryContentTitle
                          design={{"type":"light"}}
                          entry={entry}
                          impl={{"key":"title","template":["currency_id"]}}
                          custom={{"title":{"style":{"padding":10}}}}/>)
                  }
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{"title":{"style":{"padding":10}}}}
            impl={{
                "type":"card",
                "body":{
                    "title":{"type":"title","key":"title","template":["currency_id"]}
                  }
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryLayoutFormDemo [1380] 
export function EntryLayoutFormDemo(){
  let form = ext_form.makeForm(function (){
    return {
      "name":"NBA",
      "title":"National Basketball Association",
      "description":""
    };
  },{
    "name":[validators.is_required()],
    "title":[validators.is_required()],
    "description":[]
  });
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/EntryLayoutForm"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.EntryLayoutForm\n        actions={{\n            \"create\":function (data){\n                return alert(JSON.stringify(data));\n              }\n          }}\n        form={form}\n        impl={{\n            \"submit\":\"create\",\n            \"body\":[\n                (\n                  <slim_entry.EntryContentField\n                    key={0}\n                    design={{\"type\":\"light\"}}\n                    form={form}\n                    mini={true}\n                    impl={{\"type\":\"field\",\"label\":\"Name\",\"field\":\"name\"}}/>),\n                (\n                  <slim_entry.EntryContentField\n                    key={1}\n                    design={{\"type\":\"light\"}}\n                    form={form}\n                    mini={true}\n                    impl={{\"type\":\"field\",\"label\":\"Title\",\"field\":\"title\"}}/>)\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        actions={{\n            \"create\":function (data){\n                return alert(JSON.stringify(data));\n              }\n          }}\n        mini={true}\n        form={form}\n        impl={{\n            \"type\":\"form\",\n            \"submit\":\"create\",\n            \"body\":[\n                {\"type\":\"field\",\"label\":\"Name\",\"field\":\"name\"},\n                {\"type\":\"field\",\"label\":\"Title\",\"field\":\"title\"}\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.EntryLayoutForm
            actions={{
                "create":function (data){
                    return alert(JSON.stringify(data));
                  }
              }}
            form={form}
            impl={{
                "submit":"create",
                "body":[
                    (
                      <slim_entry.EntryContentField
                        key={0}
                        design={{"type":"light"}}
                        form={form}
                        mini={true}
                        impl={{"type":"field","label":"Name","field":"name"}}/>),
                    (
                      <slim_entry.EntryContentField
                        key={1}
                        design={{"type":"light"}}
                        form={form}
                        mini={true}
                        impl={{"type":"field","label":"Title","field":"title"}}/>)
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            actions={{
                "create":function (data){
                    return alert(JSON.stringify(data));
                  }
              }}
            mini={true}
            form={form}
            impl={{
                "type":"form",
                "submit":"create",
                "body":[
                    {"type":"field","label":"Name","field":"name"},
                    {"type":"field","label":"Title","field":"title"}
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/EntryDemo [1443] 
export function EntryDemo(){
  let entry = {"currency_id":"STATS","balance":1000,"escrow":50.5};
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-entry/Entry"
      code={(function (){
          return "(\n  <n.Row>\n    <ui_static.Div design={{\"type\":\"light\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"type\":\"title\",\"template\":[\"currency_id\"]}}/>\n      <slim_entry.Entry\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\"type\":\"p\",\"template\":[\"currency_id\"]}}/>\n      <slim_entry.Entry design={{\"type\":\"light\"}} impl={{\"type\":\"separator\"}}/>\n      <slim_entry.Entry\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\n            \"type\":\"image\",\n            \"text\":{\"template\":[\"currency_id\"],\"format\":data.first}\n          }}/>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\n            \"type\":\"card\",\n            \"body\":{\n                \"main\":{\n                    \"type\":\"v\",\n                    \"body\":[\n                        {\"key\":\"entry\",\"type\":\"p\",\"template\":[\"currency_id\"]},\n                        {\n                          \"type\":\"h\",\n                          \"body\":[\n                              {\"key\":\"entry\",\"type\":\"title\",\"template\":[\"escrow\"]},\n                              {\"type\":\"p\",\"template\":[\"balance\"]}\n                            ]\n                        }\n                      ]\n                  }\n              }\n          }}/>\n      <slim_entry.Entry\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        custom={{\n            \"row\":{\"style\":{\"padding\":5}},\n            \"entry\":{\"style\":{\"padding\":3}}\n          }}\n        impl={{\n            \"key\":\"row\",\n            \"type\":\"v\",\n            \"body\":[\n                {\n                  \"type\":\"h\",\n                  \"body\":[\n                      {\"type\":\"p\",\"template\":[\"currency_id\"]},\n                      {\"type\":\"title\",\"template\":[\"escrow\"]},\n                      {\"type\":\"p\",\"template\":[\"balance\"]}\n                    ]\n                },\n                {\n                  \"type\":\"v\",\n                  \"body\":[\n                      {\"type\":\"p\",\"template\":[\"currency_id\"]},\n                      {\"type\":\"title\",\"template\":[\"balance\"]}\n                    ]\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n    <ui_static.Div design={{\"type\":\"dark\"}} style={{\"flex\":1}}>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"title\",\"template\":[\"currency_id\"]}}/>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\"type\":\"p\",\"template\":[\"currency_id\"]}}/>\n      <slim_entry.Entry design={{\"type\":\"dark\"}} impl={{\"type\":\"separator\"}}/>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        impl={{\n            \"type\":\"image\",\n            \"text\":{\"template\":[\"currency_id\"],\"format\":data.first}\n          }}/>\n      <slim_entry.Entry\n        design={{\"type\":\"light\"}}\n        entry={entry}\n        impl={{\n            \"type\":\"card\",\n            \"body\":{\n                \"main\":{\n                    \"type\":\"v\",\n                    \"body\":[\n                        {\"key\":\"entry\",\"type\":\"p\",\"template\":[\"currency_id\"]},\n                        {\n                          \"type\":\"h\",\n                          \"body\":[\n                              {\"key\":\"entry\",\"type\":\"title\",\"template\":[\"escrow\"]},\n                              {\"type\":\"p\",\"template\":[\"balance\"]}\n                            ]\n                        }\n                      ]\n                  }\n              }\n          }}/>\n      <slim_entry.Entry\n        design={{\"type\":\"dark\"}}\n        entry={entry}\n        custom={{\n            \"row\":{\"style\":{\"padding\":5}},\n            \"entry\":{\"style\":{\"padding\":3}}\n          }}\n        impl={{\n            \"key\":\"row\",\n            \"type\":\"v\",\n            \"body\":[\n                {\n                  \"type\":\"h\",\n                  \"body\":[\n                      {\"key\":\"entry\",\"type\":\"p\",\"template\":[\"currency_id\"]},\n                      {\"type\":\"title\",\"template\":[\"escrow\"]},\n                      {\"type\":\"p\",\"template\":[\"balance\"]}\n                    ]\n                },\n                {\n                  \"type\":\"v\",\n                  \"body\":[\n                      {\"type\":\"p\",\"template\":[\"currency_id\"]},\n                      {\"type\":\"title\",\"template\":[\"balance\"]}\n                    ]\n                }\n              ]\n          }}/>\n    </ui_static.Div>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ui_static.Div design={{"type":"light"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            impl={{"type":"title","template":["currency_id"]}}/>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            impl={{"type":"p","template":["currency_id"]}}/>
          <slim_entry.Entry design={{"type":"light"}} impl={{"type":"separator"}}/>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            impl={{
                "type":"image",
                "text":{"template":["currency_id"],"format":data.first}
              }}/>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{
                "type":"card",
                "body":{
                    "main":{
                        "type":"v",
                        "body":[
                            {"key":"entry","type":"p","template":["currency_id"]},
                            {
                              "type":"h",
                              "body":[
                                  {"key":"entry","type":"title","template":["escrow"]},
                                  {"type":"p","template":["balance"]}
                                ]
                            }
                          ]
                      }
                  }
              }}/>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            custom={{
                "row":{"style":{"padding":5}},
                "entry":{"style":{"padding":3}}
              }}
            impl={{
                "key":"row",
                "type":"v",
                "body":[
                    {
                      "type":"h",
                      "body":[
                          {"type":"p","template":["currency_id"]},
                          {"type":"title","template":["escrow"]},
                          {"type":"p","template":["balance"]}
                        ]
                    },
                    {
                      "type":"v",
                      "body":[
                          {"type":"p","template":["currency_id"]},
                          {"type":"title","template":["balance"]}
                        ]
                    }
                  ]
              }}/>
        </ui_static.Div>
        <ui_static.Div design={{"type":"dark"}} style={{"flex":1}}>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"title","template":["currency_id"]}}/>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{"type":"p","template":["currency_id"]}}/>
          <slim_entry.Entry design={{"type":"dark"}} impl={{"type":"separator"}}/>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            impl={{
                "type":"image",
                "text":{"template":["currency_id"],"format":data.first}
              }}/>
          <slim_entry.Entry
            design={{"type":"light"}}
            entry={entry}
            impl={{
                "type":"card",
                "body":{
                    "main":{
                        "type":"v",
                        "body":[
                            {"key":"entry","type":"p","template":["currency_id"]},
                            {
                              "type":"h",
                              "body":[
                                  {"key":"entry","type":"title","template":["escrow"]},
                                  {"type":"p","template":["balance"]}
                                ]
                            }
                          ]
                      }
                  }
              }}/>
          <slim_entry.Entry
            design={{"type":"dark"}}
            entry={entry}
            custom={{
                "row":{"style":{"padding":5}},
                "entry":{"style":{"padding":3}}
              }}
            impl={{
                "key":"row",
                "type":"v",
                "body":[
                    {
                      "type":"h",
                      "body":[
                          {"key":"entry","type":"p","template":["currency_id"]},
                          {"type":"title","template":["escrow"]},
                          {"type":"p","template":["balance"]}
                        ]
                    },
                    {
                      "type":"v",
                      "body":[
                          {"type":"p","template":["currency_id"]},
                          {"type":"title","template":["balance"]}
                        ]
                    }
                  ]
              }}/>
        </ui_static.Div>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-entry-test/MODULE [1584] 
export var MODULE = {
  "EntryFreeDemo":EntryFreeDemo,
  "EntryContentRawDemo":EntryContentRawDemo,
  "EntryContentRawFormDemo":EntryContentRawFormDemo,
  "EntryContentFillDemo":EntryContentFillDemo,
  "EntryLayoutHorizontalDemo":EntryLayoutHorizontalDemo,
  "EntryLayoutVerticalDemo":EntryLayoutVerticalDemo,
  "EntryLayoutEnclosedDemo":EntryLayoutEnclosedDemo,
  "EntryLayoutPortalDemo":EntryLayoutPortalDemo,
  "EntryLayoutPortalSinkDemo":EntryLayoutPortalSinkDemo,
  "EntryContentScrollDemo":EntryContentScrollDemo,
  "EntryLayoutPopupDemo":EntryLayoutPopupDemo,
  "EntryLayoutDebugDemo":EntryLayoutDebugDemo,
  "EntryContentSeparatorDemo":EntryContentSeparatorDemo,
  "EntryContentTitleH1Demo":EntryContentTitleH1Demo,
  "EntryContentTitleH2Demo":EntryContentTitleH2Demo,
  "EntryContentTitleH3Demo":EntryContentTitleH3Demo,
  "EntryContentTitleH4Demo":EntryContentTitleH4Demo,
  "EntryContentTitleH5Demo":EntryContentTitleH5Demo,
  "EntryContentTitleDemo":EntryContentTitleDemo,
  "EntryContentBoldDemo":EntryContentBoldDemo,
  "EntryContentParagraphDemo":EntryContentParagraphDemo,
  "EntryContentIconDemo":EntryContentIconDemo,
  "EntryContentImageDemo":EntryContentImageDemo,
  "EntryContentPairDemo":EntryContentPairDemo,
  "EntryContentFieldDemo":EntryContentFieldDemo,
  "EntryLayoutFormFadeDemo":EntryLayoutFormFadeDemo,
  "EntryLayoutFormFoldDemo":EntryLayoutFormFoldDemo,
  "EntryContentControlDemo":EntryContentControlDemo,
  "EntryLayoutControlDemo":EntryLayoutControlDemo,
  "EntryContentLinkDemo":EntryContentLinkDemo,
  "EntryLayoutLinkDemo":EntryLayoutLinkDemo,
  "EntryContentRouteDemo":EntryContentRouteDemo,
  "EntryContentRouteToggleDemo":EntryContentRouteToggleDemo,
  "EntryContentActionDemo":EntryContentActionDemo,
  "EntryContentSubmitDemo":EntryContentSubmitDemo,
  "EntryLayoutCardDemo":EntryLayoutCardDemo,
  "EntryLayoutFormDemo":EntryLayoutFormDemo,
  "EntryDemo":EntryDemo,
  "MODULE":MODULE
};