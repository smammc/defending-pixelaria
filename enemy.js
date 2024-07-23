class Enemy {
  constructor(name, attack, health, cardId) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.enemyCardId = document.getElementById(cardId);
    this.updateCurrentHealth();
  }
  updateCurrentHealth() {
    const enemyCurrentHealth = document.getElementById("enemyCurrentHealth");
    this.health -= playerAttack;
    enemyCurrentHealth.innerHTML = this.health;
  }
}

/* for (let i = 0; i < this.health; i++) {
  const lifeElement = document.createElement("img");
  lifeElement.src = "help-pixelartheart.png";
  lifeElement.style.width = "20px";
  lifeElement.style.height = "20px";
  enemyLives.push(lifeElement);
  enemyUnit.appendChild(enemyLives);
}
return enemyLives; */
