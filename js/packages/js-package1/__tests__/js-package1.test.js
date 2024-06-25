'use strict';

const jsPackage1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(jsPackage1(), 'Hello from jsPackage1');
console.info('jsPackage1 tests passed');
