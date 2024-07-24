class Game {
  constructor() {
    // Get the start screen and game screen elements
    this.introScreen = document.getElementById("intro-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-game-screen");
    this.playerCardsHolder = document.querySelector(".card-inventory");
    this.enemyCardsHolder = document.querySelector(".enemy-card-inventory");

    this.playerCardsArray = [];
    this.enemyCardsArray = [];

    this.enemyWins = false;
    this.playerWins = false;
    this.playerCardCounter = 0;
  }

  generateCards(cardsArray, arrayToAppend, enemyObj) {
    cardsArray.forEach((card, index) => {
      console.log("Generating card", index);
      const newCard = new Card(
        card.name,
        card.attack,
        card.health,
        card.elementToAppend,
        card.imgSrc,
        enemyObj
      );
      arrayToAppend.push(newCard);
    });
  }

  generateEnemy(cardsArray, arrayToAppend) {
    cardsArray.forEach((card, index) => {
      console.log("Generating enemy", index);
      const newEnemy = new EnemyCard(
        card.name,
        card.attack,
        card.health,
        card.elementToAppend,
        card.imgSrc
      );
      arrayToAppend.push(newEnemy);
    });
  }

  start() {
    this.introScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    let playerCards = [
      {
        name: "Knight",
        attack: 1,
        health: 50,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "./images/Designer(14).jpeg",
      },
      {
        name: "Fire Mage",
        attack: 2,
        health: 30,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "./images/Designer(13).jpeg",
      },
      {
        name: "Ogre",
        attack: 3,
        health: 60,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "./images/FFD9djyXEAYdggn.png",
      },
      {
        name: "Ice Mage",
        attack: 20,
        health: 20,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "./images/Designer(1).jpeg",
      },
    ];

    let enemyCards = [
      {
        name: "Blue Dragon",
        attack: 100,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/dragon.png",
      },
    ];

    this.generateEnemy(enemyCards, this.enemyCardsArray);
    // prettier-ignore
    this.generateCards(playerCards,this.playerCardsArray,this.enemyCardsArray[0]);
    this.playerCardCounter = this.playerCardsArray.length;
  }

  battleCycle() {
    this.playerCardsArray.forEach((card) => {
      card.element.addEventListener("click", () => {
        card.damageEnemy();
        card.updateEnemyHealth();
        card.damagePlayer();
        card.updatePlayerCardHealth();
        this.updatePlayerCardNumber();
        this.loseGame();
      });
    });
  }

  loseGame() {
    if (this.playerCardCounter === 0) {
      console.log("Player loses");
      this.enemyWins = true;
    }
  }

  updatePlayerCardNumber() {
    let cardContainer = document.getElementById("card-holder");
    let playerCardNumber = cardContainer.children.length;
    console.log(playerCardNumber);
    this.playerCardCounter = playerCardNumber;
  }
}
