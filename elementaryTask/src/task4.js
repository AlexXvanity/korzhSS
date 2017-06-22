'use strict';

function task4 (number) {
    var error = preValidateTask4(number),
        result;

    if (error === '') {
        result = findPalindrom(number);
    } else {
        result = console.warn({status:'failed', reason: error});
    }

    return result;
}

function preValidateTask4 (number) {
    var result = '';

    if (typeof number !== 'number') {
        result = 'Входым параметром должно быть число';
    } 

    return result;
}

function findPalindrom (number) {
    var strNumber = String(number),
        numbers = strNumber.split('').map(Number),
        length = numbers.length,
        result = {},
        index = 0,
        i = 1;

    for (; index < length; index ++) {
        var currentElem = index,
            next = index + 1,
            isEqual = (numbers[currentElem] === numbers[next] &&
                       numbers[currentElem - 1] === numbers[next + 1]);

        if (isEqual) {
            result['palindrom_' + i] = pushEqualElements(index, numbers);
            i++;
        }
    }

    if (Object.keys(result).length) {
        result = JSON.stringify(result);
    } else {
        result = 0;
    }

    return result;
}

function pushEqualElements (index, numbers) {
    var step = 1,
        next = index + 1,
        result = [],
        currentElem = index,
        isEqual = findEqualElements;

    result.push(numbers[index], numbers [next]);

    while (isEqual()) {
        result.unshift(numbers[index - step]);
        result.push(numbers[next + step]);

        step++;
    }

    function findEqualElements () {
        var res = false,
            isEqual = numbers[index - step] === numbers[next + step];

        if (isEqual && currentElem) {
            res = true;
        }

        currentElem --;

        return res;
    }

    return result;        
}

