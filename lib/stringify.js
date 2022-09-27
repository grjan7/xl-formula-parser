'use strict';

const { nonEmptyArray, isAnObject } = require('./util/utils');
/**
 * 
 * @param {object} obj object that need to be stringified to Excel-formula-like string 
 * @returns {string} Excel-formula-like string
 * 
 */
const stringifyFormulaTree = (obj) => {

  let excelFormulaLikeString = ``;

  if (obj.formula && obj.args) {

    //only if it is a formula
    excelFormulaLikeString += `${obj.formula}(`;
    let args = obj.args;
    let argsLen = args.length || 0;

    //loops through args
    for (let i = 0; i < argsLen; i++) {

      let arg = args[i];

      if (isAnObject(arg)) { //if arg is an object, recurse

        if (i == argsLen - 1) {
          excelFormulaLikeString += `${stringifyFormulaTree(arg)})`;
        } else {
          excelFormulaLikeString += `${stringifyFormulaTree(arg)}, `;
        }

      } else { //set values as per their type

        if (nonEmptyArray(arg)) { //arg is like ["hello", "world"]

          if (i == argsLen - 1) { //arg's last element
            excelFormulaLikeString += `${JSON.stringify(arg).replace(/,/g, ", ")})`;
          } else {
            excelFormulaLikeString += `${JSON.stringify(arg).replace(/,/g, ", ")}, `;
          }

        } else { //true/false/10/"hello"

          let isTrue = arg.match(/^(true|false)$/)?.length > 0;
          let isNumber = arg.match(/^[0-9]+$/)?.length > 0;

          if (isTrue || isNumber) { //boolean/number

            if (i == argsLen - 1) { //arg's last element
              excelFormulaLikeString += `${arg})`;
            } else {
              excelFormulaLikeString += `${arg}, `;
            }

          } else { //non-boolean string

            if (i == argsLen - 1) { //arg's last element
              excelFormulaLikeString += `\"${arg}\")`;
            } else {
              excelFormulaLikeString += `\"${arg}\", `;
            }

          }

        }

      }

    }

  } else {// if the obj is not a formula

    if (obj.path) {
      excelFormulaLikeString += obj.path;
    }

    if (obj.variable) {
      excelFormulaLikeString += obj.variable;
    }

  }

  return excelFormulaLikeString;

}

const stringify = (obj) => `=${stringifyFormulaTree(obj)}`


module.exports = stringify;