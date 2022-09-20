/* Shorthands */
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

/* Messages on console */
const msgRoundPrompt = "Type 'rock', 'paper', or 'scissors' to play.";
const msgRoundWin = "You won this round!";
const msgRoundLose = "You lost this round!";
const msgRoundTie = "You tie!";
const msgGameWin = "You won this game!";
const msgGameLose = "You lost this game!";

/* Score counter */
let roundWon = 0;
let roundLost = 0;

/* UI */
let body = document.querySelector('body');

let btnRock = document.createElement('button');
btnRock.setAttribute('id', rock);
btnRock.textContent = rock;

let btnPaper = document.createElement('button');
btnPaper.setAttribute('id', paper);
btnPaper.textContent = paper;

let btnScissors = document.createElement('button');
btnScissors.setAttribute('id', scissors);
btnScissors.textContent = scissors;

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors); 

function getRandomInt(max) {
    // Positive integers excluding 0
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    if (choice == 1) return rock;
    else if (choice == 2) return paper;
    else if (choice == 3) return scissors;
    else return undefined;
}

function playRound(playerSelection, computerSelection) {
    showChoice(playerSelection, computerSelection);
    if (playerSelection == computerSelection) roundTie();
    else if (playerSelection == rock) {
        if (computerSelection == scissors) roundWin();
        else if (computerSelection == paper) roundLose();
    }
    else if (playerSelection == paper) {
        if (computerSelection == rock) roundWin();
        else if (computerSelection == scissors) roundLose();
    }
    else if (playerSelection == scissors) {
        if (computerSelection == paper) roundWin();
        else if (computerSelection == rock) roundLose();
    }
}

function roundTie() {
    console.log(msgRoundTie);
}

function roundWin() {
    console.log(msgRoundWin);
    roundWon++;
}

function roundLose() {
    console.log(msgRoundLose);
    roundLost++;
}

function resetScore() {
    roundWon = 0;
    roundLost = 0;
}

function showScore() {
    console.log("Player " + roundWon + "-" + roundLost + " Computer");
}

function showChoice(playerSelection, computerSelection) {
    console.log("You choose " + playerSelection + ".");
    console.log("Computer chooses " + computerSelection + ".");
}

function game() {
    let isValidSelection = false;
    let playerSelection = "";

    for (let i = 0; i < 5; i++) { // 5 Rounds
        showScore();
        while (!isValidSelection) {
            playerSelection = prompt(msgRoundPrompt).toLowerCase();
            if (playerSelection == r 
             || playerSelection == p 
             || playerSelection == s) {
                isValidSelection = true;
            }
        }
        playRound(playerSelection, getComputerChoice());
        isValidSelection = false;
        playerSelection = "";
    }

    (roundWon > roundLost)? console.log(msgGameWin) : console.log(msgGameLose);
    console.log("Final score:");
    showScore();
    resetScore();
}

/* Testing random distribution */
// let rCount = 0;
// let pCount = 0;
// let sCount = 0;
// for (let i = 0; i < 1000; i++) {
//     let choice = getComputerChoice();
//     if (choice == r) rCount++;
//     if (choice == p) pCount++;
//     if (choice == s) sCount++;
// }
// console.log(rCount+" "+pCount+" "+sCount);

game();

