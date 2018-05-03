//Game values
let min = 1,
    max = 10,
    winningNum = 2,
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

guessBtn.addEventListener('click', function () {

    let guess = parseInt(guessInput.value);
    console.log(guess);

    //Validation
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please Enter a Number between ${min} and ${max}`, 'red');

    }
    //check if won, if yes disable input field, green border on input field as visual cue and message
    if(guess===winningNum){
        //game over - won

        guessInput.disabled=true;
        guessInput.style.borderColor='green';
        setMessage(`${winningNum} is correct! YOU ARE WINNER!`,'green');

    } else {
        //Wrong number
        guessesLeft-= 1;
        if(guessesLeft===0){
            //Game Over - lost
            guessInput.disabled=true;
            guessInput.style.borderColor='red';
            setMessage(`${guess} is WRONG! ${winningNum} is the right number.`,'red');
    
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

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}