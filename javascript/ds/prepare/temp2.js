

// // // ES % inheritance


// // var Person = function(name, age){
// //     this.name = name;
// //     this.age = age;
// // };

// // Person.prototype.getAge = function(){
// //     return this.age;
// // }

// // Person.prototype.getName = function(){
// //     return this.name;
// // }

// // Person.prototype.isEligibleForVoting = function(){
// //     return this.age >= 18;
// // }


// // var person = new Person('Saraswati', 31);

// // console.log(`Checking eligibility of ${person.name} for voting - ${person.isEligibleForVoting()}`);

// // var Employee = function(id, name, age ,designation = null){
// //     Person.call(this, name, age);
// //     this.id = id;
// //     this.designation = designation;
// // }

// // Employee.prototype = Object.create(Person.prototype);

// // Employee.prototype.contructor = Employee;

// // Employee.prototype.isEligibleForVoting = function(){
// //     console.log(Person.prototype.isEligibleForVoting.call(this));
// //     return this.age >= 40;
// // }
// // var employee = new Employee (1, 'Jon snow', 35, 'lead actor');

// // console.log(`Checking eligibility of ${employee.name} for voting - ${employee.isEligibleForVoting()}`);


// // class Person{
// //     constructor(name){
// //         this.name = name;
// //     }
// //     getName(){
// //         return this.name;
// //     }
    
// // }

// // class Employee extends Person {
// //     constructor(id,name){
// //         super(name);
// //         this.id = id;
// //     }
// //     getDetails(){
// //         console.log(`Name is ${super.getName()} and id is ${this.id}`);
// //     }
// // }

// // var employee = new Employee(1, 'Jon snow');
// // employee.getDetails()


// var debounce = function(func, wait){
//     var timeout;

//     return function(...args){
//         var context = this;
//         clearTimeout(timeout);
//         timeout =  setTimeout(function(){
//             func.apply(context, args);
            
//         }, wait)
//     }
// }



var $ = function(domElem){
    var self = this;
    var elementSelector = function(domSelector){
        self.elem = document.querySelectorAll(domSelector);
		return self;
    }

    self.addClass = function(className){

        if(!!className){
            for(var elem of self.elem)
            {
                elem.classList.add(className);
            }
        }

        return self;
    }

    self.removeClass = function(className){
   
        if(!!className){
            for(var elem of self.elem)
            {
                elem.classList.remove(className);
            }
        }
        return self;
    }

    elementSelector.call(self,domElem);

    return {
        addClass: self.addClass,
        removeClass: self.removeClass
    }
}