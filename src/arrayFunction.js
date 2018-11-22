const map = function(mapper, inputArray) {
  let mappedElements = [];
  for (let element of inputArray) {
    mappedElements.push(mapper(element));
  }
  return mappedElements;
}

const filter = function(predicate, inputArray) {
  let filteredElements = [];
  for (element of inputArray) {
    if (predicate(element)) {
      filteredElements.push(element);
    }
  }
  return filteredElements;
}

const reduce = function(reducer, inputArray, accumulator) {
  if (accumulator == undefined) {
    accumulator = inputArray[0];
    inputArray = inputArray.slice(1);
  }
  if (inputArray.length > 0) {
    accumulator = reducer(accumulator, inputArray[0]);
    accumulator = reduce(reducer, inputArray.slice(1), accumulator);
  }
  return accumulator;
}

module.exports = {
  map,
  filter,
  reduce
}
