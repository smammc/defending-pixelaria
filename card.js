class Card {
  constructor(
    name,
    attack,
    health,
    elementToAppend,
    imgSrc,
    enemy,
    attackImgSrc
  ) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.elementToAppend = elementToAppend;
    this.enemy = enemy;
    this.enemyCardsArray = [];
    this.attackImgSrc = attackImgSrc;

    // Creating card container
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", `${this.name}`);
    cardContainer.setAttribute("class", "card");

    // Creating the card elements
    let nameContainer = document.createElement("div");
    nameContainer.innerHTML = this.name;
    nameContainer.setAttribute("id", "card-name");

    // Creating and styling the image element
    let imageContainer = document.createElement("img");
    imageContainer.src = imgSrc;
    imageContainer.setAttribute("class", "card-img");

    // Card stats
    let statsContainer = document.createElement("div");
    statsContainer.setAttribute("id", "stats-container");
    statsContainer.style.backgroundColor = "peru";

    let healthContainer = document.createElement("div");
    healthContainer.innerHTML = `Health: ${this.health}`;
    healthContainer.setAttribute("id", `${this.name}health-container-id`);

    let attackContainer = document.createElement("div");
    attackContainer.innerHTML = `Attack Power: ${this.attack}`;

    let playerAttackImageDiv = document.getElementById("player-attack-img-div");
    let playerAttackImage = document.createElement("img");
    playerAttackImage.src = attackImgSrc;
    playerAttackImage.setAttribute("class", "player-attack-img");
    playerAttackImage.setAttribute("id", `${this.name}-player-attack-img-id`);
    playerAttackImageDiv.appendChild(playerAttackImage);

    // Connecting stats to stats container
    statsContainer.appendChild(healthContainer);
    statsContainer.appendChild(attackContainer);

    // Appending elements together
    cardContainer.appendChild(nameContainer);
    cardContainer.appendChild(imageContainer);
    cardContainer.appendChild(statsContainer);

    // Append everything to cardContainer
    this.elementToAppend.appendChild(cardContainer);
    this.element = cardContainer;
  }

  updateEnemyHealth() {
    if (this.enemy.health <= 0) {
      this.enemy.health = 0;
    }
    // prettier-ignore
    const enemyCurrentHealth = document.getElementById("enemy-health-container");
    enemyCurrentHealth.innerHTML = `${this.enemy.health}`;
  }

  updatePlayerCardHealth() {
    if (this.health <= 0) {
      document.getElementById(`${this.name}`).remove();
    } else {
      const cardHealth = document.getElementById(
        `${this.name}health-container-id`
      );
      cardHealth.innerHTML = `Health: ${this.health}`;
    }
  }

  damageEnemy() {
    this.enemy.health -= this.attack;
    const originalMargin = this.element.style.marginBottom;
    this.element.style.marginBottom = `90px`;
    document.getElementById("player-attack-img-div").style.display = "block";

    setTimeout(() => {
      this.element.style.marginBottom = originalMargin;
      document.getElementById("player-attack-img-div").style.display = "none";
    }, 3000);
  }

  damagePlayer() {
    this.health -= this.enemy.attack;
  }

  updateCurrentEnemy() {
    if (this.enemy.health === 0) {
      document.getElementById(`${this.enemy.name}`).remove();
    }
  }
}
