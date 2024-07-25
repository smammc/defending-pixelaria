class Game {
  constructor() {
    // Get the start screen and game screen elements
    this.introScreen = document.getElementById("intro-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameScreen.style.display = "flex";
    this.endScreen = document.getElementById("end-game-screen");
    this.playerCardsHolder = document.querySelector(".card-inventory");
    this.enemyCardsHolder = document.querySelector(".enemy-card-inventory");
    // prettier-ignore
    this.enemyHealthContainer = document.getElementById("enemy-health-container");
    this.playerCardsArray = [];
    this.enemyCardsArray = [];
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

    //prettier-ignore
    this.generateEnemy(this.enemyCards[this.enemyDefeatedCounter], this.enemyCardsArray);
    // this.currentEnemy = this.enemyCardsArray[this.enemyDefeatedCounter];

    // prettier-ignore
    this.generateCards(playerCards, this.playerCardsArray, this.enemyCardsArray);
    this.playerCardCounter = this.playerCardsArray.length;
  }

  battleCycle() {
    this.playerCardsArray.forEach((card, index) => {
      card.element.addEventListener("click", () => {
        console.log("Player Cards: ", this.playerCardsArray.length);
        this.damageEnemy(card);
        this.damagePlayerCard(card, index);
        this.updateCurrentEnemy();
        this.loseGame();
      });
    });
  }

  damageEnemy(playerCard) {
    console.log("Damaging enemy");
    //prettier-ignore
    this.enemyCardsArray[this.enemyDefeatedCounter].health -=playerCard.attack;
    this.enemyCardsArray[this.enemyDefeatedCounter].updateEnemyHealth();
  }

  updateCurrentEnemy() {
    if (this.enemyCardsArray[this.enemyDefeatedCounter].health === 0) {
      // console.log("Enemy lost all its life");
      // prettier-ignore
      document.getElementById(`${this.enemyCardsArray[this.enemyDefeatedCounter].name}`).remove();
      this.enemyDefeatedCounter++;
      // //prettier-ignore
      this.generateEnemy(
        this.enemyCards[this.enemyDefeatedCounter],
        this.enemyCardsArray
      );
    }
  }

  damagePlayerCard(card, index) {
    console.log("Pressed card: ", index);
    card.health -= this.enemyCardsArray[this.enemyDefeatedCounter].attack;
    if (card.health <= 0) {
      document.getElementById(`${card.name}`).remove();
      this.playerCardsArray.splice(index, 1);
    } else {
      card.updatePlayerCardHealth();
    }
    console.log("How many cards: ", this.playerCardsArray.length);
    console.log(this.playerCardsArray);
  }

  loseGame() {
    if (this.playerCardsArray.length === 0) {
      console.log("Player loses");
    }
  }
}
