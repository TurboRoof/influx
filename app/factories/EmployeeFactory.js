'use strict';

import EmployeeUtils from '../utils/EmployeeUtils';

/**
 * Employee Factory
 * @param iso
 * @param cash
 * @param cliff
 * @param vesting
 * @param expiration
 * @param income - is annual and should be after taxes and personal expenses
 * @taxes taxes and benefits discounted on each paycheck
 * @returns {Map}
 * @constructor
 */
export default function (iso, cash, cliff, vesting, expiration,
                         income, taxes) {
    const account = new Map([
        ['iso', iso],
        ['earnedStockOptions', 0],
        ['cliff', cliff],
        ['vesting', vesting],
        ['expiration', expiration],
        ['income', income],
        ['cash', cash],
        ['taxes', taxes],
    ]);

    const actions = EmployeeUtils(account);

    return {
        actions,
        account,
    };
}
