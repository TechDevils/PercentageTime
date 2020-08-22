# Percentage Time
Show the time as a percentage.
The seconds, mins, hours, days, months, years

## how long until the 32bit date is reached
```
var pt = require('./percentageTime')

console.log(`perctageTo32BitInt: ${pt.get32BitCompletion()}%`);
```
want to check 64bit time too
```
var pt = require('./percentageTime')

console.log(`perctageTo64BitInt: ${pt.get64BitCompletion()}%`);
```
