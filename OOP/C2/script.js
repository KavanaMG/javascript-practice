/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

*/

class Car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at the speed of ${this.speed} km/h`);
    }

    brake(){
        this.speed -= 5;
        console.log(`${this.make} is going at the speed of ${this.speed}km/h`);
    }

    get speedUs(){
        this.speed /= 1.6;
        console.log(`${this.make} current speed is ${this.speed}}mi/h`);
    }

    set speedUs(speed){
        this.speed *= 1.6;
        console.log(`${this.make} current speed is ${this.speed}mi/h`);
    }
}

const carr = new Car('Ford', 120);
carr.accelerate();
carr.brake();
carr.brake();
carr.speedUs = 100;
console.log(carr);
