function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomElem(arr) {
  return arr[randomInt(0, arr.length)];
}

var game;

function createGame() {
  game = new Game;
}
