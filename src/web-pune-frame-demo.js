import React from 'react'

import * as ReactNative from 'react-native'

import * as ui_button from './libs/melbourne/ui-button.js'

import * as xtd from './libs/xt/lang/common-data.js'

import * as ui_sidemenu from './libs/pune/ui-sidemenu.js'

import * as base_layout from './libs/pune/layout-toplevel.js'

import * as ui_static from './libs/melbourne/ui-static.js'

import * as ui_notify_events from './libs/js/react-native/ui-notify.js'

import * as lib from './libs/xt/lang/common-lib.js'

import * as r from './libs/js/react.js'

import * as ui_menu_vert from './libs/pune/ui-menu-vert.js'

import * as ui_toggle_button from './libs/melbourne/ui-toggle-button.js'

import * as slim_dialog from './libs/melbourne/slim-dialog.js'

import * as n from './libs/js/react-native.js'

import * as ui_console from './libs/pune/ui-console.js'

import * as ui_topnotify from './libs/pune/ui-notify-base.js'

// component.web-pune-frame-demo/SampleText [39] 
export var SampleText = "Lorem ipsum dolor sit amet. Aut aliquam perspiciatis est atque temporibus At esse esse rem saepe temporibus est voluptatibus molestiae. Est tempora quasi 33 officiis totam est officia inventore. Est nihil quia qui internos nostrum est odit repellendus ea perspiciatis necessitatibus. Aut internos eaque ea omnis quibusdam id esse reprehenderit.\n\nEum dicta ipsam ut natus autem et recusandae ullam et laudantium deserunt. Ad provident officiis qui aperiam sequi qui laudantium nulla aut minima beatae! Qui nulla sunt ab consequatur galisum qui odit dolores et aliquid similique ut iure molestiae. Ut magnam consequuntur ut facere quam est obcaecati veritatis.\n\nSit eaque similique et vitae consequatur qui iure aliquid eum eveniet numquam qui internos nulla aut inventore repellendus et dolores laboriosam. Et consectetur dolorem ab unde voluptatem in Quis totam id deleniti provident. Et fuga quia in laboriosam autem qui repudiandae laborum ut quam assumenda. Et assumenda commodi qui nihil unde nam corrupti quasi.";

// component.web-pune-frame-demo/FrameHeader [42] 
export function FrameHeader({design,setIsGuest}){
  return (
    <ui_static.Div design={design} style={{"flex":1}}>
      <ReactNative.Text>HEADER</ReactNative.Text>
      <ReactNative.View style={{"flex":1}}/>
      <ui_button.Button
        text="BACK"
        onPress={function (){
            return setIsGuest(false);
          }}/>
    </ui_static.Div>);
}

// component.web-pune-frame-demo/FrameConsole [55] 
export function FrameConsole({design,routeKey,setRouteKey,...rprops}){
  let [current,setCurrent] = [routeKey,setRouteKey];
  return (
    <ui_console.Console
      design={Object.assign({},design,{"invert":true})}
      screens={{
          "one":function (){
                  return (
                    <ReactNative.Text>ONE</ReactNative.Text>);
                },
          "two":function (){
                  return (
                    <ReactNative.Text>TWO</ReactNative.Text>);
                },
          "three":function (){
                  return (
                    <ReactNative.Text>THREE</ReactNative.Text>);
                },
          "four":function (){
                  return (
                    <ReactNative.Text>FOUR</ReactNative.Text>);
                }
        }}
      current={current}
      setCurrent={setCurrent}
      {...rprops}/>);
}

// component.web-pune-frame-demo/FrameMenu [70] 
export function FrameMenu({
  design,
  setDesign,
  mini,
  route,
  frameConsole,
  setFrameConsole,
  isGuest,
  setIsGuest,
  routeKey,
  setRouteKey,
  showNotify,
  setShowNotify,
  inbox,
  setInbox
}){
  return (
    <ui_menu_vert.MainMenu
      items={[
          {"key":"one","icon":"home","label":"HOME"},
          {"key":"two","icon":"user","label":"ACCOUNT"},
          {"key":"three","icon":"line-graph","label":"MARKET"},
          {"key":"four","icon":"wallet","label":"MARKET"},
          {"component":ui_menu_vert.MainMenuSeperator},
          {
                "component":ui_menu_vert.MainMenuToggle,
                "key":"h3",
                "icon":"browser",
                "label":"CONSOLE",
                "design":design,
                "selected":lib.not_nilp(frameConsole),
                "onPress":function (){
                        return setFrameConsole(lib.nilp(frameConsole) ? true : null);
                      }
              },
          {
                "component":ui_menu_vert.MainMenuToggle,
                "key":"h3",
                "icon":"user",
                "label":"IS GUEST",
                "design":design,
                "selected":isGuest,
                "onPress":function (){
                        return setIsGuest(true);
                      }
              },
          {"component":ui_menu_vert.MainMenuSeperator},
          {
                "component":ui_menu_vert.MainMenuToggle,
                "key":"h3",
                "icon":"tag",
                "label":"DARK MODE",
                "design":design,
                "selected":"dark" == xtd.get_in(design,["type"]),
                "onPress":function (){
                        return setDesign({
                          "type":("dark" == xtd.get_in(design,["type"])) ? "light" : "dark"
                        });
                      }
              },
          {
                "component":ui_menu_vert.MainMenuToggle,
                "key":"h3",
                "icon":"inbox",
                "label":"SHOW MESSAGES",
                "design":design,
                "selected":showNotify,
                "onPress":function (){
                        return setShowNotify(!showNotify);
                      }
              },
          {
                "component":ui_menu_vert.MainMenuButton,
                "key":"h3",
                "icon":"sound",
                "label":"NOTIFY",
                "onPress":function (){
                        let id = Math.random().toString(36).substr(2,6 || 4);
                        let msg = {
                          "id":id,
                          "topic":"user.account/notify",
                          "title":id,
                          "message":"Notify: " + id,
                          "time":Date.now()
                        };
                        setInbox(Object.assign({[id]:msg},inbox));
                        setShowNotify(true);
                      }
              }
        ]}
      routeKey={routeKey}
      mini={mini}
      setRouteKey={setRouteKey}
      design={design}/>);
}

// component.web-pune-frame-demo/FrameNotify [156] 
export function FrameNotify({design,showNotify,setShowNotify,inbox,setInbox}){
  let isMounted = r.useIsMounted();
  let refresh = r.useRefresh();
  let [index,setIndex] = React.useState(0);
  let data = xtd.arr_sort(Object.values(inbox),xtd.key_fn("time"),lib.gt);
  React.useEffect(function (){
    if(xtd.not_emptyp(inbox)){
      new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(            (function (){
                          isMounted() ? refresh() : null;
                        })());
          }
          catch(e){
            reject(e);
          }
        },500);
      });
    }
    let outdated = Object.values(inbox).filter(function (e){
      return !e.sticky && ((5000 + e.time) < Date.now());
    }).map(xtd.id_fn);
    if(xtd.not_emptyp(outdated)){
      let out = xtd.obj_omit(inbox,outdated);
      if(xtd.is_emptyp(out)){
        setShowNotify(false);
        new Promise(function (resolve,reject){
          setTimeout(function (){
            try{
              resolve(              (function (){
                              isMounted() ? setInbox(out) : null;
                            })());
            }
            catch(e){
              reject(e);
            }
          },500);
        });
      }
      else{
        setInbox(out);
      }
    }
  },[inbox,refresh]);
  return (
    <ui_notify_events.Notify position="bottom_right" visible={showNotify} margin={10}>
      <ui_topnotify.TopNotifyInner
        onClose={function (){
            let entry = data[index];
            if(lib.nilp(entry)){
              setShowNotify(false);
            }
            let out = xtd.obj_omit(inbox,[entry && entry.id]);
            if(xtd.is_emptyp(out)){
              setShowNotify(false);
              new Promise(function (resolve,reject){
                setTimeout(function (){
                  try{
                    resolve(            (function (){
                                  isMounted() ? setInbox(out) : null;
                                })());
                  }
                  catch(e){
                    reject(e);
                  }
                },200);
              });
            }
            else{
              setInbox(out);
            }
          }}
        data={data}
        index={index}
        design={design}
        setIndex={setIndex}/>
    </ui_notify_events.Notify>);
}

// component.web-pune-frame-demo/FrameDeleteTooltip [215] 
export function FrameDeleteTooltip({design}){
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let [waiting,setWaiting] = React.useState();
  let buttonRef = React.useRef();
  return (
    <React.Fragment>
      <n.Row style={{"marginVertical":3}}>
        <ui_toggle_button.ToggleButton
          refLink={buttonRef}
          design={design}
          text={waiting ? [
              (
                <ReactNative.ActivityIndicator size={14}/>),
              "DELETE"
            ] : null}
          selected={visible}
          style={{
              "width":100,
              "alignItems":"center",
              "justifyContent":"center",
              "textAlign":"center"
            }}
          styleText={{}}
          onPress={function (){
              return setVisible(!visible);
            }}/>
      </n.Row>
    </React.Fragment>);
}

// component.web-pune-frame-demo/FrameDeleteModal [274] 
export function FrameDeleteModal({design}){
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let buttonRef = React.useRef();
  return (
    <React.Fragment>
      <n.Row style={{"marginVertical":3}}>
        <ui_button.Button
          refLink={buttonRef}
          design={Object.assign({},design,{"mode":["primary"]})}
          text="DELETE MODAL"
          onPress={function (){
              return setVisible(true);
            }}/>
      </n.Row>
      <slim_dialog.Dialog
        design={{"type":"light"}}
        title="Confirm Delete"
        body={(
            <React.Fragment>Are you sure you wish to delete?</React.Fragment>)}
        modalProps={{"transition":"none","effect":{"fade":0.1,"zoom":0.1}}}
        onSubmit={function (){
            return setVisible(false);
          }}
        onCancel={function (){
            return setVisible(false);
          }}
        visible={visible}/>
    </React.Fragment>);
}

// component.web-pune-frame-demo/FrameBody [300] 
export function FrameBody({
  design,
  routeKey,
  setRouteKey,
  showNotify,
  setShowNotify,
  inbox,
  setInbox,
  mini,
  setMini
}){
  let dimensions = ReactNative.useWindowDimensions();
  return (
    <n.Isolation
      style={{
          "position":"absolute",
          "top":0,
          "bottom":0,
          "left":0,
          "right":0,
          "overflow":"hidden"
        }}>
      <ui_static.Div
        design={design}
        style={{"flexDirection":"row-reverse","flex":1}}>
        <ui_sidemenu.SideMenu
          data={["one","two","three","four"]}
          narrowed={dimensions.width < 800}
          routeKey={routeKey}
          setRouteKey={setRouteKey}
          design={design}/>
        <ReactNative.View style={{"flex":1,"paddingHorizontal":10}}>
          <n.Row style={{"paddingVertical":10}}>
            <ui_static.Text design={design} style={[{"width":500}]}>{SampleText}</ui_static.Text>
          </n.Row>
          <ui_button.Button
            text="MINI"
            onPress={function (){
                return setMini(!mini);
              }}/>
          <FrameDeleteTooltip design={design}/>
          <ReactNative.View style={{"height":20}}/>
          <FrameDeleteModal design={design}/>
          <FrameNotify
            showNotify={showNotify}
            inbox={inbox}
            setShowNotify={setShowNotify}
            setInbox={setInbox}
            design={design}/>
        </ReactNative.View>
      </ui_static.Div>
    </n.Isolation>);
}

// component.web-pune-frame-demo/FrameMain [359] 
export function FrameMain(){
  let [design,setDesign] = React.useState({"type":"dark"});
  let bkey = JSON.stringify(design);
  let [frameConsole,setFrameConsole] = React.useState();
  let [isGuest,setIsGuest] = React.useState();
  let [routeKey,setRouteKey] = React.useState("one");
  let [showNotify,setShowNotify] = React.useState(true);
  let [mini,setMini] = React.useState(true);
  let [inbox,setInbox] = React.useState({
    "02":{
        "id":"02",
        "topic":"user.account/place",
        "title":"Order Placed",
        "message":"NBA-MVP-2022/S.CURRY @ Y 1.34",
        "sticky":true,
        "detail":{"id":"001-order"},
        "time":Date.now()
      },
    "01":{
        "id":"01",
        "topic":"user.account/password-changed",
        "title":"Password Changed",
        "message":"user: test00001",
        "time":Date.now()
      }
  });
  return (
    <ReactNative.View
      style={{
          "position":"absolute",
          "top":0,
          "bottom":0,
          "left":0,
          "right":0,
          "backgroundColor":"white",
          "padding":20,
          "overflow":"hidden"
        }}>
      <n.Isolation style={{"flex":1}}>
        <React.Fragment>
          <base_layout.LayoutMain
            consoleProps={{design,routeKey,setRouteKey}}
            consoleShow={frameConsole}
            mini={mini}
            header={FrameHeader}
            consoleView={FrameConsole}
            menuProps={{design,frameConsole,inbox,isGuest,mini,routeKey,setDesign,setFrameConsole,setInbox,setIsGuest,setMini,setRouteKey,setShowNotify,showNotify,"key":bkey}}
            design={design}
            headerProps={{setIsGuest,"key":bkey}}
            body={FrameBody}
            menu={FrameMenu}
            isGuest={isGuest}
            bodyProps={{inbox,mini,routeKey,setInbox,setMini,setRouteKey,setShowNotify,showNotify,"key":bkey}}/>
        </React.Fragment>
      </n.Isolation>
    </ReactNative.View>);
}

// component.web-pune-frame-demo/MODULE [433] 
export var MODULE = {
  "SampleText":SampleText,
  "FrameHeader":FrameHeader,
  "FrameConsole":FrameConsole,
  "FrameMenu":FrameMenu,
  "FrameNotify":FrameNotify,
  "FrameDeleteTooltip":FrameDeleteTooltip,
  "FrameDeleteModal":FrameDeleteModal,
  "FrameBody":FrameBody,
  "FrameMain":FrameMain,
  "MODULE":MODULE
};