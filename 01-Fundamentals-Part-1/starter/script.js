// Fundamentals 1

// Lecture 1

// let js = 'amazing';

// if (js === 'amazing') alert("JS is fun");
/*
console.log(10 + 20 + 30);

let country = 'Trinidad';
let continent = 'Caribbean';
let population = 160000;

console.log(country, continent, population);

// Lecture 2

let isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);


// Lecture Basic Operations

const now = 2037;

const myAge = now - 1994;
const herAge = now - 1992;

console.log(myAge, herAge);

console.log(myAge * 2, herAge / 2, 2 ** 3);
//2**3 = 2X2x2

const firstName = 'Nirmal';
const lastName = 'Ramkissoon';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;

x += 10; // x=x+10

x *= 10; // x=x*10

x++; //x=x+1

x--; // x=x-1;

console.log(x);

console.log(myAge > herAge); // outputs false.

console.log(herAge >= 18); //outputs true

// Code challenge 1

const markMass = 78;
const markHeight = 1.6;

const johnMass = 92;
const johnHeight = 1.95;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

const markHigherBMI = (markBmi > johnBmi);

console.log(markBmi, johnBmi, markHigherBMI);


// Template strings
//string concatenation
console.log(`Mark's Mass is ${markMass} and his height is ${markHeight}`);

//string with mutiple lines
console.log(`
    This
    is
    string`);


// IFs else

const sarahAge = 19;
const isOldEnough = sarahAge >= 18;

if (isOldEnough) {
    console.log(`Sarah can start drivng`);
} else {
    console.log(`She is too young, she is ${sarahAge}`);
}

// Challenge 2 using challenge 1

if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})`);
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})`);

}

// Type conversion is conversion to another datatype done manually
// Type Coercion is done by javascript which is hidden from us

// Conversion
const inputYear = '1991';

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Neil'));

console.log(String(27));

// Coercion
console.log('23' + 3);
console.log('23' - 3);
console.log('23' / '3');
console.log('23' * '3');
console.log('23' > '3');

console.log(15 - 5 - 5 - 4 + '1'); //outputs '11'


// Falsy values : 0, NaN, undefined, '', null

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean('Bob'));
console.log(Boolean(1));

const money = 0;

if (money) { //false
    console.log("dont spend it all");
} else { //true
    console.log("get a job");
}



//Comparison
// == and != does coercion (bad practice to use)
// === and !== does not do coercion (always use this and do conversion manually)

const favourite = Number(prompt("Enter number:"));

if (favourite === 23) {
    console.log(`23 is a cool number`);
} else if (favourite === 9) {
    console.log(`9 is a cool number`);
} else {
    console.log(`number not cool`);
}

if (favourite !== 10) console.log(`why not 10?`);


const hasGoodVision = true;
const hasDriversLicense = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasGoodVision && hasDriversLicense) {
    console.log('Sarah can drive');
} else {
    console.log(`Let someone else drive`);
}

const isTired = true;

if (hasGoodVision && hasDriversLicense && !isTired) {
    console.log('Sarah can drive');
} else {
    console.log(`Let someone else drive`);
}

*/

//Challenge 3

const dolphinsAverageScore = (196 + 108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 10) / 3;

console.log(`Dolphins Score:${dolphinsAverageScore}
Koalas Score:${koalasAverageScore}`);

if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log('Tie: They both win');
} else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`Dolphis win`);
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log(`Koalas win`);
} else {
    console.log(`No one wins`);
}


