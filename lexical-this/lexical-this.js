var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      f.forEach(fr => this._friends.push(fr));
    }
  }
  return person;
}
