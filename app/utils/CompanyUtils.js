'use strict';

function calcDirection() {
    return Math.random() > 0.5 ? 1 : -1;
}

function calcRandomDelta(sales, max) {

    const maxSales = sales * max;

    return Math.floor(maxSales * Math.random());
}

function calcSales(sales, direction, delta) {

    return sales + (direction * delta);
}

function getCompanyStats(stats) {

    let report = '';

    stats.forEach((value, key) => {

        report = report.concat(`${key}: ${value}\n`);

    });

    return report;
}

function updateExpenses(stats, factor) {

    const expenses =
        Math.round( stats.get('expenses') * factor );

    stats.set('expenses', expenses);
}

function updatePricePerShare(stats, factor) {

    const sharePrice =
        Math.round( stats.get('sharePrice') * factor );

    stats.set('sharePrice', sharePrice);

    return sharePrice;
}

function updateSales(stats, salesDirection) {

    const sales = stats.get('revenue');

    const direction = salesDirection || calcDirection();

    const delta = calcRandomDelta(sales, 0.3);

    stats.set('revenue', calcSales(sales, direction, delta));

    return delta;
}

export default function (stats) {
    return {
        calcDirection,

        calcRandomDelta,

        calcSales,

        getCompanyStats () { return getCompanyStats(stats); },

        updateExpenses (factor) { return updateExpenses(stats, factor); },

        updateSales () { return updateSales(stats); },

        updatePricePerShare (factor) { return updatePricePerShare(stats, factor); },
    };
}
