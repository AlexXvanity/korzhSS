// Task2
QUnit.test('1. Check size of the envelopes', function(assert) {
    var envelope1 = {
    	a : 20,
    	b: 20
    },
    envelope2 = {
    	a : 30.5,
    	b: 30.5
    };
    var result = task2(envelope1, envelope2);
    assert.equal(result, 2, 'Passed!');
});
QUnit.test('2. Check size of the envelopes', function(assert) {
    var envelope1 = {
    	a : 10,
    	b: 10
    },
    envelope2 = {
    	a : 10,
    	b: 10
    };
    var result = task2(envelope1, envelope2);
    assert.equal(result, 0, 'Passed!');
});
QUnit.test('3. Check size of the envelopes', function(assert) {
    var envelope1 = {
    	a : 20,
    	b: 20
    },
    envelope2 = {
    	a : 10,
    	b: 10
    };
    var result = task2(envelope1, envelope2);
    assert.equal(result, 1, 'Passed!');
});
QUnit.test('4. Check size of the envelopes', function(assert) {
    var envelope1 = {
    	a : 5,
    	b: 4
    },
    envelope2 = {
    	a : 4,
    	b: 5
    };
    var result = task2(envelope1, envelope2);
    assert.equal(result, 0, 'Passed!');
});
QUnit.test('5. Check size of the envelopes', function(assert) {
    var envelope1 = {
    	a : 5.5,
    	b: 5.5
    },
    envelope2 = {
    	a : 6.6,
    	b: 6.6
    };
    var result = task2(envelope1, envelope2);
    assert.equal(result, 2, 'Passed!');
});
QUnit.test('6. Check size of the envelopes', function(assert) {
    var envelope1 = {
    	a : 5.5,
    	b: 5.5
    },
    envelope2 = {
    	a : 5.5,
    	b: 5.5
    };
    var result = task2(envelope1, envelope2);
    assert.equal(result, 0, 'Passed!');
});
