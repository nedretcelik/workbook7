fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));



  fetch("https://jsonplaceholder.typicode.com/comments/3")
  .then((response) => response.json())
  .then((json) => console.log(json));

