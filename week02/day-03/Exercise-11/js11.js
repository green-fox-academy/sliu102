'use strict';

var lineCount = 8;

// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %

var percent = '%';

for (var i = 1; i < lineCount+1; i++) {

	if (i%2==0) {
		console.log(percent.repeat(4));
	}else {
		console.log(' '+percent.repeat(4));
	};
};
