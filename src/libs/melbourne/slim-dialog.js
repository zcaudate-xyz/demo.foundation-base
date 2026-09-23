import * as ReactNative from 'react-native'

import * as ui_modal from '../js/react-native/ui-modal.js'

import * as ui_static from './ui-static.js'

import * as slim_submit from './slim-submit.js'

import * as base_font from './base-font.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

// melbourne.slim-dialog/Dialog [23] 
export function Dialog({
  design,
  modalProps,
  submitProps,
  helperProps,
  title,
  titleRight,
  body,
  visible,
  setVisible,
  onSubmit,
  onCancel,
  children,
  ...rprops
}){
  let palette = base_palette.designPalette(design);
  return (
    <ui_modal.Modal
      position="centered"
      styleBackdrop={{
          "backgroundColor":base_palette.getColor(palette,{"key":"neutral"})
        }}
      onClose={onCancel}
      visible={visible}
      {...modalProps}>
      <ui_static.Div
        design={design}
        style={[
            {
              "maxWidth":400,
              "minHeight":150,
              "paddingHorizontal":15,
              "paddingVertical":10,
              "borderRadius":3
            }
          ]}>
        {title ? (
          <n.Row>
            <ReactNative.Text
              style={[
                  base_font.fontH4,
                  {
                    "color":base_palette.getColor(palette,{"key":"neutral"}),
                    "marginVertical":10
                  }
                ]}>{title}
            </ReactNative.Text>
            <n.Fill/>
            {titleRight}
          </n.Row>) : null}
        <ReactNative.View style={{"flex":1,"justifyContent":"center"}}>
          <ReactNative.Text
            style={[
                base_font.fontText,
                {
                  "color":base_palette.getColor(palette,{"key":"neutral"}),
                  "marginVertical":10
                }
              ]}>{body}
          </ReactNative.Text>
        </ReactNative.View>
        <ReactNative.View style={{"flexDirection":"row-reverse","marginVertical":10}}>
          <slim_submit.SubmitButton text="OK" onPress={onSubmit} design={design} {...submitProps}/>
          <slim_submit.SubmitLineHelpers
            cancelShow={true}
            onCancel={onCancel}
            design={design}
            {...helperProps}/>
        </ReactNative.View>
      </ui_static.Div>
    </ui_modal.Modal>);
}

// melbourne.slim-dialog/MODULE [86] 
export var MODULE = {"Dialog":Dialog,"MODULE":MODULE};