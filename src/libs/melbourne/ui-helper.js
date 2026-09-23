import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as ReactNative from 'react-native'

import * as ui_button from './ui-button.js'

import * as data from '../xt/lang/common-data.js'

import * as n from '../js/react-native.js'

// melbourne.ui-helper/HelperControl [16] 
export function HelperControl({
  design,
  variant,
  theme,
  style,
  styleContainer,
  leftDisabled,
  rightDisabled,
  children,
  onLeft,
  onRight,
  iconProps = {},
  leftProps = {},
  rightProps = {}
}){
  return (
    <n.Row style={styleContainer}>
      <ui_button.Button
        text={(
            <RNIcon key="left" name="chevron-small-left" size={15} {...iconProps}/>)}
        disabled={leftDisabled}
        indicatorParams={{"pressing":{"default":{"duration":50}}}}
        onPress={onLeft}
        style={[{"paddingVertical":5},...data.arrayify(style)]}
        design={design}
        variant={variant}
        theme={theme}
        {...leftProps}/>
      {children || (
        <ReactNative.View style={{"width":3}}/>)}
      <ui_button.Button
        text={(
            <RNIcon
              key="right"
              name="chevron-small-right"
              size={15}
              {...iconProps}/>)}
        disabled={rightDisabled}
        indicatorParams={{"pressing":{"default":{"duration":50}}}}
        onPress={onRight}
        style={[{"paddingVertical":5},...data.arrayify(style)]}
        design={design}
        variant={variant}
        theme={theme}
        {...rightProps}/>
    </n.Row>);
}

// melbourne.ui-helper/MODULE [66] 
export var MODULE = {"HelperControl":HelperControl,"MODULE":MODULE};