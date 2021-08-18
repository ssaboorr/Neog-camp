const readlinseSync = require('readline-sync')
const chk = require('chalk');

var score = 0


function welcomeMessage() {
    console.log(chk.black.bgWhite.bold(" ********** Welcome to the quiz of Harry Potter ********** "))
    console.log(chk.blue("How well do you know Harry Potter? Test Yourself out!"))
    setTimeout(welcomeMessage2, 3000)
    setTimeout(gameRules, 3000)
    setTimeout(play, 3000)
    setTimeout(leaderBoard, 3000)


}

function welcomeMessage2() {
    var userName = readlinseSync.question(chk.black.bgYellow.bold("Enter your name to start the quiz: "))
    console.log(chk.yellowBright("Welcome " + userName))
    console.log("*****************************")


}

function gameRules() {
    console.log(chk.underline.magentaBright("Here are some simple rules for the quiz:-"))
    console.log(chk.magentaBright("You will get 1 point everytime you choose the right options"))
    console.log(chk.magentaBright("Your points will not be deducted if you select wrong answer"))
    console.log(chk.magentaBright("--------------------------------------------------------------"))
}

var questions = [{
        question: "What are the names of Harry Potter's two best friends?\na) Ron and Hermione\nb) Neville and Lavender\nc) Seamus and Parvati\nAnswer:-",
        answer: "a"
    },
    {
        question: "Which wizarding school does Harry attend?\na) Beauxbatons\nb) Castelobruxo\nc) Hogwarts\nAnswer:-",
        answer: "c"
    },
    {
        question: "Who is Harry Potter's enemy?\na) Voldemort\nb) Dumbledore\nc) Fudge\nAnswer:-",
        answer: "a"
    },
    {
        question: "What color hair do the Weasleys have?\na) Blonde\nb) Black\nc) Red\nAnswer:-",
        answer: "c"

    },
    {
        question: "What item do wizards play Quidditch on?\na) Broom\nb) Chair\nc) Vaccum Cleaners\nAnswer:-",
        answer: "a"
    },
    {
        question: "How do wizards send mail?\na) Postmen\nb) E-Mail\nc) Owl\nAnswer:-",
        answer: "c"
    },
    {
        question: "What is the British word for nonmagical people?\na) Muggle\nb) Ordinary\nc) Mudname\nAnswer:-",
        answer: "a"
    },
    {
        question: "Which animal is associated with Slytherin?\na) Rabbit\nb) Lion\nc) Snake\nAnswer:-",
        answer: "c"
    },
    {
        question: "What shape is the scar on Harry Potter's head?\na) Lightning Bolt\nb) A Star\nc) A heart \nAnswer:-",
        answer: "a"
    },
    {
        question: "True or false: Harry Potter wears glasses.\na) True\nb) False \nAnswer:-",
        answer: "a"
    },
]


function game(question, answer) {

    var userAnswer = readlinseSync.question(question);
    if (userAnswer == answer) {
        console.log(chk.greenBright("Right Answer"))
        score = score + 1;
        console.log(chk.greenBright("Your Current Score is: ", score))
    } else {
        console.log(chk.redBright("Wrong Answer"))
        console.log(chk.redBright("Your Current Score is: ", score))
    }

    console.log("------------------------------")

}





function play() {
    for (i = 0; i < questions.length; i++) {
        game(questions[i].question, questions[i].answer)
    }
    console.log("You Completed The Quiz!")

}

var highScore = [{
    name: "Saboor",
    score: "10"
}]

function leaderBoard() {
    console.log(chk.cyan("Highest Scores"))
    highScore.map(score => console.log(score.name, " : ", score.score))
    console.log(chk.magenta("-------------------------"))
    console.log(chk.magenta("-------------------------"))
    console.log(chk.bgBlue.bold("Yor Final Score Of The Quiz is " + score + "."));
    console.log(chk.blue("Thanks For Playing!"))

}
welcomeMessage()