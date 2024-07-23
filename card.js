class Card {
  constructor(
    name,
    attack,
    defense,
    gameScreen,
    width,
    height,
    imgSrc,
    health
  ) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.gameScreen = gameScreen;
    this.width = width;
    this.height = height;
    this.health = health;
    cardHolderDiv.appendChild("newcardname");

    // Add variables to store the position of the card on the screen.

    // Create the card img element
    this.element = document.createElement("img");
    // Set the img src, position, width and height
    this.element.src = imgSrc;
    this.element.position = "absolute";
    this.element.width = `${width}px`;
    this.element.height = `${height}px`;
    this.gameScreen.appendChild(this.element);
  }
}
