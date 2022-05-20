
// Variables

const newGame = document.querySelector('#newGame');
const newGameMobile = document.querySelector('#newGameMobile');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');


const globalP1 = document.getElementById('globalP1');
const globalP2 = document.getElementById('globalP2');
const globalP1Mobile = document.getElementById('globalP1Mobile');
const globalP2Mobile = document.getElementById('globalP2Mobile');
const currentPointsPlayer1 = document.getElementById('currentPointsPlayer1');
const currentPointsPlayer2 = document.getElementById('currentPointsPlayer2');
const currentPointsP1Mobile = document.getElementById('currentPointsPlayer1Mobile');
const currentPointsP2Mobile = document.getElementById('currentPointsPlayer2Mobile');


const displayPlayer1 = document.getElementById('displayPlayer1');
const displayPlayer2 = document.getElementById('displayPlayer2');
const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');


const letsPlay = document.getElementById('letsPlay');


const diceRoll = document.getElementById('diceRoll');
const diceRollMobile = document.getElementById('diceRollMobile');

const addScore = document.getElementById('addScore');
const addScoreMobile = document.getElementById('addScoreMobile');



// Modal New game //

newGame.addEventListener('click', () => {
  modal.classList.add('is-active');
});

newGameMobile.addEventListener('click', () => {
  modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

// consts Play button

letsPlay.addEventListener('click', () => {
  // Remettre les points à zéro pour une nouvelle partie
  let setPoints = [
    globalP1.textContent = 0,
    globalP2.textContent = 0,
    currentPointsPlayer1.textContent = 0,
    currentPointsPlayer2.textContent = 0,
    globalP1Mobile.textContent = 0,
    globalP2Mobile.textContent = 0,
    currentPointsP1Mobile.textContent = 0,
    currentPointsP2Mobile.textContent = 0,
  ];

  if (player1Name.value == "") {
    displayPlayer1.textContent = "Player 1";
  } else {
    displayPlayer1.textContent = player1Name.value;
  }
  player1Name.value = "";

  if (player2Name.value == "") {
    displayPlayer2.textContent = "Player 2";
  } else {
    displayPlayer2.textContent = player2Name.value;
  }
  player2Name.value = "";

  modal.classList.remove('is-active');
});

// Roll Dice Button //

// Variable pour condition ternaire
let playerTurn = playerOne;
// Constante pour changer de joueur
const nextPlayer = () => {
  playerTurn.classList.remove("active");
  playerTurn.classList.add("non-active");
  playerTurn = playerTurn === playerOne ? playerTwo : playerOne;
  playerTurn.classList.add("active");
  playerTurn.classList.remove("non-active");
};

diceRoll.addEventListener('click', () => {
  // Variable définissant la valeur du dé
  let diceValue = Math.floor(Math.random() * 6) + 1;
  // Variable qui va chercher l'image correspondant à la valeur du dé
  let diceImage = 'Images/dice' + diceValue + '.png';
  document.querySelectorAll('img')[0].setAttribute('src', diceImage);

  if (diceValue === 1) {
    if (playerTurn == playerOne) {
      currentPointsPlayer1.textContent = 0;
    } else {
      currentPointsPlayer2.textContent = 0;
    } nextPlayer();
  } else {
    if (playerTurn == playerOne) {
      currentPointsPlayer1.textContent = parseInt(currentPointsPlayer1.textContent) + diceValue;
    } else {
      currentPointsPlayer2.textContent = parseInt(currentPointsPlayer2.textContent) + diceValue;
    }
  }
});

// Roll Dice Mobile Button //

diceRollMobile.addEventListener('click', () => {
  // Variable définissant la valeur du dé
  let diceValue = Math.floor(Math.random() * 6) + 1;
  // Variable qui va chercher l'image correspondant à la valeur du dé
  let diceImage = 'Images/dice' + diceValue + '.png';
  document.querySelectorAll('img')[1].setAttribute('src', diceImage);

  if (diceValue == 1) {
    if (playerTurn == playerOne) {
      currentPointsP1Mobile.textContent = 0;
    } else {
      currentPointsP2Mobile.textContent = 0;
    } nextPlayer();
  } else {
    if (playerTurn == playerTwo) {
      currentPointsP2Mobile.textContent = parseInt(currentPointsP2Mobile.textContent) + diceValue;
    } else {
      currentPointsP1Mobile.textContent = parseInt(currentPointsP1Mobile.textContent) + diceValue;
    }
  }
});


// Hold Button

addScore.addEventListener('click', () => {
  if (playerTurn == playerOne) {
    globalP1.textContent = parseInt(globalP1.textContent) + parseInt(currentPointsPlayer1.textContent);
    currentPointsPlayer1.textContent = 0;
    nextPlayer();
  } else {
    globalP2.textContent = parseInt(globalP2.textContent) + parseInt(currentPointsPlayer2.textContent);
    currentPointsPlayer2.textContent = 0;
    nextPlayer();
  }
});

addScoreMobile.addEventListener('click', () => {
  if (playerTurn == playerOne) {
    globalP1Mobile.textContent = parseInt(globalP1Mobile.textContent) + parseInt(currentPointsP1Mobile.textContent);
    currentPointsP1Mobile.textContent = 0;
    nextPlayer();
  } else {
    globalP2Mobile.textContent = parseInt(globalP2Mobile.textContent) + parseInt(currentPointsP2Mobile.textContent);
    currentPointsP2Mobile.textContent = 0;
    nextPlayer();
  }
});



