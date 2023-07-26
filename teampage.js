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