'use strict';

//function scope
function calcAge(birthYear){
    const age = 2037 - birthYear;
    
    function printAge(){
        const output = ` ${firstName}You are ${age}, born in ${birthYear}`;
        console.log(output);

        //Block scope
        //Creating New Variable with same name as outer scope's variable
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Puneeth';
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            //function is also a block scope
            function add(a, b){
                return a + b;
            }
            console.log(add(2,3));
           
        }
        console.log(millenial);
    }
    printAge();

    return age;
}
//Global scope
const firstName = 'Kavana';
calcAge(1991);