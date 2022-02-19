var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];
// Array of words the user will guess
var words = [
  "variable",
  "array",
  "modulus",
  "object",
  "function",
  "string",
  "boolean",
];
// The initialize function is called when the page loads
function initialize() {}
// The startGame function is called when the start button is clicked
function startGame() {
  // Prevents start button from being clicked when round is in progress
  // if(timer) {
  //   timerElement.disabled = true;
  // }

  startButton.addEventListener("click", () => {
    startButton.disabled = true; 
    console.log("Init")
  } )
}
// The winGame function is called when the win condition is met
function winGame() {
  
}
// The loseGame function is called when timer reaches 0
function loseGame() {}
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  // Tests if win condition is met
  // Clears interval and stops timer
  // Tests if time has run out
  // Clears interval
}
// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  // Uses loop to push blanks to blankLetters array
  // Converts blankLetters array into a string and renders it on the screen
}
// Updates win count on screen and sets win count to client storage
function setWins() {}
// Updates lose count on screen and sets lose count to client storage
function setLosses() {}
// These functions are used by initialize
//Use localStorage to get the number of wins and get them on the screen
function getWins() {
  // Get stored value from client storage, if it exists
  // If stored value doesn't exist, set counter to 0
  // If a value is retrieved from client storage set the winCounter to that value
  //Render win count to page
}
//Use localStorage to get the number of losses and get them on the screen
function getlosses() {}
function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
}
// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {}
// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {
  // If the count is zero, exit function
  // Convert all keys to lower case
  // Test if key pushed is letter
});
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
// Calls initialize() so that it fires when page opened
initialize();
// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");
function resetGame() {
  // Resets win and loss counts
  // Renders win and loss counts and sets them into client storage
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
