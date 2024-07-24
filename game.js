class Game {
  constructor() {
    // Get the start screen and game screen elements
    this.introScreen = document.getElementById("intro-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-game-screen");
    this.playerCardsHolder = document.querySelector(".card-inventory");
    this.enemyCardsHolder = document.querySelector(".enemy-card-inventory");
  }

  getEnemy() {
    return this.enemyCardsArray[0];
  }
  generateCards(cardsArray, arrayToAppend) {
    // prettier-ignore
    cardsArray.forEach((card, index) => {
        console.log("Generating card", index)
        const newCard = new Card(card.name, card.attack, card.health, card.elementToAppend, card.imgSrc);
      })
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
        attack: 5,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/dragon.png",
      },
    ];

    this.generateCards(playerCards);
    this.generateCards(enemyCards);
  }
}
