//Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.
//Add a div for displaying results and change all of your console.logs into DOM methods.
//Display the running score, and announce a winner of the game once one player reaches 5 points.

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

let playerScore = 0;
let computerScore = 0;

const options = ["rock","paper","scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

//console.log(getComputerChoice());

//function getPlayerChoice() {}

/*const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", getPlayerChoice)});

function getPlayerChoice(e) {
  let playerSelection = (e.target.id);
  playerChoice = e.target.textContent;
  playRound(playerSelection, getComputerChoice());
}*/


    /*let validatedInput = false;
    while(validatedInput == false) {
        let input = prompt("Rock, Paper, Scissors");
        if(input == null) {
            continue;
        }
        const inputInLower = input.toLowerCase();
        if(options.includes(inputInLower)) {
            validatedInput = true;
            return inputInLower;
        }
    }
}*/

//console.log(getPlayerChoice());

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        results.textContent="It's a tie!";
        return "Tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
){
    results.textContent=`You Win! ${playerSelection} beats ${computerSelection}`;
    return "PlayerWins";
    
}
else {
    results.textContent=`You Lose! ${computerSelection} beats ${playerSelection}`;
    return "ComputerWins";
}
}

/*function playRound(playerSelection, computerSelection) {
    if(checkResult(playerSelection, computerSelection) == "Tie") {
        return "It's a tie!";
    }
    else if(checkResult(playerSelection, computerSelection) == "PlayerWins"
){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}
else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
}*/

//const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
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






