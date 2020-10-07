const fs = require('fs');

function quickAsk(prompt) {
  let fd = process.stdin.fd;
  let buf = Buffer.alloc(1);
  let character = '';
  let string = '';
  let cursorPosition = 0;
  let read = '';

  if (!process.stdin.isRaw) {
    process.stdin.setRawMode && process.stdin.setRawMode(true);
  }

  if (prompt) { console.log(prompt); }
  while (true) {
    read = fs.readSync(fd, buf, 0, 1);
    character = buf[read - 1];

    if (character === 13) { //enter pressed
      fs.closeSync(fd);
      break;
    }

    if (character === 8) { //backspace
      string = string.slice(0, cursorPosition - 1) + string.slice(cursorPosition);
      cursorPosition--;
      process.stdout.write('\u001b[2D');
    } else {
      if ((character < 32) || (character > 126)) {
        continue;
      } else {
        string = string.slice(0, cursorPosition) + String.fromCharCode(character) + string.slice(cursorPosition);
        cursorPosition++;
      }
    }
  }
  return string;
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = quickAsk;
}