class Game {
  constructor() {
    // Get the start screen and game screen elements
    this.introScreen = document.getElementById("intro-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameScreen.style.display = "flex";
    this.endScreen = document.getElementById("end-game-screen");
    this.playerCardsHolder = document.querySelector(".card-inventory");
    this.enemyCardsHolder = document.querySelector(".enemy-card-inventory");
    this.enemyHealthContainer = document.getElementById(
      "enemy-health-container"
    );

    this.playerCardsArray = [];
    this.enemyCardsArray = [];

    this.enemyWins = false;
    this.playerWins = false;
    this.playerCardCounter = 0;
  }

  generateCards(cardsArray, arrayToAppend, enemyObj) {
    cardsArray.forEach((card, index) => {
      console.log("Generating card", index);
      const newEnemyCard = new Card(
        card.name,
        card.attack,
        card.health,
        card.elementToAppend,
        card.imgSrc,
        enemyObj,
        card.attackImageSrc
      );
      arrayToAppend.push(newEnemyCard);
      this.currentEnemy = newEnemyCard;
    });
  }

  generateEnemy(enemyArray, arrayToAppend) {
    const randomIndex = this.randomizeCards(enemyArray.length);
    const enemy = enemyArray[randomIndex];
    const newEnemy = new EnemyCard(
      enemy.name,
      enemy.attack,
      enemy.health,
      enemy.elementToAppend,
      enemy.imgSrc
    );
    arrayToAppend.push(newEnemy);
    this.currentEnemy = newEnemy;
  }

  randomizeCards(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  }

  /*   generateEnemy(cardsArray, arrayToAppend) {
    cardsArray.forEach((card, index) => {
      console.log("Generating enemy", index);
      //prettier-ignore
      const newEnemy = new EnemyCard(card.name, card.attack, card.health, card.elementToAppend, card.imgSrc);
      arrayToAppend.push(newEnemy);
    });
  } */

  start() {
    this.introScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    let playerCards = [
      {
        name: "Knight",
        attack: 1,
        health: 50,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/KnightCard.jpeg",
      },
      {
        name: "Fire Mage",
        attack: 30,
        health: 30,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Fire-mage-card.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/Fireball.png",
      },
      {
        name: "Ogre",
        attack: 10,
        health: 150,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/ogre-card.png",
      },
      {
        name: "Ice Mage",
        attack: 30,
        health: 20,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Ice-Mage.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/iceSpell.png",
      },
    ];

    let enemyCards = [
      {
        name: "Blue Dragon",
        attack: 10,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Dragon-sensei.png.png",
      },
      {
        name: "Skeletal Warrior",
        attack: 20,
        health: 60,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Skeleton-warrior.png",
      },
      {
        name: "Tobias The Green Dragon",
        attack: 5,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Gree-dragon-on-tree.png.png",
      },
      {
        name: "Marcus The Green Dragon",
        attack: 10,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Green-dragon.png.png",
      },
      {
        name: "The Ghoul King",
        attack: 10,
        health: 80,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Ghoul King.png",
      },
      {
        name: "Water Dragon",
        attack: 40,
        health: 40,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Water.dragon.png.png",
      },
      {
        name: "Dragon Sensei",
        attack: 10,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Dragon-sensei.png.png",
      },
    ];

    this.generateEnemy(enemyCards, this.enemyCardsArray);
    // prettier-ignore
    this.generateCards(playerCards, this.playerCardsArray, this.enemyCardsArray[0]);
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
        card.updateCurrentEnemy();
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

  /* nextEnemy() {
    if ((this.enemyHealthContainer.innerHTML = "0")) {
      document.getElementById(`${this.enemy.name}`).remove();
      this.generateEnemy(enemyCards, this.enemyCardsArray);
    }
  } */
}
