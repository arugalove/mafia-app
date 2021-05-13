import { checkWinCondition, isGameOver } from "./isGameOver";
import { mockGameState } from "./mocks";
import { Faction } from "./types";

describe("checkWinCondition", () => {
  it("returns the current game state if no win condition has been met", () => {
    const gameState = mockGameState;
    expect(checkWinCondition(gameState)).toBe(gameState);
  });
});

describe("isGameOver", () => {
  it("returns false if the game has not yet ended", () => {
    const gameState = mockGameState;
    expect(isGameOver(gameState)).toBe(false);
  });
  it("returns true if the Mafia won", () => {
    const gameState = { ...mockGameState, winner: Faction.Mafia };
    expect(isGameOver(gameState)).toBe(true);
  });
  it("returns true if the Village won", () => {
    const gameState = { ...mockGameState, winner: Faction.Village };
    expect(isGameOver(gameState)).toBe(true);
  });
});
