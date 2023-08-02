let RandomLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let RandomLettersGross = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let RandomLettersSonder = ["!","#","$","%","(",")","*","+",",","-",".","/",":",";","=","?","@","[","]","^","_","{","|","}","~"];
let RandomZahlen = ["0","1","2","3","4","5","6","7","8","9"];
let Random = [];
document.getElementById("small").checked = true;

function GenerateButton(){
    let length = checkInputValue();
    let Password ="";
    let Random = MainRando();
    
    for(let x = length-Checkall(); x > 0; x--){
        let RandNumber = Math.floor(Math.random()*Random.length);
        Password = Password + Random[RandNumber]; 
    }
    //Add RandomLetter/Gross/Sonder/Zahlen to Password here amount of words reduced by length-Checkall
    Password = Password.split();  //changes Password to Array
    if(document.getElementById("small").checked){Password.splice(Math.floor(Math.random()*Password.length),0,RandomLetters[Math.floor(Math.random()*RandomLetters.length)])}
    if(document.getElementById("big").checked){Password.splice(Math.floor(Math.random()*Password.length),0,RandomLettersGross[Math.floor(Math.random()*RandomLettersGross.length)])}
    if(document.getElementById("sonder").checked){Password.splice(Math.floor(Math.random()*Password.length),0,RandomLettersSonder[Math.floor(Math.random()*RandomLettersSonder.length)])}
    if(document.getElementById("number").checked){Password.splice(Math.floor(Math.random()*Password.length),0,RandomZahlen[Math.floor(Math.random()*RandomZahlen.length)])}
    document.getElementById("PasswordDisplay").innerHTML = Password.join("");
}

function checkInputValue(){
    let input = document.getElementById("length").value;
    let message = document.getElementById("lengthMsg");
    message.innerText = "";

    if(input === ""){
        input = 8;
        document.getElementById("length").value = 8;
        message.innerText = "Length can not be empty.";
    }

    else if(input < 4){
        input = 4;
        document.getElementById("length").value = 4;
        message.innerText = "Length can not be shorter than 4.";
    }

    else if(input > 50){
        input = 50;
        document.getElementById("length").value = 50;
        message.innerText = "Length can not be longer than 50.";
    }

    return input;
}


function MainRando(){
    Random=[];
    if(document.getElementById("small").checked){
        for(let x=0;x<RandomLetters.length;x++){
        Random.push(RandomLetters[x]);
        }
    }

    if(document.getElementById("big").checked){
        for(let x=0;x<RandomLettersGross.length;x++){
        Random.push(RandomLettersGross[x]);
        }
    }    

    if(document.getElementById("sonder").checked){
        for(let x=0;x<RandomLettersSonder.length;x++){
        Random.push(RandomLettersSonder[x]);
        }
    }    

    if(document.getElementById("number").checked){
        for(let x=0;x<RandomZahlen.length;x++){
        Random.push(RandomZahlen[x]);
        }
    }    
        return Random;
    }


    function Checkall(){
        let TestChecked = 0;
        if(document.getElementById("small").checked){TestChecked++}
        if(document.getElementById("big").checked){TestChecked++}
        if(document.getElementById("sonder").checked){TestChecked++}
        if(document.getElementById("number").checked){TestChecked++}
        return TestChecked;
    }
    
    function Checkabc(){if(Checkall()==0){document.getElementById("small").checked = true;}}
    function CheckABC(){if(Checkall()==0){document.getElementById("big").checked = true;}}
    function CheckSonder(){if(Checkall()==0){document.getElementById("sonder").checked = true;}}
    function CheckZahl(){if(Checkall()==0){document.getElementById("number").checked = true;}}
