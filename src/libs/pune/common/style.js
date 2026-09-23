import * as data from '../../xt/lang/common-data.js'

// pune.common.style/Light [16] 
export var Light = {
  "surface":"#ffffff",
  "surfaceMuted":"#f8fafc",
  "border":"#e2e8f0",
  "text":"#0f172a",
  "muted":"#64748b",
  "accent":"#2563eb"
};

// pune.common.style/Dark [24] 
export var Dark = {
  "surface":"#0f172a",
  "surfaceMuted":"#1e293b",
  "border":"#334155",
  "text":"#f8fafc",
  "muted":"#cbd5e1",
  "accent":"#60a5fa"
};

// pune.common.style/tokens [32] 
export function tokens(design){
  return (data.get_in(design,["type"]) == "dark") ? Dark : Light;
}

// pune.common.style/controlStyle [39] 
export function controlStyle(design){
  let theme = tokens(design);
  return {
    "backgroundColor":theme.surface,
    "borderColor":theme.border,
    "color":theme.text
  };
}

// pune.common.style/MODULE [47] 
export var MODULE = {
  "Light":Light,
  "Dark":Dark,
  "tokens":tokens,
  "controlStyle":controlStyle,
  "MODULE":MODULE
};