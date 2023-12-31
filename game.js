document.getElementById("rockBtn").addEventListener("click", function(){play("rock");});
document.getElementById("paperBtn").addEventListener("click", function(){play("paper");});
document.getElementById("scissorBtn").addEventListener("click", function(){play("scissors");});

let scorePlayer = 0;
let scorePc = 0;


function play(player){//main function, gets the player's choice as a number
    console.log("Player picks " + player);
    let computer = pickRandom();
    let outcome = compare(player, computer);
    displayOutcome(toEmoji(player), toEmoji(computer), outcome);
    countScore(outcome)
    displayScore(scorePlayer, scorePc)
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

function countScore(outcome){
    if (outcome === "win"){
        scorePlayer++
    } 
    else if (outcome === "lose"){
            scorePc++
    }
    if(scorePlayer>=100){
        window.alert("100?! WOW, you are a true rock - paper - scissors enthusiast!"); // funny text
        scorePlayer = 0;
        scorePc = 0;
    }
    else if(scorePc>=100){
        window.alert("Luck is not on your side."); // funny text
        scorePlayer = 0;
        scorePc = 0;
    }
}

function displayScore(scorePlayer, scorePc){
    if (scorePlayer < 10) { scorePlayer = "0" + scorePlayer};
    if (scorePc < 10) {scorePc = "0" + scorePc};

    document.getElementById("score-display").innerHTML = "You: " + scorePlayer + "<br>" + "PC: " + scorePc;
}

function displayOutcome(player, computer, outcome){ //displays the outcome of the game in HTML and the console
    let output;


    if(outcome === "draw"){
        output = output = "You chose " + player + ".<br>" + "Computer also chose " + computer + ".<br> Nobody wins.";
    }
    else if(outcome === "win"){
        output = "You chose " + player + ".<br>" + "Computer chose " + computer + ".<br>" + player + " beats " + computer + ". You win.";
    }
    else if(outcome === "lose"){
        
        output = "You chose " + player + ".<br>" + "Computer chose " + computer + ".<br>" + computer + " beats " + player + ". Computer wins.";
    }

    console.log(output);
    document.getElementById("outcome").innerHTML = output;
}


function reset() {
    scorePlayer = 0;
    scorePc = 0;
    document.getElementById("outcome").innerText = ""
    displayScore(scorePlayer, scorePc)
}

function toEmoji(text){
    if(text === "rock"){
        return "&#9994;&#127996;";
    }
    else if(text === "paper"){
        return "&#9995;&#127996;";
    }
    else if(text ==="scissors"){
        return "&#9996;&#127996;";
    }
}