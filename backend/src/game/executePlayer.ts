import { GameState, Player } from './types';

export const executePlayer = (gameState: GameState, player: Player): GameState => {
    const currentPlayers = gameState.players;
    const updatedPlayers = [
        ...currentPlayers.slice(0, currentPlayers.indexOf(player)),
        { ...player, alive: false },
        ...currentPlayers.slice(currentPlayers.indexOf(player) + 1)
    ];
    return { ...gameState, players: updatedPlayers };
}