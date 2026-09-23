import React from 'react'

import * as ReactNative from 'react-native'

import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as data from '../xt/lang/common-data.js'

import * as ui_static from './ui-static.js'

import * as lib from '../xt/lang/common-lib.js'

import * as r from '../js/react.js'

import * as ui_section from './ui-section.js'

import * as ext_view from '../js/react/ext-model.js'

import * as ui_swiper from './ui-swiper.js'

import * as ui_text from './ui-text.js'

import * as ui_util from '../js/react-native/ui-util.js'

import * as slim_entry from './slim-entry.js'

import * as slim_table_common from './slim-table-common.js'

import * as n from '../js/react-native.js'

import * as event_view from '../xt/event/base-model.js'

import * as slim_sheet from './slim-sheet.js'

// melbourne.slim-table-list/TableListCardBrief [44] 
export function TableListCardBrief(props){
  let {design,entry,style,children} = props;
  return (
    <ui_section.CardBoundary style={style}>
      <n.Row>
        <ReactNative.View style={{"flex":1}}>{children}</ReactNative.View>
      </n.Row>
    </ui_section.CardBoundary>);
}

// melbourne.slim-table-list/TableListCardNav [60] 
export function TableListCardNav(props){
  let {design,entry,control,style,list = {},children} = props;
  let {routeKey} = control;
  let isDetail = entry.id == control.showDetail;
  let {showDetail = "none"} = list;
  let detailFn = function (){
    if(!isDetail){
      control.setShowDetail(entry.id);
    }
    else{
      control.setShowList(true);
    }
  };
  let buttonElem = (
    <ui_text.ButtonMinor
      text={(
          <RNIcon key="detail" name="chevron-right"/>)}
      style={{
          "width":30,
          "height":27,
          "paddingHorizontal":0,
          "textAlign":"center"
        }}
      onPress={detailFn}
      design={design}/>);
  return (
    <ui_section.CardBoundary style={style}>
      <n.Row>
        <ReactNative.View style={{"flex":1}}>{children}</ReactNative.View>
        {(showDetail == "none") ? null : ((showDetail == "float") ? (
          <ReactNative.View style={{"position":"absolute","right":0,"top":10}}>{buttonElem}</ReactNative.View>) : ((showDetail == "right") ? (
          <ReactNative.View style={{"top":10}}>{buttonElem}</ReactNative.View>) : null))}
      </n.Row>
    </ui_section.CardBoundary>);
}

// melbourne.slim-table-list/TableListCardSwipe [115] 
export function TableListCardSwipe({children,style,display,...rprops}){
  let {actions,control,design,entry} = rprops;
  let {
    direction,
    textDetail = "DETAIL",
    textDelete = "DELETE",
    showDetail = true,
    showDelete = true
  } = data.get_in(display,["swipe"]) || {};
  let swipeView = (
    <ReactNative.View
      key="detail"
      style={{
          "flex":1,
          "justifyContent":"space-around",
          "alignItems":"center"
        }}>
      {showDetail ? React.createElement(ui_text.ButtonAccent,{design,"text":textDetail,"onPress":function (){
          return control.setShowDetail(entry.id);
        }}) : null}
      {showDelete ? React.createElement(ui_text.ConfirmTooltip,{design,"text":textDelete,"onPress":function (){
          return actions.delete(entry.id);
        }}) : null}
    </ReactNative.View>);
  let swipeProps = (direction == "left") ? {
    "negEnabled":showDetail || showDelete,
    "negThreshold":-50,
    "negFull":-80,
    "negView":swipeView
  } : {
    "posEnabled":showDetail || showDelete,
    "posThreshold":50,
    "posFull":80,
    "posView":swipeView
  };
  return (
    <ui_section.CardBoundary style={style}>
      {React.createElement(ui_swiper.Swiper,Object.assign({design},swipeProps),children)}
    </ui_section.CardBoundary>);
}

// melbourne.slim-table-list/TableListCardFold [167] 
export function TableListCardFold(props){
  let {display = {},components = {},design,entry,control,scroll,children} = props;
  let DetailComponent = components["entry_detail"] || (display["detail"] && slim_entry.Entry) || slim_table_common.TableDefaultNotFound;
  let detailElem = React.createElement(
    DetailComponent,
    Object.assign({"impl":display["detail"]},props)
  );
  return (
    <ReactNative.View>
      {React.createElement(TableListCardNav,props)}
      <ui_section.CardBoundary>
        <ui_util.Fold visible={entry.id == control.showDetail} noTransition={true}>
          {scroll ? (
            <ReactNative.View style={{"height":400}}>{detailElem}</ReactNative.View>) : detailElem}
        </ui_util.Fold>
      </ui_section.CardBoundary>
    </ReactNative.View>);
}

// melbourne.slim-table-list/TableListCard [204] 
export function TableListCard(props){
  let {display = {},custom = {},components = {}} = props;
  let BriefComponent = components["entry_brief"] || (display["brief"] && slim_entry.Entry) || slim_table_common.TableDefaultNotFound;
  let briefElem = React.createElement(
    BriefComponent,
    Object.assign({"impl":display["brief"]},props,custom["brief"])
  );
  let {card = {}} = display["brief"] || {};
  let Component = (card.component == "swipe") ? TableListCardSwipe : ((card.component == "fold") ? TableListCardFold : (lib.is_functionp(card.component) ? card.component : TableListCardBrief));
  return React.createElement(Component,props,briefElem);
}

// melbourne.slim-table-list/TableListViewEntries [237] 
export function TableListViewEntries({entries,impl,...rprops}){
  let join = data.get_in(impl,["groups","join"]);
  return (
    <ReactNative.FlatList
      data={entries}
      keyExtractor={data.id_fn}
      renderItem={function (iprops,i){
          let entry = iprops.item;
          return (
            <ReactNative.View key={entry.id}>
              {React.createElement(
                TableListCard,
                Object.assign({},rprops,{"entry":entry,"list":impl})
              )}
              {(join && ((1 + i) < entries.length)) ? React.createElement(slim_entry.Entry,Object.assign({},rprops,{"impl":join})) : null}
            </ReactNative.View>);
        }}/>);
}

// melbourne.slim-table-list/TableListViewGroup [262] 
export function TableListViewGroup(props){
  let {group,impl,...rprops} = props;
  let component = data.get_in(impl,["groups","header"]);
  let {entries} = group;
  return (
    <ReactNative.View style={{"marginBottom":5}}>
      <ReactNative.View style={{"marginHorizontal":10}}>
        {React.createElement(component || slim_sheet.SheetGroupHeader,props)}
      </ReactNative.View>
      {React.createElement(TableListViewEntries,Object.assign(rprops,{entries,impl}))}
    </ReactNative.View>);
}

// melbourne.slim-table-list/TableListViewBase [280] 
export function TableListViewBase(props){
  let {entries,impl} = props;
  let itemsImpl = Object.assign(
    {"reverse":false,"sort":lib.identity,"filter":lib.identity},
    impl.items
  );
  let isGrouped = lib.not_nilp(impl.groups);
  if(isGrouped){
    let groups = slim_sheet.groupEntries(entries,impl);
    return (
      <ReactNative.FlatList
        data={groups}
        keyExtractor={data.first}
        renderItem={function (iprops){
            let [name,entries] = iprops.item;
            return React.createElement(TableListViewGroup,Object.assign({},props,{
              "key":name,
              "group":{entries,name,"format":impl.groups.format}
            }));
          }}/>);
  }
  else{
    return React.createElement(TableListViewEntries,props);
  }
}

// melbourne.slim-table-list/usePageEntries [309] 
export function usePageEntries(props){
  let {control,views,impl,displayKey = "list"} = props;
  let {filterFn = lib.identity,sortFn = lib.identity} = impl;
  let page = Object.assign({"display":20},data.get_in(impl,["page"]));
  let [showPage,setShowPage] = data.get_in(control,["setShowPage"]) ? [control.showPage,control.setShowPage] : React.useState(1);
  let entriesAll = sortFn(
    props.entries || ext_view.listenView(views[displayKey],"success") || [],
    control.orderBy
  );
  let entries = data.arr_filter(data.arr_slice(
    entriesAll,
    (showPage - 1) * page.display,
    showPage * page.display
  ),lib.identity);
  return {entries,entriesAll,page,setShowPage,showPage};
}

// melbourne.slim-table-list/TableListViewPagedScaffold [337] 
export function TableListViewPagedScaffold(props){
  let {ListComponent,design} = props;
  let {entries,entriesAll,page,setShowPage,showPage} = usePageEntries(props);
  return (
    <ReactNative.View>
      {React.createElement(ListComponent,Object.assign({},props,{entries}))}
      {(entriesAll.length > page.display) ? (
        <ui_static.Div
          design={design}
          style={{
              "alignItems":"center",
              "marginHorizontal":10,
              "marginTop":10,
              "marginBottom":20,
              "maxWidth":550
            }}>
          <slim_sheet.SheetPagination
            design={design}
            control={{setShowPage,showPage}}
            impl={{page}}
            entries={entriesAll}/>
        </ui_static.Div>) : null}
    </ReactNative.View>);
}

// melbourne.slim-table-list/TableListViewPaged [363] 
export function TableListViewPaged(props){
  let ListComponent = TableListViewBase;
  return React.createElement(
    TableListViewPagedScaffold,
    Object.assign({},props,{ListComponent})
  );
}

// melbourne.slim-table-list/useRemotePagedEntries [374] 
export function useRemotePagedEntries(props){
  let {control,views,impl,displayKey = "list"} = props;
  let {filterFn = lib.identity,sortFn = lib.identity} = impl;
  let page = Object.assign(
    {"display":20,"total":0,"argsFn":lib.identity},
    data.get_in(impl,["page"])
  );
  let [showPage,setShowPage] = data.get_in(control,["setShowPage"]) ? [control.showPage,control.setShowPage] : React.useState(1);
  let args = page.argsFn([showPage,page.display],props);
  let entriesUpdatedRef = React.useRef();
  let refresh_fn = function (){
    entriesUpdatedRef.current = Date.now();
    ext_view.refreshArgsFn(
      views[displayKey],
      args,
      {"remote":"always","meta":{displayKey}}
    );
  };
  let entries = ext_view.listenView(views[displayKey],"success",{
    "resultFn":function (event){
        if("view.output" == event.type){
          if("main" == event.data.tag){
            if((Date.now() - entriesUpdatedRef.current) > 5000){
              refresh_fn();
            }
          }
        }
      }
  },null,"remote");
  let output = ext_view.listenViewOutput(views[displayKey],["pending"],{},null,"remote");
  React.useEffect(function (){
    refresh_fn();
  },[JSON.stringify(args)]);
  React.useEffect(function (){
    refresh_fn();
    return function (){
      event_view.set_output(views[displayKey],null);
    };
  },[]);
  return {entries,output,page,setShowPage,showPage};
}

// melbourne.slim-table-list/TableListViewRemotePagedScaffold [433] 
export function TableListViewRemotePagedScaffold(props){
  let {ListComponent,design,variant} = props;
  let {entries,output,page,setShowPage,showPage} = useRemotePagedEntries(props);
  return (
    <ReactNative.View style={{"flex":1}}>
      {output.pending ? (
        <ReactNative.View
          style={{"flex":1,"alignItems":"center","justifyContent":"center"}}><ReactNative.ActivityIndicator/>
        </ReactNative.View>) : (data.is_emptyp(entries) ? (
        <ReactNative.View
          style={{"flex":1,"alignItems":"center","justifyContent":"center"}}>
          <ui_static.Text style={{"fontSize":13}} design={design}>No Entries</ui_static.Text>
        </ReactNative.View>) : (
        <ui_static.ScrollView design={design}>
          {React.createElement(ListComponent,Object.assign({},props,{entries}))}
        </ui_static.ScrollView>))}
      {(page.total > page.display) ? (
        <ui_static.Div
          design={design}
          variant={variant}
          style={{
              "alignItems":"center",
              "marginHorizontal":10,
              "marginTop":5,
              "marginBottom":5,
              "maxWidth":550
            }}>
          <slim_sheet.SheetPagination
            design={design}
            control={{setShowPage,showPage}}
            impl={{page}}
            entries={[]}/>
        </ui_static.Div>) : null}
    </ReactNative.View>);
}

// melbourne.slim-table-list/TableListViewRemotePaged [496] 
export function TableListViewRemotePaged(props){
  let ListComponent = TableListViewBase;
  return React.createElement(
    TableListViewRemotePagedScaffold,
    Object.assign({},props,{ListComponent})
  );
}

// melbourne.slim-table-list/TableListView [503] 
export function TableListView(props){
  let {entries,impl} = props;
  if(data.get_in(impl,["page","remote"])){
    return React.createElement(TableListViewRemotePaged,props);
  }
  else if(data.get_in(impl,["page"])){
    return React.createElement(TableListViewPaged,props);
  }
  else{
    return React.createElement(TableListViewBase,props);
  }
}

// melbourne.slim-table-list/TableList [521] 
export function TableList(props){
  let {entries,style,...rprops} = props;
  let {
    design,
    mini,
    actions,
    views,
    display,
    components,
    control,
    displayKey = "list"
  } = rprops;
  let impl = data.get_in(display,["list"]) || {};
  impl = (impl.props ? Object.assign({},impl,impl.props(impl,props)) : impl);
  let {top,bottom,filterFn = lib.identity,sortFn = lib.identity} = impl;
  entries = sortFn(
    entries || ext_view.listenView(views[displayKey],"success") || [],
    control.orderBy
  );
  let topElem = top ? React.createElement(slim_entry.Entry,Object.assign({},props,{"impl":top})) : null;
  let bottomElem = bottom ? React.createElement(slim_entry.Entry,Object.assign({},props,{"impl":bottom})) : null;
  let centerElem = ("row" == impl.type) ? React.createElement(slim_sheet.Sheet,Object.assign({},props,{entries,impl})) : React.createElement(TableListView,Object.assign({},props,{entries,impl}));
  return (
    <ReactNative.View style={style}>{topElem}{centerElem}{bottomElem}</ReactNative.View>);
}

// melbourne.slim-table-list/MODULE [568] 
export var MODULE = {
  "TableListCardBrief":TableListCardBrief,
  "TableListCardNav":TableListCardNav,
  "TableListCardSwipe":TableListCardSwipe,
  "TableListCardFold":TableListCardFold,
  "TableListCard":TableListCard,
  "TableListViewEntries":TableListViewEntries,
  "TableListViewGroup":TableListViewGroup,
  "TableListViewBase":TableListViewBase,
  "usePageEntries":usePageEntries,
  "TableListViewPagedScaffold":TableListViewPagedScaffold,
  "TableListViewPaged":TableListViewPaged,
  "useRemotePagedEntries":useRemotePagedEntries,
  "TableListViewRemotePagedScaffold":TableListViewRemotePagedScaffold,
  "TableListViewRemotePaged":TableListViewRemotePaged,
  "TableListView":TableListView,
  "TableList":TableList,
  "MODULE":MODULE
};