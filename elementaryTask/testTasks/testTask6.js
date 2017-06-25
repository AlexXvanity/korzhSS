// Task6
QUnit.test('getNumberSequence', function(assert) {
    var result = getNumberSequence(10, 16),
        expected = '1,2,3';
    assert.equal(result, expected, 'Passed!');
});
