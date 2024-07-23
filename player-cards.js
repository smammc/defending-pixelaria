class PlayerCard {
  constructor(name, health, attack, cardId) {
    this.playerName = name;
    this.playerHealth = health;
    this.playerAttack = attack;
    this.playerCardId = document.getElementById(cardId);
    this.damageEnemy();
  }
}
