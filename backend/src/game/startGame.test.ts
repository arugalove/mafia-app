import { mockGameState } from "./mocks";
import { startGame } from "./startGame";
import { GameState } from "./types";

describe("startGame", () => {
  it("starts the game...", () => {
    const gameState: GameState = {
      ...mockGameState,
      isPlaying: false,
    };
    const newGameState = startGame(gameState);
    expect(newGameState.isPlaying).toBe(true);
  });
});
