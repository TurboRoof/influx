'use strict';

/* global process */
import readLine from 'readline';
import {Contents, Menu} from './constants/Contents';
import DiceMode from './constants/DiceMode';
import BoardFactory from './factories/BoardFactory';
import CompanyFactory from './factories/CompanyFactory';
import EmployeeFactory from './factories/EmployeeFactory';
import GameFactory from './factories/GameFactory';
import GameStatus from './constants/GameStatus';

// Initialize
const Company = CompanyFactory(6e6, .2, 4, 30e6, 25e6);
const Employee = EmployeeFactory(5e3, 1e3, 1, 4, 10, 80e3);
const Board = BoardFactory(Company, Employee, 24, 6, DiceMode.CLICK);
const Game = GameFactory(Board, Company, Employee,
    GameStatus.INITIALIZE);

const rl = readLine.createInterface(process.stdin, process.stdout);

console.log(Contents.startingMessage);

rl.setPrompt('player1> ');

rl.prompt();

rl.on('line', function(line) {
    switch(line.trim()) {
        case 'exit':
            console.log(Contents.exitMessage);
            process.exit(0);
            break;
        case 'menu':
            console.log(Menu);
            break;
        case 'roll':
            const n = Game.utils.rollDice();
            console.log(n);
            break;
        case 'settings':
            console.log('show settings');
            break;
        case 'stats':
            console.log('show cash and equity');
            break;
        default:
            console.log(Contents.commandNotFound);
            break;
    }
    rl.prompt();
}).on('close', function() {
    console.log(Contents.exitMessage);
    process.exit(0);
});
