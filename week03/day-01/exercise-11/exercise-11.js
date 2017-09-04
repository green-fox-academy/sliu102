'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

function CarStore (cars) {
  this.cars = cars;
  this.addCar = function (type, price, year) {
  	var newCar = {
  	  type: '',
  	  price: 0,
  	  year: 0
  	}
  	newCar.type =  type;
  	newCar.price = price;
  	newCar.year = year;
    this.cars.push(newCar);
  }
  this.getSumPrice = function() {
  	var sum = 0;
  	this.cars.forEach(function (element) {
      sum += element.price;
  	})
  	return sum;
  };
  this.getOldestCarType = function() {
  	var year = this.cars[0].year;
    var result = '';
    this.cars.forEach(function (element) {
      if (element.year<year) {
        year = element.year;
        result = element.type;
      }
    })
    return result;
  };
  this.deleteCarByType  =function (type) {
  	var index = [];
  	for (var i = 0; i < this.cars.length; i++) {
  		if (this.cars[i].type === type) {
  			index.push(i);
  		} 
  	};
  	for (var i = 0; i < index.length; i++){
  		this.cars.splice(index[i],1);
  	};
  };
}

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000