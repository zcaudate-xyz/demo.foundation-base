import * as data from '../xt/lang/common-data.js'

import * as event_form from '../xt/event/base-form.js'

import * as addon_validation from './addon-validation.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ext_form from '../js/react/ext-form.js'

import * as slim_common from './slim-common.js'

import * as n from '../js/react-native.js'

import * as ui_input from './ui-input.js'

// melbourne.slim-time/FormTime [36] 
export function FormTime({
  design,
  mini,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  field,
  fieldProps,
  minWidth,
  hideValidation
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"time","fn/type":"field"},meta)
  );
  return (
    <slim_common.FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_input.Input
        onChangeText={function (v){
            event_form.set_field(form,field,v);
            event_form.validate_field(form,field);
          }}
        value={(lib.nilp(value) ? "" : value).toString()}
        indicatorParams={{"focusing":{"default":{"duration":100}}}}
        variant={variant}
        highlighted={result["status"] == "errored"}
        addons={[
            !hideValidation ? addon_validation.addonValidation({
              result,
              design,
              "style":{"position":"absolute","right":0,"top":-5}
            }) : null
          ]}
        outlined={false}
        onFocus={function (){
            event_form.validate_field(form,field);
          }}
        design={design}
        {...fieldProps}/>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-time/FormDate [83] 
export function FormDate({
  design,
  mini,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  field,
  fieldProps,
  minWidth,
  hideValidation
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"time","fn/type":"field"},meta)
  );
  return (
    <slim_common.FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_input.Input
        onChangeText={function (v){
            event_form.set_field(form,field,v);
            event_form.validate_field(form,field);
          }}
        value={(lib.nilp(value) ? "" : value).toString()}
        indicatorParams={{"focusing":{"default":{"duration":100}}}}
        variant={variant}
        highlighted={result["status"] == "errored"}
        addons={[
            !hideValidation ? addon_validation.addonValidation({
              result,
              design,
              "style":{"position":"absolute","right":0,"top":-5}
            }) : null
          ]}
        outlined={false}
        onFocus={function (){
            event_form.validate_field(form,field);
          }}
        design={design}
        {...fieldProps}/>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-time/FormDatetime [130] 
export function FormDatetime({
  design,
  mini,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  field,
  fieldProps,
  minWidth,
  hideValidation
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"time","fn/type":"field"},meta)
  );
  return (
    <slim_common.FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_input.Input
        onChangeText={function (v){
            event_form.set_field(form,field,v);
            event_form.validate_field(form,field);
          }}
        value={(lib.nilp(value) ? "" : value).toString()}
        indicatorParams={{"focusing":{"default":{"duration":100}}}}
        variant={variant}
        highlighted={result["status"] == "errored"}
        addons={[
            !hideValidation ? addon_validation.addonValidation({
              result,
              design,
              "style":{"position":"absolute","right":0,"top":-5}
            }) : null
          ]}
        outlined={false}
        onFocus={function (){
            event_form.validate_field(form,field);
          }}
        design={design}
        {...fieldProps}/>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-time/MODULE [177] 
export var MODULE = {
  "FormTime":FormTime,
  "FormDate":FormDate,
  "FormDatetime":FormDatetime,
  "MODULE":MODULE
};