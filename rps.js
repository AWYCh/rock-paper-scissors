const roundResult = document.querySelector("#round-result");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");
const gameResult = document.querySelector("#game-result");
const restart = document.querySelector("#restart");
const buttons = document.querySelectorAll(".buttons button");

let playerScore = 0;
let computerScore = 0;
playerPoints.textContent= playerScore;
computerPoints.textContent= computerScore;

const options = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

function getPlayerChoice(e) {
  let playerSelection = (e.target.id);
  if(playerScore <5 && computerScore <5) {
  playRound(playerSelection, getComputerChoice());
}}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        roundResult.textContent="It's a tie!";
    } 
    else if((playerSelection == "Rock" && computerSelection == "Scissors") ||
            (playerSelection == "Paper" && computerSelection == "Rock") ||
            (playerSelection == "Scissors" && computerSelection == "Paper")
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
        }
        restart.style.backgroundColor="green";
        restart.textContent="Play Again"
        }
    }

buttons.forEach(button => {
     button.addEventListener("click", getPlayerChoice);
})

restart.addEventListener("click", () =>
location.reload());

