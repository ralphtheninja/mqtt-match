# mqtt-match

> Match mqtt formatted topic strings to strings, e.g. `foo/+` should match `foo/bar`.

[![Build Status](https://travis-ci.org/ralphtheninja/mqtt-match.svg?branch=master)](https://travis-ci.org/ralphtheninja/mqtt-match)
[![Greenkeeper badge](https://badges.greenkeeper.io/ralphtheninja/mqtt-match.svg)](https://greenkeeper.io/)

### Usage

```js
const match = require('mqtt-match')
console.log(match('foo/+', 'foo/bar'))
// true
```

### License
MIT
