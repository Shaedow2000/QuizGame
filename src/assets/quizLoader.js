import quizes from "./quiz.js";

let quizId =
  localStorage.getItem("current") !== null
    ? localStorage.getItem("current")
    : 0;
let quizQuestion = quizes[quizId].question;
let [choice1, choice2, choice3, choice4] = quizes[quizId].choices;

const quizId_span = document.getElementById("quiz-number");
const quizQuestion_span = document.getElementById("quiz");
const choice1_button = document.getElementById("choice1");
const choice2_button = document.getElementById("choice2");
const choice3_button = document.getElementById("choice3");
const choice4_button = document.getElementById("choice4");

quizId_span.innerHTML = quizId;
quizQuestion_span.innerHTML = quizQuestion;
choice1_button.innerHTML = choice1;
choice2_button.innerHTML = choice2;
choice3_button.innerHTML = choice3;
choice4_button.innerHTML = choice4;
