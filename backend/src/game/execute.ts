import { GameState, Player } from './types';

export const execute = (gameState: GameState, condemned: Player): GameState => {
    const currentPlayers = gameState.players;
    const updatedCondemned = { ...condemned, alive: false };
    const updatedPlayers = { ...currentPlayers, condemned: updatedCondemned };
    return { ...gameState, players: updatedPlayers };
}