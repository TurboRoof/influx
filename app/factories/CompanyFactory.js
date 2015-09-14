'use strict';

import CompanyUtils from '../utils/CompanyUtils.js';

export default function Company(totalShares, employeePool,
                                sharePrice, revenue, expenses) {
    const company = new Map([
        ['totalShares', totalShares],
        ['employeePool', employeePool],
        ['sharePrice', sharePrice],
        ['revenue', revenue],
        ['expenses', expenses],
    ]);

    const actions = CompanyUtils(company);

    return {
        actions,
        company,
    };
}
