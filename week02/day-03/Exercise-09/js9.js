'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

var percent = '%';
var space = ' ';

for (var i = 1; i < lineCount+1; i++) {

	if (i==1||i==lineCount) {
		console.log(percent.repeat(lineCount));
	}else {
		console.log(percent+space.repeat((lineCount-2))+percent);
	};
};
