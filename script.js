const playerSprite = document.getElementById("player-sprite");
const cpuSprite = document.getElementById("cpu-sprite");
const resultText = document.getElementById("result");

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const cpuChoice = choices[Math.floor(Math.random() * 3)];

  const result = getResult(playerChoice, cpuChoice);

  resultText.textContent = `You chose ${playerChoice}. CPU chose ${cpuChoice}. You ${result}!`;

  animateSprite(result, "player");
  animateSprite(invertResult(result), "cpu");
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
  const stateMap = {
    win: "Victory",
    lose: "Lose",
    draw: "Draw"
  };

  const frames = 10;
  let frame = 0;

  const interval = setInterval(() => {
    const frameStr = String(frame).padStart(3, "3");
    img.src = `sprites/${who}/${prefix}${stateMap[state]}__${frameStr}.png`;
    frame++;
    if (frame >= frames) clearInterval(interval);
  }, 100);
}
