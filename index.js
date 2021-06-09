// Code your solution in this file!
const returnFirstTwoDrivers= function(array) {
    return array.slice(0, 2);
} 

const returnLastTwoDrivers= function(array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value;
    }
}
// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

const selectDifferentDrivers = function (array, returnedDrivers) {
    return returnedDrivers(array);
}
