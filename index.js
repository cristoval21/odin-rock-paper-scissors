let roundsPlayed = 0
let playerScore = 0
let computerScore = 0

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
    playerScore++
    computerScore++
    return "tie"
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++
    return "lose"
  } else {
    playerScore++
    return "win"
  }
}

function game() {
  const playerSelection = prompt("What are you throwing?")
  const computerSelection = getComputerChoice()

  const result = playRound(playerSelection, computerSelection)

  switch (result) {
    case "tie":
      console.log("It's a Tie!")
      break
    case "lose":
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
      break
    case "win":
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
      break
  }

  return result
}

while (roundsPlayed < 5) {
  const roundResult = game()

  if (roundResult != "tie") roundsPlayed++
}

console.log(`Final score: ${playerScore} - ${computerScore}`)
if (playerScore > computerScore) {
  console.log("You beat the computer!")
} else if (playerScore < computerScore) {
  console.log("The computer beat you!")
} else {
  console.log("The game was a tie!")
}