const options = ["rock","paper","scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

function getPlayerChoice() {
    let input = prompt("Rock, Paper, Scissors?");
    while (input == null) {
        input = prompt("Rock, Paper, Scissors?");
        if (input == false) {
            continue;
        }
        if(options.includes(input)){
            return input;
        }
    }
    input = input.toLowerCase();

}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "It's a tie!";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
}
else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));