import { GameState, Player } from './types';

export const addVote = (gameState: GameState, player: Player, target: number): GameState => {
    const currentPlayers = gameState.players;
    const updatedPlayers = [
        ...currentPlayers.slice(0, currentPlayers.indexOf(player)),
        { ...player, vote: target },
        ...currentPlayers.slice(currentPlayers.indexOf(player) + 1)
    ];
    return { ...gameState, players: updatedPlayers };
}