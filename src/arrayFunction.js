const map = function(mapperFunction, inputArray){
  let result = [];
  for(let element of inputArray){
    let value = mapperFunction(element);
    result.push(value);
  }
  return result;
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
