'use strict';

const Person = function(firstName, birthYear){
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //bad practice
    this.calcAge = function(){
        console.log(2037 - this.birthYear);
    };
};
 
const kavana = new Person('Kavana', 1995);
console.log(kavana);

//a.new empty object is created
//b.function is called, this = {}
//c.newly created object({}) is linked to the prototype
//d.function automatically return {}

const puneeth = new Person('Puneeth', 1990);
const dhanush = new Person('Dhanush', 2012);
console.log(puneeth, dhanush);

const meena = "Meena";

console.log(kavana instanceof Person);
console.log(meena instanceof Person);//false: because we did not create object for the constructor functions

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};
kavana.calcAge();
puneeth.calcAge();

console.log(kavana.__proto__);
console.log(kavana.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(kavana));
console.log(Person.prototype.isPrototypeOf(Person));

//.prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(kavana.species, puneeth.species);

console.log(kavana.hasOwnProperty('firstName'));
console.log(kavana.hasOwnProperty('species'));

console.log(kavana.__proto__);
//Object.prototype (top of prototype chain)
console.log(kavana.__proto__.__proto__);
console.log(kavana.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 4, 6, 9, 8, 2, 1, 7, 9];//new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);