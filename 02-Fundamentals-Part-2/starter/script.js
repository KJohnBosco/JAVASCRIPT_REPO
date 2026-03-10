'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D")

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log("My name is Jonas");
}

// Calling / Running / Invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// Function Declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1991);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName}, retires in ${retirement} years`;
}

console.log(yearsUntillRetirement(1991, 'Jonas'));
console.log(yearsUntillRetirement(1980, 'Bob'));

// Cut fruit function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntillRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has alredy reitired 🎉`);
        return -1;
    }

    // return `${firstName}, retires in ${retirement} years`;
}

console.log(yearsUntillRetirement(1991, 'Jonas'));
console.log(yearsUntillRetirement(1950, 'Mike'));

// Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = [1991, 1984, 2008, 2020];

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// Note: You cannot change a constant array but you can mutate it

const firstName = "Jonas";
const jonas = [firstName, "Schedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);

// Exercise
const calAge = function (birthYear) {
    return 2037 - birthYear;
}
const Years = [1990, 1967, 2002, 2010, 2018];

const age1 = calAge(Years[0]);
const age2 = calAge(Years[1]);
const age3 = calAge(Years[Years.length - 1]);
console.log(age1, age2, age3);

const ages = [calAge(Years[0]), calAge(Years[1]), calAge(Years[Years.length - 1])];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

// Adds element to the end of an array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Adds element to the beginning on an array
friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last item
const popped = friends.pop();

console.log(popped);
console.log(friends);

friends.shift(); // First item
console.log(friends);

// Returns index of an element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// Includes method
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

// If
if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "Teacher",
    friends: ["Michael", "Peter", "Steven"]
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"])

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas."first" + nameKey) // this won't work

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends")
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    age: 2037 - 1991,
    job: "Teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    // Sammery Method
    summery: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
// console.log(jonas["calcAge"](jonas.birthYear));
console.log(jonas.summery());

// console.log(`Lifting weights repetition 1 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 2 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 3 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 4 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 5 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 6 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 7 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 8 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 9 🏋🏽‍♂️`);
// console.log(`Lifting weights repetition 10 🏋🏽‍♂️`);

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏽‍♀️`);
}

const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "Teacher",
    ["Michael", "Peter", "Steven"],
    true
];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// jonas[5] does NOT exist

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(`${jonasArray[i]} ${typeof jonasArray[i]}`);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven']
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋🏽‍♂️`);
}
    */

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏽‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log('Loop is about to end...')
    }
}