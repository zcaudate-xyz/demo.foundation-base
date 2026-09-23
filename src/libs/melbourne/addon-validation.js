import * as ReactNative from 'react-native'

import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as c from '../js/react-native/helper-color.js'

import * as base_theme from './base-theme.js'

import * as base_palette from './base-palette.js'

// melbourne.addon-validation/addonValidation [31] 
export function addonValidation({design = {},palette,result,styleText,style}){
  let {message,status} = result;
  let [label,setLabel] = React.useState((status == "errored") ? message : "");
  React.useEffect(function (){
    if(status == "errored"){
      setLabel(message);
    }
  },[status,message]);
  palette = base_palette.getPalette(design,palette);
  let [fgColor,bgColor] = base_theme.themeBase(palette,Object.assign(
    {"fg":{"key":"neutral"},"bg":{"key":"primary"}},
    data.get_in(design,["theme","validation"])
  ));
  let {mainBackground,mainError,mainNeutral,mainPrimary} = palette;
  return {
    "component":ReactNative.View,
    "inner":[
        {
          "component":ReactNative.Text,
          "children":[label],
          "style":[
              {
                "color":"white",
                "textAlign":"right",
                "fontSize":12,
                "padding":2,
                "paddingHorizontal":5,
                "borderRadius":3,
                "backgroundColor":mainBackground
              },
              ...data.arrayify(styleText)
            ],
          "transformations":{
              "focusing":function (focusing){
                  return {
                    "style":{
                          "color":(0.5 < focusing) ? mainPrimary : mainBackground,
                          "backgroundColor":c.mix([mainError,mainBackground],focusing)
                        }
                  };
                }
            }
        }
      ],
    "style":[
        {
          "flexDirection":"row-reverse",
          "overflow":"hidden",
          "marginHorizontal":2,
          "height":0
        },
        ...data.arrayify(style)
      ],
    "transformations":{
        "highlighted":function (highlighted){
            return {
              "style":{"height":(0.3 < highlighted) ? (18 * highlighted) : 0}
            };
          }
      }
  };
}

// melbourne.addon-validation/MODULE [90] 
export var MODULE = {"addonValidation":addonValidation,"MODULE":MODULE};