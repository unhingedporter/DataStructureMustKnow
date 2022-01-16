var isPalindrome = function (x) {

    if (x < 0) {
        return false;
    }

    if (x >= 0 && x <= 9) {
        return true;
    }

    var num = 0;
    var origNum = x;
    while (x > 0) {
        var remainder = x % 10;
        num = num * 10;
        num += remainder;
        x = Math.floor(x / 10);
    }

    return origNum === num;

};