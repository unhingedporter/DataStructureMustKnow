// Subset Sum Problem 

// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with sum equal to given sum. 

// Example: 

// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
// Output: True  
// There is a subset (4, 5) with sum 9.

// Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
// Output: False
// There is no subset that add up to 30.

// Method 1: Recursion.
// Approach: For the recursive approach we will consider two cases. 

//     Consider the last element and now the required sum = target sum – value of ‘last’ element and number of elements = total elements – 1
//     Leave the ‘last’ element and now the required sum = target sum and number of elements = total elements – 1

// Following is the recursive formula for isSubsetSum() problem. 

// isSubsetSum(set, n, sum) 
// = isSubsetSum(set, n-1, sum) || 
//   isSubsetSum(set, n-1, sum-set[n-1])
// Base Cases:
// isSubsetSum(set, n, sum) = false, if sum > 0 and n == 0
// isSubsetSum(set, n, sum) = true, if sum == 0 

// Let’s take a look at the simulation of above approach-: 

// set[]={3, 4, 5, 2}
// sum=9
// (x, y)= 'x' is the left number of elements,
// 'y' is the required sum

//               (4, 9)
//              {True}
//            /        \  
//         (3, 6)       (3, 9)

//         /    \        /   \ 
//      (2, 2)  (2, 6)   (2, 5)  (2, 9)
//      {True}  
//      /   \ 
//   (1, -3) (1, 2)  
// {False}  {True} 
//          /    \
//        (0, 0)  (0, 2)
//        {True} {False}      

// A recursive solution for subset sum problem

// Returns true if there is a subset of set[] with sum
// equal to given sum
function isSubsetSum(set, n, sum) {
    // Base Cases
    if (sum == 0)
        return true;
    if (n == 0)
        return false;

    // If last element is greater than sum,
    // then ignore it
    if (set[n - 1] > sum)
        return isSubsetSum(set, n - 1, sum);

    /* else, check if sum can be obtained
    by any of the following
    (a) including the last element
    (b) excluding the last element */
    return isSubsetSum(set, n - 1, sum)
        || isSubsetSum(set, n - 1, sum - set[n - 1]);
}

let set = [3, 34, 4, 12, 5, 2];
let sum = 9;
let n = set.length;
if (isSubsetSum(set, n, sum) == true)
    console.log("Found a subset with given sum");
else
    console.log("No subset with given sum");
