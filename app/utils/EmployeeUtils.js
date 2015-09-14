'use strict';

function getStats(employee) {
    let stats = '';

    employee.forEach((value, key) => {
        stats = stats.concat(`${key}: ${value}\n`);
    });

    return stats;
}

export default function (employee) {
    return {
        getStats () { return getStats(employee); },
    };
}
