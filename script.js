// Question variable, got my questions from https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<scripting>", "<script>", "<javascript>", "<js>"],
        correctAnswer: "<script>"
    },

    {
        question: "Which built-in method returns the length of the string?",
        answers: ["length()", "size()", "index()", "None of the above"],
        correctAnswer: "length()"
    },

    {
        question: "Which of the following type of variable is visible everywhere in your Javascript Code?",
        answers: ["global variable", "local variable", "Both of the above", "None of the above"],
        correctAnswer: "global variable"
    },

    {
        question: "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
        answers: ["toSource()", "valueOf()", "toString()", "None of the above"],
        correctAnswer: "valueOf()"
    },

    {
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        answers: ["concat()", "join()", "pop()", "map()"],
        correctAnswer: "join()"
    }
];

// Declaring variables

var score = 0;

var questionIndex = 0;

var penalty = 5;

var timer = document.getElementById("startTime");

var currentTime = document.getElementById("currentTime");

var questionDiv = document.getElementById("questionDiv");

// Timer function

var secondsLeft = 101;

var counter = 0;

timer.addEventListener("click", function () {

    if (counter === 0) {
        counter = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(counter);
                currentTime.textContent = "Game Over!";
            }

            console.log(secondsLeft);

        }, 1000);
    }

    showQuestions(questionIndex);

});

// Question function

var createUl = document.createElement("ul");

// Displays question and answers

function showQuestions(questionIndex) {

    questionDiv.innerHTML = "";

    createUl.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {

        var userQuestion = questions[questionIndex].question;
        var userAnswer = questions[questionIndex].answers;
        questionDiv.textContent = userQuestion;

    }

    userAnswer.forEach(function (newQuestion) {

        var listQuestion = document.createElement("li");
        listQuestion.textContent = newQuestion;
        questionDiv.appendChild(createUl);
        createUl.appendChild(listQuestion);
        listQuestion.addEventListener("click", (compareQuestions));
    })

}

// Event to compare choice with user answers

function compareQuestions(event) {
    var choice = event.target;

    if (choice.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (choice.textContent == questions[questionIndex].correctAnswer) {
            score++;
            createDiv.textContent = "Correct!";
        }

        else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Incorrect!"
        }
    }

    // Determines what question the user is on

    questionIndex++;

    if (questionIndex >= questions.length) {
        finished();
        createDiv.textContent = "Game Finished!";
    }
    else {
        showQuestions(questionIndex);
    }
    questionDiv.appendChild(createDiv);
}

// Finished will append high score

function finished() {
    questionDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Create header

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Finished!"

    questionDiv.appendChild(createH1);

    // Create Paragraph

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionDiv.appendChild(createP);

    // Create high score

    if (secondsLeft >= 0) {
        var secondsRemaining = secondsLeft;
        var createScore = document.createElement("p");
        clearInterval(counter);
        createP.textContent = "Final Score: " + secondsRemaining;

        questionDiv.appendChild(createScore);
    }

    // Create label

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your name: ";

    questionDiv.appendChild(createLabel);

    // Create input

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "name");
    createInput.textContent = "";

    questionDiv.appendChild(createInput);

    // Create submit

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "submit");
    createSubmit.textContent = "Submit";

    questionDiv.appendChild(createSubmit);

    // Event listener for name, local storage, and scores

    createSubmit.addEventListener("click", function () {

        var name = createInput.value;

        if (name === null) {
            console.log("No name entered!");
        }
        else {
            var finalScore = {
                name: name,
                score: secondsRemaining
            }
            console.log(finalScore);

            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            }
            else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);

            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            window.location.replace("./highscores.html");
        }
    });

}