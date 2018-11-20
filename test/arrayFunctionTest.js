const assert = require('assert');
const {
  map
} = require('../src/arrayFunction.js');

const square = function(number) {
  return number * number;
}

describe('Map Test Cases', function() {
  describe('square', function() {
    it('should square the positive number', function() {
      assert.deepEqual(map(square, [1, 2]), [1, 4]);
    });
    it('should square the negative number', function() {
      assert.deepEqual(map(square, [-1, -2]), [1, 4]);
    });
    it('should square 0', function() {
      assert.deepEqual(map(square, [0]), [0]);
    });
  });
});

