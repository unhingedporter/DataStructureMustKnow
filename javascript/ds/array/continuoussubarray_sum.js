/*
Given an unsorted array A of size N of non-negative integers, find a continuous sub-array which adds to a given number S.

*/

// TimeComplexity : O(n)
// SpaceComplexity: O(1)

var arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 55, 5, 666]

var expectedSum = 60;

var startIndex = 0;

var sum = arr[startIndex];

for (var iterator = 1; iterator < arr.length; iterator++) {

    if (sum === expectedSum) {
        console.log(`Found the sum at ${startIndex}  ${iterator}`);
    } else if (sum < expectedSum) {
        sum += arr[iterator];

        // can be improved :P 
        if (sum > expectedSum) {
            startIndex = iterator;
            sum = arr[iterator];
        }
    } else {
        startIndex = iterator;
        sum = arr[iterator];
    }
}