import * as ReactNative from 'react-native'

import * as lib from '../xt/lang/common-lib.js'

// melbourne.base-font/fontFamily [20] 
export var fontFamily = ReactNative.Platform.select({
  "web":{"fontFamily":"system-ui"},
  "ios":{"fontFamily":"System"},
  "default":{"fontFamily":"sans-serif"}
});

// melbourne.base-font/fontH1 [26] 
export var fontH1 = Object.assign({},fontFamily,{"fontSize":30,"fontWeight":"800"});

// melbourne.base-font/fontH2 [31] 
export var fontH2 = Object.assign({},fontFamily,{"fontSize":24,"fontWeight":"800"});

// melbourne.base-font/fontH3 [36] 
export var fontH3 = Object.assign({},fontFamily,{"fontSize":20,"fontWeight":"800"});

// melbourne.base-font/fontH4 [41] 
export var fontH4 = Object.assign({},fontFamily,{"fontSize":16,"fontWeight":"800"});

// melbourne.base-font/fontH5 [46] 
export var fontH5 = Object.assign({},fontFamily,{"fontSize":14,"fontWeight":"700"});

// melbourne.base-font/fontH6 [51] 
export var fontH6 = Object.assign({},fontFamily,{"fontSize":12,"fontWeight":"700"});

// melbourne.base-font/fontP [56] 
export var fontP = Object.assign({},fontFamily,{"fontSize":12,"fontWeight":"400"});

// melbourne.base-font/fontText [61] 
export var fontText = Object.assign({},fontFamily,{"fontSize":11,"fontWeight":"400"});

// melbourne.base-font/fontItalic [66] 
export var fontItalic = Object.assign(
  {},
  fontFamily,
  {"fontSize":11,"fontWeight":"400","fontVariant":"italic"}
);

// melbourne.base-font/fontBold [72] 
export var fontBold = Object.assign({},fontFamily,{"fontSize":11,"fontWeight":"800"});

// melbourne.base-font/fontCaption [77] 
export var fontCaption = Object.assign({"fontSize":11,"fontWeight":"500"},ReactNative.Platform.select({
  "ios":{"fontFamily":"Courier"},
  "default":{"fontFamily":"monospace"}
}));

// melbourne.base-font/FontStyle [84] 
export var FontStyle = {
  "bold":fontBold,
  "caption":fontCaption,
  "h5":fontH5,
  "h4":fontH4,
  "h6":fontH6,
  "h2":fontH2,
  "h1":fontH1,
  "h3":fontH3,
  "italic":fontItalic,
  "p":fontP
};

// melbourne.base-font/getFontStyle [96] 
export function getFontStyle(font){
  if(lib.is_objectp(font)){
    return font;
  }
  else if(lib.is_numberp(font)){
    return {"fontSize":font};
  }
  else{
    return FontStyle[font] || fontText;
  }
}

// melbourne.base-font/MODULE [110] 
export var MODULE = {
  "fontFamily":fontFamily,
  "fontH1":fontH1,
  "fontH2":fontH2,
  "fontH3":fontH3,
  "fontH4":fontH4,
  "fontH5":fontH5,
  "fontH6":fontH6,
  "fontP":fontP,
  "fontText":fontText,
  "fontItalic":fontItalic,
  "fontBold":fontBold,
  "fontCaption":fontCaption,
  "FontStyle":FontStyle,
  "getFontStyle":getFontStyle,
  "MODULE":MODULE
};