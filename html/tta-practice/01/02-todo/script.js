// Select DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Load To-Do Items from Local Storage on Page Load
document.addEventListener('DOMContentLoaded', loadTodos);

// Event Listener for Adding a To-Do
todoForm.addEventListener('submit', addTodo);

// Function to Add a To-Do
function addTodo(e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    // Create To-Do Item Elements
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.classList.add('todo-text');
    span.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&times;';

    // Append Elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Save to Local Storage
    saveTodo({ text: todoText, completed: false });

    // Clear Input
    todoInput.value = '';
}

// Function to Save To-Do to Local Storage
function saveTodo(todo) {
    let todos = getTodosFromLocalStorage();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to Retrieve To-Dos from Local Storage
function getTodosFromLocalStorage() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
}

// Function to Load To-Dos from Local Storage
function loadTodos() {
    const todos = getTodosFromLocalStorage();
    todos.forEach(todo => {
        // Create To-Do Item Elements
        const li = document.createElement('li');
        li.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        if (todo.completed) {
            checkbox.checked = true;
        }

        const span = document.createElement('span');
        span.classList.add('todo-text');
        span.textContent = todo.text;
        if (todo.completed) {
            span.classList.add('completed');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '&times;';

        // Append Elements
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Event Listener for To-Do List (Delete & Toggle)
todoList.addEventListener('click', handleTodoClick);

// Function to Handle Clicks on To-Do Items
function handleTodoClick(e) {
    if (e.target.classList.contains('delete-btn')) {
        const li = e.target.parentElement;
        const todoText = li.querySelector('.todo-text').textContent;
        li.remove();
        removeTodoFromLocalStorage(todoText);
    }

    if (e.target.type === 'checkbox') {
        const li = e.target.parentElement;
        const todoText = li.querySelector('.todo-text').textContent;
        li.querySelector('.todo-text').classList.toggle('completed');
        toggleTodoCompleted(todoText);
    }
}

// Function to Remove To-Do from Local Storage
function removeTodoFromLocalStorage(text) {
    let todos = getTodosFromLocalStorage();
    todos = todos.filter(todo => todo.text !== text);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to Toggle To-Do Completion in Local Storage
function toggleTodoCompleted(text) {
    let todos = getTodosFromLocalStorage();
    todos = todos.map(todo => {
        if (todo.text === text) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}
