var startButton = document.getElementById("start-button");
var questionContainerEl = document.getElementById("question-container");
var timerEl = document.getElementById("countdown");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var currentQuestion = 0;
var timeLeft = 25;
var questionBankArray = [
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
  firstQuestion();
  countdownTimer();
}

// move to next question after making selection
function firstQuestion() {
  questionElement.textContent = questionBankArray[currentQuestion].question;
  for (i = 0; i < 4; i++) {
    var choiceBTN = document.createElement("button");
    choiceBTN.textContent = questionBankArray[currentQuestion].choice[i].text;
    answerButtonElement.append(choiceBTN);
    choiceBTN.addEventListener("click", selectAnswer);
    choiceBTN.setAttribute(
      "choice",
      questionBankArray[currentQuestion].choice[i].correct
    );
    choiceBTN.setAttribute("id", i);
  }
  currentQuestion++;
  //variable to change the question element by one
}
function nextQuestion() {
  questionElement.innerHTML = questionBankArray[currentQuestion].question;
  console.log(questionBankArray[currentQuestion].question)

  var buttonOne = document.getElementById("0");
  var buttonTwo = document.getElementById("1");
  var buttonThree = document.getElementById("2");
  var buttonFour = document.getElementById("3");
  
  
  buttonOne.setAttribute(
    "choice",
    questionBankArray[currentQuestion].choice[0].correct
  );
  buttonTwo.setAttribute(
    "choice",
    questionBankArray[currentQuestion].choice[1].correct
  );
  buttonThree.setAttribute(
    "choice",
    questionBankArray[currentQuestion].choice[2].correct
  );
  buttonFour.setAttribute(
    "choice",
    questionBankArray[currentQuestion].choice[3].correct
  );

  buttonOne.textContent = questionBankArray[currentQuestion].choice[0].text;
  buttonTwo.textContent = questionBankArray[currentQuestion].choice[1].text;
  buttonThree.textContent = questionBankArray[currentQuestion].choice[2].text;
  buttonFour.textContent = questionBankArray[currentQuestion].choice[3].text;

  currentQuestion++;
}
// choosing an answer & having response
function selectAnswer(event) {
  var chosenAnswer = event.target.getAttribute("choice");
  if (chosenAnswer==="true") {
    // choiceBTN.dataset.correct = choice.correct
    window.alert("That was Correct!!");
    
  } else {
    window.alert("Sorry, that was Incorrect.");
    timeLeft = timeLeft - 10;
  }
  //answerButtonElement.appendChild(button)
  nextQuestion();
}
//choiceBTN.addEventListener("click", selectAnswer)

// timer on quiz
function countdownTimer() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      console.log(timeLeft)
      timerEl.textContent = timeLeft;
      timeLeft--;
      //timeLeft.style.color = "purple";
      //timeLeft.style.fontSize = 10;
    } else if (timeLeft <= 10) {
      timerEl.textContent = "ONLY " + timeLeft + " SECONDS REMAINING!!";
      timeLeft--;
      //timeLeft.style.color = "red";
      //timeLeft.style.fontSize = 15;
      //timeLeft.style.fontStyle = "bolder";
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

//start timer
function startTimer() {}
//high score logged with initials
// take time left and log as value, store in the localStorage
// create a separate HTML for the high score page that shows score and has input for initials; links to first page
