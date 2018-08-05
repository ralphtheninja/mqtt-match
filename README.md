# mqtt-match

> Match mqtt formatted topic strings to strings

[![npm](https://img.shields.io/npm/v/mqtt-match.svg)](https://www.npmjs.com/package/mqtt-match)
![Node version](https://img.shields.io/node/v/mqtt-match.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/mqtt-match.svg?branch=master)](https://travis-ci.org/ralphtheninja/mqtt-match)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Usage

```js
const match = require('mqtt-match')
console.log(match('foo/+', 'foo/bar'))
// true
```

### License
MIT
