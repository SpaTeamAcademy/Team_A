let count = 0;

function Counter(operator){
    if(operator === "plus"){
        count++;
    }else if(operator ==="minus"){
        count--;
    }
    document.getElementById("toDoCount").innerText=count;
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

    document.getElementById("invalid-input-warning").innerText = "";

    if (newTask === "") {
        document.getElementById("invalid-input-warning").innerText = "invalid input";
    } else {
        newItem.innerText = newTask;
        newItem.appendChild(deleteButton);
        document.getElementById("toDo-ul").appendChild(newItem);
        Counter("plus");
    }

    document.getElementById("toDoInput").value = ""
}

