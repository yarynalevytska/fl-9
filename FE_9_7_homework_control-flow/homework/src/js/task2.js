const randomNumber = Math.floor(Math.random() * 6);
console.log(randomNumber);

const startGame = confirm('Do you want to play a game?');
if (startGame === true) {
    const guess = prompt('Guess a number. Choose a number in range [0-5] and enter it:');
    if (guess === null || guess === '') {
        alert('You do not fill this field');
    } else if (guess.length !== 1) {
        alert('Please enter a single number.');
    } else if (guess === randomNumber) {
        alert('Good job! The answer was ' + randomNumber);
        alert('Congratulations! Your prize 10$');
    } else if (guess !== randomNumber) {
        alert('Game is over');
    }
} else {
    alert('You did not become a millionaire, but can.');
}
            