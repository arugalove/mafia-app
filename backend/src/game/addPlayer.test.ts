import { addPlayer } from "./addPlayer";
import { mockGameState, mockPlayer } from "./mocks";

describe("addPlayer", () => {
  it("returns the current game state, if the game has already started", () => {
    const gameState = mockGameState;
    const player = mockPlayer;
    expect(addPlayer(gameState, player)).toBe(gameState);
  });
  it("takes in a game state and a player and returns a new game state with the player added, if the current game hasn't started yet", () => {
    const gameState = { ...mockGameState, isPlaying: false };
    const player = mockPlayer;
    const newGameState = {
      ...gameState,
      players: [...gameState.players, player],
    };
    expect(addPlayer(gameState, player)).toStrictEqual(newGameState);
  });
});
