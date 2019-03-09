var actualNum = randomNumber();

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

function findCorrectGuess(actualNum, userGuess) {
  actualNum = parseInt(actualNum);
  userGuess = parseInt(userGuess);
  if (userGuess <= 0 || userGuess > 100) {
    return "Error: Enter a number between 1 and 100"
  } else if (isNaN(userGuess)) {
    return "Error: Insert an actual number."
  } else if (userGuess > actualNum) {
    return "That is too high!"
  } else if (userGuess < actualNum) {
    return "That is too low!"
  } else if (userGuess === actualNum) {
    return "BOOM!"
  }
}

function reset() {
  actualNum = randomNumber();
  document.getElementById('input').value = "";
  el = document.getElementById('player-guess')
  el.removeChild(el.firstChild)
}

function clearField() {
  document.getElementById('input').value = "";
}

function guessToUI() {
  let userGuess = document.getElementById('input').value;
  document.getElementById('player-guess').innerHTML = `<center><h1>Your last guess was</h1><h2>${userGuess}</h2><h3>${findCorrectGuess(actualNum,userGuess)}</h3></center>`
}

function disable() {
  let guessInput = document.getElementById('input').value;
  if (guessInput == '') {
    document.getElementById('clear').disabled = true;
  } else {
    document.getElementById('clear').disabled = false;
  }
}

function disableReset(){
  let el = document.getElementById('input').value;
  let elGuess = document.getElementById('player-guess').value;
  if(el == '' && elGuess == ''){
    document.getElementById('clear').disabled = true;
  } else{
    document.getElementById('clear').disabled = false;
  }
}


function listeners() {
  document.getElementById('guesser').addEventListener('click', guessToUI);
  document.getElementById('clear').addEventListener('click', clearField);
  document.getElementById('reset').addEventListener('click', reset);
  document.getElementById('input').addEventListener('input', disable);
  document.getElementById('reset').addEventListener('click', disableReset);
}


listeners();