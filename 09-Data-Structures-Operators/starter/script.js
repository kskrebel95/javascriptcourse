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
