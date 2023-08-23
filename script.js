const inpTitle = document.getElementById("title");
const inpDesc = document.getElementById("desc");
const submitToDo = document.getElementById("submit-to-do");
const submitError = document.querySelector(".input-error");
const toDoBox = document.querySelector(".input-boxes");
const form = document.getElementById("form");

let tasks = [];

loadTasks()
mostrar()

function loadTasks() {
  let task = localStorage.getItem("task")
  tasks = JSON.parse(task)
}

function mostrar() {
  tasks.forEach(e => showTask(e.title, e.desc))
}

function addTask(tit, dec) {
  let myTask = {
    titles: tit,
    descs: dec
  }

  tasks.push(myTask)
  localStorage.setItem("task", JSON.stringify(tasks))

  showTask(tit, dec)
}

function showTask(title, desc) {
  let toDoDiv = document.createElement("div");
  toDoDiv.classList.add("input-box");
  let toDoTitle = document.createElement("h2");
  let toDoDescription = document.createElement("p");

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn")

  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid")
  editIcon.classList.add("fa-pen-to-square")

  const removeIcon = document.createElement("i");
  removeIcon.classList.add("fa-solid")
  removeIcon.classList.add("fa-trash-can")

  toDoTitle.textContent = title
  toDoDescription.textContent = desc

  toDoBox.appendChild(toDoDiv);
  toDoDiv.appendChild(toDoTitle);
  toDoDiv.appendChild(toDoDescription);
  toDoDiv.appendChild(editBtn);
  toDoDiv.appendChild(removeBtn);
  editBtn.appendChild(editIcon);
  removeBtn.appendChild(removeIcon);

}

submitToDo.addEventListener("click", function (e) {
  e.preventDefault()

  addTask(inpTitle.value, inpDesc.value);

  if(!tasks) {
    mostrar()
  } 

  clear()
})

function clear() {
  form.reset();
}
