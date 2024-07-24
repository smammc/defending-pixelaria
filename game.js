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
  }

  generateCards(cardsArray, arrayToAppend, enemyObj) {
    // prettier-ignore
    cardsArray.forEach((card, index) => {
        console.log("Generating card", index)
        const newCard = new Card(card.name, card.attack, card.health, card.elementToAppend, card.imgSrc, enemyObj);
        arrayToAppend.push(newCard);
      })
  }
  generateEnemy(cardsArray, arrayToAppend) {
    // prettier-ignore
    cardsArray.forEach((card, index) => {
        console.log("Generating enemy", index)
        const newEnemy = new EnemyCard(card.name, card.attack, card.health, card.elementToAppend, card.imgSrc);
        arrayToAppend.push(newEnemy);
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
        attack: 100,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/dragon.png",
      },
    ];
    //prettier-ignore
    this.generateEnemy(enemyCards, this.enemyCardsArray);
    //prettier-ignore
    this.generateCards(playerCards, this.playerCardsArray, this.enemyCardsArray[0]);
    this.availableCards = document.getElementsByClassName("card");
    console.log("console", this.playerCardsArray);
  }

  loseGame() {
    console.log(this.playerCardsArray.length);
  }

  /*  const cardTest = document.getElementById("card-holder");
    if ((cardTest.length = 3)) {
      console.log("lose"); */
  /*  const gameOverCardArray = [...this.availableCards];
    console.log("testing", gameOverCardArray);
    if (gameOverCardArray.length <= 2) {
      console.log("losing cards");
    }
  } */
  /*   if (
      this.playerCardsArray.every(
        (card) => document.getElementById(card.name) === null
      )
    ) {
    } */
}
