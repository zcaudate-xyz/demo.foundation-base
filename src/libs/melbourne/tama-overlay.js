import * as T from 'tamagui'

import * as lib from '../xt/lang/common-lib.js'

// melbourne.tama-overlay/Dialog [17] 
export function Dialog({
  visible,
  setVisible,
  title,
  titleRight,
  body,
  children,
  trigger,
  onSubmit,
  onCancel,
  modalProps,
  submitProps,
  ...rprops
}){
  let closeFn = onCancel || (function (){
    if(setVisible){
      setVisible(false);
    }
  });
  let dialogProps = Object.assign({
    "modal":true,
    "open":visible,
    "onOpenChange":setVisible || (function (){
        
      })
  },modalProps || {},rprops);
  return (
    <T.Dialog {...dialogProps}>
      {trigger ? (
        <T.DialogTrigger asChild={true}>{trigger}</T.DialogTrigger>) : null}
      <T.DialogPortal>
        <T.DialogOverlay backgroundColor="rgba(15,23,42,0.45)"/>
        <T.DialogContent
          borderRadius="$4"
          padding="$4"
          gap="$3"
          minWidth={320}
          maxWidth={520}>
          {title ? (
            <T.XStack alignItems="center" justifyContent="space-between" gap="$2">
              <T.DialogTitle fontSize={20} fontWeight="800">{title}</T.DialogTitle>
              {titleRight}
            </T.XStack>) : null}
          {body ? (
            <T.DialogDescription color="$color11">{body}</T.DialogDescription>) : null}
          {children}
          <T.XStack justifyContent="flex-end" gap="$2">
            <T.DialogClose asChild={true}>
              <T.Button
                {...Object.assign(
                {"size":"$3","chromeless":true,"onPress":closeFn},
                submitProps || {}
              )}>CANCEL
              </T.Button>
            </T.DialogClose>
            <T.DialogClose asChild={true}>
              <T.Button
                {...Object.assign({"size":"$3","onPress":onSubmit},submitProps || {})}>OK
              </T.Button>
            </T.DialogClose>
          </T.XStack>
        </T.DialogContent>
      </T.DialogPortal>
    </T.Dialog>);
}

// melbourne.tama-overlay/Popover [98] 
export function Popover({open,setOpen,trigger,children,content,popoverProps,contentProps}){
  let props = Object.assign(
    popoverProps || {},
    !lib.nilp(open) ? {"open":open,"onOpenChange":setOpen} : {}
  );
  return (
    <T.Popover {...props}>
      {trigger ? (
        <T.PopoverTrigger asChild={true}>{trigger}</T.PopoverTrigger>) : null}
      <T.PopoverContent
        {...Object.assign(
        {"borderRadius":"$3","padding":"$3","gap":"$2","elevate":true},
        contentProps || {}
      )}>
        {content || children}
        <T.PopoverClose asChild={true}><T.Button size="$2" chromeless={true}>DONE</T.Button></T.PopoverClose>
      </T.PopoverContent>
    </T.Popover>);
}

// melbourne.tama-overlay/MODULE [137] 
export var MODULE = {"Dialog":Dialog,"Popover":Popover,"MODULE":MODULE};