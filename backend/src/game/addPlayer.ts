import { GameState, Player } from './types'

export const addPlayer = (gameState: GameState, player: Player): GameState => {
    if (gameState.isPlaying) return gameState;
    return { ...gameState, players: [...gameState.players, player] }
}