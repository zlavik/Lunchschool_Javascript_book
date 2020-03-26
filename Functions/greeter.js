function askQuestion(prompt) {
  let readlineSync = require('readline-sync');
  let question = readlineSync.question(prompt)
  return question;

}


let firstName = askQuestion('What is your first name? ');
let lastName = askQuestion('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);