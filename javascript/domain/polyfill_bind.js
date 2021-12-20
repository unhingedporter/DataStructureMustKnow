// Polyfill

// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
// Polyfill for bind


var printEmployeeInfo = function (salary) {
    console.log(JSON.stringify(salary));
    console.log(`${this.firstName} - ${this.lastName}- ${this.birthYear} - ${salary}`);
}

var employee = {
    firstName: 'Saras',
    lastName: 'Wati',
    birthYear: 1988
};

printEmployeeInfo.call(employee, '10L');
printEmployeeInfo.apply(employee, ['10L']);

// Borrow function
var empInfo = printEmployeeInfo.bind(employee, '15l')();
var empInfo = printEmployeeInfo.poly_bind(employee, '15l')();


// create a polyfill for the bind function

var poly_bind = function (...arg1) {
    var func = this;
    var bindObj = arg1.splice(1, 1);
    return function (...arg2) {
        func.apply(arg1[0], [...arg1, ...arg2])
    }
};

Function.prototype.poly_bind = poly_bind;

//call, apply and bind will not work with arrow functions
//because (arrow functions) doesn't create new functional context and use context of a calling function.