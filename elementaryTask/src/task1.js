'use strict';

function task1 (width, height, symbol) {
	var error = preValidateTask1(width, height, symbol),
		result;

	if (error === '') {
		result = generateChessBoard(width, height, symbol);
	} else {
		result = console.warn({status:'failed', reason: error});
	}

	return result;
}

function preValidateTask1 (width, height, symbol) {
	var result = '';

	if (typeof width !== 'number' || typeof height !== 'number') {
		result = 'Ширина и Высота дожны быть цифрами';
	} else if (typeof symbol !== 'number' && typeof symbol !== 'string') {
		result = 'Символ может быть числом или строкой';
	}

	return result;
}

function generateChessBoard (width, height, symbol) {
	var realWidth = width * 2 - 1,
		str = '',
		i,j;

	for (i = 0; i < height; i++) {
		for (j = 0; j < realWidth; j ++) {
			if ((i + j) % 2 !== 0) {
				str += ' ';
			} else {
				str += symbol;
			}
		}
		str += '\n';
	}
	return str;
}
