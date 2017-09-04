function Rocket(type, fuelLevel, launches) {
  this.type = type;
  this.fuelLevel = fuelLevel;
  this.launches = launches;

  this.launch = function () {
  	if (this.type === "falcon1" && fuelLevel > 1) {
  	  this.fuelLevel -= 1;
  	  this.launches += 1;
  	} else if(this.type === "falcon9" && fuelLevel > 9) {
  	  this.fuelLevel -= 9;
  	  this.launches += 1;
    }
  };

  this.refill = function () {
  	if (this.type === "falcon1" && fuelLevel < 5) {
  	  var result = (5 - this.fuelLevel);
  	  this.fuelLevel = 5;
  	} else if(this.type === "falcon9" && fuelLevel < 20) {
  	  var result = (5 - this.fuelLevel);
  	  this.fuelLevel = 20;
    }
    return result;
  };

  this.getStats = function () {
  	return "name: " + this.type + ", fuel: " + this.fuelLevel +", launches: " + this.launches;
  } 
}

function SpaceX(fuelStored) {
  this.rockets = [];
  this.launches = 0;
  this.fuelStored = fuelStored;
  this.addRocket = function (rocket) {
  	this.rockets.push(rocket);

  };
  this.refillAll = function () {
  	this.rockets.forEach(function(element) {
      this.fuelStored -= element.refill();
  	});
  };

  this.buyFuel = function (amount) {
    this.fuelStored += amount;
  };

  this.getStats = function () {
    return "rockets: "+ this.rockets.length +", fuel: "+ this.fuelStored + ", launches: "+ this.launches;
  };
  
}














