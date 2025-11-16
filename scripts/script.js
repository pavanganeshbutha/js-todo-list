const taskDescriptionField = document.querySelector("input");
const addTaskButtom = document.querySelector("button");
const taskList = document.querySelector(".task-list");

let tasks = [];

function initializaApp() {
  initalTasksRender();
  setupEventListeners();
}

function renderTaskOnPage(id, task) {
  const newTask = document.createElement("li");
  newTask.append(task);
  newTask.classList.add("task-list-item");
  newTask.setAttribute("id", id);
  taskList.append(newTask);
}

function initalTasksRender() {
  if (tasks.length === 0) {
    renderTaskOnPage(0, "Enter task and hit add button!");
  } else {
    for (let task in tasks) {
      renderTaskOnPage(task, tasks[task]);
    }
  }
}

function setupEventListeners() {
  addTaskButtom.addEventListener("click", (event) => {
    event.preventDefault();
    const task = taskDescriptionField.value;
    if (task == "") {
      alert("Task cannot be empty");
      return;
    }
    tasks.push(task);
    renderTaskOnPage(tasks.length, task);
    taskDescriptionField.value = "";
  });
}

initializaApp();
