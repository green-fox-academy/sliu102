'use strict';

var lineCount = 7;
var star = '*';
var space = ' ';
var max = parseInt(lineCount/2)+lineCount%2

for (var i = 1; i < max+1; i++) {
	console.log(space.repeat((max-i))+star.repeat((2*i-1)));
};

for (var i = max-lineCount%2; i > 0; i--) {
	console.log(space.repeat((max-i))+star.repeat((2*i-1)));
};