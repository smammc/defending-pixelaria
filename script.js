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
  const enemyCurrentHealth = document.getElementById("enemyCurrentHealth");

  startButton.addEventListener("click", function () {
    console.log("starting");
    introScreen.style.display = "none";
  });

  instructionsButton.addEventListener("click", function () {
    console.log("Instructions");
    instructionsImg.style.display = "block";
  });

  knightCard.addEventListener("click", function () {
    console.log("You chose the knight!");
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("mage-screen").style.display = "none";
    document.getElementById("ogre-screen").style.display = "none";
    document.getElementById("end-game-screen").style.display = "none";
    document.getElementById("knight-screen").style.display = "block";
  });

  setTimeout(showGameScreenKnight(), 3000);
  function showGameScreenKnight() {
    document.getElementById("game-screen").style.display = "block";
    document.getElementById("mage-screen").style.display = "none";
    document.getElementById("ogre-screen").style.display = "none";
    document.getElementById("end-game-screen").style.display = "none";
    document.getElementById("knight-screen").style.display = "none";
  }

  mageCard.addEventListener("click", function () {
    console.log("You chose the mage!");
    document.getElementById("mage-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("ogre-screen").style.display = "none";
    document.getElementById("end-game-screen").style.display = "none";
    document.getElementById("knight-screen").style.display = "none";
  });

  ogreCard.addEventListener("click", function () {
    console.log("You chose the ogre!");
    document.getElementById("ogre-screen").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("mage-screen").style.display = "none";
    document.getElementById("end-game-screen").style.display = "none";
    document.getElementById("knight-screen").style.display = "none";
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload;
  }
};
