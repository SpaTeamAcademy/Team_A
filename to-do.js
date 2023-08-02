let count = 0;

function Counter(operator){
    if(operator === "plus"){
        count++;
    }else if(operator ==="minus"){
        count--;
    }
    document.getElementById("toDoCount").innerText="Tasks to do: " + count;
}



function addItem() {
    var newTask = document.getElementById("toDoInput").value;
    var newItem = document.createElement("li");
    newItem.className = "undone-task";

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function(){this.parentElement.remove()}); 
    deleteButton.addEventListener("click", function(){Counter("minus")}); 

    var checkButton = document.createElement("button");
    checkButton.innerHTML = "&#10003";
    checkButton.className = "check-button";
    checkButton.onclick = moveItem;
    

    document.getElementById("invalid-input-warning").innerText = "";

    if (newTask === "") {
        document.getElementById("invalid-input-warning").innerText = "invalid input";
    } else {
        newItem.innerText = newTask;
        newItem.appendChild(deleteButton);
        newItem.appendChild(checkButton);
        document.getElementById("toDo-ul").appendChild(newItem);
        Counter("plus");
    }

    document.getElementById("toDoInput").value = ""
}


function moveItem(){
    
    var doneItem = document.createElement("li");
    doneItem.className = "done-task";
    doneItem.innerHTML = (this.parentElement.innerText.slice(0,-2));

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", function(){this.parentElement.remove()}); 
  
    doneItem.appendChild(deleteButton);
    document.getElementById("done-ul").appendChild(doneItem);

    this.parentElement.remove();
    Counter("minus");
    
}


