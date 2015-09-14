'use strict';

import keyMirror from 'keymirror';

const GameStatus = keyMirror({
    INITIALIZE: null,
    PLAYING: null,
    GAME_OVER: null,
});

export default GameStatus;
