const map = function(mapperFunction, inputArray){
  let result = [];
  for(let element of inputArray){
    let value = mapperFunction(element);
    result.push(value);
  }
  return result;
}

module.exports = {
  map
}
