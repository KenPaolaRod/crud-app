const inpTitle = document.getElementById("title");
const inpDesc = document.getElementById("desc");
const submitToDo = document.getElementById("submit-to-do");
const submitError = document.querySelector(".input-error");
const toDoBox = document.querySelector(".input-boxes");
const form = document.getElementById("form");
const updateBtnsBox = document.querySelector(".update-btns");
const updateBtn = document.getElementById("update-btn");
const errorMsg = document.querySelector(".input-error");
const numberOfTasks = document.querySelector(".number-of-to-do")

let editIndex;
let tasks = [];

loadTasks()
mostrar()


// si hay tasks pendientes, mostrar cuando la pagina cargue
function loadTasks() {
  let task = localStorage.getItem("task")
  if (task) {
    tasks = JSON.parse(task)
  } else {
    []
  }
}

// Mostrar task en el UI
function mostrar() {
  const taskBoxes = document.querySelectorAll(".input-box");

  if(taskBoxes) {
    taskBoxes.forEach(task => task.remove())
  }

  tasks.forEach(e => showTask(e.title, e.desc, tasks.indexOf(e)));

  // mostrar el numero de tasks que hay pendientes
  numberOfTasks.textContent = `Hi Kenyerling, you have ${tasks.length} in your list`
}

// aempujar task al array de tasks
function addTask(tit, dec) {
  let myTask = {
    title: tit,
    desc: dec
  }

  tasks.push(myTask)
  localStorage.setItem("task", JSON.stringify(tasks));
}

// eliminar task
function removeTask(task) {
  tasks.splice(task, 1)
  localStorage.setItem("task", JSON.stringify(tasks));
}

// cuando se le da click al boton de editar, poder editar.
function editTask(index) {
  editIndex = index
  inpTitle.value = tasks[index].title
  inpDesc.value = tasks[index].desc
}

// poder ver reflejados los cambios editados
function updateTask() {
  tasks[editIndex].title = inpTitle.value;
  tasks[editIndex].desc = inpDesc.value;

  localStorage.setItem("task", JSON.stringify(tasks));
  mostrar()
}

updateBtn.addEventListener("click", function (e) {
  e.preventDefault();
  updateTask()
  console.log(tasks);

  clear()

  updateBtnsBox.classList.remove("update-click");
  submitToDo.classList.remove("btn-disable")
  

})

// inyectar el codigo y crear los estilos de las cajas de tasks
function showTask(title, desc, index) {
  let toDoDiv = document.createElement("div");
  toDoDiv.classList.add("input-box");
  let toDoTitle = document.createElement("h2");
  let toDoDescription = document.createElement("p");

  // aqui se crea un elemento que guarde el index de los elementos del array
  let indexNumber = document.createElement("span");
  indexNumber.classList.add("index")
  indexNumber.textContent = index

  // edit task 
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", function (e) {
    e.preventDefault();

    editTask(index)
    console.log("clicked");

      submitToDo.classList.add("btn-disable")
      updateBtnsBox.classList.add("update-click")
  });

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");

  // eliminar task
  removeBtn.addEventListener("click", function (e) {
    e.preventDefault()

    removeTask(index)

    localStorage.setItem("task", JSON.stringify(tasks));

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


  if(!inpTitle.value || !inpDesc.value) {
    errorMsg.classList.add("fire-input-error")
  } else {
    addTask(inpTitle.value, inpDesc.value);
    mostrar()
    errorMsg.classList.remove("fire-input-error")
  }


  clear()
});

function clear() {
  form.reset();
}



