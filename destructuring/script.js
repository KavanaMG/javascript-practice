'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours= {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
  }
};



const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables are arrays, strings, maps, sets, NOT objects
const str = 'kavana';
const letters = [...str,'','S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} schedtmann`);

//example
const ingredients = [prompt("Let\'s make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3'), ];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {founderIn: 1998, ...restaurant, founder:'Puneeth'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


/*
///////Destructuring Objects////////
restaurant.orderDelivery({
    time: '22:30',
    address: 'via del sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

const { name, opening, categories} = restaurant;
console.log(name, opening, categories);

const {name: restaurantName, openingHours:hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//setting a default value
const {menu = [], starterMenu:starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a:23, b:7, c:14};
({a,b} = obj);
console.log(a, b);

//nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);*/

/*
//////////Destructuring arrays//////////
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring arrays
const[x, y, z] = arr;
console.log(x, y, z);
console.log(arr);


let[main, ,second] = restaurant.categories;
console.log(main, second);

//without destructuring
const temp = main;
main = second;
second = temp;
console.log(main, second);

//with destructuring
[main, second] = [second, main];
console.log(main, second);

//receives two return values from a function
const [starter,  mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//destructuring nested array
const nested = [2, 4, [5, 6]];
//const[i, ,j] = nested;
//console.log(i, j);
const[i, , [j,k]] = nested;
console.log(i, j, k); */



