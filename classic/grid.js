function create2DArray(cols, rows) {
  var arr = Array(cols);
  for (var i = 0; i < cols; i++) {
    arr[i] = Array(rows);
    for (var j = 0; j < cols; j++) {
      arr[i][j] = false;
    }
  }
  return arr;
}




function Grid(width, height, elt) {
  this.width = width;
  this.height = height;

  if (elt) {
    this.div = elt;
  }

  this.reset();
}

Grid.prototype.reset = function() {
  this.tiles = create2DArray(this.width, this.height);
}

Grid.prototype.addTile = function(value, x, y, div) {
   //changed this so is uses the existing div.
  this.tiles[x][y] = new Tile(value, this, x, y, div);
}

Grid.prototype.createElement = function() {
  var div = document.createElement('DIV');
  div.id = 'grid';
  document.body.appendChild(div);
  var cells = [];

  for (var j = 0; j < this.height; j++) {
    for (var i = 0; i < this.width; i++) {
      if (this.tiles[i][j]) {
        var tile = this.tiles[i][j];

        var tileElt = tile.createElement();
        div.appendChild(tileElt);
        if (j === 0) tileElt.classList.add('off');

        console.log(i, j);
        tile.moveTo(i, j);
      }
    }
  }

  for (var j = 0; j < this.height; j++) {
    for (var i = 0; i < this.width; i++) {
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
