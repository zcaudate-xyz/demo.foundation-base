import * as ReactNative from 'react-native'

import * as ui_static from './ui-static.js'

// melbourne.addon-tooltip/addonTooltip [17] 
export function addonTooltip(hostRef,visible,{design,variant,tooltip = {}}){
  let {text} = tooltip;
  return {
    "component":ReactNative.View,
    "children":[
        (
          <ui_static.TextTooltip
            key="tooltip"
            hostRef={hostRef}
            visible={visible}
            design={design}
            variant={variant}
            text={text}
            {...tooltip}/>)
      ]
  };
}

// melbourne.addon-tooltip/MODULE [37] 
export var MODULE = {"addonTooltip":addonTooltip,"MODULE":MODULE};