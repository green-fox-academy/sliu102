'use strict';
// Reverse the string!

var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

var len = reversed.length;

var newstr = '';

for (var i = 0; i < len; i++) {
	newstr += reversed.substr(len-i-1, 1);
};