var addButton = document.getElementById('addButton');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');

addButton.addEventListener('click', function() {
    var taskText = taskInput.value;

    if (taskText !== '') {
        var listItem = document.createElement('li');
        listItem.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});
