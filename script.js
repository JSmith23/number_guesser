// Display the user’s most recent guess
// Display results and feedback:
// If their guess is too high, it should display: “That is too high”
// If their guess is too low, it should display: “That is too low”
// If the guess is correct, it should display: “BOOM!”
// The input field should only accept numerical entries, within the defined min and max range
// The application should display an error message if the guess is not a number(e.g.parseInt() returns NaN).
// The application should display an error if the guess is outside of the range of possible answers.
// The clear button should be disabled if there is nothing to clear.
// The reset button should be disabled if there is nothing to reset.

let actualNum, userGuess;
actualNum = Math.floor(Math.random() * 101);
userGuess = document.getElementById('input').value
document.querySelector('.player-guess').innerHTML = `<h1> Your last guess was</h1><h2>${userGuess}</h2>`