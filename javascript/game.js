//Global variables 
let initialNumber = Math.floor(Math.random() * 80) + 20;
let totalScore = 0;
let tempScore = 0;
let win = 0;
let lose = 0;

let crys1 = Math.floor(Math.random()* 20) + 5;
let crys2 = Math.floor(Math.random()* 30) + 1;
let crys3 = Math.floor(Math.random()* 40) + 15;
let crys4 = Math.floor(Math.random()* 10) + 3;

startgame();
//Functions
function winner () {
    if (totalScore === initialNumber) {
        win++;
        $("#wins").html("You have " + win + " wins");
        reset();
    } else if (totalScore > initialNumber) {
        lose++;
        $("#loses").html("You have " + lose + " loses");
        reset();
    }
}
function startgame() {
    let initialNumber = Math.floor(Math.random() * 80) + 20;
};

function reset() {
totalScore = 0;
let initialNumber = Math.Floor(Math.random() * 80) + 20;
// $("#Ore-Cart").html("You can carry up to " + initialNumber + " lbs.");
}

//Jquery functions
$("#Ore-Cart").html("You can carry up to " + initialNumber + " lbs.");

$("#crys1").click(function(){

    totalScore += crys1;
    $('#total-score').html(totalScore);
    winner();
    });

$("#crys2").click(function(){
    
    totalScore += crys2;
    $("#total-score").html(totalScore);
    winner();
    });

$("#crys3").click(function(){
    
    totalScore += crys3;
    $("#total-score").html(totalScore);
    winner();
        });
$("#crys4").click(function(){
    
    totalScore += crys4;
    $("#total-score").html(totalScore);
    winner();
        });
$("#wins").html("You have " + win + " wins")
$("#loses").html("You have " + lose + " loses")
