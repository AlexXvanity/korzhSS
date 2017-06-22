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
	var length = obj.length,
		i = 3,
		a = 1,
		b = 1,
		c = 0,
		res = [a, b];

	for (; i <= length; i++) {
		c = a + b;
		res.push(c);
		a = b;
		b = c;
	}

	return res;
}
