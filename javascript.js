

function getComputerChoice(){
    let rand = Math.random();
    if (rand >= 0.66){
        return "rock";
    }else if(rand >= 0.33){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(human,cpu){
        if(human == cpu){
            console.log("You both threw " + human + "; Strange.");
            return;
        }
        if(human == "rock" && cpu != "paper"){
            humanScore++;
            console.log("You WON! " + human + " beats " + cpu );
            return;
        }
        if(human == "paper" && cpu != "scissors"){
            humanScore++;
            console.log("You WON! " + human + " beats " + cpu );
            return;
        }
        if(human == "scissors" && cpu != "rock"){
            humanScore++;
            console.log("You WON! " + human + " beats " + cpu );
            return;
        }
        computerScore++;
        console.log("You LOST! " + cpu + " beats " + human );
        return;
    }
    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("The final score was: YOU: " + humanScore + " CPU: " + computerScore);


}

playGame();