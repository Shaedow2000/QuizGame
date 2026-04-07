import quizes from "./quiz";

const choice_buttons = document.querySelectorAll(".choice-button");

const current_quiz =
  localStorage.getItem("current") !== null
    ? localStorage.getItem("current")
    : 0;
const correct_choice = quizes[current_quiz].corrent;

for (let i = 0; i < choice_buttons.length; i++) {
  let choice_button = choice_buttons[i];

  choice_button.addEventListener("click", () => {
    if (choice_button.id.includes(current_quiz + 1)) {
      console.log("Correct !!");
    } else {
      console.log("Wrong !!");
    }
  });
}
