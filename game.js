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
    this.defeatedPlayerCardsCounter = 0;

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
    cardsArray.splice(0, 6).forEach((card, index) => {
      /* console.log("Generating card", index); */
      const newPlayerCard = new Card(
        card.name,
        card.attack,
        card.health,
        card.elementToAppend,
        card.imgSrc,
        this.enemyDefeatedCounter,
        enemyObj,
        card.attackImageSrc,
        card.specialAttack
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
  }

  /*   randomizeCards(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
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
        attackImageSrc: "images/PlayerCardAttacks/pixel-sword.png.png",
        specialAttack:
          "The Knight is a hard-working unit that will do it's best to protect it's master",
      },
      {
        name: "Fire Mage",
        attack: 30,
        health: 30,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Fire-mage-card.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/Fireball.png",
        specialAttack:
          "This mage has an affinity with fire spells and is fascinated by pyromancy",
      },
      {
        name: "Ogre",
        attack: 10,
        health: 150,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/ogre-card.png",
        attackImageSrc: "images/PlayerCardAttacks/cleaver-sword-png.png",
        specialAttack:
          "The ogre has a lot of health and anger. He yearns to return to his swamp one day",
      },
      {
        name: "Ice Mage",
        attack: 30,
        health: 20,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Ice-Mage.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/iceSpell.png",
        specialAttack:
          "The Ice Mage rejoices in cold weather and uses his spells to keep the summer at bay",
      },
      {
        name: "Fire Knight",
        attack: 10,
        health: 80,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/fire-knight.png",
        attackImageSrc: "images/PlayerCardAttacks/fire-sword-png.png",
        specialAttack: "He set his spear on fire",
      },
      {
        name: "Fire Archer",
        attack: 30,
        health: 20,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/fire-archer.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/fire-sword-png.png",
        specialAttack:
          "The Fire Archer practiced for many decades before being able to shoot fire arrows",
      },

      {
        name: "Arcane Mage",
        attack: 30,
        health: 40,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Arcane-mage.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/arcane-spell-png.png",
        specialAttack: "",
      },

      {
        name: "Dragon Trainer",
        attack: 30,
        health: 90,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Blue-dragon-trainer.jpeg",
        specialAttack: "",
      },

      /*  {
        name: "Blue Fire Mage",
        attack: 30,
        health: 20,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/Mage.png",
        attackImageSrc: "images/PlayerCardAttacks/iceSpell.png",
        specialAttack: "",
      }, */
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
    this.enemyCardsArray[this.enemyDefeatedCounter].health -= playerCard.attack;
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
    card.attackAnimation();
    card.health -= this.enemyCardsArray[this.enemyDefeatedCounter].attack;
    //prettier-ignore
    const attackImg = document.getElementById(`${card.name}-player-attack-img-id`);
    attackImg.style.display = "flex";
    /* document.getElementById(`${this.name}health-container-id`).style.color =
      "red"; */
    setTimeout(() => {
      attackImg.style.display = "none";
      /* document.getElementById(`${this.name}health-container-id`).style.color =
        "white"; */
    }, 2000);
    if (card.health <= 0) {
      document.getElementById(`${card.name}`).remove();
      this.playerCardsArray.splice(index, 1);
      this.defeatedPlayerCardsCounter++;
      console.log(
        "defeatedPlayerCardsCounter:",
        this.defeatedPlayerCardsCounter
      );
    } else {
      card.updatePlayerCardHealth();
    }
    console.log("How many cards: ", this.playerCardsArray.length);
    console.log(this.playerCardsArray);
  }

  loseGame() {
    if (this.defeatedPlayerCardsCounter === 4) {
      console.log("Player loses");
    }
  }
}
