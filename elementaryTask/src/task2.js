'use strict';

function task2 (envelope1, envelope2) {
	var error = preValidateTask2(envelope1, envelope2),
	    result;

	if (error === '') {
		result = analizeConverts(envelope1, envelope2);
	} else {
		console.warn({status:'failed', reason: error});
	}

	return result;
}

function preValidateTask2 (envelope1, envelope2) {
	var result = '';

	if (typeof envelope1 !== 'object' || typeof envelope2 !== 'object') {
		result = 'Конверты должны иметь тип object';
	}

	return result;
}

function analizeConverts (envelope1, envelope2) {
	var w1 = envelope1.a,
	    h1 = envelope1.b,
		w2 = envelope2.a,
		h2 = envelope2.b,
		res = 0;

	envelope1.number = 1;
	envelope2.number = 2;

	if ((w1 > w2 && h1 > h2) || (w1 < w2 && h1 < h2)) {
		if ((w1 > w2 && h1 > h2)) {
			res = envelope1.number;
		} else {
			res = envelope2.number;
		}
	} else {
		res = 0;
	}

	return res;
}
