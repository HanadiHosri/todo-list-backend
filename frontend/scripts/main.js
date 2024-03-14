function addTask() {
    let li = document.createElement("li");
    let taskInput = document.getElementById("to-do-input");
    let inputValue = taskInput.value;
    let textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if (inputValue == "") {
        alert("please write a task!");
    } else {
        li.appendChild(createCompleteButton(li));
        li.appendChild(createCloseButton(li));
        document.getElementById("list").appendChild(li);
    }

    taskInput.value = "";
}

function createCloseButton(task) {
    let closeButton = document.createElement("button");
    closeButton.appendChild(document.createTextNode("\u00D7"));
    closeButton.onclick = function () {
        removeTask(task);
    }
    return closeButton;
}

function removeTask(task) {
    let div = task;
    div.style.display = "none";
}

function createCompleteButton(task) {
    let completeButton = document.createElement("button");
    completeButton.appendChild(document.createTextNode("\u2713"));
    completeButton.onclick = function () {
        completeTask(task);
    }
    return completeButton;
}

function completeTask(task) {
    let div = task;
    div.style.textDecoration = "line-through";
}