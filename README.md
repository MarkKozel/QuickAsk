# Quick Ask

Just need basic user input without any other packages

Simple user input until enter is pressed. backscape will remove last character

Based on David Mark Clements's [prompt sync ](https://github.com/heapwolf/prompt-sync), but simplified

Also referenced [Command Line with ANSI escape codes](https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html)

## Requires:

- Node 12.x, maybe earlier

## Usage:

```javascript
quickAsk = require("../src/QuickAsk");

let reply = quickAsk("type some stuff. Press <enter> when done: ");
console.log("You typed: " + reply);
```

results:

```
type some stuff. Press <enter> when done: klkj;fgjgjjjjg    jjj
You typed: klkj;fgjgjjjjg    jjj
```

## License:

[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
Attribution-NonCommercial-ShareAlike 4.0 International

## Miscellany

### Near Future to-dos

None

### Version History

0.0.2 - Inital build-up

Added ability to send JavaScript object into constructor, rather than just file. Included automatic write prevention when instantiated this way

<a href="https://www.buymeacoffee.com/MarkKozel" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" height="41" width="174"></a>

### Historical Context

Global pandemic, US Election a month or so away, US President has Covid, and everyone is very confused
