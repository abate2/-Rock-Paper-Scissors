const playerSprite = document.getElementById("player-sprite");
const cpuSprite = document.getElementById("cpu-sprite");
const resultText = document.getElementById("result");

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;
  if (playerChoice === cpuChoice) {
    result = "draw";
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    result = "win";
  } else {
    result = "lose";
  }

  resultText.textContent = `You chose ${playerChoice}. CPU chose ${cpuChoice}. You ${result}!`;

  playSpriteAnimation(result);
}

function playSpriteAnimation(result) {
  let playerFolder = "sprites/player";
  let cpuFolder = "sprites/cpu";
  let totalFrames = 10;
  let frame = 0;

  let playerPrefix, cpuPrefix;

  if (result === "win") {
    playerPrefix = "PlayerVictory__";
    cpuPrefix = "CpuLose__";
  } else if (result === "lose") {
    playerPrefix = "PlayerLose__";
    cpuPrefix = "CpuVictory__";
  } else {
    playerPrefix = "PlayerDraw__";
    cpuPrefix = "CpuDraw__";
  }

  const interval = setInterval(() => {
    const frameStr = frame.toString().padStart(3, "0");
    playerSprite.src = `${playerFolder}/${playerPrefix}${frameStr}.png`;
    cpuSprite.src = `${cpuFolder}/${cpuPrefix}${frameStr}.png`;

    frame++;
    if (frame >= totalFrames) clearInterval(interval);
  }, 100); // 100ms = 10 FPS
}
