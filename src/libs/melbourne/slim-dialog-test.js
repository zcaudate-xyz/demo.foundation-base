import React from 'react'

import * as ReactNative from 'react-native'

import * as slim_dialog from './slim-dialog.js'

import * as n from '../js/react-native.js'

// melbourne.slim-dialog-test/DialogDemo [20] 
export function DialogDemo(){
  let [current,setCurrent] = React.useState(true);
  let [visible,setVisible] = React.useState();
  let buttonRef = React.useRef();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-dialog/Dialog"
      code={(function (){
          return "(\n  <n.Row style={{\"marginTop\":30}}>\n    <ReactNative.Button\n      ref={buttonRef}\n      title=\"ON\"\n      onPress={function (){\n          return setVisible(true);\n        }}/>\n  </n.Row>);\n(\n  <slim_dialog.Dialog\n    design={{\"type\":\"light\"}}\n    title=\"Confirm Delete\"\n    body={(\n        <React.Fragment>Are you sure you wish to delete?</React.Fragment>)}\n    modalProps={{}}\n    onSubmit={function (){\n        return setVisible(false);\n      }}\n    onCancel={function (){\n        return setVisible(false);\n      }}\n    visible={visible}/>);";
        })()}>
      <n.Row style={{"marginTop":30}}>
        <ReactNative.Button
          ref={buttonRef}
          title="ON"
          onPress={function (){
              return setVisible(true);
            }}/>
      </n.Row>
      <slim_dialog.Dialog
        design={{"type":"light"}}
        title="Confirm Delete"
        body={(
            <React.Fragment>Are you sure you wish to delete?</React.Fragment>)}
        modalProps={{}}
        onSubmit={function (){
            return setVisible(false);
          }}
        onCancel={function (){
            return setVisible(false);
          }}
        visible={visible}/>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-dialog-test/MODULE [54] 
export var MODULE = {"DialogDemo":DialogDemo,"MODULE":MODULE};