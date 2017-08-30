'use strict';

var lineCount = 6;

var percent = '%';
var space = ' ';

for (var i = 1; i < lineCount+1; i++) {

	if (i==1||i==lineCount) {
		console.log(percent.repeat(lineCount));
	}else {
		console.log(percent+space.repeat((i-2))+percent+space.repeat(5-i)+percent);
	};
};
