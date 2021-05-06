import { createGame } from './createGame';
import { GameState } from './types';

describe("createGame", () => {
    it("initializes the game state object", () => {
        const gameState: GameState = createGame();
        expect(gameState.id).toBe(1);
        expect(gameState.isPlaying).toBe(true);
        expect(gameState.winner).toBe(null);
        expect(gameState.errorMessage).toBe('');
        expect(gameState.announcements).toBe([]);
        expect(gameState.actions).toBe({});
        expect(gameState.players).toBe([]);
        expect(gameState.gamePhase).toBe(null);
    })
})