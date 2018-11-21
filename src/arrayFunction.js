const map = function(mapper, inputArray) {
  let mappedElements = [];
  for (let element of inputArray) {
    mappedElements.push(mapper(element));
  }
  return mappedElements;
}

const filter = function(filtererFunction, inputArray){
  let result = [];
  for(element of inputArray){
    if(filtererFunction(element)){
      result.push(element);
    }
  }
  return result;
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
