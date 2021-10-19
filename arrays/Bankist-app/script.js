'use strict';

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

const displayMovements = function(movements, sort = false){
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a,b) => a - b) : movements

    movs.forEach(function(mov, i){
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} </div>
            <div class="movements__value">${mov}EUR</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin',html);
    });
}
displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

const calcDisplayBalance = function(acc){
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}EUR`;
}

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}EUR`;
  
    const out = acc.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}EUR`;
  
    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate) / 100)
      .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}EUR`;
};


//computing username
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

const updateUI = function(acc) {
    //Display movements
    displayMovements(acc.movements);

    //Display balance
    calcDisplayBalance(acc);

    //Display summary
    calcDisplaySummary(acc);
};

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin ===  Number(inputLoginPin.value)){
//Display UI and  message
    labelWelcome.textContent = `Welcome back,  ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
//clearing the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

//update UI
    updateUI(currentAccount);      
  }
});

btnTransfer.addEventListener('click', function(e){
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username){
       //Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

       //update UI
        updateUI(currentAccount); 
    }
});

btnLoan.addEventListener('click', function(e){
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
        //Add movement
        currentAccount.movements.push(amount);

        //Update UI
        updateUI(currentAccount);
    };
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function(e){
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);
        // .indexOf(23)
    
        // Delete account
        accounts.splice(index, 1);
    
        // Hide UI
        containerApp.style.opacity = 0;
      }
    
      inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////




const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//ARRAY METHODS
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice()
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//splice()
//console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1,2);
console.log(arr);

//reverse()
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
//map() 

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

//filter()
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

//reduce()
//accumulator = SNOWBALL
/*
const balance = movements.reduce(function(acc, cur, i, arr){
   console.log(`Iteration ${i}: ${acc}`);
   return acc + cur;
}, 0);


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
console.log(max);*/

//Magic of chaining methods
const eurToUsd = 1.1;
//PIPELINE
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

/*
//using the third parameter of call back function
const totalDepositsUSD = movements.filter(mov => mov < 0)
.map((mov, i,arr) =>{
    console.log(arr);
    return mov * eurToUsd;
})
.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

//find()
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


console.log(movements);
//checks for equality
console.log(movements.includes(-130));

//some()
//checks for condition
console.log(movements.some(mov  => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//every():if every value pass the test cases in callback function then it returns true
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//flat()
const arr =  [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep =  [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
/*
const  accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);
*/

const overallBalance =  accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatMap(): Combines flat() and map()
const overallBalance2 =  accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

//Strings
const owners = ['Kavana', 'Puneeth', 'Meena', 'Ganesh'];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);
console.log(movements.sort());

//return < 0, A, B (Keep order)
//return > 0, B, A (switch order)

//returns in ascending order
/*movements.sort((a, b) => {
    if(a > b) return 1;
    if(b > a) return -1;
});*/

movements.sort((a, b) => a - b);
console.log(movements);

//returns in descending order
/*movements.sort((a, b) => {
    if(a > b) return -1;
    if(a < b) return 1;
});*/
movements.sort((a, b) => b - a);
console.log(movements);


