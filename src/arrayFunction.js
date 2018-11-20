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

module.exports = {
  map,
  filter 
}
