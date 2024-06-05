
"use strict";

const categoriesDropdown = document.querySelector("#categoriesDropdown");
const jokeBlockquote = document.querySelector("#jokeBlockquote");

function loadCategoriesDropdown() {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((categories) => categories.filter((c) => c != "explicit"))
    .then((filteredCategories) => {
      for (const category of filteredCategories) {
        let option = new Option(category, category);
        categoriesDropdown.appendChild(option);
      }
    });
}

function loadJoke() {
  const category = categoriesDropdown.value;
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((joke) => (jokeBlockquote.innerText = joke.value));
}

categoriesDropdown.addEventListener("change", loadJoke);

loadCategoriesDropdown();