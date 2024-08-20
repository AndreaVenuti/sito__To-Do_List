function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${taskValue}</span>
            <button class="remove-task-btn">Rimuovi</button>
        `;

        taskList.appendChild(li);

        li.querySelector('span').addEventListener('click', function() {
            this.classList.toggle('task-done');
        });

        li.querySelector('.remove-task-btn').addEventListener('click', function() {
            li.remove();
        });

        taskInput.value = '';
    }
}

document.getElementById('add-task-btn').addEventListener('click', addTask);

// Rileva il tasto "Invio" e aggiunge la task
document.getElementById('task-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Funzionalità per eliminare tutte le attività
document.getElementById('clear-tasks-btn').addEventListener('click', function() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Svuota la lista delle attività
});