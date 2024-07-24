class Card {
  //prettier-ignore
  constructor(name, attack, health, elementToAppend, imgSrc) {
    this.name = name;
    this.attack = attack;
    this.health = health;
    this.elementToAppend = elementToAppend;

    // Add variables to store the position of the card on the screen.

    //Creating card container
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("id", `${this.name}`)
    cardContainer.setAttribute("class", "card")

    //Creating the card elements

    let nameContainer = document.createElement("div");
    nameContainer.innerHTML = this.name
    nameContainer.setAttribute("id", "card-name")

    //Creating and styling the image element
    let imageContainer = document.createElement("img");
    imageContainer.src = imgSrc
    imageContainer.setAttribute("class","card-img")

    //Card stats
    let statsContainer = document.createElement("div");
    statsContainer.setAttribute("id", "stats-container")
    statsContainer.style.backgroundColor = "peru"

    let healthContainer = document.createElement("div");
    healthContainer.innerHTML = `Health: ${this.health}`

    let attackContainer = document.createElement("div");
    attackContainer.innerHTML = `Attack Power: ${this.attack}`

    //Connecting stats to stats container
    statsContainer.appendChild(healthContainer);
    statsContainer.appendChild(attackContainer);

    //Appending elements together
    cardContainer.appendChild(nameContainer);
    cardContainer.appendChild(imageContainer);
    cardContainer.appendChild(statsContainer);

    //Append everything to cardContainer
    this.elementToAppend.appendChild(cardContainer);
    this.element = cardContainer

    this.element.addEventListener("click", () => {
      this.damageEnemy()
    })
  }

  updateEnemyHealth() {
    const enemyCurrentHealth = document.getElementById(
      "enemy-health-container"
    );
    enemyCurrentHealth.innerHTML = `${this.health}`;
  }

  damageEnemy() {
    this.enemyDragon.decreaseHealth(this.attack);
  }

  getHealth() {
    // Return the value of health at the moment
    return this.health;
  }

  decreaseHealth(amount) {
    // Reduce the value of health by the amount given
    this.health -= amount;
  }

  getAttack() {
    // return the value of attack
    return this.attack;
  }
}
