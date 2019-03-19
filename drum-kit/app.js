window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  if (!audio) return; // Stop the function from running all together
  audio.play();
  audio.currentTime = 0; // Rewind to the start
  key.classList.add('playing');
}

// Get all of elements with class = key
const keys = document.querySelectorAll('.key');
// Listening event transition on each element with class = key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// When transition is equal to transform remove class playing
function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== 'transform') return; // Skip it if it's not a transform
  this.classList.remove('playing');
}
