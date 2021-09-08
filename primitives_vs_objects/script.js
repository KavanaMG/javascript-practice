'use strict';

//primitive tpes
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//objects
const me = {
    name: 'Kavana',
    age: 28,
};
const friend = me;
friend.age = 26;
console.log('Friend:', friend);
console.log('Me:', me);

//primitive types
let lastName = 'Ganesh';
let oldLastName = lastName;
lastName = 'Puneeth';
console.log(lastName, oldLastName);

//reference types
const kavana = {
    firstName: 'Kavana',
    lastName: 'Ganesh',
    age: 24,
};
const marriedKavana = kavana;
marriedKavana.lastName = 'Puneeth';
console.log('Before Marriage:', kavana);
console.log('After Marriage:', marriedKavana);
//marriedKavana = {};

//copying the objects
const kavana2 = {
    firstName: 'Kavana',
    lastName: 'Ganesh',
    age: 24,
    family: ['Meena', 'Sahana']
};

const kavanaCopy = Object.assign({}, kavana2);
kavanaCopy.lastName = 'Puneeth';

//manipulating the objects within objects.
kavanaCopy.family.push('Dhanush');
kavanaCopy.family.push('Hemanth');

console.log('Before Marriage:', kavana2);
console.log('After Marriage:', kavanaCopy);