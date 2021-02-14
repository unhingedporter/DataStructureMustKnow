// maximum sub array element of k element where k = 3

// window sliding technique
// TIME COMPLEXITY O(n)

// Slight variations would be to find consequtive sub array with given sum
var arr = [1, 8, 30, -5, 20, 7];

(function(a) {
    var sum = 0;
    var maxSum = 0;
    for (var i = 0; i < a.length; i++) {

        sum += a[i];

        if (i > 2) {
            sum -= a[i - 3];
        }
        console.log(`the sum at every level is ${sum}`);

        if (maxSum < sum) {
            maxSum = sum;
        }
    }

    console.log(`The maximum sum is  ${maxSum}`);
}(arr));