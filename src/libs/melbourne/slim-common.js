import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as event_form from '../xt/event/base-form.js'

import * as ui_static from './ui-static.js'

import * as addon_validation from './addon-validation.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ext_form from '../js/react/ext-form.js'

import * as base_font from './base-font.js'

import * as ui_checkbox from './ui-checkbox.js'

import * as ui_toggle_button from './ui-toggle-button.js'

import * as ui_text from './ui-text.js'

import * as base_palette from './base-palette.js'

import * as ui_chip_input from './ui-chip-input.js'

import * as ui_toggle_switch from './ui-toggle-switch.js'

import * as ui_color_input from './ui-color-input.js'

import * as n from '../js/react-native.js'

import * as ui_input from './ui-input.js'

import * as ui_input_xl from './ui-input-xl.js'

// melbourne.slim-common/StyleButtonXL [43] 
export var StyleButtonXL = {"fontSize":15,"paddingVertical":12,"paddingHorizontal":20};

// melbourne.slim-common/FormEnclosed [48] 
export function FormEnclosed({
  design,
  variant,
  mini,
  label,
  labelHide,
  labelNone,
  styleLabel,
  styleContainer,
  children,
  minWidth = 120
}){
  let labelElem = !labelHide ? (
    <ReactNative.View
      key="label"
      style={mini ? {"paddingLeft":5,"paddingTop":10} : {
          "paddingLeft":5,
          "paddingTop":10,
          "paddingRight":12,
          "minHeight":40
        }}>
      <ui_static.Text
        variant={variant || {"fg":{"key":"primary","mix":"neutral","ratio":5}}}
        style={[
            mini ? {} : {"paddingBottom":0,"width":128},
            ...data.arrayify(styleLabel)
          ]}
        design={design}>{label}
      </ui_static.Text>
    </ReactNative.View>) : null;
  let formElem = (
    <ReactNative.View key="form" style={{"minWidth":minWidth,"flex":1}}>{children}</ReactNative.View>);
  return labelNone ? formElem : (mini ? (
    <ReactNative.View
      style={[{"flex":1,"margin":2},...data.arrayify(styleContainer)]}>{labelElem}{formElem}
    </ReactNative.View>) : (
    <n.Row
      style={[
          {"margin":2,"flex":1,"flexWrap":"wrap"},
          ...data.arrayify(styleContainer)
        ]}>{labelElem}{formElem}
    </n.Row>));
}

// melbourne.slim-common/FormReadOnly [102] 
export function FormReadOnly(props){
  let {
    design,
    mini,
    variant,
    meta,
    label,
    labelHide,
    labelNone,
    styleLabel,
    entry,
    format,
    template,
    fieldProps,
    minWidth
  } = props;
  let value = data.template_entry(entry,template,props);
  if(value && format){
    value = format(value);
  }
  let {style,...rprops} = fieldProps || {};
  return (
    <FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ReactNative.View style={{"margin":5}}>
        {React.createElement(ui_static.Text,Object.assign(
          {design,variant},
          {"style":[{"fontSize":13},...data.arrayify(style)]},
          rprops
        ),(value || " - ").toString())}
      </ReactNative.View>
    </FormEnclosed>);
}

// melbourne.slim-common/FormInput [140] 
export function FormInput({
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
    Object.assign({"slim/type":"input","fn/type":"field"},meta)
  );
  return (
    <FormEnclosed
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
    </FormEnclosed>);
}

// melbourne.slim-common/FormInputXL [187] 
export function FormInputXL({
  design,
  variant,
  mini,
  form,
  meta,
  field,
  fieldProps,
  minWidth,
  hideValidation
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"input_xl","fn/type":"field"},meta)
  );
  let {placeholder} = fieldProps;
  let validation = !hideValidation ? addon_validation.addonValidation({
    result,
    design,
    "style":{"position":"absolute","right":2,"top":-2}
  }) : null;
  return (
    <ui_input_xl.InputXL
      onChangeText={function (v){
          event_form.set_field(form,field,v);
          event_form.validate_field(form,field);
        }}
      value={(value || "").toString()}
      placeholder={placeholder}
      variant={variant}
      highlighted={result["status"] == "errored"}
      addons={[validation]}
      outlined={false}
      onFocus={function (){
          event_form.validate_field(form,field);
        }}
      design={design}
      {...fieldProps}/>);
}

// melbourne.slim-common/FormTextArea [240] 
export function FormTextArea({
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
  minWidth,
  styleContainer,
  hideValidation
}){
  return (
    <FormInput
      form={form}
      fieldProps={Object.assign(
          {"multiline":true,"style":{"height":60,"flex":null}},
          fieldProps
        )}
      meta={Object.assign({"slim/type":"textarea"},meta)}
      styleLabel={styleLabel}
      labelHide={labelHide}
      variant={variant}
      minWidth={minWidth}
      styleContainer={[{"flexDirection":"column"},...data.arrayify(styleContainer)]}
      field={field}
      mini={mini}
      hideValidation={hideValidation}
      label={label}
      design={design}
      labelNone={labelNone}/>);
}

// melbourne.slim-common/FormCheckBox [277] 
export function FormCheckBox({
  design,
  variant,
  mini,
  form,
  meta,
  style,
  styleLabel,
  stylePadding,
  label,
  field,
  fieldProps,
  ...rprops
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"checkbox","fn/type":"field"},meta)
  );
  return (
    <n.Row>
      <ReactNative.View style={[{"width":5},...data.arrayify(stylePadding)]}/>
      <n.Row
        style={{
            "paddingVertical":9,
            "paddingHorizontal":4,
            "alignItems":"center",
            "borderRadius":10
          }}>
        <ui_checkbox.CheckBox
          indicatorParams={{"active":{"default":{"duration":100}}}}
          selected={value}
          style={style}
          onPress={function (){
              event_form.toggle_field(form,field);
              event_form.validate_field(form,field);
            }}
          design={design}
          variant={variant}
          {...fieldProps}/>
        <ReactNative.View style={{"width":15}}/>
        <ui_static.Text
          variant={data.get_in(design,["variant","label"])}
          style={[base_font.fontH6,{"padding":3},...data.arrayify(styleLabel)]}
          design={design}>{label}
        </ui_static.Text>
      </n.Row>
    </n.Row>);
}

// melbourne.slim-common/FormToggleButton [324] 
export function FormToggleButton({
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
  text,
  minWidth
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"toggle_button","fn/type":"field"},meta)
  );
  return (
    <FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <n.Row>
        <ui_toggle_button.ToggleButton
          selected={value}
          onPress={function (){
              event_form.toggle_field(form,field);
              event_form.validate_field(form,field);
            }}
          style={{"marginTop":5,"marginHorizontal":5,"padding":5}}
          design={design}
          variant={variant}
          text={text}
          {...fieldProps}/>
      </n.Row>
    </FormEnclosed>);
}

// melbourne.slim-common/FormToggleSwitch [365] 
export function FormToggleSwitch({
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
  text,
  minWidth
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"toggle_switch","fn/type":"field"},meta)
  );
  return (
    <FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <n.Row style={{"marginVertical":7}}>
        <ui_toggle_switch.ToggleSwitch
          selected={value}
          onPress={function (){
              event_form.toggle_field(form,field);
              event_form.validate_field(form,field);
            }}
          style={{"marginTop":5,"marginHorizontal":5,"padding":10}}
          design={design}
          variant={variant}
          {...fieldProps}/>
      </n.Row>
    </FormEnclosed>);
}

// melbourne.slim-common/FormEnumSingle [406] 
export function FormEnumSingle({
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
  minWidth,
  options = []
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"enum_single","fn/type":"field"},meta)
  );
  let {mainNeutral} = base_palette.designPalette(design);
  let Component = data.get_in(fieldProps,["component"]) || ui_text.TabsMinor;
  return (
    <FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <Component
        styleContainer={{"left":-10}}
        style={{"marginHorizontal":5,"padding":3}}
        data={options}
        value={value}
        setValue={function (value){
            event_form.set_field(form,field,value);
            event_form.validate_field(form,field);
          }}
        design={design}
        variant={variant}
        {...fieldProps}/>
    </FormEnclosed>);
}

// melbourne.slim-common/FormEnumMulti [453] 
export function FormEnumMulti({
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
  minWidth,
  options = []
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"enum_multi","fn/type":"field"},meta)
  );
  let {mainNeutral} = base_palette.designPalette(design);
  let Component = data.get_in(fieldProps,["component"]) || ui_text.EnumMinor;
  return (
    <FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <Component
        style={{}}
        data={options}
        values={value}
        setValues={function (values){
            event_form.set_field(form,field,values);
            event_form.validate_field(form,field);
          }}
        design={design}
        variant={variant}
        {...fieldProps}/>
    </FormEnclosed>);
}

// melbourne.slim-common/FormColorInput [495] 
export function FormColorInput({
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
  minWidth,
  options = []
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"color_input","fn/type":"field"},meta)
  );
  let {mainNeutral} = base_palette.designPalette(design);
  return (
    <FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_color_input.ColorInput
        value={value}
        setValue={function (value){
            event_form.set_field(form,field,value);
            event_form.validate_field(form,field);
          }}
        design={design}
        variant={variant}
        {...fieldProps}/>
    </FormEnclosed>);
}

// melbourne.slim-common/FormChipInput [533] 
export function FormChipInput({
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
  minWidth,
  options = []
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"chip_input","fn/type":"field"},meta)
  );
  let {mainNeutral} = base_palette.designPalette(design);
  return (
    <FormEnclosed
      variant={data.get_in(design,["variant","label"])}
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ui_chip_input.ChipInput
        values={value}
        setValues={function (values){
            event_form.set_field(form,field,values);
            event_form.validate_field(form,field);
          }}
        design={design}
        variant={variant}
        {...fieldProps}/>
    </FormEnclosed>);
}

// melbourne.slim-common/FormLayout [571] 
export function FormLayout({
  design,
  form,
  mini,
  meta,
  fieldProps = {},
  fieldStyle = {},
  rowStyle,
  rows,
  children,
  ...rprops
}){
  let formElement = function ({component,field,...rprops},i){
    let props = Object.assign(
      rprops,
      {design,field,form,mini,"meta":Object.assign({},meta,rprops.meta)}
    );
    let style = data.arr_concat([...data.arrayify(rowStyle)],data.arrayify(fieldStyle.field));
    return (
      <n.Row
        key={field || i}
        style={[{"marginVertical":4},...data.arrayify(style)]}
        {...(fieldProps[field] || {})}>{React.createElement(component,props)}
      </n.Row>);
  };
  return (
    <ReactNative.View {...rprops}>
      {data.arrayify(rows).filter(lib.identity).map(formElement)}
      {data.not_emptyp(children) ? (
        <ReactNative.View style={{"height":16}}/>) : null}
      {children}
    </ReactNative.View>);
}

// melbourne.slim-common/MODULE [612] 
export var MODULE = {
  "StyleButtonXL":StyleButtonXL,
  "FormEnclosed":FormEnclosed,
  "FormReadOnly":FormReadOnly,
  "FormInput":FormInput,
  "FormInputXL":FormInputXL,
  "FormTextArea":FormTextArea,
  "FormCheckBox":FormCheckBox,
  "FormToggleButton":FormToggleButton,
  "FormToggleSwitch":FormToggleSwitch,
  "FormEnumSingle":FormEnumSingle,
  "FormEnumMulti":FormEnumMulti,
  "FormColorInput":FormColorInput,
  "FormChipInput":FormChipInput,
  "FormLayout":FormLayout,
  "MODULE":MODULE
};