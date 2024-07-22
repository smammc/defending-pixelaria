class Enemy {
  constructor(name, attack, health) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    let enemyUnit = document.getElementById("enemy-div");
  }

  init(health) {
    let enemyLives = [];
    for (let i = 0; i < this.health; i++) {
      const lifeElement = document.createElement("img");
      lifeElement.src = lifeElement.style.width = "20px";
      lifeElement.style.height = "20px";
      enemyLives.push(lifeElement);
      enemyUnit.appendChild(enemyLives);
    }
    return enemyLives;
  }
}
