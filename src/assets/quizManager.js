import quizes from "./quiz.js";
import { getUndoneQuiz } from "./quizLoader.js";

const choice_buttons = document.querySelectorAll(".choice-button");

let current_quiz = getUndoneQuiz();
let correct_choice = quizes[current_quiz].correct;

for (let i = 0; i < choice_buttons.length; i++) {
  let choice_button = choice_buttons[i];

  choice_button.addEventListener("click", () => {
    if (choice_button.classList.contains("clicked")) {
      return;
    }

    if (choice_button.id.includes(correct_choice + 1)) {
      let correct_score = +localStorage.getItem("correct");
      localStorage.setItem("correct", ++correct_score);
    } else {
      let wrong_score = +localStorage.getItem("wrong");
      localStorage.setItem("wrong", ++wrong_score);

      let wrong_quizes_indexes = JSON.parse(
        localStorage.getItem("wrong_quizes_indexes"),
      );

      wrong_quizes_indexes.push(current_quiz);

      localStorage.setItem(
        "wrong_quizes_indexes",
        JSON.stringify(wrong_quizes_indexes),
      );
    }

    choice_buttons.forEach((button) =>
      button.id.includes(correct_choice + 1)
        ? button.classList.add("correct")
        : button.classList.add("wrong"),
    );

    choice_buttons.forEach((button) => button.classList.add("clicked"));

    let done = JSON.parse(localStorage.getItem("done"));
    done.push(current_quiz);

    localStorage.setItem("done", JSON.stringify(done));

    current_quiz++;
    correct_choice = quizes[current_quiz].correct;
    localStorage.setItem("current", current_quiz);
  });
}
