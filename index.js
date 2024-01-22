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

function playRound(playerSelection) {
  const computerSelection = getComputerChoice()

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
    roundsPlayed++

    return "lose"
  } else {
    playerScore++
    roundsPlayed++

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

// while (roundsPlayed < 5) {
//   const roundResult = game()

//   if (roundResult != "tie") roundsPlayed++
// }

// console.log(`Final score: ${playerScore} - ${computerScore}`)
// if (playerScore > computerScore) {
//   console.log("You beat the computer!")
// } else if (playerScore < computerScore) {
//   console.log("The computer beat you!")
// } else {
//   console.log("The game was a tie!")
// }

const buttonWrapper = document.querySelector(".button-wrapper")
const playerScoreboard = document.querySelector(".player-score")
const computerScoreboard = document.querySelector(".computer-score")
const winner = document.querySelector(".winner")
buttonWrapper.addEventListener("click", (e) => {
  const target = e.target
  let result = ""

  switch (target.id) {
    case "btn-rock":
      result = playRound("rock")
      break;
    case "btn-paper":
      result = playRound("paper")
      break;
    case "btn-scissors":
      result = playRound("scissors")
      break;
  }
  
  // Update scoreboard
  playerScoreboard.textContent = playerScore
  computerScoreboard.textContent = computerScore

  if (playerScore >= 5 || computerScore >= 5) {
    for (const button of buttonWrapper.children) {
      button.disabled = true
    }

    if (playerScore < computerScore) {
      winner.textContent = "You lost the game :("
    } else {
      winner.textContent = "Congratulations, you beat the computer!"
    }
  } else {
    switch (result) {
      case "tie":
        winner.textContent = "The round was a tie!"
        break
      case "lose":
        winner.textContent = "You lost the round!"
        break
      case "win":
        winner.textContent = "You won the round!"
        break
    }
  }

})