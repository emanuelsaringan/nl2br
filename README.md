nl2br
=====

nl2br - A NodeJS module for converting newlines to line breaks

Based on [this answer](http://stackoverflow.com/a/7467863/2422457) in StackOverflow

##Install

```
$ npm install nl2br
```

## Example ##
```javascript
var nl2br  = require('nl2br');

// XHTML Way
nl2br('Base\nballs');  // returns 'Base<br/>balls'

// Non-XHTML Way
nl2br('Base\nballs', false);  // returns 'Base<br>balls'
```
