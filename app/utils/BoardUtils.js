'use strict';

/* global process */

/***************
 * BOARD EVENTS
 ***************/

/*
[1X]
acquiHire()
ipo()
bankrupt()
 */
function acquiHire(company, employee) {
    // TODO - sells shares and updates cash

    // TODO - boost share price by 10X

    // TODO - terminates game.

    console.log('acquiHire');

}

function bankLoan(company) {

    company.updatePricePerShare(0.8);

    company.updateExpenses(1.2);

    console.log('bankLoan');
}

function bankrupt(company, employee) {
    // TODO - share price = 0

    // TODO - terminates game

    console.log('bankrupt');
}

/**
 * [12X]
 * changeSales()
 * Change company's sales up or down by a percentage
 * @param Company
 */
function changeSales(Company) {

    const delta = Company.actions.updateSales();

    console.log(`Sales changed ${delta}`);

    console.log(Company.actions.getCompanyStats());
}

/*
[1X]
fired()
 */
function fired(company, employee) {

    const iso = employee.actions.getISOAndReset();

    const cash = company.settings.get('sharePrice') * iso;

    employee.updateCash(cash);

    // terminate game
    console.log('You are fired. GAME OVER.');

    process.exit(0);
}

function ipo(company, employee) {
    // TODO - boost share price by 100X

    // TODO - sells shares and updates cash

    // TODO - terminates game

    console.log('ipo');
}

/*
 [3X]
offerJob()
 */
function offerJob(company, employee) {
    // TODO - prompt an offer
    // TODO - if accepts, cash out stock and change settings
    console.log('offerJob');
}

/*
[2X]
payCheck()
 */
function payCheck(Employee) {

    console.log('payCheck');

    Employee.actions.payCheck();

    console.log(Employee.actions.getStats());
}

/*
[2X]
payoutProfit()
splitStock()
purchaseStock()
 */
function payoutProfit(employee) {
    // TODO - increase cash

    console.log('payoutProfit');
}

/*
[1X]
promoted()
 */
function promoted(employee) {

    employee.actions.givePayRaise(10000);

    employee.actions.increaseISO(4000);

    console.log('promoted');
}

function purchaseStock(employee) {
    // TODO - prompt max stock options to buy and price

    // TODO - increase earned stock options

    // TODO - decrease cash

    console.log('purchaseStock');
}

function splitStock(company, employee) {
    // TODO - multiply total shares, iso and earned shares

    // TODO - divide share price

    console.log('splitStock');
}

/*
[2X]
vcFunding()
bankLoan()
 */
function vcFunding(company) {

    company.updatePricePerShare(2);

    company.updateSales();

    console.log('vcFunding');
}

export default function (Company, Employee) {
    return {
        changeSales () { return changeSales(Company); },

        acquiHire () { return acquiHire(Company, Employee); },

        ipo() { return ipo(Company, Employee); },

        bankrupt() { return bankrupt(Company, Employee); },

        vcFunding() { return vcFunding(Company); },

        bankLoan() { return bankLoan(Company); },

        promoted() { return promoted(Employee); },

        fired() { return fired(Employee); },

        payoutProfit() { return payoutProfit(Employee); },

        splitStock() { return splitStock(Company, Employee); },

        purchaseStock() { return purchaseStock(Employee); },

        payCheck() { return payCheck(Employee); },

        offerJob() { return offerJob(Company, Employee); },
    };
}
