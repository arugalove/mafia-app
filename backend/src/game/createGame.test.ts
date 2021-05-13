import { createGame } from "./createGame";
import { GameState } from "./types";

describe("createGame", () => {
  it("initializes the game state object", () => {
    const gameState: GameState = createGame();
    expect(gameState.id).toBe(1);
    expect(gameState.isPlaying).toBe(false);
    expect(gameState.winner).toBe(null);
    expect(gameState.errorMessage).toBe("");
    expect(gameState.announcements).toStrictEqual([]);
    expect(gameState.actions).toStrictEqual({});
    expect(gameState.players).toStrictEqual([]);
    expect(gameState.gamePhase).toBe(null);
  });
});
