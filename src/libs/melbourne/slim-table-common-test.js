import * as slim from './slim.js'

import * as slim_table_common from './slim-table-common.js'

import * as n from '../js/react-native.js'

// melbourne.slim-table-common-test/TableDefaultNotFoundDemo [42] 
export function TableDefaultNotFoundDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-common/TableDefaultNotFound"
      code={(function (){
          return "(\n  <n.Row>\n    <slim_table_common.TableDefaultNotFound design={{\"type\":\"light\"}}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <slim_table_common.TableDefaultNotFound design={{"type":"light"}}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-common-test/TableDefaultIsLoadingDemo [55] 
export function TableDefaultIsLoadingDemo(){
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-common/TableDefaultIsLoading"
      code={(function (){
          return "(\n  <n.Row>\n    <slim_table_common.TableDefaultIsLoading design={{\"type\":\"light\"}}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <slim_table_common.TableDefaultIsLoading design={{"type":"light"}}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-common-test/TableBackButtonDemo [68] 
export function TableBackButtonDemo(){
  let control = slim.useLocalControl();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-common/TableBackButton"
      code={(function (){
          return "(\n  <n.Row>\n    <slim_table_common.TableBackButton design={{\"type\":\"light\"}} control={control}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <slim_table_common.TableBackButton design={{"type":"light"}} control={control}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-common-test/TablePageViewDemo [86] 
export function TablePageViewDemo(){
  let control = slim.useLocalControl();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.slim-table-common/tablePageView"
      code={(function (){
          return "(\n  <n.Row/>);";
        })()}><n.Row/>
    </n.EnclosedCodeContainer>);
}

// melbourne.slim-table-common-test/MODULE [99] 
export var MODULE = {
  "TableDefaultNotFoundDemo":TableDefaultNotFoundDemo,
  "TableDefaultIsLoadingDemo":TableDefaultIsLoadingDemo,
  "TableBackButtonDemo":TableBackButtonDemo,
  "TablePageViewDemo":TablePageViewDemo,
  "MODULE":MODULE
};