"use strict";

const unwindArgsArray = require("./lib/unwindArgsArray");
const resolvedArgs = require("./lib/resolvedArgs");
const jsonStringify = require("./lib/jsonStringify");
const stringify = require("./lib/stringify");
/**
 * 
 * @param {string} str Excel-Formula-like string that to be parsed into an object tree. 
 * @returns {Object} parsed JavaScript object into tree
 *  
 */
const parse = (str) => {//parses str to its tree object.

  let equalRemovedStr = str[0] == "=" ? str.slice(1, str.length) : str;
  let jsonString = jsonStringify(equalRemovedStr);
  let parsedObj = JSON.parse(jsonString);
  let resolvedJsonObj = resolvedArgs(parsedObj);
  let arraysUnwoundObj = unwindArgsArray(resolvedJsonObj);
  return arraysUnwoundObj;

}

module.exports = { parse, stringify };


