//console.log("Ansari Saboor")
var readlineSync = require('readline-sync')
var userName = readlineSync.question("What is your Name?")
console.log("Welcome " + userName)

// Play Funtion
var score = 0

function play(question, answer) {
    var userAnswer = readlineSync.question(question)


    if (userAnswer == answer) {
        console.log('right Answer')
        score = score + 1
        console.log("Current Score ", score)

    } else {
        console.log("wrong ansawer")
    }

    console.log("-------------------------------")


}

var questions = [{
        question: "Where do i live? ",
        answer: "Mumbai"
    },
    {
        question: "How old i am? ",
        answer: "22"
    },
    {
        question: "What is my dream Company? ",
        answer: "Google"
    }
]

for (var i = 0; i < questions.length; i++) {
    var curQues = questions[i];
    play(curQues.question, curQues.answer)
}