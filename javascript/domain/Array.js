Array.prototype.myMap = function (callback) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(callback(this[i], i, this));
    }
    return output;
}

Array.prototype.myFilter = function (callback) {
    let output = [];
    for (var i = 0; i < this.length; i++) {

        if (callback(this[i], i, this) === true) {
            output.push(this[i]);
        }
    }

    return output;
}

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (i === 0 && initialValue === undefined) {
            accumulator = this[0];
            continue;
        }
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator;
}
Function.prototype.myCall = function(thisContext, ...args) {
    // Write your code here.
    var s = Symbol()
    thisContext[s] = this;
    var output = thisContext[s](...args);
    delete thisContext[s];
    return output;
  };
  
  Function.prototype.myApply = function(thisContext, args = []) {
    // Write your code here.
    var s = Symbol()
    thisContext[s] = this;
    var output = thisContext[s](...args);
    delete thisContext[s];
    return output;
  };
  
  
  Function.prototype.myBind = function(thisContext, ...args) {
    // Write your code here. 
     return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);
  };