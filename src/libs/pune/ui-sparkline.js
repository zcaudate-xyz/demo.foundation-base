import * as RNSvg from 'react-native-svg'

import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as r from '../js/react.js'

import * as base_palette from '../melbourne/base-palette.js'

import * as n from '../js/react-native.js'

// pune.ui-sparkline/getPath [28] 
export function getPath(values,width,height,maxValue,minValue){
  if(data.is_emptyp(values)){
    return "";
  }
  let out = [];
  let maxX = values.length - 1;
  let maxY = (maxValue || Math.max(...values)) + 2;
  let minY = (minValue || Math.min(...values)) - 2;
  for(let i = 0; i < values.length; ++i){
    let v = values[i];
    out.push(
      Math.round((width * i) / maxX) + "," + (height - (height * ((v - minY) / (maxY - minY))))
    );
  };
  return "M " + out.join(" L ");
}

// pune.ui-sparkline/Sparkline [50] 
export function Sparkline({design,height,maxValue,minValue,pathStyle,style,values,variant,width}){
  let path = getPath(values,width,height,maxValue,minValue);
  let palette = base_palette.designPalette(design);
  let __variant = Object.assign({"fg":{"key":"primary"}},variant);
  return (
    <RNSvg.default
      height={height}
      width={width}
      style={Object.assign({
          "backgroundColor":__variant.bg ? base_palette.getColor(palette,__variant.bg) : null
        },style)}>
      {React.createElement(RNSvg.Path,Object.assign({
        "d":path,
        "fill":"none",
        "stroke":base_palette.getColor(palette,__variant.fg),
        "strokeWidth":1
      },pathStyle))}
    </RNSvg.default>);
}

// pune.ui-sparkline/MODULE [87] 
export var MODULE = {"getPath":getPath,"Sparkline":Sparkline,"MODULE":MODULE};