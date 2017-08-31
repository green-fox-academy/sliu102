'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];

far = far.map(function(element) {
  return element=element+'e';
});

console.log(far);