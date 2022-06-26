var startButton = document.getElementById("start-button");
var questionContainerEl = document.getElementById("question-container");
var timerEl = document.getElementById("countdown");
var questionBankObj = [
  {
    question: "Arrays in JavaScript can be used to store __",
    choice: [
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question: "Commonly used data types DO NOT include:",
    choice: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if/else statement is enclosed with _______",
    choice: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: true },
      { text: "parentheses", correct: false },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question:
      "String values MUST be enclosed within ______ when being assigned to variables",
    choice: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parantheses", correct: false },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice: [
      { text: "Javascript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
];

startButton.addEventListener("click", startGame);
// get game to start
function startGame() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  nextQuestion();
}

// move to next question after making selection
function nextQuestion() {}

// choosing an answer & having response
function selectAnswer() {}
// what happens on choosing the right answer
function rightAnswer() {}
// what happens on choosing the wrong answer
function wrongAnswer() {}
// timer on quiz
function countdownTimer() {
  var timer = 25;
  var timeInterval = setInverval(function () {
    if (timeLeft > 1) {
      timer.El.textContent = timeLeft;
      timeLeft--;
      timeLeft.style.color = "purple";
      timeLeft.style.fontSize = 10;
    } else if (timeLeft <= 10) {
      timerEl.textContent = "ONLY " + timeLeft + " SECONDS REMAINING!!";
      timeLeft--;
      timeLeft.style.color = "red";
      timeLeft.style.fontSize = 15;
      timeLeft.style.fontStyle = "bolder";
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

//start timer
function startTimer() {}
//high score logged with initials
