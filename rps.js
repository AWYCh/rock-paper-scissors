const options = ["rock","paper","scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

/*console.log(getComputerChoice());*/

function getPlayerChoice() {
    let validatedInput = false;
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
}

/*console.log(getPlayerChoice());*/

function checkResult(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "Tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")
){
    return "PlayerWins";
}
else {
    return "ComputerWins";
}
}

function playRound(playerSelection, computerSelection) {
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
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!")
    for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkResult(playerSelection, computerSelection) == "PlayerWins") {
            playerScore++;
        }
        if (checkResult(playerSelection, computerSelection) == "ComputerWins") {
            computerScore++;    
        } 
    }
    console.log("Game Over!")
    if(playerScore > computerScore) {
        console.log("You win overall, best of five!"); 
    }
    else if(computerScore > playerScore) {
        console.log("You lose overall, best of five!"); 
    }
    else {
        console.log("It's a tie overall, best of five!");
    } 
}

playGame()

