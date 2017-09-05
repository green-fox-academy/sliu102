'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

function selectLastEvenNumber(array, callback) {
  var index = 0;
  array.forEach(function (val) {
  	if (val%2 ===0) {
  	  index = array.indexOf(val);
  	};
  });
  callback(array[index]);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // shou