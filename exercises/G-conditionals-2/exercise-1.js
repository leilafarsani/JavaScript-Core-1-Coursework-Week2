/*
  Conditionals
  ---------------------------------
  Write a function to test if a provided number is negative or positive
  - if number is less than zero, return the word "negative"
  - if number is more or equal to zero, return the word "positive"
*/

function negativeOrPositive(number) {
  if (number < 0){
    return "negative";
  } 
  return "Positive";
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let number1 = 5;
let number2 = -1;
let number3 = 0;

console.log(number1 + " is " + negativeOrPositive(number1));
console.log(number2 + " is " + negativeOrPositive(number2));
console.log(number3 + " is " + negativeOrPositive(number3));

/* 
  EXPECTED RESULT
  ---------------
  5 is positive
  -1 is negative
  0 is positive
*/
