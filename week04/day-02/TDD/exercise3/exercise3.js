'use strict';

function convert(num) {
	if(typeof num != "number" || num < 1 || !Number.isInteger(num)) {
		return -1;
	}
	//var romanTable = ['1':I,'5':V,'10':X,'50':L]
	var result = '';
	var decimal = [1000, 900, 500, 400, 100, 90,50, 40, 10, 9, 5, 4 ,1];
	var roman = ["M", "CM", "D" , "CD" , "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	for(var i = 0; i < decimal.length; i++) {
		while (num % decimal[i] < num) {
			result += roman[i];
			num -= decimal[i];
		}
	}
	return result;
}


module.exports = convert;