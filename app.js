const input = document.querySelector(".inputFields");
let check = document.querySelectorAll("#done");
let label = document.querySelectorAll(".label");
const plus = document.querySelector(".plusButton");
const todoList = document.querySelector(".todoList");
let deleteBtn = document.querySelectorAll(".deleteButton");

const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".completed");

let counter = 2;

//function for adding tasks
const addTask = () => {
  if (todoList.children.length == 15) {
    alert("it's maximum tasks");
  } else {
    const block = document.createElement("div");
    block.classList.add("sortAll");
    block.innerHTML = `<input type="checkbox" id="done"/>
    <label class = "label">${input.value}</label>
    <i class="fa-solid fa-eraser deleteButton"></i>`;
    todoList.append(block);

    check = document.querySelectorAll("#done");
    label = document.querySelectorAll(".label");
    deleteBtn = document.querySelectorAll(".deleteButton");

    input.value = "";

    deleteEvent();
    checked();

    const sortAll = document.querySelectorAll(".sortAll");
    for (i = 0; i < sortAll.length; i++) {
      sortAll[i].style.display = "flex";
    }

    allBtn.classList.add("sort");
    activeBtn.classList.remove("sort");
    completedBtn.classList.remove("sort");
  }
};

//function for crossing the line
const crossLine = () => {
  for (i = 0; i < check.length; i++) {
    if (check[i].checked) {
      check[i].parentNode.classList.add("sortCmp");
      check[i].parentNode.classList.remove("sortAct");
    } else {
      check[i].parentNode.classList.add("sortAct");
      check[i].parentNode.classList.remove("sortCmp");
    }
  }
};

//function for deleting tasks
function deleteTask() {
  this.parentNode.classList.add("fall");
  this.parentNode.addEventListener("transitionend", () => {
    this.parentNode.remove();
  });
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

//sort function
const sortTodo = (e) => {
  
  allBtn.classList.remove("sort");
  activeBtn.classList.remove("sort");
  completedBtn.classList.remove("sort");
  e.target.classList.add("sort");

  const sortAll = document.querySelectorAll(".sortAll");
  const sortActive = document.querySelectorAll(".sortAct");
  const sortCompleted = document.querySelectorAll(".sortCmp");

  switch (e.target.classList[0]) {
    case "all":
      for (i = 0; i < sortAll.length; i++) {
        sortAll[i].style.display = "flex";
      }
      break;

    case "active":
      for (i = 0; i < sortActive.length; i++) {
        sortActive[i].style.display = "flex";
      }
      for (i = 0; i < sortCompleted.length; i++) {
        sortCompleted[i].style.display = "none";
      }
      break;

    case "completed":
      for (i = 0; i < sortActive.length; i++) {
        sortActive[i].style.display = "none";
      }
      for (i = 0; i < sortCompleted.length; i++) {
        sortCompleted[i].style.display = "flex";
      }
      break;
  }
};

allBtn.addEventListener("click", sortTodo);
activeBtn.addEventListener("click", sortTodo);
completedBtn.addEventListener("click", sortTodo);

window.addEventListener("load", checked);
window.addEventListener("load", deleteEvent);
plus.addEventListener("click", addTask);
input.addEventListener("keydown", function (btn) {
  if (btn.key === "Enter") {
    addTask();
  }
});
