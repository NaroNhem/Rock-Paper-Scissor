let userScore = 0;
let compScore = 0;
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

function win (){
    document.getElementById('user-score').innerHTML = userScore;
    document.getElementById('comp-score').innerHTML = compScore;
    document.getElementById('final').innerHTML ='';
    document.getElementById('intro').innerHTML ='';
    
    }


function game(userChoice){
    let compChoice = getCompChoice(); // creates a new variable for this function and have it equal to whatever the computer choice is from the above function
    console.log(userChoice + '   ' + compChoice)
    if (userChoice == compChoice){
        document.getElementById('result').innerHTML= "Its a Tie";
        document.getElementById('final').innerHTML ='';
        document.getElementById('intro').innerHTML ='';
    }
    else if (userChoice == 'r'){
        if (compChoice == 'p'){
            console.log('You lose');
            compScore += 1;
            win();
            document.getElementById('result').innerHTML= "You chose rock, opponent chose paper. You lose.";
            }
            else if (compChoice == 's'){
            console.log('You win'); 
            userScore +=1;  
            console.log(userScore);
            win();
            document.getElementById('result').innerHTML= "You chose rock, opponent chose scissors. You win.";
            }
    }
    else if (userChoice == 'p'){
        if (compChoice == 'r'){
            console.log('you win');
            userScore +=1;
            console.log(userScore);
            win();
            document.getElementById('result').innerHTML= "You chose paper, opponent chose rock. You win.";
        }
        else if(compChoice == 's' ){
            console.log('you lose');
            compScore +=1;
            win();
            document.getElementById('result').innerHTML= "You chose paper, opponent chose scissor. You lose.";
        }
    }
    else if (userChoice == 's'){
        if (compChoice == 'r'){
            console.log('you lose');
            compScore +=1;
            win();
            document.getElementById('result').innerHTML= "You chose scissor, opponent chose rock. You lose.";
            }
        else if (compChoice == 'p'){
            console.log('you win')
            userScore +=1;
            win();
            document.getElementById('result').innerHTML= "You chose scissor, opponent chose paper. You win.";
        }
    }
    if (userScore == 5){
        document.getElementById('final').innerHTML = 'Congratulations! You have beaten the ai!';
        reset();
    }
    else if (compScore == 5){
        document.getElementById('final').innerHTML = 'You lost. Try again?';
        reset();
    }
}

function reset() {
    userScore = 0;
    compScore = 0;
    document.getElementById('result').innerHTML = "The game has been reset.";
    document.getElementById('user-score').innerHTML = '0';
    document.getElementById('comp-score').innerHTML = '0';
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
