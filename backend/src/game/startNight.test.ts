import { mockGameState } from './mocks';
import { startNight } from './startNight';
import { GamePhase } from './types';

describe("startNight", () => {
    it("takes the game state from the previous Night and returns a new state for the current Day", () => {
        const gameState = { ...mockGameState, gamePhase: GamePhase.Day };
        expect(startNight(gameState).gamePhase).toBe(GamePhase.Night);
    })
})