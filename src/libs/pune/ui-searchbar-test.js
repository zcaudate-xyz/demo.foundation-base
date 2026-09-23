import * as ReactNative from 'react-native'

import React from 'react'

import * as r from '../js/react.js'

import * as searchbar from './ui-searchbar.js'

import * as n from '../js/react-native.js'

// pune.ui-searchbar-test/SearchBarDemo [50] 
export function SearchBarDemo(){
  let [query,setQuery] = React.useState("");
  return (
    <n.EnclosedCodeContainer
      label="pune.ui-searchbar/SearchBar"
      code={(function (){
          return "(\n  <ReactNative.View style={{\"gap\":12,\"width\":\"100%\",\"maxWidth\":640}}>\n    <ReactNative.Text style={{\"fontWeight\":\"800\",\"fontSize\":13}}>PUNE SEARCH</ReactNative.Text>\n    <ReactNative.View style={{\"padding\":12,\"backgroundColor\":\"#f8fafc\"}}>\n      <searchbar.SearchBar\n        design={{\"type\":\"light\"}}\n        value={query}\n        setValue={setQuery}\n        placeholder=\"Search markets\"/>\n    </ReactNative.View>\n    <ReactNative.View style={{\"padding\":12,\"backgroundColor\":\"#0f172a\"}}>\n      <searchbar.SearchBar\n        design={{\"type\":\"dark\"}}\n        value={query}\n        setValue={setQuery}\n        placeholder=\"Search dark surface\"/>\n    </ReactNative.View>\n    <ReactNative.Text style={{\"fontSize\":12,\"color\":\"#64748b\"}}>Query: {query}</ReactNative.Text>\n  </ReactNative.View>);";
        })()}>
      <ReactNative.View style={{"gap":12,"width":"100%","maxWidth":640}}>
        <ReactNative.Text style={{"fontWeight":"800","fontSize":13}}>PUNE SEARCH</ReactNative.Text>
        <ReactNative.View style={{"padding":12,"backgroundColor":"#f8fafc"}}>
          <searchbar.SearchBar
            design={{"type":"light"}}
            value={query}
            setValue={setQuery}
            placeholder="Search markets"/>
        </ReactNative.View>
        <ReactNative.View style={{"padding":12,"backgroundColor":"#0f172a"}}>
          <searchbar.SearchBar
            design={{"type":"dark"}}
            value={query}
            setValue={setQuery}
            placeholder="Search dark surface"/>
        </ReactNative.View>
        <ReactNative.Text style={{"fontSize":12,"color":"#64748b"}}>Query: {query}</ReactNative.Text>
      </ReactNative.View>
    </n.EnclosedCodeContainer>);
}

// pune.ui-searchbar-test/MODULE [86] 
export var MODULE = {"SearchBarDemo":SearchBarDemo,"MODULE":MODULE};