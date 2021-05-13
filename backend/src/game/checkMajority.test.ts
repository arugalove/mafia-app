import { checkMajority } from "./checkMajority";
import { mockGameState, mockVotingMajority } from "./mocks";

describe("checkMajority", () => {
  it("returns false if no voting majority has been reached", () => {
    const gameState = mockGameState;
    expect(checkMajority(gameState)).toBe(false);
  });
  it("returns true if a majority of living players have voted to execute the same player", () => {
    const votingMajority = mockVotingMajority;
    const gameState = { ...mockGameState, players: votingMajority };
    expect(checkMajority(gameState)).toBe(true);
  });
});
