'use strict';

import readLine from 'readline';
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

rl.setPrompt('ISO> ');
rl.prompt();

//console.log('Starting game Incentive Stock Options!');

rl.on('line', function(line) {
    switch(line.trim()) {
        case 'roll':
            const n = Game.utils.rollDice();
            console.log(n);
            break;
        default:
            //console.log('Say what? I might have heard `' + line.trim() + '`');
            break;
    }
    rl.prompt();
}).on('close', function() {
    //console.log('Have a great day!');
    process.exit(0);
});
