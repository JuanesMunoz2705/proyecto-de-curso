// Cargar tareas desde localStorage o inicializar una lista vacía
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Renderizar tareas en la interfaz
function render() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Limpiar lista existente

    // Crear cada elemento de tarea
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        if (todo.completed) todoItem.classList.add('completed');

        const todoContent = document.createElement('div');
        todoContent.classList.add('todo-content');

        const todoText = document.createElement('span');
        todoText.innerText = `${todo.title} - ${todo.dueDate}`;
        todoContent.appendChild(todoText);

        const actions = document.createElement('div');
        actions.classList.add('todo-actions');

        // Botón Completar
        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-btn');
        completeButton.innerText = 'Completar';
        completeButton.onclick = () => toggleComplete(index);
        actions.appendChild(completeButton);

        // Botón Editar
        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.innerText = 'Editar';
        editButton.onclick = () => editTodo(index);
        actions.appendChild(editButton);

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'Eliminar';
        deleteButton.onclick = () => deleteTodo(index);
        actions.appendChild(deleteButton);

        todoItem.appendChild(todoContent);
        todoItem.appendChild(actions);

        // Añadir animación al elemento de tarea
        setTimeout(() => todoItem.classList.add('fadeIn'), 10);

        todoList.appendChild(todoItem);
    });
}

// Añadir nueva tarea
function addTodo() {
    const title = document.getElementById('todo-title').value.trim();
    const dueDate = document.getElementById('date-picker').value.trim();

    // Verificación de datos de entrada
    if (title && dueDate) {
        todos.push({ title, dueDate, completed: false });
        saveTodos(); // Guardar tareas en localStorage
        render();    // Actualizar la lista en pantalla
        document.getElementById('todo-title').value = '';
        document.getElementById('date-picker').value = '';
    } else {
        alert("Por favor, ingresa una tarea y una fecha.");
    }
}

// Marcar tarea como completada o incompleta
function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    render();
}

// Editar tarea
function editTodo(index) {
    const newTitle = prompt("Edita la tarea:", todos[index].title);
    const newDate = prompt("Edita la fecha (YYYY-MM-DD):", todos[index].dueDate);

    if (newTitle && newDate) {
        todos[index].title = newTitle;
        todos[index].dueDate = newDate;
        saveTodos();
        render();
    } else {
        alert("Tarea y fecha no pueden estar vacías.");
    }
}

// Eliminar tarea
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    render();
}

// Guardar tareas en localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Inicializar renderizado al cargar la página
render();
