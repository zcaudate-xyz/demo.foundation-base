import * as T from 'tamagui'

import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as event_form from '../xt/event/base-form.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ext_form from '../js/react/ext-form.js'

import * as tama_theme from './tama-theme.js'

// melbourne.tama-form/FormEnclosed [23] 
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
  minWidth = 160,
  ...rprops
}){
  let labelElem = (!labelHide && !labelNone) ? (
    <T.Label
      color="$color11"
      fontSize={13}
      fontWeight="700"
      paddingHorizontal="$1"
      paddingTop="$1"
      minWidth={mini ? null : 128}
      style={styleLabel}>{label}
    </T.Label>) : null;
  let rootProps = Object.assign(
    {"gap":"$1","flex":1,"minWidth":minWidth},
    mini ? {"flexDirection":"row","alignItems":"center","gap":"$2"} : {},
    styleContainer ? {"style":styleContainer} : {},
    rprops
  );
  return (
    <T.Theme name={tama_theme.themeName(design)}><T.YStack {...rootProps}>{labelElem}{children}</T.YStack></T.Theme>);
}

// melbourne.tama-form/FormReadOnly [67] 
export function FormReadOnly(props){
  let {
    design,
    variant,
    label,
    labelHide,
    labelNone,
    styleLabel,
    entry,
    format,
    template,
    fieldProps,
    styleContainer,
    minWidth
  } = props;
  let value = data.template_entry(entry,template,props);
  if(value && format){
    value = format(value);
  }
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      labelHide={labelHide}
      labelNone={labelNone}
      styleLabel={styleLabel}
      styleContainer={styleContainer}
      minWidth={minWidth}>
      <T.Text
        {...Object.assign({
        "padding":"$2",
        "borderWidth":1,
        "borderColor":"$borderColor",
        "borderRadius":"$2",
        "color":"$color11"
      },fieldProps || {})}>{(value || " - ").toString()}
      </T.Text>
    </FormEnclosed>);
}

// melbourne.tama-form/FormInput [98] 
export function FormInput({
  design,
  variant,
  mini,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  field,
  fieldProps,
  styleContainer,
  minWidth
}){
  let {value,result} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"input","fn/type":"field"},meta || {})
  );
  return (
    <FormEnclosed
      styleLabel={styleLabel}
      labelHide={labelHide}
      variant={variant}
      minWidth={minWidth}
      mini={mini}
      styleContainer={styleContainer}
      label={label}
      design={design}
      labelNone={labelNone}>
      <T.Input
        {...Object.assign({
        "size":"$4",
        "value":(lib.nilp(value) ? "" : value).toString(),
        "borderRadius":"$2",
        "borderColor":(result["status"] == "errored") ? "$red8" : "$borderColor",
        "onFocus":function (){
          event_form.validate_field(form,field);
        },
        "onChangeText":function (v){
          event_form.set_field(form,field,v);
          event_form.validate_field(form,field);
        }
      },fieldProps || {})}/>
    </FormEnclosed>);
}

// melbourne.tama-form/FormInputXL [127] 
export function FormInputXL({
  design,
  variant,
  form,
  meta,
  field,
  fieldProps,
  label,
  labelHide,
  labelNone,
  styleLabel,
  styleContainer,
  minWidth
}){
  let {value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"input_xl","fn/type":"field"},meta || {})
  );
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      labelHide={labelHide}
      labelNone={labelNone}
      styleLabel={styleLabel}
      styleContainer={styleContainer}
      minWidth={minWidth}>
      <T.Input
        {...Object.assign({
        "size":"$5",
        "value":(value || "").toString(),
        "borderRadius":"$3",
        "fontSize":16,
        "onFocus":function (){
          event_form.validate_field(form,field);
        },
        "onChangeText":function (v){
          event_form.set_field(form,field,v);
          event_form.validate_field(form,field);
        }
      },fieldProps || {})}/>
    </FormEnclosed>);
}

// melbourne.tama-form/FormTextArea [154] 
export function FormTextArea({
  design,
  variant,
  mini,
  form,
  meta,
  field,
  fieldProps,
  label,
  labelHide,
  labelNone,
  styleLabel,
  styleContainer,
  minWidth
}){
  return (
    <FormInput
      form={form}
      fieldProps={Object.assign(
          {"multiline":true,"minHeight":96,"textAlignVertical":"top"},
          fieldProps || {}
        )}
      styleLabel={styleLabel}
      labelHide={labelHide}
      meta={meta}
      variant={variant}
      minWidth={minWidth}
      field={field}
      mini={mini}
      styleContainer={styleContainer}
      label={label}
      design={design}
      labelNone={labelNone}/>);
}

// melbourne.tama-form/FormCheckBox [167] 
export function FormCheckBox({design,variant,form,meta,label,styleLabel,field,fieldProps}){
  let {value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"checkbox","fn/type":"field"},meta || {})
  );
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      styleLabel={styleLabel}>
      <T.XStack alignItems="center" gap="$2">
        <T.Checkbox
          {...Object.assign({
          "size":"$4",
          "checked":value ? true : false,
          "onCheckedChange":function (checked){
            event_form.set_field(form,field,checked);
            event_form.validate_field(form,field);
          }
        },fieldProps || {})}>
          <T.Checkbox.Indicator><T.Text fontWeight="900" color="$blue10">✓</T.Text></T.Checkbox.Indicator>
        </T.Checkbox>
        <T.Text color="$color">{label}</T.Text>
      </T.XStack>
    </FormEnclosed>);
}

// melbourne.tama-form/FormToggleButton [199] 
export function FormToggleButton({
  design,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  field,
  fieldProps,
  text,
  styleContainer,
  minWidth
}){
  let {value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"toggle_button","fn/type":"field"},meta || {})
  );
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      labelHide={labelHide}
      labelNone={labelNone}
      styleLabel={styleLabel}
      styleContainer={styleContainer}
      minWidth={minWidth}>
      <T.Button
        {...Object.assign({
        "size":"$4",
        "theme":value ? "active" : null,
        "color":"$color12",
        "onPress":function (){
          event_form.toggle_field(form,field);
          event_form.validate_field(form,field);
        }
      },fieldProps || {})}>{text || (value ? "ON" : "OFF")}
      </T.Button>
    </FormEnclosed>);
}

// melbourne.tama-form/FormToggleSwitch [223] 
export function FormToggleSwitch({
  design,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  field,
  fieldProps,
  styleContainer,
  minWidth
}){
  let {value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"toggle_switch","fn/type":"field"},meta || {})
  );
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      labelHide={labelHide}
      labelNone={labelNone}
      styleLabel={styleLabel}
      styleContainer={styleContainer}
      minWidth={minWidth}>
      <T.XStack alignItems="center" gap="$2">
        <T.Switch
          {...Object.assign({
          "size":"$4",
          "checked":value ? true : false,
          "onCheckedChange":function (checked){
            event_form.set_field(form,field,checked);
            event_form.validate_field(form,field);
          }
        },fieldProps || {})}><T.SwitchThumb animation="quicker"/>
        </T.Switch>
        <T.Text color="$color11">{value ? "ON" : "OFF"}</T.Text>
      </T.XStack>
    </FormEnclosed>);
}

// melbourne.tama-form/FormEnumSingle [253] 
export function FormEnumSingle({
  design,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  styleContainer,
  field,
  fieldProps,
  minWidth,
  options = []
}){
  let {value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"enum_single","fn/type":"field"},meta || {})
  );
  let setValue = function (v){
    event_form.set_field(form,field,v);
    event_form.validate_field(form,field);
  };
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      labelHide={labelHide}
      labelNone={labelNone}
      styleLabel={styleLabel}
      styleContainer={styleContainer}
      minWidth={minWidth}>
      <T.Select
        {...Object.assign(
        {"value":value || "","onValueChange":setValue},
        fieldProps || {}
      )}>
        <T.Select.Trigger width="100%" maxWidth={360} color="$color12"><T.Select.Value placeholder="Choose one"/></T.Select.Trigger>
        <T.Select.Content zIndex={200000}>
          <T.Select.Viewport minWidth={240}>
            {options.map(function (option,i){
              return (
                <T.Select.Item key={i} index={i} value={option}><T.Select.ItemText>{option}</T.Select.ItemText></T.Select.Item>);
            })}
          </T.Select.Viewport>
        </T.Select.Content>
      </T.Select>
    </FormEnclosed>);
}

// melbourne.tama-form/FormEnumMulti [292] 
export function FormEnumMulti({
  design,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  styleContainer,
  field,
  fieldProps,
  minWidth,
  options = []
}){
  let {value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"enum_multi","fn/type":"field"},meta || {})
  );
  let values = value || [];
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      labelHide={labelHide}
      labelNone={labelNone}
      styleLabel={styleLabel}
      styleContainer={styleContainer}
      minWidth={minWidth}>
      <T.XStack gap="$1" flexWrap="wrap">
        {options.map(function (option,i){
          let selected = values.includes(option);
          return (
            <T.Button
              key={i}
              size="$2"
              chromeless={!selected}
              color="$color12"
              onPress={function (){
                  event_form.set_field(form,field,selected ? values.filter(function (v){
                    return !(v == option);
                  }) : values.concat([option]));
                  event_form.validate_field(form,field);
                }}>{option}
            </T.Button>);
        })}
      </T.XStack>
    </FormEnclosed>);
}

// melbourne.tama-form/FormColorInput [331] 
export function FormColorInput({
  design,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  styleContainer,
  field,
  fieldProps,
  minWidth
}){
  let {value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"color_input","fn/type":"field"},meta || {})
  );
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      labelHide={labelHide}
      labelNone={labelNone}
      styleLabel={styleLabel}
      styleContainer={styleContainer}
      minWidth={minWidth}>
      <T.Input
        {...Object.assign({
        "type":"color",
        "size":"$4",
        "value":value || "#2563eb",
        "onChangeText":function (v){
          event_form.set_field(form,field,v);
          event_form.validate_field(form,field);
        }
      },fieldProps || {})}/>
    </FormEnclosed>);
}

// melbourne.tama-form/FormChipInput [354] 
export function FormChipInput({
  design,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  styleContainer,
  field,
  fieldProps,
  minWidth
}){
  let {value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"chip_input","fn/type":"field"},meta || {})
  );
  let [draft,setDraft] = React.useState("");
  let values = value || [];
  let addValue = function (){
    let next = draft.trim();
    if(next.length > 0){
      if(!values.includes(next)){
        event_form.set_field(form,field,values.concat([next]));
        event_form.validate_field(form,field);
      }
      setDraft("");
    }
  };
  return (
    <FormEnclosed
      design={design}
      variant={variant}
      label={label}
      labelHide={labelHide}
      labelNone={labelNone}
      styleLabel={styleLabel}
      styleContainer={styleContainer}
      minWidth={minWidth}>
      <T.YStack gap="$2">
        <T.XStack gap="$1" flexWrap="wrap">
          {values.map(function (item,i){
            return (
              <T.Button
                key={i}
                size="$2"
                borderRadius={999}
                borderWidth={1}
                borderColor="$borderColor"
                backgroundColor="$backgroundHover"
                color="$color12"
                onPress={function (){
                    event_form.set_field(form,field,values.filter(function (v){
                      return !(v == item);
                    }));
                    event_form.validate_field(form,field);
                  }}>{item} ×
              </T.Button>);
          })}
        </T.XStack>
        <T.XStack gap="$2" alignItems="center">
          <T.Input
            {...Object.assign({
            "flex":1,
            "value":draft,
            "placeholder":"Add a value",
            "onChangeText":setDraft,
            "onSubmitEditing":addValue
          },fieldProps || {})}/>
          <T.Button size="$3" color="$color12" onPress={addValue}>ADD</T.Button>
        </T.XStack>
      </T.YStack>
    </FormEnclosed>);
}

// melbourne.tama-form/FormLayout [422] 
export function FormLayout({design,form,mini,meta,rows,children,rowStyle,fieldProps,...rprops}){
  return (
    <T.YStack {...Object.assign({"gap":"$2"},rprops)}>
      {(rows || []).map(function (row,i){
        let {component,field,...rowProps} = row;
        return (
          <T.YStack key={field || i} style={rowStyle}>
            {React.createElement(component,Object.assign({
              "design":design,
              "form":form,
              "mini":mini,
              "meta":Object.assign({},meta,rowProps.meta),
              "fieldProps":(fieldProps || {})[field] || {}
            },rowProps))}
          </T.YStack>);
      })}
      {children}
    </T.YStack>);
}

// melbourne.tama-form/MODULE [446] 
export var MODULE = {
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