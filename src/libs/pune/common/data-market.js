import * as data from '../../xt/lang/common-data.js'

import * as lib from '../../xt/lang/common-lib.js'

import * as string from '../../xt/lang/common-string.js'

// pune.common.data-market/price-to-float [16] 
export function price_to_float(price){
  if(lib.is_stringp(price)){
    return lib.to_number(price);
  }
  else{
    return price;
  }
}

// pune.common.data-market/frac-to-decimal [24] 
export function frac_to_decimal(frac){
  return Math.floor(0.5 + (-Math.log10(frac)));
}

// pune.common.data-market/decimal-to-frac [30] 
export function decimal_to_frac(decimal){
  return Math.pow(10,-decimal);
}

// pune.common.data-market/position-to-rate [36] 
export function position_to_rate(prediction,allotment,position){
  return (prediction == "yes") ? position : (allotment - position);
}

// pune.common.data-market/position-to-price [44] 
export function position_to_price(prediction,allotment,frac,decimal,position){
  return string.to_fixed(
    (prediction == "yes") ? (position * frac) : ((allotment - position) * frac),
    decimal
  );
}

// pune.common.data-market/price-to-position [55] 
export function price_to_position(prediction,allotment,frac,price){
  if(prediction == "yes"){
    return Math.floor(0.5 + (price_to_float(price) / frac));
  }
  else{
    return allotment - Math.floor(0.5 + (price_to_float(price) / frac));
  }
}

// pune.common.data-market/book-enrich [66] 
export function book_enrich(book){
  let {allotment,decimal} = book;
  let frac = Math.pow(10,-decimal);
  let max = allotment * frac;
  return data.obj_assign({"frac":frac,"max":max},book);
}

// pune.common.data-market/live-summary [77] 
export function live_summary(live,book){
  let {allotment,decimal,frac,max} = book;
  let {ask,bid} = live;
  let all_pos = data.arr_mapcat([bid["volume"] || [],ask["volume"] || []],lib.identity);
  let volume = data.arr_foldl(all_pos,function (acc,e){
    return acc + (data.second(e) || 0);
  },0);
  let ask_pos = data.first(ask["range"] || []);
  let bid_pos = data.second(bid["range"] || []);
  let yes_sell = ask_pos ? string.to_fixed(frac * ask_pos,decimal) : "-";
  let yes_buy = bid_pos ? string.to_fixed(frac * bid_pos,decimal) : "-";
  let no_sell = bid_pos ? string.to_fixed(max - (frac * bid_pos),decimal) : "-";
  let no_buy = ask_pos ? string.to_fixed(max - (frac * ask_pos),decimal) : "-";
  return {
    "no_sell":no_sell,
    "no_buy":no_buy,
    "yes_sell":yes_sell,
    "yes_buy":yes_buy,
    "volume":volume,
    "ask_pos":ask_pos,
    "bid_pos":bid_pos
  };
}

// pune.common.data-market/live-offers-raw [105] 
export function live_offers_raw(live,prediction,retrieve){
  retrieve = (retrieve || 7);
  let {ask,bid} = live;
  let avol = data.arr_sort(ask["volume"] || [],data.first,lib.lt);
  let bvol = data.arr_sort(bid["volume"] || [],data.first,lib.lt);
  let buy_offers = (prediction == "yes") ? data.arr_rslice(avol,0,Math.min(retrieve,avol.length)) : data.arr_slice(bvol,Math.max(0,bvol.length - retrieve),bvol.length);
  let sell_offers = (prediction == "yes") ? data.arr_rslice(bvol,Math.max(0,bvol.length - retrieve),bvol.length) : data.arr_slice(avol,0,Math.min(retrieve,avol.length));
  return {"buy":buy_offers,"sell":sell_offers};
}

// pune.common.data-market/live-offers-rate [126] 
export function live_offers_rate(live,allotment,prediction,retrieve){
  let rate_fn = function (pair){
    let [pos,vol] = pair;
    return [position_to_rate(prediction,allotment,pos),vol];
  };
  let raw = live_offers_raw(live,prediction,retrieve);
  let {buy,sell} = raw;
  return {
    "buy":data.arr_map(buy,rate_fn),
    "sell":data.arr_map(sell,rate_fn)
  };
}

// pune.common.data-market/live-offers-price [145] 
export function live_offers_price(live,book,prediction,retrieve){
  let {allotment,decimal,frac,max} = book;
  let price_fn = function (pair){
    let [pos,vol] = pair;
    return [position_to_price(prediction,allotment,frac,decimal,pos),vol];
  };
  let raw = live_offers_raw(live,prediction,retrieve);
  let {buy,sell} = raw;
  return {
    "buy":data.arr_map(buy,price_fn),
    "sell":data.arr_map(sell,price_fn)
  };
}

// pune.common.data-market/segment-price [165] 
export function segment_price(price,offers){
  price = price_to_float(price);
  let {buy,sell} = offers;
  let higher_than = function (offers){
    return price > lib.to_number(data.first(data.first(offers)));
  };
  let lower_than = function (offers){
    return price < lib.to_number(data.first(data.last(offers)));
  };
  if((0 == buy.length) && (0 == sell.length)){
    return "center";
  }
  else if(0 == sell.length){
    if(higher_than(buy)){
      return "top";
    }
    else if(lower_than(buy)){
      return "center";
    }
    else{
      return "none";
    }
  }
  else if(0 == buy.length){
    if(higher_than(sell)){
      return "center";
    }
    else if(lower_than(sell)){
      return "bottom";
    }
    else{
      return "none";
    }
  }
  else{
    if(higher_than(buy)){
      return "top";
    }
    else if(lower_than(sell)){
      return "bottom";
    }
    else if(lower_than(buy) && higher_than(sell)){
      return "center";
    }
    else{
      return "none";
    }
  }
}

// pune.common.data-market/position-can-trade [215] 
export function position_can_trade(pos,trade,prediction,book,summary){
  let {allotment} = book;
  let {ask_pos,bid_pos} = summary;
  if(trade == "buy"){
    return (prediction == "yes") ? (pos >= (ask_pos || allotment)) : (pos >= (allotment - (bid_pos || 0)));
  }
  else{
    return (prediction == "yes") ? (pos <= (bid_pos || 0)) : (pos <= (allotment - (ask_pos || allotment)));
  }
}

// pune.common.data-market/position-estimate [231] 
export function position_estimate(trade,prediction,book,summary){
  let {allotment} = book;
  let {ask_pos,bid_pos} = summary;
  return (trade == "buy") ? ((prediction == "yes") ? (ask_pos || bid_pos || (allotment / 2)) : (allotment - (bid_pos || ask_pos || (allotment / 2)))) : ((prediction == "yes") ? (bid_pos || ask_pos || (allotment / 2)) : (allotment - (ask_pos || bid_pos || (allotment / 2))));
}

// pune.common.data-market/price-can-trade [247] 
export function price_can_trade(price,trade,prediction,book,summary){
  let {allotment,frac} = book;
  let pos = Math.floor(0.5 + (price_to_float(price) / frac));
  return position_can_trade(pos,trade,prediction,book,summary);
}

// pune.common.data-market/price-estimate [259] 
export function price_estimate(trade,prediction,book,summary){
  let {decimal,frac} = book;
  return string.to_fixed(
    frac * position_estimate(trade,prediction,book,summary),
    decimal
  );
}

// pune.common.data-market/calc-rake [272] 
export function calc_rake(rake,type_key,value_key,frac,amount,spend){
  let type = rake[type_key];
  let value = rake[value_key]
  if(type == "none"){
    return 0;
  }
  else if(type == "per_trade"){
    return value * frac;
  }
  else if(type == "per_contract"){
    return value * amount * frac;
  }
  else if(type == "percentage"){
    return spend * value * 0.01;
  }
}

// pune.common.data-market/MODULE [283] 
export var MODULE = {
  "price_to_float":price_to_float,
  "frac_to_decimal":frac_to_decimal,
  "decimal_to_frac":decimal_to_frac,
  "position_to_rate":position_to_rate,
  "position_to_price":position_to_price,
  "price_to_position":price_to_position,
  "book_enrich":book_enrich,
  "live_summary":live_summary,
  "live_offers_raw":live_offers_raw,
  "live_offers_rate":live_offers_rate,
  "live_offers_price":live_offers_price,
  "segment_price":segment_price,
  "position_can_trade":position_can_trade,
  "position_estimate":position_estimate,
  "price_can_trade":price_can_trade,
  "price_estimate":price_estimate,
  "calc_rake":calc_rake,
  "MODULE":MODULE
};