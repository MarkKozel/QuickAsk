const fs = require('fs');

exports.QuickAsk = function (prompt) {
  let buf = Buffer.alloc(1);
  let character = '';
  let string = '';
  let cursorPosition = 0;
  let read = '';
  let echo = 'yes'

  let fd = (process.platform === 'win32') ?
    process.stdin.fd :
    fs.openSync('/dev/tty', 'rs');

  if (!process.stdin.isRaw) {
    process.stdin.setRawMode && process.stdin.setRawMode(true);
  }

  if (prompt) {
    console.log(prompt);
    process.stdout.moveCursor(prompt.length, -1)
  }
  while (true) {
    read = fs.readSync(fd, buf, 0, 1);
    character = buf[read - 1];

    if (character === 13) { //enter pressed
      fs.closeSync(fd);
      break;
    }

    if (character === 127 || (process.platform == 'win32' && character === 8)) { //backspace
      string = string.slice(0, cursorPosition - 1) + string.slice(cursorPosition);
      cursorPosition--;
      process.stdout.moveCursor(-1, 0)
      process.stdout.write(' ');
      process.stdout.moveCursor(-1, 0)
    } else {
      if ((character < 32) || (character > 126)) {
        continue;
      } else {
        asciiChar = String.fromCharCode(character);
        string = string.slice(0, cursorPosition) + asciiChar + string.slice(cursorPosition);
        cursorPosition++;
        process.stdout.write(`\u001b[${prompt.length + (echo == '' ? 0 : cursorPosition)}G`);
        process.stdout.write('\u001b[s' + asciiChar);
      }
    }
  }
  process.stdout.write('\u001b[1B'); //newline
  process.stdout.write(`\u001b[0G`); //column 1
  return string;
}

exports.QuickYN = function (prompt) {
  let buf = Buffer.alloc(1);
  let character = '';
  let string = '';
  let cursorPosition = 0;
  let read = '';
  let echo = 'yes'

  let fd = (process.platform === 'win32') ?
    process.stdin.fd :
    fs.openSync('/dev/tty', 'rs');

  if (!process.stdin.isRaw) {
    process.stdin.setRawMode && process.stdin.setRawMode(true);
  }

  if (prompt) {
    console.log(prompt);
    process.stdout.moveCursor(prompt.length, -1)
  }
  read = fs.readSync(fd, buf, 0, 1);
  character = buf[read - 1];

  if (character === 13) { //enter pressed
    fs.closeSync(fd);
    return string;
  }
  //Y89 N78 y121 n110
  if ((character === 89) || (character === 78) || (character === 121) || (character === 110)) {
    string = String.fromCharCode(character).toLocaleUpperCase();
    cursorPosition++;
    process.stdout.write(`\u001b[${prompt.length + (echo == '' ? 0 : cursorPosition)}G`);
    process.stdout.write('\u001b[s' + string);
  }

  process.stdout.write('\u001b[1B'); //newline
  process.stdout.write(`\u001b[0G`); //column 1
  return string;
}