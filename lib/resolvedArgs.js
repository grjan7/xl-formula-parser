"use strict";

const customSplit = require("./customSplit");
const { isPath, isVariable, hasArray } = require("./utils");

const resolveArgs = (obj) => {

  //resolves args value to path, variable, value
  let resolvedObj = obj;
  if (obj.args instanceof Array && obj.args.length > 0) {
    for (let i = 0; i < obj.args.length; i++) {
      let item = obj.args[i];
      //resolve whether args item is a string or an object
      if (typeof item == 'string') {
        let argText = item.slice(0, item.length);
        let argArr = customSplit(argText);
        let argArrMap = argArr.map(it => {
          //resolve among path, variable, and value        
          if (hasArray(it)) {
            return JSON.parse(it);
          }
          if (isPath(it)) {
            return {
              path: it
            }
          }
          if (isVariable(it)) {
            return {
              variable: it
            }
          }
          return it.replace(/"/g, "");
        });

        obj.args[i] = argArrMap;

      } else { //if it is an object recursively call this function
        if (typeof item == 'object') {
          resolveArgs(item);
        }
      }
    }
  }
  return resolvedObj;
}

module.exports = resolveArgs;