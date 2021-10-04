'use strict';
/*
const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
     //ES5
    // numPassengers = numPassengers || 1;
   // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 880);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

const flight = 'LH345';
const kavana = {
    name: 'Kavana PuneethKumar',
    passport: 4545662547653,
};

const checkIn = function(flightNum, passenger){
    flightNum = 'LH789';
    passenger.name = 'Mrs.' + passenger.name;

    if(passenger.passport === 4545662547653){
        alert('check in')
    }else{
        alert('Wrong passport')
    }
    
}

//checkIn(flight, kavana);
//console.log(flight);
//console.log(kavana);

//Is the same as doing...
//const flightNum = flight;
//const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000);
}

newPassport(kavana);
checkIn(flight, kavana);


const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
};
document.body.addEventListener('click', high5);

['kavana', 'Meena', 'Sahana'].forEach(high5);

//Functions returning Functions
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('kavana');
greeterHey('Meena');

greet('Hello')('kavana');

//challenge
const greetArr = greeting => name => console.log(`${greeting}${name}`);
greetArr('Hi')('Kavana');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function() {}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`,name});
    },
};
lufthansa.book(236, 'Kavana');
lufthansa.book(345, 'Puneeth');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

//Does not work
//book(23, 'Sarah williams');

//call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 456, 'Meena Ganesh');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Airlines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 786, 'Dhanush');
console.log(swiss);

//apply method
const flightData = [583, 'George cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Kavana');
bookEW23('Sahana');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
//lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application(preset parameters)

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));


const runOnce = function(){
    console.log('This will never run again');
};
runOnce();

//Immediately Invoked Function Expression(IIFE)
(function(){
    console.log('This will never run again');
    const isPrivate = 23;
})();

//console.log(isPrivate);

(() => console.log('This will also never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);


const secureBooking = function() {
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);*/
//Example 1
let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    };
};

const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    };
};
g();
f();

//Re-assigning f functions
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
  
    setTimeout(function () {
      console.log(`We are now boarding all ${n} passengers`);
      console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
  
    console.log(`Will start boarding in ${wait} seconds`);
  };
  
const perGroup = 1000;
boardPassengers(180, 3);