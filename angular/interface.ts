// interface allows us to create contracts other classes / objects have to create.


interface User {
    username: string,
    password: string,
    confirmPassword?: string // Optional property ==> Does not have to be implemented
}

let user: User;

interface CanDrive {
    accelerate(speed: number): void
};

//Generics

let numArray: Array<number>; // This array will only accepts numbers

// numArray = ['Number']; //Error Type 'string[]' is not assignable to type 'number[]'

numArray = [1, 2, 3, 4, 5];

//create a class


class Car {
    engineName: string;
    gears: number;
    private speed: number;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle(): void {
        this.speed--;
    }

    getSpeed(): number {
        return this.speed;
    }


    // Can be used without instantiating an object
    // not availaible on prototype
    static numberOfWheels(): number {
        return 4;
    }
}

let car = new Car(44);
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



