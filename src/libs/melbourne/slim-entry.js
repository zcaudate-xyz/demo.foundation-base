import React from 'react'

import * as ReactNative from 'react-native'

import * as event_route from '../xt/event/base-route.js'

import * as tree from '../xt/lang/common-tree.js'

import * as data from '../xt/lang/common-data.js'

import * as ui_text_dialog from './ui-text-dialog.js'

import * as ui_static from './ui-static.js'

import * as slim_submit from './slim-submit.js'

import * as ui_dropdown from './ui-dropdown.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as slim_link from './slim-link.js'

import * as ext_form from '../js/react/ext-form.js'

import * as base_font from './base-font.js'

import * as slim_image from './slim-image.js'

import * as slim_select from './slim-select.js'

import * as ui_text from './ui-text.js'

import * as slim_number from './slim-number.js'

import * as ui_util from '../js/react-native/ui-util.js'

import * as slim_common from './slim-common.js'

import * as n from '../js/react-native.js'

import * as slim_time from './slim-time.js'

import * as string from '../xt/lang/common-string.js'

// melbourne.slim-entry/EntryImplNotFound [37] 
export function EntryImplNotFound({design}){
  return (
    <ui_text.H4 design={design}>IMPL TYPE NOT FOUND</ui_text.H4>);
}

// melbourne.slim-entry/EntryFree [48] 
export function EntryFree(props){
  let {impl,...rprops} = props;
  let {component,...rimpl} = impl;
  return React.createElement(component,Object.assign(rprops,rimpl,{"impl":rimpl}));
}

// melbourne.slim-entry/EntryContentRaw [61] 
export function EntryContentRaw(props){
  let {design,entry,impl} = props;
  return React.createElement(
    ui_static.Text,
    Object.assign({design,"style":{"margin":10}},impl),
    n.format_entry(entry)
  );
}

// melbourne.slim-entry/EntryContentRawForm [76] 
export function EntryContentRawForm(props){
  let {design,form} = props;
  let data = ext_form.listenFormData(form);
  return React.createElement(
    ui_static.Text,
    {design,"style":{"margin":10}},
    n.format_entry(data)
  );
}

// melbourne.slim-entry/EntryContentFill [89] 
export function EntryContentFill(props){
  return (
    <n.Fill/>);
}

// melbourne.slim-entry/entryLayoutDiv [96] 
export function entryLayoutDiv(props,defaultComponent,defaultStyle){
  let {impl,display,...rprops} = props;
  let {key,component,body,debug,style,variant,...iprops} = impl;
  let {...cprops} = data.get_in(props,["custom",key]) || {};
  return React.createElement(component || defaultComponent,Object.assign(rprops,{
    "style":[{"marginVertical":2},defaultStyle,style],
    "variant":variant || {"bg":null,"fg":null}
  },iprops,cprops),body);
}

// melbourne.slim-entry/EntryLayoutHorizontal [126] 
export function EntryLayoutHorizontal(props){
  return entryLayoutDiv(props,ui_static.Div,{"flexDirection":"row"});
}

// melbourne.slim-entry/EntryLayoutVertical [132] 
export function EntryLayoutVertical(props){
  return entryLayoutDiv(props,ui_static.Div,{});
}

// melbourne.slim-entry/EntryLayoutEnclosed [138] 
export function EntryLayoutEnclosed({impl,...rprops}){
  let {body,...iprops} = impl;
  return React.createElement(slim_common.FormEnclosed,Object.assign(rprops,iprops),(
    <n.Row style={{"flexDirection":"row-reverse"}}>{body}</n.Row>));
}

// melbourne.slim-entry/EntryLayoutPortal [150] 
export function EntryLayoutPortal({impl,...rprops}){
  let {body,...iprops} = impl;
  return React.createElement(n.Portal,Object.assign(rprops,iprops),body);
}

// melbourne.slim-entry/EntryLayoutPortalSink [161] 
export function EntryLayoutPortalSink({impl,...rprops}){
  let {body,...iprops} = impl;
  return React.createElement(n.PortalSink,Object.assign(rprops,iprops),body);
}

// melbourne.slim-entry/EntryLayoutScroll [172] 
export function EntryLayoutScroll({impl,...rprops}){
  let {body,...iprops} = impl;
  return React.createElement(ui_static.ScrollView,Object.assign(rprops,iprops),body);
}

// melbourne.slim-entry/EntryLayoutPopup [183] 
export function EntryLayoutPopup({impl = {},...rprops}){
  let {style,...iprops} = impl;
  return React.createElement(ui_text.ButtonTooltip,Object.assign(
    rprops,
    iprops,
    {"style":[{"padding":5},...data.arrayify(style)]}
  ));
}

// melbourne.slim-entry/EntryLayoutDebug [196] 
export function EntryLayoutDebug({impl = {},entry,...rprops}){
  let {body,...iprops} = impl;
  return React.createElement(
    ui_text.TextAlt,
    Object.assign(rprops,iprops,{"value":entry}),
    body
  );
}

// melbourne.slim-entry/EntryLayoutFadeIn [209] 
export function EntryLayoutFadeIn({impl = {},...rprops}){
  let {body,...iprops} = impl;
  return React.createElement(ui_util.FadeIn,Object.assign(rprops,iprops),body);
}

// melbourne.slim-entry/EntryContentSeparator [220] 
export function EntryContentSeparator(props){
  let {impl = {},...rprops} = props;
  let {key,header,variant = {"fg":{"key":"primary"}},...iprops} = impl;
  return (
    <ReactNative.View style={{"marginHorizontal":header ? 0 : 5}}>
      {React.createElement(
        ui_static.Separator,
        Object.assign(rprops,iprops,{variant},data.get_in(props,["custom",key]))
      )}
    </ReactNative.View>);
}

// melbourne.slim-entry/entryContentText [242] 
export function entryContentText(props,defaultComponent){
  let {impl,entry,design,...rprops} = props;
  let {key,component,variant,style,...iprops} = impl;
  let {template,format = lib.identity} = impl;
  let entryData = data.template_entry(entry,template,props) || "";
  let children = "";
  try{
    children = format(entryData,props);
  }
  catch(e){
    
  }
  if(!React.isValidElement(children) && !lib.is_stringp(children)){
    children = JSON.stringify(children);
  }
  let oprops = Object.assign(rprops,{entry},iprops,data.get_in(props,["custom",key]));
  return React.createElement(
    component || defaultComponent,
    Object.assign(oprops,{design,style,variant}),
    children
  );
}

// melbourne.slim-entry/EntryContentTitleH1 [276] 
export function EntryContentTitleH1(props){
  return entryContentText(props,ui_text.H1);
}

// melbourne.slim-entry/EntryContentTitleH2 [282] 
export function EntryContentTitleH2(props){
  return entryContentText(props,ui_text.H2);
}

// melbourne.slim-entry/EntryContentTitleH3 [288] 
export function EntryContentTitleH3(props){
  return entryContentText(props,ui_text.H3);
}

// melbourne.slim-entry/EntryContentTitleH4 [294] 
export function EntryContentTitleH4(props){
  return entryContentText(props,ui_text.H4);
}

// melbourne.slim-entry/EntryContentTitleH5 [300] 
export function EntryContentTitleH5(props){
  return entryContentText(props,ui_text.H5);
}

// melbourne.slim-entry/EntryContentTitle [306] 
export function EntryContentTitle(props){
  return entryContentText(props,ui_text.H6);
}

// melbourne.slim-entry/EntryContentBold [312] 
export function EntryContentBold(props){
  return entryContentText(props,ui_text.Bold);
}

// melbourne.slim-entry/EntryContentParagraph [318] 
export function EntryContentParagraph(props){
  return entryContentText(props,ui_text.P);
}

// melbourne.slim-entry/EntryContentIcon [324] 
export function EntryContentIcon(props){
  let {display,entry,impl} = props;
  let {key,template,format = lib.identity,...iprops} = impl;
  let {style,...cprops} = data.get_in(props,["custom",key]) || {};
  let name = format(data.template_entry(entry,template,props));
  return React.createElement(ui_text.Icon,Object.assign({},props,iprops,{name},cprops));
}

// melbourne.slim-entry/EntryContentImage [347] 
export function EntryContentImage(props){
  let {entry,impl} = props;
  let {key,text,style,image,color,format = lib.identity,...iprops} = impl;
  let {...cprops} = data.get_in(props,["custom",key]) || {};
  let textInput = text ? data.template_entry(entry,text.template,props) : "";
  let colorInput = lib.not_nilp(color) ? data.template_entry(entry,color.template,props) : "";
  let imageInput = image ? data.template_entry(entry,image.template,props) : null;
  return React.createElement(ui_text.Avatar,Object.assign({},props,{
    "color":lib.not_nilp(color),
    "text":textInput ? format(textInput) : null,
    "image":imageInput,
    "styleText":text ? data.get_in(props,["custom",text.key]) : null,
    "styleImage":data.not_emptyp(image) ? data.get_in(props,["custom",image.key]) : null,
    "style":[
        {"margin":5},
        (lib.not_nilp(color) && lib.nilp(imageInput)) ? {"backgroundColor":colorInput} : null,
        ...data.arrayify(style),
        data.arrayify(cprops.style)
      ]
  },iprops,cprops));
}

// melbourne.slim-entry/EntryContentPair [389] 
export function EntryContentPair(props){
  let {design,entry,impl,mini} = props;
  let {key,style,title,text,body} = impl;
  return (
    <n.Row style={[{"maxWidth":!mini ? 280 : null},style]}>
      <ReactNative.View style={{"width":!mini ? 80 : null,"marginRight":5}}>
        {title ? React.createElement(EntryContentTitle,Object.assign({},props,{
          "impl":Object.assign({"variant":{"fg":{"key":"neutral"}}},title)
        })) : null}
      </ReactNative.View>
      {data.not_emptyp(body) ? body : (text ? React.createElement(EntryContentParagraph,Object.assign({},props,{"impl":text})) : null)}
    </n.Row>);
}

// melbourne.slim-entry/FIELD_COMPONENTS [424] 
export var FIELD_COMPONENTS = {
  "link_readonly":slim_link.FormLinkEntryReadOnly,
  "link_dropdown":slim_link.FormLinkDropdown,
  "picker_basic":slim_select.FormPickerBasic,
  "date":slim_time.FormDate,
  "input_xl":slim_common.FormInputXL,
  "color":slim_common.FormColorInput,
  "readonly":slim_common.FormReadOnly,
  "time":slim_time.FormTime,
  "dropdown":slim_select.FormDropdown,
  "toggle":slim_common.FormToggleButton,
  "spinner":slim_number.FormSpinner,
  "chip":slim_common.FormChipInput,
  "enum_single":slim_common.FormEnumSingle,
  "datetime":slim_time.FormDatetime,
  "enum_multi":slim_common.FormEnumMulti,
  "image":slim_image.FormImage,
  "input":slim_common.FormInput,
  "spinner_basic":slim_number.FormSpinnerBasic,
  "picker":slim_select.FormPicker,
  "switch":slim_common.FormToggleSwitch,
  "slider":slim_number.FormSlider,
  "text":slim_common.FormTextArea
};

// melbourne.slim-entry/EntryContentField [453] 
export function EntryContentField(props){
  let {impl,display,...rprops} = props;
  let {component,key,field,fieldProps,...iprops} = impl;
  let FieldComponent = lib.is_stringp(component) ? FIELD_COMPONENTS[component] : (component || slim_common.FormInput);
  if(lib.is_functionp(fieldProps)){
    fieldProps = fieldProps(props);
  }
  let aprops = Object.assign(
    rprops,
    {field,fieldProps},
    {"className":"field-" + field},
    iprops,
    data.get_in(props,["custom",key])
  );
  return React.createElement(FieldComponent,aprops);
}

// melbourne.slim-entry/EntryLayoutFormFade [480] 
export function EntryLayoutFormFade(props){
  let {impl,form} = props;
  let {body,watch,template,...iprops} = impl;
  let {fieldData} = ext_form.listenFieldsData(form,watch);
  return React.createElement(ui_util.Fade,Object.assign(
    iprops,
    {"visible":data.template_entry(fieldData,template,props)}
  ),body);
}

// melbourne.slim-entry/EntryLayoutFormFold [496] 
export function EntryLayoutFormFold(props){
  let {impl,form} = props;
  let {body,watch,template,...iprops} = impl;
  let {fieldData} = ext_form.listenFieldsData(form,watch);
  return React.createElement(ui_util.Fold,Object.assign(
    iprops,
    {"visible":data.template_entry(fieldData,template,props)}
  ),(
    <ReactNative.View>{body}</ReactNative.View>));
}

// melbourne.slim-entry/entrySubmitType [512] 
export function entrySubmitType(submit,submitType){
  return (lib.is_functionp(submit) ? "custom" : null) || submitType || ((submit == "create") ? "form" : ((submit == "detail") ? "id" : ((submit == "modify") ? "modify" : "entry")));
}

// melbourne.slim-entry/entryOnSubmit [531] 
export function entryOnSubmit(submitFn,submitType,entry,form,props,args){
  args = (args || []);
  return lib.nilp(submitType) ? (function (){
    return null;
  }) : ((submitType == "custom") ? (function (){
    return submitFn(entry,props,...args);
  }) : ((submitType == "none") ? (function (){
    return submitFn(...args);
  }) : ((submitType == "id") ? (function (){
    return submitFn(entry.id,...args);
  }) : ((submitType == "entry") ? (function (){
    return submitFn(entry,...args);
  }) : ((submitType == "form") ? (function (){
    return submitFn(form.data,...args);
  }) : ((submitType == "modify") ? (function (){
    return submitFn(entry.id,form.data,...args);
  }) : (lib.is_functionp(submitType) ? (function (){
    return submitType(submitFn,entry,form);
  }) : (function (){
    return submitFn(entry && entry.id,...args);
  }))))))));
}

// melbourne.slim-entry/entryControlFn [566] 
export function entryControlFn(control,type,props){
  return (type == "list") ? control.setShowList : ((type == "modify") ? control.setShowModify : ((type == "detail") ? control.setShowDetail : ((type == "create") ? control.setShowCreate : (lib.is_functionp(type) ? (function (){
    type(control,props);
  }) : control[type]))));
}

// melbourne.slim-entry/entryOnControl [588] 
export function entryOnControl(control,controlType,entry,props){
  if(!controlType){
    return function (){
      return null;
    };
  }
  if(controlType == "back"){
    return function (){
      if(control.backAction){
        control.backAction(true);
        control.setBackAction(null);
      }
      else if(control.showModify){
        control.setShowModify(false);
      }
      else{
        control.setShowCreate(false);
        control.setShowDetail(null);
      }
    };
  }
  let onControl = entryControlFn(control,controlType,props);
  return entryOnSubmit(onControl,onControl,entry,props);
}

// melbourne.slim-entry/EntryContentControl [612] 
export function EntryContentControl(props){
  let {impl,entry,control = {},...rprops} = props;
  let {component = "minor",key,submitType,submit,popup,...iprops} = impl;
  let onSubmit = entryOnControl(control,submit,entry,props);
  let fprops = data.get_in(props,["custom",key]) || {};
  let ControlComponent = {"minor":ui_text.ButtonMinor,"accent":ui_text.ButtonAccent}[component] || component;
  let onPress = onSubmit;
  if(popup){
    onPress = (function (){
      onSubmit();
      props.setVisible(false);
    });
  }
  return React.createElement(ControlComponent,Object.assign(rprops,{
    "style":[{"width":null,"padding":5},base_font.fontP],
    "onPress":onPress
  },iprops,fprops));
}

// melbourne.slim-entry/EntryLayoutControl [649] 
export function EntryLayoutControl(props){
  let {impl,entry,control,...rprops} = props;
  let {submit,body,...iprops} = impl;
  let onSubmit = entryOnControl(control,submit,entry,props);
  return React.createElement(
    ReactNative.TouchableOpacity,
    Object.assign(iprops,{"onPress":onSubmit}),
    body
  );
}

// melbourne.slim-entry/EntryContentLink [663] 
export function EntryContentLink(props){
  let {impl,form,entry,route,...rprops} = props;
  let {component = "minor",key,template,...iprops} = impl;
  let fprops = data.get_in(props,["custom",key]) || {};
  let ControlComponent = {"minor":ui_text.ButtonMinor,"accent":ui_text.ButtonAccent}[component] || component;
  let url = data.template_entry(entry,template,props);
  let onPress = function (){
    event_route.set_url(route,url,true);
  };
  return React.createElement(ControlComponent,Object.assign(rprops,{
    "style":[{"width":null,"padding":5},base_font.fontP],
    "onPress":onPress
  },iprops,fprops));
}

// melbourne.slim-entry/EntryLayoutLink [696] 
export function EntryLayoutLink(props){
  let {impl,form,entry,route,...rprops} = props;
  let {key,template,body,...iprops} = impl;
  let url = data.template_entry(entry,template,props);
  let onPress = function (){
    event_route.set_url(route,url,true);
  };
  return React.createElement(
    ReactNative.TouchableOpacity,
    Object.assign(iprops,{"onPress":onPress}),
    body
  );
}

// melbourne.slim-entry/EntryContentRoute [715] 
export function EntryContentRoute(props){
  let {impl,mini,form,entry,control,...rprops} = props;
  let {component = "minor",key,submit,noMini,...iprops} = impl;
  let [route,setRoute] = [control[submit],control["set" + string.capitalize(submit)]];
  let fprops = data.get_in(props,["custom",key]) || {};
  if(!mini || noMini){
    let ControlComponent = {"minor":ui_text.TabsMinor,"accent":ui_text.TabsAccent}[component] || component;
    return React.createElement(ControlComponent,Object.assign(rprops,{
      "style":[{"width":null,"padding":5}],
      "value":route,
      "setValue":setRoute
    },iprops,fprops));
  }
  else{
    return React.createElement(ui_dropdown.Dropdown,Object.assign(rprops,{
      "style":[{"width":130,"padding":7}],
      "styleMenuItem":{"width":150},
      "value":route,
      "setValue":setRoute
    },iprops,fprops));
  }
}

// melbourne.slim-entry/EntryContentRouteToggle [765] 
export function EntryContentRouteToggle(props){
  let {impl,mini,form,entry,control = {},...rprops} = props;
  let {component = "minor",key,submit,valueOn,valueOff,...iprops} = impl;
  let [route,setRoute] = [control[submit],control["set" + string.capitalize(submit)]];
  let fprops = data.get_in(props,["custom",key]) || {};
  let ControlComponent = {"minor":ui_text.ToggleMinor,"accent":ui_text.ToggleAccent}[component] || component;
  return React.createElement(ControlComponent,Object.assign(rprops,{
    "style":[{"width":null,"padding":5}],
    "selected":route == valueOn,
    "onPress":function (){
        return setRoute((route == valueOn) ? valueOff : valueOn);
      }
  },iprops,fprops));
}

// melbourne.slim-entry/EntryContentAction [805] 
export function EntryContentAction(props){
  let {impl,form,entry,actions = {},...rprops} = props;
  let {
    key,
    custom,
    submitType,
    submit,
    args,
    confirm,
    control,
    style,
    popup,
    onSuccess,
    onError,
    ...iprops
  } = impl;
  let submitFn = lib.is_functionp(submit) ? submit : actions[submit];
  submitType = entrySubmitType(submit,submitType);
  let onSubmit = entryOnSubmit(submitFn,submitType,entry,form,props,args);
  onSuccess = (onSuccess || entryOnControl(props.control,data.get_in(control,["success"]),entry,props));
  let sprops = data.get_in(props,["custom",submit]) || {};
  let submitProps = r.useSubmitResult(Object.assign({onError,onSubmit,onSuccess},sprops));
  let {onActionPress} = submitProps;
  let onPress = onActionPress;
  if(popup){
    onPress = (function (){
      props.setVisible(false);
      onActionPress();
    });
  }
  let ActionComponent = (confirm == "tooltip") ? ui_text.ConfirmTooltip : ((confirm == "dialog") ? ui_text_dialog.ConfirmDialog : ((impl.component == "accent") ? ui_text.ButtonAccent : ui_text.ButtonMinor));
  let output = Object.assign(rprops,{
    "style":[{"width":null,"padding":5},base_font.fontP,style],
    "actions":actions,
    "onPress":onPress
  },iprops,submitProps,custom);
  return React.createElement(ActionComponent,output);
}

// melbourne.slim-entry/EntryContentSubmit [877] 
export function EntryContentSubmit(props){
  let {impl,form,actions = {},entry,...rprops} = props;
  let {
    key,
    control,
    explicit,
    keep,
    args,
    field,
    onSuccess,
    onError,
    submit,
    submitType,
    submitModify,
    submitField,
    ...iprops
  } = impl;
  form = (form || ext_form.makeForm(function (){
    return {};
  },{}));
  let sprops = data.get_in(props,["custom",submit]) || {};
  let fprops = data.get_in(props,["custom",key]) || {};
  let submitFn = lib.is_functionp(submit) ? submit : actions[submit];
  submitType = entrySubmitType(submit,submitType);
  let onSubmit = entryOnSubmit(submitFn,submitType,entry,form,props,args);
  onSuccess = (onSuccess || entryOnControl(props.control,data.get_in(control,["success"]),entry,props));
  let useSubmit = submitField ? slim_submit.useSubmitField : slim_submit.useSubmitForm;
  let submitProps = useSubmit(
    Object.assign({explicit,field,form,keep,onError,onSubmit,onSuccess},sprops)
  );
  let disabled = false;
  if(submitModify){
    disabled = (lib.is_arrayp(submitModify) ? tree.eq_nested(
      data.obj_pick(form.data,submitModify),
      data.obj_pick(entry || {},submitModify)
    ) : tree.eq_nested(form.data,entry));
  }
  let nprops = Object.assign(rprops,{disabled,form},iprops,fprops,submitProps);
  return React.createElement(slim_submit.SubmitLineActions,nprops);
}

// melbourne.slim-entry/EntryLayoutCard [951] 
export function EntryLayoutCard(props){
  let {design,impl,...rprops} = props;
  let {body,style,variant,...rimpl} = impl;
  let {avatar,footer,isHeader,main,right,title} = body;
  return (
    <ui_static.Div
      style={[{"flex":1},...data.arrayify(style)]}
      design={design}
      variant={variant}>
      <n.Row>
        {avatar}
        {avatar ? (
          <ReactNative.View style={{"width":5}}/>) : null}
        <ReactNative.View style={[{"flex":1},!isHeader ? {"marginTop":10} : null]}>
          {title ? (
            <React.Fragment>{title}<ReactNative.View style={{"height":5}}/></React.Fragment>) : null}
          {main}
          {(body && footer) ? (
            <ReactNative.View style={{"height":5}}/>) : null}
          {footer}
        </ReactNative.View>
        {right ? (
          <React.Fragment><ReactNative.View style={{"width":5}}/>{right}</React.Fragment>) : null}
      </n.Row>
    </ui_static.Div>);
}

// melbourne.slim-entry/EntryLayoutForm [996] 
export function EntryLayoutForm(props){
  let {impl,form,actions = {},entry,...rprops} = props;
  let {body,style} = impl;
  return (
    <ReactNative.View style={[{"display":"block","margin":5},style]}>{body}<ReactNative.View style={{"height":10}}/></ReactNative.View>);
}

// melbourne.slim-entry/ENTRY_PROPS [1015] 
export var ENTRY_PROPS = [
  "design",
  "variant",
  "mini",
  "miniTablet",
  "entry",
  "display",
  "custom",
  "form",
  "hooks",
  "route",
  "actions",
  "views",
  "control",
  "data",
  "parent",
  "visible",
  "setVisible"
];

// melbourne.slim-entry/ENTRY_COMPONENTS [1034] 
export var ENTRY_COMPONENTS = {
  "bold":EntryContentBold,
  "link_layout":EntryLayoutLink,
  "fade_in":EntryLayoutFadeIn,
  "popup":EntryLayoutPopup,
  "v":EntryLayoutVertical,
  "title_h1":EntryContentTitleH1,
  "portal":EntryLayoutPortal,
  "raw":EntryContentRaw,
  "free":EntryFree,
  "pair":EntryContentPair,
  "fill":EntryContentFill,
  "route_toggle":EntryContentRouteToggle,
  "submit":EntryContentSubmit,
  "field":EntryContentField,
  "debug":EntryLayoutDebug,
  "route":EntryContentRoute,
  "enclosed":EntryLayoutEnclosed,
  "icon":EntryContentIcon,
  "title":EntryContentTitle,
  "card":EntryLayoutCard,
  "portal_sink":EntryLayoutPortalSink,
  "raw_form":EntryContentRawForm,
  "scroll":EntryLayoutScroll,
  "title_h4":EntryContentTitleH4,
  "h":EntryLayoutHorizontal,
  "link":EntryContentLink,
  "control":EntryContentControl,
  "title_h3":EntryContentTitleH3,
  "title_h5":EntryContentTitleH5,
  "image":EntryContentImage,
  "action":EntryContentAction,
  "form_fold":EntryLayoutFormFold,
  "form":EntryLayoutForm,
  "title_h2":EntryContentTitleH2,
  "form_fade":EntryLayoutFormFade,
  "separator":EntryContentSeparator,
  "p":EntryContentParagraph,
  "control_layout":EntryLayoutControl
};

// melbourne.slim-entry/ENTRY_LAYOUT [1077] 
export var ENTRY_LAYOUT = {
  "link_layout":true,
  "popup":true,
  "v":true,
  "portal":true,
  "pair":true,
  "debug":true,
  "enclosed":true,
  "card":true,
  "portal_sink":true,
  "scroll":true,
  "h":true,
  "form_fold":true,
  "form":true,
  "form_fade":true,
  "control_layout":true,
  "fade_in":true
};

// melbourne.slim-entry/compileEntryPopup [1095] 
export function compileEntryPopup(props,compileFn){
  let {impl} = props;
  let eprops = data.obj_pick(props,ENTRY_PROPS);
  let body = tree.tree_walk(impl.body,lib.identity,function (e){
    if(lib.is_objectp(e) && ((e.type == "action") || (e.type == "control"))){
      return Object.assign({"popup":true},e);
    }
    else{
      return e;
    }
  });
  let mainComponent = React.useRef(function (mprops){
    let entryFn = function (impl,i){
      return compileFn(Object.assign({},mprops,{"key":impl.key || i},{impl}));
    };
    return (
      <ReactNative.View>{(body || []).map(entryFn)}</ReactNative.View>);
  }).current;
  return React.createElement(EntryLayoutPopup,Object.assign({mainComponent},props));
}

// melbourne.slim-entry/compileEntry [1124] 
export function compileEntry(props,EntryComponent){
  let {entry,display,components,key,views} = props;
  let eprops = data.obj_pick(props,ENTRY_PROPS);
  let impl = data.get_in(props,["impl"]) || {};
  if(React.isValidElement(impl)){
    return impl;
  }
  while(lib.is_functionp(impl.props)){
    impl = (impl.props(entry,props) || {});
  }
  let {type = "p"} = impl;
  let component = ENTRY_COMPONENTS[type] || EntryImplNotFound;
  let isLayout = ENTRY_LAYOUT[type];
  let isAlias = type == "alias";
  let isPopup = type == "popup";
  let showFn = function (impl,i){
    if(!impl){
      return false;
    }
    else if(impl.show){
      return impl.show(entry,props);
    }
    else if(impl.hide){
      return !impl.hide(entry,props);
    }
    else{
      return true;
    }
  };
  let entryFn = function (impl,i){
    return compileEntry(Object.assign({},eprops,{"key":impl.key || i},{impl}));
  };
  if(isAlias){
    let aliasComponent = components[impl.alias] || EntryComponent;
    return React.createElement(
      aliasComponent,
      Object.assign({"impl":display[impl.alias]},eprops)
    );
  }
  else if(isPopup){
    return compileEntryPopup(props,compileEntry);
  }
  else if(isLayout){
    let body = lib.is_arrayp(impl.body) ? impl.body.filter(showFn).map(entryFn) : (lib.is_objectp(impl.body) ? data.obj_map(data.obj_filter(impl.body,showFn),entryFn) : []);
    return React.createElement(
      component,
      Object.assign({"key":key,"impl":Object.assign({},impl,{body})},eprops)
    );
  }
  else{
    let oprops = Object.assign({impl,key,"views":props.views},eprops);
    return React.createElement(component,oprops);
  }
}

// melbourne.slim-entry/Entry [1202] 
export function Entry(props){
  return compileEntry(props,Entry);
}

// melbourne.slim-entry/MODULE [1208] 
export var MODULE = {
  "EntryImplNotFound":EntryImplNotFound,
  "EntryFree":EntryFree,
  "EntryContentRaw":EntryContentRaw,
  "EntryContentRawForm":EntryContentRawForm,
  "EntryContentFill":EntryContentFill,
  "entryLayoutDiv":entryLayoutDiv,
  "EntryLayoutHorizontal":EntryLayoutHorizontal,
  "EntryLayoutVertical":EntryLayoutVertical,
  "EntryLayoutEnclosed":EntryLayoutEnclosed,
  "EntryLayoutPortal":EntryLayoutPortal,
  "EntryLayoutPortalSink":EntryLayoutPortalSink,
  "EntryLayoutScroll":EntryLayoutScroll,
  "EntryLayoutPopup":EntryLayoutPopup,
  "EntryLayoutDebug":EntryLayoutDebug,
  "EntryLayoutFadeIn":EntryLayoutFadeIn,
  "EntryContentSeparator":EntryContentSeparator,
  "entryContentText":entryContentText,
  "EntryContentTitleH1":EntryContentTitleH1,
  "EntryContentTitleH2":EntryContentTitleH2,
  "EntryContentTitleH3":EntryContentTitleH3,
  "EntryContentTitleH4":EntryContentTitleH4,
  "EntryContentTitleH5":EntryContentTitleH5,
  "EntryContentTitle":EntryContentTitle,
  "EntryContentBold":EntryContentBold,
  "EntryContentParagraph":EntryContentParagraph,
  "EntryContentIcon":EntryContentIcon,
  "EntryContentImage":EntryContentImage,
  "EntryContentPair":EntryContentPair,
  "FIELD_COMPONENTS":FIELD_COMPONENTS,
  "EntryContentField":EntryContentField,
  "EntryLayoutFormFade":EntryLayoutFormFade,
  "EntryLayoutFormFold":EntryLayoutFormFold,
  "entrySubmitType":entrySubmitType,
  "entryOnSubmit":entryOnSubmit,
  "entryControlFn":entryControlFn,
  "entryOnControl":entryOnControl,
  "EntryContentControl":EntryContentControl,
  "EntryLayoutControl":EntryLayoutControl,
  "EntryContentLink":EntryContentLink,
  "EntryLayoutLink":EntryLayoutLink,
  "EntryContentRoute":EntryContentRoute,
  "EntryContentRouteToggle":EntryContentRouteToggle,
  "EntryContentAction":EntryContentAction,
  "EntryContentSubmit":EntryContentSubmit,
  "EntryLayoutCard":EntryLayoutCard,
  "EntryLayoutForm":EntryLayoutForm,
  "ENTRY_PROPS":ENTRY_PROPS,
  "ENTRY_COMPONENTS":ENTRY_COMPONENTS,
  "ENTRY_LAYOUT":ENTRY_LAYOUT,
  "compileEntryPopup":compileEntryPopup,
  "compileEntry":compileEntry,
  "Entry":Entry,
  "MODULE":MODULE
};