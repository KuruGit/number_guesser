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
        guessInput.disabled=true;
        guessInput.style.borderColor='green';
        setMessage(`${winningNum} is correct! YOU ARE WINNER!`,'green');

    } else {

    }
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;

}