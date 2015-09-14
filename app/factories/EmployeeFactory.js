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
 * @returns {Map}
 * @constructor
 */
export default function (iso, cash, cliff, vesting, expiration,
                         income) {
    const employee = new Map([
        ['iso', iso],
        ['earnedStockOptions', 0],
        ['cliff', cliff],
        ['vesting', vesting],
        ['expiration', expiration],
        ['income', income],
        ['cash', cash],
    ]);

    const actions = EmployeeUtils(employee);

    return {
        actions,
        employee,
    };
}
