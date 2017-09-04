function Animal () {
  this.hunger = 50;
  this.thirst = 50;
  this.eat = function(){
  	this.hunger --; 
  };
  this.drink = function(){
  	this.thirst --;
  };
  this.play = function(){
    this.hunger ++;
    this.thirst ++;
  };

}

function Farm (slots) {
  this.animals = [];
  this.slots = slots;
  this.breed = function(animal){
    if(this.animals.length < this.slots) {
      this.animals.push(animal);
    };
  };
  this.slaughter = function() {
  	var min = this.animals[0].hunger;
  	var index = 0;
    for (var i = 0; i < this.animals.length; i++) {
     	this.animals[i]
     
      if(this.animals[i].hunger<min){
      	min = this.animals[i].hunger
      	index = i;
      }
    };
    this.animals.splice(index,1);
    
  }
};

var a = new Animal();
a.eat();
var c = new Animal();
c.eat();
c.eat();
c.eat();
var d = new Animal();
d.eat();
d.eat();
var e = new Animal();
e.eat();
e.eat();
e.eat();
e.eat();
var f = new Animal();
f.play();
var b = new Farm(5);
b.breed(a);
b.breed(c);
b.breed(d);
b.breed(e);
b.breed(f);
b.slaughter();