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
function initialize() { }

// The startGame function is called when the start button is clicked
function startGame() {
  // Prevents start button from being clicked when round is in progress

  startButton.disabled = true;
  timerCount = 60;
  isWin = false;

  startTimer();
  renderBlanks();


}
// The winGame function is called when the win condition is met
function winGame() {
  // You win the game by beating the timer and getting all the letters in the word 
  winCounter++;
  startButton.disable = false;
  setWins();
  wordBlank.textContent = "Nice Win";

}
// The loseGame function is called when timer reaches 0
function loseGame() {
  loseCounter++;
  startButton.disabled = false;
  setLosses();
  wordBlank.textContent = "Better luck next time";
}
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(() => {
    // Decrease the timerCount every second
    timerCount--;
    // Reflect the timerCount onto the HTML
    timerElement.textContent = timerCount;

    // What to do while timerCount is counting down
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        winGame();
        // Clears interval and stops timer
        clearInterval(timer);
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      if (!isWin && timerCount <= 0) {
        loseGame();
        clearInterval(timer);
      }
    }
  }, 1000)

}
// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  // Making an array of chosenword
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;

  // Uses loop to push blanks to blankLetters array
  for (let index = 0; index < numBlanks; index++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ");
}
// Updates win count on screen and sets win count to client storage
function setWins() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}
// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCounter", loseCounter);
}
// These functions are used by initialize
//Use localStorage to get the number of wins and get them on the screen
function getWins() {
  // Get stored value from client storage, if it exists
  let wins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (wins === null) {
    winCounter = 0;
  } else {
    winCounter = wins;

  }
  // If a value is retrieved from client storage set the winCounter to that value
  //Render win count to page
  win.textContent = winCounter;
}
//Use localStorage to get the number of losses and get them on the screen
function getlosses() {
  let losses = localStorage.getItem("loseCounter");
  if (losses === null) {
    loseCounter = 0;
  } else {
    loseCounter = losses;
  }
  lose.textContent = loseCounter;
}
function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    isWin = true;
  }
}
// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  let letterInWord = false;

  for (let i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true; 
    }
  }
  
  if (letterInWord) {
    for (let j=0; j < numBlanks; j ++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter; 
      }
    }
    wordBlank.textContent = blanksLetters.join(" "); 
  }

}
// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {

  // If the count is zero, exit function
  if (timerCount === 0) {
    return; 
  }
  // Convert all keys to lower case
  let key = event.key.toLowerCase(); 
  let alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split(""); 
  // Test if key pushed is letter
  if (alphabetNumericCharacters.includes(key)) {
    let letterGuessed = event.key; 
    checkLetters(letterGuessed)
    checkWin(); 
  }
});
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
// Calls initialize() so that it fires when page opened

initialize();
// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");
function resetGame() {
  // Resets win and loss counts
  winCounter = 0; 
  loseCounter = 0; 
  // Renders win and loss counts and sets them into client storage
  setWins(); 
  setLosses(); 
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
