import * as data from '../xt/lang/common-data.js'

import * as event_form from '../xt/event/base-form.js'

import * as ext_form from '../js/react/ext-form.js'

import * as ui_slider from './ui-slider.js'

import * as ui_spinner_basic from './ui-spinner-basic.js'

import * as ui_spinner from './ui-spinner.js'

import * as slim_common from './slim-common.js'

import * as n from '../js/react-native.js'

// melbourne.slim-number/FormSpinner [27] 
export function FormSpinner({
  design,
  mini,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  labelWidth,
  field,
  fieldProps,
  minWidth,
  max,
  min,
  step,
  decimal
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"spinner","fn/type":"field"},meta)
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
      <n.Row style={{"marginTop":5}}>
        <ui_spinner.SpinnerControls
          value={value}
          setValue={event_form.field_fn(form,field)}
          style={{"paddingHorizontal":5}}
          design={design}
          variant={variant}
          max={max}
          min={min}
          step={step}>
          <ui_spinner.Spinner
            step={step}
            min={min}
            value={value}
            variant={variant}
            setValue={event_form.field_fn(form,field)}
            style={{"marginHorizontal":5}}
            max={max}
            decimal={decimal}
            design={design}
            {...fieldProps}/>
        </ui_spinner.SpinnerControls>
      </n.Row>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-number/FormSpinnerBasic [83] 
export function FormSpinnerBasic({
  design,
  mini,
  variant,
  form,
  meta,
  label,
  labelHide,
  labelNone,
  styleLabel,
  labelWidth,
  field,
  fieldProps,
  minWidth,
  max,
  min,
  step,
  decimal
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"spinner","fn/type":"field"},meta)
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
      <n.Row style={{"marginTop":5}}>
        <ui_spinner_basic.SpinnerBasicControls
          value={value}
          setValue={event_form.field_fn(form,field)}
          style={{"paddingHorizontal":5}}
          design={design}
          variant={variant}
          max={max}
          min={min}
          step={step}>
          <ui_spinner_basic.SpinnerBasic
            step={step}
            min={min}
            value={value}
            variant={variant}
            setValue={event_form.field_fn(form,field)}
            style={{"marginHorizontal":5}}
            max={max}
            decimal={decimal}
            design={design}
            {...fieldProps}/>
        </ui_spinner_basic.SpinnerBasicControls>
      </n.Row>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-number/FormSlider [139] 
export function FormSlider({
  design,
  mini,
  variant,
  form,
  meta,
  styleLabel,
  label,
  labelHide,
  labelNone,
  field,
  fieldProps,
  minWidth,
  max,
  min,
  step,
  decimal
}){
  let {result,value} = ext_form.listenField(
    form,
    field,
    Object.assign({"slim/type":"slider","fn/type":"field"},meta)
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
      <ui_slider.Slider
        step={step}
        min={min}
        value={value}
        variant={variant}
        setValue={event_form.field_fn(form,field)}
        style={{"marginTop":10,"marginBottom":5}}
        max={max}
        decimal={decimal}
        design={design}
        {...fieldProps}/>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-number/MODULE [184] 
export var MODULE = {
  "FormSpinner":FormSpinner,
  "FormSpinnerBasic":FormSpinnerBasic,
  "FormSlider":FormSlider,
  "MODULE":MODULE
};