'use strict';

// Create a constructor called PirateHorde, that takes an array of pirates as a parameter:
// It should have an "addPirate" method that adds a pirate object to it's list
// It should have a "getSumGold" method that returns the sum of all pirates gold
// It should have a "getLongestName" method that returns the name of the pirate that has the longest
// It should have a "getTheWoodenLegNames" method that retuns the names of the pirates that has wooden leg




var pirates = [
  {name: 'Jack', gold: 4, hasWoodenLeg: true},
  {name: 'Bob', gold: 0, hasWoodenLeg: false},
  {name: 'Olaf', gold: 3, hasWoodenLeg: true},
  {name: 'Steve', gold: 2, hasWoodenLeg: true},
  {name: 'Ian', gold: 10, hasWoodenLeg: false},
];

function PirateHorde (pirates) {
  this.pirates = pirates;
  this.addPirate = function (name, gold, hasWoodenLeg) {
  	var newPirate = {
  	  name: 0,
  	  gold: 0,
  	  hasWoodenLeg: true
  	}
  	newPirate.name =  name;
  	newPirate.gold = gold;
  	newPirate.hasWoodenLeg = hasWoodenLeg;
    this.pirates.push(newPirate);
  }; 
  this.getSumGold = function () {
  	var sum = 0;
  	this.pirates.forEach(function (element) {
      sum += element.gold;
  	})
  	return sum;
  };

  this.getLongestName = function () {
    var len = 0;
    var result = '';
    this.pirates.forEach(function (element) {
      if (element.name.length>len) {
        len = element.name.length;
        result = element.name;
      }
    })
    return result;
  };

  this.getTheWoodenLegNames = function () {
  	var names = [];
  	this.pirates.forEach(function (element) {
      if (element.hasWoodenLeg === true) {
        names.push(element.name);
      }
    })
    return names;
  }

}

var pirateHorde = new PirateHorde(pirates);

pirateHorde.addPirate('Greg', 6, true);
console.log(pirateHorde.getSumGold()); // 25
console.log(pirateHorde.getLongestName()); // 'Steve'
console.log(pirateHorde.getTheWoodenLegNames()); // ['Jack', 'Olaf', 'Steve', 'Greg']
