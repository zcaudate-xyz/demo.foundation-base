import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as xtd from '../xt/lang/common-data.js'

import * as ui_modal from '../js/react-native/ui-modal.js'

import * as ui_tooltip from '../js/react-native/ui-tooltip.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ui_group from './ui-group.js'

import * as ui_toggle_button from './ui-toggle-button.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

// melbourne.ui-dropdown/DropdownIndexedModal [27] 
export function DropdownIndexedModal({
  design,
  variant,
  theme,
  items,
  setIndex,
  index,
  visible,
  setVisible,
  display,
  displayType,
  format,
  styleMenu,
  styleMenuItem,
  itemTransformations,
  modalProps,
  hostRef
}){
  let {mainBackground,mainColor,mainNeutral} = base_palette.designPalette(design);
  let [dims,setDims] = React.useState({});
  let wrap = r.useIsMountedWrap();
  React.useEffect(function (){
    n.measureRef(hostRef,wrap(setDims));
  },[visible]);
  let listElem = (
    <ui_group.ListIndexed
      items={items}
      format={format}
      onPress={function (){
          return setVisible(false);
        }}
      key="list"
      transformations={{"bg":null} || itemTransformations}
      index={index}
      variant={variant}
      style={[
          {
                "marginVertical":0,
                "borderRadius":0,
                "fontSize":13,
                "width":dims.width,
                "fontWeight":"400"
              },
          ...xtd.arrayify(styleMenuItem)
        ]}
      styleContainer={[{"overflow":"auto","flex":1},...xtd.arrayify(styleMenu)]}
      theme={theme}
      design={design}
      setIndex={setIndex}/>);
  let modelElem = (
    <ui_modal.Modal
      onClose={function (){
          return setVisible(false);
        }}
      styleBackdrop={{"backgroundColor":mainNeutral}}
      visible={visible}>
      <ReactNative.View style={{"width":300,"height":500}}>{listElem}</ReactNative.View>
    </ui_modal.Modal>);
  let tooltipElem = (
    <ui_tooltip.Tooltip
      hostRef={hostRef}
      visible={visible}
      setVisible={setVisible}
      position="bottom"
      alignment="start"
      arrow={{
          "backdrop":true,
          "backdropStyle":{"backgroundColor":mainNeutral,"opacity":0.1},
          "baseHeight":0,
          "color":mainBackground,
          "placement":"none"
        }}>
      <ReactNative.View
        style={{
            "backgroundColor":mainBackground,
            "borderRadius":3,
            "maxWidth":400
          }}>{listElem}
      </ReactNative.View>
    </ui_tooltip.Tooltip>);
  return ("screen" == displayType) ? modelElem : tooltipElem;
}

// melbourne.ui-dropdown/DropdownIndexed [109] 
export function DropdownIndexed({
  design,
  variant,
  variantModal,
  theme,
  index,
  setIndex,
  items,
  displayType,
  style,
  styleContainer,
  styleText,
  styleMenu,
  styleMenuItem,
  itemTransformations,
  format = lib.identity,
  ...rprops
}){
  let [visible,setVisible] = React.useState(function (){
    return false;
  });
  let hostRef = React.useRef();
  return (
    <ReactNative.View style={styleContainer}>
      <ui_toggle_button.ToggleButton
        selected={visible}
        onPress={function (){
            return setVisible(!visible);
          }}
        variant={Object.assign({
            "bg":{"key":"background","mix":"primary","ratio":1},
            "hovered":{"bg":{"raw":1}}
          },variant)}
        transformations={{"bg":null}}
        style={[
            {
              "marginVertical":0,
              "borderRadius":0,
              "paddingVertical":6,
              "alignItems":"center",
              "justifyContent":"center",
              "fontSize":13,
              "fontWeight":"400"
            },
            ...xtd.arrayify(style)
          ]}
        theme={theme}
        refLink={hostRef}
        design={design}
        text={(
            <n.Row
              key="text"
              style={{
                  "width":"100%",
                  "alignItems":"center",
                  "justifyContent":"center"
                }}>
              <ReactNative.Text>{format(items[index],index)}</ReactNative.Text>
              <n.Fill style={{"minWidth":10}}/>
              <RNIcon name="chevron-down"/>
            </n.Row>)}
        {...rprops}/>
      <DropdownIndexedModal
        items={items}
        styleMenu={styleMenu}
        visible={visible}
        variant={variantModal || variant}
        itemTransformations={itemTransformations}
        setVisible={setVisible}
        format={format}
        styleMenuItem={styleMenuItem}
        index={index}
        displayType={displayType}
        hostRef={hostRef}
        theme={theme}
        design={design}
        setIndex={setIndex}/>
    </ReactNative.View>);
}

// melbourne.ui-dropdown/Dropdown [179] 
export function Dropdown(props){
  let {data,valueFn,value,setValue,...rprops} = props;
  let {index,items,setIndex} = r.convertIndex({data,setValue,value,valueFn});
  React.useEffect(function (){
    if(xtd.is_emptyp(value) && lib.not_nilp(index) && xtd.not_emptyp(data)){
      setValue((valueFn || lib.identity)(data[index]));
    }
  },[value,index,data]);
  return (
    <DropdownIndexed setIndex={setIndex} items={items} index={index} {...rprops}/>);
}

// melbourne.ui-dropdown/MODULE [207] 
export var MODULE = {
  "DropdownIndexedModal":DropdownIndexedModal,
  "DropdownIndexed":DropdownIndexed,
  "Dropdown":Dropdown,
  "MODULE":MODULE
};