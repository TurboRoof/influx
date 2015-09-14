'use strict';

/***************
 * BOARD EVENTS
 ***************/

/*
[12X]
changeSales()
 */
function changeSales(company) {
    // - change company's sales up or down by a percentage
}

/*
[1X]
acquiHire()
ipo()
bankrupt()
 */
function acquiHire(company, employee) {
    // - sells shares and updates cash
    // - boost share price by 10X
    // - terminates game.

}
function ipo(company, employee) {
    // - boost share price by 100X
    // - sells shares and updates cash
    // - terminates game
}
function bankrupt(company, employee) {
    // - share price = 0
    // - terminates game
}

/*
[2X]
vcFunding()
bankLoan()
 */
function vcFunding(company) {
    // - increase share price
    // - increase revenues
}
function bankLoan(company) {
    // - increase share price
    // - increase expenses
}

/*
[1X]
promoted()
 */
function promoted(employee) {
    // - increase income
    // - increase iso
}

/*
[1X]
fired()
 */
function fired(employee) {
    // - cash out shares
    // - terminate game
}

/*
[2X]
payoutProfit()
splitStock()
purchaseStock()
 */
function payoutProfit(employee) {
    // - increase cash
}
function splitStock(company, employee) {
    // - multiply total shares, iso and earned shares
    // - divide share price
}
function purchaseStock(employee) {
    // - prompt max stock options to buy and price
    // - increase earned stock options
    // - decrease cash
}

/*
[2X]
payCheck()
 */
function payCheck(employee) {
    // - increase cash by 1/12 of income
}

/*
 [3X]
offerJob()
 */
function offerJob(company, employee) {
    // - prompt an offer
    // - if accepts, cash out stock and change settings
}

export default function (company, employee) {
    return {
        changeSales () { return changeSales(company); },

        acquiHire () { return acquiHire(company, employee); },

        ipo() { return ipo(company, employee); },

        bankrupt() { return bankrupt(company, employee); },

        vcFunding() { return vcFunding(company); },

        bankLoan() { return bankLoan(company); },

        promoted() { return promoted(employee); },

        fired() { return fired(employee); },

        payoutProfit() { return payoutProfit(employee); },

        splitStock() { return splitStock(company, employee); },

        purchaseStock() { return purchaseStock(employee); },

        payCheck() { return payCheck(employee); },

        offerJob() { return offerJob(company, employee); },
    };
}
