function findPalindrom (value) {
    var error = {};

    if (typeof value != 'number') {
        error.status = 'failed';
        error.reason = 'Входым параметром должно быть число';
        console.warn(error);
    } 
    else {
        var _value = (typeof value == 'String') ? value : String(value),
            data = _value.split('').map(Number),
            length = data.length,
            result = {},
            index = 0,
            i = 1;

        for (; index < length; index ++) {
            var current = index,
                next = index + 1,
                equality = data[current] === data[next] && (data[current - 1] === data[next + 1]);

            if (equality) {
                var n = 1,
                    _index = index + 1,
                    output = [],
                    steps = index,
                    itarable = function () {
                        var isIterable = false,
                        _equality = data[index - n] === data[_index + n];

                        if (_equality && steps) isIterable = true;

                        steps--;

                        return isIterable;
                    };

                output.push(data[index], data [_index]);
                
                while (itarable()) {
                    output.unshift(data[index - n]);
                    output.push(data[_index + n]);

                    n++;
                }

                result['palindrom_' + i] = output;
                i++;
            }
        }

        result = Object.keys(result).length ? JSON.stringify(result) : 0;

        return result;
    }
}

var task4 = findPalindrom;

