import { GameState } from "./types";

export const actionsReceived = (gameState: GameState) => {
    const playersAlive = gameState.players.filter(player => player.alive === true);
    const numberOfPlayersWithActions = playersAlive.filter(player => player.action !== null).length;
    // I think JavaScript makes me write this boilerplate--why doesn't .reduce just do this for me?!
    // reducer function takes the currentValue and adds it to the accumulator 
    const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;
    const numberOfActionsReceived = (
        Object.keys(gameState.actions)
            .map(targetActions => targetActions.length)
            .reduce(reducer)
    ) // ugh this sucks I'm sorry future-self
    if (numberOfPlayersWithActions === numberOfActionsReceived) return true;
    return false;
}