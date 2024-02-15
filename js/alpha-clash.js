function continueGame(){
 const alphabet = getRandomAlphabet();
 const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;
  setBackgroundColor(alphabet);
}

function play(){
  hideElement('home-screen');
  showElement('play-ground');
  continueGame();
}