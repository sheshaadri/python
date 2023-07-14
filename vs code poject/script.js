let score = 0;
const gameArea = document.getElementById("gameArea");
const startButton = document.getElementById("startButton");
const scoreElement = document.getElementById("score");

startButton.addEventListener("click", startGame);

function startGame() {
  score = 0;
  scoreElement.textContent = "Score: " + score;
  gameArea.innerHTML = ""; // clear previous game area contents
  
  spawnCircle();
}

function spawnCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  
  const randomX = Math.floor(Math.random() * (gameArea.offsetWidth - 50));
  const randomY = Math.floor(Math.random() * (gameArea.offsetHeight - 50));
  
  circle.style.left = randomX + "px";
  circle.style.top = randomY + "px";
  
  circle.addEventListener("click", () => {
    score++;
    scoreElement.textContent = "Score: " + score;
    circle.remove();
    spawnCircle();
  });
  
  gameArea.appendChild(circle);
}
