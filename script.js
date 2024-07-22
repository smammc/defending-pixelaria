window.onload = function () {
  const startButton = document.getElementById("start-button-img");
  const instructionsButton = document.getElementById("instructions-button") //prettier-ignore
  const introScreen = document.getElementById("intro-screen");
  const instructionsImg = document.getElementById("instructions-img");
  const knightCard = document.getElementById("knight-card");
  const mageCard = document.getElementById("mage-card");
  const ogreCard = document.getElementById("ogre-card");

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
  });

  mageCard.addEventListener("click", function () {
    console.log("You chose the mage!");
  });

  ogreCard.addEventListener("click", function () {
    console.log("You chose the ogre!");
  });
};
