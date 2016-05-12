Number.prototype.times = function (f) {
  for(let i = 0; i < this; i++) {
    f.call(this, i);
  }
}
