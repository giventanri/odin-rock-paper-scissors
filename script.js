/**
*
*
**/

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
const msgGameWelcome = "Play against the computer. Choose your first move!"

/* Score counter */
let roundWon = 0;
let roundLost = 0;

/* UI Buttons*/
let body = document.querySelector('body');

let btnRock = document.createElement('button');
btnRock.setAttribute('id', rock);
btnRock.textContent = rock;
btnRock.addEventListener('click', () => {
    playRound(rock, getComputerChoice());
});

let btnPaper = document.createElement('button');
btnPaper.setAttribute('id', paper);
btnPaper.textContent = paper;
btnPaper.addEventListener('click', () => {
    playerSelection = paper;
    playRound(paper, getComputerChoice());
});

let btnScissors = document.createElement('button');
btnScissors.setAttribute('id', scissors);
btnScissors.textContent = scissors;
btnScissors.addEventListener('click', () => {
    playerSelection = scissors;
    playRound(scissors, getComputerChoice());
});

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors); 



/*UI Dialog */

let dialogScore = document.createElement('div');
let dialogChoice = document.createElement('div');
let dialogRound = document.createElement('div');
let dialogGame = document.createElement('div');

body.appendChild(dialogScore);
body.appendChild(dialogChoice);
body.appendChild(dialogRound);
body.appendChild(dialogGame);

/**
*
*
**/

/* @return a random integer, 0 < x <= max
   @param max integer
*/
function getRandomInt(max) {
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
    referee();
}

// Functions to display messages

function roundTie() {
    dialogRound.textContent = msgRoundTie;
}

function roundWin() {
    dialogRound.textContent = msgRoundWin;
    roundWon++;
}

function roundLose() {
    dialogRound.textContent = msgRoundLose;
    roundLost++;
}

function resetScore() {
    roundWon = 0;
    roundLost = 0;
}

function showScore() {
    dialogScore.textContent = "Player " + roundWon + "-" + roundLost + " Computer";
}

function showChoice(playerSelection, computerSelection) {
    dialogChoice.textContent = "You choose " + playerSelection + ". " 
                             + "Computer chooses " + computerSelection + ".";
}

function disableButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true; 
}

function referee() {
    dialogGame.textContent = "";
    showScore()
    let winCondition = roundWon >= 5 || roundLost >= 5;
    if (winCondition) {
        disableButtons();
        (roundWon > roundLost)
        ? dialogGame.textContent = msgGameWin 
        : dialogGame.textContent = msgGameLose;
        dialogGame.textContent += " Refresh to play again.";
    }
}

function game() {
    showScore()
    dialogGame.textContent = msgGameWelcome;
}

game();