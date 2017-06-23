'use strict';

function task5 (context) {
	var error = preValidateTask5(context),
	result;

	if (error === '') {
		result = findLuckyTicket(context);
	} else {
		result = console.warn({status:'failed', reason: error});
	}

	return result;
}

function preValidateTask5 (context) {
	var result = '';

	if (typeof context !== 'object') {
		result = 'Входной параметр должен быть объект';
	} else if (typeof(context.min && context.max) !== 'string') {
		result = 'Параметром диапазона должна быть строка';
	} else if (context.min.length < 6  || context.max.length < 6 ||
			   context.min.length > 6 || context.max.length > 6) {
		result = 'Билет должен содержать шести значное число';
	}

	return result;
}

function findLuckyTicket(context) {
	var result = {
		winner: '',
		simpleCounter: 0,
		complexCounter: 0
	},
	start = parseInt(context.min),
	end = parseInt(context.max),
	i;

	for (i = start; i < end; i ++) {
		if (simpleMethod(i)) {
			result.simpleCounter ++;
		}

		if (complexMethod(i)) {
			result.complexCounter ++;
		}
	}

	if (result.simpleCounter > result.complexCounter) {
		result.winner = 'simpleMethod';
	} else result.winner = 'complexCounter';

	return result;
}

function simpleMethod (num) {
	var numberStr = String(num),
		numbers = numberStr.split('').map(Number),
		totalSum = 0,
		sumResult = [],
		isLucky = false;

	totalSum = numbers.reduce(function (sum, current, index) {
		if (index % (numbers.length / 2) === 0) {
			sumResult.push(sum);
			sum = 0;
		}
		return sum + current;
	});

	sumResult.push(totalSum);

	if (sumResult[0] === sumResult[1]) {
		isLucky = true;
	}

	return isLucky;
}

function complexMethod (num) {
	var numberStr = String(num),
		numbers = numberStr.split('').map(Number),
		isLucky = false,
		oddSum = 0,
		evenSum = 0,
		i;


	for (i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			evenSum += numbers[i];
		} else {
			oddSum += numbers[i];
		}
	}

	if (evenSum === oddSum) {
		isLucky = true;
	}

	return isLucky;
}
