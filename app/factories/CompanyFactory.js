'use strict';

export default function Company(totalShares, employeePool, sharePrice, revenue, expenses) {
    return new Map([
        ['totalShares', totalShares],
        ['employeePool', employeePool],
        ['sharePrice', sharePrice],
        ['revenue', revenue],
        ['expenses', expenses],
    ]);
}
