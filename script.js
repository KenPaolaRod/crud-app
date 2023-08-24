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
  if (task) {
    tasks = JSON.parse(task)
  } else {
    []
  }
}


function mostrar() {
  const taskBoxes = document.querySelectorAll(".input-box");

  if(taskBoxes) {
    taskBoxes.forEach(task => task.remove())
  }

  tasks.forEach(e => showTask(e.title, e.desc, tasks.indexOf(e)))
}

function addTask(tit, dec) {
  let myTask = {
    title: tit,
    desc: dec
  }

  tasks.push(myTask)
  localStorage.setItem("task", JSON.stringify(tasks));
}

function removeTask(task) {
  tasks.splice(task, 1)
  localStorage.setItem("task", JSON.stringify(tasks));
}


function showTask(title, desc, index) {
  let toDoDiv = document.createElement("div");
  toDoDiv.classList.add("input-box");
  let toDoTitle = document.createElement("h2");
  let toDoDescription = document.createElement("p");

  // aqui se crea un elemento que guarde el index de los elementos del array
  let indexNumber = document.createElement("span");
  indexNumber.classList.add("index")
  indexNumber.textContent = index

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");

  // eliminar task
  removeBtn.addEventListener("click", function (e) {
    e.preventDefault()

    //removeBtn.parentElement.remove()
    removeTask(index)
    mostrar()
  })

  const editIcon = document.createElement("i");
  editIcon.classList.add("fa-solid");
  editIcon.classList.add("fa-pen-to-square");

  const removeIcon = document.createElement("i");
  removeIcon.classList.add("fa-solid");
  removeIcon.classList.add("fa-trash-can");

  toDoTitle.textContent = title
  toDoDescription.textContent = desc

  toDoBox.appendChild(toDoDiv);
  toDoDiv.appendChild(toDoTitle);
  toDoDiv.appendChild(toDoDescription);
  toDoDiv.appendChild(indexNumber)
  toDoDiv.appendChild(editBtn);
  toDoDiv.appendChild(removeBtn);
  editBtn.appendChild(editIcon);
  removeBtn.appendChild(removeIcon);

}

submitToDo.addEventListener("click", function (e) {
  e.preventDefault()

  addTask(inpTitle.value, inpDesc.value);
  mostrar()

  clear()
})

function clear() {
  form.reset();
}



