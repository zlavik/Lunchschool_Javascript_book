function askQuestion(prompt) {
  let readlineSync = require('readline-sync');
  let question = readlineSync.question(prompt)
  return question;

}

let x = Number(askQuestion('Enter a number and ill try to guess: '));
switch (x) {
  case 0:
    console.log('I guess your number is 0');
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('Hmm I think mayne your number is 1, 2, 3, or 4');
    break;
  case 5:
    console.log('I guess your number is 5');
    break;
  case 6:
    console.log('I guess your number is 6');
    break;
  case 7:
    console.log('I guess your number is 7');
    break;
  default:
    console.log("I couldn't guess your number :(");
    break;
}