import React from 'react'

import * as ReactNative from 'react-native'

import * as xtd from '../xt/lang/common-data.js'

import * as ui_image from './ui-image.js'

import * as lib from '../xt/lang/common-lib.js'

import * as ext_form from '../js/react/ext-form.js'

import * as base_palette from './base-palette.js'

import * as slim_common from './slim-common.js'

// melbourne.slim-image/FormImage [33] 
export function FormImage({
  design,
  mini,
  palette,
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
    Object.assign({"slim/type":"image","fn/type":"field"},meta)
  );
  if(xtd.is_emptyp(value)){
    value = {};
  }
  if(lib.is_stringp(value)){
    value = JSON.parse(value);
  }
  palette = base_palette.getPalette(design,palette);
  let {mainNeutral} = palette;
  let [data,setData] = React.useState(value);
  let [photo,setPhoto] = React.useState();
  let [blob,setBlob] = React.useState();
  let [waiting,setWaiting] = React.useState();
  return (
    <slim_common.FormEnclosed
      styleLabel={styleLabel}
      labelHide={labelHide}
      minWidth={minWidth}
      mini={mini}
      label={label}
      design={design}
      labelNone={labelNone}>
      <ReactNative.View style={{"marginLeft":1,"marginVertical":3}}>
        <ui_image.ImagePicker
          setBlob={setBlob}
          setPhoto={setPhoto}
          data={data}
          setWaiting={setWaiting}
          size={mini ? 120 : 140}
          setData={setData}
          waiting={waiting}
          blob={blob}
          photo={photo}
          design={design}
          {...fieldProps}/>
      </ReactNative.View>
    </slim_common.FormEnclosed>);
}

// melbourne.slim-image/MODULE [88] 
export var MODULE = {"FormImage":FormImage,"MODULE":MODULE};