const { isAnObject } = require("../../lib/utils");

describe("Test Suite for isAnObject(arg)", () => {

  describe("valid non-null non-array objects", () => {
    test("empty object should return true", () => {
      const testObj = {};
      expect(isAnObject(testObj)).toBeTruthy();
    });

    test("object with keys should return true", () => {
      const testObj = { formula: "OR", args: [{ variable: "greetings" }, "hello"] };
      expect(isAnObject(testObj)).toBeTruthy();
    });
  });

  describe("invalid non-null non-array objects", () => {
    test("undefined should return false", () => {
      const testObj = undefined;
      expect(isAnObject(testObj)).toBeFalsy();
    });

    test("null should return false", () => {
      const testObj = null;
      expect(isAnObject(testObj)).toBeFalsy();
    });

    test("string should return false", () => {
      const testObj = "test";
      expect(isAnObject(testObj)).toBeFalsy();
    });

    test("array should return false", () => {
      const testObj = [];
      expect(isAnObject(testObj)).toBeFalsy();
    });

    test("array of objects should return false", () => {
      const testObj = [{ name: "ar" }];
      expect(isAnObject(testObj)).toBeFalsy();
    });
  });

});
