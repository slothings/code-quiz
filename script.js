// Making questions and got my questions from https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<scripting>",
            b: "<script>",
            c: "<javascript>",
            d: "<js>"
        },
        correctAnswer: "b"
    },

    {
        question: "Which built-in method returns the length of the string?",
        answers: {
            a: "length()",
            b: "size()",
            c: "index()",
            d: "None of the above"
        },
        correctAnswer: "a"
    },

    {
        question: "Which of the following type of variable is visible everywhere in your Javascript Code?",
        answers: {
            a: "global variable",
            b: "local variable",
            c: "Both of the above",
            d: "None of the above"
        },
        correctAnswer: "a"
    },

    {
        question: "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
        answers: {
            a: "toSource()",
            b: "valueOf()",
            c: "toString()",
            d: "None of the above"
        },
        correctAnswer: "b"
    },

    {
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        answers: {
            a: "concat()",
            b: "join()",
            c: "pop()",
            d: "map()"
        },
        correctAnswer: "b"
    }
];

// Declaring variables

var score = 0;

var questionIndex = 0;

var timer = document.getElementById("startTime");

var currentTime = document.getElementById("currentTime");

var questionDiv = document.getElementById("questionDiv");

var secondsLeft = 10;

var counter = 0;

// Timer function

timer.addEventListener("click", function () {

    if (counter === 0) {
        counter = setInterval(function() {
            secondsLeft--;
            currentTime.textContent = secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(counter);
                currentTime.textContent = "Game Over!";
                console.log("counter");
            }
        }, 1000);
    }
});



