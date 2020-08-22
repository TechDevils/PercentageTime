# Percentage Time
Show the time as a percentage.
The seconds, mins, hours, days, months, years

## Examples
Get the % of the current Minute

```
var pt = require('./percentageTime');

var d = new Date();

console.log(`getPercentageOfCurrentMin: ${pt.getPercentageOfCurrentMin(d)}%`);
```
Get the % of the current hour. There are two options.
One will get only the current hour
Two will get the current hour plus the minutes

```
var pt = require('./percentageTime');

var d = new Date();

console.log(`getPercentageOfCurrentHour: ${pt.getPercentageOfCurrentHour(d)}%`);
console.log(`getPercentageOfCurrentHour: ${pt.getPercentageOfCurrentHourMin(d)}%`);
```

Get the % of the current day. There are two options again.
One will get only the current day
Two will get the current day plus the hours and minuets

```
var pt = require('./percentageTime');

var d = new Date();

console.log(`getPercentageOfCurrentDay: ${pt.getPercentageOfCurrentDay(d)}%`);
console.log(`getPercentageOfCurrentDay: ${pt.getPercentageOfCurrentDayHourMin(d)}%`);
```

Get the % of the current year. There are two options again.
One will get only the current year
Two will get the current year plus the day, hours and minuets

```
var pt = require('./percentageTime');

var d = new Date();

console.log(`getPercentageOfCurrentYear: ${pt.getPercentageOfCurrentYear(d)}%`);
console.log(`getPercentageOfCurrentYear: ${pt.getPercentageOfCurrentYearDayHourMin(d)}%`);
```

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
