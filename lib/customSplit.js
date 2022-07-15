"use strict";

const customSplit = (str) => {
  let openSqBracketsCount = 0;
  let start = 0;
  let end = 0;
  let splitItems = [];

  for (let i = 0; i < str.length; i++) {
    let sep = str[i + 1] == str.length ? str[i] : str[i] + str[i + 1];
    if (str[i] == "[") {
      openSqBracketsCount++
    }
    if (str[i] == "]") {
      openSqBracketsCount--;
    }
    if (sep == ", ") {
      if (openSqBracketsCount == 0) {
        end = i;
        let splitItem = str.slice(start, end);
        splitItems.push(splitItem);
        start = i + 2;
      }
    }
  }
  if (start < str.length) {
    let lastItem = str.slice(start, str.length);
    splitItems.push(lastItem);
  }
  return splitItems;
}

module.exports = customSplit;