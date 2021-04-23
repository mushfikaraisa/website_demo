secret_message = document.getElementById("secret-message");
secret_button = document.getElementById("secret-button");

const reveal = function() {
    secret_message.style.display = 'block';
    secret_button.style.display = 'none';
}

secret_button.addEventListener('click', reveal);

/* (STEP 2) An empty error string is created at the top of the validate form function. If any of the input fields are left empty when the
submit button is clicked, the appropriate error is concatenated to the error string. If the error string is true, it appears above the
submission form. If all of the input fields have valid inputs, the inputs are passed into the addTask method and stored in the this.tasks array. After this.tasks is updated, it is rendered to the page again and updated in local storage. Once the all changes have been made, all of the input fields are cleared. This function is the event handler of the submit button. */
const validFormFieldInput = () => {

    let errorString = '';

    const newTaskNameInput = document.getElementById('task-name');
    const taskName = newTaskNameInput.value;


    const newTaskDescriptionInput = document.getElementById('task-description');
    const taskDescription = newTaskDescriptionInput.value;


    const newAssignedToInput = document.getElementById('assigned-to');
    const assignedTo = newAssignedToInput.value;


    const newDueDateInput = document.getElementById('due-date');
    const dueDate = newDueDateInput.value;


    const newTaskStatusInput = document.getElementById('task-status');
    const taskStatus = newTaskStatusInput.value;


    if (!taskName) {
        errorString += 'Task Name cannot be empty.<br>';
    };
    if (!taskDescription) {
        errorString += 'Task Description cannot be empty.<br>';
    };
    if (!assignedTo) {
        errorString += 'Assigned To cannot be empty.<br>';
    };
    if (!dueDate) {
        errorString += 'Due Date cannot be empty.<br>';
    };
    if (!taskStatus) {
        errorString += 'Status cannot be empty.<br>';
    };

    // Displays errorString in bootstrap box
    const popError = () => {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').innerHTML = errorString;
    }

    if (errorString) {
        popError();
        return;
    } else {
        manager.addTask(taskName, taskDescription, assignedTo, dueDate, taskStatus);
        manager.render();
        manager.save();
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('assigned-to').value = '';
        document.getElementById('due-date').value = '';
        document.getElementById('task-status').value = '';
        document.getElementById('errorMessage').style.display = '';
    }
}
