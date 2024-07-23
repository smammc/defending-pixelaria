class Game {
  constructor() {
    // Get the start screen and game screen elements
    this.introScreen = document.getElementsById("intro-screen");
    this.gameScreen = document.getElementsById("game-screen");
    this.endScreen = document.getElementById("end-game-screen");

    // Set the width and height of the game screen
    this.height = 600;
    this.width = 900;

    let enemy = new EnemyCard("Dragon", 3, 10, this.gameScreen, 100, 150);
    let playerCard1 = new PlayerCard("Knight", 1, 5, this.gameScreen, 100, 150);
    let playerCard2 = new PlayerCard("Mage", 2, 3, this.gameScreen, 100, 150);
    let playerCard3 = new PlayerCard("Ogre", 3, 6, this.gameScreen, 100, 150);
  }
  start() {
    this.introScreen.style.display = "none";
  }
}
