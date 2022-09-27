const { isPath } = require("../../lib/util/utils");

describe("Test Suite for isPath(arg)", () => {
  describe("valid paths", () => {
    test("relative path should return true", () => {
      expect(isPath("./personName")).toBeTruthy();
      expect(isPath("../personName")).toBeTruthy();
      expect(isPath("../../personName")).toBeTruthy();
      expect(isPath("./../personName")).toBeTruthy();;
    });
    test("absolute path should return true", () => {
      expect(isPath("/personName")).toBeTruthy();
      expect(isPath("/path/personName")).toBeTruthy()
    });
  });

  describe("invalid paths", () => {
    test("non-path string, boolean, array and object should return false", () => {
      expect(isPath("personName")).toBeFalsy();
      expect(isPath("true")).toBeFalsy();
      expect(isPath(["./personName", "John"])).toBeFalsy();
      expect(isPath({ formula: "OK", args: ["./personName"] })).toBeFalsy();
    });
  });

});

