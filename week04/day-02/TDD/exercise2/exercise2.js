// 'use strict';
// function getIndex(value, arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === value) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// module.exports = getIndex;

'use strict';

function check(str1, str2) {
	if(typeof str1 != "string" || typeof str2 != "string" || str1.length != str2.length) {
		return false;
	}

	for(var i = 0; i < str1.length; i++ ){
		if(str1[i] != str2[str1.length-i-1]) {
			return false;
		}

	}
	return true;
}


module.exports = check;