function analizeConverts (envelope1, envelope2) {
	var error = {};

	if (typeof envelope1 != 'object' || typeof envelope2 != 'object') {
		error.status = 'failed';
		error.reason = 'Конверты должны иметь тип object';
		console.warn(error);
	} else {
		var w1 = envelope1.a,
			h1 = envelope1.b,
			w2 = envelope2.a,
			h2 = envelope2.b,
			res = 0;

		envelope1.number = 1;
		envelope2.number = 2;

		if ( (w1 > w2 && h1 > h2) || (w1 < w2 && h1 < h2) ) {
			if ( (w1 > w2 && h1 > h2) ) {
				res = envelope1.number;
			} else {
				res = envelope2.number;
			}
		} else {
			res = 0;
		}

		return res;
	}
}
var task2 = analizeConverts;