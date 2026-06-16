function getComputerChoice() {
    let randNum = Math.random();
    if (randNum <= 0.33) {
        return "rock";
    } else if (randNum <= 0.66) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let userPrompt = prompt("Please enter your choice: ");
    while (userPrompt != "rock" && userPrompt != "paper" && userPrompt != "scissors") {
        userPrompt = prompt("Invalid. Please make a valid choice: ");
    }
    return userPrompt;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "rock" && computerChoice == "scissors")
    ) {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else if (humanChoice == computerChoice) {
        console.log(`This round is a draw!`)
    } else {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    } if (computerScore == 5) {
        console.log("You lose the game :(");
    } else {
        console.log("Congrats! YOu win this game :)");
    }
}