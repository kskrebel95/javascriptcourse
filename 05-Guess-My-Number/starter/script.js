'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);

  // If no guess selected
  if (!guess) {
    document.querySelector('.message').textContent = `No guess selected`;

    // If correct guess chosen
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = `Correct Answer`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // If guess is too high
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too high`;
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You lost the game`;
      document.querySelector('.score').textContent = 0;
    }

    //If guess is too low
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too Low`;
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ` You lost the game`;
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
