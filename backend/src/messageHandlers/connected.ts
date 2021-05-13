import { Socket } from "socket.io";

import logger from "../logger";
import { get, set } from "../redis";
import { GAME_ID, MESSAGE_CONNECTED } from '../constants';
import { createGame } from "../game/createGame";

export const connected = (io: Socket) => {
    (async () => {
        // let gameState = await get(GAME_ID);
        let gameState = createGame();

        // if (!gameState) {
        //     gameState = createGame();
        //     await set(gameState);
        // }

        logger.info(`${MESSAGE_CONNECTED} ${gameState}`);
        io.emit(MESSAGE_CONNECTED, gameState);
    })();
}
