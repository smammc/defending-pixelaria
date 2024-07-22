class Game {
  constructor() {
    this.introScreen = document.getElementsByIdName("intro-screen");
  }
  start() {
    this.introScreen.style.display = "none";
  }
}
