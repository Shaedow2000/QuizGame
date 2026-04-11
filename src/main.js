import { load_quiz } from "./assets/quizLoader.js";
import { redo, reset, setStorageItems } from "./assets/storageManager.js";

setStorageItems();

const menu = document.getElementById("menu");
const shadow = document.getElementById("shadow");

const open_menu_button = document.getElementById("menu-button");
const close_menu_button = document.getElementById("close-menu");

const choice_buttons = document.querySelectorAll(".choice-button");
const next_button = document.getElementById("next-quiz");

const reset_button = document.getElementById("reset");
const redo_button = document.getElementById("redo");

const correct_score = document.getElementById("correct-score");
const wrong_score = document.getElementById("wrong-score");

if (correct_score && wrong_score) {
  correct_score.innerHTML = +localStorage.getItem("correct");
  wrong_score.innerHTML = +localStorage.getItem("wrong");
}

open_menu_button.addEventListener("click", () => {
  menu.style.right = "0px";
  shadow.style.display = "block";
  shadow.style.visibility = "visible";
});

close_menu_button.addEventListener("click", () => {
  menu.style.right = "-1000px";
  shadow.style.display = "none";
  shadow.style.visibility = "invisible";
});

for (let i = 0; i < choice_buttons.length; i++) {
  let choice_button = choice_buttons[i];

  choice_button.addEventListener("click", () => {
    next_button.style.display = "block";
  });
}

reset_button.addEventListener("click", () => reset());

redo_button.addEventListener("click", () => redo());

next_button?.addEventListener("click", () => {
  let current = +localStorage.getItem("current");
  localStorage.setItem("current", ++current);

  load_quiz();

  choice_buttons.forEach((button) => button.classList.remove("clicked"));

  next_button.style.display = "none";
});
