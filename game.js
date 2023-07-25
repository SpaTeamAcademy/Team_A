document.getElementById("rockBtn").addEventListener("click", function(){play("rock");});
document.getElementById("paperBtn").addEventListener("click", function(){play("paper");});
document.getElementById("scissorBtn").addEventListener("click", function(){play("scissors");});
let scorePlayer = 0; // lets for the score board and to add and remove 0
let scorePc =0;
let addScoreZeroPlayer = "";
let addScoreZeroPc = "";


function play(player){//main function, gets the player's choice as a number
    console.log("Player picks " + player);
    let computer = pickRandom();
    let outcome = compare(player, computer);
    display(player, computer, outcome);
    if(scorePlayer<10){addScoreZeroPlayer="0"}else{addScoreZeroPlayer=""} // shows score
    if(scorePc<10){addScoreZeroPc="0"}else{addScoreZeroPc=""}
    document.getElementById("score-display").innerHTML =addScoreZeroPlayer + scorePlayer + ":"+addScoreZeroPc + scorePc;
}


function pickRandom(){//computer picks rock paper or scissors as a number
    let rand = Math.floor(Math.random()*3);
    let computer;


    if(rand === 0){
        computer = "rock";
    }
    else if(rand === 1){
        computer = "paper";
    }
    else if(rand === 2){
        computer = "scissors";
    }


    console.log("Computer picks " + computer);
    return computer;
}


function compare(player, computer){ //decides the outcome of the game and returns it as a number
    if(computer === player){
        return "draw";
    }
    else if(computer === "rock"){
        if(player === "paper"){
            return "win";
        }
        else if(player === "scissors"){
            return "lose";
        }
    }
    else if(computer === "paper"){
        if(player === "rock"){
            return "lose";
        }
        else if(player === "scissors"){
            return "win";
        }
    }
    else if(computer === "scissors"){
        if(player === "rock"){
            return "win";
        }
        else if(player === "paper"){
            return "lose";
        }
    }
}


function display(player, computer, outcome){ //displays the outcome of the game in HTML and the console
    let output;


    if(outcome === "draw"){
        output = "We both chose " + player + ". Nobody wins.";
    }
    else if(outcome === "win"){
        output = player + " beats " + computer + ". You win.";
        scorePlayer++;
    }
    else if(outcome === "lose"){
        output = computer + " beats " + player + ". I win.";
        scorePc ++;
    }


    console.log(output);
    document.getElementById("outcome").innerText = output;
}


function reset() {
    document.getElementById("outcome").innerText = ""
}