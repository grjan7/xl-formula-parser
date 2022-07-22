# Excel-Formula-Like-String-Parser
Parses excel-formula-like string to JSON object tree and reverse parses to formula string

## Parse Example

```JS

  const parse = require("./index").parse;
  const formula = `=OR(EQ(./path/personName, "John Doe"), NOT(EQ(personName, "John Smith")))`;
  const parsedFormula = parse(formula);

```

### parse(formula):

```JS

  {
    formula: "OR",
    args: [
      {
        formula: "EQ", 
        args: [
          {
            path: "./path/personName"
          },
          "John Doe"
        ]
      },
      {
        formula: "NOT",
        args: [
          {
            formula: "EQ",
            args:[
              {
                variable: "personName"
              },
            "John Smith"
            ]
          }
        ]
      }
    ]
  }

```

------


## stringify Example

```JS

const stringify = require('./index').stringify;
const formulaTreeObject = {
  formula: "EQ",
  args: [{path: "./path/personName"}, "John Doe"]
};

stringify(formulaTreeObject);

```

### stringify(formulaTreeObject)

```JS

  '=EQ(./path/personName, "John Doe")'

```


