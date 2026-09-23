import * as ReactNative from 'react-native'

import * as slim_error from './slim-error.js'

import * as n from '../js/react-native.js'

// melbourne.slim-error-test/ErrorInfoDemo [19] 
export function ErrorInfoDemo(){
  return (
    <n.PortalSink>
      <n.EnclosedCodeContainer
        label="melbourne.slim-error/ErrorInfo"
        code={(function (){
            return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <slim_error.ErrorInfo brand={{\"type\":\"light\"}}/>\n      <ReactNative.View style={{\"height\":5}}/>\n      <slim_error.ErrorInfo\n        brand={{\"type\":\"light\"}}\n        result={{\"tag\":\"user.account/incorrect_password\"}}/>\n      <ReactNative.View style={{\"height\":5}}/>\n      <n.Row>\n        <slim_error.ErrorInfo brand={{\"type\":\"light\"}}/>\n        <ReactNative.View style={{\"width\":5}}/>\n        <slim_error.ErrorInfo brand={{\"type\":\"light\"}}/>\n      </n.Row>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <slim_error.ErrorInfo brand={{\"type\":\"dark\"}}/>\n      <ReactNative.View style={{\"height\":5}}/>\n      <slim_error.ErrorInfo\n        brand={{\"type\":\"dark\"}}\n        result={{\"tag\":\"user.account/incorrect_password\"}}/>\n      <ReactNative.View style={{\"height\":5}}/>\n      <n.Row>\n        <slim_error.ErrorInfo brand={{\"type\":\"dark\"}}/>\n        <ReactNative.View style={{\"width\":5}}/>\n        <slim_error.ErrorInfo brand={{\"type\":\"dark\"}}/>\n      </n.Row>\n    </ReactNative.View>\n  </n.Row>);";
          })()}>
        <n.Row>
          <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
            <slim_error.ErrorInfo brand={{"type":"light"}}/>
            <ReactNative.View style={{"height":5}}/>
            <slim_error.ErrorInfo
              brand={{"type":"light"}}
              result={{"tag":"user.account/incorrect_password"}}/>
            <ReactNative.View style={{"height":5}}/>
            <n.Row>
              <slim_error.ErrorInfo brand={{"type":"light"}}/>
              <ReactNative.View style={{"width":5}}/>
              <slim_error.ErrorInfo brand={{"type":"light"}}/>
            </n.Row>
          </ReactNative.View>
          <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
            <slim_error.ErrorInfo brand={{"type":"dark"}}/>
            <ReactNative.View style={{"height":5}}/>
            <slim_error.ErrorInfo
              brand={{"type":"dark"}}
              result={{"tag":"user.account/incorrect_password"}}/>
            <ReactNative.View style={{"height":5}}/>
            <n.Row>
              <slim_error.ErrorInfo brand={{"type":"dark"}}/>
              <ReactNative.View style={{"width":5}}/>
              <slim_error.ErrorInfo brand={{"type":"dark"}}/>
            </n.Row>
          </ReactNative.View>
        </n.Row>
      </n.EnclosedCodeContainer>
    </n.PortalSink>);
}

// melbourne.slim-error-test/MODULE [63] 
export var MODULE = {"ErrorInfoDemo":ErrorInfoDemo,"MODULE":MODULE};