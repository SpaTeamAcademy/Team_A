let accBtns = document.getElementsByClassName("accBtn");
let accPanels = document.getElementsByClassName("accPanel");
let footerLinks = document.getElementsByClassName("footerLink");

for (let i=0;i<accBtns.length;i++) {
    accBtns[i].addEventListener("click", function(){
        if (accPanels[i].style.display === "none"){
            accPanels[i].style.display = "block";
        } else {
            accPanels[i].style.display = "none";
        }
    });
}

for(let i=0;i<footerLinks.length;i++){
    footerLinks[i].addEventListener("click", function(){
        for(j of accPanels){
            j.style.display = "none";
        }
        accPanels[i].style.display = "block";
    });
}

window.onload = function(){
    accordion();
}

function accordion(){
    let url = new URL(window.location.toLocaleString());
    let name = url.hash;
    console.log(name);
    if(name === "#erik"){
        accPanels[0].style.display = "block";
    }

    else if(name === "#florian"){
        accPanels[1].style.display = "block";
    }

    else if(name === "#hannah"){
        accPanels[2].style.display = "block";
    }

    else if(name === "#io"){
        accPanels[3].style.display = "block";
    }

    else if(name === "#johnny"){
        accPanels[4].style.display = "block";
    }
}