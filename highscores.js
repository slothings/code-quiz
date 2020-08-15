// Declaring variables

var highScore = document.getElementById("highScore");

var clear = document.getElementById("clear");

var retake = document.getElementById("retake");

// Clear scores

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// Displays scores

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for(var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].name + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Take you back to index/quiz

retake.addEventListener("click", function() {
    window.location.replace("./index.html");
});