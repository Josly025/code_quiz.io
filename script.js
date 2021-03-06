var questionDiv = document.querySelector(".questions");
var countDown = document.querySelector("#time");
var buttonClick = document.querySelector(".start");
//List of questions (4 by 3)
var questionList = [
  {
    question: "1) What is the capital of Arizona?",
    answers: [
      { text: "Phoenix", correct: true },
      { text: "Minneapolis", correct: false },
      { text: "Denver", correct: false },
      { text: "Sedona", correct: false },
    ],
  },

  {
    question: "2) What is the capital of Idaho?",
    answers: [
      { text: "Frankfort", correct: false },
      { text: "Boise", correct: true },
      { text: "Mt. Mood", correct: false },
      { text: "Jackson", correct: false },
    ],
  },
  {
    question: "3) What is the capital of Iowa?",
    answers: [
      { text: "Davenport", correct: false },
      { text: "Des Moines", correct: true },
      { text: "Iowa City", correct: false },
      { text: "Madison", correct: false },
    ],
  },
  {
    question: "4) What is the capital of Texas?",
    answers: [
      { text: "Dallas", correct: false },
      { text: "Austin", correct: true },
      { text: "Houston", correct: false },
      { text: "San Andreas", correct: false },
    ],
  },

  {
    question: "5) What is the capital of New York",
    answers: [
      { text: "New York City", correct: false },
      { text: "Rochester", correct: false },
      { text: "Albany", correct: true },
      { text: "Boston", correct: true },
    ],
  },
];
////need to add button for each answer option and rotate through questions after submission
//incorrect = --20 seconds off timer
for (var i = 0; i < questionList.length; i++) {
  var newTag = document.createElement("p");
  var q = questionList[i];
  console.log(q);
  newTag.textContent = q.question;
  questionDiv.appendChild(newTag);

  for (var j = 0; j < q.answers.length; j++) {
    // console.log(q.answers[j].text);
    var buttonTag = document.createElement("button");
    buttonTag.textContent = q.answers[j].text;
    console.log(buttonTag);
    questionDiv.appendChild(buttonTag);
  }
}

buttonTag.addEventListener("click", function buttonCorrect() {
  for (z = 0; z < questionList.length; i++) {
    var q = questionList[z];
    console.log(z.answer[z].correct);
    if (z.answer[z].correct === false) {
      alert("Correct! - next question");
    } else if (z.answer[z].correct) {
      alert("Incorrect! - 10 sec");
      startTime = starTime - 10;
    }
  }
});
//eventListener('click', )
//html dataset

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

// var storeScore = prompt("Please enter initals and current time!");

// localStorage.setItem("storeScore", JSON.stringify([storesScore]));
