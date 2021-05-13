import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import { socket } from '../../socketClient';
import { GameState } from './types';
import { MESSAGE_CONNECTED, MESSAGE_GAME_UPDATE } from "../../constants";
import { AppPure } from "./AppPure";

export const App = () => {
    const [currentPlayerId, setCurrentPlayerId] = useState<string>("");
    const [gameState, setGameState] = useState<GameState | null>(null);
    const [usernameSelected, setUsernameSelected] = useState<boolean>(false);

    // When this component mounts, try to retrieve a player ID from localStorage.
    // Create one if one does not exist.
    useEffect(() => {
        let playerId = localStorage.getItem("mafiaPlayerId");

        if (!playerId) {
            playerId = uuidv4();
            localStorage.setItem("mafiaPlayerId", playerId as string);
        }

        setCurrentPlayerId(playerId as string);
    }, []);

    // When this component mounts, start listening for updates to the game
    // state. The user gets sent the state once on initial connection and then
    // again any time the state on the server is updated.
    useEffect(() => {
        socket.on(MESSAGE_CONNECTED, (data) => setGameState(data));
        socket.on(MESSAGE_GAME_UPDATE, (data) => setGameState(data));
        return () => {
            socket.off(MESSAGE_CONNECTED);
            socket.off(MESSAGE_GAME_UPDATE);
        }
    }, []);

    return <AppPure gameState={gameState} currentPlayerId={currentPlayerId} />
}
