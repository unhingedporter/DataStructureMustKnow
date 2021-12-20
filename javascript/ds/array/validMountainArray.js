/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {


    if (arr.length < 3) {
        return false;
    }

    var isIncreasing = false;
    var isDecreasing = false;
    for (var index = 0; index < arr.length - 1; index++) {



        if (arr[index + 1] === arr[index]) {
            return false;
        }
        if (arr[index + 1] > arr[index]) {
            if (isIncreasing && !isDecreasing) {
                continue;
            }
            if (isDecreasing) {
                return false;
            }
            isIncreasing = true;

        } else if (arr[index + 1] < arr[index]) {
            if (!isDecreasing && !isIncreasing) {
                return false;
            }
            if (isDecreasing) {
                continue;
            }
            if (isIncreasing) {
                isDecreasing = true;
            }
        }

    }
    return isIncreasing && isDecreasing;

};


console.log(validMountainArray([3, 5, 5]));
/*
[2,1]
[3,5,5]
[0,3,2,1]
[0,1,2,1,2]
[1,1,1,1,1,1,1,2,1]
[2,1,2,3,5,7,9,10,12,14,15,16,18,14,13]
 */