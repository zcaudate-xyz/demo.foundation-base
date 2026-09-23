import * as lib from '../xt/lang/common-lib.js'

import * as math from '../xt/lang/common-math.js'

// melbourne.base-validators/is-true [16] 
export function is_true(message){
  return [
    "is-true",
    {
      "message":message || "Always true.",
      "check":function (){
          return true;
        }
    }
  ];
}

// melbourne.base-validators/is-integer [21] 
export function is_integer(message){
  return [
    "is-integer",
    {
      "message":message || "Must be integer.",
      "check":function (v,rec){
          let n = lib.to_number(v);
          return lib.is_numberp(n) && (n == math.round(n));
        }
    }
  ];
}

// melbourne.base-validators/is-number [32] 
export function is_number(message){
  return [
    "is-number",
    {
      "message":message || "Must be number.",
      "check":function (v,rec){
          let n = lib.to_number(v);
          return lib.is_numberp(n);
        }
    }
  ];
}

// melbourne.base-validators/is-accepted [41] 
export function is_accepted(message){
  return [
    "is-accepted",
    {
      "message":message || "Must be accepted.",
      "check":function (v,rec){
          return true == v;
        }
    }
  ];
}

// melbourne.base-validators/is-required [48] 
export function is_required(message){
  return [
    "is-required",
    {
      "message":message || "Required field.",
      "check":function (v,rec){
          return lib.not_nilp(v) && (0 < v.length);
        }
    }
  ];
}

// melbourne.base-validators/is-not-empty [56] 
export function is_not_empty(message){
  return [
    "is-not-empty",
    {
      "message":message || "Must not be empty.",
      "check":function (v,rec){
          return lib.not_nilp(v) && (0 < v.length);
        }
    }
  ];
}

// melbourne.base-validators/is-at-most [64] 
export function is_at_most(n,message){
  return [
    "is-at-most",
    {
      "message":message || ("Must have " + lib.to_string(n) + " or less characters."),
      "check":function (v,rec){
          return lib.not_nilp(v) && (n >= v.length);
        }
    }
  ];
}

// melbourne.base-validators/is-at-least [74] 
export function is_at_least(n,message){
  return [
    "is-at-least",
    {
      "message":message || ("Must have " + lib.to_string(n) + " or more characters."),
      "check":function (v,rec){
          return lib.not_nilp(v) && (n <= v.length);
        }
    }
  ];
}

// melbourne.base-validators/is-length-n [84] 
export function is_length_n(n,message){
  return [
    "is-length-n",
    {
      "message":message || ("Must be " + lib.to_string(n) + " characters."),
      "check":function (v,rec){
          return lib.not_nilp(v) && (n == v.length);
        }
    }
  ];
}

// melbourne.base-validators/is-same-as [94] 
export function is_same_as(field,message){
  return [
    "is-same-as",
    {
      "message":message || ("Must be same as " + field + "."),
      "check":function (v,rec){
          return v == rec[field];
        }
    }
  ];
}

// melbourne.base-validators/is-valid-email [104] 
export function is_valid_email(message){
  return [
    "is-valid-email",
    {
      "message":message || "Must be a valid email.",
      "check":function (v,rec){
          return lib.not_nilp(v) && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9-]{2,}$/.test(v);
        }
    }
  ];
}

// melbourne.base-validators/MODULE [115] 
export var MODULE = {
  "is_true":is_true,
  "is_integer":is_integer,
  "is_number":is_number,
  "is_accepted":is_accepted,
  "is_required":is_required,
  "is_not_empty":is_not_empty,
  "is_at_most":is_at_most,
  "is_at_least":is_at_least,
  "is_length_n":is_length_n,
  "is_same_as":is_same_as,
  "is_valid_email":is_valid_email,
  "MODULE":MODULE
};