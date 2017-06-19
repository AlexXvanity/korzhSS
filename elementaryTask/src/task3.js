function sortTriangle (triangles) {
	var error = {};

	if ( !Array.isArray(triangles) )  {
		error.status = 'failed';
		error.reason = 'Входной параметр должен быть массив';
		console.warn(error);
	} else 
	if (typeof triangles[0] != 'object') {
		error.status = 'failed';
		error.reason = 'Массив треугольников должен содержать объекты';
		console.warn(error);
	} 
	else {
		var length = triangles.length;
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

		return res;
	}
}
var task3 = sortTriangle;






