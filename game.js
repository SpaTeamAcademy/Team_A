function play(player){//main function, gets the player's choice as a number
    console.log("Player picks " + toText(player, false));
    let computer = pickRandom();
    let outcome = compare(player, computer); // 0 = draw, 1 = win, 2 = lose
    display(player, computer, outcome);
}

function pickRandom(){//computer picks rock paper or scissors as a number
    let computer = Math.floor(Math.random()*3); //0 = Scissors, 1 = Rock, 2 = Paper
    console.log("Computer picks " + toText(computer, false));
    return computer;
}

function compare(player, computer){ //decides the outcome of the game and returns it as a number
    if(computer === 0){
        if(player === 0){
            return 0;
        }
        else if(player === 1){
            return 1;
        }
        else if(player === 2){
            return 2;
        }
    }
    else if(computer === 1){
        if(player === 0){
            return 2;
        }
        else if(player === 1){
            return 0;
        }
        else if(player === 2){
            return 1;
        }
    }
    else if(computer === 2){
        if(player === 0){
            return 1;
        }
        else if(player === 1){
            return 2;
        }
        else if(player === 2){
            return 0;
        }
    }
}

function toText(number, capital){ //converts a number form 0-2 to it's corresponding choice, i.e. 1 = rock
    let text;
    if(capital){
        if(number === 0){
            text = "Scissors";
        }
        else if(number === 1){
            text = "Rock";
        }
        else if(number === 2){
            text = "Paper";
        }
    }
    else{
        if(number === 0){
            text = "scissors";
        }
        else if(number === 1){
            text = "rock";
        }
        else if(number === 2){
            text = "paper";
        }
    }
    return text;
}

function display(player, computer, outcome){ //displays the outcome of the game in HTML and the console
    let output;

    if(outcome === 0){
        output = "We both chose " + toText(player, false) + ". Nobody wins.";
    }
    else if(outcome === 1){
        output = toText(player, true) + " beats " + toText(computer, false) + ". You win.";
    }
    else if(outcome === 2){
        output = toText(computer, true) + " beats " + toText(player, false) + ". I win.";
    }

    console.log(output);
    //document.getElementById("outcome") = output;
}