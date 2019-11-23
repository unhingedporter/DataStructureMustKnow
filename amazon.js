// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED




function cellCompete(states, days) {
    // WRITE YOUR CODE HERE 


    //sanity check of the parameters
    if (!states || !(states instanceof Array) || isNaN(days)) {
        return
    }


    var actualDays = days;

    var actualStates = []
    for (var day = 0; day < actualDays; day++) {

        for (var Iterator = 0; Iterator < states.length; Iterator++) {

            if (Iterator === 0) {

                //check for the edge element(first and last)
                if (states[Iterator + 1] === 0) {
                    actualStates[Iterator] = 0;
                } else {
                    actualStates[Iterator] = 1;
                }


            } else if (Iterator === states.length - 1) {

                if (states[Iterator - 1] === 0) {
                    actualStates[Iterator] = 0;
                } else {
                    actualStates[Iterator] = 1;

                } //check for adjacent element 
            } else if ((states[Iterator - 1] === 0 && states[Iterator + 1] === 0) ||
                (states[Iterator - 1] === 1 && states[Iterator + 1] === 1)) {
                actualStates[Iterator] = 0
            } else {
                actualStates[Iterator] = 1
            }

        }

        if (actualStates.length !== 0) {
            states = actualStates;
            actualStates = []
        }
    }

    return states;


}


// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function generalizedGCD(num, arr) {
    // WRITE YOUR CODE HERE 

    //sanity check
    if (!(arr instanceof Array) || isNaN(num)) {
        return;
    }


    // recursive function to find greatest common divisor
    var findGCD = function (num1, num2) {

        // if numbers are exactly divisible, num2 is the gcd 
        if (num1 === 0) {
            return num2;
        }

        return findGCD(num2 % num1, num1);

    }

    var resultantGCD = arr[0];
    for (var Iterator = 0; Iterator < arr.length; Iterator++) {
        resultantGCD = findGCD(arr[Iterator], resultantGCD);

    }

    return resultantGCD;

}
// FUNCTION SIGNATURE ENDS


// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function threeKeywordSuggestions(numreviews, repository, customerQuery) {
    // WRITE YOUR CODE HERE

    var listSearchSuggestion = [],


        // Functiont to generate top 3 search suggestion in a list of list
        generateSearchSuggestion = function (repo, searchStr) {

            // check existence of the searched string in the repo string
            var filterFunc = function (keys) {

                if (keys.toLowerCase().includes(searchStr.toLowerCase())) {
                    return true;
                }
                return false;
            }

            var repository = repo.filter(filterFunc)
            // Sort alphabatically 
            var sortFunc = function (s1, s2) {
                return s1.localeCompare(s2);
            };

            repository = repository.sort(sortFunc);

            listSearchSuggestion.push(repository.splice(0, 3))

        }

    //sanity check for the param
    if (isNaN(numreviews) || !(repository instanceof Array) || typeof (customerQuery) !== 'string') {
        return
    }



    for (var Iterator = 2; Iterator < customerQuery.length + 1; Iterator++) {

        generateSearchSuggestion(repository, customerQuery.substring(0, Iterator))
    }

    return listSearchSuggestion


}
// FUNCTION SIGNATURE ENDS





'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'finalPrice' function below.
 *
 * The function accepts INTEGER_ARRAY prices as parameter.
 */

function finalPrice(prices) {
    // Write your code here


    //sanity check for the input
    if (!(prices instanceof Array)) {
        return
    }
    var discount = prices[prices.length - 1],
        totalCost = 0,
        nonDiscountedArr = [];

    for (var iterator = prices.length - 1; iterator >= 0; iterator--) {
        console.log("Discout " + discount + " totalCost " + totalCost + " prices[iterator] " + prices[iterator]);

        if (discount < prices[iterator]) {
            totalCost += prices[iterator] - discount;
        } else {
            discount = prices[iterator];
            totalCost += prices[iterator];
            nonDiscountedArr.push(iterator);
        }

    }
    console.log(totalCost);
    console.log(nonDiscountedArr.reverse().toString().replace(/,/g, ' '));
}

function main() {


    [5, 1, 3, 3, 2, 5]