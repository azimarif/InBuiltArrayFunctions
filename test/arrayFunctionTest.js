const assert = require('assert');
const {
  map,
  filter 
} = require('../src/arrayFunction.js');

const square = function(number) {
  return number * number;
}

const incrementByOne = function(number) {
  return number + 1;
}

const identity = function(number) {
  return number;
}

const isEven = function(number) {
  return number % 2 == 0;
}

const isPerfectSquare = function(number) {
  return number >= 0 && Math.sqrt(number) % 1 === 0;
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

  describe('increment', function() {
    it('should increment the positive number by 1', function() {
      assert.deepEqual(map(incrementByOne, [1, 2]), [2, 3]);
    });
    it('should increment the negative numbers by 1', function() {
      assert.deepEqual(map(incrementByOne, [-3, -2]), [-2, -1]);
    });
    it('should increment 0 by 1', function() {
      assert.deepEqual(map(incrementByOne, [0]), [1]);
    });
  });

  describe('identity', function() {
    it('should return the same list of posititve numbers', function() {
      assert.deepEqual(map(identity, [1, 2]), [1, 2]);
    });
    it('should return the same list of negative numbers', function() {
      assert.deepEqual(map(identity, [-1, -2]), [-1, -2]);
    });
    it('should return the same list of 0', function() {
      assert.deepEqual(map(identity, [0]), [0]);
    });
  });
});

describe('Filter Test Cases', function() {
  describe('isEven', function() {
    it('should list even numbers', function() {
      assert.deepEqual(filter(isEven, [1, 2, 3, 4, 5]), [2, 4]);
    });
    it('should list 0 as even number', function() {
      assert.deepEqual(filter(isEven, [0]), [0]);
    });
  });

  describe('isPerfectSquare', function() {
    it('should return all perfect squares from a positive number list', function() {
      assert.deepEqual(filter(isPerfectSquare, [1, 2, 3, 4, 5, 9]), [1, 4, 9]);
    });
    it('should return no perfect square from a negative number list', function() {
      assert.deepEqual(filter(isPerfectSquare, [-1, -2, -3, -4]), []);
    });
    it('should return 0 as perfect square from a list contaning 0', function() {
      assert.deepEqual(filter(isPerfectSquare, [0, 25, 81]), [0, 25, 81]);
    });
  });
});
