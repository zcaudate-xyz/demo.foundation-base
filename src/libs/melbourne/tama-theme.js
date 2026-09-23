// melbourne.tama-theme/themeName [8] 
export function themeName(design){
  let {color,type} = design || {};
  let mode = (type == "dark") ? "dark" : "light";
  let accent = color || "accent";
  return ((accent == "accent") || (accent == "blue") || (accent == "red") || (accent == "yellow") || (accent == "green") || (accent == "black") || (accent == "white")) ? (mode + "_" + accent) : mode;
}

// melbourne.tama-theme/MODULE [25] 
export var MODULE = {"themeName":themeName,"MODULE":MODULE};