'use strict';

/**
 * Paychecks every 2-week periods
 * @param income
 * @param taxes
 * @returns {number}
 */
function calcPayCheck(income, taxes) {

    const afterTaxes = income * ( 1 - taxes);

    return Math.round(afterTaxes / 24);
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

    const cash = account.get('cash') + calcPayCheck(income, taxes);

    account.set('cash', cash);

}

function updateCash(account, delta) {

    const cash = account.get('cash') + delta;

    account.set('cash', cash);

}

function vestOptions(account, months) {

    const cliff = account.get('cliff') * 12;

    const vesting = account.get('vesting') * 12;

    if (months > vesting || months < cliff) {
        return;
    }

    const iso = account.get('iso');

    const earned = Math.round((months / vesting) * iso);

    account.set('earnedStockOptions', earned);

}

function howManyPayChecks(prevSlot, newSlot) {

    if (prevSlot === newSlot) {
        return 2;
    }

    if (newSlot < prevSlot) { newSlot += 24; }

    let many = 0;

    if (prevSlot < 12 && 12 <= newSlot ) {
        many += 1;
    }

    if (prevSlot < 24 && 24 <= newSlot) {
        many += 1;
    }

    if (prevSlot < 24 && 32 <= newSlot) {
        many += 1;
    }

    return many;

}

function cronPayCheck(account, prevSlot, newSlot) {

    let i = howManyPayChecks(prevSlot, newSlot);

    while (i > 0) {

        payCheck(account);

        console.log('paycheck!');

        i -= 1;
    }

}

export default function (account) {

    return {
        calcPayCheck,

        cronPayCheck(prevSlot, newSlot) {
            return cronPayCheck(account, prevSlot, newSlot);
        },

        getISOAndReset() { return getISOAndReset(account); },

        getStats () { return getStats(account); },

        givePayRaise (delta) { return givePayRaise(account, delta); },

        howManyPayChecks,

        increaseISO (delta) { return increaseISO(account, delta); },

        payCheck () { return payCheck(account); },

        updateCash (delta) { return updateCash(account, delta); },

        vestOptions (month) { return vestOptions(account, month); },
    };
}
