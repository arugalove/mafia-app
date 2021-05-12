import { Action, GameState } from './types';

export const addAction = (gameState: GameState, action: Action): GameState => {
    const target: string = action.playerId.toString();
    const currentActionArray = gameState.actions.target || [];
    const updatedActions = {
        ...gameState.actions,
        [target]: [...currentActionArray, action]
    };
    return { ...gameState, actions: updatedActions };
}