//Game values
let min = 1,
    max = 10,
    winningNum = getRandoNum(min, max),
    guessesLeft = 3;

//UI Elements
let game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.getElementById('guess-btn'),
    guessInput = document.getElementById('guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener

game.addEventListener('mousedown',function(e){
    if (e.target.className==='play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function () {

    let guess = parseInt(guessInput.value);
    console.log(guess);

    //Validation
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please Enter a Number between ${min} and ${max}`, 'red');

    }
    //check if won, if yes disable input field, green border on input field as visual cue and message
    if(guess===winningNum){
        gameOver(true,`${winningNum} is correct! YOU ARE WINNER!`);

    } else {
        //Wrong number
        guessesLeft-= 1;
        if(guessesLeft===0){
            //Game Over - lost
            gameOver(false,`${guess} is WRONG! ${winningNum} is the right number.`);
    
        } else {
            //set loser border-color ferrari red
            guessInput.style.borderColor='red';
            //clear input
            guessInput.value='';
            //Game continues - answer wrong
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left!`,'red');
        }

    }
});

function gameOver(won,msg){
    let color;
    won === true ? color='green' : color='red';

        guessInput.disabled=true;
        guessInput.style.borderColor=color;
        message.style.color=color;
        setMessage(msg);
    
        //play again?
        guessBtn.value='play again?';
        guessBtn.className+='play-again';
}

//generate random Winning nummer
function getRandoNum(min, max){
   return Math.floor(Math.random*(max-min+1)+min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}