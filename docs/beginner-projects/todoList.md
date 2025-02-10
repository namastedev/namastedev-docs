---
sidebar_position: 3
---

# Todo List Pro

## Introduction
A simple **Todo List** web app built using HTML, CSS, and JavaScript. This project allows users to add, delete, and mark tasks as completed.

## Features
- Add new tasks
- Delete tasks
- Mark tasks as completed
- Persist tasks using LocalStorage

## Technologies Used
- HTML
- CSS
- JavaScript (Vanilla JS)
- LocalStorage

## Project Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/todo-list.git
   cd todo-list
   ```
2. Open `index.html` in your browser:
   ```sh
   open index.html
   ```

## File Structure
```
/beginner-project
├── img
│   ├── namastedev.png
├── todo-list-project.md
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Project Preview
![Project Preview](img/namastedevLogo.png)

## Code Implementation
### 1. HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Todo List</h1>
        <input type="text" id="taskInput" placeholder="Enter a new task">
        <button id="addTask">Add Task</button>
        <ul id="taskList"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### 2. CSS Styling
```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}
.container {
    background: white;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
button {
    cursor: pointer;
}
.completed {
    text-decoration: line-through;
    color: grey;
}
```

### 3. JavaScript Functionality
```js
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.addEventListener("dblclick", () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    });
});
```

## How to Use
1. Enter a new task in the input field.
2. Click the **Add Task** button to add it to the list.
3. Click on a task to mark it as completed.
4. Double-click a task to remove it.