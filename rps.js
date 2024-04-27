//Display the running score, and announce a winner of the game once one player reaches 5 points.

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");
const gameResult = document.querySelector("#game-result");
const restart = document.querySelector("#restart");

let playerScore = 0;
let computerScore = 0;

const options = ["rock","paper","scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

/*const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", getPlayerChoice)});

function getPlayerChoice(e) {
  let playerSelection = (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, getComputerChoice());
}*/

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        roundResult.textContent="It's a tie!";
    } 
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
    ){
        roundResult.textContent=`You Win! ${playerSelection} beats ${computerSelection}`;
        playerPoints.textContent= ++playerScore;
    } else {
        roundResult.textContent=`You Lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints.textContent= ++computerScore;
    }
    playGame();
}

function playGame() {
    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            gameResult.textContent=`Game over! You win! ${playerScore}-${computerScore}`; 
        }
        else if(computerScore > playerScore) {
            gameResult.textContent=`Game over! You lose! ${playerScore}-${computerScore}`; 
        }
        else {
            gameResult.textContent="Game over! It's a tie!";
        }}
    }

//playGame()

//const playerSelection = getPlayerChoice();
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

rock.addEventListener("click", () => {
    if(playerScore <5 && computerScore <5) {
    playRound("rock",getComputerChoice());
}})
paper.addEventListener("click", () => {
    if(playerScore <5 && computerScore <5) {
    playRound("paper",getComputerChoice());
}})
scissors.addEventListener("click", () => {
    if(playerScore <5 && computerScore <5) {
    playRound("scissors",getComputerChoice());
}})







