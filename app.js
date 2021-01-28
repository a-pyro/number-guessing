console.log('Hi there!🔥');

// Game values
let min = 1,
  max = 10,
  winningNum = Math.floor(Math.random() * 10) + 1,
  guessLeft = 3;

// UI Elements

const gameUI = document.getElementById('game'),
  minNum = document.querySelector('.min_num'),
  maxNum = document.querySelector('.max_num'),
  form = document.querySelector('form'),
  guessInput = document.getElementById('guessInput'),
  message = document.querySelector('.message');

// Assegno min max all'UI

minNum.textContent = min;
maxNum.textContent = max;

// ascolta per guess
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(winningNum);
  let guess = parseInt(guessInput.value);

  // validate input
  // compreso tra min e max
  // se non ha mandato vuoto

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a num between ${min} and ${max}`, 'red');
    guessInput.value = '';
    guessInput.focus();
    return;
  }
  // controlla se vince
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! Hai vinto!`);
    /* refucktoring
      // disabilita input
      guessInput.disabled = true;
      // cambio colore del bordo
      guessInput.style.borderColor = 'green';
      // setto il messaggio
      setMessage(`${winningNum} is correct! Hai vinto!`, 'green'); */
  } else {
    // sbaglia numero
    guessLeft -= 1;

    if (guessLeft === 0) {
      // game over

      /* refactoring 
        // disabilita input
        guessInput.disabled = true;
        // cambio colore del bordo
        guessInput.style.borderColor = 'green';
        // setto il messaggio
        setMessage(
          `Game Over, You Lost! 💩 the correct num was ${winningNum}`,
          'red'
        ); */

      gameOver(
        false,
        `Game Over, You Lost! 💩 the correct num was ${winningNum}`
      );
    } else {
      // game continues - answer wrong

      // gli dico che il numero è sbagliato
      const lowerOrHigher = guess > winningNum ? 'lower' : 'higher';
      setMessage(
        `${guess} is not correct 🖕🏻, try with a ${lowerOrHigher} number, guesses left ${guessLeft}`,
        'red'
      );
      // pulisco input
      guessInput.value = '';
      guessInput.focus();
    }
  }

  console.log(guess);
});

// funzione per settare i messaggi del colore che serve
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// astraggo dei pezzi qui e refactor
function gameOver(won, msg) {
  const color = won ? 'green' : 'red';
  // disabilita input
  guessInput.disabled = true;
  // cambio colore del bordo
  guessInput.style.borderColor = color;
  // setto il messaggio
  setMessage(msg, color);
}
