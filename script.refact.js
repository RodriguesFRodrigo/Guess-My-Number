// ----- Selecting and manipulatin elements -----

// Query selector in this example get a element with class .message
// console.log(document.querySelector('.message'));

// Query select in this example with text content get the text from element with class .message
// console.log(document.querySelector('.message').textContent);

// Using query select and text content to set a text from element
// document.querySelector('.message').textContent = '👋 Correct Number!';

// Using query select and value to set and get a value from input
// document.querySelector('.guess').value = 7;
// console.log(document.querySelector('.guess').value);

// ----- Click Events -----

// just bind the function to element
// document.querySelector('.check')
//     .addEventListener('click', () => {
//         console.log(document.querySelector('.guess').value);
//     });

// ----- Game -----

// State
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// Game Logic
document.querySelector('.check')
    .addEventListener('click', () => {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // Scenario 1, without number
        if (!guess) {
            displayMessage('⛔ No number!');
        } else if (guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;
            displayMessage('✅ Correct number!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('😰 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }
        }
    });

// Again
document.querySelector('.again')
    .addEventListener('click', () => {
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
        displayMessage('Start guessing...');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });