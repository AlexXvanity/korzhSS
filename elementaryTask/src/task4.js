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
        palindroms = [],
        result = 0,
        index = 0,
        i = 0;

    for (i = 1; index < numbers.length; index ++) {
        var currentElem = index,
            next = index + 1,
            isNumbersEqual = (numbers[currentElem] === numbers[next] &&
                  numbers[currentElem - 1] === numbers[next + 1]);

        if (isNumbersEqual) {
            palindroms[i] = pushEqualElements(index, numbers);
            i++;
        }
    }

    if (palindroms.length) {
        result = findMaxPalindrom(palindroms);
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
        isElementEqual = findEqualElements;

    result.push(numbers[index], numbers [next]);

    while (isElementEqual()) {
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

function findMaxPalindrom (obj) {
    var numbers = [],
        max,
        key;

    for (key in obj) {
        numbers.push(Number(obj[key].join('')));
    }

    max = Math.max.apply(null, numbers);

    return max;
}
