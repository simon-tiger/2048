function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomElem(arr) {
  return arr[randomInt(0, arr.length)];
}



var tiles = [];
var grid = new Grid(4, 4);

function newTile() {
  var options = [];

  for (var i = 0; i < grid.width; i++) {
    for (var j = 0; j < grid.height; j++) {
      if (!grid.tiles[i][j]) {
        options.push({x: i, y: j});
      }
    }
  }

  var option = randomElem(options);
  grid.addTile(2, option.x, option.y);
}

newTile();
newTile();

console.log(tiles);
