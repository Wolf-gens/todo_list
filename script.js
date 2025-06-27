const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task");
const taskList = document.querySelector(".task-list");

function createTask(text) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-task");
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  removeBtn.addEventListener("click", () => {
    taskItem.remove();
  });

  checkbox.addEventListener("change", () => {
    taskItem.classList.toggle("completed");
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(span);
  taskItem.appendChild(removeBtn);

  taskList.prepend(taskItem);
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text !== "") {
    createTask(text);
    taskInput.value = "";
    taskInput.focus();
  }
});

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});
