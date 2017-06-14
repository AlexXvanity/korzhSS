function findLuckyTicket(context) {

	var error = {};

	if ( typeof context != 'object' ) {
		error.status = "failed";
		error.reason = "Входной параметр должен быть объект";
		console.warn(error);
	} 
	else {
		if ( typeof (context.min && context.max) != 'string' ) {
			error.status = "failed";
			error.reason = "Параметром диапазона должна быть строка";
			console.warn(error);
		} else {
			if ( context.min.length < 6  || context.max.length < 6 || context.min.length > 6 || context.max.length > 6 ) {
				error.status = "failed";
				error.reason = "Билет должен содержать шести значное число";
				console.warn(error);
			} else {

				var result = {
					winner : "",
					simpleCounter : 0,
					complexCounter: 0
				},
				start = parseInt(context.min),
				end = parseInt(context.max);

				for (var i = start; i < end; i ++) {

					if ( simpleMethod(i) ) result.simpleCounter ++;

					if ( complexMethod(i) ) result.complexCounter ++;
				}

				if ( result.simpleCounter > result.complexCounter ) {
					result.winner = "simpleMethod";
				} else result.winner = "complexCounter";

				//SimpleMethod
				function simpleMethod (num) {

					var numberStr = String(num),
					data = numberStr.split('').map(Number),
					sumResult = [],
					isLucky = false;

					var totalSum = data.reduce(function (sum, current, index) {
						if (index % (data.length / 2) === 0) {
							sumResult.push(sum);
							sum = 0;
						}
						return sum + current;
					});

					sumResult.push(totalSum);

					if (sumResult[0] === sumResult[1]) isLucky = true;

					return isLucky;
				}
				//ComplexMethod
				function complexMethod (num) {

					var numberStr = String(num);
					data = numberStr.split('').map(Number),
					isLucky = false;
					oddSum = 0, 
					evenSum = 0;


					for (var i = 0; i < data.length; i++) {
						if (data[i] % 2 === 0) {
							evenSum += data[i];
						} else {
							oddSum += data[i];
						}
					}
					if (evenSum === oddSum) isLucky = true;

					return isLucky;
				}

				// GeneralResult
				return result;
			}
		}
	}
}
var task5 = findLuckyTicket;