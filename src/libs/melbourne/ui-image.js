import * as ReactNative from 'react-native'

import * as ExpoImagePicker from 'expo-image-picker'

import * as ui_button from './ui-button.js'

import * as xtd from '../xt/lang/common-data.js'

import * as math from '../xt/lang/common-math.js'

import * as ui_swiper from './ui-swiper.js'

import * as base_palette from './base-palette.js'

import * as n from '../js/react-native.js'

// melbourne.ui-image/selectImage [32] 
export function selectImage(props){
  let {
    onPhoto,
    setPhoto = (function (){
    return null;
  }),
    setBlob = (function (){
    return null;
  })
  } = props;
  return new Promise(function (resolve,reject){
    ExpoImagePicker.launchImageLibraryAsync().then(function (res){
      if(!res.cancelled){
        setPhoto(res);
        return fetch(res.uri,{}).then(function (res){
          return res.blob();
        }).then(function (blob){
          let reader = new FileReader();
          reader.onload = (function (){
            setBlob(reader.result);
            if(onPhoto){
              onPhoto({"blob":reader.result,"photo":res},props);
            }
            resolve({"blob":reader.result,"photo":res});
          });
          reader.readAsArrayBuffer(blob);
        });
      }
      else{
        resolve(null);
      }
    });
  });
}

// melbourne.ui-image/ImagePicker [69] 
export function ImagePicker(props){
  let {
    design = {},
    setData,
    data,
    waiting,
    onPhoto,
    setPhoto,
    photo,
    setBlob,
    blob,
    textEmpty,
    onClear,
    size = 130,
    border = 0,
    inner,
    ...rprops
  } = props;
  let subSize = size - (2 * border);
  let {bgNormal,fgNormal} = base_palette.designPalette(design);
  let uri = (xtd.not_emptyp(photo) && photo["uri"]) || (xtd.not_emptyp(data) && (data["url"] || data["thumbnailUrl"]));
  let swipeElem = (
    <ui_swiper.Swiper
      variant={{
          "bg":{"key":"background","mix":"primary","ratio":1},
          "fg":{"key":"neutral","mix":"primary","ratio":4}
        }}
      onOpened={function (res){
          setPhoto(null);
          setBlob(null);
          setData(null);
          if(onClear){
            onClear();
          }
          return true;
        }}
      style={{"cursor":"grab","height":subSize,"width":subSize}}
      posEnabled={true}
      inner={[
          {
                "component":ReactNative.Image,
                "source":{"uri":uri},
                "style":[{"borderRadius":4,"height":subSize,"width":subSize}],
                "transformations":function ({position,pressing}){
                        return {
                          "style":{
                                    "opacity":math.mix(1,0.8,pressing) * math.mix(1,0,Math.abs(position) / (2 * subSize)),
                                    "transform":[{"scale":math.mix(1,2,Math.abs(position) / subSize)}]
                                  }
                        };
                      }
              },
          ...xtd.arrayify(inner)
        ]}
      posThreshold={0.5 * subSize}
      negFull={-2 * subSize}
      styleContainer={{
          "backgroundColor":bgNormal,
          "borderRadius":4,
          "height":subSize,
          "overflow":"hidden",
          "width":subSize
        }}
      negEnabled={true}
      negThreshold={-0.5 * subSize}
      design={design}
      posFull={2 * subSize}
      {...rprops}/>);
  return (
    <ReactNative.View
      style={[
          {"height":size,"width":size,"borderRadius":4},
          {
                "justifyContent":"center",
                "alignContent":"center",
                "alignItems":"center"
              },
          {"backgroundColor":bgNormal}
        ]}>
      {!uri ? (
        <ui_button.Button
          design={design}
          onPress={function (){
              return selectImage(props);
            }}
          style={[
              {
                  "height":subSize,
                  "width":subSize,
                  "padding":0,
                  "paddingHorizontal":0
                }
            ]}
          text={(
              <ReactNative.View
                key="label"
                style={[
                    {"height":subSize,"width":subSize},
                    {
                            "justifyContent":"center",
                            "alignContent":"center",
                            "alignItems":"center"
                          }
                  ]}>
                <ReactNative.Text style={{"fontWeight":400,"fontSize":13}}>{textEmpty || "SELECT"}</ReactNative.Text>
              </ReactNative.View>)}
          transformations={{
              "bg":function ({pressing}){
                    return {"style":{"transform":[{"scale":1 - (0.15 * pressing)}]}};
                  }
            }}
          variant={{
              "bg":{"key":"background","mix":"primary","ratio":1},
              "fg":{"key":"neutral"}
            }}/>) : (waiting ? (
        <ReactNative.View style={{"opacity":0.3}}>
          {swipeElem}
          <ReactNative.View
            style={{
                "position":"absolute",
                "height":"100%",
                "width":"100%",
                "justifyContent":"center",
                "alignItems":"center"
              }}><ReactNative.ActivityIndicator/>
          </ReactNative.View>
        </ReactNative.View>) : swipeElem)}
    </ReactNative.View>);
}

// melbourne.ui-image/MODULE [171] 
export var MODULE = {
  "selectImage":selectImage,
  "ImagePicker":ImagePicker,
  "MODULE":MODULE
};