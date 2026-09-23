import * as lib from '../xt/lang/common-lib.js'

import * as c from '../js/react-native/helper-color.js'

import * as string from '../xt/lang/common-string.js'

// melbourne.base-palette/PaletteRatio [20] 
export var PaletteRatio = {
  "ionian":1 / 8,
  "dorian":2 / 8,
  "phrygian":3 / 8,
  "lydian":4 / 8,
  "mixolydian":5 / 8,
  "aeolian":6 / 8,
  "locrian":7 / 8
};

// melbourne.base-palette/PaletteBase [29] 
export var PaletteBase = {
  "lightNeutral":"#333",
  "lightError":"#9c1f1f",
  "lightWarn":"#ffffe0",
  "darkNeutral":"#eee",
  "darkError":"#f55151",
  "darkWarn":"#aaaae0"
};

// melbourne.base-palette/PalettePrimary [37] 
export var PalettePrimary = {
  "red":{"lightPrimary":"#6F0303","darkPrimary":"#ED4040"},
  "purple":{"lightPrimary":"#5f4abd","darkPrimary":"#aa97fc"},
  "indigo":{"lightPrimary":"#3F33BD","darkPrimary":"#837AE6"},
  "blue":{"lightPrimary":"#1A5D9E","darkPrimary":"#409EFF"},
  "default":{"lightPrimary":"#378E75","darkPrimary":"#38e8b6"},
  "green":{"lightPrimary":"#3D9735","darkPrimary":"#5DDE51"}
};

// melbourne.base-palette/createPalette [51] 
export function createPalette(type,color){
  if(type == "dark"){
    return {
      "mainPrimary":(PalettePrimary[color] || PalettePrimary.default).darkPrimary,
      "mainNeutral":PaletteBase.darkNeutral,
      "mainError":PaletteBase.darkError,
      "mainWarn":PaletteBase.darkWarn,
      "mainBackground":PaletteBase.lightNeutral,
      "isDark":true
    };
  }
  else{
    return {
      "mainPrimary":(PalettePrimary[color] || PalettePrimary.default).lightPrimary,
      "mainNeutral":PaletteBase.lightNeutral,
      "mainError":PaletteBase.lightError,
      "mainWarn":PaletteBase.lightWarn,
      "mainBackground":PaletteBase.darkNeutral,
      "isDark":false
    };
  }
}

// melbourne.base-palette/toneFlatten [77] 
export function toneFlatten(color,isDark){
  return c.lighten(color,isDark ? -0.8 : 0.8);
}

// melbourne.base-palette/toneDiminish [85] 
export function toneDiminish(color,isDark){
  return c.lighten(color,isDark ? -0.98 : 0.98);
}

// melbourne.base-palette/toneAugment [93] 
export function toneAugment(color,isDark){
  return c.lighten(color,isDark ? 0.9 : -0.9);
}

// melbourne.base-palette/toneSharpen [101] 
export function toneSharpen(color,isDark){
  return c.lighten(color,isDark ? 0.8 : -0.6);
}

// melbourne.base-palette/toneRatio [110] 
export function toneRatio(ratio){
  if(lib.is_numberp(ratio)){
    if((0 < ratio) && (ratio < 1)){
      return ratio;
    }
    else{
      return ratio / 8;
    }
  }
  else{
    return PaletteRatio[ratio] || 0;
  }
}

// melbourne.base-palette/getColorRaw [127] 
export function getColorRaw(palette,colorKey,tone,mixKey,ratio){
  let {isDark} = palette;
  let color = palette["main" + string.capitalize(colorKey || "primary")] || colorKey;
  if(mixKey || (tone == "mix")){
    let colorTo = palette["main" + string.capitalize(mixKey || "background")] || mixKey || palette.mainPrimary;
    return c.mix([color,colorTo],toneRatio(ratio));
  }
  else if(lib.nilp(tone)){
    return color;
  }
  else if(tone == "sharpen"){
    return toneSharpen(color,isDark);
  }
  else if(tone == "flatten"){
    return toneFlatten(color,isDark);
  }
  else if(tone == "augment"){
    return toneAugment(color,isDark);
  }
  else if(tone == "diminish"){
    return toneDiminish(color,isDark);
  }
  else if(tone == "lighten"){
    return c.lighten(
      color,
      isDark ? (1 - toneRatio(ratio)) : (toneRatio(ratio) - 1)
    );
  }
  else if(tone == "darken"){
    return c.lighten(
      color,
      isDark ? (toneRatio(ratio) - 1) : (1 - toneRatio(ratio))
    );
  }
  else if(tone == "saturate"){
    return c.saturate(color,toneRatio(ratio) - 1);
  }
  else if(tone == "desaturate"){
    return c.saturate(color,1 - toneRatio(ratio));
  }
  else{
    return color;
  }
}

// melbourne.base-palette/getColor [178] 
export function getColor(palette,m){
  let {raw} = m;
  if(lib.nilp(raw)){
    return getColorRaw(palette,m.key,m.tone,m.mix || m.mixKey,m.ratio);
  }
  else{
    return raw;
  }
}

// melbourne.base-palette/invertDesign [198] 
export function invertDesign(design){
  let {invert} = design;
  return Object.assign({},design,{"invert":!invert});
}

// melbourne.base-palette/designPalette [206] 
export function designPalette(design){
  let {color,invert,override,type} = design || {};
  type = (invert ? ((type == "dark") ? "light" : "dark") : (type || "light"));
  return Object.assign(createPalette(type,color),override);
}

// melbourne.base-palette/getPalette [219] 
export function getPalette(design,palette){
  return palette || designPalette(design,palette);
}

// melbourne.base-palette/MODULE [225] 
export var MODULE = {
  "PaletteRatio":PaletteRatio,
  "PaletteBase":PaletteBase,
  "PalettePrimary":PalettePrimary,
  "createPalette":createPalette,
  "toneFlatten":toneFlatten,
  "toneDiminish":toneDiminish,
  "toneAugment":toneAugment,
  "toneSharpen":toneSharpen,
  "toneRatio":toneRatio,
  "getColorRaw":getColorRaw,
  "getColor":getColor,
  "invertDesign":invertDesign,
  "designPalette":designPalette,
  "getPalette":getPalette,
  "MODULE":MODULE
};