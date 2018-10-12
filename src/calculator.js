function add (numbers){
  if(numbers == ""){
    return 0;
  }
  if(numbers.includes(","))
  {
    var numberArray = numbers.split(",");
    if(checkForN(numberArray) == true){
      numberArray = splitArray(numberArray);
    }
    checkIfNegative(numberArray);
    graterThan(numberArray);
    return sum(numberArray);
  }
  else if(numbers.includes("\n")){
    numbers.split("\n")
    checkIfNegative(numberArray);
    graterThan(numberArray);
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

function checkIfNegative(numberArray) {
  negativeArr = [];
  var message = "Negatives not allowed: ";
  var ifFound = false;
  for(var i = 0; i < numberArray.length; i++){
    if(parseInt(numberArray[i]) < 0){
      negativeArr.push(numberArray[i]);
      ifFound = true;
    }
  }
  for(var i = 0; i < negativeArr.length; i++){
    message += negativeArr[i].toString();
    if(i < negativeArr.length - 1){
      message += ',';
    }
  }
  if(ifFound == true) {
    throw new Error(message);
  }
}

function graterThan(numberArray){
  for(var i = 0; i < numberArray.length; i++){
    if(numberArray[i] > 1000){
      numberArray[i] = 0;
    }
  }
}



module.exports = add;