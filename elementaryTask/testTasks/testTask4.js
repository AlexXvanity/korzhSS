QUnit.test('1. Palindrom', function(assert) {
    var result = task4(5665),
        expected = 5665;
    assert.equal(result, expected, 'Passed!');
});
QUnit.test('2. Palindrom', function(assert) {
    var result = task4(1221),
        expected = 1221;
    assert.equal(result, expected, 'Passed!');
});
QUnit.test('3. Palindrom', function(assert) {
    var result = task4(221),
        expected = 0;
    assert.deepEqual(result, expected, 'Passed!');
});
QUnit.test('4. Palindrom', function(assert) {
    var result = task4(22),
        expected = 22;
    assert.deepEqual(result, expected, 'Passed!');
});
QUnit.test('5. Palindrom', function(assert) {
    var result = task4(0),
        expected = 0;
    assert.deepEqual(result, expected, 'Passed!');
});
