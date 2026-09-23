import React from 'react'

import * as slim_table from './slim-table.js'

import * as r from '../js/react.js'

import * as slim_table_list from './slim-table-list.js'

import * as slim_core from './slim-core.js'

import * as slim_entry from './slim-entry.js'

import * as slim_table_toolbar from './slim-table-toolbar.js'

import * as slim_sheet from './slim-sheet.js'

// melbourne.slim/TableToolbar [15] 
export var TableToolbar = slim_table_toolbar.TableToolbar;

// melbourne.slim/Entry [17] 
export var Entry = slim_entry.Entry;

// melbourne.slim/Table [19] 
export var Table = slim_table.Table;

// melbourne.slim/TableList [21] 
export var TableList = slim_table_list.TableList;

// melbourne.slim/TableStandard [23] 
export var TableStandard = slim_table.TableStandard;

// melbourne.slim/TableEmbedded [25] 
export var TableEmbedded = slim_table.TableEmbedded;

// melbourne.slim/Sheet [27] 
export var Sheet = slim_sheet.Sheet;

// melbourne.slim/SheetHeader [29] 
export var SheetHeader = slim_sheet.SheetHeader;

// melbourne.slim/SheetRow [31] 
export var SheetRow = slim_sheet.SheetRow;

// melbourne.slim/SheetBasic [33] 
export var SheetBasic = slim_sheet.SheetBasic;

// melbourne.slim/createEntry [35] 
export function createEntry(props,...args){
  return React.createElement(slim_entry.Entry,props,...args);
}

// melbourne.slim/entry [40] 
export function entry(props,impl,opts){
  return React.createElement(slim_entry.Entry,Object.assign({},props,{impl},opts));
}

// melbourne.slim/useLocalPrimitives [45] 
export var useLocalPrimitives = slim_core.useLocalPrimitives;

// melbourne.slim/useRoutePrimitives [46] 
export var useRoutePrimitives = slim_core.useRoutePrimitives;

// melbourne.slim/useListControl [47] 
export var useListControl = slim_core.useListControl;

// melbourne.slim/useRouteControl [48] 
export var useRouteControl = slim_core.useRouteControl;

// melbourne.slim/useLocalControl [49] 
export var useLocalControl = slim_core.useLocalControl;

// melbourne.slim/getParentProps [50] 
export var getParentProps = slim_core.getParentProps;

// melbourne.slim/useParentControl [51] 
export var useParentControl = slim_core.useParentControl;

// melbourne.slim/MODULE [53] 
export var MODULE = {
  "TableToolbar":TableToolbar,
  "Entry":Entry,
  "Table":Table,
  "TableList":TableList,
  "TableStandard":TableStandard,
  "TableEmbedded":TableEmbedded,
  "Sheet":Sheet,
  "SheetHeader":SheetHeader,
  "SheetRow":SheetRow,
  "SheetBasic":SheetBasic,
  "createEntry":createEntry,
  "entry":entry,
  "useLocalPrimitives":useLocalPrimitives,
  "useRoutePrimitives":useRoutePrimitives,
  "useListControl":useListControl,
  "useRouteControl":useRouteControl,
  "useLocalControl":useLocalControl,
  "getParentProps":getParentProps,
  "useParentControl":useParentControl,
  "MODULE":MODULE
};