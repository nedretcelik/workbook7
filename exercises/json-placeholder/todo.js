"use strict";

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((todos) => {
    const todoIdInput = document.querySelector("#todoIdInput");
    const toDoTableBody = document.querySelector("#toDoTableBody");
    const toDoIdButton = document.querySelector("#toDoIdButton");

    console.log(todos);
    function displayToDoList() {
      toDoTableBody.innerText = "";
      for (const todo of todos) {
        console.log(todo);
        if (todo.id == todoIdInput.value) {
          let row = toDoTableBody.insertRow();

          let cell1 = row.insertCell();
          cell1.innerText = todo.userId;

          let cell2 = row.insertCell();
          cell2.innerText = todo.title;

          let cell3 = row.insertCell();
          cell3.innerText = todo.completed;
        }
      }
    }
    toDoIdButton.onclick = displayToDoList;
  });
