function askQuestion(prompt) {
  let readlineSync = require('readline-sync');
  let question = readlineSync.question(prompt)
  return question;

}

let x = Number(askQuestion("What is your number? "));

function numberRange(x) {
if (!Number.isInteger(x)) {
  console.log('Sorry, the value you passed is not an integer');
  return;
  }  
if (x < 0 ) {
  console.log(`${x} is less than 0`);
} else if (x <= 50) {
  console.log(`${x} is between 0 and 50`)
} else if (x <= 100) {
  console.log(`${x} is between 50 and 100`)
} else {
  console.log(`${x} is greater than 100`);
}
};
numberRange(x);