const { isVariable } = require("../../lib/util/utils");

describe("isVariable Tests", () => {

  test("personName is a variable.", () => {
    expect(isVariable("personName")).toBeTruthy();
  });

  test("./personName is not a variable", () => {
    expect(isVariable("./personName")).toBeFalsy();
  });

});