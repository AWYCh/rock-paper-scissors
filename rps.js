const options = ["rock","paper","scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

/*console.log(getComputerChoice());*/

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const input = prompt("Rock, Paper, Scissors");
        if(input == null) {
            continue;
        }
        const inputInLower = input.toLowerCase();
        if(options.includes(inputInLower)) {
            validatedInput = true;
            return inputInLower;
        }
    }
}

/*console.log(getPlayerChoice());*/

/*function validInput(any) {
    return options.includes(any);
}*/

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

function playGame() {
    console.log("Welcome!")
    for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));  
    }
}

playGame()

/*
function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock, Paper, Scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}
*/

