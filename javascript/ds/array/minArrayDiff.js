
var minimumAbsDifference = function (arr) {

    var arr = arr.sort((a, b) => a - b);
    var minimumDiff = Number.MAX_VALUE;
    var minOrder = [];
    var currentDiff;


    for (var index = 0; index < arr.length - 1; index++) {
        currentDiff = Math.abs(arr[index] - arr[index + 1]);
        minimumDiff = Math.min(minimumDiff, currentDiff);
    }

    for (var index = 0; index < arr.length - 1; index++) {
        currentDiff = Math.abs(arr[index] - arr[index + 1]);

        if (minimumDiff === currentDiff) {
            minOrder.push([arr[index] <= arr[index + 1] ? arr[index] : arr[index + 1], arr[index] >= arr[index + 1] ? arr[index] : arr[index + 1]])
        }

    }

    return minOrder;



};