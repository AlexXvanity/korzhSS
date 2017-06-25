// Task5
QUnit.test('findLuckyTicket', function(assert) {
    var context = {
    	min : '123456',
    	max : '234567'
    },
    result = findLuckyTicket(context),
    expected = {
        winner: "simpleMethod",
        simpleCounter: 5997,
        complexCounter: 3042
    }
    assert.deepEqual(result, expected, 'Passed!');
});
QUnit.test('findLuckyTicket', function(assert) {
    var context = {
    	min : '100000',
    	max : '999999'
    },
    result = findLuckyTicket(context),
    expected = {
        winner: "simpleMethod",
        simpleCounter: 50411,
        complexCounter: 21355
    }

    assert.deepEqual(result, expected, 'Passed!');
});
