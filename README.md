# excel-formula-like-string-parser

## Description

Parses excel-formula-like string to JSON object tree and reverse parses to formula string.

## Installation

```sh
  npm i excel-formula-like-string-parser
```

## APIs

### parse(str)

- **str** | datatype: string | required 

#### Example

```js

  const { parse } = require("excel-formula-like-string-parser");

  const formula = `=OR(EQ(./path/personName, "John Doe"), NOT(EQ(personName, "John Smith")))`;

  parse(formula); 

```
`parse(formula)` returns

```js

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


### stringify(obj)

- **obj** | datatype: object | required


#### Example
```js

const { stringify } = require('excel-formula-like-string-parser');

const formulaTreeObject = {
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
  };

stringify(formulaTreeObject);

```
`stringify(formulaTreeObject)` returns

```js

  '=OR(EQ(./path/personName, "John Doe"), NOT(EQ(personName, "John Smith")))'

```


