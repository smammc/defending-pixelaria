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
    this.enemyDefeatedCounter = 0;
    this.enemyCards = [
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
    this.playerCardsArray = [];
    this.enemyCardsArray = [];

    /* this.enemyWins = false;
    this.playerWins = false; */
    this.playerCardCounter = 0;
  }

  generateCards(cardsArray, arrayToAppend, enemyObj) {
    cardsArray.forEach((card, index) => {
      console.log("Generating card", index);
      const newPlayerCard = new Card(
        card.name,
        card.attack,
        card.health,
        card.elementToAppend,
        card.imgSrc,
        this.enemyDefeatedCounter,
        enemyObj,
        card.attackImageSrc
      );
      arrayToAppend.push(newPlayerCard);
      console.log("consoletest", newPlayerCard);
    });
  }

  generateEnemy(enemy, arrayToAppend) {
    /*  const randomIndex = this.randomizeCards(enemyArray.length);
      const enemy = enemyArray[randomIndex]; */
    const newEnemy = new EnemyCard(
      enemy.name,
      enemy.attack,
      enemy.health,
      enemy.elementToAppend,
      enemy.imgSrc,
      enemy.attackImageSrc
    );
    arrayToAppend.push(newEnemy);
    /* this.currentEnemy = newEnemy; */
  }

  /*   randomizeCards(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  } */

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
        health: 15,
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
    console.log("enemyCards", this.enemyCards);
    //prettier-ignore
    this.generateEnemy(this.enemyCards[this.enemyDefeatedCounter], this.enemyCardsArray);
    this.currentEnemy = this.enemyCardsArray[this.enemyDefeatedCounter];

    // prettier-ignore
    this.generateCards(playerCards, this.playerCardsArray, this.enemyCards);
    this.playerCardCounter = this.playerCardsArray.length;
  }

  battleCycle() {
    this.playerCardsArray.forEach((card) => {
      card.element.addEventListener("click", () => {
        card.damageEnemy();
        card.updateEnemyHealth();
        card.damagePlayer();
        card.updatePlayerCardHealth();
        this.updateCurrentEnemy();
        this.updatePlayerCardNumber();
        this.loseGame();
        this.updateEnemyStatus();
        this.nextEnemy();
        console.log(this.enemyCardsArray);
      });
    });
  }

  loseGame() {
    if (this.playerCardCounter < 3) {
      console.log("Player loses");
      /* this.enemyWins = true; */
    }
  }

  updatePlayerCardNumber() {
    let cardContainer = document.getElementById("card-holder");
    let playerCardNumber = cardContainer.children.length;
    /*  console.log(playerCardNumber); */
    this.playerCardCounter = playerCardNumber;
  }

  /* updateEnemyStatus() {
    let enemyContainer = document.getElementById("enemy-card-holder");
    let enemyNumber = enemyContainer.children.length;
    console.log(enemyNumber);
    this.enemyNumberCounter = enemyNumber;
  } */

  updateCurrentEnemy() {
    let enemyHealthContainerValue = parseInt(
      document.getElementById("enemy-health-container").value
    );
    this.currentEnemy.health = enemyHealthContainerValue;
    if (this.currentEnemy.health === 0) {
      console.log("current Enemy", this.currentEnemy);
      document.getElementById(`${this.currentEnemy.name}`).remove();

      this.enemyDefeatedCounter++;
      //prettier-ignore
      this.generateEnemy(this.enemyCards[this.enemyDefeatedCounter], this.enemyCardsArray)
      console.log("counter", this.enemyDefeatedCounter);
    }
    console.log("currentenemy", this.currentEnemy);
  }

  nextEnemy() {
    console.log("Win!");

    /*   this.enemy = this.enemyCardsArray[this.enemyDefeatedCounter];
    console.log("defeatedCounter", this.enemyDefeatedCounter); */
    //prettier-ignore
    /* this.generateEnemy(this.enemyCards[this.enemyDefeatedCounter], this.enemyCardsArray); */
  }

  /* document.getElementById("win-game-screen").style.display = "block";
      document.getElementById("end-game-screen").style.display = "none";
      document.getElementById("game-screen").style.display = "none"; */

  /*  nextEnemy() {
    
  } */
}
