'use strict';

function task3(triangles) {
	var error = preValidateTask3(triangles),
		result;

	if (error === '') {
		result = sortTriangle(triangles);
	} else {
		result = console.warn({status:'failed', reason: error});
	}

	return result;
}

function preValidateTask3 (triangles) {
	var result = '';

	if (!Array.isArray(triangles)) {
		result = 'Входной параметр должен быть массив';
	} else if (!triangles.every(isObject)) {
		result = 'Массив треугольников должен содержать объекты';
	}

	function isObject (item) {
		var res = false;

		if (typeof (item) === 'object') {
			res = true;
		}

		return res;
	}

	return result; 
}

function sortTriangle (triangles) {
	var length = triangles.length,
		res = [],
		i = 0, 
		j = 0;

	for (; i < length; i++) {
		triangles[i].square = calculateSquare(triangles[i]);
	}

	triangles.sort(compareSquare);

	for (; j < length; j++) {
		res.push(triangles[j].vertices);
	}

	return res;
}

function calculateSquare (triangle) {
	var a = triangle.a,
		b = triangle.b,
		c = triangle.c, 
		square = 0,
		p = 0;

	p = calculatePerimeter(a, b, c);

	square = Math.sqrt(p * (p - a) * (p - b) * (p - c));

	return square;
}

function calculatePerimeter (a, b, c) {
	var p = 0;

	p = 1 / 2 * (a + b + c);

	return p;
}

function compareSquare (triangleA, triangleB) {
	return triangleB.square - triangleA.square;
}