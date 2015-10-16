# WebAssembly parser
[![NPM](https://badge.fury.io/js/wast-parser.svg)](http://badge.fury.io/js/wast-parser) [![Travis](https://travis-ci.org/drom/wast-parser.svg)](https://travis-ci.org/drom/wast-parser) [![appVeyor](https://ci.appveyor.com/api/projects/status/uly3uspj4w4rjw8q?svg=true)](https://ci.appveyor.com/project/drom/wast-parser)

## Use
### Node.js

```
npm i wast-parser --save
```

```js
var parser = require('wast-parser');
```

## Functions
### .parse()

```js
var ast = parser.parse('(module)');
```

## Testing
`npm test`

## License
MIT [LICENSE](https://github.com/drom/wast-parser/blob/master/LICENSE).
