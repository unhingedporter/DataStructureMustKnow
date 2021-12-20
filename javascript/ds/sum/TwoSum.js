/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {


    if (nums.length == 0) {
        return null;
    }

    var sum = 0, start = 0, end = 0, arr = [];
    for (var i = 0; i < nums.length; i++) {

        if (arr.includes(nums[i])) {
            return [arr.indexOf(nums[i]), i]
        }
        arr[i] = target - nums[i];
    }
};