var isMonotonic = function (arr) {
    var isDecreasing = false,
        isIncreasing = false;

    for (var i = 1; i < arr.length; i++) {

        if (!isIncreasing && !isDecreasing) {
            if (arr[i] > arr[i - 1]) {
                isIncreasing = true;
            } else if (arr[i] < arr[i - 1]) {
                isDecreasing = true;
            }
        }

        if (isIncreasing) {
            if ((arr[i] < arr[i - 1])) {
                return false;
            }
        }
        if (isDecreasing) {
            if ((arr[i] > arr[i - 1])) {
                return false;
            }
        }
    }
    return true;
};