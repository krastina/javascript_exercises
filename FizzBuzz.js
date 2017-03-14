var sayFizzBuzz = function(number) {
  var m3 = (number%3 == 0);
  var m5 = (number%5 == 0);
  if (m3 && m5 == true) {
    return "FizzBuzz";
  } else if (m5 == true) {
    return "Buzz";
  } else if (m3 == true) {
    return "Fizz";
  } else {
    return number
  }
}

var FizzBuzz = function(maxValue) {
  for (i=0; i <= maxValue; i++) {
    console.log(sayFizzBuzz(i));
  }
}

FizzBuzz(100);
FizzBuzz(1000); 
