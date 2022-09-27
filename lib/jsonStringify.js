"use strict";

/**
 * 
 * @param {string} str excel-like formula string that need to be turned into JSON string.
 * @returns {string} JSON string
 * 
 */
const jsonStringify = (str) => {//converts str to JSON parsable string

  let jsonString = str;

  jsonString = jsonString.replace(/(\"|\')/g, (chr) => `\\"`);

  jsonString = jsonString.replace(/[A-Z]+\(/g, (chr) => {
    return `\{\"formula\":\"${chr.slice(0, chr.length - 1)}\",\"args\":[\"`
  });

  jsonString = jsonString.replace(/\)/g, (chr) => `\"]\}`);
  jsonString = jsonString.replace(/\"\{/g, "{");
  jsonString = jsonString.replace(/\}\"/g, "}");

  jsonString = jsonString.replace(/\}, [^{]/g, (chr) => {
    return `\},\"${chr[chr.length - 1]}`;
  });

  return jsonString;
}

module.exports = jsonStringify;