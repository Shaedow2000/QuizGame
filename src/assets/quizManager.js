import quizes from "./quiz";

const choice_buttons = document.querySelectorAll(".choice-button");

const current_quiz =
  localStorage.getItem("current") !== null
    ? localStorage.getItem("current")
    : 0;
const correct_choice = quizes[current_quiz].correct;

for (let i = 0; i < choice_buttons.length; i++) {
  let choice_button = choice_buttons[i];

  choice_button.addEventListener("click", () => {
    if (choice_button.id.includes(correct_choice + 1)) {
      let correct_score =
        localStorage.getItem("correct") !== null
          ? localStorage.getItem("correct")
          : 0;
      localStorage.setItem("correct", correct_score++);
    } else {
      let wrong_score =
        localStorage.getItem("wrong") !== null
          ? localStorage.getItem("wrong")
          : 0;
      localStorage.setItem("wrong", wrong_score++);

      let wrong_quizes_indexes =
        localStorage.getItem("wrong_quizes_indexes") !== null
          ? JSON.parse(localStorage.getItem("wrong_quizes_indexes"))
          : [];
      console.log(wrong_quizes_indexes);
      localStorage.setItem(
        "wrong_quizes_indexes",
        JSON.stringify(wrong_quizes_indexes.push(current_quiz)),
      );
    }
  });
}
