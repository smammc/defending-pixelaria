class EnemyCard /* extends Card */ {
  constructor(
    name,
    attack,
    defense,
    gameScreen,
    width,
    height,
    imgSrc,
    health //prettier-ignore
  ) {}
  /*   super(name, attack, defense, gameScreen, width, height, imgSrc, health);
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.width = width;
    let enemyUnit = document.getElementById("enemy-div");
    updateCurrentHealth();
  }

  // Characteristics that belong only to the enemyCard

  updateCurrentHealth() {
    const enemyCurrentHealth = document.getElementById("enemyCurrentHealth");
    enemyCurrentHealth.innerHTML = "50";
  } */
}

/* 
  init(health) {
    let enemyLives = [];
    for (let i = 0; i < this.health; i++) {
      const lifeElement = document.createElement("img");
      lifeElement.src = "help-pixelartheart.png";
      lifeElement.style.width = "20px";
      lifeElement.style.height = "20px";
      enemyLives.push(lifeElement);
      enemyUnit.appendChild(enemyLives);
    }
    return enemyLives;
  } */
