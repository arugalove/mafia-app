import { mockActions, mockGameState } from "./mocks";
import { actionsReceived } from "./actionsReceived";

describe("actionsReceived", () => {
  it("returns false if not all actions have yet been received", () => {
    const gameState = mockGameState;
    expect(actionsReceived(gameState)).toBe(false);
  });
  it("returns true if all actions have been received", () => {
    const gameState = { ...mockGameState, actions: mockActions };
    expect(actionsReceived(gameState)).toBe(true);
  });
});
