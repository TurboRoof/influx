'use strict';

import CompanyUtils from '../utils/CompanyUtils.js';

export default function(totalShares, employeePool,
                                sharePrice, revenue, expenses) {
    const settings = new Map([
        ['totalShares', totalShares],
        ['employeePool', employeePool],
        ['sharePrice', sharePrice],
        ['revenue', revenue],
        ['expenses', expenses],
    ]);

    const actions = CompanyUtils(settings);

    return {
        actions,
        settings,
    };
}
