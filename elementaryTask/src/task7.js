function findFibNumbers(obj) {

	var error = {};

	if ( typeof obj != 'object' ) {
		error.status = "failed";
		error.reason = "Входной параметр должен быть объект";
		console.warn(error);
	} else 
	if ( obj.length < 0 ) {
		error.status = "failed";
		error.reason = "Числовой ряд должен состоять из положительных чисел";
		console.warn(error);
	} else {

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
}
var task7 = findFibNumbers;