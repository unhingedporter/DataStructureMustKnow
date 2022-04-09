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

// If division is allowed
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




// IF division is not allowed
// Take two array left and right 
/*
[2,3,4,5]

left  [1,1,1]
      [1,2,6,24]  

right [60,20,5,1]

Multiplication: [60,40,30,24]

*/

var productExceptSelf = function (arr) {
        var leftArr = [];
        var rightArr = [];
        
        leftArr.length = arr.length;
        rightArr.length = arr.length;
        
        leftArr.fill(1);
        rightArr.fill(1);
        
        for(var i = 1; i< leftArr.length; i++){
            leftArr[i] = leftArr[i - 1] * arr[i - 1];       
        }
        
        for(var j=rightArr.length - 2; j>=0; j-- ){
            rightArr[j] = rightArr[j+1] * arr[j+1];        
        }
        
        console.log("Left multiplication is " + leftArr);
        console.log("right multiplcation is " + rightArr);
        
        var multiplicationArr = [];
        
        for(var i=0; i < arr.length; i++){
            multiplicationArr[i] = leftArr[i] * rightArr[i];
        }
        
        return multiplicationArr;
        
    
    };