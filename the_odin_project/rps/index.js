let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score"); //_span is a indicator that this var is from the html. makes it easy for me to identify where it correlates too.
let compScore_span = document.getElementById("comp-score"); // 
let scoreboard_div = document.querySelector(".scoreboard");
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissor_div = document.getElementById("s");

//rock_div.addEventListener('click', function() {
//    console.log("you clicked rock");
//})

function getCompChoice(){
    let choices = ['r', 'p' ,'s']; // creating an array with r p and s
    let randomNumber = (Math.floor(Math.random() * 3)); // random number generator that picks between 0-1. then multiplies by 3 and rounds it the nearest whole number
    return choices[randomNumber];// assigning the elements in the array to a whole number.
}

function game(userChoice){
    let compChoice = getCompChoice(); // creates a new variable for this function and have it equal to whatever the computer choice is from the above function
    console.log(userChoice + '   ' + compChoice)
    if (userChoice == compChoice){
        console.log('its a tie');
    }
    else if (userChoice == 'r'){
        if (compChoice == 'p'){
        console.log('You lose');
        compScore += 1;
        }
        else if (compChoice == 's'){
        console.log('You win'); 
        userScore +=1;  
        console.log(userScore);
        }
    }
    else if (userchoice == 'p'){
        if (compChoice == 'r'){
            console.log('you lose');
        }
    }
}

function playerRock() { // function for the rock button; assigns 'r' to the button 
    game('r');
}
function playerPaper() {// same as above but with p
    game('p');
}

function playerScissor() { // same as above but with s
    game('s');
}
