'use strict';

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
export default function (iso, cash, cliff, vesting, expiration, income) {
    return new Map([
        ['iso', iso],
        ['earnedStockOptions', 0],
        ['cliff', cliff],
        ['vesting', vesting],
        ['expiration', expiration],
        ['income', income],
        ['boardIndex', 0],
        ['cash', cash],
    ]);
}
