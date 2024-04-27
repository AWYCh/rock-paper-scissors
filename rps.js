//Add a div for displaying results and change all of your console.logs into DOM methods.
//Display the running score, and announce a winner of the game once one player reaches 5 points.

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const playerPoints = document.querySelector("#player-points");
const computerPoints = document.querySelector("#computer-points");

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
        return "Tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
    ){
        roundResult.textContent=`You Win! ${playerSelection} beats ${computerSelection}`;
        playerPoints.textContent= ++playerScore;
        return "PlayerWins";
    } else {
        roundResult.textContent=`You Lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints.textContent= ++computerScore;
        return "ComputerWins";
}}

/*function playGame() {
    //for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) == "PlayerWins") {
            playerScore++;
        }
        if (playRound(playerSelection, computerSelection) == "ComputerWins") {
            computerScore++;    
        } 
    }*/
    /*console.log("Game Over!")
    if(playerScore > computerScore) {
        console.log("You win overall, best of five!"); 
    }
    else if(computerScore > playerScore) {
        console.log("You lose overall, best of five!"); 
    }
    else {
        console.log("It's a tie overall, best of five!");
    } 
}*/

//playGame()

//const playerSelection = getPlayerChoice();
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

rock.addEventListener("click", () => {
    playRound("rock",getComputerChoice());
})
paper.addEventListener("click", () => {
    playRound("paper",getComputerChoice());
})
scissors.addEventListener("click", () => {
    playRound("scissors",getComputerChoice());
})





/*const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());
  
optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });

let computerChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function computerPlay () {
  let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return result;
}

function playRound (playerSelection, computerSelection) {
  let roundWinCombo = `${playerSelection}-${computerSelection.value}`;
  let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === computerSelection.value) {
      playerPoints.textContent = ++playerScore
      computerPoints.textContent = ++compScore
      roundResults.textContent = "Tie!"
    }else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore
        roundResults.textContent = `You win! ${playerChoice} beats ${computerSelection.choice}`;
    }else {
        computerPoints.textContent = ++compScore
        roundResults.textContent = `You lose! ${computerSelection.choice} beats ${playerChoice}`;
    }
 checkWinner();
}

const winnerResults ={
  computer: ["You Lost the game to a computer!", 'red'],
  player: ["You Win the game!!!!", 'green'],
  tie: ["The game is a Tie!", 'blue']
}

function checkWinner() {
  if (compScore === 5 || playerScore === 5) {
    if (compScore === playerScore){
      updateWinner('tie')
    }else{
      let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
      updateWinner(win);
    }
  }
}

function updateWinner(winner){
  roundResults.textContent = winnerResults[winner][0];
  roundResults.style.color = winnerResults[winner][1];

  optionBtn.forEach(button => {
    button.removeEventListener('click', getPlayerChoice);
  });
}

function getPlayerChoice(e) {
  let playerSelection= (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, computerPlay());
}*/

