'use strict';

import BoardUtils from '../utils/BoardUtils';
import GameUtils from '../utils/GameUtils';

/**
 * @param Company
 * @param Employee
 * @param slots - 24 slots with events and sub events
 * @returns {{props: Map}}
 */
export default function (Company, Employee, slots) {

    const a = BoardUtils(Company, Employee); // actions

    const actions = [
        [a.changeSales], // 0
        [a.changeSales, a.changeSales, a.changeSales, a.changeSales, a.changeSales,
            a.changeSales, a.changeSales, a.changeSales,
           a.acquiHire, a.ipo, a.bankrupt], // 1
        [a.changeSales], // 2
        [a.changeSales, a.changeSales, a.vcFunding, a.bankLoan], // 3
        [a.changeSales], // 4
        [a.changeSales, a.promoted], // 5
        [a.changeSales], // 6
        [a.changeSales, a.changeSales, a.changeSales, a.changeSales,
            a.changeSales, a.changeSales, a.changeSales,
            a.changeSales, a.fired], // 7
        [a.changeSales], // 8
        [a.payoutProfit, a.splitStock, a.purchaseStock], // 9
        [a.changeSales], // 10
        [a.changeSales], // 11
        [a.changeSales], // 12
        [a.offerJob], // 13
        [a.changeSales], // 14
        [a.changeSales, a.vcFunding, a.bankLoan], // 15
        [a.changeSales], // 16
        [a.offerJob], // 17
        [a.changeSales], // 18
        [a.changeSales, a.payoutProfit, a.splitStock, a.purchaseStock], // 19
        [a.changeSales], // 20
        [a.offerJob], // 21
        [a.changeSales], // 22
        [a.changeSales], // 23
    ];

    const board = new Map([
        ['activeSlot', 0],
        ['month', 0],
        ['slots', slots],
    ]);

    return {
        actionCreators: a,
        actions,
        board,
    };
}
