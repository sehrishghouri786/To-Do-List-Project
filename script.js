// Get the task input, button, and task list elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a task
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new task item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a remove button to the task item
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('removeBtn');
    li.appendChild(removeBtn);

    // Append the task item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";

    // Remove task on button click
    removeBtn.addEventListener('click', function () {
        li.remove();
    });
});
