function play(playerMove) {
  const choices = ['rock', 'paper', 'scissors'];
  const cpuMove = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('player-choice').textContent = `Your choice: ${symbol(playerMove)}`;
  document.getElementById('cpu-choice').textContent = `CPU choice: ${symbol(cpuMove)}`;

  const result = getResult(playerMove, cpuMove);
  document.getElementById('result').textContent = result;
}

function getResult(player, cpu) {
  if (player === cpu) return "It's a draw! 😐";
  if (
    (player === 'rock' && cpu === 'scissors') ||
    (player === 'scissors' && cpu === 'paper') ||
    (player === 'paper' && cpu === 'rock')
  ) {
    return 'You win! 🎉';
  } else {
    return 'You lose! 💀';
  }
}

function symbol(move) {
  switch (move) {
    case 'rock': return '🪨';
    case 'paper': return '📄';
    case 'scissors': return '✂️';
  }
}
