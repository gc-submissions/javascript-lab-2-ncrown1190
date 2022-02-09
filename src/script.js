"use strict";

//const { CONSOLE_APPENDER } = require("karma/lib/constants");

// TODO - write your code here.
const randomDamage = () => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  return randomNumber;
};
console.log(randomDamage());

/*Declare an arrow function named chooseOption that has two parameters named opt1
and opt2. chooseOption does two things:
○ Declares and initializes a variable named randNum to either a 0 or 1, randomly.
○ Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary
operator*/

const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum ? opt2 : opt1;
};
console.log(chooseOption("Pizza", "Healthy Food"));

/*Declare a function expression named attackPlayer that has one parameter named
health which returns a number equal to health minus the result of the randomDamage
function*/

const attackPlayer = function (health) {
  return health - randomDamage();
};

console.log(attackPlayer(5));

/*Declare an arrow function named logHealth that has two parameters named player
and health which has a console.log method to state the following message: “player
health: health”*/
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => health <= 0;

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Andrea", "Mitch", 100, 100);

const printSquare = (width) => {
  let string = "";
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width; j++) {
      string += "#";
    }
    string += "\n";
  }
  return string;
};
console.log(printSquare(5));

const printTriangle = (width) => {
  let string = "";
  for (let i = 1; i < width; i++) {
    for (let j = 0; j < width - i; j++) {
      string += "";
    }
    for (let k = 0; k < i; k++) {
      string += "#";
    }
    string += "\n";
  }
  return string;
};
console.log(printTriangle(5));

const printHoll0wSquare = (width) => {
  let string = "";

  for (let i = 0; i < width; i++) {
    // external loop
    for (let j = 0; j < width; j++) {
      // internal loop
      if (i === 0 || i === width - 1) {
        string += "#";
      } else {
        if (j === 0 || j === width - 1) {
          string += "#";
        } else {
          string += " ";
        }
      }
    }
    // newline after each row
    string += "\n";
  }
  return string;
};
console.log(printHoll0wSquare(5));

const getGrade = (marks) => {
  if (marks > 0 && marks < 60) {
    return `F`;
  } else if (marks >= 60 && marks < 70) {
    return `D`;
  } else if (marks >= 70 && marks < 80) {
    return `C`;
  } else if (marks >= 80 && marks <= 90) {
    return `B`;
  } else {
    return `A`;
  }
};
console.log(getGrade(56));

const prioritize = (urgent, important) => {
  if (urgent && important) {
    return `periority 1`;
  } else if (!urgent && important) {
    return `periority 2`;
  } else if (urgent && !important) {
    return `periority 3`;
  } else {
    return `periority 4`;
  }
};
console.log(prioritize(true, false));

/*const getGrade = (grade) =>
  grade >= 90
    ? "A"
    : grade >= 80
    ? "B"
    : grade >= 70
    ? "C"
    : grade >= 60
    ? "D"
    : "F";*/
