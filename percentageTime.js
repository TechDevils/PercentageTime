const _64BitInt = 9223372036854775807;
const _32BitInt = 2147483647000;
const _secAndMinConst = 60;
const _hourConst = 24;

function getPercentageTimeToComplete64Bit(){
    var timeNow = Date.now();
    return getPercentage(timeNow, _64BitInt);
}
function getPercentageTimeToComplete32Bit(){
    var timeNow = Date.now();
    return getPercentage(timeNow, _32BitInt);
}

function getPercentageOfCurrentMin(timeNow){
    return getPercentage(timeNow.getUTCSeconds(), _secAndMinConst);
}
function getPercentageOfCurrentHour(timeNow, includeSubElement){
    var addTime = 0;

    if(includeSubElement){
        addTime = (getPercentageOfCurrentMin(timeNow)/100);
    }

    return getPercentage(timeNow.getUTCMinutes(), _secAndMinConst) + addTime;
}
function getPercentageOfCurrentHourMin(timeNow){
    return getPercentageOfCurrentHour(timeNow, true);
}
function getPercentageOfCurrentDay(timeNow, includeSubElement){
    var addTime = 0;

    if(includeSubElement){
        addTime = (getPercentageOfCurrentHourMin(timeNow) / 100);
    }
    return getPercentage(timeNow.getUTCHours(), _hourConst) + addTime;
}
function getPercentageOfCurrentDayHourMin(timeNow){
    return getPercentageOfCurrentDay(timeNow,true);
}
function getPercentageOfCurrentYear(timeNow, includeSubElement){
    var currentYear = new Date(timeNow.getUTCFullYear(),0,1);
    var numberOfDays = Math.ceil((timeNow.getTime() - currentYear + 1) / 86400000);
    var daysInTheYear = 365;
    if(timeNow.getUTCFullYear() % 4 == 0){
        daysInTheYear++;
    }
    var addTime = 0;

    if(includeSubElement){
        addTime = ((getPercentageOfCurrentDayHourMin(timeNow) / 100)/daysInTheYear);
    }
    return getPercentage(numberOfDays,daysInTheYear) + addTime;
}
function getPercentageOfCurrentYearDayHourMin(timeNow){

    return getPercentageOfCurrentYear(timeNow, true);
}
function getPercentageOfCurrentDecade(){

}
function getPercentageOfCurrentCentury(){

}

function getPercentageBetweenToDays(start, end){
    var startTime = start.valueOf();
    var endTime = end.valueOf() - startTime;
    var currentTime = Date.now() - startTime;

    return getPercentage(currentTime, endTime);
}

function getPercentage(dividend, divisor){
    return ((dividend / divisor) * 100);
}

module.exports = {
    get32BitCompletion : getPercentageTimeToComplete32Bit,
    get64BitCompletion : getPercentageTimeToComplete64Bit,
    getPercentageOfCurrentMin:getPercentageOfCurrentMin,
    getPercentageOfCurrentHour:getPercentageOfCurrentHour,
    getPercentageOfCurrentHourMin :getPercentageOfCurrentHourMin,
    getPercentageOfCurrentDay:getPercentageOfCurrentDay,
    getPercentageOfCurrentDayHourMin:getPercentageOfCurrentDayHourMin,
    getPercentageOfCurrentYear:getPercentageOfCurrentYear,
    getPercentageOfCurrentYearDayHourMin:getPercentageOfCurrentYearDayHourMin,
    getPercentageBetweenToDays : getPercentageBetweenToDays
}