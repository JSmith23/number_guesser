var actualNum = randomNumber();
var minNum = 0;
var maxNum = 100;

function randomNumber() {
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function updateInputs() {
  document.getElementById("max").value = maxNum;
  document.getElementById("min").value = minNum;
}

function updateActualNum() {
  actualNum = randomNumber();
}

function guessValue() {
  return parseInt(document.getElementById("input").value);
}

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

function reset() {
  actualNum = randomNumber();
  document.getElementById("input").value = "";
  var el = document.getElementById("player-guess");
  el.removeChild(el.firstChild);
}

function clearField() {
  document.getElementById("input").value = "";
}

function guessToUI() {
  let userGuess = guessValue();
  document.getElementById(
    "player-guess"
  ).innerHTML = `<center><h1>Your last guess was</h1><h2>${userGuess}</h2><h3>${findCorrectGuess(
    userGuess
  )}</h3></center>`;
}

function disable() {
  let guessInput = guessValue();
  if (isNaN(guessInput)) {
    document.getElementById("clear").disabled = true;
  } else {
    document.getElementById("clear").disabled = false;
  }
}

function disableReset() {
  let el = guessValue();
  let elGuess = document.getElementById("player-guess").innerText;
  if (!isNaN(el) && elGuess === "") {
    document.getElementById("clear").disabled = true;
  } else {
    document.getElementById("clear").disabled = false;
  }
}

function handleGuessClick() {
  guessToUI();
  if (actualNum === guessValue()) {
    handleWinEvent();
  }
}

function handleWinEvent() {
  minNum -= 10;
  maxNum += 10;
  updateInputs();
  updateActualNum();
}

function updateMaxNum(e) {
  var newVal = parseInt(e.target.value);
  if (!isNaN(newVal)) {
    maxNum = parseInt(e.target.value);
    updateActualNum();
  }
}

function updateMinNum(e) {
  var newVal = parseInt(e.target.value);
  if (!isNaN(newVal)) {
    minNum = parseInt(e.target.value);
    updateActualNum();
  }
}

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
