let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randNum = Math.random();

    if (randNum <= 0.33) {
        return "rock";
    } else if (randNum <= 0.66) {
        return "paper";
    }

    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors")
    ) {
        return "human";
    } else if (humanChoice === computerChoice) {
        return "draw";
    } else {
        return "computer";
    }
}

function playGame() {

    const choiceButtons = document.querySelectorAll('.choice-btn');
    const resultsDiv = document.querySelector('.round-results');
    const gameResults = document.querySelector('.game-results');

    const computerScorePointer =
        document.querySelector('.computer-score');

    const humanScorePointer =
        document.querySelector('.human-score');

    choiceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (humanScore >= 5 || computerScore >= 5) {
                return;
            }

            const humanSelection = btn.textContent;
            const computerSelection = getComputerChoice();
            const result = playRound(humanSelection, computerSelection);

            if (result === "draw") {
                resultsDiv.textContent =
                    `Draw! Both chose ${humanSelection}.`;
            } else if (result === "human") {
                humanScore++;
                resultsDiv.textContent =
                    `You win this round! ${humanSelection} beats ${computerSelection}.`;
            } else {
                computerScore++;
                resultsDiv.textContent =
                    `Computer wins this round! ${computerSelection} beats ${humanSelection}.`;
            }

            humanScorePointer.textContent = humanScore;
            computerScorePointer.textContent = computerScore;

            if (humanScore === 5) {
                gameResults.textContent =
                    "Congratulations! You won the game!";
                choiceButtons.forEach(button => {
                    button.disabled = true;
                });
            } else if (computerScore === 5) {
                gameResults.textContent =
                    "Computer won the game.";
                choiceButtons.forEach(button => {
                    button.disabled = true;
                });
            }
        });
    });
}

playGame();

const newGameBtn = document.querySelector('.start-new-game');
newGameBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;

    document.querySelector('.human-score').textContent = 0;
    document.querySelector('.computer-score').textContent = 0;

    document.querySelector('.round-results').textContent = '';
    document.querySelector('.game-results').textContent = '';

    document.querySelectorAll('.choice-btn').forEach(button => {
        button.disabled = false;
    });
});