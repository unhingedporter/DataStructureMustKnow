/* Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.

Input:
N = 4
arr = [1, 5, 3, 2]
Output: 2
Explanation: There are 2 triplets: 
1 + 2 = 3 and 3 + 2 = 5 
*/

// TimeComplexity: O(n^2) - Major Steps involved: Sorting and two nested loops
// Approach : The idea is similar to Find a triplet that sum to a given value.

var arr = [1, 5, 3, 2];

var sortedArr = arr.sort((a, b) => a - b);

var isTripletFound = false;

for (var iterator = arr.length - 1; iterator > 0; iterator--) {

    var left = 0;
    right = iterator;
    var elem = arr[iterator];

    while (left < right) {
        if (arr[left] + arr[right] === elem) {
            isTripletFound = true;
            console.log(`Found the triplet ${arr[left]} ${arr[right]} ${elem}`);
            left++;
            right--;
        } else if (arr[left] + arr[right] < elem) {
            left++;
        } else {
            right--;
        }
    }
}

if (!isTripletFound) {
    console.log('No triplet found');
}