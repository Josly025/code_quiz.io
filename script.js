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

for (var i = 0; i < questionList.length; i++) {
  var newTag = document.createElement("p");
  newTag.textContent = questionList[i];
  questionDiv.appendChild(newTag);
}

////////////////////Countdown Timer////////////////////////////
buttonClick.addEventListener("click", function () {
  startTime = 80;
  setInterval(function () {
    startTime--;
    if (startTime >= 0) {
      countDown.textContent = "Time: " + startTime + " seconds";
    }
    if (startTime === 0) {
      clearInterval((startTime = 80));
      confirm("Times UP!"); //this is where you log the score
    }
  }, 1000);
}); //sru n every second (1000=1sec)
/////////////////////////Storing Run /////////////////////////////////////

var storeScore = prompt("Please enter initals and current time!");

localStorage.setItem("storeScore", JSON.stringify([storescore]));
