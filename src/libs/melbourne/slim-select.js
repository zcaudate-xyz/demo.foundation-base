import React from 'react'

import * as xtd from '../xt/lang/common-data.js'

import * as event_form from '../xt/event/base-form.js'

import * as ui_picker_basic from './ui-picker-basic.js'

import * as ui_dropdown from './ui-dropdown.js'

import * as ext_form from '../js/react/ext-form.js'

import * as slim_common from './slim-common.js'

import * as n from '../js/react-native.js'

import * as ui_picker from './ui-picker.js'

// melbourne.slim-select/FormPicker [28] 
export function FormPicker({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  data,
  minWidth
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"picker","fn/type":"field"},meta)
  );
  let setValue = React.useRef(function (v){
    event_form.set_field(form,field,v);
    event_form.validate_field(form,field);
  }).current;
  return (
    <slim_common.FormEnclosed
      variant={xtd.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <n.Row style={{"marginTop":5}}>
        <ui_picker.PickerControls
          style={{"paddingHorizontal":5,"marginHorizontal":2}}
          value={value}
          setValue={setValue}
          design={design}>
          <ui_picker.Picker
            setValue={setValue}
            design={design}
            variant={variant}
            data={data}
            value={value}
            {...fieldProps}/>
        </ui_picker.PickerControls>
      </n.Row>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-select/FormPickerBasic [75] 
export function FormPickerBasic({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  data,
  minWidth
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"picker","fn/type":"field"},meta)
  );
  let setValue = React.useRef(function (v){
    event_form.set_field(form,field,v);
    event_form.validate_field(form,field);
  }).current;
  return (
    <slim_common.FormEnclosed
      variant={xtd.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <n.Row style={{"marginTop":5}}>
        <ui_picker_basic.PickerControls
          style={{"paddingHorizontal":5,"marginHorizontal":2}}
          value={value}
          setValue={setValue}
          design={design}>
          <ui_picker_basic.PickerBasic
            setValue={setValue}
            design={design}
            variant={variant}
            data={data}
            value={value}
            {...fieldProps}/>
        </ui_picker_basic.PickerControls>
      </n.Row>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-select/FormDropdown [123] 
export function FormDropdown({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  styleLabel,
  labelHide,
  labelNone,
  field,
  fieldProps,
  data,
  minWidth,
  active,
  setActive
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"dropdown","fn/type":"field"},meta)
  );
  let setValue = React.useRef(function (v){
    event_form.set_field(form,field,v);
    event_form.validate_field(form,field);
  }).current;
  return (
    <slim_common.FormEnclosed
      variant={xtd.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_dropdown.Dropdown
        styleContainer={{"marginVertical":2,"marginHorizontal":2}}
        setValue={setValue}
        design={design}
        variant={variant}
        data={data}
        value={value}
        active={active}
        setActive={setActive}
        {...fieldProps}/>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-select/MODULE [166] 
export var MODULE = {
  "FormPicker":FormPicker,
  "FormPickerBasic":FormPickerBasic,
  "FormDropdown":FormDropdown,
  "MODULE":MODULE
};