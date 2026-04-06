import quizes from "./quiz.js";

let quizId =
  localStorage.getItem("current") !== null
    ? localStorage.getItem("current")
    : 0;
let quizQuestion = quizes[quizId].question;
let [choice1, choice2, choice3, choice4] = quizes[quizId].choices;

let quizIs_span = document.getElementById("quiz-number");
let quizQuestion_span = document.getElementById("quiz");
let choice1_button = document.getElementById("choice1");
let chocie2_button = document.getElementById("choice2");
let choice3_button = document.getElementById("choice3");
let choice4_button = document.getElementById("choice4");
