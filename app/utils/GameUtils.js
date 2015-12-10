'use strict';

/***********
 GAME UTILS
************/

function calculateNewSlot(slots, activeSlot, diceNum) {

    const addition = activeSlot + diceNum;

    if (addition >= slots) {
        return {
            isNewMonth: true,
            newIndex: addition - slots,
        };
    }

    return {
        isNewMonth: false,
        newIndex: addition,
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

    const prevMonth = board.get('month');

    const newMonth = prevMonth + 1;

    if (isNewMonth) {
        board.set('month', newMonth);
    }

    return {
        diceNum,
        newIndex,
        month: newMonth,
        prompt: `slot: ${newIndex} / month: ${newMonth}>`,
        prevSlot: activeSlot,
    };
}

function pickCardFromStack(stack) {

    const cardIndex = Math.floor(Math.random() * stack.length);

    return stack[cardIndex];
}

// - random roll 1-max
function rollDice(max = 24) {
    return Math.ceil(Math.random() * max) || 1;
}

export default function (Board, Company, Employee) {
    return {
        calculateNewSlot,

        moveDate() { return moveDate(Board.board); },

        pickCardFromStack,

        rollDice,
    };
}
