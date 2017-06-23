'use strict';

function task6 (length, minSqr) {
	var error = preValidateTask6(length, minSqr),
		result;

	if (error === '') {
		result = getNumberSequence(length, minSqr);
	} else {
		result = console.warn({status:'failed', reason: error});
	}

	return result;
}

function preValidateTask6 (length, minSqr) {
	var result = '';

	if (typeof length !== 'number' || typeof minSqr !== 'number') {
		result = 'Длина и Значение минимального квадрата должны быть типа number';
	} else if (length < 0 || minSqr < 0) {
		result = 'Длина и Значение минимального квадрата должны быть > 0';
	}

	return result;
}

function getNumberSequence (length, minSqr) {
	var str = '', 
		i;

	for (i = 1; i <= length; i ++) {
		if ((i * i) < minSqr) {
			str = str + i + ',';
		} else break;
	}

	str = str.slice(0, str.length - 1);

	return str;
}
