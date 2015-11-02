'use strict';

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

function getISOAndReset(account) {

    const iso = account.get('iso');

    account.set('iso', 0);

    return iso;

}

function givePayRaise(account, delta) {

    const income = account.get('income') + delta;

    account.set('income', income);
}

function getStats(account) {

    let financialStatement = '';

    account.forEach((value, key) => {
        financialStatement = financialStatement.concat(`${key}: ${value}\n`);
    });

    return financialStatement;
}

function increaseISO(account, delta) {

    const iso = account.get('iso') + delta;

    account.set('iso', iso);

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

function updateCash(account, delta) {

    const cash = account.get('cash') + delta;

    account.set('cash', cash);
}

export default function (account) {

    return {
        calcPayCheck,

        getISOAndReset() { return getISOAndReset(account); },

        getStats () { return getStats(account); },

        givePayRaise (delta) { return givePayRaise(account, delta); },

        increaseISO (delta) { return increaseISO(account, delta); },

        payCheck () { return payCheck(account); },

        updateCash (delta) { return updateCash(account, delta); },
    };
}
