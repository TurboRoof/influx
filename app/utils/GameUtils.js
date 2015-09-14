'use strict';

/***********
 GAME UTILS
************/

// - random roll 1-max
function rollDice(max = 6) {
    return Math.ceil(Math.random() * max);
}

function calculateNewSlot(slots, activeSlot, diceNum) {
    const addition = activeSlot + diceNum;

    if (addition >= slots) {
        return {
            newIndex: addition - slots,
            isNewMonth: true,
        };
    }

    return {
        newIndex: addition,
        isNewMonth: false,
    };
}

// - update month
// - update year
// - increase cash if passes over paycheck
// - run the event that matches the index randomly picking a sub-event
function moveDate(board) {
    const diceNum = rollDice();
    const activeSlot = board.get('activeSlot');
    const slots = board.get('slots');
    const {newIndex, isNewMonth} =
        calculateNewSlot(slots, activeSlot, diceNum);

    board.set('activeSlot', newIndex);

    const month = board.get('month');
    if (isNewMonth) {
        board.set('month', month + 1);
    }

    return {
        prompt: `slot: ${newIndex} / month: ${month}>`,
        diceNum,
    };
}

export default function (Board, Company, Employee) {
    return {
        calculateNewSlot,
        rollDice,
        moveDate() { return moveDate(Board.board); },
    };
}
