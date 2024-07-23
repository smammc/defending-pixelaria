class Game {
  constructor() {
    // Get the start screen and game screen elements
    this.introScreen = document.getElementsById("intro-screen");
    this.gameScreen = document.getElementsById("game-screen");
    this.endScreen = document.getElementById("end-game-screen");
    this.playerCardsHolder = document.getElementsByClassName("card-inventory");
    // this.enemyCardsHolder = ; // get the div with the enemy cards

    // Set the width and height of the game screen
    this.height = 600;
    this.width = 900;

    // let enemy = new Card("Dragon", 3, 10, this.gameScreen, 10000, 150);
    //prettier-ignore
    let playerCard1 = new Card("Knight", 1, 5, this.playerCardsHolder, "./images/knight.png");
    /* let playerCard2 = new Card("Mage", 2, 3, this.gameScreen, 100, 150);
    let playerCard3 = new Card("Ogre", 3, 6, this.gameScreen, 100, 150); */
  }

  /* start() {
    this.introScreen.style.display = "none";
    playerCard1;
  } */
}
