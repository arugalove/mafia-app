import { mockGameState } from './mocks';
import { endGame } from './endGame';
import { Faction, GameState } from './types';

describe("startGame", () => {
    it("ends the game if the Mafia have won", () => {
        const gameState: GameState = {
            ...mockGameState, winner: Faction.Mafia
        };
        const newGameState = endGame(gameState);
        expect(newGameState.isPlaying).toBe(false);
    })
    it("ends the game if the Village have won", () => {
        const gameState: GameState = {
            ...mockGameState, winner: Faction.Village
        };
        const newGameState = endGame(gameState);
        expect(newGameState.isPlaying).toBe(false);
    })
    it("returns the current game state if neither faction has won", () => {
        const gameState: GameState = mockGameState;
        expect(endGame(gameState)).toBe(gameState);
    })
})