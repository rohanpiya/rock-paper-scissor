function getComputerChoice() {
    randNum = Math.random();
    if (randNum <= 0.33) {
        return "rock";
    } else if (randNum <= 0.66) {
        return "paper";
    }
    return "scissors";
}