import * as T from 'tamagui'

import React from 'react'

import * as r from '../js/react.js'

import * as tama_overlay from './tama-overlay.js'

import * as n from '../js/react-native.js'

// melbourne.tama-overlay-test/TamaOverlayDemo [45] 
export function TamaOverlayDemo(){
  let [visible,setVisible] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="melbourne.tama-overlay"
      code={(function (){
          return "(\n  <T.XStack gap=\"$3\" flexWrap=\"wrap\">\n    <T.Button\n      size=\"$4\"\n      onPress={function (){\n          setVisible(true);\n        }}>Open dialog\n    </T.Button>\n    <tama_overlay.Dialog\n      visible={visible}\n      setVisible={setVisible}\n      title=\"Review changes\"\n      body=\"This action stays in the direct Tamagui layer.\"\n      onSubmit={function (){\n          setVisible(false);\n        }}/>\n    <tama_overlay.Popover\n      trigger={(\n          <T.Button size=\"$4\" chromeless={true}>Open popup</T.Button>)}\n      content={(\n          <T.YStack gap=\"$2\">\n            <T.Text fontWeight=\"800\">Quick actions</T.Text>\n            <T.Button chromeless={true}>Duplicate</T.Button>\n            <T.Button chromeless={true}>Archive</T.Button>\n          </T.YStack>)}/>\n  </T.XStack>);";
        })()}>
      <T.XStack gap="$3" flexWrap="wrap">
        <T.Button
          size="$4"
          onPress={function (){
              setVisible(true);
            }}>Open dialog
        </T.Button>
        <tama_overlay.Dialog
          visible={visible}
          setVisible={setVisible}
          title="Review changes"
          body="This action stays in the direct Tamagui layer."
          onSubmit={function (){
              setVisible(false);
            }}/>
        <tama_overlay.Popover
          trigger={(
              <T.Button size="$4" chromeless={true}>Open popup</T.Button>)}
          content={(
              <T.YStack gap="$2">
                <T.Text fontWeight="800">Quick actions</T.Text>
                <T.Button chromeless={true}>Duplicate</T.Button>
                <T.Button chromeless={true}>Archive</T.Button>
              </T.YStack>)}/>
      </T.XStack>
    </n.EnclosedCodeContainer>);
}

// melbourne.tama-overlay-test/MODULE [82] 
export var MODULE = {"TamaOverlayDemo":TamaOverlayDemo,"MODULE":MODULE};