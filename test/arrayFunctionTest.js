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

const sumOfTwoNumbers = function(number1, number2) {
  return number1 + number2;
}

const returnTrue = function(number) {
  return true;
}

const returnFalse = function(number) {
  return false;
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

describe('filter', function() {
  it('should return empty array for empty array ', function() {
    assert.deepEqual(filter(isEven, []), []);
  });
  it('should return same array elements when predicate returns true for all input elements in array', function() {
    assert.deepEqual(filter(returnTrue, [0, 1]), [0, 1]);
  });
  it('should return no array element when predicate returns false for all input elements in array', function() {
    assert.deepEqual(filter(returnFalse, [0, 1]), []);
  });
  it('should return only filtered array elements when predicate is applied on an array', function() {
    assert.deepEqual(filter(isEven, [1, 2, 3, 4]), [2, 4]);
  });
});

describe('Reduce Test Cases', function() {
  it('should return undefined for an empty input array when initial value is not passed', function() {
    assert.deepEqual(reduce(sumOfTwoNumbers, []), undefined);
  });
  it('should return initial value for an empty input array when initial value is passed', function() {
    assert.deepEqual(reduce(sumOfTwoNumbers, [], 1), 1);
  });
  it('should return reduced value for an input array', function() {
    assert.deepEqual(reduce(sumOfTwoNumbers, [1, 2, 3, 4]), 10);
  });
  it('should return reduced value for an input array when initial value is passed', function() {
    assert.deepEqual(reduce(sumOfTwoNumbers, [1, 2, 3, 4], 0), 10);
  });
});
