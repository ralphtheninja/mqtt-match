# mqtt-match

> Match mqtt formatted topic strings to strings, e.g. `foo/+` should match `foo/bar`.

[![npm](https://img.shields.io/npm/v/mqtt-match.svg)](https://www.npmjs.com/package/mqtt-match)
![Node version](https://img.shields.io/node/v/mqtt-match.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/mqtt-match.svg?branch=master)](https://travis-ci.org/ralphtheninja/mqtt-match)

### Usage

```js
const match = require('mqtt-match')
console.log(match('foo/+', 'foo/bar'))
// true
```

### License
MIT
