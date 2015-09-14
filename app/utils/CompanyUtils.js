'use strict';

function getSettings(company) {
    let settings = '';

    company.forEach((value, key) => {
        settings = settings.concat(`${key}: ${value}\n`);
    });

    return settings;
}

export default function (company) {
    return {
        getSettings () { return getSettings(company); },
    };
}
