import React from 'react'

import * as ReactNative from 'react-native'

import * as ui_button from '../melbourne/ui-button.js'

import * as xtd from '../xt/lang/common-data.js'

import * as ui_static from '../melbourne/ui-static.js'

import * as ui_notify_events from '../js/react-native/ui-notify.js'

import * as r from '../js/react.js'

import * as ui_spinner from '../melbourne/ui-spinner.js'

import * as ui_text from '../melbourne/ui-text.js'

import * as ui_util from '../js/react-native/ui-util.js'

import * as n from '../js/react-native.js'

import * as ui_picker from '../melbourne/ui-picker.js'

// pune.ui-notify-base/getOutdated [35] 
export function getOutdated(events,duration){
  return Object.values(events).filter(function (e){
    return !e.sticky && ((duration + e.time) < Date.now());
  }).map(xtd.id_fn);
}

// pune.ui-notify-base/useOutdated [47] 
export function useOutdated({duration,events,setEvents}){
  let isMounted = r.useIsMounted();
  let refresh = r.useRefresh();
  let evictFn = function (ids){
    if(xtd.not_emptyp(ids)){
      setEvents(xtd.obj_omit(events,ids));
    }
  };
  React.useEffect(function (){
    if(0 < duration){
      if(xtd.not_emptyp(events)){
        new Promise(function (resolve,reject){
          setTimeout(function (){
            try{
              resolve(              (function (){
                              isMounted() ? refresh() : null;
                            })());
            }
            catch(e){
              reject(e);
            }
          },500);
        });
      }
      let outdated = getOutdated(events,duration);
      if(xtd.not_emptyp(outdated)){
        evictFn(outdated);
      }
    }
  },[duration,events,refresh]);
  return evictFn;
}

// pune.ui-notify-base/TopNotifyInner [68] 
export function TopNotifyInner({
  style,
  mini,
  design,
  variant,
  data = [],
  onClose = (function (){
  return null;
}),
  index = 0,
  setIndex = (function (){
  return null;
})
}){
  let fgMix = {"key":"background"};
  let bgMix = {"key":"neutral","mix":"primary","ratio":1};
  let __variant = Object.assign({
    "bg":bgMix,
    "fg":fgMix,
    "hovered":{"fg":{"raw":1},"bg":{"raw":1}},
    "pressed":{"fg":{"raw":1},"bg":{"raw":1}},
    "disabled":{"bg":bgMix,"fg":bgMix}
  },variant);
  return (
    <ui_static.Div
      design={design}
      variant={__variant}
      style={[
          {"height":60,"padding":5},
          mini ? {"borderRadius":0} : {"borderRadius":3,"width":350},
          ...xtd.arrayify(style)
        ]}>
      <n.Row>
        <ui_button.Button
          design={design}
          variant={__variant}
          style={{
              "paddingVertical":3,
              "paddingHorizontal":3,
              "borderRadius":0,
              "marginHorizontal":3
            }}
          text={(
              <ui_text.Icon
                key="close"
                design={design}
                variant={__variant}
                name="minus"
                size={15}/>)}
          onPress={function (){
              onClose();
            }}/>
        <ReactNative.View style={{"flex":1}}>
          <ui_picker.PickerValues
            key={data.length}
            design={design}
            variant={__variant}
            items={xtd.not_emptyp(data) ? data.map(xtd.key_fn("title")) : ["NO NOTIFICATIONS"]}
            style={{"width":300}}
            styleText={{"width":300,"fontWeight":"800","fontSize":13}}
            index={index}
            setIndex={setIndex}/>
        </ReactNative.View>
        <ReactNative.View>
          {(1 < data.length) ? (
            <n.Row style={{"alignItems":"center"}}>
              <ui_spinner.SpinnerControls
                min={0}
                iconProps={{"size":10}}
                key={data.length}
                variant={__variant}
                value={index}
                setValue={setIndex}
                style={{"borderRadius":0,"paddingHorizontal":3,"paddingVertical":3}}
                max={data.length - 1}
                decimal={0}
                design={design}
                step={1}>
                <ui_static.Text
                  design={design}
                  style={{"fontSize":11,"margin":5}}
                  variant={__variant}>{(index + 1) + " of " + data.length}
                </ui_static.Text>
              </ui_spinner.SpinnerControls>
            </n.Row>) : null}
        </ReactNative.View>
      </n.Row>
      <n.Row style={{"flex":1,"paddingLeft":5}}>
        <ui_static.Text
          design={design}
          variant={__variant}
          style={[{"position":"absolute","top":5,"fontSize":11}]}>{xtd.get_in(data,[index,"message"])}
        </ui_static.Text>
      </n.Row>
    </ui_static.Div>);
}

// pune.ui-notify-base/TopNotify [168] 
export function TopNotify({data,design,mini,onClose,variant}){
  let [index,setIndex] = React.useState(0);
  let visible = xtd.not_emptyp(data);
  let notifyElem = React.createElement(
    TopNotifyInner,
    {data,design,index,mini,onClose,setIndex,variant}
  );
  return mini ? React.createElement(ui_util.Fold,{visible},notifyElem) : React.createElement(
    ui_notify_events.Notify,
    {visible,"position":"bottom_left","transition":"from_bottom","margin":10},
    notifyElem
  );
}

// pune.ui-notify-base/MODULE [197] 
export var MODULE = {
  "getOutdated":getOutdated,
  "useOutdated":useOutdated,
  "TopNotifyInner":TopNotifyInner,
  "TopNotify":TopNotify,
  "MODULE":MODULE
};