import React from 'react'

import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as r from '../js/react.js'

import * as ext_form from '../js/react/ext-form.js'

import * as base_font from './base-font.js'

import * as slim_error from './slim-error.js'

import * as ui_text from './ui-text.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

// melbourne.slim-submit/SubmitButton [34] 
export function SubmitButton({
  design,
  variant,
  component,
  disabled,
  reset,
  resetText,
  waiting,
  waitingText,
  text,
  style,
  ...rprops
}){
  let {mainBackground,mainPrimary} = base_palette.designPalette(design);
  return React.createElement(component || ui_text.ButtonMinor,{
    design,
    variant,
    "disabled":disabled || waiting,
    "style":[
      {"textAlign":"center","minWidth":100},
      ...data.arrayify(style)
    ],
    "text":reset ? (resetText || "BACK") : (waiting ? (waitingText || (
      <ReactNative.ActivityIndicator key="busy" color={mainPrimary} size={12}/>)) : (text || "SUBMIT")),
    ...rprops
  });
}

// melbourne.slim-submit/SubmitLine [70] 
export function SubmitLine(props){
  let {
    design,
    mini,
    variant,
    form,
    styleContainer,
    styleSubmit,
    submitText,
    errorProps = {},
    result,
    errored,
    onAction,
    onActionPress,
    onActionReset,
    onActionCheck = (function (){
    return true;
  }),
    children,
    disabled,
    ...rprops
  } = props;
  let {row} = errorProps;
  let errorElem = errored ? (
    <slim_error.ErrorInfo
      design={design}
      style={(!row || mini) ? {} : {"flex":1}}
      result={result}
      onClose={onActionReset}
      {...errorProps}/>) : null;
  globalThis["CHECK"] = onActionCheck;
  return (
    <ReactNative.View style={{"marginTop":3}}>
      {(!row || mini) ? errorElem : null}
      <n.Row
        style={[
            mini ? {"flexDirection":"column"} : {"flexDirection":"row-reverse"},
            ...data.arrayify(styleContainer)
          ]}>
        {!errored ? (
          <SubmitButton
            disabled={disabled || !onActionCheck()}
            reset={errored}
            style={styleSubmit}
            onPress={onActionPress}
            text={submitText}
            design={design}
            variant={variant}
            {...rprops}/>) : null}
        {children}
        {(errored && (row && !mini)) ? (
          <React.Fragment><ReactNative.View style={{"width":10}}/>{errorElem}</React.Fragment>) : null}
      </n.Row>
    </ReactNative.View>);
}

// melbourne.slim-submit/SubmitLineHelpers [133] 
export function SubmitLineHelpers({
  design,
  errored,
  clearText,
  clearStyle,
  onClear,
  clearShow = false,
  clearProps = {},
  cancelText,
  cancelStyle,
  onCancel,
  cancelShow = false,
  cancelProps = {}
}){
  return (
    <React.Fragment>
      {(clearShow && !errored) ? (
        <React.Fragment>
          <ReactNative.View style={{"width":10}}/>
          <ui_text.ButtonMinor
            variant={Object.assign(
                {"bg":{"key":"background"},"fg":{"key":"neutral"}},
                data.get_in(design,["variant","clear"])
              )}
            style={[base_font.fontH6,...data.arrayify(clearStyle)]}
            text={clearText || "Clear"}
            onPress={onClear}
            design={design}
            {...clearProps}/>
        </React.Fragment>) : null}
      {(cancelShow && !errored) ? (
        <React.Fragment>
          <ReactNative.View style={{"width":10}}/>
          <ui_text.ButtonAccent
            variant={data.get_in(design,["variant","cancel"])}
            style={[base_font.fontH6,...data.arrayify(cancelStyle)]}
            text={cancelText || "Cancel"}
            onPress={onCancel}
            design={design}
            {...cancelProps}/>
        </React.Fragment>) : null}
    </React.Fragment>);
}

// melbourne.slim-submit/SubmitLineActions [178] 
export function SubmitLineActions({
  design,
  mini,
  variant,
  form,
  errored,
  onActionReset,
  clearText,
  clearStyle,
  onClear,
  clearShow,
  clearProps,
  cancelText,
  cancelStyle,
  onCancel,
  cancelShow,
  cancelProps,
  children,
  ...rprops
}){
  return (
    <SubmitLine
      design={design}
      variant={variant}
      errored={errored}
      onActionReset={onActionReset}
      {...rprops}>
      {!mini ? (
        <SubmitLineHelpers
          cancelStyle={cancelStyle}
          cancelShow={cancelShow}
          clearProps={clearProps}
          cancelProps={cancelProps}
          clearStyle={clearStyle}
          clearText={clearText}
          onCancel={onCancel}
          onClear={onClear || onActionReset}
          cancelText={cancelText}
          clearShow={clearShow}
          errored={errored}
          design={design}/>) : null}
      {children}
    </SubmitLine>);
}

// melbourne.slim-submit/useSubmitField [224] 
export function useSubmitField({
  form,
  meta,
  field,
  explicit,
  keep = true,
  onCheck,
  onResult,
  onSubmit,
  onError,
  onSuccess,
  ...rprops
}){
  let {errored,isMounted,onAction,result,setResult,setWaiting,waiting} = r.useSubmitResult({onResult,onSubmit,onError,onSuccess,...rprops});
  let {onActionCheck,onActionReset} = ext_form.useSubmitField({explicit,field,form,isMounted,keep,onCheck,setResult,"meta":Object.assign({
      "slim/type":"submit_field",
      "fn/type":"submit",
      "validation/changes":true
    },meta)});
  let onActionPress = errored ? onActionReset : onAction;
  return {errored,onAction,onActionCheck,onActionPress,onActionReset,result,setResult,setWaiting,waiting};
}

// melbourne.slim-submit/useSubmitForm [273] 
export function useSubmitForm({
  form,
  meta,
  explicit,
  keep = true,
  onCheck,
  onResult,
  onSubmit,
  onSuccess,
  onError,
  ...rprops
}){
  let {errored,isMounted,onAction,result,setResult,setWaiting,waiting} = r.useSubmitResult({onResult,onSubmit,onError,onSuccess,...rprops});
  let {onActionCheck,onActionReset} = ext_form.useSubmitForm(
    {explicit,form,isMounted,keep,onCheck,setResult,"meta":Object.assign({"slim/type":"submit_form","fn/type":"submit"},meta)}
  );
  let onActionPress = errored ? onActionReset : (onActionCheck() ? onAction : null);
  return {errored,onAction,onActionCheck,onActionPress,onActionReset,result,setResult,setWaiting,waiting};
}

// melbourne.slim-submit/MODULE [322] 
export var MODULE = {
  "SubmitButton":SubmitButton,
  "SubmitLine":SubmitLine,
  "SubmitLineHelpers":SubmitLineHelpers,
  "SubmitLineActions":SubmitLineActions,
  "useSubmitField":useSubmitField,
  "useSubmitForm":useSubmitForm,
  "MODULE":MODULE
};