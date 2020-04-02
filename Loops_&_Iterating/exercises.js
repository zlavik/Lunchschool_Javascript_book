// 1

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
let futureAge = 10;

console.log(`You are ${age} years old.`);
for (let futureAge = 10; futureAge <= 40; futureAge += 10) {
    console.log(`In ${futureAge} years, you will be ${age + futureAge} years old.`);
  }


  // 2

  function factorial(number) {
    let result = 1;
    for (let counter = number; counter > 0; counter -= 1) {
      result *= counter;
    }
  
    return result;
  }
  
  console.log(factorial(0));     // => 1
  console.log(factorial(1));     // => 1
  console.log(factorial(2));     // => 2
  console.log(factorial(3));     // => 6
  console.log(factorial(4));     // => 24
  console.log(factorial(5));     // => 120
  console.log(factorial(6));     // => 720
  console.log(factorial(7));     // => 5040
  console.log(factorial(8));     // => 40320

  // 3  The problem occurs on line 3 where we assign 1 to counter inside the conditional part of the while loop/
  // JavaScript accepts this code since the assignment always returns a truthy value (1 in this case), the loop condition never becomes false. 
  // Furthermore, the test on line 7 never becomes false either since the assignment on line 3 ensures that counter is always equal to 2.

  // 4 The code doesn't produce an error since all 3 components of the for loop are optional. 

  //5

  function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  let tries = 0;
  let result;
  
  do {
    result = randomNumberBetween(1, 6);
    tries += 1;
  } while (result <= 2);
  
  console.log('It took ' + String(tries) + ' tries to get a number greater 2');

  // 6

  function factorial(number) {
    if (number <= 1) {
      return 1;
    }
  
    return number * factorial(number - 1);
  }
  
  console.log(factorial(0));     // => 1
  console.log(factorial(1));     // => 1
  console.log(factorial(2));     // => 2
  console.log(factorial(3));     // => 6
  console.log(factorial(4));     // => 24
  console.log(factorial(5));     // => 120
  console.log(factorial(6));     // => 720
  console.log(factorial(7));     // => 5040
  console.log(factorial(8));     // => 40320