const toDoInput = document.querySelector(".to-do");
const textInput = document.querySelector(".description");
const submitToDo = document.getElementById("submit-to-do");
const submitError = document.querySelector(".input-error");
const toDoBox = document.querySelector(".input-boxes");

let tasks = [];



submitToDo.addEventListener("click", toDoInputs )


function toDoInputs(e) {
  e.preventDefault()

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



  toDoTitle.textContent = toDoInput.value
  toDoDescription.textContent = textInput.value

  toDoBox.appendChild(toDoDiv);
  toDoDiv.appendChild(toDoTitle);
  toDoDiv.appendChild(toDoDescription);
  toDoDiv.appendChild(editBtn);
  toDoDiv.appendChild(removeBtn);
  editBtn.appendChild(editIcon);
  removeBtn.appendChild(removeIcon);

  // toDoBox.appendChild(toDoDescription)


  console.log(toDoInput.value);
  console.log("click"); 
}

