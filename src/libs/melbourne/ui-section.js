import * as ReactNative from 'react-native'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as ui_text from './ui-text.js'

import * as ui_util from '../js/react-native/ui-util.js'

import * as n from '../js/react-native.js'

// melbourne.ui-section/__import__ [31] 
import React from 'react'

// melbourne.ui-section/styleSection [38] 
export var styleSection = {
  "borderRadius":3,
  "marginHorizontal":5,
  "marginVertical":5,
  "paddingVertical":5,
  "paddingHorizontal":15,
  "minWidth":260,
  "maxWidth":500,
  "justifyItems":"center"
};

// melbourne.ui-section/SectionBase [48] 
export function SectionBase({design,variant,mini,style,styleTitle,title,action,children}){
  let Text = mini ? ui_text.H4 : ui_text.H3;
  return (
    <ui_static.Div
      design={design}
      variant={Object.assign({},variant)}
      style={[
          styleSection,
          ...data.arrayify(style),
          mini ? {"padding":4} : null
        ]}>
      <n.Row
        style={{
            "marginBottom":5,
            "alignItems":"center",
            "alignContent":"center"
          }}>
        <Text
          style={[{"fontFamily":"impact"},...data.arrayify(styleTitle)]}
          variant={{"fg":{"key":"neutral"}}}
          children={title}
          design={design}/>
        <ReactNative.View style={{"flex":1}}/>
        {action}
      </n.Row>
      {children}
    </ui_static.Div>);
}

// melbourne.ui-section/SectionSeparator [88] 
export function SectionSeparator({design,variant}){
  return (
    <ui_static.Separator
      design={design}
      variant={Object.assign(
          {"fg":{"key":"background","mix":"neutral","ratio":1}},
          variant
        )}
      style={[{"marginVertical":3}]}/>);
}

// melbourne.ui-section/Section [103] 
export function Section({design,variant,mini,title,action,children}){
  return (
    <SectionBase
      variant={variant}
      mini={mini}
      title={title}
      design={design}
      action={action}>
      {children}
      <ReactNative.View style={{"height":10}}/>
      <SectionSeparator design={design}/>
    </SectionBase>);
}

// melbourne.ui-section/SectionFold [119] 
export function SectionFold({design,variant,mini,title,action,children,visible = false}){
  return (
    <SectionBase
      variant={variant}
      mini={mini}
      title={title}
      design={design}
      action={action}>
      <ui_util.Fold visible={visible}>
        <ReactNative.View style={mini ? {"paddingVertical":5} : null}>{children}</ReactNative.View>
      </ui_util.Fold>
      <ReactNative.View style={{"height":10}}/>
      <SectionSeparator design={design}/>
    </SectionBase>);
}

// melbourne.ui-section/CardBoundary [142] 
export function CardBoundary({children,style}){
  return (
    <ReactNative.View
      style={[
          {"marginHorizontal":10,"marginBottom":0,"maxWidth":500},
          style
        ]}>{children}
    </ReactNative.View>);
}

// melbourne.ui-section/EmptyButton [155] 
export function EmptyButton({design,onPress,textButton,textHeader}){
  return (
    <React.Fragment>
      {data.not_emptyp(textButton) ? (
        <ui_text.ButtonMinor
          text={textButton}
          style={{"textAlign":"center","padding":10,"paddingHorizontal":50}}
          onPress={onPress}
          design={design}/>) : null}
    </React.Fragment>);
}

// melbourne.ui-section/MODULE [173] 
export var MODULE = {
  "styleSection":styleSection,
  "SectionBase":SectionBase,
  "SectionSeparator":SectionSeparator,
  "Section":Section,
  "SectionFold":SectionFold,
  "CardBoundary":CardBoundary,
  "EmptyButton":EmptyButton,
  "MODULE":MODULE
};