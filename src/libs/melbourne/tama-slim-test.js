import * as T from 'tamagui'

import React from 'react'

import * as r from '../js/react.js'

import * as tama from './tama.js'

import * as n from '../js/react-native.js'

// melbourne.tama-slim-test/TamaMenuSection [14] 
export function TamaMenuSection(props){
  let {eyebrow,title,children} = props;
  return (
    <T.Card
      width="100%"
      padding={22}
      borderRadius={18}
      borderWidth={1}
      borderColor="#dbeafe"
      backgroundColor="#ffffff"
      gap={14}>
      <T.YStack gap={4}>
        <T.Text
          fontSize={10}
          fontWeight="800"
          letterSpacing={1}
          color="#2563eb">{eyebrow}
        </T.Text>
        <T.H2 fontSize={20} fontWeight="800" color="#0f172a">{title}</T.H2>
      </T.YStack>
      {children}
    </T.Card>);
}

// melbourne.tama-slim-test/TamaMenuScreen [41] 
export function TamaMenuScreen(props){
  let {label,children} = props;
  return (
    <T.YStack width="100%" maxWidth={860} alignSelf="center" minWidth={0}>
      <n.EnclosedCodeContainer
        label={label}
        code={(function (){
            return "(\n  <T.YStack width=\"100%\" gap={16}>{children}</T.YStack>);";
          })()}><T.YStack width="100%" gap={16}>{children}</T.YStack>
      </n.EnclosedCodeContainer>
    </T.YStack>);
}

// melbourne.tama-slim-test/TamaSlimCommonDemo [57] 
export function TamaSlimCommonDemo(){
  let [name,setName] = React.useState("Ava");
  let [agreed,setAgreed] = React.useState();
  let [enabled,setEnabled] = React.useState(true);
  let [currency,setCurrency] = React.useState("XLM");
  let [multi,setMulti] = React.useState(["XLM","STATS"]);
  let [color,setColor] = React.useState("#456789");
  let [tagText,setTagText] = React.useState("");
  let [selectedTags,setSelectedTags] = React.useState(["football","sport"]);
  let toggleMulti = function (item){
    setMulti(multi.includes(item) ? multi.filter(function (value){
      !(value == item);
    }) : multi.concat([item]));
  };
  let addTag = function (){
    let next = tagText.trim();
    if(next.length > 0){
      if(!selectedTags.includes(next)){
        setSelectedTags(selectedTags.concat([next]));
      }
      setTagText("");
    }
  };
  let removeTag = function (item){
    setSelectedTags(selectedTags.filter(function (value){
      !(value == item);
    }));
  };
  return (
    <TamaMenuScreen label="tama/slim-common">
      <TamaMenuSection eyebrow="FORM ENCLOSED" title="Light and dark surfaces">
        <T.XStack flexWrap="wrap" gap={12}>
          <T.Card
            flex={1}
            minWidth={220}
            padding="$3"
            backgroundColor="#f1f5f9"
            gap="$2">
            <T.Text fontSize={11} fontWeight="800" color="#475569">HELLO</T.Text>
            <T.Text color="#334155">WORLD</T.Text>
          </T.Card>
          <T.Card
            flex={1}
            minWidth={220}
            padding="$3"
            backgroundColor="#1e293b"
            gap="$2">
            <T.Text fontSize={11} fontWeight="800" color="#cbd5e1">HELLO</T.Text>
            <T.Text color="#f8fafc">WORLD</T.Text>
          </T.Card>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM READ ONLY"
        title="Present a value without editing it">
        <T.XStack flexWrap="wrap" gap={12}>
          <T.YStack flex={1} minWidth={220} gap={6}>
            <T.Label>Name</T.Label>
            <T.Text
              padding="$2"
              borderWidth={1}
              borderColor="$borderColor"
              borderRadius="$2"
              color="$color11">abc
            </T.Text>
          </T.YStack>
          <T.YStack flex={1} minWidth={220} gap={6}>
            <T.Label color="$color11">Name</T.Label>
            <T.Text
              padding="$2"
              borderWidth={1}
              borderColor="#475569"
              borderRadius="$2"
              backgroundColor="#1e293b"
              color="#f8fafc">abc
            </T.Text>
          </T.YStack>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM INPUT"
        title="Edit a value and surface its validation action">
        <T.YStack gap={10}>
          <T.XStack flexWrap="wrap" gap={12}>
            <T.YStack flex={1} minWidth={220} gap={6}>
              <T.Label>Name</T.Label>
              <T.Input value={name} onChangeText={setName} placeholder="abc"/>
            </T.YStack>
            <T.YStack flex={1} minWidth={220} gap={6}>
              <T.Label color="#cbd5e1">Name (quiet validation)</T.Label>
              <T.Input
                value={name}
                onChangeText={setName}
                backgroundColor="#1e293b"
                color="#f8fafc"
                borderColor="#475569"/>
            </T.YStack>
          </T.XStack>
          <T.XStack gap={8}>
            <T.Button
              size={2}
              onPress={function (){
                  setName("Validated");
                }}>Validate
            </T.Button>
            <T.Text alignSelf="center" color="$color11">Value: {name}</T.Text>
          </T.XStack>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM INPUT XL"
        title="Give an important field more room">
        <T.YStack gap={6} maxWidth={520}>
          <T.Label fontSize={15} fontWeight="700">Name</T.Label>
          <T.Input
            size={5}
            value={name}
            onChangeText={setName}
            placeholder="A larger entry field"/>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection eyebrow="FORM TEXT AREA" title="Capture longer-form context">
        <T.XStack flexWrap="wrap" gap={12}>
          <T.TextArea
            flex={1}
            minWidth={220}
            minHeight={110}
            placeholder="Write something useful..."/>
          <T.TextArea
            flex={1}
            minWidth={220}
            minHeight={110}
            backgroundColor="#1e293b"
            color="#f8fafc"
            borderColor="#475569"
            defaultValue="A dark text area"/>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection eyebrow="FORM CHECKBOX" title="Make agreement explicit">
        <T.XStack alignItems="center" gap={10}>
          <T.Checkbox checked={agreed} onCheckedChange={setAgreed}>
            <T.Checkbox.Indicator><T.Text fontWeight="900" color="#2563eb">✓</T.Text></T.Checkbox.Indicator>
          </T.Checkbox>
          <T.Text fontWeight="700">I agree to terms and conditions</T.Text>
        </T.XStack>
        <T.Text fontSize={12} color="$color11">{agreed ? "Agreement recorded" : "Agreement required"}</T.Text>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM TOGGLE BUTTON"
        title="Use a button when the state is part of the action">
        <T.XStack gap={10} flexWrap="wrap">
          <T.Button
            size={3}
            backgroundColor={agreed ? "#2563eb" : "#e2e8f0"}
            color={agreed ? "#ffffff" : "#0f172a"}
            onPress={function (){
                setAgreed(!agreed);
              }}>{agreed ? "I AGREE TO TERMS" : "AGREE"}
          </T.Button>
          <T.Button
            size={3}
            chromeless={true}
            onPress={function (){
                setAgreed(false);
              }}>Clear
          </T.Button>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM TOGGLE SWITCH"
        title="Keep an ongoing preference visible">
        <T.XStack alignItems="center" gap={12}>
          <T.Switch checked={enabled} onCheckedChange={setEnabled}><T.SwitchThumb animation="quicker"/></T.Switch>
          <T.Text fontWeight="700">{enabled ? "Enabled" : "Disabled"}</T.Text>
          <T.Text fontSize={12} color="$color11">Notifications</T.Text>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection eyebrow="FORM ENUM SINGLE" title="Choose one currency">
        <T.Select value={currency} onValueChange={setCurrency}>
          <T.Select.Trigger width="100%" maxWidth={360}><T.Select.Value/></T.Select.Trigger>
          <T.Select.Content zIndex={200000}>
            <T.Select.Viewport minWidth={280}>
              <T.Select.Item index={0} value="XLM"><T.Select.ItemText>XLM</T.Select.ItemText></T.Select.Item>
              <T.Select.Item index={1} value="USD"><T.Select.ItemText>USD</T.Select.ItemText></T.Select.Item>
              <T.Select.Item index={2} value="STATS"><T.Select.ItemText>STATS</T.Select.ItemText></T.Select.Item>
            </T.Select.Viewport>
          </T.Select.Content>
        </T.Select>
        <T.Text fontSize={12} color="$color11">Selected: {currency}</T.Text>
      </TamaMenuSection>
      <TamaMenuSection eyebrow="FORM ENUM MULTI" title="Select several currencies">
        <T.XStack gap={8} flexWrap="wrap">
          <T.Button
            size={2}
            chromeless={!multi.includes("XLM")}
            onPress={function (){
                toggleMulti("XLM");
              }}>XLM
          </T.Button>
          <T.Button
            size={2}
            chromeless={!multi.includes("USD")}
            onPress={function (){
                toggleMulti("USD");
              }}>USD
          </T.Button>
          <T.Button
            size={2}
            chromeless={!multi.includes("STATS")}
            onPress={function (){
                toggleMulti("STATS");
              }}>STATS
          </T.Button>
        </T.XStack>
        <T.Text fontSize={12} color="$color11">Selected: {multi.join(", ")}</T.Text>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM COLOR INPUT"
        title="Choose a color with an immediate preview">
        <T.XStack alignItems="center" gap={12}>
          <T.Input type="color" value={color} onChangeText={setColor} width={90}/>
          <T.Card
            width={42}
            height={42}
            backgroundColor={color}
            borderRadius={8}/>
          <T.Text fontFamily="monospace">{color}</T.Text>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM CHIP INPUT"
        title="Keep tags readable as they accumulate">
        <T.YStack gap={10}>
          <T.XStack gap={8} flexWrap="wrap">
            {selectedTags.map(function (item,i){
              return (
                <T.Button
                  key={i}
                  size={2}
                  borderRadius={999}
                  borderWidth={1}
                  borderColor="#93c5fd"
                  backgroundColor="#eff6ff"
                  color="#1e3a8a"
                  onPress={function (){
                      removeTag(item);
                    }}>{item} ×
                </T.Button>);
            })}
          </T.XStack>
          <T.XStack gap={8} alignItems="center">
            <T.Input
              flex={1}
              value={tagText}
              onChangeText={setTagText}
              onSubmitEditing={addTag}
              placeholder="Add a tag"/>
            <T.Button size={2} onPress={addTag}>ADD</T.Button>
          </T.XStack>
          <T.Text fontSize={12} color="$color11">Selected: {selectedTags.join(", ")}</T.Text>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM LAYOUT"
        title="Compose the controls into one coherent form">
        <T.Card padding="$4" gap={12} maxWidth={620}>
          <T.YStack gap={6}>
            <T.Label>Currency</T.Label>
            <T.Text color="$color11">{multi.join(", ")}</T.Text>
          </T.YStack>
          <T.YStack gap={6}>
            <T.Label>Name</T.Label>
            <T.Input value={name} onChangeText={setName}/>
          </T.YStack>
          <T.YStack gap={6}>
            <T.Label>About</T.Label>
            <T.TextArea minHeight={80} placeholder="Tell us about yourself"/>
          </T.YStack>
        </T.Card>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimNumberDemo [424] 
export function TamaSlimNumberDemo(){
  let [amount,setAmount] = React.useState(50);
  let onValueChange = function (values){
    setAmount(values.at(0));
  };
  return (
    <TamaMenuScreen label="tama/slim-number">
      <TamaMenuSection
        eyebrow="FORM SPINNER"
        title="Nudge a value with predictable steps">
        <T.YStack gap={12} maxWidth={520}>
          <T.XStack alignItems="center" justifyContent="space-between">
            <T.Text fontWeight="700">Price</T.Text>
            <T.Text fontSize={24} fontWeight="800" color="#2563eb">{amount}</T.Text>
          </T.XStack>
          <T.XStack gap={8}>
            <T.Button
              size={3}
              onPress={function (){
                  setAmount(amount - 2);
                }}>− 2
            </T.Button>
            <T.Button
              size={3}
              onPress={function (){
                  setAmount(amount + 2);
                }}>+ 2
            </T.Button>
          </T.XStack>
          <T.Text fontSize={12} color="$color11">Step 2 · range 0–100</T.Text>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection eyebrow="FORM SLIDER" title="Tune a value continuously">
        <T.YStack gap={16} maxWidth={520}>
          <T.XStack alignItems="center" justifyContent="space-between">
            <T.Text fontWeight="700">Price</T.Text>
            <T.Text fontSize={24} fontWeight="800" color="#2563eb">{amount}</T.Text>
          </T.XStack>
          <T.Slider
            size={3}
            value={Array.of(amount)}
            min={0}
            max={100}
            step={1}
            onValueChange={onValueChange}>
            <T.SliderTrack backgroundColor="#dbeafe"><T.Slider.TrackActive backgroundColor="#2563eb"/></T.SliderTrack>
            <T.SliderThumb
              index={0}
              circular={true}
              backgroundColor="#ffffff"
              borderColor="#2563eb"/>
          </T.Slider>
          <T.XStack gap={8}>
            <T.Button
              size={3}
              onPress={function (){
                  setAmount(amount - 5);
                }}>− 5
            </T.Button>
            <T.Button
              size={3}
              onPress={function (){
                  setAmount(amount + 5);
                }}>+ 5
            </T.Button>
          </T.XStack>
        </T.YStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimSelectDemo [508] 
export function TamaSlimSelectDemo(){
  let [value,setValue] = React.useState("Victoria");
  return (
    <TamaMenuScreen label="tama/slim-select">
      <TamaMenuSection
        eyebrow="FORM PICKER"
        title="Keep the most common choices within reach">
        <T.YStack gap={10} maxWidth={520}>
          <T.Text fontWeight="700">Price</T.Text>
          <T.XStack gap={8} flexWrap="wrap">
            <T.Button
              size={3}
              chromeless={!(value == "Victoria")}
              onPress={function (){
                  setValue("Victoria");
                }}>Victoria
            </T.Button>
            <T.Button
              size={3}
              chromeless={!(value == "Queensland")}
              onPress={function (){
                  setValue("Queensland");
                }}>Queensland
            </T.Button>
            <T.Button
              size={3}
              chromeless={!(value == "Tasmania")}
              onPress={function (){
                  setValue("Tasmania");
                }}>Tasmania
            </T.Button>
          </T.XStack>
          <T.Text fontSize={12} color="$color11">Selected: {value}</T.Text>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM DROPDOWN"
        title="Choose from a compact, keyboard-friendly list">
        <T.YStack gap={10} maxWidth={360}>
          <T.Text fontWeight="700">State</T.Text>
          <T.Select value={value} onValueChange={setValue}>
            <T.Select.Trigger width="100%" borderRadius={10}><T.Select.Value placeholder="Choose a state"/></T.Select.Trigger>
            <T.Select.Content zIndex={200000}>
              <T.Select.Viewport minWidth={280}>
                <T.Select.Group>
                  <T.Select.Label>Australian states</T.Select.Label>
                  <T.Select.Item index={0} value="Victoria"><T.Select.ItemText>Victoria</T.Select.ItemText></T.Select.Item>
                  <T.Select.Item index={1} value="Queensland"><T.Select.ItemText>Queensland</T.Select.ItemText></T.Select.Item>
                  <T.Select.Item index={2} value="Tasmania"><T.Select.ItemText>Tasmania</T.Select.ItemText></T.Select.Item>
                  <T.Select.Item index={3} value="Western Australia"><T.Select.ItemText>Western Australia</T.Select.ItemText></T.Select.Item>
                </T.Select.Group>
              </T.Select.Viewport>
            </T.Select.Content>
          </T.Select>
          <T.Text color="#64748b" fontSize={12}>Selected: {value}</T.Text>
        </T.YStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimImageDemo [589] 
export function TamaSlimImageDemo(){
  return (
    <TamaMenuScreen label="tama/slim-image">
      <TamaMenuSection
        eyebrow="IMAGE"
        title="Give media a clear frame and a useful fallback">
        <T.XStack flexWrap="wrap" gap={18} alignItems="center">
          <T.Image
            width={260}
            height={160}
            borderRadius={16}
            objectFit="cover"
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=700&q=80"/>
          <T.Avatar circular={true} size={96}>
            <T.AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80"/>
            <T.AvatarFallback><T.Text fontWeight="800">AV</T.Text></T.AvatarFallback>
          </T.Avatar>
        </T.XStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimLinkDemo [617] 
export function TamaSlimLinkDemo(){
  let [message,setMessage] = React.useState("Choose a link to preview its destination.");
  let [account,setAccount] = React.useState("Account 1");
  return (
    <TamaMenuScreen label="tama/slim-link">
      <TamaMenuSection
        eyebrow="FORM LINK DROPDOWN"
        title="Choose a related record from a lookup">
        <T.YStack gap={12} maxWidth={520}>
          <T.Label>Account</T.Label>
          <T.Select
            value={account}
            onValueChange={function (next){
                setAccount(next);
                setMessage(concat("Selected ",next));
              }}>
            <T.Select.Trigger width="100%"><T.Select.Value/></T.Select.Trigger>
            <T.Select.Content zIndex={200000}>
              <T.Select.Viewport>
                <T.Select.Item index={0} value="Account 1"><T.Select.ItemText>Account 1</T.Select.ItemText></T.Select.Item>
                <T.Select.Item index={1} value="Account 2"><T.Select.ItemText>Account 2</T.Select.ItemText></T.Select.Item>
                <T.Select.Item index={2} value="Account 3"><T.Select.ItemText>Account 3</T.Select.ItemText></T.Select.Item>
              </T.Select.Viewport>
            </T.Select.Content>
          </T.Select>
          <T.Text color="#64748b" fontSize={12}>{message}</T.Text>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM LINK READ ONLY"
        title="Show a linked record without opening an editor">
        <T.YStack gap={6} maxWidth={520}>
          <T.Label>Account</T.Label>
          <T.Text
            padding="$2"
            borderWidth={1}
            borderColor="$borderColor"
            borderRadius="$2"
            color="$color11">Account 2 · id-2
          </T.Text>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="FORM LINK ENTRY READ ONLY"
        title="Keep linked entry context visible">
        <T.Card padding="$3" gap={8} maxWidth={520}>
          <T.Text fontWeight="800">Account 3</T.Text>
          <T.Text color="$color11">id-3 · balance 42</T.Text>
          <T.Anchor
            href="#account-3"
            color="#2563eb"
            onPress={function (){
                setMessage("Account 3 opened");
              }}>Open account
          </T.Anchor>
        </T.Card>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimErrorDemo [691] 
export function TamaSlimErrorDemo(){
  let [retried,setRetried] = React.useState();
  return (
    <TamaMenuScreen label="tama/slim-error">
      <TamaMenuSection
        eyebrow="ERROR"
        title="Explain a failure without losing the user">
        <T.Card
          padding={16}
          borderRadius={14}
          borderWidth={1}
          borderColor="#fecaca"
          backgroundColor="#fff1f2"
          gap={8}>
          <T.Text fontWeight="800" color="#be123c">Something needs attention</T.Text>
          <T.Text color="#9f1239">We could not load the latest component metadata.</T.Text>
          <T.Button
            size={3}
            alignSelf="flex-start"
            onPress={function (){
                setRetried(true);
              }}>{retried ? "Retry queued" : "Try again"}
          </T.Button>
        </T.Card>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimSubmitDemo [720] 
export function TamaSlimSubmitDemo(){
  let [status,setStatus] = React.useState("Ready to submit");
  let [waiting,setWaiting] = React.useState();
  let [errored,setErrored] = React.useState();
  let [email,setEmail] = React.useState("a@a.com");
  return (
    <TamaMenuScreen label="tama/slim-submit">
      <TamaMenuSection eyebrow="USE SUBMIT" title="Expose waiting and result state">
        <T.XStack gap={8} flexWrap="wrap" alignItems="center">
          <T.Button
            size={3}
            disabled={waiting}
            onPress={function (){
                setWaiting(true);
                setStatus("Action complete");
              }}>{waiting ? "Working..." : "Action"}
          </T.Button>
          <T.Button
            size={3}
            chromeless={true}
            onPress={function (){
                setWaiting(false);
                setStatus("Cleared");
              }}>Clear
          </T.Button>
          <T.Text fontSize={12} color="$color11">{status}</T.Text>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SUBMIT BUTTON"
        title="Make normal, waiting, and error states obvious">
        <T.XStack gap={8} flexWrap="wrap">
          <T.Button
            size={3}
            onPress={function (){
                setErrored(false);
              }}>HELLO
          </T.Button>
          <T.Button size={3} disabled={true}>WAITING</T.Button>
          <T.Button
            size={3}
            backgroundColor={errored ? "#be123c" : "#2563eb"}
            onPress={function (){
                setErrored(!errored);
              }}>{errored ? "CHANGE FAILED" : "CHANGE PASSWORD"}
          </T.Button>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SUBMIT LINE"
        title="Keep the primary action beside its reset">
        <T.XStack gap={8}>
          <T.Button
            size={3}
            onPress={function (){
                setStatus("Submitted");
              }}>Submit
          </T.Button>
          <T.Button
            size={3}
            chromeless={true}
            onPress={function (){
                setStatus("Reset");
              }}>Reset
          </T.Button>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SUBMIT LINE ACTIONS"
        title="Give destructive and secondary actions a clear home">
        <T.XStack gap={8} flexWrap="wrap">
          <T.Button
            size={3}
            onPress={function (){
                setStatus("Saved");
              }}>Save
          </T.Button>
          <T.Button
            size={3}
            chromeless={true}
            onPress={function (){
                setStatus("Cancelled");
              }}>Cancel
          </T.Button>
          <T.Button
            size={3}
            chromeless={true}
            onPress={function (){
                setStatus("Cleared");
              }}>Clear
          </T.Button>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="USE SUBMIT FIELD"
        title="Validate a field before it reaches the action">
        <T.YStack gap={8} maxWidth={520}>
          <T.Label>Email</T.Label>
          <T.Input
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"/>
          <T.Text fontSize={12} color={(email == "") ? "#be123c" : "$color11"}>{(email == "") ? "Email is required" : "Ready to validate"}</T.Text>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="USE SUBMIT FORM"
        title="Bring field, action, and result together">
        <T.Card padding="$4" gap={10} maxWidth={560}>
          <T.Input value={email} onChangeText={setEmail} placeholder="Email"/>
          <T.Button
            size={3}
            onPress={function (){
                setStatus(concat("Submitted ",email));
              }}>Submit form
          </T.Button>
          <T.Text fontSize={12} color="$color11">{status}</T.Text>
        </T.Card>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimDialogDemo [842] 
export function TamaSlimDialogDemo(){
  return (
    <TamaMenuScreen label="tama/slim-dialog">
      <TamaMenuSection
        eyebrow="DIALOG"
        title="Keep confirmation close to the action">
        <T.Dialog modal={true}>
          <T.DialogTrigger asChild={true}><T.Button size={4}>Review changes</T.Button></T.DialogTrigger>
          <T.DialogPortal>
            <T.DialogOverlay backgroundColor="rgba(15,23,42,0.45)"/>
            <T.DialogContent borderRadius={18} padding={22} gap={14} minWidth={320}>
              <T.DialogTitle fontSize={20} fontWeight="800">Ready to publish?</T.DialogTitle>
              <T.DialogDescription color="#64748b">This direct Tamagui dialog keeps the decision focused.</T.DialogDescription>
              <T.XStack justifyContent="flex-end" gap={8}>
                <T.DialogClose asChild={true}><T.Button size={3} chromeless={true}>Cancel</T.Button></T.DialogClose>
                <T.DialogClose asChild={true}><T.Button size={3}>Publish</T.Button></T.DialogClose>
              </T.XStack>
            </T.DialogContent>
          </T.DialogPortal>
        </T.Dialog>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimEntryDemo [887] 
export function TamaSlimEntryDemo(){
  let entry = {
    "description":"A reusable record",
    "escrow":"50.5",
    "name":"Ava",
    "debug":"Debug output",
    "currency":"STATS",
    "balance":"1000",
    "label":"Currency",
    "avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    "formState":"Ready"
  };
  let samples = [
    {
      "id":"entry-free",
      "eyebrow":"ENTRY FREE",
      "title":"Render a free entry surface",
      "entry":entry,
      "impl":{
          "type":"card",
          "body":[
              {"type":"title","template":["currency"]},
              {"type":"p","template":["description"]}
            ]
        }
    },
    {
      "id":"entry-content-raw",
      "eyebrow":"ENTRY CONTENT RAW",
      "title":"Show raw record content",
      "entry":entry,
      "impl":{"type":"raw","template":["description"]}
    },
    {
      "id":"entry-layout-horizontal",
      "eyebrow":"ENTRY LAYOUT HORIZONTAL",
      "title":"Lay content out side by side",
      "entry":entry,
      "impl":{
          "type":"h",
          "body":[
              {"type":"title","template":["currency"]},
              {"type":"p","template":["balance"]}
            ]
        }
    },
    {
      "id":"entry-layout-vertical",
      "eyebrow":"ENTRY LAYOUT VERTICAL",
      "title":"Stack content vertically",
      "entry":entry,
      "impl":{
          "type":"v",
          "body":[
              {"type":"title","template":["currency"]},
              {"type":"p","template":["balance"]}
            ]
        }
    },
    {
      "id":"entry-layout-enclosed",
      "eyebrow":"ENTRY LAYOUT ENCLOSED",
      "title":"Give an entry a labeled boundary",
      "entry":assoc(entry,layout="ENCLOSED"),
      "impl":{
          "type":"card",
          "body":[
              {"type":"title","template":["layout"]},
              {"type":"p","template":["description"]}
            ]
        }
    },
    {
      "id":"entry-layout-portal",
      "eyebrow":"ENTRY LAYOUT PORTAL",
      "title":"Keep portal content visually grouped",
      "entry":assoc(entry,layout="PORTAL"),
      "impl":{
          "type":"card",
          "body":[
              {"type":"title","template":["layout"]},
              {"type":"p","template":["description"]}
            ]
        }
    },
    {
      "id":"entry-layout-portal-sink",
      "eyebrow":"ENTRY LAYOUT PORTAL SINK",
      "title":"Pair a portal with its sink",
      "entry":assoc(entry,layout="PORTAL SINK"),
      "impl":{
          "type":"card",
          "body":[
              {"type":"title","template":["layout"]},
              {"type":"p","template":["description"]}
            ]
        }
    },
    {
      "id":"entry-layout-debug",
      "eyebrow":"ENTRY LAYOUT DEBUG",
      "title":"Make diagnostic content visible",
      "entry":entry,
      "impl":{"type":"raw","template":["debug"]}
    },
    {
      "id":"entry-layout-form-fade",
      "eyebrow":"ENTRY LAYOUT FORM FADE",
      "title":"Toggle a field with a soft transition",
      "entry":entry,
      "impl":{
          "type":"control",
          "text":"TOGGLE FADE",
          "onPress":function (){
              
            }
        }
    },
    {
      "id":"entry-layout-form-fold",
      "eyebrow":"ENTRY LAYOUT FORM FOLD",
      "title":"Toggle a field with a folded layout",
      "entry":entry,
      "impl":{
          "type":"control",
          "text":"TOGGLE FOLD",
          "onPress":function (){
              
            }
        }
    },
    {
      "id":"entry-content-title-h1",
      "eyebrow":"ENTRY CONTENT TITLE H1",
      "title":"Render the largest heading",
      "entry":entry,
      "impl":{"type":"title-h1","template":["currency"]}
    },
    {
      "id":"entry-content-title-h2",
      "eyebrow":"ENTRY CONTENT TITLE H2",
      "title":"Render a second-level heading",
      "entry":entry,
      "impl":{"type":"title-h2","template":["currency"]}
    },
    {
      "id":"entry-content-title-h3",
      "eyebrow":"ENTRY CONTENT TITLE H3",
      "title":"Render a third-level heading",
      "entry":entry,
      "impl":{"type":"title-h3","template":["currency"]}
    },
    {
      "id":"entry-content-title-h4",
      "eyebrow":"ENTRY CONTENT TITLE H4",
      "title":"Render a fourth-level heading",
      "entry":entry,
      "impl":{"type":"title-h4","template":["currency"]}
    },
    {
      "id":"entry-content-title-h5",
      "eyebrow":"ENTRY CONTENT TITLE H5",
      "title":"Render a fifth-level heading",
      "entry":entry,
      "impl":{"type":"title-h5","template":["currency"]}
    },
    {
      "id":"entry-content-bold",
      "eyebrow":"ENTRY CONTENT BOLD",
      "title":"Emphasize a value",
      "entry":entry,
      "impl":{"type":"bold","template":["currency"]}
    },
    {
      "id":"entry-content-raw-repeat",
      "eyebrow":"ENTRY CONTENT RAW REPEAT",
      "title":"Keep the repeated raw sample from Slim",
      "entry":entry,
      "impl":{"type":"raw","template":["description"]}
    },
    {
      "id":"entry-content-raw-form",
      "eyebrow":"ENTRY CONTENT RAW FORM",
      "title":"Show a form-backed raw value",
      "entry":entry,
      "impl":{"type":"raw","template":["formState"]}
    },
    {
      "id":"entry-content-fill",
      "eyebrow":"ENTRY CONTENT FILL",
      "title":"Fill the remaining horizontal space",
      "entry":entry,
      "impl":{
          "type":"h",
          "body":[
              {"type":"raw","template":["currency"]},
              {"type":"fill"},
              {
                "type":"control",
                "text":"OPEN",
                "onPress":function (){
                    
                  }
              }
            ]
        }
    },
    {
      "id":"entry-content-title",
      "eyebrow":"ENTRY CONTENT TITLE",
      "title":"Render the compact title style",
      "entry":entry,
      "impl":{"type":"title","template":["currency"]}
    },
    {
      "id":"entry-content-paragraph",
      "eyebrow":"ENTRY CONTENT PARAGRAPH",
      "title":"Render paragraph text",
      "entry":entry,
      "impl":{"type":"p","template":["description"]}
    },
    {
      "id":"entry-content-separator",
      "eyebrow":"ENTRY CONTENT SEPARATOR",
      "title":"Separate adjacent content",
      "entry":entry,
      "impl":{"type":"separator"}
    },
    {
      "id":"entry-content-icon",
      "eyebrow":"ENTRY CONTENT ICON",
      "title":"Use a compact icon label",
      "entry":assoc(entry,name="home"),
      "impl":{"type":"icon","template":["name"]}
    },
    {
      "id":"entry-content-image",
      "eyebrow":"ENTRY CONTENT IMAGE",
      "title":"Pair an avatar with entry text",
      "entry":entry,
      "impl":{
          "type":"image",
          "template":["name"],
          "image":{"template":["avatar"]}
        }
    },
    {
      "id":"entry-content-pair",
      "eyebrow":"ENTRY CONTENT PAIR",
      "title":"Align a label and value",
      "entry":entry,
      "impl":{
          "type":"pair",
          "title":{"type":"raw","template":["label"]},
          "text":{"type":"raw","template":["currency"]}
        }
    },
    {
      "id":"entry-content-field",
      "eyebrow":"ENTRY CONTENT FIELD",
      "title":"Expose an editable entry field",
      "entry":entry,
      "impl":{"type":"field","template":["name"]}
    },
    {
      "id":"entry-content-control",
      "eyebrow":"ENTRY CONTENT CONTROL",
      "title":"Attach a direct control button",
      "entry":entry,
      "impl":{
          "type":"control",
          "text":"DETAIL",
          "onPress":function (){
              
            }
        }
    },
    {
      "id":"entry-layout-control",
      "eyebrow":"ENTRY LAYOUT CONTROL",
      "title":"Combine content and a control",
      "entry":entry,
      "impl":{
          "type":"h",
          "body":[
              {"type":"raw","template":["currency"]},
              {"type":"fill"},
              {
                "type":"control",
                "text":"PRESS",
                "onPress":function (){
                    
                  }
              }
            ]
        }
    },
    {
      "id":"entry-content-action",
      "eyebrow":"ENTRY CONTENT ACTION",
      "title":"Expose an entry action",
      "entry":entry,
      "impl":{
          "type":"control",
          "text":"HELLO",
          "onPress":function (){
              
            }
        }
    },
    {
      "id":"entry-content-link",
      "eyebrow":"ENTRY CONTENT LINK",
      "title":"Expose a link-like action",
      "entry":entry,
      "impl":{
          "type":"control",
          "text":"PRESS",
          "onPress":function (){
              
            }
        }
    },
    {
      "id":"entry-layout-link",
      "eyebrow":"ENTRY LAYOUT LINK",
      "title":"Use a link-like layout",
      "entry":entry,
      "impl":{
          "type":"h",
          "body":[
              {"type":"raw","template":["currency"]},
              {
                "type":"control",
                "text":"PRESS",
                "onPress":function (){
                    
                  }
              }
            ]
        }
    },
    {
      "id":"entry-content-route",
      "eyebrow":"ENTRY CONTENT ROUTE",
      "title":"Expose a route action",
      "entry":entry,
      "impl":{
          "type":"control",
          "text":"DETAIL",
          "onPress":function (){
              
            }
        }
    },
    {
      "id":"entry-content-route-toggle",
      "eyebrow":"ENTRY CONTENT ROUTE TOGGLE",
      "title":"Toggle a route action",
      "entry":entry,
      "impl":{
          "type":"control",
          "text":"TOGGLE DETAIL",
          "onPress":function (){
              
            }
        }
    },
    {
      "id":"entry-content-submit",
      "eyebrow":"ENTRY CONTENT SUBMIT",
      "title":"Submit a record action",
      "entry":entry,
      "impl":{
          "type":"control",
          "text":"CREATE",
          "onPress":function (){
              
            }
        }
    },
    {
      "id":"entry-layout-card",
      "eyebrow":"ENTRY LAYOUT CARD",
      "title":"Render the card layout",
      "entry":entry,
      "impl":{
          "type":"card",
          "body":[
              {"type":"title","template":["currency"]},
              {"type":"p","template":["description"]}
            ]
        }
    },
    {
      "id":"entry-layout-form",
      "eyebrow":"ENTRY LAYOUT FORM",
      "title":"Compose fields in a form layout",
      "entry":entry,
      "impl":{
          "type":"v",
          "body":[
              {"type":"field","template":["name"]},
              {"type":"field","template":["currency"]}
            ]
        }
    },
    {
      "id":"entry",
      "eyebrow":"ENTRY",
      "title":"Combine the entry vocabulary",
      "entry":entry,
      "impl":{
          "type":"v",
          "body":[
              {"type":"title","template":["currency"]},
              {"type":"p","template":["description"]},
              {"type":"separator"},
              {
                "type":"image",
                "template":["name"],
                "image":{"template":["avatar"]}
              }
            ]
        }
    }
  ];
  return (
    <TamaMenuScreen label="tama/slim-entry">
      {samples.map(function (sample){
        return (
          <TamaMenuSection key={sample.id} eyebrow={sample.eyebrow} title={sample.title}><tama.Entry entry={sample.entry} impl={sample.impl}/></TamaMenuSection>);
      })}
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimPopupDemo [1099] 
export function TamaSlimPopupDemo(){
  return (
    <TamaMenuScreen label="tama/slim-popup">
      <TamaMenuSection eyebrow="POPUP" title="Reveal supporting actions on demand">
        <T.Popover>
          <T.PopoverTrigger asChild={true}><T.Button size={4}>Open actions</T.Button></T.PopoverTrigger>
          <T.PopoverContent borderRadius={14} padding={14} gap={10} elevate={true}>
            <T.Text fontWeight="800">Quick actions</T.Text>
            <T.Button chromeless={true} justifyContent="flex-start">Duplicate</T.Button>
            <T.Button chromeless={true} justifyContent="flex-start">Archive</T.Button>
            <T.PopoverClose asChild={true}><T.Button size={2} chromeless={true}>Done</T.Button></T.PopoverClose>
          </T.PopoverContent>
        </T.Popover>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimSheetDemo [1136] 
export function TamaSlimSheetDemo(){
  let [page,setPage] = React.useState(1);
  return (
    <TamaMenuScreen label="tama/slim-sheet">
      <TamaMenuSection
        eyebrow="SHEET PAGINATION"
        title="Keep a longer sheet easy to scan">
        <T.YStack gap={10} maxWidth={760}>
          <tama.Sheet
            impl={{
                "columns":[
                    {"key":"symbol","label":"Symbol","template":["symbol"]},
                    {"key":"balance","label":"Balance","template":["balance"]}
                  ]
              }}
            entries={(page == 1) ? [
                {"id":"one","symbol":"STATS","balance":1000},
                {"id":"two","symbol":"TAMA","balance":500}
              ] : [
                {"id":"three","symbol":"SLIM","balance":250},
                {"id":"four","symbol":"PUNE","balance":125}
              ]}/>
          <T.XStack justifyContent="space-between" alignItems="center">
            <T.Button
              size={2}
              disabled={page == 1}
              onPress={function (){
                  setPage(1);
                }}>Previous
            </T.Button>
            <T.Text>Page {page} of 2</T.Text>
            <T.Button
              size={2}
              disabled={page == 2}
              onPress={function (){
                  setPage(2);
                }}>Next
            </T.Button>
          </T.XStack>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SHEET GROUP HEADER"
        title="Make groups visible before the rows begin">
        <T.YStack gap={8} maxWidth={760}>
          <T.Text fontWeight="800" color="#2563eb">WORLD</T.Text>
          <T.Text fontWeight="800" color="$color11">STATS · Melbourne</T.Text>
          <T.Text fontWeight="800" color="#2563eb">LOCAL</T.Text>
          <T.Text fontWeight="800" color="$color11">TAMA · Pune</T.Text>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SHEET HEADER"
        title="Align headings with the data they describe">
        <T.Card padding="$3" maxWidth={760}>
          <tama.SheetHeader
            impl={{
                "columns":[
                    {"key":"symbol","label":"SYMBOL"},
                    {"key":"balance","label":"BALANCE"},
                    {"key":"escrow","label":"ESCROW"}
                  ]
              }}/>
        </T.Card>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SHEET ROW"
        title="Render one row with shared cell rules">
        <T.Card padding="$3" maxWidth={760}>
          <tama.SheetRow
            entry={{"symbol":"STATS","balance":1000,"escrow":50.5}}
            impl={{
                "columns":[
                    {"key":"symbol","label":"Symbol","template":["symbol"]},
                    {"key":"balance","label":"Balance","template":["balance"]},
                    {"key":"escrow","label":"Escrow","template":["escrow"]}
                  ]
              }}/>
        </T.Card>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SHEET BASIC ROWS"
        title="Start with a compact collection of rows">
        <T.YStack height={260} maxWidth={760}>
          <tama.SheetBasic
            impl={{
                "columns":[
                    {"key":"symbol","label":"Symbol","template":["symbol"]},
                    {"key":"balance","label":"Balance","template":["balance"]},
                    {"key":"escrow","label":"Escrow","template":["escrow"]}
                  ]
              }}
            entries={[
                {"id":"one","symbol":"STATS","balance":1000,"escrow":50.5},
                {"id":"two","symbol":"DOGE","balance":1000,"escrow":50.5}
              ]}/>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SHEET BASIC"
        title="Give the full basic renderer a taller frame">
        <T.YStack height={320} maxWidth={760}>
          <tama.SheetBasic
            impl={{
                "columns":[
                    {"key":"symbol","label":"Symbol","template":["symbol"]},
                    {"key":"status","label":"Status","template":["status"]},
                    {"key":"owner","label":"Owner","template":["owner"]}
                  ]
              }}
            entries={[
                {
                  "id":"one",
                  "symbol":"STATS",
                  "status":"ACTIVE",
                  "owner":"Melbourne"
                },
                {"id":"two","symbol":"TAMA","status":"READY","owner":"Pune"},
                {
                  "id":"three",
                  "symbol":"SLIM",
                  "status":"BARE METAL",
                  "owner":"Web"
                }
              ]}/>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SHEET GROUP ROWS"
        title="Keep grouped records readable">
        <T.YStack gap={8} maxWidth={760}>
          <T.Text fontWeight="800" color="#2563eb">STATS</T.Text>
          <tama.SheetBasic
            height={180}
            impl={{
                "columns":[
                    {"key":"name","label":"Name","template":["name"]},
                    {"key":"balance","label":"Balance","template":["balance"]}
                  ]
              }}
            entries={[
                {"id":"one","name":"ABC","balance":506},
                {"id":"two","name":"HIJ","balance":130400}
              ]}/>
          <T.Text fontWeight="800" color="$color11">DOGE</T.Text>
          <tama.SheetBasic
            height={180}
            impl={{
                "columns":[
                    {"key":"name","label":"Name","template":["name"]},
                    {"key":"balance","label":"Balance","template":["balance"]}
                  ]
              }}
            entries={[
                {"id":"three","name":"KLM","balance":100},
                {"id":"four","name":"QRS","balance":490}
              ]}/>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SHEET"
        title="Scan structured information at a glance">
        <tama.Sheet
          impl={{
              "columns":[
                  {"key":"symbol","label":"Symbol","template":["symbol"]},
                  {"key":"status","label":"Status","template":["status"]},
                  {"key":"owner","label":"Owner","template":["owner"]}
                ]
            }}
          entries={[
              {
                "id":"one",
                "symbol":"STATS",
                "status":"ACTIVE",
                "owner":"Melbourne"
              },
              {"id":"two","symbol":"TAMA","status":"READY","owner":"Pune"},
              {
                "id":"three",
                "symbol":"SLIM",
                "status":"BARE METAL",
                "owner":"Web"
              }
            ]}/>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimTablemDemo [1325] 
export function TamaSlimTablemDemo(){
  let control = tama.useLocalControl();
  return (
    <TamaMenuScreen label="tama/slim-tablem">
      <TamaMenuSection
        eyebrow="TABLE DEFAULT NOT FOUND"
        title="Give an empty result a useful landing state"><tama.TableStandard control={control} entries={[]}/>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE DEFAULT IS LOADING"
        title="Make waiting states legible">
        <T.Card
          padding="$4"
          minHeight={120}
          justifyContent="center"
          alignItems="center"><T.Text color="$color11">Loading entries…</T.Text>
        </T.Card>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE BACK BUTTON"
        title="Keep navigation controls near the list">
        <tama.TableToolbar control={control} toolbarOpts={{"showOrderBy":false}}/>
        <T.Text fontSize={12} color="$color11">Toolbar state: {control.showList ? "list" : "create"}</T.Text>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST CARD BRIEF"
        title="Show the smallest useful card">
        <tama.Entry
          entry={{"title":"STATS","balance":1000}}
          impl={{
              "type":"card",
              "body":{
                  "title":{"type":"title","template":["title"]},
                  "balance":{
                      "type":"pair",
                      "title":{"type":"raw","template":"Balance"},
                      "text":{"type":"raw","template":["balance"]}
                    }
                }
            }}/>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST CARD NAV"
        title="Add a clear navigation affordance">
        <tama.Entry
          entry={{"title":"TAMA","status":"READY"}}
          impl={{
              "type":"card",
              "body":{
                  "title":{"type":"title","template":["title"]},
                  "status":{"type":"bold","template":["status"]},
                  "action":{
                      "type":"control",
                      "text":"Open",
                      "onPress":function (){
                          
                        }
                    }
                }
            }}/>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST CARD FOLD"
        title="Fold detail into the row when space is tight">
        <tama.Entry
          entry={{"title":"SLIM","description":"Detail stays in the same card"}}
          impl={{
              "type":"card",
              "body":[
                  {"type":"title","template":["title"]},
                  {"type":"p","template":["description"]}
                ]
            }}/>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST CARD SWIPE"
        title="Expose secondary actions without crowding the row">
        <T.XStack gap={8} flexWrap="wrap">
          <tama.Entry
            entry={{"title":"PUNE","status":"BETA"}}
            impl={{
                "type":"card",
                "body":[
                    {"type":"title","template":["title"]},
                    {"type":"bold","template":["status"]}
                  ]
              }}/>
          <T.Button size={2} chromeless={true}>Archive</T.Button>
        </T.XStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST"
        title="Render a collection of entry cards">
        <T.YStack height={300} maxWidth={520}>
          <tama.TableList
            entries={[
                {"id":"one","title":"STATS","status":"ACTIVE"},
                {"id":"two","title":"TAMA","status":"READY"},
                {"id":"three","title":"SLIM","status":"BARE METAL"}
              ]}
            impl={{
                "item":{
                    "type":"card",
                    "body":{
                        "title":{"type":"title","template":["title"]},
                        "status":{"type":"bold","template":["status"]}
                      }
                  }
              }}/>
        </T.YStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimTablegDemo [1437] 
export function TamaSlimTablegDemo(){
  return (
    <TamaMenuScreen label="tama/slim-tableg">
      <TamaMenuSection
        eyebrow="TABLE LIST VIEW ENTRIES"
        title="Keep a flat set of rows easy to scan">
        <tama.Table
          columns={[
              {"key":"name","label":"Name","data":["name"]},
              {"key":"balance","label":"Balance","data":["balance"]}
            ]}
          entries={[
              {"id":"one","name":"ABC","balance":506},
              {"id":"two","name":"HIJ","balance":130400},
              {"id":"three","name":"NOP","balance":1000},
              {"id":"four","name":"TUV","balance":79}
            ]}/>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST VIEW GROUP"
        title="Show group boundaries before their rows">
        <T.YStack gap={8}>
          <T.Text fontWeight="800" color="#2563eb">STATS</T.Text>
          <tama.Table
            columns={[
                {"key":"name","label":"Name","data":["name"]},
                {"key":"balance","label":"Balance","data":["balance"]}
              ]}
            entries={[
                {"id":"one","name":"ABC","balance":506},
                {"id":"two","name":"HIJ","balance":130400}
              ]}/>
          <T.Text fontWeight="800" color="$color11">DOGE</T.Text>
          <tama.Table
            columns={[
                {"key":"name","label":"Name","data":["name"]},
                {"key":"balance","label":"Balance","data":["balance"]}
              ]}
            entries={[
                {"id":"three","name":"KLM","balance":100},
                {"id":"four","name":"QRS","balance":490}
              ]}/>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST VIEW"
        title="Group related rows without losing hierarchy">
        <T.YStack gap={14} maxWidth={680}>
          <T.Text fontWeight="800" color="#2563eb">ACTIVE</T.Text>
          <tama.Table
            columns={[
                {"key":"symbol","label":"Symbol","data":["symbol"]},
                {"key":"owner","label":"Owner","data":["owner"]}
              ]}
            entries={[
                {"id":"one","symbol":"STATS","owner":"Melbourne"},
                {"id":"two","symbol":"TAMA","owner":"Pune"}
              ]}/>
          <T.Text fontWeight="800" color="#64748b">ARCHIVED</T.Text>
          <tama.Table
            columns={[
                {"key":"symbol","label":"Symbol","data":["symbol"]},
                {"key":"owner","label":"Owner","data":["owner"]}
              ]}
            entries={[{"id":"three","symbol":"SLIM","owner":"Web"}]}/>
        </T.YStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimTableDemo [1525] 
export function TamaSlimTableDemo(){
  let control = tama.useLocalControl();
  let [route,setRoute] = React.useState("list");
  return (
    <TamaMenuScreen label="tama/slim-table">
      <TamaMenuSection
        eyebrow="TABLE DETAIL VIEW"
        title="Read one record with its supporting fields">
        <tama.Entry
          entry={{"title":"STATS","status":"ACTIVE","balance":1000,"escrow":50.5}}
          impl={{
              "type":"card",
              "body":[
                  {"type":"title","template":["title"]},
                  {"type":"bold","template":["status"]},
                  {
                    "type":"pair",
                    "title":{"type":"raw","template":"Balance"},
                    "text":{"type":"raw","template":["balance"]}
                  },
                  {
                    "type":"pair",
                    "title":{"type":"raw","template":"Escrow"},
                    "text":{"type":"raw","template":["escrow"]}
                  }
                ]
            }}/>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE CREATE VIEW"
        title="Start a new record with focused fields">
        <T.Card padding="$4" gap={10} maxWidth={560}>
          <T.Text fontSize={18} fontWeight="800">NEW CURRENCY</T.Text>
          <T.Input placeholder="Name"/>
          <T.Input placeholder="Currency"/>
          <T.Button size={3}>Create</T.Button>
        </T.Card>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE MODIFY VIEW"
        title="Edit a record without losing its identity">
        <T.Card padding="$4" gap={10} maxWidth={560}>
          <T.Text fontSize={18} fontWeight="800">EDIT STATS</T.Text>
          <T.Text fontSize={12} color="$color11">ID: id-0</T.Text>
          <T.Input defaultValue="STATS"/>
          <T.Input defaultValue="National Basketball Association"/>
          <T.Button size={3}>Save changes</T.Button>
        </T.Card>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE ROUTER VIEW"
        title="Move between list, detail, and modify states">
        <T.YStack gap={10} maxWidth={680}>
          <T.XStack gap={8} flexWrap="wrap">
            <T.Button
              size={2}
              chromeless={!(route == "list")}
              onPress={function (){
                  setRoute("list");
                }}>List
            </T.Button>
            <T.Button
              size={2}
              chromeless={!(route == "detail")}
              onPress={function (){
                  setRoute("detail");
                }}>Detail
            </T.Button>
            <T.Button
              size={2}
              chromeless={!(route == "modify")}
              onPress={function (){
                  setRoute("modify");
                }}>Modify
            </T.Button>
          </T.XStack>
          <T.Text fontWeight="700">Route: {route}</T.Text>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE ROUTER"
        title="Keep route controls above a collection">
        <tama.TableToolbar control={control}/>
        <T.YStack height={260} maxWidth={680}>
          <tama.TableList
            entries={[
                {"id":"one","title":"STATS","status":"ACTIVE"},
                {"id":"two","title":"USA","status":"READY"},
                {"id":"three","title":"XLM","status":"ARCHIVED"}
              ]}
            impl={{
                "item":{
                    "type":"card",
                    "body":{
                        "title":{"type":"title","template":["title"]},
                        "status":{"type":"bold","template":["status"]}
                      }
                  }
              }}/>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE"
        title="Give a dense table a clear control bar">
        <tama.TableToolbar control={control}/>
        <tama.Table
          columns={[
              {"key":"symbol","label":"Symbol","data":["symbol"]},
              {"key":"status","label":"Status","data":["status"]},
              {
                "key":"description",
                "label":"Description",
                "data":["description"]
              }
            ]}
          entries={[
              {
                "id":"one",
                "symbol":"STATS",
                "status":"ACTIVE",
                "description":"First row"
              },
              {
                "id":"two",
                "symbol":"TAMA",
                "status":"READY",
                "description":"Second row"
              },
              {
                "id":"three",
                "symbol":"SLIM",
                "status":"BARE METAL",
                "description":"Third row"
              }
            ]}/>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimTablepDemo [1667] 
export function TamaSlimTablepDemo(){
  let [page,setPage] = React.useState(1);
  let columns = [
    {"key":"item","label":"Item","data":["item"]},
    {"key":"state","label":"State","data":["state"]}
  ];
  let entries = (page == 1) ? [
    {"id":"one","item":"STATS","state":"ACTIVE"},
    {"id":"two","item":"TAMA","state":"READY"}
  ] : [
    {"id":"three","item":"SLIM","state":"ARCHIVED"},
    {"id":"four","item":"PUNE","state":"BETA"}
  ];
  return (
    <TamaMenuScreen label="tama/slim-tablep">
      <TamaMenuSection
        eyebrow="TABLE LIST VIEW PAGED"
        title="Page a local collection without changing its shape">
        <tama.Table columns={columns} entries={entries}/>
        <T.Text fontSize={12} color="$color11">Page {page} of 2</T.Text>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST PAGED"
        title="Keep the page controls close to the rows">
        <T.YStack gap={10}>
          <tama.Table columns={columns} entries={entries}/>
          <T.XStack gap={8}>
            <T.Button
              size={3}
              disabled={page == 1}
              onPress={function (){
                  setPage(1);
                }}>Previous
            </T.Button>
            <T.Button
              size={3}
              disabled={page == 2}
              onPress={function (){
                  setPage(2);
                }}>Next
            </T.Button>
          </T.XStack>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST VIEW REMOTE PAGED"
        title="Show a remotely controlled page response">
        <T.Card padding="$4" gap={8}>
          <T.Text fontWeight="800">Remote page response</T.Text>
          <T.Text fontSize={12} color="$color11">Fetched page {page} · 200 total rows</T.Text>
          <tama.Table columns={columns} entries={entries}/>
        </T.Card>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE LIST REMOTE PAGED"
        title="Keep remote paging feedback visible">
        <T.YStack gap={10}>
          <T.XStack justifyContent="space-between">
            <T.Text fontWeight="700">Remote rows</T.Text>
            <T.Text fontSize={12} color="$color11">Total 200</T.Text>
          </T.XStack>
          <tama.Table columns={columns} entries={entries}/>
          <T.XStack justifyContent="flex-end">
            <T.Button
              size={2}
              onPress={function (){
                  setPage((page == 1) ? 2 : 1);
                }}>{(page == 1) ? "Load next" : "Load previous"}
            </T.Button>
          </T.XStack>
        </T.YStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimTablesDemo [1742] 
export function TamaSlimTablesDemo(){
  let [query,setQuery] = React.useState("");
  return (
    <TamaMenuScreen label="tama/slim-tables">
      <TamaMenuSection
        eyebrow="TABLES"
        title="Search the same data without changing its shape">
        <T.YStack gap={12}>
          <T.Input
            value={query}
            placeholder="Search symbols"
            onChangeText={setQuery}/>
          <T.Text color="#64748b" fontSize={12}>
            {(query == "") ? "Showing all symbols" : "Filtering for: "}
            {query}
          </T.Text>
          <tama.Table
            columns={[
                {"key":"symbol","label":"Symbol","data":["symbol"]},
                {"key":"status","label":"Status","data":["status"]}
              ]}
            entries={[
                {"id":"one","symbol":"STATS","status":"ACTIVE"},
                {"id":"two","symbol":"TAMA","status":"READY"},
                {"id":"three","symbol":"SLIM","status":"BARE METAL"}
              ]}/>
        </T.YStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimTablexDemo [1772] 
export function TamaSlimTablexDemo(){
  let control = tama.useLocalControl();
  return (
    <TamaMenuScreen label="tama/slim-tablex">
      <TamaMenuSection
        eyebrow="TABLE STANDARD"
        title="Keep an empty standard table actionable">
        <T.YStack height={260} maxWidth={520}><tama.TableStandard control={control} entries={[]}/></T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="TABLE EMBEDDED"
        title="Embed a table inside a larger workflow">
        <T.YStack height={320} maxWidth={760}>
          <tama.TableEmbedded
            control={control}
            columns={[
                {"key":"symbol","label":"Symbol","data":["symbol"]},
                {"key":"status","label":"Status","data":["status"]}
              ]}
            entries={[
                {"id":"one","symbol":"STATS","status":"ACTIVE"},
                {"id":"two","symbol":"TAMA","status":"READY"}
              ]}/>
        </T.YStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/TamaSlimDemo [1808] 
export function TamaSlimDemo(){
  let [route,setRoute] = React.useState("list");
  return (
    <TamaMenuScreen label="tama/slim">
      <TamaMenuSection
        eyebrow="SLIM TABLE"
        title="Compose a table from direct Tamagui primitives">
        <T.YStack height={300} maxWidth={760}>
          <tama.Table
            columns={[
                {"key":"symbol","label":"Symbol","data":["symbol"]},
                {"key":"status","label":"Status","data":["status"]}
              ]}
            entries={[
                {"id":"one","symbol":"STATS","status":"ACTIVE"},
                {"id":"two","symbol":"TAMA","status":"READY"},
                {"id":"three","symbol":"SLIM","status":"BARE METAL"}
              ]}/>
        </T.YStack>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SLIM CREATE ENTRY"
        title="Create a record with a small focused form">
        <T.Card padding="$4" gap={10} maxWidth={520}>
          <T.Input placeholder="Name"/>
          <T.Input placeholder="Currency"/>
          <T.Button size={3}>Create</T.Button>
        </T.Card>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SLIM ENTRY"
        title="Render one record as a reusable entry">
        <tama.Entry
          entry={{
              "title":"STATS",
              "status":"ACTIVE",
              "description":"A direct Tama entry"
            }}
          impl={{
              "type":"card",
              "body":[
                  {"type":"title","template":["title"]},
                  {"type":"bold","template":["status"]},
                  {"type":"p","template":["description"]}
                ]
            }}/>
      </TamaMenuSection>
      <TamaMenuSection
        eyebrow="SLIM ROUTE CONTROL"
        title="Keep list and detail controls visible">
        <T.YStack gap={10}>
          <T.XStack gap={8}>
            <T.Button
              size={2}
              chromeless={!(route == "list")}
              onPress={function (){
                  setRoute("list");
                }}>List
            </T.Button>
            <T.Button
              size={2}
              chromeless={!(route == "detail")}
              onPress={function (){
                  setRoute("detail");
                }}>Detail
            </T.Button>
          </T.XStack>
          <T.Text fontWeight="700">Route: {route}</T.Text>
        </T.YStack>
      </TamaMenuSection>
    </TamaMenuScreen>);
}

// melbourne.tama-slim-test/MODULE [1885] 
export var MODULE = {
  "TamaMenuSection":TamaMenuSection,
  "TamaMenuScreen":TamaMenuScreen,
  "TamaSlimCommonDemo":TamaSlimCommonDemo,
  "TamaSlimNumberDemo":TamaSlimNumberDemo,
  "TamaSlimSelectDemo":TamaSlimSelectDemo,
  "TamaSlimImageDemo":TamaSlimImageDemo,
  "TamaSlimLinkDemo":TamaSlimLinkDemo,
  "TamaSlimErrorDemo":TamaSlimErrorDemo,
  "TamaSlimSubmitDemo":TamaSlimSubmitDemo,
  "TamaSlimDialogDemo":TamaSlimDialogDemo,
  "TamaSlimEntryDemo":TamaSlimEntryDemo,
  "TamaSlimPopupDemo":TamaSlimPopupDemo,
  "TamaSlimSheetDemo":TamaSlimSheetDemo,
  "TamaSlimTablemDemo":TamaSlimTablemDemo,
  "TamaSlimTablegDemo":TamaSlimTablegDemo,
  "TamaSlimTableDemo":TamaSlimTableDemo,
  "TamaSlimTablepDemo":TamaSlimTablepDemo,
  "TamaSlimTablesDemo":TamaSlimTablesDemo,
  "TamaSlimTablexDemo":TamaSlimTablexDemo,
  "TamaSlimDemo":TamaSlimDemo,
  "MODULE":MODULE
};