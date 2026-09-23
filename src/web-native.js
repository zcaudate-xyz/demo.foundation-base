import * as ReactNative from 'react-native'

import * as react_lazy_test from './libs/js/react-native/react-lazy-test.js'

import * as ext_route_test from './libs/js/react-native/ext-route-test.js'

import * as physical_layout_test from './libs/js/react-native/physical-layout-test.js'

import * as ui_range_test from './libs/js/react-native/ui-range-test.js'

import * as ui_scrollview_test from './libs/js/react-native/ui-scrollview-test.js'

import * as ui_tooltip_test from './libs/js/react-native/ui-tooltip-test.js'

import * as ui_radio_box_test from './libs/js/react-native/ui-radio-box-test.js'

import * as ext_log_test from './libs/js/react-native/ext-log-test.js'

import * as react_test from './libs/js/react-native/react-test.js'

import * as physical_carosel_test from './libs/js/react-native/physical-carosel-test.js'

import * as ui_autocomplete_test from './libs/js/react-native/ui-autocomplete-test.js'

import * as ui_toggle_button_test from './libs/js/react-native/ui-toggle-button-test.js'

import * as ui_toggle_switch_test from './libs/js/react-native/ui-toggle-switch-test.js'

import * as physical_modal_test from './libs/js/react-native/physical-modal-test.js'

import * as ext_box_test from './libs/js/react-native/ext-box-test.js'

import * as ui_check_box_test from './libs/js/react-native/ui-check-box-test.js'

import * as physical_edit_test from './libs/js/react-native/physical-edit-test.js'

import * as helper_browser_test from './libs/js/react-native/helper-browser-test.js'

import * as ui_util_test from './libs/js/react-native/ui-util-test.js'

import * as ui_slider_test from './libs/js/react-native/ui-slider-test.js'

import * as react_native_test from './libs/js/react-native-test.js'

import * as ext_form_test from './libs/js/react-native/ext-form-test.js'

import * as ui_modal_test from './libs/js/react-native/ui-modal-test.js'

import * as animate_test from './libs/js/react-native/animate-test.js'

import * as ui_swiper_test from './libs/js/react-native/ui-swiper-test.js'

import * as physical_dnd_test from './libs/js/react-native/physical-dnd-test.js'

import * as ui_spinner_test from './libs/js/react-native/ui-spinner-test.js'

import * as physical_play_test from './libs/js/react-native/physical-play-test.js'

import * as ui_frame_test from './libs/js/react-native/ui-frame-test.js'

import * as ui_picker_test from './libs/js/react-native/ui-picker-test.js'

import * as physical_base_test from './libs/js/react-native/physical-base-test.js'

import * as ui_input_test from './libs/js/react-native/ui-input-test.js'

import * as ui_button_test from './libs/js/react-native/ui-button-test.js'

import * as n from './libs/js/react-native.js'

import * as ext_model_test from './libs/js/react-native/ext-model-test.js'

import * as ui_notify_test from './libs/js/react-native/ui-notify-test.js'

import * as model_roller_impl_test from './libs/js/react-native/model-roller-impl-test.js'

import * as ui_router_test from './libs/js/react-native/ui-router-test.js'

// component.web-native/__import__ [46] 
import React from 'react'

// component.web-native/IntroCard [49] 
export function IntroCard({title,text,accent}){
  return (
    <ReactNative.View
      style={{
          "borderRadius":14,
          "borderColor":"#dbe4f0",
          "minWidth":190,
          "flex":1,
          "borderWidth":1,
          "padding":18,
          "marginBottom":12,
          "backgroundColor":"#ffffff",
          "marginRight":12
        }}>
      <ReactNative.View
        style={{
            "width":34,
            "height":5,
            "marginBottom":15,
            "borderRadius":3,
            "backgroundColor":accent
          }}/>
      <ReactNative.Text
        style={{
            "marginBottom":7,
            "color":"#0f172a",
            "fontSize":15,
            "fontWeight":"800"
          }}>{title}
      </ReactNative.Text>
      <ReactNative.Text style={{"color":"#64748b","fontSize":12,"lineHeight":18}}>{text}</ReactNative.Text>
    </ReactNative.View>);
}

// component.web-native/IntroLink [82] 
export function IntroLink({label,route,onNavigate}){
  return (
    <ReactNative.TouchableOpacity
      onPress={function (){
          if(onNavigate){
            onNavigate(route);
          }
        }}
      style={{
          "marginRight":8,
          "marginBottom":8,
          "paddingHorizontal":14,
          "paddingVertical":10,
          "borderRadius":9,
          "backgroundColor":"#eff6ff",
          "borderWidth":1,
          "borderColor":"#bfdbfe"
        }}>
      <ReactNative.Text
        style={{"color":"#1d4ed8","fontSize":12,"fontWeight":"800"}}>{label}
      </ReactNative.Text>
    </ReactNative.TouchableOpacity>);
}

// component.web-native/IntroPage [105] 
export function IntroPage({onNavigate}){
  return (
    <ReactNative.ScrollView
      style={{"flex":1,"backgroundColor":"#f8fafc"}}
      contentContainerStyle={{
          "maxWidth":1080,
          "width":"100%",
          "alignSelf":"center",
          "padding":32,
          "paddingBottom":80
        }}>
      <ReactNative.View
        style={{
            "padding":30,
            "borderRadius":20,
            "backgroundColor":"#0f172a",
            "shadowColor":"#0f172a",
            "shadowOffset":{"width":0,"height":8},
            "shadowOpacity":0.16,
            "shadowRadius":18,
            "elevation":3
          }}>
        <ReactNative.View
          style={{"flexDirection":"row","alignItems":"center","marginBottom":20}}>
          <ReactNative.View
            style={{
                "width":10,
                "height":10,
                "marginRight":9,
                "borderRadius":5,
                "backgroundColor":"#60a5fa"
              }}/>
          <ReactNative.Text
            style={{
                "color":"#93c5fd",
                "fontSize":11,
                "fontWeight":"800",
                "letterSpacing":1.2
              }}>FOUNDATION BASE  /  JS.REACT-NATIVE
          </ReactNative.Text>
        </ReactNative.View>
        <ReactNative.Text
          style={{
              "maxWidth":700,
              "color":"#f8fafc",
              "fontSize":34,
              "fontWeight":"800",
              "lineHeight":42
            }}>Build interfaces from small, expressive pieces.
        </ReactNative.Text>
        <ReactNative.Text
          style={{
              "maxWidth":680,
              "marginTop":14,
              "color":"#cbd5e1",
              "fontSize":15,
              "lineHeight":24
            }}>
          This is an interactive tour of the React Native building blocks in foundation-base. Every panel is live: change a value, press a button, and see the component respond.
        </ReactNative.Text>
        <ReactNative.View
          style={{"flexDirection":"row","flexWrap":"wrap","marginTop":24}}>
          <ReactNative.View
            style={{
                "marginRight":8,
                "marginBottom":8,
                "paddingHorizontal":10,
                "paddingVertical":6,
                "borderRadius":999,
                "backgroundColor":"#172554"
              }}>
            <ReactNative.Text
              style={{
                  "color":"#bfdbfe",
                  "fontSize":10,
                  "fontWeight":"800",
                  "letterSpacing":0.5
                }}>LIVE PREVIEWS
            </ReactNative.Text>
          </ReactNative.View>
          <ReactNative.View
            style={{
                "marginRight":8,
                "marginBottom":8,
                "paddingHorizontal":10,
                "paddingVertical":6,
                "borderRadius":999,
                "backgroundColor":"#172554"
              }}>
            <ReactNative.Text
              style={{
                  "color":"#bfdbfe",
                  "fontSize":10,
                  "fontWeight":"800",
                  "letterSpacing":0.5
                }}>SOURCE INCLUDED
            </ReactNative.Text>
          </ReactNative.View>
          <ReactNative.View
            style={{
                "marginBottom":8,
                "paddingHorizontal":10,
                "paddingVertical":6,
                "borderRadius":999,
                "backgroundColor":"#172554"
              }}>
            <ReactNative.Text
              style={{
                  "color":"#bfdbfe",
                  "fontSize":10,
                  "fontWeight":"800",
                  "letterSpacing":0.5
                }}>WEB READY
            </ReactNative.Text>
          </ReactNative.View>
        </ReactNative.View>
      </ReactNative.View>
      <ReactNative.View style={{"marginTop":30,"marginBottom":12}}>
        <ReactNative.Text
          style={{"color":"#0f172a","fontSize":22,"fontWeight":"800"}}>A guided component lab
        </ReactNative.Text>
        <ReactNative.Text
          style={{
              "maxWidth":720,
              "marginTop":8,
              "color":"#64748b",
              "fontSize":14,
              "lineHeight":21
            }}>
          Use the navigation rail to move from core primitives to stateful interactions, physical gestures, and ready-to-use UI components. Start anywhere, then follow the nested examples as a map of the library.
        </ReactNative.Text>
      </ReactNative.View>
      <ReactNative.View style={{"flexDirection":"row","flexWrap":"wrap"}}>
        <IntroCard
          title="Foundations"
          text="Text, layout, containers, tabs, lists, and trees."
          accent="#2563eb"/>
        <IntroCard
          title="State & motion"
          text="React helpers, events, animation, transitions, and indicators."
          accent="#7c3aed"/>
        <IntroCard
          title="Physical UI"
          text="Touch, gestures, drag-and-drop, layout, and rollers."
          accent="#ea580c"/>
        <IntroCard
          title="Components"
          text="Inputs, buttons, forms, navigation, modals, and utilities."
          accent="#059669"/>
      </ReactNative.View>
      <ReactNative.View
        style={{
            "marginTop":8,
            "padding":24,
            "borderRadius":14,
            "backgroundColor":"#eaf2ff",
            "borderWidth":1,
            "borderColor":"#c7dcff"
          }}>
        <ReactNative.Text
          style={{"color":"#172554","fontSize":17,"fontWeight":"800"}}>Jump right in
        </ReactNative.Text>
        <ReactNative.Text
          style={{
              "marginTop":7,
              "marginBottom":15,
              "color":"#475569",
              "fontSize":13,
              "lineHeight":20
            }}>
          Use a shortcut below, or browse the full catalogue from the navigation rail.
        </ReactNative.Text>
        <ReactNative.View style={{"flexDirection":"row","flexWrap":"wrap"}}>
          <IntroLink
            label="Native primitives"
            route="00a-native-text"
            onNavigate={onNavigate}/>
          <IntroLink
            label="UI controls"
            route="06-ui-button"
            onNavigate={onNavigate}/>
          <IntroLink
            label="Forms & data"
            route="00g-ext-form"
            onNavigate={onNavigate}/>
          <IntroLink
            label="Animation"
            route="01a-ani-base"
            onNavigate={onNavigate}/>
        </ReactNative.View>
      </ReactNative.View>
      <ReactNative.View
        style={{
            "marginTop":18,
            "padding":24,
            "borderWidth":1,
            "borderColor":"#dbe4f0",
            "borderRadius":14,
            "backgroundColor":"#ffffff"
          }}>
        <ReactNative.Text
          style={{"color":"#0f172a","fontSize":17,"fontWeight":"800"}}>How to explore
        </ReactNative.Text>
        <ReactNative.Text
          style={{"marginTop":12,"color":"#475569","fontSize":13,"lineHeight":23}}>
          1  Select a section from the left rail.
          2  Interact with the controls inside each example.
          3  Press CODE to reveal the source behind a demo.
          4  Use nested tabs and lists to drill into related features.
        </ReactNative.Text>
        <ReactNative.View
          style={{"height":1,"marginVertical":20,"backgroundColor":"#e2e8f0"}}/>
        <ReactNative.Text style={{"color":"#64748b","fontSize":12,"lineHeight":19}}>
          The examples are generated from the same Clojure-based DSL that powers the library. They are documentation, experiments, and a set of composable patterns in one place.
        </ReactNative.Text>
      </ReactNative.View>
    </ReactNative.ScrollView>);
}

// component.web-native/ReactExamples [298] 
export function ReactExamples(){
  return (
    <React.Fragment>
      <react_test.UseRefreshDemo/>
      <react_test.UseFollowRefDemo/>
      <react_test.UseGetCountDemo/>
      <react_test.UseMountedCallbackDemo/>
      <react_test.UseFollowDelayedDemo/>
      <react_test.UseIsMountedDemo/>
      <react_test.UseIntervalDemo/>
      <react_test.UseTimeoutDemo/>
      <react_test.UseCountdownDemo/>
      <react_test.UseNowDemo/>
      <react_test.UseChangingDemo/>
      <react_test.UseTreeDemo/>
    </React.Fragment>);
}

// component.web-native/ReactLazyExamples [316] 
export function ReactLazyExamples(){
  return (
    <React.Fragment><react_lazy_test.UseLazyDemo/></React.Fragment>);
}

// component.web-native/NativeExamples [322] 
export function NativeExamples(){
  return (
    <React.Fragment>
      <react_native_test.EnclosedDemo/>
      <react_native_test.EnclosedCodeContainerDemo/>
      <react_native_test.EnclosedCodeDemo/>
      <react_native_test.RowDemo/>
      <react_native_test.FillDemo/>
      <react_native_test.H1Demo/>
      <react_native_test.H2Demo/>
      <react_native_test.H3Demo/>
      <react_native_test.H4Demo/>
      <react_native_test.H5Demo/>
      <react_native_test.CaptionDemo/>
    </React.Fragment>);
}

// component.web-native/GroupExamples [338] 
export function GroupExamples(){
  return (
    <React.Fragment>
      <react_native_test.TabsIndexedDemo/>
      <react_native_test.TabsDemo/>
      <react_native_test.TabsMultiIndexedDemo/>
      <react_native_test.TabsMultiDemo/>
      <react_native_test.ListIndexedDemo/>
      <react_native_test.ListDemo/>
    </React.Fragment>);
}

// component.web-native/TreeExamples [349] 
export function TreeExamples(){
  return (
    <React.Fragment>
      <react_native_test.TabsPaneDemo/>
      <react_native_test.ListPaneDemo/>
      <react_native_test.TreePaneDemo/>
    </React.Fragment>);
}

// component.web-native/DataExamples [357] 
export function DataExamples(){
  return (
    <React.Fragment>
      <react_native_test.BaseIndicatorDemo/>
      <react_native_test.ToggleIndicatorDemo/>
      <react_native_test.RecordListDemo/>
      <react_native_test.TextDisplayDemo/>
    </React.Fragment>);
}

// component.web-native/PortalExamples [366] 
export function PortalExamples(){
  return (
    <React.Fragment>
      <react_native_test.PortalDemo/>
      <react_native_test.UsePortalLayoutsDemo/>
    </React.Fragment>);
}

// component.web-native/NativeModalExamples [373] 
export function NativeModalExamples(){
  return (
    <React.Fragment>
      <physical_modal_test.GetPositionDemo/>
      <physical_modal_test.DisplayModalDemo/>
    </React.Fragment>);
}

// component.web-native/ViewExamples [380] 
export function ViewExamples(){
  return (
    <React.Fragment>
      <ext_model_test.ListenViewDemo/>
      <ext_model_test.ListenViewOutputDemo/>
      <ext_model_test.ListenViewOutputMultiDemo/>
    </React.Fragment>);
}

// component.web-native/RouteExamples [388] 
export function RouteExamples(){
  return (
    <React.Fragment>
      <ext_route_test.UseRouteSegmentDemo/>
      <helper_browser_test.UseHashRouteDemo/>
    </React.Fragment>);
}

// component.web-native/BoxExamples [395] 
export function BoxExamples(){
  return (
    <React.Fragment><ext_box_test.UseBoxDemo/></React.Fragment>);
}

// component.web-native/LogExamples [401] 
export function LogExamples(){
  return (
    <React.Fragment><ext_log_test.ListenLogLatestDemo/></React.Fragment>);
}

// component.web-native/FormExamples [407] 
export function FormExamples(){
  return (
    <React.Fragment><ext_form_test.RegistrationFormDemo/></React.Fragment>);
}

// component.web-native/AnimateExamples [413] 
export function AnimateExamples(){
  return (
    <React.Fragment>
      <animate_test.ValDemo/>
      <animate_test.DeriveDemo/>
      <animate_test.ListenSingleDemo/>
      <animate_test.UseListenSingleDemo/>
      <animate_test.ListenArrayDemo/>
      <animate_test.UseListenArrayDemo/>
      <animate_test.ListenMapDemo/>
      <animate_test.ListenTransformationsDemo/>
    </React.Fragment>);
}

// component.web-native/AnimateTransitionExamples [426] 
export function AnimateTransitionExamples(){
  return (
    <React.Fragment>
      <animate_test.CreateTransitionDemo/>
      <animate_test.RunWithCancelDemo/>
      <animate_test.RunWithOneDemo/>
      <animate_test.RunWithAllDemo/>
    </React.Fragment>);
}

// component.web-native/AnimateIndicatorExamples [435] 
export function AnimateIndicatorExamples(){
  return (
    <React.Fragment>
      <animate_test.UseBinaryIndicatorDemo/>
      <animate_test.UseIndexIndicatorDemo/>
      <animate_test.UsePressIndicatorDemo/>
      <animate_test.UseLinearIndicatorDemo/>
      <animate_test.UseCircularIndicatorDemo/>
      <animate_test.UseShowingDemo/>
      <animate_test.UsePositionDemo/>
      <animate_test.UseRangeDemo/>
    </React.Fragment>);
}

// component.web-native/PhysicalDisplayExamples [448] 
export function PhysicalDisplayExamples(){
  return (
    <React.Fragment>
      <physical_base_test.TagDemo/>
      <physical_base_test.BoxDemo/>
      <physical_base_test.TextDemo/>
    </React.Fragment>);
}

// component.web-native/PhysicalTouchExamples [457] 
export function PhysicalTouchExamples(){
  return (
    <React.Fragment>
      <physical_base_test.TouchableBasePressingDemo/>
      <physical_base_test.TouchableBinaryDemo/>
      <physical_base_test.TouchableInputDemo/>
    </React.Fragment>);
}

// component.web-native/PhysicalEditExamples [465] 
export function PhysicalEditExamples(){
  return (
    <React.Fragment>
      <physical_edit_test.CreatePanDemo/>
      <physical_edit_test.CreatePanVelocityDemo/>
      <physical_edit_test.ProgressDemo/>
    </React.Fragment>);
}

// component.web-native/PhysicalDndExamples [473] 
export function PhysicalDndExamples(){
  return (
    <React.Fragment><physical_dnd_test.DragAndDropDemo/></React.Fragment>);
}

// component.web-native/PhysicalLayoutExamples [480] 
export function PhysicalLayoutExamples(){
  return (
    <React.Fragment><physical_layout_test.GridDemo/></React.Fragment>);
}

// component.web-native/PhysicalPlayExamples [487] 
export function PhysicalPlayExamples(){
  return (
    <React.Fragment>
      <physical_play_test.DigitRollerStaticDemo/>
      <physical_play_test.DigitRollerSingleDemo/>
      <physical_play_test.DigitRollerDoubleDemo/>
      <physical_play_test.DigitClockDemo/>
    </React.Fragment>);
}

// component.web-native/ModelRollerExamples [496] 
export function ModelRollerExamples(){
  return (
    <React.Fragment>
      <model_roller_impl_test.DigitRollerManualDemo/>
      <model_roller_impl_test.DigitRollerPanDemo/>
    </React.Fragment>);
}

// component.web-native/PhysicalCaroselExamples [503] 
export function PhysicalCaroselExamples(){
  return (
    <React.Fragment><physical_carosel_test.DigitCaroselManualDemo/></React.Fragment>);
}

// component.web-native/UiLayoutFrameExamples [509] 
export function UiLayoutFrameExamples(){
  return (
    <React.Fragment><ui_frame_test.FramePaneDemo/><ui_frame_test.FrameDemo/></React.Fragment>);
}

// component.web-native/UiButtonExamples [516] 
export function UiButtonExamples(){
  return (
    <React.Fragment>
      <ui_button_test.ButtonSimpleDemo/>
      <ui_button_test.ButtonOpacityDemo/>
      <ui_button_test.ButtonSizeDemo/>
      <ui_button_test.ButtonFractionDemo/>
    </React.Fragment>);
}

// component.web-native/UiAutocompleteExamples [525] 
export function UiAutocompleteExamples(){
  return (
    <React.Fragment>
      <ui_autocomplete_test.AutocompleteModalDemo/>
      <ui_autocomplete_test.AutocompleteDemo/>
    </React.Fragment>);
}

// component.web-native/UiInputExamples [532] 
export function UiInputExamples(){
  return (
    <React.Fragment><ui_input_test.InputSimpleDemo/><ui_input_test.InputDemo/></React.Fragment>);
}

// component.web-native/UiCheckBoxExamples [539] 
export function UiCheckBoxExamples(){
  return (
    <React.Fragment><ui_check_box_test.CheckBoxSimpleDemo/></React.Fragment>);
}

// component.web-native/UiRadioBoxExamples [545] 
export function UiRadioBoxExamples(){
  return (
    <React.Fragment><ui_radio_box_test.RadioBoxSimpleDemo/></React.Fragment>);
}

// component.web-native/UiToggleButtonExamples [552] 
export function UiToggleButtonExamples(){
  return (
    <React.Fragment><ui_toggle_button_test.ToggleButtonSimpleDemo/></React.Fragment>);
}

// component.web-native/UiToggleSwitchExamples [558] 
export function UiToggleSwitchExamples(){
  return (
    <React.Fragment>
      <ui_toggle_switch_test.ToggleSwitchSimpleDemo/>
      <ui_toggle_switch_test.ToggleSwitchSquareDemo/>
    </React.Fragment>);
}

// component.web-native/UiSliderExamples [565] 
export function UiSliderExamples(){
  return (
    <React.Fragment><ui_slider_test.SliderHDemo/><ui_slider_test.SliderVDemo/></React.Fragment>);
}

// component.web-native/UiRangeExamples [572] 
export function UiRangeExamples(){
  return (
    <React.Fragment><ui_range_test.RangeHDemo/><ui_range_test.RangeVDemo/></React.Fragment>);
}

// component.web-native/UiSpinnerExamples [579] 
export function UiSpinnerExamples(){
  return (
    <React.Fragment>
      <ui_spinner_test.SpinnerStaticDemo/>
      <ui_spinner_test.SpinnerDigitDemo/>
      <ui_spinner_test.SpinnerValuesDemo/>
      <ui_spinner_test.SpinnerDemo/>
    </React.Fragment>);
}

// component.web-native/UiModalExamples [588] 
export function UiModalExamples(){
  return (
    <React.Fragment><ui_modal_test.ModalDemo/></React.Fragment>);
}

// component.web-native/UiScrollViewExamples [594] 
export function UiScrollViewExamples(){
  return (
    <React.Fragment><ui_scrollview_test.ScrollViewDemo/></React.Fragment>);
}

// component.web-native/UiNotifyExamples [600] 
export function UiNotifyExamples(){
  return (
    <React.Fragment><ui_notify_test.NotifyDemo/></React.Fragment>);
}

// component.web-native/UiRouterExamples [606] 
export function UiRouterExamples(){
  return (
    <React.Fragment>
      <ui_router_test.UseTransitionDemo/>
      <ui_router_test.RouterDemo/>
    </React.Fragment>);
}

// component.web-native/UiPickerExamples [614] 
export function UiPickerExamples(){
  return (
    <React.Fragment><ui_picker_test.PickerIndexedDemo/></React.Fragment>);
}

// component.web-native/UiSwiperExamples [620] 
export function UiSwiperExamples(){
  return (
    <React.Fragment><ui_swiper_test.SwiperDemo/></React.Fragment>);
}

// component.web-native/UiTooltipExamples [626] 
export function UiTooltipExamples(){
  return (
    <React.Fragment><ui_tooltip_test.TooltipDemo/></React.Fragment>);
}

// component.web-native/UiUtilExamples [632] 
export function UiUtilExamples(){
  return (
    <React.Fragment>
      <ui_util_test.PageDemo/>
      <ui_util_test.FadeDemo/>
      <ui_util_test.FoldInnerDemo/>
      <ui_util_test.FoldDemo/>
    </React.Fragment>);
}

// component.web-native/raw-controls [641] 
export function raw_controls(){
  return {
    "000-intro":IntroPage,
    "000-react":ReactExamples,
    "000-react-lazy":ReactLazyExamples,
    "00a-native-text":NativeExamples,
    "00a-portal-test":PortalExamples,
    "00b-native-group":GroupExamples,
    "00c-native-tree":TreeExamples,
    "00d-native-data":DataExamples,
    "00e-native-modal":NativeModalExamples,
    "00f-ext-model":ViewExamples,
    "00g-ext-form":FormExamples,
    "00h-ext-route":RouteExamples,
    "00j-ext-box":BoxExamples,
    "00k-ext-log":LogExamples,
    "01a-ani-base":AnimateExamples,
    "01b-ani-transition":AnimateTransitionExamples,
    "01c-ani-indicators":AnimateIndicatorExamples,
    "02a-phy-display":PhysicalDisplayExamples,
    "02b-phy-touch":PhysicalTouchExamples,
    "02c-phy-edit":PhysicalEditExamples,
    "02d-phy-dnd":PhysicalDndExamples,
    "02e-phy-layout":PhysicalLayoutExamples,
    "02k-phy-play":PhysicalPlayExamples,
    "03a-model-roller":ModelRollerExamples,
    "03b-carosel":PhysicalCaroselExamples,
    "06-ui-autocomplete":UiAutocompleteExamples,
    "06-ui-button":UiButtonExamples,
    "06-ui-checkbox":UiCheckBoxExamples,
    "06-ui-frame":UiLayoutFrameExamples,
    "06-ui-input":UiInputExamples,
    "06-ui-modal":UiModalExamples,
    "06-ui-notify":UiNotifyExamples,
    "06-ui-radiobox":UiRadioBoxExamples,
    "06-ui-range":UiRangeExamples,
    "06-ui-router":UiRouterExamples,
    "06-ui-picker":UiPickerExamples,
    "06-ui-scrollview":UiScrollViewExamples,
    "06-ui-slider":UiSliderExamples,
    "06-ui-spinner":UiSpinnerExamples,
    "06-ui-switch":UiToggleSwitchExamples,
    "06-ui-swiper":UiSwiperExamples,
    "06-ui-toggle":UiToggleButtonExamples,
    "06-ui-tooltip":UiTooltipExamples,
    "06-ui-util":UiUtilExamples
  };
}