import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as event_form from '../xt/event/base-form.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ext_form from '../js/react/ext-form.js'

import * as slim_select from './slim-select.js'

import * as ext_view from '../js/react/ext-model.js'

import * as slim_common from './slim-common.js'

import * as n from '../js/react-native.js'

// melbourne.slim-link/useViewLink [28] 
export function useViewLink(props){
  let {field,form,viewArgs,viewKey,viewOpts,views} = props;
  let links = ext_view.listenView(views[viewKey],"success");
  let {lookup,results} = links;
  let args = null;
  let link_id = ext_form.listenFieldValue(form,field);
  React.useEffect(function (){
    if(data.not_emptyp(results) && lib.nilp(link_id)){
      event_form.set_field(form,field,data.id_fn(data.first(results)));
    }
  },[results]);
  if(viewArgs){
    let data = ext_form.listenFormData(form);
    args = viewArgs(data,props);
    ext_view.useRefreshArgs(views[viewKey],args,viewOpts || {"remote":"none"});
  }
  return {args,links};
}

// melbourne.slim-link/FormLinkDropdown [57] 
export function FormLinkDropdown(props){
  let aprops = Object.assign({},props,props.fieldProps);
  let {field,form,viewArgs,viewKey,viewOpts,viewTemplate,viewValueFn,views} = aprops;
  let {args,links} = useViewLink(aprops);
  return React.createElement(slim_select.FormDropdown,Object.assign({},{},props,{
    "key":JSON.stringify(args),
    "data":links.results,
    "fieldProps":{
        "valueFn":data.id_fn,
        "format":function (id){
            return data.template_entry(data.get_in(links,["lookup",id]),viewTemplate);
          }
      }
  }));
}

// melbourne.slim-link/FormLinkReadOnly [81] 
export function FormLinkReadOnly(props){
  let {field,form,viewArgs,viewKey,viewOpts,viewTemplate,views} = Object.assign({},props,props.fieldProps);
  let {args,links} = useViewLink({field,form,viewArgs,viewKey,viewOpts,views});
  return React.createElement(slim_common.FormReadOnly,Object.assign({},props,{
    "template":function (e){
        return data.template_entry(data.get_in(links,["lookup",e[field]]),viewTemplate);
      }
  }));
}

// melbourne.slim-link/useViewLinkEntry [104] 
export function useViewLinkEntry({viewArgs,viewKey,viewOpts,views},entry,field){
  let links = ext_view.listenView(views[viewKey],"success");
  let {lookup,results} = links;
  let args = null;
  if(viewArgs){
    args = viewArgs(entry);
    ext_view.useRefreshArgs(views[viewKey],args,viewOpts || {});
  }
  return {args,links};
}

// melbourne.slim-link/FormLinkEntryReadOnly [126] 
export function FormLinkEntryReadOnly(props){
  let {entry,field,viewArgs,viewKey,viewOpts,viewTemplate,views} = Object.assign({},props,props.fieldProps);
  let {args,links} = useViewLinkEntry({viewArgs,viewKey,viewOpts,views},entry,field);
  return React.createElement(slim_common.FormReadOnly,Object.assign({},props,{
    "template":function (e){
        return data.template_entry(data.get_in(links,["lookup",e[field]]),viewTemplate);
      }
  }));
}

// melbourne.slim-link/MODULE [148] 
export var MODULE = {
  "useViewLink":useViewLink,
  "FormLinkDropdown":FormLinkDropdown,
  "FormLinkReadOnly":FormLinkReadOnly,
  "useViewLinkEntry":useViewLinkEntry,
  "FormLinkEntryReadOnly":FormLinkEntryReadOnly,
  "MODULE":MODULE
};