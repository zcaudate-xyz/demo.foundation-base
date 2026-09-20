import React from 'react'

import * as ReactNative from 'react-native'

import k from '../../xt/lang/base-lib'

import r from '../react'

import event_animate from '../../xt/lang/event-animate'

// js.react-native.animate/isAnimatedValue [99] 
function isAnimatedValue(x){
  return (null != x) && k.objp(x["_listeners"]);
}

// js.react-native.animate/createTransition [110] 
function createTransition(indicator,tparams,[prev,curr],tf){
  return function (callback){
    if(indicator._value == curr){
      return;
    }
    let fparams = tparams[[prev,curr]] || tparams["default"] || {};
    let {type = "timing",onChange} = fparams;
    let f = {
      "timing":ReactNative.Animated.timing,
      "spring":ReactNative.Animated.spring,
      "decay":ReactNative.Animated.decay
    }[type];
    let params = Object.assign({"toValue":tf(curr),"useNativeDriver":false},fparams);
    let anim = f(indicator,params);
    anim.start(callback);
    return anim;
  };
}

// js.react-native.animate/webUnitlessStyle
function webUnitlessStyle(key){
  return key == "aspectRatio" ||
    key == "flex" ||
    key == "flexGrow" ||
    key == "flexShrink" ||
    key == "fontWeight" ||
    key == "lineHeight" ||
    key == "opacity" ||
    key == "order" ||
    key == "zIndex";
}

function webTransformValue(key,value){
  if(Array.isArray(value)){
    return value.map(function (v){
      return webTransformValue(key,v);
    }).join(" ");
  }
  if(typeof value == "number" &&
     (key == "translate" ||
      key == "translate3d" ||
      key == "translateX" ||
      key == "translateY" ||
      key == "translateZ" ||
      key == "perspective")){
    return String(value) + "px";
  }
  if(typeof value == "number" &&
     (key == "rotate" ||
      key == "rotateX" ||
      key == "rotateY" ||
      key == "rotateZ" ||
      key == "skewX" ||
      key == "skewY")){
    return String(value) + "deg";
  }
  return value;
}

function webTransform(value){
  let out = [];
  let entries = Array.isArray(value) ? value : [value];
  entries.forEach(function (entry){
    if(entry && typeof entry == "object"){
      Object.keys(entry).forEach(function (key){
        out.push(key + "(" + webTransformValue(key,entry[key]) + ")");
      });
    }
  });
  return out.join(" ");
}

function webStyleValue(key,value){
  if(key == "transform"){
    return webTransform(value);
  }
  if(typeof value == "number" && !webUnitlessStyle(key)){
    return String(value) + "px";
  }
  return value;
}

function webStyle(value){
  let out = {};
  let entries = Array.isArray(value) ? value : [value];
  entries.forEach(function (entry){
    if(entry && typeof entry == "object"){
      Object.assign(out,entry);
    }
  });
  Object.keys(out).forEach(function (key){
    out[key] = webStyleValue(key,out[key]);
  });
  return out;
}

function setPropsWeb(elem,props){
  if(!elem || !elem.style){
    return false;
  }
  Object.keys(props || {}).forEach(function (key){
    let value = props[key];
    if(key == "style" && value && typeof value == "object"){
      Object.assign(elem.style,webStyle(value));
    }
    else if(key == "text" &&
            ((elem.tagName || "").toUpperCase() == "INPUT" ||
             (elem.tagName || "").toUpperCase() == "TEXTAREA")){
      elem.value = value;
    }
    else if(key == "text"){
      elem.textContent = value;
    }
    else{
      elem[key] = value;
    }
  });
  return true;
}

function getNativePropsTarget(elem){
  let target = elem;
  if(target && typeof target.getNativeRef == "function"){
    try{
      let nativeRef = target.getNativeRef();
      if(nativeRef){
        target = nativeRef;
      }
    }
    catch(e){}
  }
  if(target &&
     typeof target.setNativeProps != "function" &&
     typeof target.getNode == "function"){
    try{
      let nativeRef = target.getNode();
      if(nativeRef){
        target = nativeRef;
      }
    }
    catch(e){}
  }
  if(target &&
     typeof target.setNativeProps != "function" &&
     target._component){
    target = target._component;
  }
  return target;
}

function callNativeProps(elem,props){
  if(elem && typeof elem.setNativeProps == "function"){
    try{
      elem.setNativeProps(props);
      return true;
    }
    catch(e){}
  }
  return false;
}

function setPropsNative(elem,props){
  let target = getNativePropsTarget(elem);
  if(callNativeProps(target,props)){
    return true;
  }
  if(target != elem && callNativeProps(elem,props)){
    return true;
  }
  return false;
}

// js.react-native.animate/IMPL [133] 
var IMPL = {
  "create_val":function (v){
    return React.useCallback(new ReactNative.Animated.Value(v),[]);
  },
  "add_listener":function (aval,f){
    return aval.addListener(f);
  },
  "get_value":("web" == ReactNative.Platform.OS) ? function (aval){
    if(Number.isInteger(aval._value)){
      return aval._value;
    }
    else{
      return Math.round(aval._value * 10) / 10;
    }
  } : function (aval){
    if(Number.isInteger(aval._value)){
      return aval._value;
    }
    else{
      return Math.round(aval._value * 20) / 20;
    }
  },
  "set_value":function (aval,v){
    return aval.setValue(v);
  },
  "set_props":function (elem,props){
    if(ReactNative.Platform.OS == "web" && elem && elem.style){
      return setPropsWeb(elem,props);
    }
    return setPropsNative(elem,props);
  },
  "is_animated":isAnimatedValue,
  "create_transition":createTransition,
  "stop_transition":function (anim){
    return anim.stop();
  }
};

// js.react-native.animate/derive [163] 
function derive(f,arr){
  return event_animate.new_derived(IMPL,f,arr);
}

// js.react-native.animate/listenSingle [169] 
function listenSingle(ref,ind,f = function (){
  return {};
}){
  return event_animate.listen_single(IMPL,ref,ind,f);
}

// js.react-native.animate/useListenSingle [177] 
function useListenSingle(ind,f){
  let ref = React.useRef();
  React.useEffect(function (){
    listenSingle(ref,ind,f);
  },[]);
  return ref;
}

// js.react-native.animate/listenArray [185] 
function listenArray(ref,arr,f){
  return event_animate.listen_array(IMPL,ref,arr,f);
}

// js.react-native.animate/useListenArray [191] 
function useListenArray(arr,f){
  let ref = React.useRef();
  React.useEffect(function (){
    listenArray(ref,arr,f);
  },[]);
  return ref;
}

// js.react-native.animate/listenMap [200] 
function listenMap(ref,m,f){
  return event_animate.listen_map(IMPL,ref,m,f);
}

// js.react-native.animate/listenTransformations [206] 
function listenTransformations(ref,indicators,transformations,getChord){
  return event_animate.listen_transformations(IMPL,ref,indicators,transformations,getChord);
}

// js.react-native.animate/runWithCancel [212] 
function runWithCancel(animateFn,progressing,progressFn){
  return event_animate.run_with_cancel(IMPL,animateFn,progressing,progressFn);
}

// js.react-native.animate/runWithChained [218] 
function runWithChained(type,animateFn,progressing,progressFn){
  return event_animate.run_with_chained(IMPL,type,animateFn,progressing,progressFn);
}

// js.react-native.animate/runWith [224] 
function runWith(type,animateFn,progressing,progressFn){
  return event_animate.run_with(IMPL,type,animateFn,progressing,progressFn);
}

// js.react-native.animate/useProgess [234] 
function useProgess(callback){
  let progressing = React.useCallback(event_animate.new_progressing(),[]);
  let progressFn = React.useCallback(function (info){
    if(callback){
      callback(progressing,info);
    }
  },[]);
  return [progressing,progressFn];
}

// js.react-native.animate/useBinaryIndicator [244] 
function useBinaryIndicator(flag,tparams,callback,type){
  tparams = (tparams || {});
  let [progressing,progressFn] = useProgess(callback);
  let {indicator,trigger_fn} = React.useCallback(
    event_animate.make_binary_indicator(IMPL,flag,tparams,type || "cancel",progressing,progressFn),
    []
  );
  React.useEffect(function (){
    trigger_fn(flag);
  },[flag]);
  return indicator;
}

// js.react-native.animate/usePressIndicator [263] 
function usePressIndicator(flag,tparams,callback){
  return useBinaryIndicator(flag,tparams,callback,"chained-one");
}

// js.react-native.animate/useLinearIndicator [271] 
function useLinearIndicator(value,tparams,callback,type,checkFn){
  tparams = (tparams || {});
  let [progressing,progressFn] = useProgess(callback);
  let prev = React.useRef(value);
  let {indicator,trigger_fn} = React.useCallback(event_animate.make_linear_indicator(IMPL,value,function (){
    return prev.current;
  },function (value){
    return prev.current = value;
  },tparams,type || "chained-all",progressing,progressFn,checkFn),[]);
  React.useEffect(function (){
    trigger_fn(value);
  },[value]);
  return indicator;
}

// js.react-native.animate/useIndexIndicator [296] 
function useIndexIndicator(value,tparams,callback){
  return useLinearIndicator(value,tparams,callback,"cancel");
}

// js.react-native.animate/useCircularIndicator [304] 
function useCircularIndicator(value,tparams,callback,type,modulo,checkFn){
  tparams = (tparams || {});
  let [progressing,progressFn] = useProgess(callback);
  let prev = React.useRef(value);
  let {indicator,trigger_fn} = React.useCallback(event_animate.make_circular_indicator(IMPL,value,function (){
    return prev.current;
  },function (value){
    return prev.current = value;
  },tparams,type || "cancel",modulo,progressing,progressFn,checkFn),[]);
  React.useEffect(function (){
    trigger_fn(value);
  },[value]);
  return indicator;
}

// js.react-native.animate/usePosition [331] 
function usePosition({length,max = 10,min = 0,step = 1,value,setValue,flip}){
  let {forwardFn,reverseFn} = r.convertPosition(
    Object.assign({length,step},flip ? {"max":min,"min":max} : {max,min})
  );
  let position = React.useCallback(new ReactNative.Animated.Value(forwardFn(value)),[]);
  let prev = React.useRef();
  React.useEffect(function (){
    position.addListener(function (e){
      let nvalue = reverseFn(position._value);
      if(prev.current != nvalue){
        setValue(nvalue);
        prev.current = nvalue;
      }
    });
  },[]);
  return {forwardFn,position,reverseFn};
}

// js.react-native.animate/useRange [362] 
function useRange({
  length,
  max = 10,
  min = 0,
  step = 1,
  lower = 0,
  setLower,
  upper = 1,
  setUpper
}){
  let {forwardFn,reverseFn} = r.convertPosition({length,max,min,step});
  if(upper < lower){
    upper = (lower + step);
  }
  let positionUpper = React.useCallback(new ReactNative.Animated.Value(forwardFn(upper)),[]);
  let prevUpper = React.useRef();
  let positionLower = React.useCallback(new ReactNative.Animated.Value(forwardFn(lower)),[]);
  let prevLower = React.useRef();
  React.useEffect(function (){
    positionUpper.addListener(function (e){
      let nupper = reverseFn(positionUpper._value);
      if((prevUpper.current != nupper) && (lower <= nupper)){
        setUpper(nupper);
        prevUpper.current = nupper;
      }
    });
    positionLower.addListener(function (e){
      let nlower = reverseFn(positionLower._value);
      if((prevLower.current != nlower) && (nlower <= upper)){
        setLower(nlower);
        prevLower.current = nlower;
      }
    });
  },[]);
  return {forwardFn,positionLower,positionUpper,reverseFn};
}

// js.react-native.animate/useShowing [401] 
function useShowing(visible,indicatorParams,isMounted,onComplete){
  let vindicator = useBinaryIndicator(visible,indicatorParams);
  let [showing,setShowing] = React.useState(visible);
  let showingRef = r.useFollowRef(showing);
  React.useEffect(function (){
    if(visible){
      setShowing(true);
    }
  },[visible]);
  React.useEffect(function (){
    vindicator.addListener(function (){
      if(isMounted()){
        if(vindicator._value == 0){
          if(onComplete){
            onComplete(0);
          }
          if(showingRef.current){
            showingRef.current = false;
            setTimeout(function (){
              new Promise(function (){
                if(isMounted()){
                  setShowing(false);
                }
              });
            },100);
          }
        }
        if(vindicator._value == 1){
          if(onComplete){
            onComplete(1);
          }
        }
      }
    });
  },[]);
  return [visible || showing,vindicator];
}

var MODULE = {
  "isAnimatedValue":isAnimatedValue,
  "createTransition":createTransition,
  "IMPL":IMPL,
  "derive":derive,
  "listenSingle":listenSingle,
  "useListenSingle":useListenSingle,
  "listenArray":listenArray,
  "useListenArray":useListenArray,
  "listenMap":listenMap,
  "listenTransformations":listenTransformations,
  "runWithCancel":runWithCancel,
  "runWithChained":runWithChained,
  "runWith":runWith,
  "useProgess":useProgess,
  "useBinaryIndicator":useBinaryIndicator,
  "usePressIndicator":usePressIndicator,
  "useLinearIndicator":useLinearIndicator,
  "useIndexIndicator":useIndexIndicator,
  "useCircularIndicator":useCircularIndicator,
  "usePosition":usePosition,
  "useRange":useRange,
  "useShowing":useShowing
};

export default MODULE