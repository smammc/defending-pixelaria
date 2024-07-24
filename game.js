class Game {
  constructor() {
    // Get the start screen and game screen elements
    this.introScreen = document.getElementById("intro-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-game-screen");
    this.playerCardsHolder = document.querySelector(".card-inventory");
    this.enemyCardsHolder = document.querySelector(".enemy-card-inventory");

    this.playerCardsArray = [];
    this.enemyArray = [];
  }

  addPlayerCard(card) {
    this.playerCardsArray.push(card);
  }

  addEnemy(enemyCard) {
    this.enemyArray.push(enemyCard);
  }

  getEnemy() {
    return this.enemyArray[0];
  }

  start() {
    this.introScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    //prettier-ignore
    this.playerKnight = new Card("Knight", 1, 50, this.playerCardsHolder, "./images/Designer(14).jpeg");
    //prettier-ignore
    this.playerFireMage = new Card("Fire Mage", 2, 30, this.playerCardsHolder, "./images/Designer(13).jpeg");
    //prettier-ignore
    this.playerOgre = new Card("Ogre", 3, 60, this.playerCardsHolder, "images/FFD9djyXEAYdggn.png");
    //prettier-ignore
    this.PlayerIceMage = new Card("Ice Mage", 20, 20, this.playerCardsHolder, "images/Designer(1).jpeg");
    //prettier-ignore
    this.enemyDragon = new EnemyCard("Blue Dragon", 5, 100, this.enemyCardsHolder, "images/dragon.png");

    addPlayerCard(this.playerKnight);
    addEnemy(this.enemyDragon);

    this.playerKnight.attackEnemy(() => {
      const enemy = this.getEnemy();
      enemy.decreaseHealth(playerKnight.getAttack());
    });
  }
}
