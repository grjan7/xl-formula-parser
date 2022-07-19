const { hasArray } = require("../../lib/utils");

describe("hasArray Tests", () => {

  test(`This string has array within.`, () => {
    expect(hasArray(`["a", "b", "c"], "Hello"`)).toBeTruthy();
  });

  test(`This does not have array within.`, () => {
    expect(hasArray(`./personName, "hello"`)).toBeFalsy();
    expect(hasArray(`personName, "Rahul"`)).toBeFalsy();
  });

});