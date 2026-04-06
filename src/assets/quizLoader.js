import quizes from "./quiz.js";

let quizId =
  localStorage.getItem("current") !== null
    ? localStorage.getItem("current")
    : 0;
let quizQuestion = quizes[quizId].question;
let [choice1, choice2, choice3, choice4] = quizes[quizId].choices;

let quizId_span = document.getElementById("quiz-number");
let quizQuestion_span = document.getElementById("quiz");
let choice1_button = document.getElementById("choice1");
let choice2_button = document.getElementById("choice2");
let choice3_button = document.getElementById("choice3");
let choice4_button = document.getElementById("choice4");

quizId_span.innerHTML = quizId;
quizQuestion_span.innerHTML = quizQuestion;
choice1_button.innerHTML = choice1;
choice2_button.innerHTML = choice2;
choice3_button.innerHTML = choice3;
choice4_button.innerHTML = choice4;
