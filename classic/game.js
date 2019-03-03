function Game() {
  this.grid = new Grid(4, 4);
  this.reset();
}

Game.prototype.newTile = function() {
  var options = [];

  for (var i = 0; i < this.grid.width; i++) {
    for (var j = 0; j < this.grid.height; j++) {
      if (!this.grid.tiles[i][j]) {
        options.push({x: i, y: j});
      }
    }
  }

  var option = randomElem(options);
  this.grid.addTile(2, option.x, option.y);
}

Game.prototype.reset = function() {
  this.grid.reset();
  this.newTile();
  this.newTile();
  this.grid.createElement();
}

Game.prototype.move = function(dir) {
  var newGrid = new Grid(4, 4, this.grid.div);

  for (var _i = 0; _i < this.grid.width; _i++) {
    for (var _j = 0; _j < this.grid.height; _j++) {
      var i = dir === 3 ? this.grid.width - 1 - _i : _i;
      var j = dir === 2 ? this.grid.height - 1 - _j : _j;

      var condition;
      var nI, nJ;

      switch (dir) {
        case 0:
          condition = j > 0;
          nI = i;
          nJ = j - 1;
          break;
        case 1:
          condition = i > 0;
          nI = i - 1;
          nJ = j;
          break;
        case 2:
          condition = j < this.grid.height - 1;
          nI = i;
          nJ = j + 1;
          break;
        case 3:
          condition = i < this.grid.width - 1;
          nI = i + 1;
          nJ = j;
          break;
      }

      var tile = this.grid.tiles[i][j];
      if (tile) {
        if (condition) {
          // var neighbor = tile.neighbors()[dir];
          var neighbor = newGrid.tiles[nI][nJ];
          if (!neighbor) {
            //newGrid.addTile(tile.value, nI, nJ, tile.div);

            newGrid.tiles[nI][nJ] = tile;
            tile.updateGrid(newGrid);
            tile.moveTo(nI, nJ);
          }
        } else {
          newGrid.tiles[i][j] = tile;
          tile.updateGrid(newGrid);
        }
      }
    }
  }

  this.grid = newGrid;
}
