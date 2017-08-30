'use strict';

var lineCount = 4;
var star = '*';
var space = ' ';

for (var i = 1; i < lineCount+1; i++) {
	console.log(space.repeat((lineCount-i))+star.repeat((2*i-1)));
};