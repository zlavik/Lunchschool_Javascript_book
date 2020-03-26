function askQuestion(prompt) {
  let readlineSync = require('readline-sync');
  let question = readlineSync.question(prompt)
  return question;

}

let x = Number(askQuestion("Give me a number and I will determine if its even or odd: "))

function evnOrOdd(x) {
if (!Number.isInteger(x)) {
  console.log('Sorry, the value you passed is not an integer');
  return;
  }  
if (x % 2 === 0) {
  console.log("Even number!");
} else {
  console.log("Odd number!")
  }
};

evnOrOdd(x);