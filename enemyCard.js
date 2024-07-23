class EnemyCard {
  constructor(name, attack, defense, gameScreen, width, height, imgSrc) {
    super(name, attack, defense, gameScreen, width, height, imgSrc);
    let enemyUnit = document.getElementById("enemy-div");
  }

  // Characteristics that belong only to the enemyCard

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
  }
}
