import * as ReactNative from 'react-native'

import React from 'react'

import * as r from '../react.js'

import * as n from '../react-native.js'

// js.react-native.react-test/UseRefreshDemo [21] 
export function UseRefreshDemo(){
  let refresh = r.useRefresh();
  let getCount = r.useGetCount();
  return (
    <n.EnclosedCodeContainer
      label="js.react/useRefresh"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button title=\"Refresh\" onPress={refresh}/>\n    <ReactNative.View style={{\"flex\":1}}/>\n    <ReactNative.Text>{\"Count: \" + getCount()}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.Button title="Refresh" onPress={refresh}/>
        <ReactNative.View style={{"flex":1}}/>
        <ReactNative.Text>{"Count: " + getCount()}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/UseGetCountDemo [38] 
export function UseGetCountDemo(){
  let [valA,setValA] = React.useState(function (){
    return 0;
  });
  let [valB,setValB] = React.useState(function (){
    return 0;
  });
  let getCount = r.useGetCount();
  return (
    <n.EnclosedCodeContainer
      label="js.react/useGetCount"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"IncA\"\n      onPress={function (){\n          return setValA(valA + 1);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"IncB\"\n      onPress={function (){\n          return setValB(valB + 1);\n        }}/>\n    <ReactNative.View style={{\"flex\":1}}/>\n    <ReactNative.Text>\n      {\"count: \" + getCount() + \" valA: \" + valA + \" valB: \" + valB}\n    </ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="IncA"
          onPress={function (){
              return setValA(valA + 1);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="IncB"
          onPress={function (){
              return setValB(valB + 1);
            }}/>
        <ReactNative.View style={{"flex":1}}/>
        <ReactNative.Text>
          {"count: " + getCount() + " valA: " + valA + " valB: " + valB}
        </ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/UseFollowRefDemo [62] 
export function UseFollowRefDemo(){
  let [val,setVal] = React.useState(function (){
    return 0;
  });
  let valRef = r.useFollowRef(val);
  return (
    <n.EnclosedCodeContainer
      label="js.react/useFollowRef"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"Inc\"\n      onPress={function (){\n          return setVal(val + 1);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"Alert\"\n      onPress={function (){\n          return alert(\"valRef: \" + valRef.current);\n        }}/>\n    <ReactNative.View style={{\"flex\":1}}/>\n    <ReactNative.Text>{\"valRef: \" + valRef.current + \" val: \" + val}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="Inc"
          onPress={function (){
              return setVal(val + 1);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="Alert"
          onPress={function (){
              return alert("valRef: " + valRef.current);
            }}/>
        <ReactNative.View style={{"flex":1}}/>
        <ReactNative.Text>{"valRef: " + valRef.current + " val: " + val}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/IsMountedPane [85] 
export function IsMountedPane({callback,setMounted}){
  let isMounted = r.useIsMounted();
  React.useEffect(function (){
    callback(isMounted());
    return function (){
      callback(isMounted());
    };
  },[]);
  return (
    <ReactNative.Button
      title="Unmount"
      onPress={function (){
          return setMounted(false);
        }}/>);
}

// js.react-native.react-test/UseIsMountedDemo [98] 
export function UseIsMountedDemo(){
  let [mounted,setMounted] = React.useState(function (){
    return false;
  });
  let [on,setOn] = React.useState(0);
  let [off,setOff] = React.useState(0);
  let callback = function (mounted){
    if(mounted){
      setOn(1 + on);
    }
    else{
      setOff(1 + off);
    }
  };
  return (
    <n.EnclosedCodeContainer
      label="js.react/useIsMounted"
      code={(function (){
          return "(\n  <n.Row>\n    {mounted ? [\n      (\n      <n.Row>\n        {mounted ? [\n          (\n          <IsMountedPane callback={callback} setMounted={setMounted}/>)\n        ] : null}\n      </n.Row>),\n      (\n      <ReactNative.Button\n        title={\"Mount\"}\n        onPress={function (){\n            return setMounted(true);\n          }}/>)\n    ] : null}\n    <ReactNative.View style={{\"flex\":1}}/>\n    <ReactNative.Text>{\"On: \" + on + \" Off: \" + off}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        {mounted ? [
          (
          <n.Row>
            {mounted ? [
              (
              <IsMountedPane callback={callback} setMounted={setMounted}/>)
            ] : null}
          </n.Row>),
          (
          <ReactNative.Button
            title={"Mount"}
            onPress={function (){
                return setMounted(true);
              }}/>)
        ] : null}
        <ReactNative.View style={{"flex":1}}/>
        <ReactNative.Text>{"On: " + on + " Off: " + off}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/MountedCallbackPane [125] 
export function MountedCallbackPane({off,on,setMounted,setOff,setOn}){
  r.useMountedCallback(function (mounted){
    if(mounted){
      setOn(1 + on);
    }
    else{
      setOff(1 + off);
    }
  });
  return (
    <ReactNative.Button
      title="Unmount"
      onPress={function (){
          return setMounted(false);
        }}/>);
}

// js.react-native.react-test/UseMountedCallbackDemo [141] 
export function UseMountedCallbackDemo(){
  let [mounted,setMounted] = React.useState(function (){
    return false;
  });
  let [on,setOn] = React.useState(0);
  let [off,setOff] = React.useState(0);
  return (
    <n.EnclosedCodeContainer
      label="js.react/useMountedCallback"
      code={(function (){
          return "(\n  <n.Row>\n    {mounted ? [\n      (\n      <n.Row>\n        {mounted ? [\n          (\n          <MountedCallbackPane\n            setOff={setOff}\n            setMounted={setMounted}\n            off={off}\n            on={on}\n            setOn={setOn}/>)\n        ] : null}\n      </n.Row>),\n      (\n      <ReactNative.Button\n        title={\"Mount\"}\n        onPress={function (){\n            return setMounted(true);\n          }}/>)\n    ] : null}\n    <ReactNative.View style={{\"flex\":1}}/>\n    <ReactNative.Text>{\"On: \" + on + \" Off: \" + off}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        {mounted ? [
          (
          <n.Row>
            {mounted ? [
              (
              <MountedCallbackPane
                setOff={setOff}
                setMounted={setMounted}
                off={off}
                on={on}
                setOn={setOn}/>)
            ] : null}
          </n.Row>),
          (
          <ReactNative.Button
            title={"Mount"}
            onPress={function (){
                return setMounted(true);
              }}/>)
        ] : null}
        <ReactNative.View style={{"flex":1}}/>
        <ReactNative.Text>{"On: " + on + " Off: " + off}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/UseFollowDelayedDemo [167] 
export function UseFollowDelayedDemo(){
  let [val,setVal] = React.useState(function (){
    return 0;
  });
  let isMounted = r.useIsMounted();
  let [valDelay] = r.useFollowDelayed(val,500,isMounted);
  return (
    <n.EnclosedCodeContainer
      label="js.react/useFollowDelayed"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"Inc\"\n      onPress={function (){\n          return setVal(val + 1);\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.View style={{\"flex\":1}}/>\n    <ReactNative.Text>{\"valDelay: \" + valDelay + \" val: \" + val}</ReactNative.Text>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="Inc"
          onPress={function (){
              return setVal(val + 1);
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.View style={{"flex":1}}/>
        <ReactNative.Text>{"valDelay: " + valDelay + " val: " + val}</ReactNative.Text>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/IntervalPane [187] 
export function IntervalPane({setMounted}){
  let [val,setVal] = React.useState(function (){
    return 100;
  });
  let [up,setUp] = React.useState(function (){
    return true;
  });
  let [index,setIndex] = React.useState(function (){
    return 0;
  });
  let choices = [300,1000,null];
  let ms = choices[index % 3];
  let upFn = function (){
    setVal(val + 1);
  };
  let downFn = function (){
    setVal(val - 1);
  };
  let {startInterval,stopInterval} = r.useInterval(up ? upFn : downFn,ms);
  return (
    <n.Row style={{"marginVertical":5}}>
      <ReactNative.Button
        title={"Duration " + ms}
        onPress={function (){
            setIndex(1 + index);
            if(ms){
              setUp(!up);
            }
          }}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button
        title={up ? "Down" : "Up"}
        onPress={function (){
            return setUp(!up);
          }}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button title="Start" onPress={startInterval}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button title="Stop" onPress={stopInterval}/>
      <ReactNative.View style={{"flex":1}}/>
      <ReactNative.Text>{"value: " + val}</ReactNative.Text>
    </n.Row>);
}

// js.react-native.react-test/UseIntervalDemo [228] 
export function UseIntervalDemo(){
  let [mounted,setMounted] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="js.react/useInterval"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title={mounted ? \"Hide\" : \"Show\"}\n      onPress={function (){\n          return setMounted(!mounted);\n        }}/>\n  </n.Row>);\nmounted ? [\n  (\n  <IntervalPane key=\"interval\"/>)\n] : null;";
        })()}>
      <n.Row>
        <ReactNative.Button
          title={mounted ? "Hide" : "Show"}
          onPress={function (){
              return setMounted(!mounted);
            }}/>
      </n.Row>
      {mounted ? [
        (
        <IntervalPane key="interval"/>)
      ] : null}
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/TimeoutPane [244] 
export function TimeoutPane({setMounted}){
  let [val,setVal] = React.useState(function (){
    return 100;
  });
  let [up,setUp] = React.useState(function (){
    return true;
  });
  let [index,setIndex] = React.useState(function (){
    return 0;
  });
  let choices = [300,1000,null];
  let ms = choices[index % 3];
  let upFn = function (){
    setVal(val + 1);
  };
  let downFn = function (){
    setVal(val - 1);
  };
  let {startTimeout,stopTimeout} = r.useTimeout(up ? upFn : downFn,ms);
  return (
    <n.Row style={{"marginVertical":5}}>
      <ReactNative.Button
        title={"Duration " + ms}
        onPress={function (){
            setIndex(1 + index);
            if(ms){
              setUp(!up);
            }
          }}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button
        title={up ? "Down" : "Up"}
        onPress={function (){
            return setUp(!up);
          }}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button title="Start" onPress={startTimeout}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button title="Stop" onPress={stopTimeout}/>
      <ReactNative.View style={{"flex":1}}/>
      <ReactNative.Text>{"value: " + val}</ReactNative.Text>
    </n.Row>);
}

// js.react-native.react-test/UseTimeoutDemo [285] 
export function UseTimeoutDemo(){
  return (
    <n.EnclosedCodeContainer
      label="js.react/useTimeout"
      code={(function (){
          return "(\n  <TimeoutPane/>);";
        })()}><TimeoutPane/>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/CountdownPane [296] 
export function CountdownPane(){
  let [current,setCurrent,{startCountdown,stopCountdown}] = r.useCountdown(100,null,{"interval":300});
  return (
    <n.Row style={{"marginVertical":5}}>
      <ReactNative.Button
        title="Reset"
        onPress={function (){
            return setCurrent(100);
          }}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button title="Start" onPress={startCountdown}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button title="Stop" onPress={stopCountdown}/>
      <ReactNative.View style={{"flex":1}}/>
      <ReactNative.Text>{"value: " + current}</ReactNative.Text>
    </n.Row>);
}

// js.react-native.react-test/UseCountdownDemo [323] 
export function UseCountdownDemo(){
  let [mounted,setMounted] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="js.react/useCountdown"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title={mounted ? \"Hide\" : \"Show\"}\n      onPress={function (){\n          return setMounted(!mounted);\n        }}/>\n  </n.Row>);\nmounted ? [\n  (\n  <CountdownPane key=\"countdown\"/>)\n] : null;";
        })()}>
      <n.Row>
        <ReactNative.Button
          title={mounted ? "Hide" : "Show"}
          onPress={function (){
              return setMounted(!mounted);
            }}/>
      </n.Row>
      {mounted ? [
        (
        <CountdownPane key="countdown"/>)
      ] : null}
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/NowPane [339] 
export function NowPane(){
  let [current,{startNow,stopNow}] = r.useNow(300);
  return (
    <n.Row style={{"marginVertical":5}}>
      <ReactNative.Button title="Start" onPress={startNow}/>
      <ReactNative.Text> </ReactNative.Text>
      <ReactNative.Button title="Stop" onPress={stopNow}/>
      <ReactNative.View style={{"flex":1}}/>
      <ReactNative.Text>{"value: " + current}</ReactNative.Text>
    </n.Row>);
}

// js.react-native.react-test/UseNowDemo [358] 
export function UseNowDemo(){
  let [mounted,setMounted] = React.useState();
  return (
    <n.EnclosedCodeContainer
      label="js.react/useNow"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title={mounted ? \"Hide\" : \"Show\"}\n      onPress={function (){\n          return setMounted(!mounted);\n        }}/>\n  </n.Row>);\nmounted ? [\n  (\n  <NowPane key=\"now\"/>)\n] : null;";
        })()}>
      <n.Row>
        <ReactNative.Button
          title={mounted ? "Hide" : "Show"}
          onPress={function (){
              return setMounted(!mounted);
            }}/>
      </n.Row>
      {mounted ? [
        (
        <NowPane key="now"/>)
      ] : null}
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/UseChangingDemo [374] 
export function UseChangingDemo(){
  let [data,setData] = React.useState(["A","B","C"]);
  let [value,setValue] = r.useChanging(data);
  return (
    <n.EnclosedCodeContainer
      label="js.react/useChanging"
      code={(function (){
          return "(\n  <n.Row>\n    <ReactNative.Button\n      title=\"ABC\"\n      onPress={function (){\n          return setData([\"A\",\"B\",\"C\"]);\n        }}/>\n    <ReactNative.Button\n      title=\"XYZ\"\n      onPress={function (){\n          return setData([\"X\",\"Y\",\"Z\"]);\n        }}/>\n    <n.Fill/>\n    <n.Tabs data={data} value={value} setValue={setValue}/>\n  </n.Row>);";
        })()}>
      <n.Row>
        <ReactNative.Button
          title="ABC"
          onPress={function (){
              return setData(["A","B","C"]);
            }}/>
        <ReactNative.Button
          title="XYZ"
          onPress={function (){
              return setData(["X","Y","Z"]);
            }}/>
        <n.Fill/>
        <n.Tabs data={data} value={value} setValue={setValue}/>
      </n.Row>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/UseTreeDemo [396] 
export function UseTreeDemo(){
  let {branch,branches,setBranch,view} = r.useTree({
    "tree":{"a":{"b":{"c":1}},"x":{"y":{"z":2}}},
    "targetFn":function (tree,branch,_parents,_root){
        return tree[branch];
      },
    "displayFn":function (target,branch,parents,root){
        return (
          <n.TextDisplay content={n.format_entry({branch,parents,root,target})}/>);
      }
  });
  return (
    <n.EnclosedCodeContainer
      label="js.react/useTree"
      code={(function (){
          return "(\n  <n.Row style={{\"marginVertical\":5}}>\n    <ReactNative.Button\n      title=\"a\"\n      onPress={function (){\n          return setBranch(\"a\");\n        }}/>\n    <ReactNative.Text> </ReactNative.Text>\n    <ReactNative.Button\n      title=\"x\"\n      onPress={function (){\n          return setBranch(\"x\");\n        }}/>\n  </n.Row>);\nview;\n(\n  <n.Row style={{\"padding\":5}}/>);\n(\n  <n.TextDisplay content={n.format_entry({branch,branches})}/>);";
        })()}>
      <n.Row style={{"marginVertical":5}}>
        <ReactNative.Button
          title="a"
          onPress={function (){
              return setBranch("a");
            }}/>
        <ReactNative.Text> </ReactNative.Text>
        <ReactNative.Button
          title="x"
          onPress={function (){
              return setBranch("x");
            }}/>
      </n.Row>
      {view}
      <n.Row style={{"padding":5}}/>
      <n.TextDisplay content={n.format_entry({branch,branches})}/>
    </n.EnclosedCodeContainer>);
}

// js.react-native.react-test/MODULE [426] 
export var MODULE = // 44388a0e-abeb-48c4-8b50-99468d436f6e
{
  "UseRefreshDemo":UseRefreshDemo,
  "UseGetCountDemo":UseGetCountDemo,
  "UseFollowRefDemo":UseFollowRefDemo,
  "IsMountedPane":IsMountedPane,
  "UseIsMountedDemo":UseIsMountedDemo,
  "MountedCallbackPane":MountedCallbackPane,
  "UseMountedCallbackDemo":UseMountedCallbackDemo,
  "UseFollowDelayedDemo":UseFollowDelayedDemo,
  "IntervalPane":IntervalPane,
  "UseIntervalDemo":UseIntervalDemo,
  "TimeoutPane":TimeoutPane,
  "UseTimeoutDemo":UseTimeoutDemo,
  "CountdownPane":CountdownPane,
  "UseCountdownDemo":UseCountdownDemo,
  "NowPane":NowPane,
  "UseNowDemo":UseNowDemo,
  "UseChangingDemo":UseChangingDemo,
  "UseTreeDemo":UseTreeDemo,
  "MODULE":MODULE
};;