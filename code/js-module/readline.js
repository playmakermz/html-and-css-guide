let readlineSync = require('readline-sync')

let userName= readlineSync.question('May I have your name? ')

let myFav   = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});

console.log(`hai ${userName}, this ${myFav} it's my favorite food too`)













