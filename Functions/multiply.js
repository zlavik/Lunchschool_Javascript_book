function askQuestion(prompt) {
  let readlineSync = require('readline-sync');
  let question = readlineSync.question(prompt)
  return question;
}

let firstNumber = askQuestion('What is your first number?');
let secondNumber = askQuestion('What is your second number?');
console.log(`lets multiply! ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber} `);