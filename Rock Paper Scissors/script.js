let userScore = 0; //normal-variable
let computerScore=0; //normal-variable

//caching the DOM 
const userScore_span = document.getElementById("user-score"); //dom-variable
const compScore_span = document.getElementById("comp-score"); //dom-variale
const scoreBoard_div = document.querySelector(".score-board");
const reset_div = document.getElementById("reset");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getcomputerChoice(){
    const choices = ['r','p','s'];
    const rn = Math.floor(Math.random()*3);
    return choices[rn];
}

function draw(userChoice){
    result_div.textContent="NP!!! It's a Draw 🫢 🫢 🫢";
    document.getElementById(userChoice).classList.add('greyglow');
    setTimeout(function(){
        document.getElementById(userChoice).classList.remove('greyglow');
      },300);
    console.log("draw");
}
function win(userChoice){
   userScore++;
  userScore_span.textContent=userScore;
  result_div.textContent="Yay! You Won 🔥 🔥 🔥";
  document.getElementById(userChoice).classList.add('greenglow');
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove('greenglow');
  },300);
  console.log("us "+userScore);

}
function lose(userChoice){
    computerScore++;
   compScore_span.textContent=computerScore;
   result_div.textContent="OOPS! You Lost 🥲 🥲 🥲";
   document.getElementById(userChoice).classList.add('redglow');
   setTimeout(function(){
    document.getElementById(userChoice).classList.remove('redglow');
  },300);
   console.log("cs "+computerScore)
}

function game(userChoice){
    const compChoice = getcomputerChoice();
   
    document.getElementById(userChoice).classList.remove('greenglow');
    document.getElementById(userChoice).classList.remove('greyglow');
    if(userChoice==compChoice){
        draw(userChoice);
        return;
    } 
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice); break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice); break;
    }
}

main(); // the code starts here
function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    });
    paper_div.addEventListener('click', function(){
        game("p");
    });
    scissors_div.addEventListener('click', function(){
        game("s");
    });
    reset_div.addEventListener('click', function(){
        location.reload();
    });
}


