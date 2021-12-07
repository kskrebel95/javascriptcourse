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

//logical operators can take in any datatype and return any data type

// OR operator
//with the || operator the first turthy value is returned : 3
console.log(3 || 'Jonsas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null); //will return null even though both are flasy values

console.log(undefined || 0 || '' || 'Hello' || 'Jonas'); // Returns Hello the first truthy value(can work with any number of values)

//Pratical use (setting default values if a property exists)

//if a property on the resturant object (guests) does not exist, create a default of 10

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// can also say
const guests2 = restaurant.numGuests || 10;

//NOTE :if a value is intended to be 0 it changes to 10 since 0 is falsy

//Can be fixed with the NULLISH operator

restaurant.numGuests = 0;

//The ?? only checks for null or undefined. NOT 0 and ''
const guests4 = restaurant.numGuests ?? 10;
console.log(guests4);

//AND operator

// with the && operator the first falsy value is returned
console.log(0 && 7);
console.log(7 && 'Jonas'); // returns the scond truthy value
console.log(null && undefined);

console.log('Jonas' && 7 && null && 0);

//if resturant.orderPizza exists then call the function with mushrooms and spinach
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// is the same as

//orderPizza exists and call it with mushrooms and spinach
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Coding challenge 1

// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:

// 1. Create one player array for each team (variables 'players1' and
// 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//  1.
const [players1, players2] = game.players;

// my solution

// const [...players1] = game.players[0];
// const [...players2] = game.players[1];

console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];

//my solution
// const allPlayers = [...game.players[0], ...game.players[1]];

console.log(allPlayers);

// 4.

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.

const {
  odds: { team1, x: draw, team2 },
} = game;

//My solution
// const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6.

const printGoals = function (...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(`Goal scored by ${args[i]}`);
  }
  console.log(`Total goals: ${args.length}`);
};

printGoals(...game.scored);

//7.

team1 > team2 && console.log(`Team 1 is more likely to win`);
team1 < team2 && console.log(`Team 2 is more likely to win`);

//For of loop

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu1) console.log(item);

//menu1.enteries contain an array iterator containing every menu item with an array containing the index and value
for (const item of menu1.entries()) {
  console.log(`${item[0] + 1}:${item[1]} `);
}

// Changes to objects in ES6 using resturant object like before

const openingHours1 = {
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
};
const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // when adding an object within an object we can simplyweekdays1[3] say
  openingHours1, //This is done instead of openingHours1=openingHours1,
  //the  : and function keywords are not needed
  order(starter, mainCourse) {
    return [this.starterMenu[starter], this.mainMenu[mainCourse]];
  },

  // can destructure the object in parameters and get 4 variables
  orderDelivery({ address, time, starterIndex, mainIndex }) {
    console.log(
      `Order:${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //another order delivery function with defaults if some objects are missing when called
  orderDelivery1({ address = 'POS', time = '20:00', starterIndex, mainIndex }) {
    console.log(
      `Order:${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderIngredients(ing1, ing2, ing3) {
    console.log(`Ingredient ${ing1},Ingredient ${ing2},Ingredient ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// We can also compute property names

// before we could only compute the values and not the names
const weekdays1 = ['mon', 'tues', 'weds', 'thurs', 'fri', 'sat', 'sun'];
const openingHours2 = {
  [weekdays1[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays1[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${4 + 2}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

//optional Chaining (used to read information from apis)

//MESSY SOLUTION

//this checks to see if openinghours exist and opening hours on a monday
// can get out of hand quickly with alot of nested objects
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);

//Optional chaining SOLUTION

//This line says only if opening hours exists then the mon property will try to be read else undefined is returned
// rules of null coalesing applies so '' or 0 is not falsy
console.log(restaurant.openingHours?.mon);

//can have multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

//Real world example
const days = ['mon', 'tues', 'weds', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[days]?.open;
//   console.log(`We are open on ${day} at ${open}`);
// }

//Since the code above returns undefined  we edit it to return closed on those days and 0 (0 is falsy so we use null coalesing)

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`We are open on ${day} at ${open}`);
}

//Also words with methods

console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

//Arrays

const users = [{ name: 'Jonas', country: 'Niel', age: 15 }];

console.log(users?.[0].name ?? `Array empty`);
