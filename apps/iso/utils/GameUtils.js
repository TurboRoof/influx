'use strict';

/***********
 GAME UTILS
************/

function setInitialize() {
    // - splash intro
    // - prompt for settings
}

function startGame() {
    // - create company, employee and dashboard
    // - change gameStatus to playing
}

function terminateGame(company) {
    // - alert game over
    // - change gameStatus to game over
}

function rollDice(employee) {
 // - random roll 1-6
 // - update employeeIndex
 // - update month
 // - update year
 // - increase cash if passes over paycheck
 // - run the event that matches the index randomly picking a sub-event
}

export default function (board, company, employee) {
    return {
        setInitialize() {
            setInitialize();
        },
        startGame() {
            startGame();
        },
        terminateGame() {
            terminateGame(company);
        },
        rollDice() {
            rollDice(employee, board);
        },
    };
}
