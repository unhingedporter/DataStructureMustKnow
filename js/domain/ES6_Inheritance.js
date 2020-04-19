// interface allows us to create contracts other classes / objects have to create.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var PhaseOneCar = (function (_super) {
    __extends(PhaseOneCar, _super);
    function PhaseOneCar(speed, isGPSEnabled) {
        if (isGPSEnabled === void 0) { isGPSEnabled = false; }
        _super.call(this, speed);
        this.isGPSEnable = isGPSEnabled;
    }
    ;
    PhaseOneCar.prototype.setGPSEnable = function (enableGPS) {
        this.isGPSEnable = enableGPS;
    };
    ;
    PhaseOneCar.prototype.getGPSEnable = function () {
        return !!this.isGPSEnable ? true : false;
    };
    ;
    return PhaseOneCar;
})(Car);
;
var car = new PhaseOneCar(44, true);
car.accelerate();
car.accelerate();
car.accelerate();
car.throttle();
console.log(car.getSpeed());
console.log(car.getGPSEnable());
console.log("Number of wheels in the car is " + Car.numberOfWheels());
// we can export class, interface , varible ... by adding export
// export class ExportedClass {
//     // this class can be used in different files after importing it
// }
