function generateChessBoard (width, height, symbol) {
	var error = {};

	if (typeof width != 'number' || typeof height != 'number') {
		error.status = 'failed';
		error.reason = 'Ширина и Высота дожны быть цифрами';
		console.warn(error);
	} else if (typeof symbol != 'number' && typeof symbol != 'string') {
		error.status = 'failed';
		error.reason = 'Символ может быть числом или строкой';
		console.warn(error);
	} else {
		var _width = width * 2 - 1,
			str = '', 
			i,
			j;
		
		for (i = 0; i < height; i++) {
			for (j = 0; j < _width; j ++) {
				if ( (i + j) % 2 !== 0 ) {
					str += ' ';
				} else {
					str += symbol;
				}
			}
			str += '\n';
		}
		return str;
	}
}

var task1 = generateChessBoard;
