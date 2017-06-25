// Task1
QUnit.test('Generate Chess Board', function(assert) {
    var result = task1(5,5,'*'),
        board = '* * * * *\n * * * * \n* * * * *\n * * * * \n* * * * *\n';
    assert.equal(result, board, 'Passed!');
});
