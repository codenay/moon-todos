// variables

var submit = document.querySelector(".add");
var ul = document.getElementById("list-con");
var search = document.getElementById("search");
var state = document.querySelector(".select");

//event listeners
submit.addEventListener("click", addList);
search.addEventListener("keyup", filter);
ul.addEventListener("click", remove);
state.addEventListener("click", itemState);

//functions

// add to create and add

function addList(e) {
  e.preventDefault();
  //create div
  var newDiv = document.createElement("div");
  newDiv.classList.add("inner");

  //create list
  var li = document.createElement("li");
  li.className = "list";

  // fetch input
  var input = document.getElementById("input");
  // create text node
  var textNode = document.createTextNode(input.value);

  //append text node to li
  li.appendChild(textNode);

  //append li to new div
  newDiv.appendChild(li);

  //////////////////////////////////////////

  //btns
  //check btn
  var completedBtn = document.createElement("img");
  completedBtn.setAttribute("src", "./images/check.svg");
  completedBtn.classList.add("check");

  newDiv.appendChild(completedBtn);

  //close btn
  var closeBtn = document.createElement("img");
  closeBtn.setAttribute("src", "./images/close.svg");
  closeBtn.classList.add("close");
  newDiv.appendChild(closeBtn);

  //
  ul.appendChild(newDiv);
  input.value = "";
}
///filter
function filter(e) {
  var searchText = e.target.value.toLowerCase();

  var items = ul.getElementsByTagName("li");

  //to array
  Array.from(items).forEach(function (item) {
    if (itemName.toLowerCase().indexOf(searchText) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

//remove
function remove(e) {
  if (e.target.classList.contains("close")) {
    var del = e.target.parentElement;
    del.style.transition = "all 0.5s ease";
    del.classList.add("fall");
    del.addEventListener("transitionend", function () {
      del.remove();
    });
    // ul.removeChild(del);
  }

  if (e.target.classList.contains("check")) {
    var del = e.target.parentElement;
    del.classList.toggle("completed");
  }
}

function itemState(e) {
  var todos = ul.firstChild;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
