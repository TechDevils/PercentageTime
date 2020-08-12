const _32BitInt = 2147483647000;
const _secAndMinConst = 60;
const _hourConst = 24;

function getPeratageTimeToComplete32Bit(){
    var timeNow = Date.now();
    return getPercentage(timeNow, _32BitInt);
}

function getPerctageOfCurrentMin(){
    var timeNow = new Date();
    return getPercentage(timeNow.getUTCSeconds(), _secAndMinConst);
}
function getPerctageOfCurrentHour(){
    var timeNow = new Date();
    return getPercentage(timeNow.getUTCMinutes(), _secAndMinConst) + (getPerctageOfCurrentMin()/100);
}
function getPerctageOfCurrentDay(){
    var timeNow = new Date();
    return getPercentage(timeNow.getUTCHours(), _hourConst) + (getPerctageOfCurrentHour() / 100);
}
function getPerctageOfCurrentYear(){
    var timeNow = new Date();
    var currentYear = new Date(timeNow.getUTCFullYear(),0,1);
    var numberOfDays = Math.ceil((timeNow.getTime() - currentYear + 1) / 86400000);
    var daysInTheYear = 365;
    if(timeNow.getUTCFullYear() % 4 == 0){
        daysInTheYear++;
    }

    return getPercentage(numberOfDays,daysInTheYear) + (getPerctageOfCurrentDay() / 100);

}
function getPerctageOfCurrentDecade(){

}
function getPerctageOfCurrentCentury(){

}

function getPercentage(dividend, divisor){
    return ((dividend / divisor) * 100);
}

console.log(`perctageTo32BitInt: ${getPeratageTimeToComplete32Bit()}%`);
console.log(`getPerctageOfCurrentMin: ${getPerctageOfCurrentMin()}%`);
console.log(`getPerctageOfCurrentHour: ${getPerctageOfCurrentHour()}%`);
console.log(`getPerctageOfCurrentDay: ${getPerctageOfCurrentDay()}%`);
console.log(`getPerctageOfCurrentYear: ${getPerctageOfCurrentYear()}%`);