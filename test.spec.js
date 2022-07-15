//test cases
const { parse, stringify } = require("./index.js");


const formulae = [
  `=OR(EQ(./usPerson, true), NOT(EQ(./companyType, "nffe")), NOT(EQ(./nffeType, "active")))`,
  `=OR(NOT(EQ(./path, 'Foo')), NOT(IN(['Foo', 'Bar'])), 'Hello')`,
  `=OR(NOT(IN(["raj", "Gopal"])))`,
  `=IF(true, 'Hello!', 'Goodbye!')`,
  `=NOT(EQ(investorType, "individual"))`,
  `=EQ(/person/firstName, true)`,
  `=OR(EQ(./firstName, true), NOT(EQ(./companyType, "nffe")))`,
  `=OR(EQ(./usPerson, true), NOT(IN(["investment_company", "custodial_institution", "depositary_institution", "specified_insurance_company"], ./companyType)))`
];

//for (let i in formulae) {
try {
  let parsedFormula = parse(formulae[1]);
  let stringifiedText = stringify(parsedFormula);

  //console.log({ "formulaString": formulae[1], "parse(formulaString)": parsedFormula, "stringify(parse(formulaString))": stringifiedText });

  console.log("\n\nEXCEL-FORMULA-LIKE-STRING-PARSER\n\n");
  console.log("INPUT:----------------------------------------------------------------------\n");
  console.log(`formulaString:\n\n \"${formulae[1]}\"\n`);

  console.log("\n\nOUTPUT----------------------------------------------------------------------\n\n");
  console.log("parse(formulaString):\n\n");
  console.log(parsedFormula);
  console.log("\n\nstringify(parse(formulaString)):\n\n");
  console.log(stringifiedText);
  console.log("\n\n----------------------------------------------------------------------------\n\n")

} catch (e) {
  console.log(e);
}
//}
