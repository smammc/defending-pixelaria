class EnemyCard {
  constructor(name, attack, health, elementToAppend, imgSrc) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.elementToAppend = elementToAppend;

    let enemyContainer = document.createElement("div");
    enemyContainer.setAttribute("id", `${this.name}`);
    enemyContainer.setAttribute("class", "enemy-container");

    let enemyNameContainer = document.createElement("div");
    enemyNameContainer.innerHTML = this.name;
    enemyNameContainer.setAttribute("id", "enemy-name-id");
    enemyNameContainer.setAttribute("class", "enemy-name-class");

    let enemyImageContainer = document.createElement("img");
    enemyImageContainer.src = imgSrc;
    enemyImageContainer.setAttribute("class", "enemy-img");

    let enemyHealthContainer = document.createElement("div");
    enemyHealthContainer.setAttribute("id", "enemy-health-container");
    enemyHealthContainer.innerHTML = `${this.health}`;

    enemyContainer.appendChild(enemyNameContainer);
    enemyContainer.appendChild(enemyHealthContainer);
    enemyContainer.appendChild(enemyImageContainer);

    this.elementToAppend.appendChild(enemyContainer);
    this.element = enemyContainer;
  }

  // Reduce the value of health by the amount given

  updateEnemyHealth() {
    const enemyCurrentHealth = document.getElementById(
      "enemy-health-container"
    );
    enemyCurrentHealth.innerHTML = `${this.health}`;
  }
}
