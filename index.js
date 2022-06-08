var readlineSync = require("readline-sync")
const chalk = require("chalk")
console.log(chalk.greenBright.underline("The Vampire Diaries Quiz"))
var userName = readlineSync.question(chalk.red("Enter your name: "))

console.clear();

console.log(chalk.greenBright.underline("The Vampire Diaries Quiz"))
console.log(chalk.blueBright("Welcome ", userName, "to this quiz!"))
console.log(chalk.blueBright("Let's check whether you are a true Vampire Diaries fan or not!"))

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.yellowBright(question))
  if (userAnswer === answer) {
    console.log(chalk.red("Your answer ", userAnswer + " is correct!"))
    score = score + 2;
  } else {
    console.log(chalk.red("Your answer ", userAnswer + " is wrong!"))
    score = score - 1;
  }
  console.log(chalk.whiteBright("Your current score is ", score))
  console.log("--------------------")
}

var questions = [{
  question: "In which town does the show primarily take place?? ",
  answer: "Mystic falls",
}, {
  question: "How many seasons was The Vampire Diaries on TV? ",
  answer: "8",
}, {
  question: "Who plays Elena on the show? ",
  answer: "Nina Dobrev",
}, {
  question: "What is the herb called that can protect humans from being compelled by a vampire? ",
  answer: "Vervain",
}, {
  question: "Who started Elena's doppelganger line? ",
  answer: "Amara",
}, {
  question: "Who won the 2010 Miss Mystic Falls pageant? ",
  answer: "Caroline",
}, {
  question: "Whose blood does Elena have in her system when she drowns? ",
  answer: "Damon",
}, {
  question: "Who does Caroline actually marry? ",
  answer: "Stefan",
}, {
  question: "In season 1, when Damon opened the tomb, did he find Katherine in there? ",
  answer: "No",
},{
  question: "Whose blood can help Klaus create vampire/werewolf hybrids? ",
  answer: "Elena",
}]

for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.cyanBright("Your final score is ", score, "."))
console.log("--------------------")

var highScores = [
  {
    name: "Shruti",
    score: "17",
  },
  {
    name: "Yashi",
    score: "15",
  },
  {
    name: "Shree",
    score: "15",
  },
  {
    name: "Seema",
    score: "14"
  }
]

console.log(chalk.blue.underline("Check out the high scores!"))
console.table(highScores)
var high = false;

highScores.forEach( person => {
  if(score > person.score) {
    high = true;
  }
})

if(high) {
  console.log(chalk.cyan("Great! You cracked the high score. "))
  console.log(chalk.cyan("Just send me a screenshot of your score and I will add it in the leaderboard."))
} else {
  console.log(chalk.cyan("Oops! You couldn't beat the high score."))
}