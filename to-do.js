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
    
    document.getElementById("invalid-input-warning").innerText = "";

    if (newTask === "") {
        document.getElementById("invalid-input-warning").innerText = "invalid input";
    } else {
        newItem.innerText = newTask;
        document.getElementById("toDo-ul").appendChild(newItem);
        Counter("plus")
    }

    document.getElementById("toDoInput").value = ""
}

