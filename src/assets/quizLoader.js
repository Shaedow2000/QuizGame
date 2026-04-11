import quizes from "./quiz.js";

function getUndoneQuiz(quizId) {
  const doneQuizes = JSON.parse(localStorage.getItem("done"));

  for (let i = 0; i < doneQuizes.length; i++) {
    if (+quizId === doneQuizes[i]) {
      quizId++;
    }
  }

  localStorage.setItem("current", quizId);

  return quizId;
}

function load_quiz() {
  let quizId = getUndoneQuiz(localStorage.getItem("current"));
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
}

export { load_quiz, getUndoneQuiz };
