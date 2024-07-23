class Card {
  //prettier-ignore
  constructor(name, attack, defense, elementToPlace, width, height, imgSrc, health) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.elementToPlace = elementToPlace;
    this.width = width;
    this.height = height;
    this.health = health;

    // Add variables to store the position of the card on the screen.

   /*  // Create the card img element
    this.element = document.createElement("img");
    // Set the img src, position, width and height
    this.element.src = imgSrc;
    this.element.position = "absolute";
    this.element.width = `${width}px`;
    this.element.height = `${height}px`;
    this.gameScreen.appendChild(this.element); */

    let enemyUnit = document.getElementById("enemy-div");
    updateCurrentHealth();
  }

  updateCurrentHealth() {
    const enemyCurrentHealth = document.getElementById("enemyCurrentHealth");
    enemyCurrentHealth.innerHTML = this.health;
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
