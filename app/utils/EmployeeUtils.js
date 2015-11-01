'use strict';

function getStats(account) {
    let financialStatement = '';

    account.forEach((value, key) => {
        financialStatement = financialStatement.concat(`${key}: ${value}\n`);
    });

    return financialStatement;
}

/**
 * Paychecks every 2-week periods
 * @param income
 * @param taxes
 * @returns {number}
 */
function calcPayCheck(income, taxes) {
    const afterTaxes = income * ( 1 - taxes);

    return afterTaxes / 24;
}

/**
 * increase cash by 1/24 of income
 * @param account
 */
function payCheck(account) {
    const income = account.get('income');
    const taxes = account.get('taxes');
    account.set('cash', calcPayCheck(income, taxes));
}

export default function (account) {
    return {
        calcPayCheck,
        payCheck () { return payCheck(account); },
        getStats () { return getStats(account); },
    };
}
