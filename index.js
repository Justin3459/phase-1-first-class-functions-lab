// Code your solution in this file!


function returnFirstTwoDrivers (){
    const drivers = 
        (['Antonia', 'Nuru', 'Amari', 'Mo']);
    let firstTwoDrivers = []
    return drivers.slice(0,2)
    
}

function returnLastTwoDrivers(){
    const drivers = 
        (['Antonia', 'Nuru', 'Amari', 'Mo']);
    return drivers.slice(2)
}

let selectingDrivers =
    ([returnFirstTwoDrivers, returnLastTwoDrivers]);

function createFareMultiplier(multiplier){
    return function(num1){
        return multiplier * num1
    }
}

function fareDoubler (num){
    return num *2
}

function fareTripler (num){
    return num * 3
}

function selectDifferentDrivers(name,fn2) {
    return fn2(name)
}