let accBtns = document.getElementsByClassName("accBtn");
let accPanels = document.getElementsByClassName("accPanel");

for (let i=0;i<accBtns.length;i++) {
    accBtns[i].addEventListener("click", function(){
        if (accPanels[i].style.display === "none"){
            accPanels[i].style.display = "block";
        } else {
            accPanels[i].style.display = "none";
        }
    });
}

window.onload = function(){
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