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
    this.winScreen = document.getElementById("win-game-screen");
    this.defeatedPlayerCardsCounter = 4;
    this.levelCounter = document.getElementById("level-counter-id");
    this.levelCounter.innerHTML = `Level: ${this.enemyDefeatedCounter}`;
    this.playerLives = document.getElementById("player-lives-counter-id");
    this.playerLives.innerHTML = `Player Lives: ${this.defeatedPlayerCardsCounter}/4`;
    this.enemyCards = [
      {
        name: "Blue Dragon",
        attack: 10,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/dragon.png",
      },
      {
        name: "Skeletal Warrior",
        attack: 20,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Skeleton-warrior.png",
      },
      {
        name: "Khaan the Angry",
        attack: 60,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/angry-orc-png.png",
      },

      {
        name: "The Ghoul King",
        attack: 15,
        health: 150,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Ghoul King.png",
      },
      {
        name: "Dark Dragon Rider",
        attack: 25,
        health: 120,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/enemydragonrider.png",
      },
      {
        name: "Dragon Sensei",
        attack: 10,
        health: 300,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Dragon-sensei.png.png",
      },
      {
        name: "Water Dragon",
        attack: 25,
        health: 80,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Water.dragon.png.png",
      },
      {
        name: "Water-Fire Dragon",
        attack: 30,
        health: 100,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Water-fire-dragon.png.png",
      },
      {
        name: "Tobias The Green Dragon",
        attack: 6,
        health: 120,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Gree-dragon-on-tree.png.png",
      },
      {
        name: "Marcus The Green Dragon",
        attack: 8,
        health: 120,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Green-dragon.png.png",
      },
      {
        name: "The Elemental Triad",
        attack: 30,
        health: 225,
        elementToAppend: this.enemyCardsHolder,
        imgSrc: "images/Enemies/Elemental-dragons.png.png",
      },
    ];
  }

  generateCards(cardsArray, arrayToAppend, enemyObj) {
    const randomIndex = this.randomizeCards(cardsArray.length);
    /*  const enemy = enemyArray[randomIndex]; */
    cardsArray.splice(randomIndex, 3).forEach((card, index) => {
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

  generateNewPlayerCard(card, arrayToAppend) {
    const generatedNewPlayerCard = new Card(
      card.name,
      card.attack,
      card.health,
      card.elementToAppend,
      card.imgSrc,
      this.enemyDefeatedCounter,
      this.enemyCardsArray,
      card.attackImageSrc,
      card.specialAttack
    );
    arrayToAppend.push(generatedNewPlayerCard);
    this.playerCardsHolder.appendChild(generatedNewPlayerCard.element);
    this.addCardEvents(generatedNewPlayerCard);
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

  randomizeCards(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  }

  start() {
    this.introScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.playerCards = [
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
        attack: 50,
        health: 30,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Fire-mage-card.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/Fireball.png",
        specialAttack:
          "This mage has an affinity with fire spells and is fascinated by pyromancy",
      },
      {
        name: "Ogre",
        attack: 7,
        health: 110,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/ogre-card.png",
        attackImageSrc: "images/PlayerCardAttacks/cleaver-sword-png.png",
        specialAttack:
          "The ogre has a lot of health and anger. He yearns to return to his swamp one day",
      },
      {
        name: "Ice Mage",
        attack: 45,
        health: 35,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Ice-Mage.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/iceSpell.png",
        specialAttack:
          "The Ice Mage rejoices in cold weather and uses his spells to keep the summer at bay",
      },

      {
        name: "Blue Dragon Rider",
        attack: 20,
        health: 100,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/blueDragonRider.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/iceSpell.png",
        specialAttack:
          "The bond between a dragon and its' rider is believed to be unbreakeable",
      },

      {
        name: "Red Dragon Rider",
        attack: 50,
        health: 80,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/redDragonRider.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/Fireball.png",
        specialAttack:
          "The bond between a dragon and its' rider is believed to be unbreakeable",
      },
      {
        name: "Fire Knight",
        attack: 10,
        health: 100,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/fire-knight.png",
        attackImageSrc: "images/PlayerCardAttacks/fire-sword-png.png",
        specialAttack: "He set his spear on fire",
      },

      {
        name: "Gunther, the Dwarf Magician",
        attack: 55,
        health: 55,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/dward-magician.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/Fireball.png",
        specialAttack: "Gunther is wise in the ways of magic",
      },

      {
        name: "Fire Archer",
        attack: 50,
        health: 40,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/fire-archer.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/fire-sword-png.png",
        specialAttack:
          "The Fire Archer practiced for many decades before being able to shoot fire arrows",
      },

      {
        name: "Richard, the Ogre",
        attack: 25,
        health: 80,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/richardtheogre.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/green-punch-png.png",
        specialAttack: "Works part-time as an attourney",
      },
      {
        name: "Orangie, the Ogre",
        attack: 25,
        health: 80,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/orangeOgre.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/green-punch-png.png",
        specialAttack: "Can only see the color orange",
      },
      {
        name: "Flirtatious Ogre",
        attack: 2,
        health: 250,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/flirtatious-ogre.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/green-punch-png.png",
        specialAttack: `"Wow, you're really a dextrous clicker, huh... Please don't stop clicking me"`,
      },
      {
        name: "Timothy the Travelling Dwarf",
        attack: 30,
        health: 60,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/traveling-dwarf-mage.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/Fireball.png",
        specialAttack: "Timothy spends his days roaming the lands of Pixelaria",
      },
      {
        name: "Swordblade rogue",
        attack: 80,
        health: 55,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/blueSword-rogue.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/arcane-spell-png.png",
        specialAttack: "He owns a magic blue sword",
      },

      {
        name: "SpellBlade Wizard",
        attack: 60,
        health: 60,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/spellsword-mage.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/arcane-spell-png.png",
        specialAttack: "He owns a magic blue sword",
      },

      {
        name: "Krull",
        attack: 30,
        health: 90,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/friendly-axe-ogre.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/green-punch-png.png",
        specialAttack: "Really good with axes",
      },
      {
        name: "Magic Rogue",
        attack: 90,
        health: 40,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/magic-rogue.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/arcane-spell-png.png",
        specialAttack: "",
      },

      {
        name: "Merlin",
        attack: 75,
        health: 22,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/purple-robe-wizard.png",
        attackImageSrc: "images/PlayerCardAttacks/fire-sword-png.png",
        specialAttack: "As wise as he is old and frail",
      },

      {
        name: "Arcane Mage",
        attack: 30,
        health: 40,
        elementToAppend: this.playerCardsHolder,
        imgSrc: "images/PlayerCards/Arcane-mage.jpeg",
        attackImageSrc: "images/PlayerCardAttacks/blue-magic-spell-png.png",
        specialAttack:
          "Has lived in the arcane dimension his whole life, he only leaves his home too defend Pixelaria",
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
    this.generateCards(this.playerCards, this.playerCardsArray, this.enemyCardsArray);
    this.playerCardCounter = this.playerCardsArray.length;
  }

  battleCycle() {
    this.playerCardsArray.forEach((card, index) => {
      card.element.addEventListener("click", () => {
        /* console.log("Player Cards: ", this.playerCardsArray.length); */
        this.damageEnemy(card);
        this.damagePlayerCard(card, index);
        this.updateCurrentEnemy();
        this.loseGame();
        this.winGame();
      });
    });
  }

  damageEnemy(playerCard) {
    /* console.log("Damaging enemy"); */
    //prettier-ignore
    this.enemyCardsArray[this.enemyDefeatedCounter].health -= playerCard.attack;
    this.enemyCardsArray[this.enemyDefeatedCounter].updateEnemyHealth();

    /* Making health bar decrease vidually
    const percentageOfLostHealth = (playerCard.attack / this.enemyCardsArray[this.enemyDefeatedCounter].health) * 100;
    const enemyHealth = document.getElementById("enemy-health-container");
    const currentHealthWidth = parseFloat(enemyHealth.style.width);
    const newHealthWidth = Math.max(currentHealthWidth - percentageOfLostHealth, 0);
    enemyHealth.style.width = `${newHealthWidth}`; */
  }

  updateCurrentEnemy() {
    if (this.enemyCardsArray[this.enemyDefeatedCounter].health === 0) {
      // console.log("Enemy lost all its life");
      // prettier-ignore
      document.getElementById(`${this.enemyCardsArray[this.enemyDefeatedCounter].name}`).remove();
      this.enemyDefeatedCounter++;
      this.levelCounter.innerHTML = `Level: ${this.enemyDefeatedCounter}/10`;
      console.log("playerCards", this.playerCards);
      this.generateNewPlayerCard(
        this.playerCards[this.enemyDefeatedCounter],
        this.playerCardsArray
      );
      // //prettier-ignore
      this.generateEnemy(
        this.enemyCards[this.enemyDefeatedCounter],
        this.enemyCardsArray
      );
    }
    if (this.enemyDefeatedCounter === 4) {
      document.getElementById("enter-the-dungeon").style.display = "block";
      document.getElementById("game-screen").style.backgroundImage =
        "url('images/dungeon-background.jpeg')";
      setTimeout(() => {
        document.getElementById("enter-the-dungeon").style.display = "none";
      }, 3000);
    }
  }

  damagePlayerCard(card, index) {
    /* console.log("Pressed card: ", index); */
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
    }, 1500);
    if (card.health <= 0) {
      this.defeatedPlayerCardsCounter -= 1;
      document.getElementById(`${card.name}`).remove();
      this.playerCardsArray.splice(index, 1);
      this.playerLives.innerHTML = `Player Lives: ${this.defeatedPlayerCardsCounter}/4`;
      //prettier-ignore
      console.log("defeatedPlayerCardsCounter:",this.defeatedPlayerCardsCounter);
    } else {
      card.updatePlayerCardHealth();
    }
    console.log("How many cards: ", this.playerCardsArray.length);
  }

  addCardEvents(card) {
    card.element.addEventListener("click", () => {
      this.damageEnemy(card);
      this.damagePlayerCard(card, this.playerCardsArray.indexOf(card));
      this.updateCurrentEnemy();
      this.loseGame();
      this.winGame();
    });
  }

  loseGame() {
    if (
      this.defeatedPlayerCardsCounter === 0 ||
      this.playerCardsArray.length === 0
    ) {
      this.introScreen.style.display = "none";
      this.gameScreen.style.display = "none";
      this.winScreen.style.display = "none";
      this.endScreen.style.display = "block";
      console.log("Player loses");
    }
  }
  winGame() {
    if (this.enemyDefeatedCounter === 6) {
      this.introScreen.style.display = "none";
      this.gameScreen.style.display = "none";
      this.winScreen.style.display = "block";
      this.endScreen.style.display = "none";
      console.log("Player loses");
    }
  }
}
