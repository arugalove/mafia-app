import { GamePhase, GameState } from './types'

export const startDay = (gameState: GameState): GameState => {
    return { ...gameState, gamePhase: GamePhase.Day }
}