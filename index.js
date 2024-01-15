function getComputerChoice() {
  let randomNumber = Math.floor((Math.random() * 3)) + 1

  switch (randomNumber) {
    case 1:
      return "rock"
    case 2:
      return "paper"
    case 3:
      return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie!"
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You Lose! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()}`
  } else {
    return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()}`
  }
}

const playerSelection = "rock"
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))