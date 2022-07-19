const { parse, stringify } = require("../index");

describe("Test Suite: parse(str) and stringify(obj)", () => {

  describe(`RULE 1: =IF(true, 'Hello!', 'Goodbye!')`, () => {

    const formula = `=IF(true, "Hello!", "Goodbye!")`;
    const parsedFormulaTree = {
      formula: "IF",
      args: ["true", "Hello!", "Goodbye!"]
    };

    test(`parse(formula) should return a parsed formula tree object`, () => expect(parse(formula)).toEqual(parsedFormulaTree));

    test(`stringify(parsedFormulaTree) should return a formula string`, () => expect(stringify(parsedFormulaTree)).toEqual(formula));

  });

  describe(`RULE 2: =OR(EQ(./usPerson, true), NOT(EQ(./companyType, "nffe")), NOT(EQ(./nffeType, "active")))`, () => {

    const formula = `=OR(EQ(./usPerson, true), NOT(EQ(./companyType, "nffe")), NOT(EQ(./nffeType, "active")))`;

    const parsedFormulaTree = {
      formula: "OR",
      args: [
        { formula: "EQ", args: [{ path: "./usPerson" }, "true"] },
        { formula: "NOT", args: [{ formula: "EQ", args: [{ path: "./companyType" }, "nffe"] }] },
        { formula: "NOT", args: [{ formula: "EQ", args: [{ path: "./nffeType" }, "active"] }] }
      ]
    };

    test(`parse(formula) should return a parsed formula tree object`, () => expect(parse(formula)).toEqual(parsedFormulaTree));

    test(`stringify(parsedFormulaTree) should return a formula string`, () => expect(stringify(parsedFormulaTree)).toEqual(formula));

  });



});







/**
 * Pending TEST CASES
 * 
 *
  `=OR(NOT(EQ(./path, 'Foo')), NOT(IN(['Foo', 'Bar'])), 'Hello')`,
  `=OR(NOT(IN(["raj", "Gopal"])))`,  
  `=NOT(EQ(investorType, "individual"))`,
  `=EQ(/person/firstName, true)`,
  `=OR(EQ(./firstName, true), NOT(EQ(./companyType, "nffe")))`,
  `=OR(EQ(./usPerson, true), NOT(IN(["investment_company", "custodial_institution", "depositary_institution", "specified_insurance_company"], ./companyType)))`
 

*/