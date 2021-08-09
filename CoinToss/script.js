const buttonHeads = document.getElementById("buttonHeads");
const buttonTails = document.getElementById("buttonTails");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const playerSelection = document.getElementById("playerSelection");
const pcSelection = document.getElementById("pcSelection");
const messageh1 = document.getElementById("messageh1");

let player = {
  score: 0,
};

let pc = {
  score: 0,
};

buttonHeads.addEventListener("click", () => {
  const pcChoice = throwCoin();
  const playerChoice = "heads";

  const scelta = throwCoin();

  pcSelection.innerText = pcChoice;
  playerSelection.innerText = playerChoice;

  if (playerChoice === scelta) {
    player.score++;
    playerScore.innerText = `Player: ${player.score}`;
  }
  if (pcChoice === scelta) {
    pc.score++;
    computerScore.innerText = `Computer: ${pc.score}`;
  }
  if (player.score > 5) {
    messageh1.innerText = "Player Won !!!!!!";
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  if (pc.score > 5) {
    messageh1.innerText = "Pc Won !!!!!";
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }
});

buttonTails.addEventListener("click", () => {
  const pcChoice = throwCoin();
  const playerChoice = "tails";

  const scelta = throwCoin();

  pcSelection.innerText = pcChoice;
  playerSelection.innerText = playerChoice;

  if (playerChoice === scelta) {
    player.score++;
    playerScore.innerText = `Player: ${player.score}`;
  }
  if (pcChoice === scelta) {
    pc.score++;
    computerScore.innerText = `Computer: ${pc.score}`;
  }
  if (player.score > 5) {
    messageh1.innerText = "Player Won !!!!!!";
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }

  if (pc.score > 5) {
    messageh1.innerText = "Pc Won !!!!!";
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }
});
console.log(player.score);

function throwCoin() {
  let throws = {
    heads: "heads",
    tails: "tails",
  };

  let playersMatch = Math.floor(Math.random() * 2);
  if (playersMatch === 0) {
    return throws.heads;
  }
  if (playersMatch === 1) {
    return throws.tails;
  }
}
