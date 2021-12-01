'use strict';
/*
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

//instance method
Person.hey = function(){
    console.log('Hey there🖐');
    console.log(this);
};
Person.hey();


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

//ES6 class
//class expression
//const PersonCl = class {}

//class declaration
class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    // Set a property that already exists
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name😐`);
    }
  
    get fullName() {
      return this._fullName;
    }

    //static method
    static hey() {
            console.log('Hey there🖐');
            console.log(this);
    }
}

const sahana = new PersonCl('Sahana Meenaganesh', 1995);
console.log(sahana);
puneeth.calcAge();
console.log(sahana.age);
console.log(sahana.__proto__ === PersonCl.prototype);

//PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.firstName}`);
//};
sahana.greet();

PersonCl.hey();

//a. Classes are NOT hoisted
//b. Classes are first-class citizens(We can pass them to the functions and return from the functions as well)
//c. Classes are executed in strict mode

//setters and getters
const account = {
    owner: 'kavana',
    movements: [200,400, 500, 800],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },
};

console.log(account.latest);
account.latest = 100;
console.log(account.movements);

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const ganesh = Object.create(PersonProto);
console.log(ganesh);
ganesh.name = 'Ganesh';
ganesh.birthYear = 1975;
ganesh.calcAge();
console.log(ganesh.__proto__ === PersonProto);

const dhanush = Object.create(PersonProto);
dhanush.init('Dhanush', 1995);
dhanush.calcAge();*/

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const vaish = new Student('Vaish', 2009, 'Computer Science');
console.log(vaish);
vaish.introduce();
vaish.calcAge();

console.log(vaish.__proto__);
console.log(vaish.__proto__.__proto__);

console.log(vaish instanceof Student);
console.log(vaish instanceof Person);
console.log(vaish instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);