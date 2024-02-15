 function hideElement(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden')
 }

 function showElement (elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
 }
 function setBackgroundColor(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-orange-400');
 }
 function removeBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
 }

 function getScoreLife(elementId){
  const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
 }
 function setScoreLife(elementId, value){
    const element = document.getElementById(elementId);
     element.innerText = value;
 }

 function getRandomAlphabet(){
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  const randomNumber = Math.random()*25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
   return alphabet;
 }

  