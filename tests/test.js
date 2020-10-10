// const quickAsk = require("quickask").QuickAsk;
quickAsk = require('../src/QuickAsk').QuickAsk;

let reply = quickAsk('types some stuff. Press <enter> when done: ');
console.log("You typed: " + reply)

// const quickYN = require("quickask").QuickYN;
quickYN = require('../src/QuickAsk').QuickYN;
let reply1 = quickYN('Yes/No Question [Y/N] ');
console.log("You typed: " + reply1)