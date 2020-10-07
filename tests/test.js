quickAsk = require('../src/QuickAsk');

let reply = quickAsk('types some stuff. Press <enter> when done: ');
console.log("You typed: " + reply)