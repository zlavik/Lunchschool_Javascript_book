let rlSync = require('readline-sync');


let name = rlSync.question("What's your name?\n");


var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  console.log(`Good Morning, ${name}!`);
} else if (curHr < 18) {
  console.log(`Good afternoon, ${name}!`);
} else {
  console.log(`Good evening, ${name}!`);
}



let game = rlSync.question(`${name}, do you want to play a game? Type yes or no\n`);

if (game === "yes") {
  console.log(`well too bad, ${name} you just lost the game >:D`);
} else {
  console.log(`Thats the spirit ${name}.`)

};


