// event listeners for buttons
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => game("rock"));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => game("paper"));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => game("scissors"));

function game(playerSelection) {

    let playerText = document.querySelector("#player").textContent;
    let playerScore = +(playerText.substring(playerText.length - 2));

    let computerText = document.querySelector("#computer").textContent;
    let computerScore = +(computerText.substring(computerText.length - 2));

    let results = document.querySelector("#results");

    if (playerScore >= 5 || computerScore >= 5) {
        results.textContent = "The game is over! You can't select an option!";
        return;
    }

    let computerSelection = computerPlay();
    let outcome = playRound(playerSelection, computerSelection);

    if (outcome == "It's a tie!") {
    } else if (outcome == "You Lose!") {
        computerScore++;
    } else if (outcome == "You Win!") {
        playerScore++;
    }

    results.textContent = `${outcome}`;

    let newUL = document.createElement("ul");
    newUL.setAttribute("id", "results-list")

    let playerPick = document.createElement("li");
    playerPick.textContent = `You picked: ${playerSelection}`;

    let computerPick = document.createElement("li");
    computerPick.textContent = `The Computer picked: ${computerSelection}`;

    newUL.appendChild(playerPick);
    newUL.appendChild(computerPick);

    results.appendChild(newUL);

    document.querySelector("#player").textContent = `Player: ${playerScore}`;
    document.querySelector("#computer").textContent = `Computer: ${computerScore}`;
    return;

}

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
        return "Rock";
        break;
        case 1:
        return "Paper";
        break;
        case 2:
        return "Scissors";
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection) {
            case "Rock":
                return "It's a tie!"
                break;
            case "Paper":
                return "You Lose!";
                break;
            case "Scissors":
                return "You Win!"
                break;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection) {
            case "Rock":
                return "You Win!"
                break;
            case "Paper":
                return "It's a tie!";
                break;
            case "Scissors":
                return "You Lose!"
                break;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        switch (computerSelection) {
            case "Rock":
                return "You Lose!"
                break;
            case "Paper":
                return "You Win!";
                break;
            case "Scissors":
                return "It's a tie!"
                break;
        }
    }
}