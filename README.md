# WebAssembly parser
[![NPM version](https://img.shields.io/npm/v/wast-parser.svg)](https://www.npmjs.org/package/wast-parser)
[![Travis](https://travis-ci.org/drom/wast-parser.svg)](https://travis-ci.org/drom/wast-parser)
[![appVeyor](https://ci.appveyor.com/api/projects/status/vg09awtk5rgargkb?svg=true)](https://ci.appveyor.com/project/drom/wast-parser)

Takes WebAssembly S-expression (WAST) string and returns abstract syntax tree ([AST](https://github.com/drom/wast-spec)).

Inspired by [esprima](https://github.com/jquery/esprima)

## Use
### Node.js

```
npm i wast-parser --save
```

```js
var parser = require('wast-parser');
```

### CLI
First install globally `npm i wast-parser -g`  
then invoke with a wast file `wast-parser <path/to/wast/file> > parsed_wast.json`  

## Functions
### .parse()

```js
var ast = parser.parse('(module)');
```

## Testing
`npm test`

## Generating tests
`npm run testgen`

## License
MIT [LICENSE](https://github.com/drom/wast-parser/blob/master/LICENSE).
