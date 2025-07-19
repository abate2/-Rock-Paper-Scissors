function animateSprite(folder, baseName, elementId, frameCount = 10, interval = 100) {
  let frame = 0;
  const element = document.getElementById(elementId);
  const animation = setInterval(() => {
    const imagePath = `sprites/${folder}/${baseName}__${String(frame).padStart(3, '0')}.png`;
    element.style.backgroundImage = `url('${imagePath}')`;
    frame++;
    if (frame >= frameCount) clearInterval(animation);
  }, interval);
}


function play(playerMove) {
  const choices = ['rock', 'paper', 'scissors'];
  const cpuMove = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('player-choice').textContent = `Your choice: ${symbol(playerMove)}`;
  document.getElementById('cpu-choice').textContent = `CPU choice: ${symbol(cpuMove)}`;

  // Determine result
  let playerResult;
  if (playerMove === cpuMove) {
    playerResult = 'Draw';
  } else if (
    (playerMove === 'rock' && cpuMove === 'scissors') ||
    (playerMove === 'paper' && cpuMove === 'rock') ||
    (playerMove === 'scissors' && cpuMove === 'paper')
  ) {
    playerResult = 'Victory';
  } else {
    playerResult = 'Lose';
  }

  const cpuResult = playerResult === 'Victory' ? 'Lose' : (playerResult === 'Lose' ? 'Victory' : 'Draw');

  document.getElementById('result').textContent = playerResult === 'Victory'
    ? 'You win! 🎉'
    : playerResult === 'Lose'
    ? 'You lose! 💀'
    : "It's a draw! 😐";

  // Animate each sprite accordingly
  animateSprite('player-sprite', `sprites/player/Player${playerResult}__`, 10);
  animateSprite('cpu-sprite', `sprites/cpu/Cpu${cpuResult}__`, 10);
}



function getResult(player, cpu) {
  if (player === cpu) return "It's a draw!";
  if (
    (player === 'rock' && cpu === 'scissors') ||
    (player === 'paper' && cpu === 'rock') ||
    (player === 'scissors' && cpu === 'paper')
  ) return "You win!";
  return "You lose!";
}


function symbol(move) {
  switch (move) {
    case 'rock': return '🪨';
    case 'paper': return '📄';
    case 'scissors': return '✂️';
  }
}
