function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "done-btn";
    doneButton.onclick = function() {
        listItem.classList.toggle("completed");
    };

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(doneButton);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);
    taskInput.value = "";
}
