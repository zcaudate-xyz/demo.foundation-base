import * as ReactNative from 'react-native'

import React from 'react'

import * as a from './animate.js'

import * as ui_util from './ui-util.js'

import * as n from '../react-native.js'

// js.react-native.ui-util-test/PageDemo [21] 
export function PageDemo(){
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-util/Page"
      style={{"height":200}}
      code={(function (){
          return "(\n  <ui_util.Page\n    headerComponent={function (){\n        return (\n          <ReactNative.View style={{\"height\":30,\"backgroundColor\":\"red\"}}/>);\n      }}\n    footerComponent={function (){\n        return (\n          <ReactNative.View style={{\"height\":30,\"backgroundColor\":\"orange\"}}/>);\n      }}\n    styleMenu={{\"height\":60}}\n    titleComponent={function (){\n        return (\n          <ReactNative.View style={{\"flex\":1,\"backgroundColor\":\"yellow\"}}/>);\n      }}\n    leftComponent={function (){\n        return (\n          <ReactNative.View style={{\"flex\":1,\"backgroundColor\":\"green\"}}/>);\n      }}\n    rightComponent={function (){\n        return (\n          <ReactNative.View style={{\"flex\":1,\"backgroundColor\":\"blue\"}}/>);\n      }}>\n    <ReactNative.View style={{\"flex\":1,\"backgroundColor\":\"black\"}}/>\n  </ui_util.Page>);";
        })()}>
      <ui_util.Page
        headerComponent={function (){
            return (
              <ReactNative.View style={{"height":30,"backgroundColor":"red"}}/>);
          }}
        footerComponent={function (){
            return (
              <ReactNative.View style={{"height":30,"backgroundColor":"orange"}}/>);
          }}
        styleMenu={{"height":60}}
        titleComponent={function (){
            return (
              <ReactNative.View style={{"flex":1,"backgroundColor":"yellow"}}/>);
          }}
        leftComponent={function (){
            return (
              <ReactNative.View style={{"flex":1,"backgroundColor":"green"}}/>);
          }}
        rightComponent={function (){
            return (
              <ReactNative.View style={{"flex":1,"backgroundColor":"blue"}}/>);
          }}>
        <ReactNative.View style={{"flex":1,"backgroundColor":"black"}}/>
      </ui_util.Page>
    </n.EnclosedCodeContainer>);
}

// js.react-native.ui-util-test/FadeDemo [48] 
export function FadeDemo(){
  let [visible,setVisible] = React.useState(true);
  let [size,setSize] = React.useState(100);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-util/Fade"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"V\"\n      onPress={function (){\n          return setVisible(!visible);\n        }}/>\n  </n.Row>);\n(\n  <ui_util.Fade visible={visible}>\n    <ReactNative.View style={{\"height\":size,\"width\":100,\"backgroundColor\":\"red\"}}/>\n  </ui_util.Fade>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="V"
          onPress={function (){
              return setVisible(!visible);
            }}/>
      </n.Row>
      <ui_util.Fade visible={visible}>
        <ReactNative.View style={{"height":size,"width":100,"backgroundColor":"red"}}/>
      </ui_util.Fade>
    </n.EnclosedCodeContainer>);
}

// js.react-native.ui-util-test/FoldInnerDemo [75] 
export function FoldInnerDemo(){
  let [visible,setVisible] = React.useState(true);
  let [size,setSize] = React.useState(100);
  let vindicator = a.useBinaryIndicator(visible);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-util/FoldInner"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"V\"\n      onPress={function (){\n          return setVisible(!visible);\n        }}/>\n    <n.Tabs value={size} setValue={setSize} data={[100,200]}/>\n  </n.Row>);\n(\n  <n.Row style={{\"height\":100}}>\n    <ui_util.FoldInner\n      aspect=\"width\"\n      visible={visible}\n      chord={{\"visible\":visible}}\n      indicators={{\"visible\":vindicator}}>\n      <ReactNative.View style={{\"height\":100,\"width\":size,\"backgroundColor\":\"red\"}}/>\n    </ui_util.FoldInner>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="V"
          onPress={function (){
              return setVisible(!visible);
            }}/>
        <n.Tabs value={size} setValue={setSize} data={[100,200]}/>
      </n.Row>
      <n.Row style={{"height":100}}>
        <ui_util.FoldInner
          aspect="width"
          visible={visible}
          chord={{"visible":visible}}
          indicators={{"visible":vindicator}}>
          <ReactNative.View style={{"height":100,"width":size,"backgroundColor":"red"}}/>
        </ui_util.FoldInner>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.ui-util-test/FoldDemo [109] 
export function FoldDemo(){
  let [visible,setVisible] = React.useState(true);
  let [size,setSize] = React.useState(100);
  return (
    <n.EnclosedCodeContainer
      label="js.react-native.ui-util/Fold"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"V\"\n      onPress={function (){\n          return setVisible(!visible);\n        }}/>\n    <n.Tabs value={size} setValue={setSize} data={[100,200]}/>\n  </n.Row>);\n(\n  <n.Row style={{\"height\":100}}>\n    <ui_util.Fold visible={visible}>\n      <ReactNative.View\n        style={{\"height\":size,\"width\":100,\"backgroundColor\":\"green\"}}/>\n    </ui_util.Fold>\n    <ui_util.Fold visible={visible} aspect=\"width\">\n      <ReactNative.View\n        style={{\"height\":100,\"width\":size,\"backgroundColor\":\"blue\"}}/>\n    </ui_util.Fold>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="V"
          onPress={function (){
              return setVisible(!visible);
            }}/>
        <n.Tabs value={size} setValue={setSize} data={[100,200]}/>
      </n.Row>
      <n.Row style={{"height":100}}>
        <ui_util.Fold visible={visible}>
          <ReactNative.View
            style={{"height":size,"width":100,"backgroundColor":"green"}}/>
        </ui_util.Fold>
        <ui_util.Fold visible={visible} aspect="width">
          <ReactNative.View
            style={{"height":100,"width":size,"backgroundColor":"blue"}}/>
        </ui_util.Fold>
      </n.Row>
    </n.EnclosedCodeContainer>);
}