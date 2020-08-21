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

function showAllTimes(d){
    console.log(d);
    console.log(`perctageTo32BitInt: ${pt.get32BitCompletion()}%`);
    console.log(`perctageTo64BitInt: ${pt.get64BitCompletion()}%`);
    console.log(`getPerctageOfCurrentMin: ${pt.getPerctageOfCurrentMin(d)}%`);
    console.log(`getPerctageOfCurrentHour: ${pt.getPerctageOfCurrentHour(d)}%`);
    console.log(`getPerctageOfCurrentHour: ${pt.getPerctageOfCurrentHourMin(d)}%`);
    console.log(`getPerctageOfCurrentDay: ${pt.getPerctageOfCurrentDay(d)}%`);
    console.log(`getPerctageOfCurrentDay: ${pt.getPerctageOfCurrentDayHourMin(d)}%`);
    console.log(`getPerctageOfCurrentYear: ${pt.getPerctageOfCurrentYear(d)}%`);
    console.log(`getPerctageOfCurrentYear: ${pt.getPerctageOfCurrentYearDayHourMin(d)}%`);
}
