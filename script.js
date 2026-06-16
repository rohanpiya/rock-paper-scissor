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