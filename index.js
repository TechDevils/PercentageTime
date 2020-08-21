const _32BitInt = 2147483647000;
const _secAndMinConst = 60;
const _hourConst = 24;

function getPeratageTimeToComplete32Bit(){
    var timeNow = Date.now();
    return getPercentage(timeNow, _32BitInt);
}

function getPerctageOfCurrentMin(timeNow){
    return getPercentage(timeNow.getUTCSeconds(), _secAndMinConst);
}
function getPerctageOfCurrentHour(timeNow, includeSubElement){
    var addTime = 0;

    if(includeSubElement){
        addTime = (getPerctageOfCurrentMin(timeNow)/100);
    }

    return getPercentage(timeNow.getUTCMinutes(), _secAndMinConst) + addTime;
}
function getPerctageOfCurrentHourMin(timeNow){
    return getPerctageOfCurrentHour(timeNow, true);
}
function getPerctageOfCurrentDay(timeNow, includeSubElement){
    var addTime = 0;

    if(includeSubElement){
        addTime = (getPerctageOfCurrentHourMin(timeNow) / 100);
    }
    return getPercentage(timeNow.getUTCHours(), _hourConst) + addTime;
}
function getPerctageOfCurrentDayHourMin(timeNow){
    return getPerctageOfCurrentDay(timeNow,true);
}
function getPerctageOfCurrentYear(timeNow, includeSubElement){
    var currentYear = new Date(timeNow.getUTCFullYear(),0,1);
    var numberOfDays = Math.ceil((timeNow.getTime() - currentYear + 1) / 86400000);
    var daysInTheYear = 365;
    if(timeNow.getUTCFullYear() % 4 == 0){
        daysInTheYear++;
    }
    var addTime = 0;

    if(includeSubElement){
        addTime = ((getPerctageOfCurrentDayHourMin(timeNow) / 100)/daysInTheYear);
    }
    return getPercentage(numberOfDays,daysInTheYear) + addTime;
}
function getPerctageOfCurrentYearDayHourMin(timeNow){

    return getPerctageOfCurrentYear(timeNow, true);
}
function getPerctageOfCurrentDecade(){

}
function getPerctageOfCurrentCentury(){

}

function getPercentage(dividend, divisor){
    return ((dividend / divisor) * 100);
}

var d = new Date();
console.log(`perctageTo32BitInt: ${getPeratageTimeToComplete32Bit()}%`);
console.log(`getPerctageOfCurrentMin: ${getPerctageOfCurrentMin(d)}%`);
console.log(`getPerctageOfCurrentHour: ${getPerctageOfCurrentHour(d)}%`);
console.log(`getPerctageOfCurrentHour: ${getPerctageOfCurrentHourMin(d)}%`);
console.log(`getPerctageOfCurrentDay: ${getPerctageOfCurrentDay(d)}%`);
console.log(`getPerctageOfCurrentDay: ${getPerctageOfCurrentDayHourMin(d)}%`);
console.log(`getPerctageOfCurrentYear: ${getPerctageOfCurrentYear(d)}%`);
console.log(`getPerctageOfCurrentYear: ${getPerctageOfCurrentYearDayHourMin(d)}%`);