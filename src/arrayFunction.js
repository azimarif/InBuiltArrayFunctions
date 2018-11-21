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

const reduce = function(reducerFunction, inputArray, accumulator) {
  let index = 0;
  if (!accumulator) {
    accumulator = inputArray[0];
    index = 1;
  }
  while (index < inputArray.length) {
    accumulator = reducerFunction(accumulator, inputArray[index]);
    index++;
  }
  return accumulator;
}

module.exports = {
  map,
  filter,
  reduce
}
