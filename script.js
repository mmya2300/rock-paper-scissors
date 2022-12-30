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
        results = "YOU WIN!"
        gameOver();
    } else if(lose > win){
        results = "YOU LOSE"
        gameOver();
    } else {
        results = "IT'S A TIE!"
        gameOver();
    }
    console.log(results)
}

// the whole game in a function
function playRound (playerTurn) {
    // adds to the lose or win score on the document
    document.getElementById('lose-score').innerHTML = loseScore;
    document.getElementById('win-score').innerHTML = winScore;
    
    let computerTurn = randomizer();
    console.log(computerTurn)
    console.log(playerTurn)

    if(computerTurn == 'rock'){
        if(playerTurn == 'rock'){
            results = "TIE";
        } 
        else if(playerTurn == 'scissors') {
            loseScore++;
            results = "Lose";
        }
        else if(playerTurn == 'paper') {
            winScore++;
            
            results = "Win";
            
        }
    }
    if(computerTurn == 'scissors'){
        if(playerTurn == 'rock'){
            winScore++;
            results = "Win";
        } 
        else if(playerTurn == 'scissors') {
            results = "Tie"
        }
        else if(playerTurn == 'paper') {
            loseScore++;
            results = "Lose";
        }
    }
    if(computerTurn == 'paper'){
        if(playerTurn == 'rock'){
            loseScore++;
            results =  "Lose";
        } 
        else if(playerTurn == 'scissors') {
            winScore++;
            results = "Win";
        }
        else if(playerTurn == 'paper') {
            results = "TIE";
        }
    }
    console.log(results)
    round++;

}

// collects all the buttons and gives them the same function
choices.forEach((button) => {
    // adds an event for each button
    button.addEventListener('click', () => {
        console.log(playRound(button.id));
        console.log(round)
        // stops the game if 5 rounds are played
        if(round == 5){
            console.log(scores(winScore, loseScore));
        }
    })
})








