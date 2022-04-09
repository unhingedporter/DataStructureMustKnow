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


/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {

    var left = 0;
    s = s.split('');
    var right = s.length - 1;

    var leftPalindromeStatus = true;
    var rightPalindromeStatus = true;

    var considerOneCharRemoved = false;
    while (left <= right) {

        if (s[left] !== s[right]) {
            if (!considerOneCharRemoved) {
                if (s[left] === s[right - 1]) {
                    right--;
                    considerOneCharRemoved = true;
                    // left++
                }
                // else if(s[left + 1] === s[right]) {
                //     left++;
                //     considerOneCharRemoved = true;
                // } 
                else {
                    leftPalindromeStatus = false;
                }
            }
            else {
                leftPalindromeStatus = false;
            }
        }
        left++;
        right--;
    }
    left = 0;
    right = s.length - 1;

    considerOneCharRemoved = false;


    while (left <= right) {

        if (s[left] !== s[right]) {
            if (!considerOneCharRemoved) {

                if (s[left + 1] === s[right]) {
                    left++;
                    considerOneCharRemoved = true;
                }
                else {
                    rightPalindromeStatus = false;
                }
            }
            else {
                rightPalindromeStatus = false;
            }
        }
        left++;
        right--;
    }

    return leftPalindromeStatus || rightPalindromeStatus;

};

/*Given a string s and an integer k, return true if s is a k-palindrome.

A string is k-palindrome if it can be transformed into a palindrome by removing at most k characters from it. */

var isValidPalindrome = function (s, k) {
    const len = s.length;
    let memo = new Array(len).fill(0);
    let prev, temp;
    for (let left = len - 2; left >= 0; left--) {
        prev = 0;
        for (let right = left + 1; right < len; right++) {
            temp = memo[right];

            if (s[left] === s[right]) {
                memo[right] = prev;
            } else {
                memo[right] = 1 + Math.min(memo[right], memo[right - 1]);
            }

            prev = temp;
        }
    }
}