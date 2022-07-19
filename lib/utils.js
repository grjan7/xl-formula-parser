"use strict";

const nonEmptyArray = (arg) => arg instanceof Array && Array.isArray(arg) && arg.length > 0;
const isAnObject = (arg) => typeof arg == 'object' && !Array.isArray(arg) && arg != undefined && arg != null;
const isPath = (it) => typeof it == 'string' && it.match(/^\.{0,2}\//g)?.length > 0;
const isVariable = (it) => !it.startsWith('"') && !it.endsWith('"') && it != "true" && it != "false" && !isPath(it);
const hasArray = (arg) => arg.match(/\[|\]/g)?.length > 0;


module.exports = {
  nonEmptyArray,
  isAnObject,
  isPath,
  isVariable,
  hasArray
}