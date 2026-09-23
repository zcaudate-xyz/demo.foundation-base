import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as addon_tooltip from './addon-tooltip.js'

import * as base_font from './base-font.js'

import * as ui_button from '../js/react-native/ui-button.js'

import * as base_theme from './base-theme.js'

import * as base_palette from './base-palette.js'

// melbourne.ui-button/Button [26] 
export function Button({
  design,
  variant,
  theme,
  style,
  transformations,
  addons,
  tooltip,
  refLink = React.useRef(),
  ...rprops
}){
  let [chord,setChord] = React.useState({});
  let __variant = Object.assign({"fg":{"key":"background"},"bg":{"key":"primary"}},variant);
  let __style = base_font.getFontStyle(__variant.font || "h6");
  let __theme = Object.assign(
    base_theme.themeUiButton(base_palette.designPalette(design),__variant),
    theme
  );
  return (
    <ui_button.Button
      refLink={refLink}
      onChord={setChord}
      theme={__theme}
      style={[
          {
                "paddingVertical":10,
                "paddingHorizontal":16,
                "minHeight":40,
                "borderRadius":10,
                "alignItems":"center",
                "justifyContent":"center"
              },
          __style,
          ...data.arrayify(style)
        ]}
      addons={[
          tooltip ? addon_tooltip.addonTooltip(
                refLink,
                chord.hovering,
                {design,tooltip,"variant":data.get_in(design,["variant","tooltip"])}
              ) : null,
          ...data.arrayify(addons)
        ]}
      transformations={Object.assign({
          "bg":function ({pressing}){
                  return {"style":{"transform":[{"scale":1 + (0.08 * pressing)}]}};
                }
        },transformations)}
      {...rprops}/>);
}

// melbourne.ui-button/MODULE [77] 
export var MODULE = {"Button":Button,"MODULE":MODULE};