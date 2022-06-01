
// Variables //

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


const displayPlayer1 = document.querySelector('.displayPlayer1');
const displayPlayer2 = document.querySelector('.displayPlayer2');
const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');


const letsPlay = document.getElementById('letsPlay');


const diceRoll = document.getElementById('diceRoll');
const diceRollMobile = document.getElementById('diceRollMobile');

const addScore = document.getElementById('addScore');
const addScoreMobile = document.getElementById('addScoreMobile');

const dice = document.querySelector('.dice');
const diceMobile = document.querySelector('.diceMobile');

const playerOne = document.getElementById('playerOne');
const playerTwo = document.getElementById('playerTwo');



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

// consts Play button //

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
  // Définir le nom des joueurs pour une partie
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

  dice.classList.add("animate");
      setTimeout(() => {
        dice.classList.remove("animate");
      }, 1000);
  // Algo pour les points courants et pour remettre à 0 en cas de 1
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

  diceMobile.classList.add("animate");
      setTimeout(() => {
        diceMobile.classList.remove("animate");
      }, 1000);
  // Points courants et remettre à 0 en cas de 1
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


// Hold Button //

// Points globaux, changement de tour et modal fin de partie
addScore.addEventListener('click', () => {
  if (playerTurn == playerOne) {
    globalP1.textContent = parseInt(globalP1.textContent) + parseInt(currentPointsPlayer1.textContent);
    currentPointsPlayer1.textContent = 0;
    nextPlayer();
    winnerPlayer1();
  } else {
    globalP2.textContent = parseInt(globalP2.textContent) + parseInt(currentPointsPlayer2.textContent);
    currentPointsPlayer2.textContent = 0;
    nextPlayer();
    winnerPlayer2();
  }
});

// Points globaux, changement de tour et modal fin de partie
addScoreMobile.addEventListener('click', () => {
  if (playerTurn == playerOne) {
    globalP1Mobile.textContent = parseInt(globalP1Mobile.textContent) + parseInt(currentPointsP1Mobile.textContent);
    currentPointsP1Mobile.textContent = 0;
    nextPlayer();
    winnerPlayer1Mobile();
  } else {
    globalP2Mobile.textContent = parseInt(globalP2Mobile.textContent) + parseInt(currentPointsP2Mobile.textContent);
    currentPointsP2Mobile.textContent = 0;
    nextPlayer();
    winnerPlayer2Mobile();
  }
});

// Déclarer un gagnant

const winnerPlayer1 = () => {
  if (globalP1.textContent >= 100) {
    endGame();
  }
};

const winnerPlayer2 = () => {
  if (globalP2.textContent >= 100) {
    endGame();
  }
};
// Gagnant Mobile

const winnerPlayer1Mobile = () => {
  if (globalP1Mobile.textContent >= 100) {
    endGameMobile();
  }
};

const winnerPlayer2Mobile = () => {
  if (globalP2Mobile.textContent >= 100) {
    endGameMobile();
  }
};


// Modal fin de partie et nouvelle partie

const winnersName = document.getElementById('winnersName');
const renewGame = document.getElementById('renewGame');
const modalEndGame = document.getElementById('modalEndGame');


const endGame = () => {
  if (globalP1.textContent >= 100) {
    winnersName.textContent = displayPlayer1.textContent + " is the WINNER !";
    modalEndGame.classList.add('is-active');
  } else {
    winnersName.textContent = displayPlayer2.textContent + " is the WINNER !";
    modalEndGame.classList.add('is-active');
  }
  renewGame.addEventListener('click', () => {
    modalEndGame.classList.remove('is-active');
    modal.classList.add('is-active');
  });
};

const endGameMobile = () => {
  if (globalP1Mobile.textContent >= 100) {
    winnersName.textContent = displayPlayer1.textContent + " is the WINNER !";
    modalEndGame.classList.add('is-active');
  } else {
    winnersName.textContent = displayPlayer2.textContent + " is the WINNER !";
    modalEndGame.classList.add('is-active');
  }
  renewGame.addEventListener('click', () => {
    modalEndGame.classList.remove('is-active');
    modal.classList.add('is-active');
  });
};





