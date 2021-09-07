'use strict';

console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
};
calcAge(1997);


const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);
};
calcAgeArrow(1997);


/*const jonas = {
    year: 2000, 
    calcAge: function(){
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();

const matlida = {
    year: 2017,
};
matlida.calcAge = jonas.calcAge;
matlida.calcAge();

const f = jonas.calcAge;
f();
*/

//var firstName = 'matlida';

const jonas = {
    firstName: 'Kavana',
    year: 1995, 
    calcAge: function(){
       // console.log(this);
        console.log(2037 - this.year);

        //solution 1(Regular function)
        /*const self = this;
        const isMillenial = function(){
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
            //console.log(this.year >= 1981 && this.year <= 1996);
        };
        */
       //solution 2(Arrow function)
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    //greet: function(){}
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`)},
};
jonas.greet();
jonas.calcAge();

//arguments keyword in regular functions
const addExpr = function(a,b){
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 7, 9);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};
addArrow(2, 4, 6);




