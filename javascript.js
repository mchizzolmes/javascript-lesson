// Computer Tic-Tac-Toe

let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getHumanChoice() {
    humanChoice = window.prompt("Rock, Paper, or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice < 1) computerChoice = "Rock";
    else if (computerChoice < 2) computerChoice = "Paper";
    else computerChoice = "Scissors";
    computerChoice = computerChoice.toLowerCase();
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == computerChoice) {
        return;
    }

    else if ((humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice =="rock") || (humanChoice == "rock" && computerChoice == "scissors")) {
        humanScore++;
        return;
    }

    else {
        computerScore++;
        return;
    }
}

function playGame() {
    for (let i=1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You Chose: ${humanSelection}, The Computer Chose: ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`You: ${humanScore} / Computer: ${computerScore}`);
    }
}

playGame();