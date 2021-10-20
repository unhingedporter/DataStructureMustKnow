var reverseString = function (s) {

    var left = 0, right = s.length - 1;

    var swap = function (arr, left, right) {

        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        return arr;
    }

    while (left < right) {
        s = swap(s, left, right);
        left++;
        right--;

    }

    return s;

};


var frequencySort = function (s) {

    var strArr = s.split('');
    var map = new Map();

    for (var iterator = 0; iterator < strArr.length; iterator++) {
        var elem = strArr[iterator];
        if (!!map.get(elem)) {
            map.set(elem, map.get(elem) + 1);
        } else {
            map.set(elem, 1);
        }
    }

    var arr = [...map.entries()].sort((p, q) => { return q[1] - p[1] });
    return arr.map((elem) => {
        return elem[0].repeat(elem[1]);
    }).join('');

};

var isPalindrome = function (s) {

    var filteredString = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    return filteredString === filteredString.split('').reverse().join('');

};