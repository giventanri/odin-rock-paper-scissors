/* Shorthands */
const r = "rock";
const p = "paper";
const s = "scissors";

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

function getRandomInt(max) {
    // Positive integers excluding 0
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    if (choice == 1) return r;
    else if (choice == 2) return p;
    else if (choice == 3) return s;
    else return undefined;
}

function playRound(playerSelection, computerSelection) {
    showChoice(playerSelection, computerSelection);
    if (playerSelection == computerSelection) roundTie();
    else if (playerSelection == r) {
        if (computerSelection == s) roundWin();
        else if (computerSelection == p) roundLose();
    }
    else if (playerSelection == p) {
        if (computerSelection == r) roundWin();
        else if (computerSelection == s) roundLose();
    }
    else if (playerSelection == s) {
        if (computerSelection == p) roundWin();
        else if (computerSelection == r) roundLose();
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

    for (let i = 0; i < 5; i++) {
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

