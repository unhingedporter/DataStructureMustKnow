// What is a Design Pattern ?

//   In software engineering, a design pattern is a reusable solution for commonly occurring problems in software design.Design patterns represent the best practices used by the experienced software developers.
// A design pattern can be thought of as a programming template.

// The design patterns give software developers a common vocabulary to talk about.They show the intent of your code instantly to someone learning the code.


// Module Pattern

// A Module is a piece of self - contained code so we can update the Module without affecting the other parts of the code.Modules also allow us to avoid namespace pollution by creating a separate scope for our variables.We can also reuse modules in other projects when they are decoupled from other pieces of code.


// After the code is executed, the myModule variable looks like this:

const myModule = {
  publicMethod: function () {
    privateMethod();
  }
};

// So we can call the publicMethod() which will, in turn, call the privateMethod().For example:


// Revealing Module Pattern

// The Revealing Module pattern is a slightly improved version of the module pattern by Christian Heilmann.The problem with the module pattern is that we have to create new public functions just to call the private functions and variables.


const myRevealingModule = (function () {

  let privateVar = 'Peter';
  const publicVar = 'Hello World'; function privateFunction() {
    console.log('Name: ' + privateVar);
  }

  function publicSetName(name) {
    privateVar = name;
  } function publicGetName() {
    privateFunction();
  }  /** reveal methods and variables by assigning them to object     properties */return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();


myRevealingModule.setName('Mark');// prints Name: Mark
myRevealingModule.getName();



// Singleton Pattern

// A Singleton is an object which can only be instantiated only once.A singleton pattern creates a new instance of a class if one doesn’t exist.If an instance exists, it simply returns a reference to that object.Any repeated calls to the constructor would always fetch the same object.

// Singleton pattern can be implemented using the constructor function.For example:

let instance = null; function User() {
  if (instance) {
    return instance;
  } instance = this;
  this.name = 'Peter';
  this.age = 25;

  return instance;
} const user1 = new User();
const user2 = new User();// prints true
console.log(user1 === user2);


// Factory Pattern

// Factory Pattern is a pattern that uses factory methods to create objects without specifying the exact class or constructor function from which the object will be created.

// The factory pattern is used to create objects without exposing the instantiation logic.This pattern can be used when we need to generate a different object depending upon a specific condition.For example:

class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'brand new';
    this.color = options.color || 'white';
  }
} class Truck {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || 'used';
    this.color = options.color || 'black';
  }
} class VehicleFactory {
  createVehicle(options) {
    if (options.vehicleType === 'car') {
      return new Car(options);
    } else if (options.vehicleType === 'truck') {
      return new Truck(options);
    }
  }
}

// Here I have created a Car and a Truck class (with some default values) which is used to create new car and truck objects.And I have defined a VehicleFactory class to create and return a new object based on vehicleType property received in the options object.

const factory = new VehicleFactory(); const car = factory.createVehicle({
  vehicleType: 'car',
  doors: 4,
  color: 'silver',
  state: 'Brand New'
}); const truck = factory.createVehicle({
  vehicleType: 'truck',
  doors: 2,
  color: 'white',
  state: 'used'
});// Prints Car {doors: 4, state: "Brand New", color: "silver"}
console.log(car);// Prints Truck {doors: 2, state: "used", color: "white"}
console.log(truck);

// I have created a new object factory of VehicleFactory class.After that we can create a new Car or Truck object by calling factory.createVehicle and passing an options object with a vehicleType property with a value of car or truck.
// Decorator Pattern

// A Decorator pattern is used to extend the functionality of an object without modifying the existing class or constructor function.This pattern can be used to add features to an object without modifying the underlying code using them.

// A simple example of this pattern would be:

function Car(name) {
  this.name = name;  // Default values
  this.color = 'White';
}// Creating a new Object to decorate
const tesla = new Car('Tesla Model 3');// Decorating the object with new functionalitytesla.setColor = function(color) {
this.color = color;
}tesla.setPrice = function (price) {
  this.price = price;
}tesla.setColor('black');
tesla.setPrice(49000);// prints black
console.log(tesla.color);
/*
A more practical example of this pattern would be:

Let’s say, the cost of a car differs depending upon the number of features it has.Without decorator pattern, we would have to create different classes for different combinations of features, each having a cost method to calculate the cost.For example:
*/
class Car() {
}class CarWithAC() {
}class CarWithAutoTransmission {
} class CarWithPowerLocks {
} class CarWithACandPowerLocks {
}

But with decorator pattern, we can create a base class Car and add the cost of different configuration to its object using the decorator functions.For example:

class Car {
  constructor() {
    // Default Cost
    this.cost = function () {
      return 20000;
    }
  }
}// Decorator function
function carWithAC(car) {
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 500;
  }
}// Decorator function
function carWithAutoTransmission(car) {
  car.hasAutoTransmission = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 2000;
  }
}// Decorator function
function carWithPowerLocks(car) {
  car.hasPowerLocks = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 500;
  }
}

/*First, we create a base class Car for creating the Car objects.Then, we create the decorator for the feature we want to add onto it and pass the Car object as a parameter.Then we override the cost function of that object which returns the updated cost of the car and adds a new property to that object to indicate which feature has been added.

To add a new feature, we could do something like this:
*/
const car = new Car();
console.log(car.cost()); carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);

// In the end, we can calculate the cost of the car like this:

// Calculating total cost of the car
console.log(car.cost());