import * as ReactNative from 'react-native'

import * as ui_scrollview from './ui-scrollview.js'

import * as n from '../react-native.js'

// js.react-native.ui-scrollview-test/ScrollViewDemo [22] 
export function ScrollViewDemo(){
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-scrollview/ScrollView"
      code={(function (){
          return "(\n  <ui_scrollview.ScrollView style={{\"height\":300,\"width\":400}}>\n    <ReactNative.View style={{\"height\":500,\"backgroundColor\":\"yellow\"}}/>\n  </ui_scrollview.ScrollView>);";
        })()}>
      <ui_scrollview.ScrollView style={{"height":300,"width":400}}>
        <ReactNative.View style={{"height":500,"backgroundColor":"yellow"}}/>
      </ui_scrollview.ScrollView>
    </n.EnclosedCodeContainer>);
}