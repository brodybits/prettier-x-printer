const p = require("prettierx");

// ref:
// https://github.com/prettier/prettier/blob/main/docs/api.md#custom-parser-api
function printAcornTree(code, ast, options) {
  function parserFunc(code) {
    return ast;
  }

  const formatOptions = { ...options, ...{ parser: parserFunc } };

  return p.format(code, formatOptions);
}

module.exports = printAcornTree;
