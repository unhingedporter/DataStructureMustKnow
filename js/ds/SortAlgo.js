var SortAlgo = (function () {
    function SortAlgo(arr) {
        this.arr = [];
        this.arr = arr;
    }
    SortAlgo.prototype.swap = function (arr, former, later) {
        arr[former] = arr[former] + arr[later];
        arr[later] = arr[former] - arr[later];
        arr[former] = arr[former] - arr[later];
    };
    SortAlgo.prototype.insertionSort = function () {
        var temp = this.arr;
        for (var i = 1; i < temp.length; i++) {
            for (var j = i - 1; j >= 0; j--) {
                if (temp[j - 1] > temp[j]) {
                    this.swap(temp, j - 1, j);
                }
            }
        }
        console.log(temp);
        return temp;
    };
    SortAlgo.prototype.getSum = function () {
        var temp = this.arr;
        // find the sum between two given indices
        // sum between range l and r
        // prefix_sum[r] - prefix_sum[l-iterator]
        // if iterator = 0
        // prefix[r]
    };
    SortAlgo.prototype.getEquilibriumPoint = function () {
        // -20 is the equilibrium point
        // [3,4,8,-9,20,6]
        // Total_sum - left_sum = left_sum
        // prefix_sum[i-1] == suffix_sum[i+1]
    };
    SortAlgo.prototype.getRanges = function () {
        // var l = []
        // var r = []
        // var arr = []
        // for (var i = 0; i < l.length; i++) {
        //     arr[l[i]] += 1
        //     arr[r[i] + 1] -= 1
        // }
        // //Do prefix sum and the maximum element is the most occuring element 
        // var max = Math.max(arr)
        // return max
    };
    return SortAlgo;
})();
var a = [45, 12, 12, 121, 11, 11, 7, 88, 99, -8, -466666, 50, 1, 2, 3, 5, 8, 9];
var b = new SortAlgo(a);
console.log("Sort Algo for the given array is " + b.insertionSort());
