let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuesses = [];

let numGuesses = 1;

let playGame = true;    
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault(); //ye value ko rok leta h ki nhi use hgi value
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(Guess) {
    if (isNaN(Guess)) {
        alert("Please enter a valid number");
    }  else if (Guess < 1) {
        alert("Please enter a number greater than 1");
    } else if (Guess > 100) {
        alert("Please enter a number less than 100");
    } else {        
        previousGuesses .push(Guess);
        if (numGuesses === 11) {   
            displayGuess(Guess); 
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(Guess);
            checkGuess(Guess);
        }
    }
}

function checkGuess(Guess) {
    if (Guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number in ${numGuesses} guesses!`);
        endGame();
    } else if (Guess < randomNumber) {
        displayMessage("Too low! Try again.");
    } else {
        displayMessage("Too high! Try again.");
    }   
}

function displayGuess(Guess) {    //this is actually a cleanup function to display the guess and clear the input field for the next guess
    userInput.value = "";
    guessSlot.innerHTML += `${Guess } `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses} guesses remaining`;
}
// 
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGamee();
}

function newGamee() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function (e) {

        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuesses} guesses remaining`;
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}