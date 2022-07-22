const { parse, stringify } = require("../index");
const deepStrictEqual = require('assert').deepStrictEqual;

const formula = `=OR(NOT(EQ(./path/personName, "John Doe")))`;
const parsedFormula = parse(formula);
const formulaTree = { formula: "OR", args: [{ formula: "NOT", args: [{ formula: "EQ", args: [{ path: "./path/personName" }, "John Doe"] }] }] };
const stringifiedFormulaTree = stringify(formulaTree);

//Validation

console.log("\nFORMULA:\n");
console.log(formula);
console.log("\nPARSED FORMULA:\n");
console.log(parsedFormula);
console.log("\nASSERTION: PARSED FORMULA === FORMULA TREE: ");
console.log(deepStrictEqual(parsedFormula, formulaTree) == undefined ? true : false);
console.log("\nFORMULA TREE:\n");
console.log(formulaTree);
console.log("\nSTRINGIFIED FORMULA TREE:\n");
console.log(stringifiedFormulaTree);
console.log("\nASSERTION: STRINGIFIED FORMULA TREE === FORMULA: ");
console.log(deepStrictEqual(stringifiedFormulaTree, formula) == undefined ? true : false);
console.log("\n\n");