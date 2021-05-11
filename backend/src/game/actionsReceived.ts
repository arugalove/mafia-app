import { GameState } from "./types";

export const actionsReceived = (gameState: GameState) => {
    const playersAlive = gameState.players.filter(player => player.alive === true);
    const numberOfPlayersWithActions = playersAlive.filter(player => player.action !== null).length;
    let sum: number = 0; // ask Liv how to use .reduce() to do this...
    Object.values(gameState.actions)
        .map(arrayOfActions => arrayOfActions.length)
        .forEach(numberOfActions => sum = sum + numberOfActions)
    if (numberOfPlayersWithActions === sum) return true;
    return false;
}