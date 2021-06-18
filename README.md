# prettier-x-printer

Provides the Acorn / Babel / ESTree AST printing capability from **[prettierX](https://github.com/brodybits/prettierx)**.

**LICENSE:** [MIT license](./LICENSE.md)

### Sample

```js
const { parse } = require("@babel/parser");

const { printAcornTree } = require("prettier-x-printer");

const code = "console.log ('hello world')";

const ast = parse(code);

console.log(
  printAcornTree(code, ast, {
    semi: false,
    spaceInParens: true,
  })
);
```

**expected output:**

```js
console.log( "hello world" )
```
