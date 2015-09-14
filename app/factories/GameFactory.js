'use strict';

import GameUtils from '../utils/GameUtils';

export default function (board, company, employee) {

    const utils = GameUtils(board, company, employee); // actions

    return {
        utils,
    };
}
