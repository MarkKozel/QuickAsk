# Quick Ask

Just need basic user input without any other packages

Simple user input until enter is pressed. Backspace will remove last character

ALso has a Y/N function that does not require pressing enter

Based on David Mark Clements's [prompt sync ](https://github.com/heapwolf/prompt-sync), but simplified

Also referenced [Command Line with ANSI escape codes](https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html)

## Requires:

- Node 12.x, maybe earlier

## Usage:
### QuickAsk

```javascript
const quickAsk = require("quickask").QuickAsk;

let reply = quickAsk("types some stuff. Press <enter> when done: ");
console.log("You typed: " + reply);
```

results:

```
type some stuff. Press <enter> when done: klkj;fgjgjjjjg    jjj
You typed: klkj;fgjgjjjjg    jjj
```
#QuickYN

```javascript
const quickYN = require("quickask").QuickYN;
let reply = quickYN('Yes/No Question [Y/N] ');
console.log("You typed: " + reply)
```

results:

```
Yes/No Question [Y/N] N
You typed: N
```
## License:

[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
Attribution-NonCommercial-ShareAlike 4.0 International

## Miscellany

### Near Future to-dos

None

### Version History
1.0.0 Has basic Ask and YN functionality I needed

>Added QuickYN to take a single character input w/o pressing enter key

0.0.2 - Initial build-up

>Have QuickAsk working with *process.stdin* and *process.stdout* calls to position prompt, cursor, and types chars

<a href="https://www.buymeacoffee.com/MarkKozel" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>

### Historical Context

Global pandemic, US Election a month or so away, US President has Covid, and everyone is very confused
