import React from 'react'

import k from '../../xt/lang/base-lib'

import event_view from '../../xt/lang/event-view'

import r from '../react'

// js.react.ext-view/throttled-setter [12] 
function throttled_setter(setResult,delay){
  let throttle = {"val":null,"thread":null,"mounted":true};
  let throttled_fn = function (result){
    let t = Date.now();
    if(null != throttle["thread"]){
      throttle["val"] = result;
    }
    else{
      throttle["val"] = result;
      setResult(result);
      throttle["thread"] = new Promise(function (resolve,reject){
        setTimeout(function (){
          try{
            resolve(            (function (){
                          if((throttle["val"] != result) && throttle["mounted"]){
                            setResult(throttle["val"]);
                          }
                          delete throttle["thread"];
                        })());
          }
          catch(e){
            reject(e);
          }
        },delay);
      });
    }
  };
  return [throttled_fn,throttle];
}

// js.react.ext-view/refresh-view [37] 
function refresh_view(view,opts){
  let [context,disabled] = event_view.pipeline_prep(view,opts);
  let {acc} = context;
  return event_view.pipeline_run(context,disabled,function (handler_fn,context,{error,success}){
    return new Promise(function (resolve,reject){
      resolve(handler_fn(context));
    }).then(success).catch(error);
  },null,k.identity).then(function (){
    return acc;
  });
}

// js.react.ext-view/refresh-args [52] 
function refresh_args(view,args,opts){
  event_view.set_input(view,{"data":args});
  return refresh_view(view,opts);
}

// js.react.ext-view/refresh-view-remote [60] 
function refresh_view_remote(view,save_output,opts){
  if(k.get_in(view,["pipeline","remote","handler"])){
    let [context,disabled] = event_view.pipeline_prep(view,opts);
    let {acc} = context;
    return event_view.pipeline_run_remote(context,save_output,function (handler_fn,context,{error,success}){
      return new Promise(function (resolve,reject){
        resolve(handler_fn(context));
      }).then(success).catch(error);
    },null,k.identity).then(function (){
      return acc;
    });
  }
}

// js.react.ext-view/refresh-args-remote [76] 
function refresh_args_remote(view,args,save_output,opts){
  event_view.set_input(view,{"data":args});
  return refresh_view_remote(view,save_output,opts);
}

// js.react.ext-view/refresh-view-sync [83] 
function refresh_view_sync(view,save_output,opts){
  if(k.get_in(view,["pipeline","sync","handler"])){
    let [context,disabled] = event_view.pipeline_prep(view,opts);
    let {acc} = context;
    return event_view.pipeline_run_sync(context,save_output,function (handler_fn,context,{error,success}){
      return new Promise(function (resolve,reject){
        resolve(handler_fn(context));
      }).then(success).catch(error);
    },null,k.identity).then(function (){
      return acc;
    });
  }
}

// js.react.ext-view/refresh-args-sync [98] 
function refresh_args_sync(view,args,save_output,opts){
  event_view.set_input(view,{"data":args});
  return refresh_view_sync(view,save_output,opts);
}

// js.react.ext-view/make-view [105] 
function make_view(main_handler,pipeline,default_args,default_output,default_process,options){
  let view = event_view.create_view(
    main_handler,
    pipeline,
    default_args,
    default_output,
    default_process,
    options
  );
  event_view.init_view(view);
  view["init"] = refresh_view(view);
  return view;
}

// js.react.ext-view/makeViewRaw [125] 
function makeViewRaw({defaultArgs,defaultOutput,defaultProcess,handler,options,pipeline}){
  return make_view(
    handler,
    pipeline || {},
    defaultArgs,
    defaultOutput,
    defaultProcess,
    options
  );
}

// js.react.ext-view/makeView [142] 
function makeView({defaultArgs,defaultOutput,defaultProcess,handler,options,pipeline}){
  return React.useCallback(makeViewRaw(
    {defaultArgs,defaultOutput,defaultProcess,handler,options,pipeline}
  ),[]);
}

// js.react.ext-view/TYPES [159] 
var TYPES = {
  "input":[event_view.get_input,"current"],
  "output":[event_view.get_output,"current"],
  "pending":[event_view.get_output,"pending"],
  "elapsed":[event_view.get_output,"elapsed"],
  "disabled":[event_view.get_output,"disabled"],
  "success":[event_view.get_success,null,"output"]
};

// js.react.ext-view/initViewBase [167] 
function initViewBase(view,dest_key,{getResult,meta,pred,resultRef,resultTag,setResult}){
  let {resultFn,resultPrint} = meta || {};
  React.useEffect(function (){
    let listener_id = Math.random().toString(36).substr(2,4 || 4);
    event_view.add_listener(view,listener_id,function (event){
      let nresult = getResult();
      if(((null == resultTag) || (resultTag == event.data.tag)) && (("view.output" != event.type) || (event.data.type == (dest_key || "output"))) && !k.eq_nested(resultRef.current,nresult)){
        setResult(nresult);
      }
      if(resultFn){
        resultFn(event);
      }
      if(k.fnp(resultPrint)){
        resultPrint({event,nresult,resultTag});
      }
    },meta,pred);
    return function (){
      return event_view.remove_listener(view,listener_id);
    };
  },[]);
}

// js.react.ext-view/listenView [205] 
function listenView(view,type,meta,dest_key,tag_key){
  let [tfn,tkey,tevent] = TYPES[type];
  tevent = (tevent || type);
  let getResult = function (){
    let out = tfn(view);
    return k.clone_shallow(tkey ? out[tkey] : out);
  };
  let [result,setResult] = React.useState(getResult);
  let resultRef = r.useFollowRef(result);
  initViewBase(view,dest_key,{getResult,meta,resultRef,setResult,"resultTag":tag_key,"resultFn":k.get_in(meta,"resultFn"),"pred":function (event){
      return event["type"] == ("view." + tevent);
    }});
  return result;
}

// js.react.ext-view/listenViewOutput [231] 
function listenViewOutput(view,types,meta,dest_key,tag_key){
  let getOutput = function (){
    return k.obj_clone(event_view.get_output(view,dest_key));
  };
  let [output,setOutput] = React.useState(getOutput);
  let wrap = r.useIsMountedWrap();
  let outputRef = r.useFollowRef(output);
  let pred = function (event){
    return k.arr_some(types,function (type){
      return event["type"] == ("view." + type);
    });
  };
  initViewBase(
    view,
    dest_key,
    {meta,pred,"setResult":wrap(setOutput),"getResult":getOutput,"resultRef":outputRef,"resultTag":tag_key,"resultFn":k.get_in(meta,"resultFn")}
  );
  return output;
}

// js.react.ext-view/listenViewThrottled [257] 
function listenViewThrottled(view,delay,meta,dest_key){
  let getResult = function (){
    return k.clone_shallow(event_view.get_success(view));
  };
  let [result,setResult] = React.useState(getResult);
  let resultRef = r.useFollowRef(result);
  React.useEffect(function (){
    let listener_id = Math.random().toString(36).substr(2,4 || 4);
    let [setThrottled,throttle] = throttled_setter(setResult,delay);
    event_view.add_listener(view,listener_id,function (){
      let nresult = getResult();
      if(!(resultRef.current == nresult)){
        setThrottled(nresult);
      }
    },meta,function (event){
      return "view.output" == event["type"];
    });
    return function (){
      throttle["mounted"] = false;
      event_view.remove_listener(view,listener_id);
    };
  },[]);
  return result;
}

// js.react.ext-view/wrap-pending [286] 
function wrap_pending(f,with_pending){
  if(with_pending){
    return f;
  }
  else{
    return function (view,...args){
      event_view.set_pending(view,true);
      return new Promise(function (resolve,reject){
        try{
          resolve(          (function (){
                      return f(view,...args);
                    })());
        }
        catch(e){
          reject(e);
        }
      }).then(function (res){
        event_view.set_pending(view,false);
        return res;
      });
    };
  }
}

// js.react.ext-view/refreshArgsFn [301] 
function refreshArgsFn(view,args,opts){
  if(k.arr_every(args,function (x){
    return null != x;
  })){
    return refresh_args(view,args,opts).then(function (acc){
      let [ok,data] = k.get_in(acc,["main"]);
      if(!ok){
        throw data;
      }
      if(opts.remote == "always"){
        return wrap_pending(refresh_args_remote,opts.with_pending)(view,args,true,opts);
      }
      else if(opts.remote == "none"){
        return null;
      }
      else{
        if((null == opts.remote_check) || opts.remote_check(args)){
          if(k.not_emptyp(data)){
            return refresh_args_sync(view,args,false,opts);
          }
          else{
            return refresh_args_remote(view,args,true,opts);
          }
        }
      }
    });
  }
  else{
    return function (){
      return event_view.set_output(view,null);
    };
  }
}

// js.react.ext-view/useRefreshArgs [329] 
function useRefreshArgs(view,args,opts){
  opts = (opts || {});
  React.useEffect(function (){
    return refreshArgsFn(view,args,opts);
  },[JSON.stringify(args)]);
}

// js.react.ext-view/listenSuccess [338] 
function listenSuccess(view,args,opts,meta,tag_key){
  opts = (opts || {});
  let output = r.useStablized(
    listenView(view,"success",meta,opts.dest,tag_key),
    opts.stablized
  );
  useRefreshArgs(view,args,opts);
  return (opts.then || k.identity)(output || opts.default);
}

// js.react.ext-view/handler-base [354] 
function handler_base(handler,m){
  return k.obj_assign_nested({
    "handler":handler,
    "defaultArgs":[],
    "defaultInit":{"disabled":true}
  },m);
}

// js.react.ext-view/oneshot-fn [365] 
function oneshot_fn(){
  let v = true;
  return function (ctx){
    if(v){
      v = false;
      return true;
    }
    return false;
  };
}

// js.react.ext-view/input-disabled? [376] 
function input_disabledp({input}){
  return (null == input) || input["disabled"];
}

// js.react.ext-view/input-data [383] 
function input_data({input}){
  return input && input["data"];
}

// js.react.ext-view/input-data-nil? [389] 
function input_data_nilp({input}){
  return (null == input) || input["disabled"] || (null == input["data"]);
}

// js.react.ext-view/output-empty? [397] 
function output_emptyp({view}){
  return k.is_emptyp(event_view.get_current(view));
}

var MODULE = {
  "throttled_setter":throttled_setter,
  "refresh_view":refresh_view,
  "refresh_args":refresh_args,
  "refresh_view_remote":refresh_view_remote,
  "refresh_args_remote":refresh_args_remote,
  "refresh_view_sync":refresh_view_sync,
  "refresh_args_sync":refresh_args_sync,
  "make_view":make_view,
  "makeViewRaw":makeViewRaw,
  "makeView":makeView,
  "TYPES":TYPES,
  "initViewBase":initViewBase,
  "listenView":listenView,
  "listenViewOutput":listenViewOutput,
  "listenViewThrottled":listenViewThrottled,
  "wrap_pending":wrap_pending,
  "refreshArgsFn":refreshArgsFn,
  "useRefreshArgs":useRefreshArgs,
  "listenSuccess":listenSuccess,
  "handler_base":handler_base,
  "oneshot_fn":oneshot_fn,
  "input_disabledp":input_disabledp,
  "input_data":input_data,
  "input_data_nilp":input_data_nilp,
  "output_emptyp":output_emptyp
};

export default MODULE