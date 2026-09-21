import * as ReactNative from 'react-native'

import React from 'react'

import * as event_log from '../../xt/event/base-log.js'

import * as r from '../react.js'

import * as n from '../react-native.js'

import * as ext_log from '../react/ext-log.js'

// js.react-native.ext-log-test/ListenLogLatestDemo [21] 
export function ListenLogLatestDemo(){
  let log = ext_log.makeLog({});
  let latest = ext_log.listenLogLatest(log);
  let queueEntry = function (){
    return event_log.queue_entry(log,{"id":Math.random().toString(36).substr(2,6)},function (entry,t){
      return entry.id;
    },function (entry){
      return entry;
    });
  };
  React.useEffect(function (){
    queueEntry();
  },[]);
  return (
    <n.EnclosedCodeContainer
      label="js.react.ext-log/listenLogLatest"
      code={(function (){
          return "(\n  <n.Row><ReactNative.Button title=\"QUEUE\" onPress={queueEntry}/></n.Row>);\n(\n  <n.TextDisplay\n    content={n.format_entry({\n        \"latest\":latest,\n        \"count\":event_log.get_count(log),\n        \"tail\":event_log.get_tail(log,5)\n      })}/>);";
        })()}>
      <n.Row><ReactNative.Button title="QUEUE" onPress={queueEntry}/></n.Row>
      <n.TextDisplay
        content={n.format_entry({
            "latest":latest,
            "count":event_log.get_count(log),
            "tail":event_log.get_tail(log,5)
          })}/>
    </n.EnclosedCodeContainer>);
}