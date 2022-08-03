const choices = ["rock", "paper", "scissors"];

// GETTING USER INPUT
const userInput = prompt("Do you choose rock, paper or scissors?");
if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
  console.log("You chose " + `${userInput}`);
} else {
  console.log("Error! Try again!");
}

// GETTING COMPUTER INPUT
let computerInput = choices[Math.floor(Math.random()*3)];
console.log("Computer chose" + ` ${computerInput}`);

// DECLARE WINNER 
const winner = declareWinner(userInput, computerInput);

function declareWinner(userInput, computerInput) {
  if (userInput === 'rock' && computerInput === 'paper') {
    console.log('You lose! Rock beats Paper');
  } else if (userInput === 'scissors' && computerInput === 'paper') {
    console.log('You win! Scissors beats Paper');
  } else {
    console.log('You tie!');
  }
}