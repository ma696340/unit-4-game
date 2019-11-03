var counter = 0;
var wins = 0;
var losses = 0;
var targetNumber = Math.floor(Math.random() * 121);

$("#guessNum").html(targetNumber);

var img1 = Math.floor(Math.random() * 13);
var img2 = Math.floor(Math.random() * 13);
var img3 = Math.floor(Math.random() * 13);
var img4 = Math.floor(Math.random() * 13);

$(".crystal1").on("click", function () {
    counter += img1;
    alert("Your new score is " + counter);

    if (counter === targetNumber) {
        alert("You win");
        wins++;
        $("#guessWins").html(wins);
    } else if (counter >= targetNumber) {
        alert("You lose");
        loses++;
        $("#guessLose").html(losses);
    }
});

$(".crystal2").on("click", function () {
    counter += img2;
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win");
        wins++;
        $("#guessWins").html(wins);
    } else if (counter >= targetNumber) {
        alert("You lose");
        loses++;
        $("#guessLose").html(losses);
    }
});

$(".crystal3").on("click", function () {
    counter += img3;
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win");
        wins++;
        $("#guessWins").html(wins);
    } else if (counter >= targetNumber) {
        alert("You lose");
        loses++;
        $("#guessLose").html(losses);
    }
});

$(".crystal4").on("click", function () {
    counter += img4;
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win");
        wins++;
        $("#guessWins").html(wins);
    } else if (counter >= targetNumber) {
        alert("You lose");
        loses++;
        $("#guessLose").html(losses);
    } 

});