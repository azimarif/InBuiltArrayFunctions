const assert = require('assert');
const {
  map,
  filter,
  reduce 
} = require('../src/arrayFunction.js');

const square = function(number) {
  return number * number;
}

const identity = function(number) {
  return number;
}

const isEven = function(number) {
  return number % 2 === 0;
}

const isPerfectSquare = function(number) {
  return number >= 0 && Math.sqrt(number) % 1 === 0;
}

const isPositiveNumber = function(number) {
  return number > 0;
}

const sumOfTwoNumbers = function(number1, number2) {
  return number1 + number2;
}

describe('map', function() {
  it('should return empty array for empty array', function() {
    assert.deepEqual(map(identity, []), []);
  });
  it('should return a single element array for single element array', function() {
    assert.deepEqual(map(identity, [1]), [1]);
  });
  it('should return multiple element array for multiple element array', function() {
    assert.deepEqual(map(identity, [-1, -2]), [-1, -2]);
  });
  it('should preserve the length of the array', function(){
    const numbers = [1, 2];
    assert.deepEqual(map(square, numbers).length, numbers.length);
  });
  it('should transform the array as per mapped function', function(){
    assert.deepEqual(map(square, [1, 2]), [1, 4]);
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

  describe('isPositiveNumber', function() {
    it('should return all numbers from a positive number list', function() {
      assert.deepEqual(filter(isPositiveNumber, [1, 2, 3, 4]), [1, 2, 3, 4]);
    });
    it('should return no number from a negative number list', function() {
      assert.deepEqual(filter(isPositiveNumber, [-1, -2, -3, -4]), []);
    });
  });
});

describe('Reduce Test Cases', function() {
  describe('sumOfTwoNumbers', function() {
    it('should provide the sum of all the numbers in a postive number list', function() {
      assert.deepEqual(reduce(sumOfTwoNumbers, [1, 2, 3, 4, 5]), 15);
    });
    it('should provide the sum of all the numbers in a negative number list', function() {
      assert.deepEqual(reduce(sumOfTwoNumbers, [-1, -2, -3, -4, -5]), -15);
    });
  });
});
