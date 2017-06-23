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
	} else if (!triangles.every((element) => typeof (element) === 'object')) {
		result = 'Массив треугольников должен содержать объекты';
	}

	return result;
}

function sortTriangle (triangles) {
	var res = [];

	triangles.forEach(function (element) {
		element.square = calculateSquare(element);
	});

	triangles.sort((triangleA, triangleB) => triangleB.square - triangleA.square);

	triangles.forEach(function (element) {
		res.push(element.vertices);
	});

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
