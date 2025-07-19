/*function play(playerMove) {
  const choices = ['rock', 'paper', 'scissors'];
  const cpuMove = choices[Math.floor(Math.random() * choices.length)];

  document.getElementById('player-choice').textContent = `Your choice: ${symbol(playerMove)}`; //se activa la funcion  symbol con la informaicon player move  que es  brindada  cuando se oprime un boton
  document.getElementById('cpu-choice').textContent = `CPU choice: ${symbol(cpuMove)}`;

  const result = getResult(playerMove, cpuMove);
  document.getElementById('result').textContent = result;
}

function getResult(player, cpu) {
  if (player === cpu) return "It's a draw! 😐";
  if ((player === 'rock' && cpu === 'scissors') ||
    (player === 'scissors' && cpu === 'paper') ||
    (player === 'paper' && cpu === 'rock')){
    return 'You win! 🎉';
  } else {
    return 'You lose! 💀';
  }
}*/

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

  const result = getResult(playerMove, cpuMove);
  document.getElementById('result').textContent = result;

  let outcome;
  if (result.includes('draw')) {
    outcome = 'Draw';
  } else if (result.includes('win')) {
    outcome = 'Victory';
  } else {
    outcome = 'Lose';
  }

  // Animate player and CPU sprites using new folders
  animateSprite('player', `Player${outcome}`, 'player-animation');
  animateSprite('cpu', `Cpu${outcome}`, 'cpu-animation');
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
