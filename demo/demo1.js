const { parse } = require("@babel/parser");

const { printAcornTree } = require("..");

const code = "console.log ('hello world')";

const ast = parse(code);

console.log(
  printAcornTree(code, ast, {
    semi: false,
    spaceInParens: true,
  })
);
