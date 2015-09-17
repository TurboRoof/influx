'use strict';

import GameUtils from '../utils/GameUtils';

export default function (Board, Company, Employee) {

    const utils = GameUtils(Board, Company, Employee); // actions

    return {
        utils,
    };
}
