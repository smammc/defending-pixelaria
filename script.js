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

  /* 
  this.playerKnight.addEventListener("click", function () {
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
  }); */

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};
