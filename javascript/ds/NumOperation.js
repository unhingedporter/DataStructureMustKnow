/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {

    nums = nums.sort((a, b) => { b - a });


    var leftPointer = 0;
    var rightPointer = nums.length - 1;
    var counterOperationPerformed = 0;

    while (leftPointer <= rightPointer) {
        var sum = nums[leftPointer] + nums[rightPointer];

        if (sum > k) {
            if (nums[rightPointer - 1] === nums[rightPointer]) {
                continue;
            } else {
                rightPointer--;
            }
        } else if (sum < k) {
            if (nums[leftPointer + 1] === nums[leftPointer]) {
                continue;
            } else {
                leftPointer++;
            }

        } else {

            leftPointer++;
            rightPointer--;

            counterOperationPerformed++;
        }
    }

    return counterOperationPerformed;

};