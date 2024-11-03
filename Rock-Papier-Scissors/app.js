function playGame(playerMove) {
  let result = '';
  const computerMove = randomMove();

  if (playerMove === computerMove) {
    result = 'Tie';
  } else if (
    (playerMove === 'Rock' && computerMove === 'Scissors') ||
    (playerMove === 'Paper' && computerMove === 'Rock') ||
    (playerMove === 'Scissors' && computerMove === 'Paper')
  ) {
    result = 'You win';
  } else {
    result = 'You lose';
  }

  document.querySelector(
    '#html-result'
  ).innerHTML = `The computer picked ${computerMove}, ${result}
  `;

  document.querySelector(
    '#html-score'
  ).innerHTML = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`;
}

function randomMove() {
  let randomNum = Math.random();
  let computerMove = '';

  if (randomNum < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNum < 2 / 3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }
  return computerMove;
}
let score = {
  Wins: 0,
  Losses: 0,
  Ties: 0,
};
if (result === 'You win') {
  score.Wins++;
} else if (result === 'You lose') {
  score.Losses++;
} else {
  score.Ties++;
}
