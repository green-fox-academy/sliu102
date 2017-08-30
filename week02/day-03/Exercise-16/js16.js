'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

var num = 3;

function factorio(element) {
	var result = 1;
	for (var i = 1; i < element+1; i++) {
		result *= i;
	};
	console.log(result);
}

factorio(num);