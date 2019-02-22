function Tile(value) {
  this.value = value;
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
  return div;
}
