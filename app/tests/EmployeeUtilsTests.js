'use strict';

/* global assert */

import test from 'tape';
import EmployeeUtils from '../utils/EmployeeUtils';

const Utils = EmployeeUtils();

test('calcPayCheck(income, taxes)', (assert) => {
    const expected = 2500;

    assert.equal(Utils.calcPayCheck(100e3, 0.4), expected,
        'Should return half month of pay after taxes.');

    assert.end();
});

