
// var count = 0;
// var subsetSum = function (nums, n, target, expression) {

//     if (target === 0) {
//         console.log(expression);
//         return count++;
//     } else if(target < 0){
//         return;
//     }

//     if (n === 0) {
//         return;
//     }

//     return subsetSum(nums, n - 1, target, `${expression}+${nums[n - 1]}`) || subsetSum(nums, n - 1, target - nums[n - 1], `${expression}-${target}-${nums[n-1]}`);
// }

// subsetSum([2, 4, 5, 3], 4, 5, '');
// console.log(`The number of such pairs are ${count}`);



var count = 0;
var subsetSum = function (nums, n, target, expression) {


    if (n <= 0) {
        return target;
    } else if (nums[n] > target) {
        target = nums[n];
       // return target;
    }
    // target =  Math.max(nums[n], target);

    var excludedNum = subsetSum(nums, n - 1, target, `${expression}`);
    var includedNum = subsetSum(nums, n - 1, target + nums[n - 1], `${expression}+${nums[n - 1]}`);

    target = Math.max(excludedNum, includedNum);
    console.log(expression)
    return target;


}

var maxSum = subsetSum([99, -12, -100, 100], 3, 0, '');
console.log(`The number of such pairs are ${maxSum}`);