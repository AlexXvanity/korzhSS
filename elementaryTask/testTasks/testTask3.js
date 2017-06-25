QUnit.test('1. Sort triagles', function(assert) {
    var triangle1 = {
    	vertices: 'ABC',
    	a: 80,
    	b: 50,
    	c: 100.36
    },
    triangle2 = {
    	vertices: 'CDE',
    	a: 20,
    	b: 35,
    	c: 49
    },
    triangle3 = {
    	vertices: 'XYZ',
    	a: 40,
    	b: 50,
    	c: 62.36
    };
    var triangles = [triangle1, triangle2, triangle3],
        result = sortTriangle(triangles),
        expected = ['ABC', 'XYZ', 'CDE'];
    assert.deepEqual(result, expected, 'Passed!');
});
QUnit.test('2. Sort triagles', function(assert) {
    var triangle1 = {
    	vertices: 'ABC',
    	a: 40,
    	b: 50,
    	c: 60
    },
    triangle2 = {
    	vertices: 'CDE',
    	a: 70,
    	b: 80,
    	c: 90
    },
    triangle3 = {
    	vertices: 'XYZ',
    	a: 30,
    	b: 40,
    	c: 50
    };
    var triangles = [triangle1, triangle2, triangle3],
        result = sortTriangle(triangles),
        expected = ['CDE', 'ABC', 'XYZ'];
    assert.deepEqual(result, expected, 'Passed!');
});
QUnit.test('3. Sort triagles', function(assert) {
    var triangle1 = {
    	vertices: 'ABC',
    	a: 200,
    	b: 300,
    	c: 400
    },
    triangle2 = {
    	vertices: 'CDE',
    	a: 70.102,
    	b: 90.105,
    	c: 100.102
    },
    triangle3 = {
    	vertices: 'XYZ',
    	a: 100,
    	b: 200.5,
    	c: 300.5
    };
    var triangles = [triangle1, triangle2, triangle3],
        result = sortTriangle(triangles),
        expected = ['ABC', 'CDE', 'XYZ'];
    assert.deepEqual(result, expected, 'Passed!');
});
