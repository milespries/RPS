
const game = {userScore:0, compScore:0};

const bestOf = 5;

const rockDiv = document.getElementById("rock");
const rockButton = document.getElementById("rock-button");
const paperDiv = document.getElementById("paper");
const paperButton = document.getElementById("paper-button");
const scissorsDiv = document.getElementById("scissors");
const scissorsButton = document.getElementById("scissors-button");
const userScoreValue = document.getElementById("user-score");
const compScoreValue = document.getElementById("comp-score");
const winScreen = document.getElementById("win-screen");
const loseScreen = document.getElementById("lose-screen");
const allContent = document.getElementsByTagName("*")
const winText = document.createElement("h2");
winText.classList.add("text-success");
winText.textContent = "easy win";
const loseText = document.createElement("h2");
loseText.classList.add("text-error");
loseText.textContent = "tough loss";
const tieText = document.createElement("h2");
tieText.textContent = "wow a tie!";

function play(choice) {
  disableButtons(2);
  switch(choice) { // main game logic
    case "rock":
      switch( getWinner("rock") ) {
        case "user": // win
          rockButton.classList.add("win");
          rockDiv.insertBefore(winText, rockButton);
          game.userScore += 1;
          userScoreValue.textContent = game.userScore;
          setTimeout(function() {
            rockButton.classList.remove("win");
            winText.remove()
          }, 2000)
          if (game.userScore === bestOf) {
            finalScreen("win");
          }
          break;
        case "comp": // lose
          rockButton.classList.add("lose");
          rockDiv.insertBefore(loseText, rockButton);
          game.compScore += 1;
          compScoreValue.textContent = game.compScore;
          setTimeout(function() {
            rockButton.classList.remove("lose");
            loseText.remove()
          }, 2000)
          if (game.compScore === bestOf) {
            finalScreen("lose");
          }
          break;
        default: //tie
          rockDiv.insertBefore(tieText, rockButton);
          setTimeout(function() {
            tieText.remove()
          }, 2000)
          break;
      }
      break;
    case "paper":
      switch( getWinner("paper") ) {
        case "user": // win
          paperButton.classList.add("win");
          paperDiv.insertBefore(winText, paperButton);
          game.userScore += 1;
          userScoreValue.textContent = game.userScore;
          setTimeout(function() {
            paperButton.classList.remove("win");
            winText.remove()
          }, 2000)
          if (game.userScore === bestOf) {
            finalScreen("win");
          }
          break;
        case "comp": // lose
          paperButton.classList.add("lose");
          paperDiv.insertBefore(loseText, paperButton);
          game.compScore += 1;
          compScoreValue.textContent = game.compScore;
          setTimeout(function() {
            paperButton.classList.remove("lose");
            loseText.remove()
          }, 2000)
          if (game.compScore === bestOf) {
            finalScreen("lose");
          }
          break;
        default: //tie
          paperDiv.insertBefore(tieText, paperButton);
          setTimeout(function() {
            tieText.remove()
          }, 2000)
          break;
      }
      break;
    case "scissors":
      switch( getWinner("scissors") ) {
        case "user": // win
          scissorsButton.classList.add("win");
          scissorsDiv.insertBefore(winText, scissorsButton);
          game.userScore += 1;
          userScoreValue.textContent = game.userScore;
          setTimeout(function() {
            scissorsButton.classList.remove("win");
            winText.remove()
          }, 2000)
          if (game.userScore === bestOf) {
            finalScreen("win");
          }
          break;
        case "comp": // lose
          scissorsButton.classList.add("lose");
          scissorsDiv.insertBefore(loseText, scissorsButton);
          game.compScore += 1;
          compScoreValue.textContent = game.compScore;
          setTimeout(function() {
            scissorsButton.classList.remove("lose");
            loseText.remove()
          }, 2000)
          if (game.compScore === bestOf) {
            finalScreen("lose");
          }
          break;
        default: //tie
          scissorsDiv.insertBefore(tieText, scissorsButton);
          setTimeout(function() {
            tieText.remove()
          }, 2000)
          break;
      }
      break;
  }
}

function finalScreen(fate) {
  switch(fate) {
    case "win":
      for (i = 0; i < allContent.length; i++) {
        if (i > 10) {
          allContent[i].remove();
        }
      }
      winScreen.classList.remove("is-hidden");
      break;
    case "lose":
      for (i = 0; i < allContent.length; i++) {
        if (i > 10) {
          allContent[i].remove();
        }
      }
      loseScreen.classList.remove("is-hidden");
      break;
  }
}

function disableButtons(time) {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  setTimeout(function() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
  }, (time * 1000) );
}

function getWinner(userInput) {
  const choices = ["rock", "paper", "scissors"];
  const computerInput = choices[Math.floor(Math.random()*3)];
  let winner = null;

  const ifVal = (a, b, w) => {
    userInput === a && computerInput === b ? (winner = w) : null;
  }

  ifVal("rock", "scissors", "user");
  ifVal("paper", "rock", "user");
  ifVal("scissors", "paper", "user");
  ifVal("rock", "paper", "comp");
  ifVal("paper", "scissors", "comp");
  ifVal("scissors", "rock", "comp");

  return winner;
}