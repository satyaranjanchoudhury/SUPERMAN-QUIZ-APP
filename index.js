var readlinesync = require("readline-sync");
var score=0;
var username = readlinesync.question("may i have your name ?")
console.log("welcome  "+  username + "   to SUPERMAN QUIZ ?"          )

var score = 0;

var highScores = [
   {
    name: "Yash",
    score: 39,
  },
  {
    name: "Vedant",
    score: 32,
  },
  {
    name: "Tony Stark",
    score: 30,
  },
]

function play(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("YOU ARE RIGHT!");
    score = score + 1;
  } else {
    console.log("YOU ARE WRONG");
     }

  console.log("Current Score: ", score);
  console.log("-----------------")
}

// array of objects
var questions = [
  {
    question: "what was supermans alien name ? ",
    answer: "kal-ei",
  },
  {
    question: "which planet does superman come from? ",
    answer: "krypton",
  },
  {
    question: "what was the name of supermans adoptive parents? ",
    answer: "jonathan and martha",
  },
  {
    question: "where did he grow up? ",
    answer: "smallville",
  },
  {
    question: "what was the name of the newspaper where clark kent worked? ",
    answer: "daily planet",
  },
  {
    question: "what type of mineral makes superman weak? ",
    answer: "kryptonite",
  }
]

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the high scorers - ");
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ": " + highScores[i].score);
}


console.log("If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.")
console.log("Thank you for playing!")

