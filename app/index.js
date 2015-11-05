'use strict';

/* global process */

import readLine from 'readline';

import {Contents, Menu} from './constants/Contents';
import DiceMode from './constants/DiceMode';

// Create factories
import BoardFactory from './factories/BoardFactory';
import CompanyFactory from './factories/CompanyFactory';
import EmployeeFactory from './factories/EmployeeFactory';
import GameFactory from './factories/GameFactory';
import GameStatus from './constants/GameStatus';

const cli = readLine.createInterface(process.stdin, process.stdout);

console.log(Contents.startingMessage);

// Initialize
const Company = CompanyFactory(6e6, .2, 4, 30e6, 25e6);
const Employee = EmployeeFactory(5e3, 1e3, 1, 4, 10, 60e3, 0.2);
const Board = BoardFactory(Company, Employee, 24);
const Game = GameFactory(Board, Company, Employee);

function terminateGame () {

    console.log(Contents.exitMessage);

    process.exit(0);
}

console.log(Company.actions.getCompanyStats());

console.log(Employee.actions.getStats());

cli.setPrompt('start> ');

cli.prompt();

cli.on('line', function(line) {

    switch(line.trim()) {

        case 'accept offer':
            Board.actionCreators.offerJob(true);
            break;

        case 'reject offer':
            Board.actionCreators.offerJob(false);
            break;

        case 'buy 1000':
            Board.actionCreators.purchaseStock(1000);
            break;

        case 'cStats':
            console.log(Company.actions.getCompanyStats());
            break;

        case 'eStats':
            console.log(Employee.actions.getStats());
            break;

        case 'exit':

            terminateGame();
            break;

        case 'menu':

            console.log(Menu);
            break;

        case 'roll':

            const {diceNum, month, newIndex, prevSlot, prompt }
                = Game.utils.moveDate();

            Employee.actions.cronPayCheck(prevSlot, newIndex);

            Employee.actions.vestOptions(month);

            console.log(`Rolled ${diceNum}`);

            console.log(`Index ${newIndex} out of 24\n\n`);

            // pick card from stack and run it.
            Game.utils.pickCardFromStack(
              Board.actions[newIndex]
            )();

            cli.setPrompt(prompt);

            break;

        default:
            console.log(Contents.commandNotFound);
            break;
    }

    cli.prompt();

}).on('close', function() {
    terminateGame();
});
