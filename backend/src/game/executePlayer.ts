import { GameState, Player } from './types';

export const executePlayer = (gameState: GameState, player: Player): GameState => {
    const currentPlayers = gameState.players;
    const executedPlayer = { ...player, alive: false };
    const updatedPlayers = { ...currentPlayers, condemned: executedPlayer };
    return { ...gameState, players: updatedPlayers };
}