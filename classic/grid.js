function create2DArray(cols, rows) {
  var arr = Array(cols);
  for (var i = 0; i < cols; i++) {
    arr[i] = Array(rows);
  }
  return arr;
}




function Grid(width, height) {
  this.tiles = create2DArray(width, height);
  this.width = width;
  this.height = height;
}

Grid.prototype.addTile = function(value, x, y) {
  this.tiles[x][y] = new Tile(value);
}

Grid.prototype.createElement = function() {
  var div = document.createElement('DIV');
  div.id = 'grid';
  document.body.appendChild(div);
  var cells = [];
  for (var j = 0; j < this.height; j++) {
    for (var i = 0; i < this.width; i++) {
      if (this.tiles[i][j]) {
        var tile = this.tiles[i][j].createElement();
        div.appendChild(tile);
        if (j === 0) tile.classList.add('off');
      }

      var cell = document.createElement('DIV');
      div.appendChild(cell);
      cell.classList.add('cell');

      if (j === 0) cell.classList.add('up');
      if (i === this.width-1) cell.classList.add('right');
      if (j === this.height-1) cell.classList.add('down');
      if (i === 0) cell.classList.add('left');
      cells.push(cell);
    }
    var br = document.createElement('BR');
    div.appendChild(br);
  }
  this.div = div;
  return div;
}
