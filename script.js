const playerSprite = document.getElementById("player-sprite");
const cpuSprite = document.getElementById("cpu-sprite");
const resultText = document.getElementById("result");

let playerInterval;
let cpuInterval;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const cpuChoice = choices[Math.floor(Math.random() * 3)];

  const result = getResult(playerChoice, cpuChoice);

  resultText.textContent = `You chose ${playerChoice}. CPU chose ${cpuChoice}. You ${result}!`;

  clearInterval(playerInterval);
  clearInterval(cpuInterval);

  playerInterval = animateSprite(result, "player");
  cpuInterval = animateSprite(invertResult(result), "cpu");
}

function getResult(player, cpu) {
  if (player === cpu) return "draw";
  if (
    (player === "rock" && cpu === "scissors") ||
    (player === "scissors" && cpu === "paper") ||
    (player === "paper" && cpu === "rock")
  ) {
    return "win";
  }
  return "lose";
}

function invertResult(result) {
  if (result === "win") return "lose";
  if (result === "lose") return "win";
  return "draw";
}

function animateSprite(state, who) {
  const img = who === "player" ? playerSprite : cpuSprite;
  const prefix = who === "player" ? "Player" : "Cpu";
  const frames = 10;
  let frame = 0;

  return setInterval(() => {
    const frameStr = String(frame).padStart(3, "0");
    const path = `sprites/${who}/${prefix}${capitalize(state)}__${frameStr}.png`;

    img.src = path;
    frame++;
    if (frame >= frames) {
      clearInterval(who === "player" ? playerInterval : cpuInterval);
    }
  }, 100);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
