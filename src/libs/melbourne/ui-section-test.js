import * as ReactNative from 'react-native'

import * as ui_section from './ui-section.js'

import * as n from '../js/react-native.js'

// melbourne.ui-section-test/SectionBaseDemo [21] 
export function SectionBaseDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-section/SectionBase"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_section.SectionBase title=\"Market\" design={{\"type\":\"light\"}}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_section.SectionBase title=\"Market\" design={{\"type\":\"dark\"}}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.SectionBase title="Market" design={{"type":"light"}}/>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_section.SectionBase title="Market" design={{"type":"dark"}}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-section-test/SectionDemo [49] 
export function SectionDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-section/Section"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_section.Section title=\"Market\" design={{\"type\":\"light\"}}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_section.Section title=\"Market\" design={{\"type\":\"dark\"}}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.Section title="Market" design={{"type":"light"}}/>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_section.Section title="Market" design={{"type":"dark"}}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-section-test/SectionFoldDemo [74] 
export function SectionFoldDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-section/SectionFold"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_section.SectionFold title=\"Market\" design={{\"type\":\"light\"}}/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"backgroundColor\":\"#333\",\"flex\":1,\"padding\":10}}>\n      <ui_section.SectionFold title=\"Market\" design={{\"type\":\"dark\"}}/>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.SectionFold title="Market" design={{"type":"light"}}/>
        </ReactNative.View>
        <ReactNative.View style={{"backgroundColor":"#333","flex":1,"padding":10}}>
          <ui_section.SectionFold title="Market" design={{"type":"dark"}}/>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-section-test/CardBoundaryDemo [99] 
export function CardBoundaryDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-section/CardBoundary"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}>\n      <ui_section.CardBoundary><ReactNative.View style={{\"backgroundColor\":\"blue\"}}/></ui_section.CardBoundary>\n    </ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}>
          <ui_section.CardBoundary><ReactNative.View style={{"backgroundColor":"blue"}}/></ui_section.CardBoundary>
        </ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-section-test/EmptyButtonDemo [117] 
export function EmptyButtonDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.ui-section/EmptyButton"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.View style={{\"backgroundColor\":\"#eee\",\"flex\":1,\"padding\":10}}><ui_section.EmptyButton design={{\"type\":\"light\"}}/></ReactNative.View>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.View style={{"backgroundColor":"#eee","flex":1,"padding":10}}><ui_section.EmptyButton design={{"type":"light"}}/></ReactNative.View>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.ui-section-test/MODULE [132] 
export var MODULE = {
  "SectionBaseDemo":SectionBaseDemo,
  "SectionDemo":SectionDemo,
  "SectionFoldDemo":SectionFoldDemo,
  "CardBoundaryDemo":CardBoundaryDemo,
  "EmptyButtonDemo":EmptyButtonDemo,
  "MODULE":MODULE
};