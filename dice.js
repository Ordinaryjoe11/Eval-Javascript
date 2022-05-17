let currentPointsPlayer1 = document.getElementsByClassName('currentPointsPlayer1');
let currentPointsPlayer2 = document.getElementsByClassName('currentPointsPlayer2');
let globalPointsPlayer1 = document.getElementsByClassName('globalPointsPlayer1');
let globalPointsPlayer2 = document.getElementsByClassName('globalPointsPlayer2');
let diceRoll = document.getElementsByClassName('diceRoll');
let addScore = document.getElementsByClassName('addScore');
let dice = document.getElementsByClassName('dice');





// Modal

const newGame = document.querySelector('#newGame');
const newGameMobile = document.querySelector('#newGameMobile');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const letsPlay = document.getElementById('letsPlay');
const displayPlayer1 = document.getElementById("displayPlayer1");
const displayPlayer2 = document.getElementById("displayPlayer2");
const player1 = document.getElementById("player1-name");
const player2 = document.getElementById("player2-name");

newGame.addEventListener('click', () => {
  modal.classList.add('is-active');
});

newGameMobile.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});


// Lets Play button
letsPlay.addEventListener('click', () => {

  if (player1.value == "") {
    displayPlayer1.textContent = "Player 1"
  } else {
    displayPlayer1.textContent = player1.value;
  }
  player1.value = "";

  if (player2.value == "") {
    displayPlayer2.textContent = "Player 2"
  } else {
    displayPlayer2.textContent = player2.value;
  }
  player2.value = "";

  modal.classList.remove('is-active');
});



