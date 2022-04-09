
Array.prototype.myMap = function (callback) {

    let output = [];

    for (let i = 0; i < this.length; i++) {
        output.push(callback(this[i], i, this))
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


Array.prototype.myReduce = function(callback, initialVal){
    
}