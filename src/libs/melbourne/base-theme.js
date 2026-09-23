import * as base_palette from './base-palette.js'

// melbourne.base-theme/themeBase [14] 
export function themeBase(palette,variant){
  let {bg,fg} = variant;
  return [
    base_palette.getColor(palette,fg),
    base_palette.getColor(palette,bg)
  ];
}

// melbourne.base-theme/themeNormal [22] 
export function themeNormal(palette,variant){
  let {bg,fg} = variant;
  let [fgNormal,bgNormal] = themeBase(palette,{bg,fg});
  return {bgNormal,fgNormal};
}

// melbourne.base-theme/themeActive [32] 
export function themeActive(palette,{active,bg,fg}){
  let [fgActive,bgActive] = themeBase(palette,{
    "fg":(active && active.fg) || bg,
    "bg":(active && active.bg) || fg
  });
  return {bgActive,fgActive};
}

// melbourne.base-theme/themeHovered [43] 
export function themeHovered(palette,{hovered}){
  let {isDark} = palette;
  let {fg = {"raw":1},bg = {"raw":isDark ? -0.7 : 0.7}} = hovered || {};
  let [fgHovered,bgHovered] = themeBase(palette,{bg,fg});
  return {bgHovered,fgHovered};
}

// melbourne.base-theme/themePressed [55] 
export function themePressed(palette,{pressed},override){
  let {isDark} = palette;
  let {fg = {"raw":1},bg = {"raw":isDark ? 0.7 : -0.7}} = pressed || {};
  let [fgPressed,bgPressed] = themeBase(palette,{bg,fg});
  return {bgPressed,fgPressed};
}

// melbourne.base-theme/themeHighlighted [67] 
export function themeHighlighted(palette,{highlighted}){
  let {fg = {"key":"background"},bg = {"key":"error"}} = highlighted || {};
  let [fgHighlighted,bgHighlighted] = themeBase(palette,{bg,fg});
  return {bgHighlighted,fgHighlighted};
}

// melbourne.base-theme/themeDisabled [78] 
export function themeDisabled(palette,{disabled}){
  let {
    fg = {"key":"neutral","mix":"background","ratio":5},
    bg = {"key":"background","mix":"neutral","ratio":1}
  } = disabled || {};
  let [fgDisabled,bgDisabled] = themeBase(palette,{bg,fg});
  return {bgDisabled,fgDisabled};
}

// melbourne.base-theme/themeUiButton [94] 
export function themeUiButton(palette,variant){
  return Object.assign(
    themeNormal(palette,variant),
    themePressed(palette,variant),
    themeHovered(palette,variant),
    themeDisabled(palette,variant)
  );
}

// melbourne.base-theme/themeUiState [105] 
export function themeUiState(palette,variant){
  return Object.assign(
    themeNormal(palette,variant),
    themePressed(palette,variant),
    themeHovered(palette,variant),
    themeDisabled(palette,variant),
    themeActive(palette,variant)
  );
}

// melbourne.base-theme/themeUiInput [117] 
export function themeUiInput(palette,variant){
  return Object.assign(
    themeUiState(palette,variant),
    themeHighlighted(palette,variant)
  );
}

// melbourne.base-theme/MODULE [126] 
export var MODULE = {
  "themeBase":themeBase,
  "themeNormal":themeNormal,
  "themeActive":themeActive,
  "themeHovered":themeHovered,
  "themePressed":themePressed,
  "themeHighlighted":themeHighlighted,
  "themeDisabled":themeDisabled,
  "themeUiButton":themeUiButton,
  "themeUiState":themeUiState,
  "themeUiInput":themeUiInput,
  "MODULE":MODULE
};