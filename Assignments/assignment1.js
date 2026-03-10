'use strict';

/*
const country = "Uganda";
const continent = "Africa";
let population = 45900000;
const isIsland = false;
let language;

// logging values to the comsole
console.log(country, continent, population);

// logging types to the console
console.log(typeof (isIsland), typeof (population), typeof (country), typeof (languagr));

language = "Luganda";

// Dividing to get half the population
console.log(population / 2 + " people");

// Increasing the population by 1
population++;
console.log(population);

const Finland = 6000000;
if (Finland > population) {
    console.log("Finland has more people than Uganda");
}
else {
    console.log("Uganda has more people than Finland");
}

//Average country
const averageCountry = 33000000;

// if (population > averageCountry) {
//     console.log("Portugal's population is 22 million below average");
// }
// else {
//     console.log("Portugal's population is above average");
// }

// Tanary oprator
population > averageCountry ? console.log("Population is above average") : console.log("Population is 22 million below average");

let description = country + " is in " + continent + ", and its " + population / 1000000 + " million people speak " + language;
console.log(description);

/////////////////// Equality Operator
// const numNeighbours = prompt("How many neighbour countries does your country have?");

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }
*/













/*
////////////////////////////////////////////////////// Sarah's Ideal country
// Country Object Structure
class Country {
    // Constructor
    constructor(countryName, population, language, isIsland) {
        this.CountryName = countryName;
        this.Population = population;
        this.Language = language;
        this.IsIsland = isIsland;
    }

}

// Country Objects
// Array of counties
const Countries = [
    new Country('Uganda', 33000000, 'Luganda', false),
    new Country('Kenya', 36600000, 'Swahili', false),
    new Country('Tanzania', 25000000, 'Swahili', false),
    new Country('Rwanda', 5000000, 'English', false)
];

// Find Sarah's ideal country (English, 50m P, NOT island)
for (let iter = 0; iter < Countries.length; iter++) {
    if (Countries[iter].Population < 50000000 && Countries[iter].Language === "English" && Countries[iter].IsIsland !== true) {
        console.log(`You should live in ${Countries[iter].CountryName} :)`);
    } else {
        if (iter !== Countries.length - 1) {
            continue;
        } else {
            console.log(`The available countries do not meet your criteria :(`);
        }
    }
    // console.log(Countries[0]);
}





// //////////////////// Using the switch statement

const Language = prompt('Enter language');

switch (Language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'English':
        console.log('3rd place');
        break;
        case 'hindi':
        console.log("Number 4");
        break;
        case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}








// ///////////////////////////////////////Fuctions
const describeCountry = (country, population, capitalCity) => {
    return `${country} has ${population} million people and its
    capital city is ${capitalCity}`;
}

console.log(describeCountry("Uganda", 5, "Kampala"));
console.log(describeCountry("Kenya", 5.5, "Nirobi"));
console.log(describeCountry("Tanzania", 4.5, "Dodoma"));


//
///
///
//////
//////
//////////
//////////
//////////////////
//////////////////
////////////////////////////
////////////////////////////////////////
////////////////////////////////////////////////////////
///////////////////////////////////// Function Declarations vs. Expressions
const worldPopulation = 7900000000;

// Function Declaration
function percentageOfWorld1(population) {
    return ((population / worldPopulation) * 100).toFixed(2);
}

console.log(percentageOfWorld1(1441000000));
console.log(percentageOfWorld1(5000000));
console.log(percentageOfWorld1(900000000));

// Function Expression
const percentageOfWorld2 = function (population) {
    return (population / worldPopulation) * 100;
}

console.log(percentageOfWorld2(1441000000));
console.log(percentageOfWorld2(5000000));
console.log(percentageOfWorld2(900000000));

// Arrow Function
const percentageOfWorld3 = population => {
    return (population / worldPopulation) * 100;
}

console.log(percentageOfWorld3(1441000000));
console.log(percentageOfWorld3(5000000));
console.log(percentageOfWorld3(900000000));

// ////////// Function Recursion
function describePopulation(country, population) {
    return `${country} has ${population / 1000000} million people,
    which is about ${percentageOfWorld1(population)}% of the world.`;
}

console.log(describePopulation("Uganda", 250000000));
console.log(describePopulation("Kenya", 220000000));
console.log(describePopulation("Tanzania", 295000000));

// Array Usage
const populations = [250000000, 720000000, 295000000, 295000000];

console.log(populations.length === 4 ? true : false);

const percentages = [`${percentageOfWorld1(populations[0])}%`, `${percentageOfWorld1(populations[1])}%`, `${percentageOfWorld1(populations[2])}%`, `${percentageOfWorld1(populations[3])}%`];
console.log(percentages);

const neighbours = ['Kenya', 'Tanzania', 'Congo'];

neighbours.push('Utopia');
neighbours.pop();

console.log(!neighbours.includes('Germany') ? 'Probably not a central European country :D' : "'Probably a central European country :D' ");

neighbours[neighbours.indexOf('Congo')] = 'Democratic Republic of Congo';
console.log(neighbours);



//
///
//////
////////
////////////////////
////////////////////////////
// //////////////////////////////
// /////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////////////////////////Introduction to Objects 

const myCountry = {
    country: "Uganda",
    capital: "Kampala",
    language: "Laganda",
    population: 50000000,
    neighbours: ['Kenya', 'Tanzania', 'South Sudan'],
    
    // Description method
    describe() {
        console.log(` '${this.country} has ${this.population / 1000000} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries 
and a capital called ${this.capital}.' `);
    },
    
    // isIsland Method
    checkIsland() {
        return this.neighbours.length === 0 ? true : false;
    }
}

console.log(` '${myCountry.country} has ${myCountry.population / 1000000} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries 
and a capital called ${myCountry.capital}.' `);

myCountry.population += 2000000;
myCountry['population'] -= 2000000;
myCountry.describe();

// Output Isisland
console.log(`Island: ${myCountry.checkIsland()}`);

// ////////////////////////// The For Loop
for (let voters = 1; voters <= 50; voters++) {
    console.log(`Voter number ${voters} is currently voting`);
}



const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];

    for (let nei = 0; nei < listOfNeighbours.length; nei++) {
        if (listOfNeighbours[nei].length > 1) {
        for (let i = 0; i < listOfNeighbours[nei].length; i++) {
            console.log(`Neighnour: ${listOfNeighbours[nei][i]}`);
        }
        continue;
    }
    console.log(`Neighnour: ${listOfNeighbours[nei]}`);
}
    */