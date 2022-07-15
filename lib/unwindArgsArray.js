"use strict";
const { nonEmptyArray, isAnObject } = require("./utils");

const unwindArgsArray = (obj) => {

  let argsLen = obj.args ? obj.args.length : 0;
  let hasOneArg = argsLen == 1; //validates the length of the args array

  if (argsLen > 0) {
    for (let i = 0; i < argsLen; i++) {
      let arg = obj.args[i];
      if (isAnObject(arg) && arg.args) {
        unwindArgsArray(arg);
      } else {//if it is not an object
        if (nonEmptyArray(arg)) {
          if (hasOneArg) {
            obj.args = arg;
          } else {//if arg has only one element
            if (arg.length == 1) {
              obj.args[i] = arg[0];
            }
          }
        }
      }
    }
  }
  return obj;
}

module.exports = unwindArgsArray;


