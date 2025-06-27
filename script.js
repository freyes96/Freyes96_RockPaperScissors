
function getComputerChoice() {
    let computerArray = ["rock", "paper", "scissors"];
    return computerArray[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") {
        userInput = prompt("Invalid choice! Please type: rock, paper, or scissors").toLowerCase();
    }
    return userInput;
}

let computerScore = 0;
let humanScore = 0;

const playRound = () => {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log("CPU chose:", computerChoice);
    console.log("You chose:", humanChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Score => You: ${humanScore} | CPU: ${computerScore}`);
}

playRound();
