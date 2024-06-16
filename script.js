// JavaScript
const rollButton = document.getElementById('roll-button');
const die1 = document.getElementById('die1-value');
const die2 = document.getElementById('die2-value');
const resultText = document.getElementById('result-text');

rollButton.addEventListener('click', rollDice);

function rollDice() {
  const diceValues = [1, 2, 3, 4, 5, 6];
  const die1Value = diceValues[Math.floor(Math.random() * diceValues.length)];
  const die2Value = diceValues[Math.floor(Math.random() * diceValues.length)];

  die1.textContent = die1Value;
  die2.textContent = die2Value;

  const total = die1Value + die2Value;
  let result = '';

  if (total === 2) {
    result = 'You rolled a 2! Better luck next time!';
  } else if (total === 12) {
    result = 'You rolled a 12! Congratulations!';
  } else {
    result = `You rolled a ${total}!`;
  }

  resultText.textContent = result;
}