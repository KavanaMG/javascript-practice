'use strict';
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements){
    containerMovements.innerHTML = '';
    movements.forEach(function(mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} </div>
            <div class="movements__value">${mov}</div>
        </div>
        
        `;

      containerMovements.insertAdjacentHTML('afterbegin',html);
    });
}
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

const calcDisplayBalance = function(movements){
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} EUR`;
}
calcDisplayBalance(account1.movements);

const createUsernames = function(accs){
    accs.forEach(function(acc){
        acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    }) 
};
createUsernames(accounts);
console.log(accounts);


*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////




//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//ARRAY METHODS
let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice()
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//Splice()
//console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1,2);
console.log(arr);

//Reverse()
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2);
console.log(arr2.reverse());
console.log(arr2);

//Concat()
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//Join()
console.log(letters.join('-'));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for(const movement of movements){
for(const [i, movement] of movements.entries()){
    if(movement > 0){
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    }else{
        console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
    }
}

console.log('----------FOREACH-----------');
movements.forEach(function(mov, i, arr) {
    if(mov > 0){
        console.log(`Movement ${i + 1}: You deposited ${mov}`);
    }else{
        console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
    }
});

//forEach with Maps
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
})

//forEach with Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`);
})


//DATA TRANSFORMATION METHODS
//Map() 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

//const movementsUSD = movements.map(function(mov){
//   return mov * eurToUsd;
//});

//Arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i, ) => {
   
    `Movement ${i + 1}: You  ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`;
});
console.log(movementsDescriptions);

//Filter
const deposits = movements.filter(function (mov, i, arr) {
    return  mov >  0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for(const mov of movements) if(mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
 console.log(withdrawals);

//Reduce
//accumulator = SNOWBALL
/*
const balance = movements.reduce(function(acc, cur, i, arr){
   console.log(`Iteration ${i}: ${acc}`);
   return acc + cur;
}, 0);
*/

//By using arrow function
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov)
        return acc;
    else
        return mov;
}, movements[0]);
console.log(max);

const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);





