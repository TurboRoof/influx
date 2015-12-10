'use strict';

/* global assert */

import test from 'tape';
import EmployeeUtils from '../utils/EmployeeUtils';

const Utils = EmployeeUtils();

test('calcPayCheck(income, taxes)', (assert) => {
    const expected = 3000;

    assert.equal(Utils.calcPayCheck(120e3, 0.4), expected,
        'Should return half month of pay after taxes.');

    assert.end();
});

test('howManyPayChecks(prevSlot, newSlot)', (assert) => {

    assert.equal(Utils.howManyPayChecks(0, 8), 0,
        'Should 0, 8return 0.');

    assert.equal(Utils.howManyPayChecks(2, 18), 1,
        'Should 2, 18 return 1.');

    assert.equal(Utils.howManyPayChecks(12, 18), 0,
        'Should 12, 18 return 0.');

    assert.equal(Utils.howManyPayChecks(11, 19), 1,
        'Should 11, 19 return 1.');

    assert.equal(Utils.howManyPayChecks(12, 23), 0,
        'Should 12, 23 return 0.');

    assert.equal(Utils.howManyPayChecks(22, 23), 0,
        'Should 22, 23 return 0.');

    assert.equal(Utils.howManyPayChecks(22, 3), 1,
        'Should 22, 3 return 1.');

    assert.equal(Utils.howManyPayChecks(23, 18), 2,
        'Should 23, 18 return 2.');

    assert.equal(Utils.howManyPayChecks(12, 12), 2,
        'Should 12, 12 return 2.');

    assert.equal(Utils.howManyPayChecks(22, 22), 2,
        'Should 22, 22 return 2.');

    assert.end();

});

