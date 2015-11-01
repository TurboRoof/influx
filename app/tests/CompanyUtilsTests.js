'use strict';

/* global assert */

import test from 'tape';
import CompanyUtils from '../utils/CompanyUtils';

const Utils = CompanyUtils();

test('calcSales', (assert) => {
    let expected = 10e3;

    assert.equal(Utils.calcSales(9e3, 1, 1e3), expected,
        'Should add sales.');

    expected = 9e3;
    assert.equal(Utils.calcSales(11e3, -1, 2e3), expected,
        'Should subtract sales.');

    assert.end();
});

test('calcRandomDelta()', (assert) => {
    assert.equal(Utils.calcRandomDelta(1e3, .3) < 300, true,
        'Should get a delta less than 30% of the sales.');

    assert.equal(Utils.calcRandomDelta(1e3, .3) >= 0, true,
        'Should always be positive.');
    assert.end();
});

test('calcDirection()', (assert) => {
    const actual = Utils.calcDirection();
    assert.equal((actual === 1 || actual === -1), true,
        'Should be 1 or -1');

    assert.end();
});
