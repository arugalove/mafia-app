import { GameState } from './types'

export const createGame = (): GameState => {
    return {
        id: 1,
        isPlaying: false,
        winner: null,
        players: [],
        actions: {},
        announcements: [],
        errorMessage: '',
        gamePhase: null
    }
}