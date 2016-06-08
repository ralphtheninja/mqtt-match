# mqtt-match [![Build Status](https://travis-ci.org/ralphtheninja/mqtt-match.svg?branch=master)](https://travis-ci.org/ralphtheninja/mqtt-match)

Match mqtt formatted topic strings to strings, e.g. `foo/+` should match `foo/bar`.

### Usage

```js
const match = require('mqtt-match')
console.log(match('foo/+', 'foo/bar'))
// true
```

### License
MIT
