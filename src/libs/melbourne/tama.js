import * as T from 'tamagui'

import React from 'react'

import * as data from '../xt/lang/common-data.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as slim_core from './slim-core.js'

// melbourne.tama/entryValue [15] 
export function entryValue(entry,impl,props){
  let {template,format = lib.identity} = impl || {};
  let value = data.template_entry(entry,template,props);
  let output = value;
  try{
    output = format(value,props);
  }
  catch(e){
    
  }
  return (React.isValidElement(output) || lib.is_stringp(output)) ? output : JSON.stringify(output);
}

// melbourne.tama/entryChildren [32] 
export function entryChildren(props,body,renderFn){
  if(lib.nilp(body)){
    return null;
  }
  else if(React.isValidElement(body)){
    return body;
  }
  else if(lib.is_objectp(body) && body.type){
    return renderFn(body,null);
  }
  else if(lib.is_arrayp(body)){
    return body.map(function (child,i){
      return renderFn(child,i);
    });
  }
  else if(lib.is_objectp(body)){
    return Object.keys(body).map(function (key){
      return renderFn(body[key],key);
    });
  }
  else{
    return body;
  }
}

// melbourne.tama/renderEntry [61] 
export function renderEntry(props,impl){
  let {entry} = props;
  if(React.isValidElement(impl)){
    return impl;
  }
  impl = (impl || {});
  let {
    type,
    key,
    component,
    body,
    text,
    style,
    template,
    format,
    onPress,
    fieldProps,
    image,
    gap = "$2",
    ...iprops
  } = impl;
  let customProps = data.get_in(props,["custom",key]) || {};
  let renderFn = function (child,i){
    return renderEntry(Object.assign({},props,{"key":child.key || i}),child);
  };
  let childrenFn = function (value){
    return entryChildren(props,value,renderFn);
  };
  let textValue = entryValue(entry,impl,props);
  let textProps = Object.assign(
    {"color":"$color"},
    iprops,
    customProps,
    style ? {"style":style} : {}
  );
  let layoutProps = Object.assign(
    {"gap":gap,"marginVertical":"$1"},
    iprops,
    customProps,
    style ? {"style":style} : {}
  );
  if(type == "h"){
    return (
      <T.XStack {...layoutProps}>{childrenFn(body)}</T.XStack>);
  }
  else if(type == "v"){
    return (
      <T.YStack {...layoutProps}>{childrenFn(body)}</T.YStack>);
  }
  else if(type == "card"){
    return (
      <T.Card
        {...Object.assign(
        {"gap":"$2","padding":"$3","borderRadius":"$4"},
        iprops,
        customProps,
        style ? {"style":style} : {}
      )}>
        <T.XStack gap="$3" alignItems="center">
          {image ? (
            <T.Avatar size="$5">
              <T.AvatarImage
                src={data.template_entry(entry,data.get_in(image,["template"]),props)}/>
              <T.AvatarFallback><T.Text>{entryValue(entry,image,props)}</T.Text></T.AvatarFallback>
            </T.Avatar>) : null}
          <T.YStack flex={1} gap="$2">{childrenFn(body)}</T.YStack>
        </T.XStack>
      </T.Card>);
  }
  else if((type == "title-h1") || (type == "h1")){
    return (
      <T.H1 {...textProps}>{textValue}</T.H1>);
  }
  else if((type == "title-h2") || (type == "h2")){
    return (
      <T.H2 {...textProps}>{textValue}</T.H2>);
  }
  else if((type == "title-h3") || (type == "h3")){
    return (
      <T.H3 {...textProps}>{textValue}</T.H3>);
  }
  else if((type == "title-h4") || (type == "h4")){
    return (
      <T.H4 {...textProps}>{textValue}</T.H4>);
  }
  else if((type == "title-h5") || (type == "h5")){
    return (
      <T.H5 {...textProps}>{textValue}</T.H5>);
  }
  else if(type == "title"){
    return (
      <T.H6 {...textProps}>{textValue}</T.H6>);
  }
  else if((type == "bold") || (type == "p")){
    return (
      <T.Paragraph
        {...Object.assign((type == "bold") ? {"fontWeight":"700"} : {},textProps)}>{textValue}
      </T.Paragraph>);
  }
  else if(type == "raw"){
    return (
      <T.Text {...textProps}>{textValue}</T.Text>);
  }
  else if(type == "fill"){
    return (
      <T.Spacer {...Object.assign({"flex":1},iprops,customProps)}/>);
  }
  else if(type == "separator"){
    return (
      <T.Separator
        {...Object.assign(
        {"marginVertical":"$2"},
        iprops,
        customProps,
        style ? {"style":style} : {}
      )}/>);
  }
  else if(type == "pair"){
    return (
      <T.XStack
        {...Object.assign(
        {"gap":"$2","justifyContent":"space-between"},
        iprops,
        customProps,
        style ? {"style":style} : {}
      )}>
        <T.Text color="$colorSecondary" flex={1}>{childrenFn(impl.title)}</T.Text>
        <T.Text color="$color" textAlign="right">{childrenFn(impl.text)}</T.Text>
      </T.XStack>);
  }
  else if(type == "control"){
    return (
      <T.Button
        {...Object.assign(
        {"size":"$3","onPress":onPress || props.onPress},
        iprops,
        customProps
      )}>{text || textValue}
      </T.Button>);
  }
  else if(type == "field"){
    return (
      <T.Input
        {...Object.assign({
        "size":"$3",
        "value":textValue || "",
        "onChangeText":props.onChangeText || impl.onChangeText
      },fieldProps,iprops,customProps)}/>);
  }
  else if(type == "icon"){
    return (
      <T.Text {...textProps}>{textValue}</T.Text>);
  }
  else if(type == "image"){
    return (
      <T.Avatar {...Object.assign({"size":"$5"},iprops,customProps)}>
        <T.AvatarImage
          src={data.template_entry(entry,data.get_in(image,["template"]),props)}/>
        <T.AvatarFallback><T.Text>{textValue}</T.Text></T.AvatarFallback>
      </T.Avatar>);
  }
  else if(type == "free"){
    return React.createElement(
      component,
      Object.assign(props,iprops,customProps,{"impl":impl}),
      childrenFn(body)
    );
  }
  else{
    return (
      <T.Text color="$red10">IMPL TYPE NOT FOUND: {type}</T.Text>);
  }
}

// melbourne.tama/Entry [250] 
export function Entry(props){
  return renderEntry(props,props.impl);
}

// melbourne.tama/Table [256] 
export function Table(props){
  let {entries,impl,columns = []} = props;
  return (
    <T.YStack gap="$2">
      <T.XStack
        gap="$2"
        paddingVertical="$2"
        borderBottomWidth={1}
        borderColor="$borderColor">
        {columns.map(function (column){
          return (
            <T.Text flex={1} fontWeight="700">{column.label || column.name}</T.Text>);
        })}
      </T.XStack>
      {(entries || []).map(function (entry,i){
        return (
          <T.XStack key={entry.id || i} gap="$2" paddingVertical="$2">
            {columns.map(function (column){
              return (
                <T.Text flex={1}>
                  {entryValue(entry,{"template":column.data,"format":column.format},props)}
                </T.Text>);
            })}
          </T.XStack>);
      })}
    </T.YStack>);
}

// melbourne.tama/TableToolbar [296] 
export function TableToolbar(props){
  let {design,control,children} = props;
  let toolbarOpts = props.toolbarOpts;
  toolbarOpts = (toolbarOpts || {});
  let {showCreate = true,showOrderBy = true} = toolbarOpts;
  let showList = control.showList || true;
  return (
    <T.XStack
      gap="$2"
      alignItems="center"
      paddingVertical="$2"
      paddingHorizontal="$2">
      {showCreate ? (
        <T.Button
          size="$2"
          onPress={function (){
              if(control.setShowCreate){
                control.setShowCreate(true);
              }
            }}>{showList ? "CREATE" : "BACK"}
        </T.Button>) : null}
      {children}
      {showOrderBy ? (
        <T.XStack gap="$1">
          <T.Button
            size="$2"
            chromeless={true}
            onPress={function (){
                if(control.setOrderBy){
                  control.setOrderBy("name");
                }
              }}>NAME
          </T.Button>
          <T.Button
            size="$2"
            chromeless={true}
            onPress={function (){
                if(control.setOrderBy){
                  control.setOrderBy("time");
                }
              }}>TIME
          </T.Button>
        </T.XStack>) : null}
    </T.XStack>);
}

// melbourne.tama/TableList [342] 
export function TableList(props){
  let {entries = [],impl = {}} = props;
  let itemImpl = impl.item || props.itemImpl || {
    "type":"card",
    "body":{"title":{"type":"title","template":["title"]}}
  };
  return (
    <T.ScrollView flex={1}>
      {entries.map(function (entry,i){
        return (
          <T.YStack key={entry.id || i} paddingBottom="$2">
            {React.createElement(
              Entry,
              Object.assign({},props,{"entry":entry,"impl":itemImpl})
            )}
          </T.YStack>);
      })}
    </T.ScrollView>);
}

// melbourne.tama/TableStandard [369] 
export function TableStandard(props){
  let {entries = [],control} = props;
  let showList = control.showList || true;
  return (data.is_emptyp(entries) && showList) ? (
    <T.YStack flex={1} gap="$3" alignItems="center" justifyContent="center">
      <T.Text color="$color11">No entries</T.Text>
      <T.Button
        size="$3"
        onPress={function (){
            if(control.setShowCreate){
              control.setShowCreate(true);
            }
          }}>ADD
      </T.Button>
    </T.YStack>) : React.createElement(Table,props);
}

// melbourne.tama/TableEmbedded [395] 
export function TableEmbedded(props){
  let {entries = [],control} = props;
  return (
    <T.YStack flex={1} gap="$2">
      {data.not_emptyp(entries) ? (
        <T.Button
          size="$2"
          alignSelf="flex-start"
          onPress={function (){
              if(control.setShowCreate){
                control.setShowCreate(true);
              }
            }}>ADD
        </T.Button>) : null}
      {React.createElement(Table,props)}
    </T.YStack>);
}

// melbourne.tama/SheetHeader [416] 
export function SheetHeader(props){
  let {impl = {},style} = props;
  let {columns} = impl;
  columns = (columns || []);
  return (
    <T.XStack
      {...Object.assign({
      "gap":"$2",
      "paddingHorizontal":"$2",
      "paddingVertical":"$2",
      "borderBottomWidth":1,
      "borderColor":"$borderColor"
    },style ? {"style":style} : {})}>
      {columns.map(function (column,i){
        return (
          <T.Text key={i} flex={1} fontWeight="700" color="$colorSecondary">{column.label || column.name || column.key}</T.Text>);
      })}
    </T.XStack>);
}

// melbourne.tama/SheetRow [444] 
export function SheetRow(props){
  let {entry = {},impl = {},custom = {},style} = props;
  let {columns} = impl;
  columns = (columns || []);
  return (
    <T.XStack
      {...Object.assign({
      "gap":"$2",
      "paddingHorizontal":"$2",
      "paddingVertical":"$2",
      "borderBottomWidth":1,
      "borderColor":"$borderColor"
    },style ? {"style":style} : {})}>
      {columns.map(function (column,i){
        let cellProps = Object.assign(
          {},
          props,
          {"entry":entry,"key":i,"impl":column},
          data.get_in(custom,[column.key]) || {}
        );
        return (
          <T.YStack key={i} flex={1}>
            {column.type ? React.createElement(Entry,cellProps) : (
              <T.Text color="$color">{entryValue(entry,column,props)}</T.Text>)}
          </T.YStack>);
      })}
    </T.XStack>);
}

// melbourne.tama/SheetBasic [482] 
export function SheetBasic(props){
  let {entries = [],impl} = props;
  return (
    <T.YStack flex={1}>
      {React.createElement(SheetHeader,props)}
      <T.ScrollView flex={1}>
        {entries.map(function (entry,i){
          return React.createElement(
            SheetRow,
            Object.assign({},props,{"key":entry.id || i,"entry":entry})
          );
        })}
      </T.ScrollView>
    </T.YStack>);
}

// melbourne.tama/Sheet [504] 
export function Sheet(props){
  return React.createElement(SheetBasic,props);
}

// melbourne.tama/createEntry [510] 
export function createEntry(props,...args){
  return React.createElement(Entry,props,...args);
}

// melbourne.tama/entry [516] 
export function entry(props,impl,opts){
  return React.createElement(Entry,Object.assign({},props,{impl},opts || {}));
}

// melbourne.tama/useLocalPrimitives [527] 
export var useLocalPrimitives = slim_core.useLocalPrimitives;

// melbourne.tama/useRoutePrimitives [528] 
export var useRoutePrimitives = slim_core.useRoutePrimitives;

// melbourne.tama/useListControl [529] 
export var useListControl = slim_core.useListControl;

// melbourne.tama/useRouteControl [530] 
export var useRouteControl = slim_core.useRouteControl;

// melbourne.tama/useLocalControl [531] 
export var useLocalControl = slim_core.useLocalControl;

// melbourne.tama/getParentProps [532] 
export var getParentProps = slim_core.getParentProps;

// melbourne.tama/useParentControl [533] 
export var useParentControl = slim_core.useParentControl;

// melbourne.tama/MODULE [535] 
export var MODULE = {
  "entryValue":entryValue,
  "entryChildren":entryChildren,
  "renderEntry":renderEntry,
  "Entry":Entry,
  "Table":Table,
  "TableToolbar":TableToolbar,
  "TableList":TableList,
  "TableStandard":TableStandard,
  "TableEmbedded":TableEmbedded,
  "SheetHeader":SheetHeader,
  "SheetRow":SheetRow,
  "SheetBasic":SheetBasic,
  "Sheet":Sheet,
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