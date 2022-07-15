"use strict";

const nonEmptyArray = (arg) => arg instanceof Array && Array.isArray(arg) && arg.length > 0;
const isAnObject = (arg) => typeof arg == 'object' && !Array.isArray(arg) && arg != undefined && arg != null;

module.exports = {
  nonEmptyArray,
  isAnObject
}