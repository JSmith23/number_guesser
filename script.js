// Variable in the global scopes that is assigned with random number generator
var actualNum = randomNumber();
//Variable that starts with the minNum at 0
var minNum = 0;
//Variable that starts with the maxNum at 100
var maxNum = 100;

//Random number function
function randomNumber() {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

//Function that takes in the inputs of the max and min inputs and stores them in the maxNum and miNum varibables
function updateInputs() {
  document.getElementById("max").value = maxNum;
  document.getElementById("min").value = minNum;
}

//Function that updates actualNum
function updateActualNum() {
  actualNum = randomNumber();
}

//Function that takes in the user input, parses it from a string and returns the numerical value of that input.
function guessValue() {
  return parseInt(document.getElementById("input").value);
}

//Function that checks the condition of the user input
function findCorrectGuess(userGuess) {
  if (userGuess <= minNum || userGuess > maxNum) {
    return "Error: Enter a number between " + minNum + " and " + maxNum;
  } else if (isNaN(userGuess)) {
    return "Error: Insert an actual number.";
  } else if (userGuess > actualNum) {
    return "That is too high!";
  } else if (userGuess < actualNum) {
    return "That is too low!";
  } else if (userGuess === actualNum) {
    return "BOOM!";
  }
}

//Function that resets the input field
function reset() {
  actualNum = randomNumber();
  document.getElementById("input").value = "";
  var el = document.getElementById("player-guess");
  el.removeChild(el.firstChild);
}

//Function that resets the input field to an empty string.
function clearField() {
  document.getElementById("input").value = "";
}

//Function that logs the user guess to the screen as HTML
function guessToUI() {
  let userGuess = guessValue();
  document.getElementById(
    "player-guess"
  ).innerHTML = `<center><h1>Your last guess was</h1><h2>${userGuess}</h2><h3>${findCorrectGuess(
    userGuess
  )}</h3></center>`;
}

//Function that disables the clear button if the input is not a number
function disable() {
  let guessInput = guessValue();
  if (isNaN(guessInput)) {
    document.getElementById("clear").disabled = true;
  } else {
    document.getElementById("clear").disabled = false;
  }
}

//Function that disables the reset button if there is nothing to clear.
function disableReset() {
  let el = guessValue();
  let elGuess = document.getElementById("player-guess").innerText;
  if (!isNaN(el) && elGuess === "") {
    document.getElementById("clear").disabled = true;
  } else {
    document.getElementById("clear").disabled = false;
  }
}

//Function that responds to the user guess input and if the guess is equal to the randomNumber generated calls on the handleWinEvent to update inputs and begin a new game.
function handleGuessClick() {
  guessToUI();
  if (actualNum === guessValue()) {
    handleWinEvent();
  }
}

//Function that after a user wins, it decreases minNum and increases maxNum and updates those fields.
function handleWinEvent() {
  minNum -= 10;
  maxNum += 10;
  updateInputs();
  updateActualNum();
}

//Function that gets the input  of maxNum and checks if its a valid number then updates maxNum
function updateMaxNum(e) {
  var newVal = parseInt(e.target.value);
  if (!isNaN(newVal)) {
    maxNum = parseInt(e.target.value);
    updateActualNum();
  }
}

//Function that gets the input  of minNum and checks if its a valid number then updates minNum
function updateMinNum(e) {
  var newVal = parseInt(e.target.value);
  if (!isNaN(newVal)) {
    minNum = parseInt(e.target.value);
    updateActualNum();
  }
}
//Function to call that responds to all event listeners
function listeners() {
  document
    .getElementById("guesser")
    .addEventListener("click", handleGuessClick);
  document.getElementById("clear").addEventListener("click", clearField);
  document.getElementById("reset").addEventListener("click", reset);
  document.getElementById("input").addEventListener("input", disable);
  document.getElementById("reset").addEventListener("click", disableReset);
  document.getElementById("max").addEventListener("input", updateMaxNum);
  document.getElementById("min").addEventListener("input", updateMinNum);
}

listeners();
updateInputs();
updateActualNum();
