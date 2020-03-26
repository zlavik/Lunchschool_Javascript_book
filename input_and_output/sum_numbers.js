let rlSync = require('readline-sync');
let number1 = Number(rlSync.question('Enter the first number\n'));
let operation = rlSync.question('add, subtract, multiply, or divide? \n');
let number2 = Number(rlSync.question('Enter the second number\n'));


let sum = theDeed(number1, number2);
function theDeed(number1, number2) {
if (operation === "add" || operation === "plus" || operation == "+") {
  console.log(number1 + " + " + number2);
  return number1 + number2;
} else if (operation === "subtract" || operation === "minus" || operation == "-") {
  console.log(number1 + " - " + number2);
  return  number1 - number2;
} else if (operation === "multiply" || operation === "times" || operation == "*") {
  console.log(number1 + " * " + number2);
  return  number1 * number2;
} else if (operation === "divide" || operation == "/") {
  console.log(number1 + " / " + number2);
  return  number1 / number2;
} else {
  console.log("Error try again!");
}
};
console.log ("= " + sum);