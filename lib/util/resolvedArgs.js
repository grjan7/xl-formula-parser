'use strict';

const customSplit = require('./customSplit');
const { isPath, isVariable, hasArray } = require('./utils');

/**
 * 
 * @param {object} obj object whose arguments needs to be resolved to path, variable, value
 * @returns {object} arguments-resolved object
 * @description resolves args value to path, variable, value
 * 
 */
const resolveArgs = (obj) => {

  let resolvedObj = obj;
  let args = obj.args;

  let isNonEmptyArray = args instanceof Array && args.length > 0;

  if (isNonEmptyArray) {

    for (let i = 0; i < args.length; i++) {

      let item = args[i];

      // `item` can be either a string or an object.
      //
      // If it is a string, array of arguments (argArr) is extracted from
      // string based on custom split and resolved to path, variable, value.
      //
      // If it is an object, this resolveArgs is called recursively
      // till the arguments are resolved to their categories.

      if (typeof item == 'string') {

        let argText = item.slice(0, item.length);
        let argArr = customSplit(argText);

        let argArrMap = argArr.map((it) => {

          if (hasArray(it)) {
            return JSON.parse(it);
          }

          if (isPath(it)) {
            return { path: it }
          }

          if (isVariable(it)) {
            return { variable: it }
          }

          return it.replace(/"/g, "");

        });

        args[i] = argArrMap;

      } else {

        if (typeof item == 'object') {
          resolveArgs(item);
        }

      }

    }

  }

  return resolvedObj;

}

module.exports = resolveArgs;