function Tile(value, grid, x, y, div) {
  this.value = value;
  this.updateGrid(grid);
  this.x = x;
  this.y = y;
  
  //this is where (if a div is given) it sets it to its own, so in the .moveTo 
  //function this.div.style can be set.
  this.div = div;
}

Tile.prototype.updateGrid = function(grid) {
  this.grid = grid;
}


Tile.prototype.neighbors = function() {
  var tiles = this.grid.tiles;
  var i = this.x;
  var j = this.y;

  return [tiles[i][j-1],
          tiles[i-1] ? tiles[i-1][j] : false,
          tiles[i][j+1],
          tiles[i+1] ? tiles[i+1][j] : false
  ]
}

Tile.prototype.createElement = function() {
  var div = document.createElement('DIV');
  var span = document.createElement('SPAN');
  var num = document.createTextNode(this.value);
  div.classList.add('tile');
  div.classList.add('tile-' + this.value);
  if (this.value > 2048) div.classList.add('tile-super');
  span.classList.add('tile-text');
  span.appendChild(num);
  div.appendChild(span);
  document.body.appendChild(div);
  this.div = div;
  return div;
}

Tile.prototype.moveTo = function(i, j) {
  var mx = i;
  var my = j;

  var x = 121.25 * mx;
  var y = 123 * my + 2;

  if (j === 0) {
    x = 121.25 * mx;
    y = 123 * my;
  }

  this.div.style['transform'] = 'translate(' + x + 'px, ' + y + 'px)';
  this.div.style['-webkit-transform'] = 'translate(' + x + 'px, ' + y + 'px)';
  this.div.style['-moz-transform'] = 'translate(' + x + 'px, ' + y + 'px)';
  this.div.style['-ms-transform'] = 'translate(' + x + 'px, ' + y + 'px)';
}
