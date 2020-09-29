var questionDiv = document.querySelector(".questions");
var countDown = document.querySelector("#time");
var buttonClick = document.querySelector(".start");
//List of questions (4 by 3)
var questionList = [
  {
    question: "What is the capital of Arizona?",
    answers: [
      { text: "Phoenix", correct: true },
      { text: "Minneapolis", correct: false },
      { text: "Denver", correct: false },
    ],
  },

  {
    question: "What is the capital of Idaho?",
    answers: [
      { text: "Frankfort", correct: false },
      { text: "Boise", correct: true },
      { text: "Mt. Mood", correct: false },
    ],
  },

  {
    question: "What is the capital of Texas?",
    answers: [
      { text: "Dallas", correct: false },
      { text: "Austin", correct: true },
      { text: "Houston", correct: false },
    ],
  },

  {
    question: "What is the capital of New York",
    answers: [
      { text: "New York City", correct: false },
      { text: "Rochester", correct: false },
      { text: "Albany", correct: true },
    ],
  },
];
// console.log(questionList);

questionlist.forEach(function (question) {
  var newQuestion = createNewElement("div");
  newQuestion.textContent = question;
  questionDiv.appendChild(newQuestion);
});

for (var i = 0; i < newList.length; i++) {
  var newTag = document.createElement("p");
  newTag.textContent = newQuestions[i];
  questionDiv.appendChild(newTag);

  //   console.log(newTag);
}

////////////////////Countdown Timer////////////////////////////
buttonClick.addEventListener("click", clockDown);
// var secTime = 1000 * 60;
var startTime = 1000 * 60;

function clockDown() {
  setInterval(function () {
    if (startTime >= 0) {
      startTime = startTime--;
    }

    if (startTime <= 0) {
      clearInterval((startTime = 60.0));
      confirm("Times UP!"); //this is where you log the score
    }
    countDown.innerHTML = "Time: " + startTime + " seconds";
    startTime--;
  });
}
