document.addEventListener('keyup', function (event) {
     const playerPressed = event.key;
     const currentAlphabetElement = document.getElementById('current-alphabet');
     const currentAlphabet = currentAlphabetElement.innerText;
     const expectedElement = currentAlphabet.toLowerCase();
  if (playerPressed == expectedElement) {
    const currentScore = getScoreLife('current-score');
    const newScore = currentScore + 1;
    setScoreLife('current-score', newScore);
    removeBackgroundColor(expectedElement);
    continueGame();
  } else {
    const currentLife = getScoreLife('current-life');
    const newLife = currentLife - 1;
    setScoreLife('current-life', newLife);
    if(newLife === 0){
      gameOver()
    }
  }
})

function continueGame() {
  const alphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;
  setBackgroundColor(alphabet);

}

function play() {
  hideElement('home-screen');
  hideElement('final-score')
  showElement('play-ground');
  setScoreLife('current-life', 5);
  setScoreLife('current-score', 0)
  continueGame();
}

function gameOver(){
 hideElement('play-ground');
 showElement('final-score');
}
