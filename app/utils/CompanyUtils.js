'use strict';

function getSettings(settings) {
    let report = '';

    settings.forEach((value, key) => {
        report = report.concat(`${key}: ${value}\n`);
    });

    return report;
}

function calcSales(sales, direction, delta) {
    return sales + (direction * delta);
}

function calcDirection() {
    return Math.random() > 0.5 ? 1 : -1;
}

function calcRandomDelta(sales, max) {
    const maxSales = sales * max;

    return Math.floor(maxSales * Math.random());
}

function updateSales(settings) {
    const sales = settings.get('revenue');
    const direction = calcDirection();
    const delta = calcRandomDelta(sales, 0.3);

    settings.set('revenue', calcSales(sales, direction, delta));
}

export default function (settings) {
    return {
        calcDirection,
        calcRandomDelta,
        calcSales,
        getSettings () { return getSettings(settings); },
        updateSales () { return updateSales(settings); },
    };
}
