//  document.getElementById("GeneratePasswordLength").value;   does nothing yet beside exist on html
let RandomLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function GenerateButton(){
    let length = document.getElementById("length").value;
    let Password ="";
    for(let x = length; x > 0; x--){
        let RandNumber = Math.floor(Math.random()*26);
        Password = Password + RandomLetters[RandNumber]; 
    }
    document.getElementById("PasswordDisplay").innerHTML = Password;
}
