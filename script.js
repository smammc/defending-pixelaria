window.onload = function () {
  const startButton = document.getElementById("start-button-img");
  const instructionsButton = document.getElementById("instructions-button") //prettier-ignore
  const introScreen = document.getElementById("intro-screen");
  const instructionsImg = document.getElementById("instructions-img");

  startButton.addEventListener("click", function () {
    console.log("starting");
    introScreen.style.display = "none";
  });

  instructionsButton.addEventListener("click", function () {
    console.log("Instructions");
    instructionsImg.style.display = "block";
  });
};
