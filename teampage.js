let accBtns = document.getElementsByClassName("accBtn");
let accPanels = document.getElementsByClassName("accPanel");
let footerLinks = document.getElementsByClassName("footerLink");
let statuses = document.getElementsByClassName("status");

for (let i=0;i<accBtns.length;i++) {
    accBtns[i].addEventListener("click", function(){
        if (accPanels[i].style.display === "none"){
            accPanels[i].style.display = "block";
            statuses[i].innerHTML = "-";
        } else {
            accPanels[i].style.display = "none";
            statuses[i].innerHTML = "+";
        }
    });
}

for(let i=0;i<footerLinks.length;i++){
    footerLinks[i].addEventListener("click", function(){
        for(let j=0;j<accPanels.length;j++){
            accPanels[j].style.display = "none";
            statuses[j].innerHTML = "+";
        }
        statuses[i].innerHTML = "-";
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
    if(name === "#io"){
        accPanels[0].style.display = "block";
        statuses[0].innerHTML = "-";
    }

    else if(name === "#erik"){
        accPanels[1].style.display = "block";
        statuses[1].innerHTML = "-";
    }

    else if(name === "#johnny"){
        accPanels[2].style.display = "block";
        statuses[2].innerHTML = "-";
    }

    else if(name === "#florian"){
        accPanels[3].style.display = "block";
        statuses[3].innerHTML = "-";
    }

    else if(name === "#hannah"){
        accPanels[4].style.display = "block";
        statuses[4].innerHTML = "-";
    }
}