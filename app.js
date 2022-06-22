const input = document.querySelector(".inputFields");
let check = document.querySelectorAll("#done");
let label = document.querySelectorAll(".label");
const plus = document.querySelector(".plusButton");
const todoList = document.querySelector(".todoList");
let deleteBtn = document.querySelectorAll(".deleteButton");

//const sortAll = document.querySelector(".all")
//const sortAct = document.querySelector(".active")
//const sortCpl = document.querySelector(".complited")

let counter = 2;

//function for adding tasks
const addTask = () => {
  if (todoList.children.length == 15) {
    alert("it's maximum tasks")
  } else {
  const block = document.createElement("div");
  block.innerHTML = `<input type="checkbox" id="done" name="task1" />
    <label class = "label">${input.value}</label>
    <i class="fa-solid fa-eraser deleteButton"></i>`;
  todoList.append(block);
  check = document.querySelectorAll("#done");
  label = document.querySelectorAll(".label");
  deleteBtn = document.querySelectorAll(".deleteButton");
  input.value = "";
  deleteEvent();
  checked();
  }
};

//function for crossing the line
const crossLine = () => {
  for (i = 0; i < check.length; i++) {
    if (check[i].checked) {
      //console.log(label)
      label[i].innerHTML = `<s>${label[i].innerText}</s>`;
    } else {
      //console.log(label)
      label[i].innerHTML = `${label[i].innerText}`;
    }
  }
};

//function for deleting tasks
function deleteTask() {
  this.parentNode.remove();
}

//function for adding event listener1
const checked = () => {
  for (i = 0; i < check.length; i++) {
    check[i].addEventListener("click", crossLine);
  }
  crossLine();
};
//function for adding event listener2
const deleteEvent = () => {
  for (i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", deleteTask);
  }
};


/*sortAll.addEventListener("click", () => {

  sortAll.classList.add("sort")
})*/


window.addEventListener("load", checked);
window.addEventListener("load", deleteEvent);
plus.addEventListener("click", addTask);
input.addEventListener("keydown", function (btn) {
  if (btn.key === "Enter") {
    addTask();
  }
});


