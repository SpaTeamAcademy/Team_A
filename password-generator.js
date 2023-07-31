//  document.getElementById("GeneratePasswordLength").value;   does nothing yet beside exist on html
let RandomLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function GenerateButton(){
    let length = checkInputValue();
    let Password ="";

    for(let x = length; x > 0; x--){
        let RandNumber = Math.floor(Math.random()*26);
        Password = Password + RandomLetters[RandNumber]; 
    }
    document.getElementById("PasswordDisplay").innerHTML = Password;
}

function checkInputValue(){
    let input = document.getElementById("length").value;
    

    if(input === ""){
        input = 8;
        document.getElementById("length").value = 8;
    }

    else if(input < 4){
        input = 4;
        document.getElementById("length").value = 4;
    }

    else if(input > 50){
        input = 50;
        document.getElementById("length").value = 50;
    }

    return input;
}