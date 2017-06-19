function getNumberSequence (length, minSqr) {
	var error = {};

	if ( typeof length != 'number' || typeof minSqr != 'number') {
		error.status = 'failed';
		error.reason = 'Длина и Значение минимального квадрата должны быть типа number';
		console.warn(error);
	} else 
	if ( length < 0 || minSqr < 0 ) {
		error.status = 'failed';
		error.reason = 'Длина и Значение минимального квадрата должны быть > 0';
		console.warn(error);
	} else {
		var str = '',
			i;

		for (i = 1; i <= length; i++) {
			if ( (i * i) < minSqr ) {
				str = str + i + ',';
			} else break;
		}

		return str.slice(0, str.length - 1);
	}
}
var task6 = getNumberSequence;