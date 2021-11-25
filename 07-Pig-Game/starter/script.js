'use strict';
//Selecting Elements
const player0Score = document.querySelector('#score--0');
//can also do (retrieves the data faster)
const player1Score = document.getElementById('score--1');
const player0CurrentScore = document.querySelector('#current--0');
const player1CurrentScore = document.querySelector('#current--1');
const diceImage = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Declared outside of function so acessible everywhere(globally)
let currentScore, activePlayer, scores, playing;

const init = function () {
  //Starting conditions
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  diceImage.classList.add('hidden');

  player0Score.textContent = 0;
  player1Score.textContent = 0;
  player0CurrentScore.textContent = 0;
  player1CurrentScore.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

init();

const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollDice.addEventListener('click', function () {
  if (playing) {
    //Generate number between 1 & 6
    const diceRoll = Math.trunc(Math.random() * 6 + 1);

    //Display Dice
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${diceRoll}.png`;

    //track highscore
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    //Add currentScore to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 15) {
      playing = false;
      //Check if score is > 100 to end game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceImage.classList.add('hidden');
    } else {
      //Switch the next player
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', init);
