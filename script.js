
let winScore = 0; // keeps track of when the user wins a round
let loseScore = 0; // keeps track of when the user loses a round
let round = 0; // keeps track of the amount of rounds
let results = ""; // displays the result from each round played

// displays the scores
document.getElementById('lose-score').innerHTML = loseScore;
document.getElementById('win-score').innerHTML = winScore;


// selects all the buttons in the div '.options'
const choiceButtons = document.querySelector('.options');
const choices = choiceButtons.querySelectorAll('button');

// selects and creates a function for the restart button
const restartDiv = document.querySelector('.restart');
const restartButton = restartDiv.querySelector('button');

// the function clears the console, turns the buttons back on and puts the rounds and scores back to zero
function playAgain () {
    winScore = 0;
    loseScore = 0;
    round = 0;
    const computerPlayElement = document.getElementById('computer-play')
    const userPlayElement = document.getElementById('user-play')
    const resultElement = document.getElementById('round-result')
    computerPlayElement.innerHTML = null
    userPlayElement.innerHTML = null
    resultElement.innerHTML = null
    document.getElementById('win-score').innerHTML = winScore;
    document.getElementById('lose-score').innerHTML = loseScore;

    console.clear();
    choices.forEach( (button) => 
        button.disabled = false
    )
}

// add event listener for the restart button
restartButton.addEventListener('click', (playAgain));

// disables the user from playing the game further
function gameOver () {
    choices.forEach( (button) => 
        button.disabled = true
    )
}

// randomly chooses a string from the array
function randomizer () {
    let list = ['rock', 'paper', 'scissors'];

    return list[Math.floor(Math.random() * list.length)];
}

// tally the scores to see who wins
function scores(win, lose){

    if(win > lose){
        results = "Yay! YOU WIN!"
        gameOver();
    } else if(lose > win){
        results = "I'm Sorry! YOU LOSE!"
        gameOver();
    }
    const computerPlayElement = document.getElementById('computer-play')
    const userPlayElement = document.getElementById('user-play')
    computerPlayElement.innerHTML = null
    userPlayElement.innerHTML = null
    const resultElement = document.getElementById('round-result')
    resultElement.innerHTML = results
}

// the whole game in a function
function playRound (playerTurn) {
    // adds to the lose or win score on the document
    document.getElementById('lose-score').innerHTML = loseScore;
    document.getElementById('win-score').innerHTML = winScore;
    
    let computerTurn = randomizer();
    console.log("the computer choose:" + computerTurn)
    console.log("the player choose:" + playerTurn)

    if(computerTurn === 'rock'){
        if(playerTurn === 'rock'){
            results = "It's a TIE"
        } 
        else if(playerTurn === 'scissors') {
            loseScore++;
            results = "Sorry, You lost this round"
        }
        else if(playerTurn === 'paper') {
            winScore++;
            results = "Good job, You win!"
            
        }
    }
    if(computerTurn === 'scissors'){
        if(playerTurn == 'rock'){
            winScore++;
            results = "Good job, You win!"
        } 
        else if(playerTurn === 'scissors') {
            results = "It's a TIE"
        }
        else if(playerTurn === 'paper') {
            loseScore++;
            results = "Sorry, You lost this round"
        }
    }
    if(computerTurn === 'paper'){
        if(playerTurn === 'rock'){
            loseScore++;
            results = "Sorry, You lost this round"
        } 
        else if(playerTurn === 'scissors') {
            winScore++;
            results = "Good job, You win!"
        }
        else if(playerTurn === 'paper') {
            results = "It's a TIE"
        }
    }
    console.log(results)
    console.log("player:" + winScore)
    console.log("bot:" + loseScore)
    if (results !== "It's a TIE") {
        round++;
        console.log(round)
      }
    const computerPlayElement = document.getElementById('computer-play')
    const userPlayElement = document.getElementById('user-play')
    const resultElement = document.getElementById('round-result')
    computerPlayElement.innerHTML = "The computer chose: " + computerTurn
    userPlayElement.innerHTML = "The player chose: " + playerTurn
    resultElement.innerHTML = results;

}

// collects all the buttons and gives them the same function
choices.forEach((button) => {
    // adds an event for each button
    button.addEventListener('click', () => {
        playRound(button.id);
        // stops the game if 5 rounds are played
        if(round > 6){
            scores(winScore, loseScore);
        }
    })
})








