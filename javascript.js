let humanScore = 0;
let computerScore = 0;

const score = document.querySelector("h2");
const options = document.querySelector(".options");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const numScore = document.querySelector("h3");

options.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock':
            playRound("rock", getComputerChoice());
            break;
        case 'paper':
            playRound("paper", getComputerChoice());
            break;
        case 'scissors':
            playRound("scissors", getComputerChoice());
            break;
    }
    if(humanScore == 5){
        score.textContent = "YOU WON 5 FIRST, ENJOY YOUR RANDOM SUCCESS!"
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore == 5){
        score.textContent = "You've been beaten by a robot. You lack worth."
        humanScore = 0;
        computerScore = 0;
    }
    numScore.textContent = "Human " + humanScore + " Robot: " + computerScore;
});

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

function playRound(human,cpu){
    if(human == cpu){
        score.textContent = "You both threw " + human + "; Strange.";
        console.log("You both threw " + human + "; Strange.");
        return;
    }
    if(human == "rock" && cpu != "paper"){
        humanScore++;
        score.textContent = "You WON! " + human + " beats " + cpu;
        console.log("You WON! " + human + " beats " + cpu );
        
        return;
    }
    if(human == "paper" && cpu != "scissors"){
        humanScore++;
        score.textContent = "You WON! " + human + " beats " + cpu;
        console.log("You WON! " + human + " beats " + cpu );
        return;
    }
    if(human == "scissors" && cpu != "rock"){
        humanScore++;
        score.textContent = "You WON! " + human + " beats " + cpu;
        console.log("You WON! " + human + " beats " + cpu );
        return;
    }
    computerScore++;
    score.textContent = "You LOST! " + cpu + " beats " + human;
    console.log("You LOST! " + cpu + " beats " + human );
    return;
}
   
    