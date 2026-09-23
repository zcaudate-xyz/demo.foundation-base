import * as data from '../xt/lang/common-data.js'

import * as ui_static from '../melbourne/ui-static.js'

import * as string from '../xt/lang/common-string.js'

// pune.ui-breadcrumb/Breadcrumb [27] 
export function Breadcrumb({
  design,
  mini,
  variant,
  style,
  root,
  rootOnly,
  branchOnly,
  path,
  text,
  noBanner
}){
  let routePath = data.arr_concat(
    [...data.arrayify(branchOnly ? [] : root)],
    data.arrayify(rootOnly ? [] : path)
  );
  let routeString = routePath.map(function (s){
    s;
    return string.tag_string(s).toUpperCase();
  });
  text = (text || routeString.join("   /   "));
  return (
    <ui_static.Text
      design={design}
      variant={Object.assign({
          "font":"h3",
          "fg":noBanner ? {"key":"primary","tone":"flatten"} : {"key":"background","tone":"sharpen"}
        },variant)}
      numberOfLines={1}
      style={[
          {"paddingVertical":5,"fontWeight":"900"},
          data.arrayify(style)
        ]}>{text}
    </ui_static.Text>);
}

// pune.ui-breadcrumb/MODULE [67] 
export var MODULE = {"Breadcrumb":Breadcrumb,"MODULE":MODULE};