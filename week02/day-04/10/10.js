'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function filter(array) {
  array.forEach(function(element) {
    if (element.candies > 4) {
      console.log(element.name);
    }
  })
}

function avgCandies(array) {
  var sum = 0;
  array.forEach(function(element) {
    sum += element.candies;
  })
  return sum/array.length;
}