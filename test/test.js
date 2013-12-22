
/**
 * Module dependencies.
 */

var assert = require('assert');
var PathArray = require('../');
var delimiter = require('path').delimiter || ':';

describe('PathArray', function () {
  it('should use `process.env` by default', function () {
    var p = new PathArray();
    assert.equal(p._env, process.env);
  });
  it('should return the $PATH string for .toString()', function () {
    var p = new PathArray();
    assert.equal(p.toString(), process.env.PATH);
  });
  it('should accept an arbitrary `env` object', function () {
    var env = { PATH: '/foo' + delimiter + '/bar' };
    var p = new PathArray(env);
    assert.equal(p.toString(), env.PATH);
  });
});
