document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');
    const completedTasksList = document.getElementById('completed-tasks');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = createTaskItem(taskText);
        tasksList.appendChild(listItem);

        taskInput.value = '';
    }

    function createTaskItem(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            listItem.classList.add('completed');
            completedTasksList.appendChild(listItem);
            listItem.removeChild(completeButton);
            listItem.removeChild(deleteButton);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        return listItem;
    }
});
