function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min));
}



function playRound(playerChoice, computerChoice) {

    if(computerChoice === 0){
            if(playerChoice == "Rock"){
                return "TIE!"
            }
            else if(playerChoice == "Paper"){
                return "COMPUTER WINS!"
            }
            else if(playerChoice == "Scissors"){
                return "PLAYER WINS"
            }
            else {
                return "Invalid";
            }
            
        }
    
    else if(computerChoice === 1){
            if(playerChoice == "Rock"){
                return "COMPUTER WINS!"
            }
            else if(playerChoice == "Paper"){
                return "TIE!"
            }
            else if(playerChoice == "Scissors"){
                return "PLAYER WINS"
            }
            else {
                return "Invalid";
            }
            
        }
    
    
    else if(computerChoice === 2){
            if(playerChoice == "Rock"){
                return "PLAYER WINS"
            }
            else if(playerChoice == "Paper"){
                return "COMPUTER WINS!"
            }
            else if(playerChoice == "Scissors"){
                return "TIE!"
            }
            else {
                return "Invalid";
            }
            
        }
    
}
    
function game() {
    let win = 0;
    let lose = 0;
    
    while(win != 5 || lose != 6){

        for(let i = 0; i < 5; i++){
        
        let playerTurn = prompt("Rock, Paper or Scissors?");
        let computerTurn = getComputerChoice(0, 3);
        playRound(playerTurn, computerTurn);


        console.log(playerTurn);
        console.log(computerTurn);
        console.log(playRound(playerTurn, computerTurn));
        
        if(playRound(playerTurn, computerTurn) === "COMPUTER WINS!"){
            lose++;
            console.log(lose);
        } else if(playRound(playerTurn, computerTurn) === "PLAYER WINS"){
            win++;
            console.log(win);
        }
        else {
            continue;
        }

        }

    if(win > lose){
        return "WINNER"
    } else if (lose > win) {
        return "LOSER"
    } else {
        return "NO WINNER"
    }
    }
    
    
}







