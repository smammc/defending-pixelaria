window.onload = function () {
  const startButton = document.getElementById("start-button-img");
  const instructionsButton = document.getElementById("instructions-button") //prettier-ignore
  const introScreen = document.getElementById("intro-screen");
  const instructionsImg = document.getElementById("instructions-img");
  const gameScreen = document.getElementById("game-screen");
  const knightCard = document.getElementById("knight-card");
  const mageCard = document.getElementById("mage-card");
  const ogreCard = document.getElementById("ogre-card");
  const endGameScreen = document.getElementById("end-game-screen");
  const restartButton = document.getElementById("restart-button");
  const instructionsEvent = document.getElementById("instructions-button");
  const instructionsEl = document.getElementById("instructions");

  let game;

  instructionsEvent.addEventListener("click", () => {
    console.log("click");
    if (instructionsEl.style.display === "none") {
      instructionsEl.style.display = "block";
    } else {
      instructionsEl.style.display = "none";
    }
  });

  startButton.addEventListener("click", function () {
    console.log("starting");
    introScreen.style.display = "none"; // maybe should be moved to Game file;
    startGame();
  });

  function startGame() {
    console.log("Starting game");
    game = new Game();
    game.start();
    game.loseGame();
    battleCycle();
  }

  function battleCycle() {
    // while (game.enemyWins === false && game.playerWins) {
    // }
    game.battleCycle();
  }

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};
