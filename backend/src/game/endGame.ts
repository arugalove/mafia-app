import { GameState } from './types'

export const endGame = (gameState: GameState): GameState => {
    return { ...gameState, isPlaying: false }
}