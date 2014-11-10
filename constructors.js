var Cat = function (name, owner) {
  this.name = name;
  this.owner = owner;

}

Cat.prototype.cuteStatement = function () {
  return this.owner + " loves " + this.name;
};


var sennacy = new Cat("Sennacy", "Jonathan");
var tom = new Cat("Tom", "Jerry");


Cat.prototype.cuteStatement = function () {
  return "Everyone loves " + this.name + "!";
};

Cat.prototype.meow = function () {
  console.log("meeeooow");
};

tom.meow = function () {
  console.log("wooof");
};