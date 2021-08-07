const startButton = document.querySelector(".startBtn");
const startContainer = document.querySelector(".startContainer");
const gameContainer = document.querySelector(".gameContainer");
const gameScore = document.querySelector("#score");
const shape = document.createElement("div");
const tempBtn = document.querySelector(".gameBtn");
const gameTimer = document.querySelector("#timer");
const winContainer = document.querySelector(".winContainer");
const wonBtn = document.querySelector(".wonBtn");
const finalScore = document.querySelector("#finalScore");
const wonOrLost = document.querySelector("#wonOrLost");
let score = 0;
let timerVar = 60;
let isStarted = false;

//TIMER FUNCTION
function timing() {
  setInterval(() => {
    timerVar--;
    gameTimer.innerText = `Timer:${timerVar}`;
    if (score > 15) {
      clearInterval(gameInterval);
      wonOrLost.innerText = "You Wonnnn !!!!!";
      finalScore.innerText = `Your score is ${score}`;
      gameContainer.style.display = "none";
      winContainer.style.display = "flex";
    } else if (score < 15 && timerVar < 0) {
      clearInterval(gameInterval);
      wonOrLost.innerText = "You Lost !!!!!";
      finalScore.innerText = `Your score is ${score}`;
      gameContainer.style.display = "none";
      winContainer.style.display = "flex";
    }
  }, 1000);
}
// STARTCONTAINER

startButton.addEventListener("click", () => {
  startContainer.style.display = "none";
  gameContainer.style.display = "block";
  timing();
});

// GAMECONTAINER

var gameInterval = setInterval(() => {
  let horizontalPosition = Math.random() * window.innerWidth - 50;
  let verticalPosition = Math.random() * window.innerHeight - 50;
  shape.className = "gameShape";
  shape.style.left = horizontalPosition + "px";
  shape.style.top = verticalPosition + "px";
  gameContainer.appendChild(shape);
}, 1000);

shape.addEventListener("click", () => {
  shape.remove();
  score++;
  gameScore.innerText = `Score:${score}`;
});

wonBtn.addEventListener("click", () => {
  window.location.reload();
});
