function add (numbers){
  if(numbers == "")
    return 0;

  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",");
    if(checkForN(numberArray) == true){
      numberArray = splitArray(numberArray);
    }
    return sum(numberArray);
  }
  else if(numbers.includes("\n")){
    numbers.split("\n")
    return sum;
  }
  else
    return parseInt(numbers);
}

function sum(numberArray){
  var total = 0;
  for(var i = 0; i < numberArray.length; i++){
    total += parseInt(numberArray[i]);
  }
  return total;
}

function checkForN(numberArray){
  for(var i = 0; i < numberArray.length; i++){
    if(numberArray[i].includes("\n")){
      return true;
    }
  }
  return false;
}

function splitArray(numberArray){
  newArr = [];
  for(var i = 0; i < numberArray.length; i++){
    if(numberArray[i].includes("\n")){
      var arrSplit = numberArray[i].split("\n");
      for(var j = 0; j < arrSplit.length; j++){
        newArr.push(arrSplit[j]);
      }
    }
    else {
      newArr.push(numberArray[i]);
    }
  }
  return newArr;
}



module.exports = add;