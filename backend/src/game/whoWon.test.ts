import { mockGameState } from "./mocks";
import { Faction } from "./types";
import { whoWon } from "./whoWon";

describe("whoWon", () => {
  it("returns the winning faction if the game has ended", () => {
    const gameState = { ...mockGameState, winner: Faction.Mafia };
    expect(whoWon(gameState)).toBe(Faction.Mafia);
  });
  it("returns null if no winner has been decided yet", () => {
    const gameState = mockGameState;
    expect(whoWon(gameState)).toBe(null);
  });
});
