'use strict';
// Define a Person class

// it must have the following properties:
// name:string (set in the constructor from parameter)
// age:number (set in the constructor from parameter)
// Define an Employee class which extends the Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person{
  constructor(name,age,salary) {
    super(name,age);
    this.salary = salary;
    this.department = 'unknown';
    this.hiredAt = Date.now();
    this.leftAt = null;
    this.status = 'active';
    this.maxSalaryMultiplier = 1;
  }

    getInfo() {
      if(this.status === 'active'){
        return this.name+' works at '+this.department+' for '+this.salary+' usd since '+this.hiredAt;
      } else {
        return this.name+' works at '+this.department+' for '+this.salary+' usd from '+this.hiredAt+' to '+this.leftAt;
      }    
    } 

    quit() {
      if(this.status === 'active'){
        this.leftAt = Date.now();
        this.status = 'fire';
      }else {
        console.log('already fired!');
      }
    }
  
    increaseSalaryBy(newSalary) {
       if(this.salary*this.maxSalaryMultiplier > newSalary) {
         this.salary = newSalary;
       }else {
         console.log('Not allowed!')
       }
    }

    setDepartment(newDepartment) {
      this.department = newDepartment;
    }    

}

class Developer extends Employee {
  constructor(salary, name, age, level) {
    super(salary, name, age)
    this.maxSalaryMultiplier = 1.05;
    this.level = level;
  }

  changeLevel(newLevel) {
    this.level = newLevel;
  }
}

class Director extends Employee {
  constructor(salary, name, age) {
    super(salary, name, age);
    this.maxSalaryMultiplier = 1.1;
  }

  fireEmployee(employeeToFire) {
    if(employeeToFire.status === undefined){
      console.log('It is not an employee!')
    }else{
      employeeToFire.quit();
    }
  }

  promoteDeveloper(developerToPromote, newLevel) {
    if(developerToPromote.status === undefined){
      console.log('It is not a Developer');
    }else if(newLevel === this.level){
      return false;
    }else {
      this.level = newLevel;
    }
  }
}


