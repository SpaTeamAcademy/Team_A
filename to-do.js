



function addItem() {
    var newTask = document.getElementById("toDoInput").value;
    var newItem = document.createElement("li");
    
    document.getElementById("invalid-input-warning").innerText = "";

    if (newTask === "") {
        document.getElementById("invalid-input-warning").innerText = "invalid input";
    } else {
        newItem.innerText = newTask;
        document.getElementById("toDo-ul").appendChild(newItem);
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        document.getElementById("toDo-ul").appendChild(deleteButton);
    }

    document.getElementById("toDoInput").value = ""
}

function deleteItem(){

}
