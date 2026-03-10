"use strict";

////////////////////////////////////////////////////////////////// Functions
// 1 - Function Statement
// function introduceMe(firstName, age, job) {
//     return `I'm ${firstName}, a ${age}years old ${job}!`;
// }

// 2 - Function Expression
// const introduceMe = function (firstName, age, job) {
//     return `I'm ${firstName}, a ${age}years old ${job}!`;
// }
/*
// 3 - Arrow Functions (Function Expression)
const introduceMe = (firstName, age, job) => {
    return `I'm ${firstName}, a ${age}years old ${job}!`;
}

// Calling the function
console.log(introduceMe("John Bosco", 21, "Programmer"));
let dice = prompt("Roll the dice again");
while (dice !== '6') {
    dice = prompt("Roll the dice again");
}
    */

// Guessing Game
// Global variables
let counter = 10;
let currentScore = counter;
let highestScore = 0;
document.querySelector(".current-score").textContent = currentScore;
document.querySelector(".high-score").textContent = highestScore;

// Generate Quest Number
let quest = Math.trunc(Math.random() * 20);
const gameMessage = document.querySelector(".game-message");
const resultPanel = document.querySelector(".panel2");

// Functions
function reset() {
  counter = 10;
  let currentScore = counter;
  document.querySelector(".current-score").textContent = currentScore;
  document.querySelector(".chest").textContent = "?";
  document.querySelector(".guess").value = "";
  gameMessage.textContent = "Start Game!";
  gameMessage.style.backgroundColor = "#05000e";
  gameMessage.style.color = "#fff";
  resultPanel.style.backgroundColor = "#05000e";
}

function randomNumber() {
  return Math.trunc(Math.random() * 20);
}

// Check Guessed Number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Check
  if (guess === quest) {
    gameMessage.textContent = "Win 🏆";
    gameMessage.style.backgroundColor = "lime";
    resultPanel.style.backgroundColor = "lime";
    document.querySelector(".chest").textContent = quest;

    // Check high score
    if (currentScore > highestScore) {
      highestScore = currentScore;
    }
    document.querySelector(".high-score").textContent = highestScore;
  }
  // Too High
  else if (guess >= quest + 5) {
    gameMessage.textContent = "Too High...";
    gameMessage.style.backgroundColor = "red";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  }
  // Too Low
  else if (guess < quest - 5) {
    gameMessage.textContent = "Too Low...";
    gameMessage.style.backgroundColor = "red";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  }
  // In Range
  else if (guess < quest + 5 && guess > guess - 5 && guess !== quest) {
    gameMessage.textContent = "In Range...";
    gameMessage.style.backgroundColor = "lime";
    gameMessage.style.color = "#05000e";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  } else {
    gameMessage.textContent = "Wrong input...";
    gameMessage.style.backgroundColor = "red";
    gameMessage.style.color = "#05000e";

    // Reset input
    document.querySelector(".guess").value = "";
    counter--;
  }
  currentScore = counter;
  document.querySelector(".current-score").textContent = currentScore;
});
/*
// Play Agi=ain Event Listener
document.querySelector(".again").addEventListener("click", function () {
  reset();
  quest = randomNumber();
});

// New Game Event Listener
document.querySelector(".new-game").addEventListener("click", function () {
  reset();
  highestScore = 0;
  document.querySelector(".high-score").textContent = highestScore;
  quest = randomNumber();
});

// Array Destructuring ////////////////
const arr = ["John Bosco", "Sciden", "Roman", "Patrick", "Cotinz"];
console.log(arr);

// Assign to a new variable
const arr2 = arr;
console.log(arr2);

// Assign to an specific varables
const [person1, person2, person3] = arr;
console.log(person3, "is with " + person1);

// Assign default values
const [
  first = "User1",
  second = "User2",
  third = "User3",
  forth = "User4",
  fifth = "User5",
  sixth = "User6",
] = arr;
console.log(arr);
console.log(sixth);

// Object Destructuring
const obj = {
  Name: "John",
  Age: 21,
  Job: "Developer",
};

const { Name, Age, Job } = obj;
console.log(obj);
console.log(Job);

// SETS, ARRAYS, FOR-OF, SPREAD & REST OPERATORS
const jobers = [
  "Jeff Semakula",
  "Mark Kalule",
  "Andrew Katende",
  "Jonathan Lumu",
];

const workers = new Set(jobers);

console.log(...workers);

for (const person of workers) console.log(person);

console.log(...new Set("John"));

const [worker1, worker2, ...otherWorkers] = jobers;

console.log("Other Workers");
for (const worker of otherWorkers) console.log(worker);

console.log(`Worker 1: ${worker1}`);
console.log(`Worker 2: ${worker2}`);

// Employee management system
const employee = {
  // Object Variables
  name: "employee",
  title: "regular",
  department: "none",
  employeeList: [],

  // Add new Employee method
  addEmployee(employeeName, employeeTitle, employeeDepartment) {
    this.name = employeeName ?? "Employee";
    this.title = employeeTitle ?? "Unknown";
    this.department = employeeDepartment ?? "Unknown";

    // Push new employee data to the employeesList Array
    this.employeeList.push({
      name: this.name,
      title: this.title,
      department: this.department,
    });
  },

  // Show all employees method
  showEmplyeesList() {
    if (this.employeeList.length === 0) {
      console.log("Employee database is empty");
    } else {
      for (const employee of this.employeeList) console.log(employee);
    }
  },

  remove() {
    const Department = "Unknown";

    this.employeeList = this.employeeList.filter(
      (employee) => employee.department !== Department,
    );
  },
};

employee.addEmployee("James Kasule", "Manager", "Marketing");
employee.addEmployee("Johnson Male", "Secretary", "Finance");
employee.addEmployee("Jacob Bbosa");
employee.addEmployee();

employee.showEmplyeesList();
console.log("Successful");

employee.remove();
console.log("New List");
employee.showEmplyeesList();

// Sets
const foods = new Set(["Matoke", "Mukyere", "Obulo", "Mawogo", "Lumonde"]);

console.log(...foods);

foods.add(...["Amayuni", "Bwayise"]);
console.log(foods);
console.log(foods.has("Amayuni"));

// MAPs
const item = new Map([
  ["image", "imageLink🔗"],
  ["name", "Honda"],
  ["description", "Super bike 900cc"],
  ["sales", 2567],
  ["likes", 12300000],
]);

console.log(item);

// convert Map to object
const itemObject = Object.fromEntries(item);
console.log(itemObject);

// Convert Object to Array
const itemArray = Object.entries(itemObject);
console.log(...itemArray);

// Convert object to Map
const itemMap = new Map(Object.entries(itemObject));
console.log(itemMap);

// String Rplace method
const statement = "The door isn't the door!";
console.log(statement);

console.log(statement.replace("isn't", "is"));
console.log(statement.replaceAll("door", "window"));
console.log(statement.replace(/door/g, "window"));
*/
