var pt = require('./percentageTime')
var d = new Date();
showAllTimes(d);
var d2 = new Date(2019,0,2,11,28,30);
showAllTimes(d2);
var d3 = new Date(2002,5,15,4,10,15); 
showAllTimes(d3);
var d4 = new Date('Feb 28 2013 19:00:00 EST'); 
showAllTimes(d4);
var d5 = new Date('Feb 28 2013 19:00:10 GMT+0900'); 
showAllTimes(d5);

console.log(`diff dates ${pt.getPercentageBetweenToDays(d3,d2)}`);
var d6 = new Date(2021,0,2,11,28,30);

console.log(`diff dates ${pt.getPercentageBetweenToDays(d4,d6)}`);
var d7 = new Date(2020,7,25,00,22,30);

console.log(`diff dates ${pt.getPercentageBetweenToDays(d4,d7)}`);

function showAllTimes(d){
    console.log(d);
    console.log(`PercentageTo32BitInt: ${pt.get32BitCompletion()}%`);
    console.log(`PercentageTo64BitInt: ${pt.get64BitCompletion()}%`);
    console.log(`getPercentageOfCurrentMin: ${pt.getPercentageOfCurrentMin(d)}%`);
    console.log(`getPercentageOfCurrentHour: ${pt.getPercentageOfCurrentHour(d)}%`);
    console.log(`getPercentageOfCurrentHour: ${pt.getPercentageOfCurrentHourMin(d)}%`);
    console.log(`getPercentageOfCurrentDay: ${pt.getPercentageOfCurrentDay(d)}%`);
    console.log(`getPercentageOfCurrentDay: ${pt.getPercentageOfCurrentDayHourMin(d)}%`);
    console.log(`getPercentageOfCurrentYear: ${pt.getPercentageOfCurrentYear(d)}%`);
    console.log(`getPercentageOfCurrentYear: ${pt.getPercentageOfCurrentYearDayHourMin(d)}%`);
}
