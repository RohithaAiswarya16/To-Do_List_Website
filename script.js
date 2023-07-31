// Function to add a new task
function addTask() {
    const inputField = document.getElementById("taskInput");
    const taskText = inputField.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");

    newTask.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)">
        <span class='z'>${taskText}</span>
        <span class="delete-btn" onclick="deleteTask(this.parentElement)">Remove</span>
    `;

    taskList.appendChild(newTask);
    inputField.value = "";
}

// Function to toggle task completion
function toggleTask(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}

// Function to delete a task
function deleteTask(taskElement) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(taskElement);
}
