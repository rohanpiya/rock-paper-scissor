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
        return "human";
    } else if (humanChoice == computerChoice) {
        return "draw";
    } else {
        return "computer";
    }
}

// function playGame() {
//     humanScore = 0;
//     computerScore = 0;
//     while (humanScore < 5 && computerScore < 5) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     } if (computerScore == 5) {
//         console.log("You lose the game :(");
//     } else {
//         console.log("Congrats! YOu win this game :)");
//     }
// }

const choiceButtons = document.querySelectorAll('.choice-btn');
const resultsDiv = document.querySelector('.results');

choiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        humanSelection = btn.textContent;
        computerSelection = getComputerChoice();
        result = playRound(humanSelection, computerSelection);
        if (result == 'draw') {
            resultsDiv.textContent = "It's a draw!!";
        } else if (result == "human") {
            resultsDiv.textContent = `Human wins! ${humanSelection} beats ${computerSelection}`;
        } else {
            resultsDiv.textContent = `Computer wins! ${humanSelection} loses to ${computerSelection}`;
        }
    })
})