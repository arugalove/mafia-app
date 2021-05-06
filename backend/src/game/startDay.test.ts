import { mockGameState } from './mocks';
import { startDay } from './startDay';
import { GamePhase } from './types';

describe("startDay", () => {
    it("takes the game state from a newly started game and returns a new state for the current Day", () => {
        const gameState = { ...mockGameState, gamePhase: null };
        expect(startDay(gameState).gamePhase).toBe(GamePhase.Day);
    })
    it("takes the game state from the previous Night and returns a new state for the current Day", () => {
        const gameState = { ...mockGameState, gamePhase: GamePhase.Night };
        expect(startDay(gameState).gamePhase).toBe(GamePhase.Day);
    })
})