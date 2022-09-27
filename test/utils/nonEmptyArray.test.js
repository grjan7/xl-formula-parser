const { nonEmptyArray } = require("../../lib/util/utils");

describe("nonEmptyArray Tests", () => {

  test("should be a non-empty array", () => {
    const testArray = ["a", "b"];
    expect(nonEmptyArray(testArray)).toBeTruthy();
  });

  test("should be a non-empty array", () => {
    const testArray = [[2, 1]];
    expect(nonEmptyArray(testArray)).toBeTruthy();
  });

  test("should be a non-empty array", () => {
    const testArray = [];
    expect(nonEmptyArray(testArray)).toBeFalsy();
  });

  test("should be a non-empty array", () => {
    const testArray = {};
    expect(nonEmptyArray(testArray)).toBeFalsy();
  });

  test("should be a non-empty array", () => {
    const testArray = "Hello";
    expect(nonEmptyArray(testArray)).toBeFalsy();
  });

  test("should be a non-empty array", () => {
    const testArray = 100;
    expect(nonEmptyArray(testArray)).toBeFalsy();
  });

  test("should be a non-empty array", () => {
    const testArray = "true";
    expect(nonEmptyArray(testArray)).toBeFalsy();
  });

  test("should be a non-empty array", () => {
    const testArray = "false";
    expect(nonEmptyArray(testArray)).toBeFalsy();
  });

});