document.getElementById("rockBtn").addEventListener("click", function(){play("rock");});
document.getElementById("paperBtn").addEventListener("click", function(){play("paper");});
document.getElementById("scissorBtn").addEventListener("click", function(){play("scissors");});

function play(player){//main function, gets the player's choice as a number
    console.log("Player picks " + player);
    let computer = pickRandom();
    let outcome = compare(player, computer); // 0 = draw, 1 = win, 2 = lose
    display(player, computer, outcome);
}

function pickRandom(){//computer picks rock paper or scissors as a number
    let rand = Math.floor(Math.random()*3); //0 = Rock, 1 = Paper, 2 = Scissors
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
    if(computer === 0){
        if(player === 0){
            return "draw";
        }
        else if(player === 1){
            return "win";
        }
        else if(player === 2){
            return "lose";
        }
    }
    else if(computer === 1){
        if(player === 0){
            return "lose";
        }
        else if(player === 1){
            return "draw";
        }
        else if(player === 2){
            return "win";
        }
    }
    else if(computer === 2){
        if(player === 0){
            return "win";
        }
        else if(player === 1){
            return "lose";
        }
        else if(player === 2){
            return "draw";
        }
    }
}

/*function display(player, computer, outcome){ //displays the outcome of the game in HTML and the console
    let output;

    if(outcome === "draw"){
        output = "We both chose " + toText(player, false) + ". Nobody wins.";
    }
    else if(outcome === "win"){
        output = toText(player, true) + " beats " + toText(computer, false) + ". You win.";
    }
    else if(outcome === "lose"){
        output = toText(computer, true) + " beats " + toText(player, false) + ". I win.";
    }

    console.log(output);
    document.getElementById("outcome").innerText = output;
<<<<<<< HEAD
}
*/

