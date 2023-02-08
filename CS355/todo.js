var addText, addBtn, tasks, newTask, newSpan;

addText = document.getElementById('addText');
addBtn = document.getElementById('addBtn');
tasks = document.getElementById('tasks');

addBtn.addEventListener('click', taskAdd, false); //when user clicks the button

function taskAdd(e) {
    newTask = document.createElement('div');
    tasks.appendChild(newTask);
    newTask.textContent = addText.value
    newTask.classList.add('todos');
    addText.value = '';  //the value should be blan
    
    newSpan = document.createElement('footer');
    newTask.appendChild(newSpan);

    newSpan.innerHTML = '<a href="">Completed</a>';
}




