// Task7
QUnit.test('1. Fibonaci', function(assert) {
    var result = findFibNumbers({length:8}),
        expected = [1, 1, 2, 3, 5, 8, 13, 21];
    assert.deepEqual(result, expected, 'Passed!');
});
QUnit.test('2. Fibonaci', function(assert) {
    var result = findFibNumbers({length:12}),
        expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    assert.deepEqual(result, expected, 'Passed!');
});
