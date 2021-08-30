/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

var a = [3, 4, 5]

Array.prototype.rotate = function (n) {
    n = n % this.length;
    while (this.length && n < 0) n += this.length;
    this.push.apply(this, this.splice(0, n));
    return this;
}
a.rotate(1);
a.map(function (p, q) {

    if (q === a.length) {
        return 0;
    }
    return q;
}).map(function (p, q) {


    return a[q] * p;
})


var a = [3, 4, 5]


var a = [3, 4, 5]

Array.prototype.rotate = function (n) {
    n = n % this.length;
    while (this.length && n < 0) n += this.length;
    this.push.apply(this, this.splice(0, n));
    return this;
}
a.rotate(1);

a.map(function (p, q) {
    if (q === a.length - 1) {
        return 0;
    }
    return q + 1;
}).map(function (p, q) {
    return a[q] * a[p];
})


var productExceptSelf = function (arr) {


    var multiplyAllElem = arr.reduce((a, c) => {

        if (c === 0) {
            return a > 0 ? 1 : -1;
        } else {
            return a * c
        }
    }, 1);

    var zeroPresent = arr.filter((a) => { return a === 0 }).length !== 0;

    var uniqueElement = new Set(arr);

    if (zeroPresent && uniqueElement.size === 1) {
        return arr;
    }

    return arr.map((p, q) => {
        if (p === 0) {
            return multiplyAllElem;
        } else {
            return zeroPresent ? 0 : multiplyAllElem / p;
        }

        return multiplyAllElem / p;
    });


};