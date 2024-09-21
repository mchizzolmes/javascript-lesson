// Computer Tic-Tac-Toe

let humanChoice;

function getHumanChoice () {
    humanChoice = window.prompt("Rock, Paper, or Scissors?");
}

getHumanChoice();
console.log(`You picked: ${humanChoice}`);

let computerChoice;

function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice < 1) computerChoice = "Rock";
    else if (computerChoice < 2) computerChoice = "Paper";
    else computerChoice = "Scissors";
}

getComputerChoice();
console.log(computerChoice);