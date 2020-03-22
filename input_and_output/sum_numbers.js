let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let operation = rlSync.question('add, subtract, multiply, or divide? \n');

let sum = theDeed(number1, number2);
function theDeed(number1, number2) {
if (operation === "add") {
  return number1 + number2;
} else if (operation === "subtract") {
  return  number1 - number2;
} else if (operation === "multiply") {
  return  number1 * number2;
} else {
  return  number1 / number2;
}
};
console.log (sum);