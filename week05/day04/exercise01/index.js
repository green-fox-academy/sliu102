'use strict';
// Define a Person class

// it must have the following properties:
// name:string (set in the constructor from parameter)
// age:number (set in the constructor from parameter)
// Define an Employee class which extends the Person
function Person (name, age) {
  this.name = name;
  this.age = age;
}

function Employee(salary, name, age) {
  Person.call(this, name, age);

  this.salary = salary;
  this.department = 'unknown';
  this.hiredAt = Date.now();
  this.leftAt = null;
  this.status = 'active';
  this.maxSalaryMultiplier = 1;


  
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Person;

Employee.prototype.getInfo = function () {
  if(this.status === 'active'){
  	return this.name+' works at '+this.department+' for '+this.salary+' usd since '+this.hiredAt;
  } else {
  	return this.name+' works at '+this.department+' for '+this.salary+' usd from '+this.hiredAt+' to '+this.leftAt;
  }
}

Employee.prototype.quit = function () {
  if(this.status === 'active'){
  	this.leftAt = Date.now();
    this.status = 'fire';
  }else {
  	console.log('already fired!');
  }
  
}

Employee.prototype.increaseSalaryBy = function (newSalary) {
  if(this.salary*this.maxSalaryMultiplier > newSalary) {
    this.salary = newSalary;
  }else {
  	console.log('Not allowed!')
  }
}

Employee.prototype.setDepartment = function (newDepartment) {
  this.department = newDepartment;
}

function Developer (level,salary, name, age) {
  Employee.call(this, salary, name, age);
  this.maxSalaryMultiplier = 1.05;
  this.level = level;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Employee.prototype;

Developer.prototype.changeLevel = function (newLevel) {
  this.level = newLevel;
} 

function Director (salary, name, age) {
  Employee.call(this, salary, name, age);
  this.maxSalaryMultiplier = 1.1;

}

Director.prototype = Object.create(Employee.prototype);
Director.prototype.constructor = Employee.prototype;

Director.prototype.fireEmployee = function (employeeToFire) {
  if(employeeToFire.status === undefined){
  	console.log('It is not an employee!')
  }else{
  	employeeToFire.quit();
  }
} 

Director.prototype.promoteDeveloper = function (developerToPromote, newLevel) {
  if(developerToPromote.status === undefined){
  	console.log('It is not a Developer');
  }else if(newLevel === this.level){
    return false;
  }else {
  	this.level = newLevel;
  }
}


