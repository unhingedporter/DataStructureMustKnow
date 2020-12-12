// “Inheritance is a mechanism of acquiring features and behaviours of a class by another class.”

// What is Class?

// To understand inheritance, we need to understand about class in JavaScript. Classes are the basic concepts of any Object Oriented Programming. In JavaScript every function act as class.

// For Ex:

function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

// In above example Person is a function which takes two parameters, fName, lName and bind those to the this reference. When we use new keyword while calling Person function, the person function itself work as class and its constructor function. It create its own scope and this refer to that scope.

var p1 = new Person('unhinged ', 'potter');

// In the above example p1 is the instance of class Person and we are passing two values to constructor function of class Person. The code in constructor function bind fName and lName values to firstName and lastName properties respectively of newly created scope of the Person class.

//  Using prototype Object

// A prototype object is the shared space of a class instances. When any property of method of class is being accessed, JS interpreter first lookup that property in that object if it is not available, then it lookup into its prototype, if it is not there, then lookup into its parent’s prototype and so on.

// Every object has __proto__ property pronounced as “dunder proto” which holds reference of prototype object.

// For Ex:

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

// In the above example, method getFullName is created on prototype of Person. When we try to access p1.getFullName(), JS engine first try to access that property on that object, as it is not available on p1, it goes to __proto__ and try to access that property, once JS engine found getFullName, it execute it in that context.

p1.hasOwnProperty('firstName'); // Returns true
p1.hasOwnProperty('lastName'); // Returns true
p1.hasOwnProperty('getFullName'); // Returns false

// In the above example, p1 has its own properties firstName and lastName as they are exist on that object, but it doesn’t has method getFullName as it is not exist on that object but exist on its prototype.

//   Inheritance basics

// Inheritance is inheriting features of one class by another class. Inheritance supports reusability, when we want to create new class, when there is another class with some features, we create another class which derives from that class and add extra features over it.

//     Inheritance in JavaScript

// JavaScript supports both, classical inheritance and prototypal inheritance. It follows same procedure as other Object oriented supported languages follows. JavaScript only supports single and multi-level inheritance.

// Lets try with following example.

// Problem statement:

// Person is the base class which has two properties, firstName and lastName of the person. It also has a method getFullName which returns fitstName and lastName of the person.

// Employee is the class which is inherited from Person class and has property empId and a method getEmpInfo which returns an array having values [empId, firstName, lastName].

// Now, lets implement this scenario in JavaScript.

// Create base class

// Create Person as base class.

function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

// Create methods on prototype of the Person class

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

// Create child class

// Create Employee class and call its base class with required parameters.

function Employee(fName, lName, eId) {
    Person.call(this, fName, lName);
    this.empId = eId;
}

// In the above example, we are executing constructor of Person class from the constructor function of Employee class in Employee class’s scope. It is similar to calling super.

// Inherit prototype object

// Create prototype object for Employee class from Person class.

Employee.prototype = Object.create(Person.prototype);

// Here we are creating new object from Person.prototype and assigning it to prototype object of Employee class.

// We recreated prototype object for Employee class, but here we missed something. What?? We copied prototype from Person class and hence we lost constructor function of Employee class.

// Reassign constructor function.

Employee.prototype.constructor = Employee;

// Now we are ready to add methods over the prototype of Employee class.

// Add methods on prototype of child class

Employee.prototype.getEmpInfo = function() {
    return [this.empId, this.firstName, this.lastName];
}

// Now we can create instance of Employee class and can access properties and methods of Person class too from that instance.

var e1 = new Employee('Jhon', 'Doe', 10);
e1.getFullName();
e1.getEmpInfo();

// Hola!! We implemented inheritance in JavaScript. :)


/*


class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    empCode: number;

    constructor(empcode: number, name: string) {
        super(name);
        this.empCode = empcode;
    }

    displayName(): void {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
    }
}

let emp = new Employee(100, "Bill");
emp.displayName(); // Name = Bill, Employee Code = 100


*/