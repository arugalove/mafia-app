import { GameState } from "./types";

export const actionsReceived = (gameState: GameState) => {
    const playersAlive = gameState.players.filter(player => player.alive === true);
    const numberOfPlayersWithActions = playersAlive.filter(player => player.action !== null).length;
    const numberOfActionsReceived = (
        Object.keys(gameState.actions)
            .map(targetActions => targetActions.length)
            .forEach
    if (numberOfPlayersWithActions === numberOfActionsReceived) return true;
    return false;
}