// Good articles - https://www.geeksforgeeks.org/tag/prefix-sum/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


class SortAlgo {

    arr = []
    constructor(arr) {
        this.arr = arr
    }

    swap(arr, former, later) {

        arr[former] = arr[former] + arr[later]
        arr[later] = arr[former] - arr[later]
        arr[former] = arr[former] - arr[later]

    }

    bubbleSort() {
        var temp = this.arr;
        for (var i = 0; i < temp.length - 1; i++) {
            for (var j = 0; j < temp.length - 1; j--) {
                if (temp[j] > temp[j + 1]) {
                    this.swap(temp, j - 1, j);
                }
            }
        }
        console.log(temp)

        return temp;
    }

    insertionSort() {
        var temp = this.arr;
        for (var i = 1; i < temp.length; i++) {
            for (var j = i - 1; j >= 0; j--) {
                if (temp[j - 1] > temp[j]) {
                    this.swap(temp, j - 1, j);
                }
            }
        }
        console.log(temp)

        return temp;
    }


    getSum() {
        var temp = this.arr;
        // find the sum between two given indices

        // sum between range l and r
        // prefix_sum[r] - prefix_sum[l-iterator]
        // if iterator = 0
        // prefix[r]
    }

    getEquilibriumPoint() {

        // -20 is the equilibrium point
        // [3,4,8,-9,20,6]

        // Total_sum - left_sum = left_sum

        // prefix_sum[i-1] == suffix_sum[i+1]
    }

    getRanges() {
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

    }

    isEligibleForDivideInThreePartEqualSum() {


        var arr = [1, 2, 3, 6, 9, -3]
        //  check if the sum is divisible by 3
        // find three subarry where sum is equal to Sum(Arr)/3

        // [1, 3, 6,]


    }

    findLongestEqualNumberof0and1() {

        //     uses Hashmap to arrive at the solution.

        // Approach: The concept of taking cumulative sum, taking 0’s as -1 will help us in optimising the approach. While taking the cumulative sum, there are two cases when there can be a sub-array with equal number of 0’s and 1’s.
        //     One, when cumulative sum=0, which signifies that sub-array from index (0) till present index has equal number of 0’s and 1’s.
        //     Two, when we encounter a cumulative sum value which we have already encountered before, which means that sub-array from the previous index+1 till the present index has equal number of 0’s and 1’s as they give a cumulative sum of 0 .

        // [1,1,1,1,1,1,0,0,0,1,1,1,0, 0]
        // consider 0 as -1

        //         const test = {a: 1, b: 2, c: 3};

        // for (const [key, value] of Object.entries(test)) {
        //   console.log(key, value);
        // }

        // Object.keys(obj).forEach(function (key) {
        //     // do something with obj[key]
        //  });

        a = [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]

        a.forEach(function (key, val) {
            console.log(`${key} -- ${val}`)
        });
        for (key, val) of a {
            console.log(`${key} -- ${val}`)
        }

    }





}
var a = [45, 12, 12, 121, 11, 11, 7, 88, 99, -8, -466666, 50, 1, 2, 3, 5, 8, 9]

var b = new SortAlgo(a)


console.log(`Sort Algo for the given array is ${b.insertionSort()}`)


