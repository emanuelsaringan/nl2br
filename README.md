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

// Non-XHTML Way
nl2br('Base\nballs');  // returns 'Base<br>balls'

// XHTML Way
nl2br('Base\nballs', true);  // returns 'Base<br />balls'
```
