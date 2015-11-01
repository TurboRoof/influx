'use strict';

/* global assert */

import test from 'tape';
import GameUtils from '../utils/GameUtils';

const Utils = GameUtils();

test('calculateNewSlot', (assert) => {
    let expected = {
        newIndex: 3,
        isNewMonth: false,
    };
    assert.deepEqual(Utils.calculateNewSlot(24, 1, 2), expected,
        'Failed moving forward.');

    expected = {
        newIndex: 0,
        isNewMonth: true,
    };
    assert.deepEqual(Utils.calculateNewSlot(24, 21, 3), expected,
        'Failed overflowed.');

    assert.end();
});

test('pickCardFromStack(stack)', (assert) => {
    let stack = [
        function() {return 'card';},
        function() {return 'card';},
        function() {return 'card';},
    ];

    const expected = 'card';

    assert.deepEqual(Utils.pickCardFromStack(stack)(), expected,
        'should get one of the three.');

    stack = [ function() {return 'card';} ];

    assert.deepEqual(Utils.pickCardFromStack(stack)(), expected,
        'Should work when only one card.');

    assert.end();
});
