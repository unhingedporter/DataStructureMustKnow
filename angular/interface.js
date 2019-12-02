// interface allows us to create contracts other classes / objects have to create.
var user;
;
//Generics
var numArray; // This array will only accepts numbers
// numArray = ['Number']; //Error Type 'string[]' is not assignable to type 'number[]'
numArray = [1, 2, 3, 4, 5];
//create a class
var Car = (function () {
    function Car(speed) {
        this.speed = speed || 0;
    }
    Car.prototype.accelerate = function () {
        this.speed++;
    };
    Car.prototype.throttle = function () {
        this.speed--;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    // Can be used without instantiating an object
    // not availaible on prototype
    Car.numberOfWheels = function () {
        return 4;
    };
    return Car;
})();
var car = new Car(44);
car.accelerate();
car.accelerate();
car.accelerate();
car.throttle();
console.log(car.getSpeed());
console.log("Number of wheels in the car is " + Car.numberOfWheels());
// we can export class, interface , varible ... by adding export
// export class ExportedClass {
//     // this class can be used in different files after importing it
// }
