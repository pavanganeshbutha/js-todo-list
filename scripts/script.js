const taskDescriptionField = document.querySelector("input");
const addTaskButtom = document.querySelector("button");
const taskList = document.querySelector(".task-list");
let currentYear = new Date().getFullYear();
let copyrightYear = document.querySelector("span");

let tasks = [];

function initializaApp() {
  initalTasksRender();
  setupEventListeners();
  copyrightYear.append(currentYear);
}

function renderTaskOnPage(id, task) {
  const newTask = document.createElement("li");
  newTask.append(task);
  newTask.classList.add("task-list-item");
  newTask.setAttribute("id", id);
  newTask.addEventListener("click", deleteTask);
  taskList.append(newTask);
}

const deleteTask = function (event) {
  const completedTask = event.srcElement;
  const completedTaskId = completedTask.getAttribute("id");
  tasks.splice(completedTaskId - 1, 1);
  taskList.removeChild(completedTask);
};

function initalTasksRender() {
  for (let task in tasks) {
    renderTaskOnPage(task, tasks[task]);
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
