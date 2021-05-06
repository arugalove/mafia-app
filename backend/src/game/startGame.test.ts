import { mockGameState } from './mocks';
import { startGame } from './startGame';
import { GameState } from './types';

describe("startGame", () => {
    it("initializes the game with the specified array of player objects", () => {
        const gameState: GameState = {
            ...mockGameState, isPlaying: true
        };
        const newGameState = startGame(gameState);
        expect(newGameState.isPlaying).toBe(true);
    })
})