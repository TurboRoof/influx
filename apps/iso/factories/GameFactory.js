'use strict';

import GameUtils from '../utils/GameUtils';

export default function (board, company, employee, status) {

    const utils = GameUtils(board, company, employee); // actions

    const game = new Map([
        ['status', status],
    ]);

    return {
        utils,
    };
}
