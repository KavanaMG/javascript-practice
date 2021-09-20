'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

//String methods
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

//Extracting the first word
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//Extracts last two letters from Portugal
console.log(airline.slice(-2));

console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
    //B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') console.log('You got the middle seat😲')
    else console.log('You got lucky😎');
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Boxing(wrapping an object around a primitive value)
console.log(new String('Kavana'));
console.log(typeof new String('Kavana'));

console.log( typeof new String('Kavana').slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'KavAna';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const passenger1 = 'puNeETh';
const passengerLower1 = passenger1.toLowerCase();
const passengerCorrect1 = passengerLower1[0].toUpperCase() + passengerLower1.slice(1);
console.log(passengerCorrect1);

//Comparing emails
const email = 'hello@kavana.io';
const loginEmail = 'Hello@Kavana.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97@';
const priceUS = priceGB.replace('@', '$').replace(',' , '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//Regular Expression
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if(plane1.startsWith('Airbus') && plane.endsWith('neo')){
    console.log(`Part of the NEW Airbus family `);
}

//Practice
const checkkBaggage = function(items){
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are NOT allowed on board');
    }else{
        console.log('Welcome aboard');
    }
};
checkkBaggage('I have a laptop, some Food and a Pocket Knife');
checkkBaggage('Socks and camera');
checkkBaggage('Got some snacks and a  gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Hello World'.split(' '));

const [firstName, lastName] = 'Kavana PuneethKumar'.split(' ');
const myName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(myName);

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names){
      // namesUpper.push(n[0].toUpperCase() + n.slice(1));
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('sahana and dhanush');
capitalizeName('kavana');

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('kavana'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(4346787386890898767));
console.log(maskCreditCard('8754332456789987'));

//Repeat
const message2 = 'Bad Weather...All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈'.repeat(n)} `);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);

////////////////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for(const flight of flights.split('+')){
   const [type, from, to, time] = flight.split(';');
   const output = `${type.startsWith('_Delayed') ? '🔴':''}${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replaceAll(':','h')})`.padStart(36);
   console.log(output);
}
