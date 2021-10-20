'use strict'; // helps with fixing errors
// Functions
/*
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice made with ${apples} Apples and ${oranges} Oranges`;
    return juice;
}
//call / invoke / running function
fruitProcessor(5, 0);

const juice = fruitProcessor(5, 0);
console.log(juice);
// or can log saying
console.log(fruitProcessor(5, 0));

// Declarations

function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1994);
console.log(age1);

// Expressions

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1994);
console.log(age2);

// Arrow functions

//with one parameter and one line of code
const calcAge3 = birthYear => 2021 - birthYear;

const age3 = calcAge3(1995);
console.log(age3);

// with multiple lines of code
const calcAge4 = birthYear => {
    return 2021 - birthYear
}

console.log(calcAge4(1993));

// with mutliple parameters and multiple lines of code
const calcAge5 = (birthYear, firstName) => {
    return `${firstName} age is  ${2021 - birthYear}`;
}

console.log(calcAge5(1994, 'Neail'));

//Challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

function checkWinner(dolphinsAverage, koalasAverage) {
    if (dolphinsAverage >= koalasAverage * 2) {
        console.log(`Dolphins win Dolphins:${dolphinsAverage} vs Koalas:${koalasAverage}`);
    } else if (dolphinsAverage * 2 <= koalasAverage) {
        console.log(`Koalas win Dolphins:${dolphinsAverage} vs Koalas:${koalasAverage}`);
    } else {
        console.log(`No winner! Dolphins:${dolphinsAverage} vs Koalas:${koalasAverage}`);
    }
}
checkWinner(dolphinsAverage, koalasAverage);
*/

// Arrays 

const friends = ['michael', 'peter', 'glen'];

console.log(friends);
console.log(friends.length); // logs the amount of elements in the array

console.log(friends.length - 1); // logs the last element in the array
