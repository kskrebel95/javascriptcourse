'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starter, mainCourse) {
    return [this.starterMenu[starter], this.mainMenu[mainCourse]];
  },

  // can destructure the object in parameters and get 4 variables
  orderDelivery: function ({ address, time, starterIndex, mainIndex }) {
    console.log(
      `Order:${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //another order delivery function with defaults if some objects are missing when called
  orderDelivery1: function ({
    address = 'POS',
    time = '20:00',
    starterIndex,
    mainIndex,
  }) {
    console.log(
      `Order:${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderIngredients: function (ing1, ing2, ing3) {
    console.log(`Ingredient ${ing1},Ingredient ${ing2},Ingredient ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Array destructuring
const arr = [2, 3, 4];
const [x, y, z] = arr;

console.log(x, y, z);

//takes resturant.categories[0] and resturant.categories[2]. Skips [2] with the space. first and second can be called anything
let [first, , second] = restaurant.categories;
console.log(first, second);

//Switching variables with normal way

// const temp = first;
// first = second;
// second = temp;
// console.log(first, secondconsole.log(restaurant.order(2, 0));
//Switching varibales via array destructuring

[first, second] = [second, first];
console.log(first, second);

//calling method order normally

// console.log(restaurant.order(2, 0));

//calling method via destructuring (Return 2 values from function)

const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// Working with nested arrays

const nested = [2, 3, [4, 5]];

//taking first value and array
const [i, , j] = nested;
console.log(i, j);

// first value and array as separated values

const [a, , [b, c]] = nested;
console.log(a, b, c);

//Setting default values for unknown arrays
// Since p and q gets set to 4 , r remains 1 since there is no third value
const [p = 1, q = 1, r = 1] = [4, 4];
console.log(p, q, r);

// Destructuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Destructuring objects with new variable names

const {
  name: resturantName,
  openingHours: hours,
  categories: list,
} = restaurant;

console.log(resturantName, hours, list);

//Setting Defaults (might be working with api and wouldnt know the object)

//Since menu does not exist in resturant the default is []
//Since an array exsists on starterMenu, starters is equal to that array
const { menu = [], starterMenu: staters = [] } = restaurant;
console.log(menu, staters);

//Mutating variables

let w = 111;
let t = 999;

const obj = { w: 23, t: 7, o: 98 };

//Since we cannot have anything assigned to anything in curly brackets { w, t } = obj
//because the browser looks for code We must wrap it in ()
({ w, t } = obj);
console.log(w, t);

//Nested objects

const {
  fri: { open, close },
} = openingHours; //using opening hours variable that was destructured before
console.log(open, close);

restaurant.orderDelivery({
  address: 'Piarco',
  time: '22:30',
  starterIndex: 1,
  mainIndex: 2,
});

restaurant.orderDelivery1({
  starterIndex: 1,
  mainIndex: 2,
});

// Spread operator (unpacking array)

const arrr = [7, 8, 9];

const newBadArray = [1, 2, arrr[0], arrr[1], arrr[2]];
// is the same as
const newGoodArray = [1, 2, ...arrr];
console.log(newBadArray, newGoodArray);

//Unpacks each value in output
console.log(...newGoodArray);

//Spread value similar to destructing but unpacks all values and does not create variables

const newMenu = [...restaurant.mainMenu, 'Gonnci'];

console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Merge array

const mergedArray = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergedArray);

//Spread can work on itterbales.Iterables are arrays, string, maps and sets but NOT objects
// Spread can only work passing as parameters in function or making an array

const str = 'Jonas';
const strSpread = [...str];
console.log(strSpread);

// \ is used in the output so that the ' does not end the string
const ingredients = [
  // prompt("Let's Enter ingredient:"),
  // prompt("Let's Enter ingredient:"),
  // prompt("Let's Enter ingredient:"),
];

restaurant.orderIngredients(...ingredients);

// Objects

const resturantNew = { foundedIn: 1998, ...restaurant };
console.log(resturantNew);

//Object Copy

const resturantCopy = { ...restaurant };
console.log(resturantCopy, restaurant);

//REST (the opposite of spread {used to pack mulitpe values into array})
//called the rest cause it takes the rest of the elements(unused elements)

const [s, , d, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, d, others);

const [pizaa, , risotto, ...otherss] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizaa, risotto, otherss);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//using rest with functions
const add = function (...values) {
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  console.log(total);
};

add(1, 2, 3);

const v = [1, 2, 3];
add(...v);

restaurant.orderPizza('cheese', 'tomato', 'pine', 'chicken', 'ham');

//Short Circuiting
