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

['kavana', 'Meena', 'Sahana'].forEach(high5);*/

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