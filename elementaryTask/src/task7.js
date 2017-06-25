'use strict';

function task7 (obj) {
	var error = preValidateTask7(obj),
		result;

	if (error === '') {
		result = findFibNumbers(obj);
	} else {
		result = console.warn({status:'failed', reason: error});
	}

	return result;
}

function preValidateTask7 (obj) {
	var result = '';

	if (typeof obj !== 'object') {
		result = 'Входной параметр должен быть объект';
	} else if (obj.length < 0) {
		result = 'Числовой ряд должен состоять из положительных чисел';
	}

	return result;
}

function findFibNumbers (obj) {
	var a = 1, b = 1,
		c = 0, i = 0,
		res = [a, b];

	for (i = 3; i <= obj.length; i++) {
		c = a + b;
		res.push(c);
		a = b;
		b = c;
	}

	return res;
}
